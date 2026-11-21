
import React, { useContext } from "react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  Building2,
  MapPin,
  Package,
  FileText,
} from "lucide-react";

import { LanguageContext } from "../../context/LanguageContext";

const ease = [0.22, 1, 0.36, 1];

// ==========================================
// BILINGUAL CONTENT
// ==========================================

const content = {
  en: {
    eyebrow: "BUSINESS & PRODUCT INFORMATION",

    heading: "Product & Business",
    accent: "Information.",

    description:
      "Maya’s LALA Food Products operates under Siddhalaxmi Mahila Gruh Udyog, Solapur.",

    brandLabel: "OUR BRAND",
    brandName: "Maya’s LALA Food Products",

    businessLabel: "BUSINESS ENTITY",
    businessName: "Siddhalaxmi Mahila Gruh Udyog",

    locationLabel: "BASED IN",
    location: "Solapur, Maharashtra, India",

    registrationTitle:
      "Registration & Product Details",

    registrationDescription:
      "Relevant business and food product registration details are provided on the product packaging.",

    note:
      "Please refer to the respective product label for product-specific information.",
  },

  mr: {
    eyebrow: "व्यवसाय आणि उत्पादनाचा तपशील",

    heading: "उत्पादन आणि",
    accent: "व्यवसायाची माहिती.",

    description:
      "मायाज लाला फूड प्रॉडक्ट्स हा ब्रँड सोलापूर येथील सिद्धलक्ष्मी महिला गृह उद्योगांतर्गत कार्यरत आहे.",

    brandLabel: "आमचा ब्रँड",
    brandName: "मायाज लाला फूड प्रॉडक्ट्स",

    businessLabel: "व्यवसायाचे नाव",
    businessName: "सिद्धलक्ष्मी महिला गृह उद्योग",

    locationLabel: "व्यवसायाचे ठिकाण",
    location: "सोलापूर, महाराष्ट्र, भारत",

    registrationTitle:
      "नोंदणी आणि उत्पादनाची माहिती",

    registrationDescription:
      "व्यवसाय आणि खाद्य उत्पादनांच्या संबंधित नोंदणीची माहिती उत्पादनाच्या पॅकिंगवर दिलेली आहे.",

    note:
      "विशिष्ट उत्पादनाच्या माहितीसाठी संबंधित उत्पादनाचे लेबल पाहावे.",
  },
};

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function ComplianceInformation() {
  const { language } = useContext(LanguageContext);

  const t = content[language === "mr" ? "mr" : "en"];

  const reducedMotion = useReducedMotion();

  const reveal = (delay = 0, y = 18) => ({
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
      duration: reducedMotion ? 0 : 0.7,
      delay: reducedMotion ? 0 : delay,
      ease,
    },
  });

  const details = [
    {
      Icon: Package,
      label: t.brandLabel,
      value: t.brandName,
    },
    {
      Icon: Building2,
      label: t.businessLabel,
      value: t.businessName,
      featured: true,
    },
    {
      Icon: MapPin,
      label: t.locationLabel,
      value: t.location,
    },
  ];

  return (
    <section
      id="compliance-information"
      aria-labelledby="compliance-heading"
      className="
        relative isolate overflow-hidden
        border-t border-[#E9DBCD]
        bg-[#FFFBF7]
        py-9 sm:py-12 lg:py-14
      "
    >

      {/* ======================================
          SOFT PREMIUM BACKGROUND
      ====================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          -z-20
          bg-[radial-gradient(ellipse_at_50%_50%,#F4E6D6_0%,#FFFBF7_75%)]
        "
      />

      {/* LEFT DECORATIVE LINE PATTERN */}

      <svg
        viewBox="0 0 240 420"
        fill="none"
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-24 top-0 -z-10
          h-full w-[260px]
          opacity-[0.12]
          sm:-left-16
        "
      >
        {Array.from({ length: 12 }, (_, i) => (
          <path
            key={i}
            d={`M ${i * 12 - 100} -20
                Q 300 100 ${i * 12 - 30} 440`}
            stroke="#C9A16C"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* RIGHT DECORATIVE LINE PATTERN */}

      <svg
        viewBox="0 0 240 420"
        fill="none"
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-24 top-0 -z-10
          h-full w-[260px]
          -scale-x-100 opacity-[0.12]
          sm:-right-16
        "
      >
        {Array.from({ length: 12 }, (_, i) => (
          <path
            key={i}
            d={`M ${i * 12 - 100} -20
                Q 300 100 ${i * 12 - 30} 440`}
            stroke="#C9A16C"
            strokeWidth="1"
          />
        ))}
      </svg>

      <div className="
        mx-auto max-w-[1250px]
        px-4 sm:px-8 lg:px-10
      ">

        {/* ====================================
            CENTERED SECTION HEADING
        ==================================== */}

        <motion.div
          {...reveal()}
          className="
            mx-auto max-w-[850px]
            text-center
          "
        >

          <div className="
            mb-3 flex items-center
            justify-center gap-3
          ">

            <span className="
              h-px w-6 shrink-0
              bg-[#C9A16C] sm:w-10
            " />

            <span className="
              text-[10px] font-bold
              uppercase tracking-[1.8px]
              text-[#96704A]
              sm:text-[11px]
            ">
              {t.eyebrow}
            </span>

            <span className="
              h-px w-6 shrink-0
              bg-[#C9A16C] sm:w-10
            " />

          </div>

          <h2
            id="compliance-heading"
            className="
              font-['Poppins']
              text-[26px] font-semibold
              leading-[1.35]
              tracking-[-0.5px]
              text-[#4D3034]
              sm:text-[32px]
              lg:text-[35px]
            "
          >
            {t.heading}{" "}

            <span className="text-[#843642]">
              {t.accent}
            </span>

          </h2>

          <p className="
            mx-auto mt-3 max-w-[720px]
            text-[13px] leading-[1.85]
            text-[#746258]
            sm:text-[14px]
          ">
            {t.description}
          </p>

        </motion.div>

        {/* ====================================
            ANIMATED DECORATIVE DIVIDER
        ==================================== */}

        <motion.div
          aria-hidden="true"
          initial={
            reducedMotion ? false : { scaleX: 0 }
          }
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: reducedMotion ? 0 : 1,
            ease,
          }}
          className="
            mx-auto my-6 flex
            max-w-[260px] items-center
            justify-center gap-2
            sm:my-8
          "
        >

          <span className="
            h-px flex-1
            bg-gradient-to-r
            from-transparent to-[#C9A16C]
          " />

          <span className="
            h-[5px] w-[5px]
            rotate-45 bg-[#C9A16C]
          " />

          <span className="
            h-[8px] w-[8px]
            rotate-45 border
            border-[#C9A16C]
          " />

          <span className="
            h-[5px] w-[5px]
            rotate-45 bg-[#C9A16C]
          " />

          <span className="
            h-px flex-1
            bg-gradient-to-l
            from-transparent to-[#C9A16C]
          " />

        </motion.div>

        {/* ====================================
            PREMIUM BUSINESS IDENTITY
        ==================================== */}

        <div className="
          relative grid items-stretch
          overflow-hidden
          rounded-[16px]
          border border-[#E4D2BE]
          bg-[#FFFCF8]
          sm:rounded-[20px]
          md:grid-cols-[1fr_1.25fr_1fr]
        ">

          {details.map((item, index) => {
            const Icon = item.Icon;

            return (
              <motion.div
                key={index}
                {...reveal(index * 0.1, 12)}
                className={`
                  group relative isolate
                  flex min-w-0 items-center
                  gap-4 overflow-hidden
                  px-5 py-5
                  md:flex-col md:justify-center
                  md:gap-3 md:px-5 md:py-7
                  md:text-center
                  ${
                    item.featured
                      ? "bg-[#843642] text-white"
                      : "text-[#843642]"
                  }
                `}
              >

                {/* CENTER FEATURED BACKGROUND */}

                {item.featured && (
                  <>

                    <div
                      aria-hidden="true"
                      className="
                        absolute inset-0 -z-20
                        bg-[linear-gradient(130deg,#72303B_0%,#924650_100%)]
                      "
                    />

                    <Building2
                      aria-hidden="true"
                      size={160}
                      strokeWidth={0.7}
                      className="
                        pointer-events-none absolute
                        -bottom-10 -right-8
                        -z-10 rotate-[-12deg]
                        text-white/[0.06]
                      "
                    />

                    <div className="
                      absolute inset-x-0 top-0
                      h-[2px]
                      bg-gradient-to-r
                      from-transparent
                      via-[#F1C98E]
                      to-transparent
                    " />

                  </>
                )}

                {/* CUSTOM ICON HOLDER */}

                <motion.div
                  whileHover={
                    reducedMotion
                      ? undefined
                      : {
                          y: -4,
                          scale: 1.04,
                        }
                  }
                  transition={{
                    duration: 0.3,
                    ease,
                  }}
                  className={`
                    relative flex h-[54px]
                    w-[54px] shrink-0
                    items-center justify-center
                    rounded-[14px]
                    border transition-colors
                    duration-300
                    md:h-[60px] md:w-[60px]
                    ${
                      item.featured
                        ? "border-[#F1C98E]/30 bg-white/10 text-[#F1C98E]"
                        : "border-[#E7D5C1] bg-[#F6EBDD] text-[#843642] group-hover:bg-[#F0DFCA]"
                    }
                  `}
                >

                  <Icon
                    size={27}
                    strokeWidth={1.4}
                  />

                  <span className={`
                    absolute -bottom-1
                    -right-1 h-[8px] w-[8px]
                    rounded-sm
                    ${
                      item.featured
                        ? "bg-[#F1C98E]"
                        : "bg-[#C9A16C]"
                    }
                  `} />

                </motion.div>

                {/* LABEL AND VALUE */}

                <div className="min-w-0">

                  <p className={`
                    text-[10px] font-semibold
                    uppercase tracking-[1.3px]
                    sm:text-[11px]
                    ${
                      item.featured
                        ? "text-[#F1C98E]"
                        : "text-[#96704A]"
                    }
                  `}>
                    {item.label}
                  </p>

                  <h3 className={`
                    mt-1.5 break-words
                    font-['Poppins']
                    font-semibold leading-[1.6]
                    ${
                      item.featured
                        ? "text-[15px] text-white sm:text-[18px] lg:text-[20px]"
                        : "text-[14px] text-[#633B40] sm:text-[16px]"
                    }
                  `}>
                    {item.value}
                  </h3>

                </div>

                {/* HOVER ACCENT */}

                <div className={`
                  absolute bottom-0
                  left-1/2 hidden h-[2px]
                  w-7 -translate-x-1/2
                  transition-all duration-500
                  group-hover:w-20 md:block
                  ${
                    item.featured
                      ? "bg-[#F1C98E]"
                      : "bg-[#C9A16C]"
                  }
                `} />

              </motion.div>
            );
          })}

        </div>

        {/* ====================================
            REGISTRATION INFORMATION
            OPEN LAYOUT — NO EXTRA BOX
        ==================================== */}

        <motion.div
          {...reveal(0.2)}
          className="
            mx-auto mt-6 flex
            max-w-[850px] items-start
            gap-3 sm:mt-8
            sm:items-center sm:gap-5
            lg:justify-center
          "
        >

          {/* DOCUMENT ILLUSTRATION */}

          <div className="
            relative flex h-[52px]
            w-[52px] shrink-0
            items-center justify-center
            sm:h-[64px] sm:w-[64px]
          ">

            <div className="
              absolute inset-0
              rotate-[-8deg]
              rounded-[12px]
              border border-[#D7B995]
              bg-[#EEDCC6]
            " />

            <div className="
              relative flex h-[46px]
              w-[46px] items-center
              justify-center rounded-[10px]
              border border-[#DBC3A8]
              bg-[#FFFBF7]
              text-[#843642]
              sm:h-[55px] sm:w-[55px]
            ">

              <FileText
                size={26}
                strokeWidth={1.4}
              />

            </div>

          </div>

          {/* REGISTRATION DETAILS */}

          <div className="
            min-w-0 border-l
            border-[#DCC4A9]
            pl-4 sm:pl-5
          ">

            <h3 className="
              text-[14px] font-semibold
              text-[#843642]
              sm:text-[16px]
            ">
              {t.registrationTitle}
            </h3>

            <p className="
              mt-1 text-[12px]
              leading-[1.8]
              text-[#746258]
              sm:text-[13px]
            ">
              {t.registrationDescription}
            </p>

          </div>

        </motion.div>

        {/* ====================================
            BOTTOM INFORMATION NOTE
        ==================================== */}

        <motion.p
          {...reveal(0.25)}
          className="
            mx-auto mt-5 max-w-[800px]
            text-center text-[11px]
            leading-[1.7] text-[#806E65]
            sm:text-[12px]
          "
        >
          {t.note}
        </motion.p>

      </div>

      {/* BOTTOM ACCENT */}

      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 bottom-0
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-[#C9A16C]
          to-transparent
        "
      />

    </section>
  );
}
