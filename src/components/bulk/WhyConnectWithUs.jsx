
import React, { useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";

import {
  ArrowUpRight,
  MapPin,
  PackageSearch,
  Handshake,
} from "lucide-react";

import { LanguageContext } from "../../context/LanguageContext";

const ease = [0.22, 1, 0.36, 1];

const WHATSAPP_NUMBER = "919922604685";

// ==========================================
// BILINGUAL CONTENT
// ==========================================

const content = {
  en: {
    eyebrow: "WHY CONNECT WITH US?",

    heading: "Explore Business Opportunities",
    accent: "with Maya’s LALA.",

    description:
      "Our signature Solapuri Shenga Chutney represents a distinctive regional flavour that can appeal to customers looking for traditional Maharashtrian food products.",

    description2:
      "We welcome enquiries from businesses interested in learning more about our products, availability and commercial requirements.",

    signature: "Our Signature Speciality",

    productName: "Solapuri Shenga Chutney",

    origin: "Solapur, Maharashtra",

    highlights: [
      {
        title: "Distinctive Regional Flavour",
        description:
          "Inspired by traditional Maharashtrian food culture.",
      },
      {
        title: "Product & Quantity Enquiries",
        description:
          "Explore product information and available quantities.",
      },
      {
        title: "Business Opportunities",
        description:
          "Discuss your specific commercial requirements.",
      },
    ],

    cta: "Discuss Your Requirements",

    whatsappMessage:
      "Hello Maya’s LALA Food Products! I would like to discuss your products, available quantities and potential business opportunities.",
  },

  mr: {
    eyebrow: "आमच्याशी संपर्क का साधावा?",

    heading: "मायाज लालासोबत",
    accent: "व्यावसायिक संधी जाणून घ्या.",

    description:
      "आमची खास सोलापुरी शेंगा चटणी ही सोलापूरच्या वैशिष्ट्यपूर्ण खाद्यपरंपरेची ओळख आहे. पारंपरिक महाराष्ट्रीयन खाद्यपदार्थांच्या शोधात असलेल्या ग्राहकांना ही चव आकर्षित करू शकते.",

    description2:
      "आमची उत्पादने, त्यांची उपलब्धता आणि व्यावसायिक गरजांबाबत अधिक माहिती घेऊ इच्छिणाऱ्या व्यावसायिकांच्या चौकशीचे आम्ही स्वागत करतो.",

    signature: "आमचे खास उत्पादन",

    productName: "सोलापुरी शेंगा चटणी",

    origin: "सोलापूर, महाराष्ट्र",

    highlights: [
      {
        title: "वैशिष्ट्यपूर्ण प्रादेशिक चव",
        description:
          "महाराष्ट्राच्या पारंपरिक खाद्यसंस्कृतीतून प्रेरित.",
      },
      {
        title: "उत्पादने आणि उपलब्ध प्रमाण",
        description:
          "उत्पादनांची माहिती आणि उपलब्ध प्रमाण जाणून घ्या.",
      },
      {
        title: "व्यावसायिक संधी",
        description:
          "तुमच्या व्यावसायिक गरजांबाबत आमच्याशी चर्चा करा.",
      },
    ],

    cta: "तुमच्या गरजांबाबत चर्चा करा",

    whatsappMessage:
      "नमस्कार! मला मायाज लाला फूड प्रॉडक्ट्सची उत्पादने, उपलब्ध प्रमाण आणि व्यावसायिक संधींबाबत चर्चा करायची आहे.",
  },
};

const highlightIcons = [
  MapPin,
  PackageSearch,
  Handshake,
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function WhyConnectWithUs() {
  const { language } = useContext(LanguageContext);

  const t = content[language === "mr" ? "mr" : "en"];

  const reducedMotion = useReducedMotion();

  const reveal = (delay = 0, y = 20) => ({
    initial: reducedMotion
      ? false
      : { opacity: 0, y },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.1,
    },

    transition: {
      duration: reducedMotion ? 0 : 0.75,
      delay: reducedMotion ? 0 : delay,
      ease,
    },
  });

  // ========================================
  // ENQUIRY ACTION
  // ========================================

  const handleEnquiry = () => {
    const form = document.getElementById("bulk-enquiry");

    if (form) {
      form.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });

      return;
    }

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        t.whatsappMessage
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="why-connect-with-us"
      aria-labelledby="why-connect-heading"
      className="
        relative isolate overflow-hidden
        border-y border-[#E8D9C9]
        bg-[#FBF6EF]
        py-10 sm:py-12 lg:py-14
      "
    >

      {/* ======================================
          LIGHT PREMIUM BACKGROUND
      ====================================== */}

      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-30
          bg-[linear-gradient(110deg,#F4E6D6_0%,#FBF6EF_40%,#FFFBF7_100%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-20 top-0 -z-20
          h-[420px] w-[420px]
          rounded-full bg-[#E7CFB0]/30
          blur-[90px]
        "
      />

      {/* SUBTLE GOLD LINE ART */}

      <svg
        viewBox="0 0 350 500"
        fill="none"
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-40 -top-24 -z-10
          h-[550px] w-[380px]
          opacity-[0.15]
        "
      >
        {Array.from({ length: 14 }, (_, i) => (
          <path
            key={i}
            d={`
              M ${i * 15} -10
              C 400 120, -100 320, ${i * 15 + 100} 520
            `}
            stroke="#C9A16C"
            strokeWidth="1"
          />
        ))}
      </svg>

      <div className="
        mx-auto grid max-w-[1350px]
        items-center gap-8
        px-5 sm:px-8
        lg:grid-cols-[0.85fr_1.15fr]
        lg:gap-14 lg:px-10
        xl:gap-20
      ">

        {/* ====================================
            LEFT — OPEN PRODUCT SHOWCASE
        ==================================== */}

        <div className="
          relative order-2 min-w-0
          lg:order-1
        ">

          <div className="
            relative isolate mx-auto
            flex min-h-[330px]
            max-w-[470px]
            flex-col items-center
            justify-center
            sm:min-h-[400px]
            lg:min-h-[420px]
          ">

            {/* SOFT ARCH BACKGROUND */}

            <motion.div
              aria-hidden="true"
              initial={
                reducedMotion
                  ? false
                  : { scale: 0.94 }
              }
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: reducedMotion ? 0 : 1,
                ease,
              }}
              className="
                absolute bottom-[55px]
                left-[10%] right-[10%]
                top-6 -z-20
                rounded-t-full rounded-b-[12px]
                bg-[linear-gradient(180deg,#E8D1B5_0%,#F5E8D8_65%,#F8EFE5_100%)]
              "
            />

            {/* ARCH OUTLINE */}

            <div
              aria-hidden="true"
              className="
                absolute bottom-[64px]
                left-[13%] right-[13%]
                top-9 -z-10
                rounded-t-full rounded-b-[10px]
                border border-[#C9A16C]/60
              "
            />

            {/* BACKGROUND WATERMARK */}

            <span
              aria-hidden="true"
              className="
                pointer-events-none absolute
                inset-x-0 top-[28%] -z-10
                select-none text-center
                font-['Poppins']
                text-[90px] font-black
                leading-none tracking-[-5px]
                text-[#843642]/[0.065]
                sm:text-[125px]
              "
            >
              LALA
            </span>

            {/* FLOATING DECORATIVE DIAMONDS */}

            <div
              aria-hidden="true"
              className="
                absolute left-[7%] top-[30%]
                h-3 w-3 rotate-45
                border border-[#C9A16C]
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute right-[8%] top-[21%]
                h-2 w-2 rotate-45
                bg-[#C9A16C]/60
              "
            />

            {/* SIGNATURE LABEL */}

            <motion.div
              {...reveal(0.1, 10)}
              className="
                relative z-20 mb-1
                inline-flex items-center gap-2
                rounded-full border border-[#DFC5A7]
                bg-[#FFFBF7]
                px-4 py-2
                shadow-sm
              "
            >

              <span className="
                h-[6px] w-[6px]
                rotate-45 bg-[#C9A16C]
              "/>

              <span className="
                text-[10px] font-semibold
                text-[#843642]
                sm:text-[12px]
              ">
                {t.signature}
              </span>

            </motion.div>

            {/* ORIGINAL PRODUCT IMAGE */}

            <div className="
              relative flex h-[245px]
              w-full items-center justify-center
              sm:h-[300px]
              lg:h-[325px]
            ">

              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute
                  bottom-3 left-[22%] right-[22%]
                  h-6 rounded-full
                  bg-[#633B40]/20 blur-xl
                "
              />

              <motion.img
                src="/p1.png"
                alt={t.productName}
                loading="lazy"
                decoding="async"
                initial={
                  reducedMotion
                    ? false
                    : { y: 22, scale: 0.95 }
                }
                whileInView={{
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true }}
                whileHover={
                  reducedMotion
                    ? undefined
                    : { y: -7, scale: 1.035 }
                }
                transition={{
                  duration: reducedMotion ? 0 : 0.85,
                  ease,
                }}
                className="
                  relative z-10
                  h-[235px] w-[78%]
                  object-contain
                  drop-shadow-[0_15px_18px_rgba(99,59,64,0.16)]
                  sm:h-[285px]
                  lg:h-[310px]
                "
              />

            </div>

            {/* GOLD HORIZONTAL BASE */}

            <motion.div
              aria-hidden="true"
              initial={
                reducedMotion
                  ? false
                  : { scaleX: 0 }
              }
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: reducedMotion ? 0 : 0.9,
                ease,
              }}
              className="
                h-[2px] w-[82%]
                bg-gradient-to-r
                from-transparent
                via-[#C9A16C]
                to-transparent
              "
            />

            {/* PRODUCT CAPTION */}

            <motion.div
              {...reveal(0.18, 10)}
              className="
                relative mt-4 text-center
              "
            >

              <h3 className="
                font-['Poppins']
                text-[18px] font-semibold
                leading-relaxed
                text-[#633B40]
                sm:text-[22px]
              ">
                {t.productName}
              </h3>

              <div className="
                mt-1.5 flex items-center
                justify-center gap-1.5
              ">

                <MapPin
                  size={14}
                  strokeWidth={1.7}
                  className="text-[#843642]"
                  aria-hidden="true"
                />

                <span className="
                  text-[11px] font-medium
                  text-[#96704A]
                  sm:text-[12px]
                ">
                  {t.origin}
                </span>

              </div>

            </motion.div>

          </div>

        </div>

        {/* ====================================
            RIGHT — CONTENT
        ==================================== */}

        <div className="
          relative order-1 min-w-0
          lg:order-2
        ">

          {/* EYEBROW */}

          <motion.div
            {...reveal()}
            className="
              mb-3 flex items-center gap-3
            "
          >

            <span className="
              h-[2px] w-8 shrink-0
              bg-[#C9A16C]
            "/>

            <span className="
              text-[10px] font-bold
              uppercase tracking-[1.8px]
              text-[#96704A]
              sm:text-[11px]
            ">
              {t.eyebrow}
            </span>

          </motion.div>

          {/* HEADING */}

          <motion.h2
            key={language}
            {...reveal(0.06)}
            id="why-connect-heading"
            className="
              font-['Poppins']
              text-[27px] font-semibold
              leading-[1.35]
              tracking-[-0.6px]
              text-[#4D3034]
              sm:text-[32px]
              lg:text-[35px]
              xl:text-[38px]
            "
          >

            {t.heading}

            <span className="
              block text-[#843642]
            ">
              {t.accent}
            </span>

          </motion.h2>

          {/* GOLD ACCENT */}

          <motion.div
            aria-hidden="true"
            initial={
              reducedMotion
                ? false
                : { scaleX: 0 }
            }
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: reducedMotion ? 0 : 0.8,
              ease,
            }}
            className="
              my-4 h-[2px] w-12
              origin-left bg-[#C9A16C]
            "
          />

          {/* DESCRIPTION */}

          <motion.p
            {...reveal(0.13)}
            className="
              max-w-[650px]
              text-[14px] leading-[1.85]
              text-[#655149]
              sm:text-[15px]
            "
          >
            {t.description}
          </motion.p>

          <motion.p
            {...reveal(0.2)}
            className="
              mt-2.5 max-w-[650px]
              text-[13px] leading-[1.85]
              text-[#746258]
              sm:text-[14px]
            "
          >
            {t.description2}
          </motion.p>

          {/* ==================================
              PREMIUM OPEN HIGHLIGHTS
          ================================== */}

          <div className="
            mt-5 border-t
            border-[#E4D3C1]
            sm:mt-6
          ">

            {t.highlights.map((item, index) => {
              const Icon = highlightIcons[index];

              return (
                <motion.div
                  key={index}
                  {...reveal(0.12 + index * 0.08)}
                  className="
                    group relative flex
                    items-center gap-3
                    border-b border-[#E4D3C1]
                    py-3 sm:gap-4
                  "
                >

                  {/* LIGHT ICON BLOCK */}

                  <div className="
                    relative flex h-11 w-11
                    shrink-0 items-center
                    justify-center
                    rounded-[10px]
                    border border-[#E2CDB5]
                    bg-[#F3E5D4]
                    text-[#843642]
                    transition-colors duration-300
                    group-hover:border-[#C9A16C]
                    group-hover:bg-[#EAD6BE]
                    sm:h-12 sm:w-12
                  ">

                    <Icon
                      size={23}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />

                    <span
                      aria-hidden="true"
                      className="
                        absolute -bottom-0.5
                        -right-0.5 h-[6px] w-[6px]
                        rounded-[1px]
                        bg-[#C9A16C]
                      "
                    />

                  </div>

                  {/* INFORMATION */}

                  <div className="
                    min-w-0 flex-1
                  ">

                    <h3 className="
                      text-[13px] font-semibold
                      leading-relaxed
                      text-[#633B40]
                      sm:text-[15px]
                    ">
                      {item.title}
                    </h3>

                    <p className="
                      mt-0.5 text-[12px]
                      leading-[1.7]
                      text-[#806E65]
                      sm:text-[13px]
                    ">
                      {item.description}
                    </p>

                  </div>

                  {/* EDITORIAL NUMBER */}

                  <span
                    aria-hidden="true"
                    className="
                      hidden shrink-0
                      font-['Poppins']
                      text-[26px] font-light
                      text-[#C9A16C]/50
                      sm:block
                    "
                  >
                    0{index + 1}
                  </span>

                  {/* HOVER LINE */}

                  <span
                    aria-hidden="true"
                    className="
                      absolute bottom-0 left-0
                      h-px w-0 bg-[#C9A16C]
                      transition-all duration-500
                      group-hover:w-full
                      motion-reduce:transition-none
                    "
                  />

                </motion.div>
              );
            })}

          </div>

          {/* ==================================
              CTA BUTTON
          ================================== */}

          <motion.div
            {...reveal(0.3)}
            className="mt-5 sm:mt-6"
          >

            <motion.button
              type="button"
              onClick={handleEnquiry}
              whileHover={
                reducedMotion
                  ? undefined
                  : { y: -3 }
              }
              whileTap={
                reducedMotion
                  ? undefined
                  : { scale: 0.98 }
              }
              className="
                group relative inline-flex
                max-w-full items-center
                gap-5 overflow-hidden
                rounded-[8px]
                bg-[#843642]
                py-2.5 pl-4 pr-2.5
                text-left text-[12px]
                font-semibold text-white
                shadow-[0_7px_20px_rgba(132,54,66,0.15)]
                transition-colors duration-300
                hover:bg-[#71303A]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#843642]
                focus-visible:ring-offset-4
                sm:text-[14px]
              "
            >

              <span className="relative z-10">
                {t.cta}
              </span>

              <span className="
                relative z-10 flex
                h-9 w-9 shrink-0
                items-center justify-center
                rounded-[5px]
                bg-[#F1C98E]
                text-[#843642]
              ">

                <ArrowUpRight
                  size={19}
                  strokeWidth={1.7}
                  className="
                    transition-transform duration-300
                    motion-safe:group-hover:translate-x-0.5
                    motion-safe:group-hover:-translate-y-0.5
                  "
                />

              </span>

              {/* BUTTON SHINE */}

              <span className="
                pointer-events-none absolute
                inset-y-0 -left-full
                w-1/2 skew-x-[-20deg]
                bg-white/10
                transition-all duration-700
                motion-safe:group-hover:left-[130%]
              "/>

            </motion.button>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
