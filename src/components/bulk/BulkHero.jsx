
import React, { useContext } from "react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  ArrowUpRight,
  Store,
  Boxes,
  ShoppingBasket,
  ArrowDown,
} from "lucide-react";

import { LanguageContext } from "../../context/LanguageContext";

const ease = [0.22, 1, 0.36, 1];

const WHATSAPP_NUMBER = "919922604685";

// ==========================================
// BILINGUAL CONTENT
// ==========================================

const content = {
  en: {
    eyebrow: "BULK ENQUIRY",

    heading: "Let's Bring Authentic",
    accent: "Solapuri Flavours",
    headingEnd: "to More Customers.",

    description:
      "Interested in Maya’s LALA Food Products for your store, food business or commercial requirements?",

    description2:
      "Get in touch to discuss product information, available quantities and business opportunities.",

    cta: "Send Business Enquiry",

    collection: "MAYA’S LALA PRODUCT COLLECTION",

    categories: [
      {
        title: "Retail Stores",
        description: "Product enquiries for your store",
      },
      {
        title: "Food Businesses",
        description: "Explore our traditional food range",
      },
      {
        title: "Bulk Requirements",
        description: "Discuss available product quantities",
      },
    ],

    products: [
      "Solapuri Shenga Chutney",
      "Roasted Peanuts",
      "Blanched Peanuts",
      "Masala Peanuts",
      "Crunchy Masala Peanuts",
      "Spicy Peanut Chivda",
      "Peanut Ladoo",
    ],

    whatsappMessage:
      "Hello Maya’s LALA Food Products! I am interested in your products for bulk requirements. Please share product information, available quantities and pricing details.",
  },

  mr: {
    eyebrow: "मोठ्या प्रमाणात खरेदीसाठी चौकशी",

    heading: "चला, सोलापूरची",
    accent: "अस्सल चव",
    headingEnd: "अधिक ग्राहकांपर्यंत पोहोचवूया.",

    description:
      "तुमच्या दुकानासाठी, खाद्य व्यवसायासाठी किंवा व्यावसायिक गरजांसाठी मायाज लाला फूड प्रॉडक्ट्सची उत्पादने हवी आहेत?",

    description2:
      "उत्पादनांची माहिती, उपलब्ध प्रमाण आणि व्यावसायिक संधींबाबत चर्चा करण्यासाठी आमच्याशी संपर्क साधा.",

    cta: "व्यावसायिक चौकशी करा",

    collection: "मायाज लाला उत्पादनांची खास श्रेणी",

    categories: [
      {
        title: "किरकोळ विक्री दुकाने",
        description: "तुमच्या दुकानासाठी उत्पादनांची चौकशी",
      },
      {
        title: "खाद्य व्यवसाय",
        description: "आमच्या पारंपरिक उत्पादनांची माहिती",
      },
      {
        title: "मोठ्या प्रमाणातील मागणी",
        description: "उपलब्ध उत्पादनांच्या प्रमाणाबाबत चर्चा",
      },
    ],

    products: [
      "सोलापुरी शेंगा चटणी",
      "भाजलेले शेंगदाणे",
      "साल काढलेले शेंगदाणे",
      "मसाला शेंगदाणे",
      "कुरकुरीत मसाला शेंगदाणे",
      "तिखट शेंगदाणा चिवडा",
      "शेंगदाणा लाडू",
    ],

    whatsappMessage:
      "नमस्कार! मला मायाज लाला फूड प्रॉडक्ट्सची उत्पादने मोठ्या प्रमाणात खरेदी करण्यासंबंधी चौकशी करायची आहे. कृपया उत्पादनांची माहिती, उपलब्ध प्रमाण आणि किंमत कळवावी.",
  },
};

const categoryIcons = [
  Store,
  ShoppingBasket,
  Boxes,
];

// ==========================================
// PRODUCT DISPLAY CONFIGURATION
// ==========================================

const productDisplay = [
  {
    id: 2,
    position:
      "left-[0%] bottom-[14%] w-[25%] h-[47%] z-10",
    rotate: -8,
    delay: 0.15,
  },
  {
    id: 3,
    position:
      "right-[0%] bottom-[14%] w-[25%] h-[47%] z-10",
    rotate: 8,
    delay: 0.2,
  },
  {
    id: 4,
    position:
      "left-[11%] bottom-[23%] w-[30%] h-[64%] z-20",
    rotate: -5,
    delay: 0.25,
  },
  {
    id: 5,
    position:
      "right-[11%] bottom-[23%] w-[30%] h-[64%] z-20",
    rotate: 5,
    delay: 0.3,
  },
  {
    id: 6,
    position:
      "left-[5%] bottom-[5%] w-[29%] h-[45%] z-30",
    rotate: -6,
    delay: 0.35,
  },
  {
    id: 7,
    position:
      "right-[5%] bottom-[5%] w-[29%] h-[45%] z-30",
    rotate: 6,
    delay: 0.4,
  },
  {
    id: 1,
    position:
      "left-[29%] bottom-[4%] w-[42%] h-[88%] z-40",
    rotate: 0,
    delay: 0.1,
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function BulkHero() {
  const { language } = useContext(LanguageContext);

  const t = content[language === "mr" ? "mr" : "en"];

  const reducedMotion = useReducedMotion();

  const reveal = (delay = 0, y = 20) => ({
    initial: reducedMotion
      ? false
      : { opacity: 0, y },

    animate: {
      opacity: 1,
      y: 0,
    },

    transition: {
      duration: reducedMotion ? 0 : 0.8,
      delay: reducedMotion ? 0 : delay,
      ease,
    },
  });

  // ========================================
  // ENQUIRY ACTION
  // ========================================

  const handleEnquiry = () => {
    const enquiryForm =
      document.getElementById("bulk-enquiry");

    if (enquiryForm) {
      enquiryForm.scrollIntoView({
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
      id="bulk-hero"
      aria-labelledby="bulk-hero-heading"
      className="
        relative isolate overflow-hidden
        bg-[#73303B]
      "
    >

      {/* ======================================
          PREMIUM BACKGROUND
      ====================================== */}

      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-30
          bg-[linear-gradient(115deg,#57232D_0%,#78333F_45%,#964B53_100%)]
        "
      />

      {/* SOFT STUDIO LIGHT */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          right-0 top-0 -z-20
          h-full w-full
          bg-[radial-gradient(ellipse_at_80%_35%,#C58B7860_0%,transparent_65%)]
        "
      />

      {/* SUBTLE TEXTURE */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          inset-0 -z-10 opacity-[0.045]
        "
        style={{
          backgroundImage:
            "radial-gradient(#F1C98E 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* CUSTOM DECORATIVE LINE ART */}

      <svg
        viewBox="0 0 500 500"
        fill="none"
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-24 -top-28 -z-10
          h-[580px] w-[580px]
          opacity-[0.13]
        "
      >

        {Array.from({ length: 15 }, (_, i) => (
          <path
            key={i}
            d={`
              M ${i * 16 + 80} -20
              C -70 170, 590 240, ${i * 16 + 80} 520
            `}
            stroke="#F1C98E"
            strokeWidth="1"
          />
        ))}

      </svg>

      {/* ======================================
          MAIN HERO
      ====================================== */}

      <div className="
        mx-auto grid max-w-[1400px]
        items-center gap-5
        px-5 pb-6 pt-9
        sm:px-8 sm:pb-8 sm:pt-12
        lg:min-h-[440px]
        lg:grid-cols-[0.95fr_1.05fr]
        lg:gap-8 lg:px-12 lg:py-10
      ">

        {/* ====================================
            HERO CONTENT
        ==================================== */}

        <div className="
          relative z-20 min-w-0
        ">

          {/* EYEBROW */}

          <motion.div
            {...reveal()}
            className="
              mb-4 inline-flex
              items-center gap-2.5
              rounded-full border
              border-[#F1C98E]/25
              bg-white/[0.06]
              px-3.5 py-2
            "
          >

            <Boxes
              size={15}
              strokeWidth={1.6}
              className="shrink-0 text-[#F1C98E]"
              aria-hidden="true"
            />

            <span className="
              text-[10px] font-semibold
              uppercase tracking-[1.8px]
              text-[#F1C98E]
              sm:text-[11px]
            ">
              {t.eyebrow}
            </span>

          </motion.div>

          {/* MAIN HEADING */}

          <motion.h1
            key={language}
            {...reveal(0.08, 25)}
            id="bulk-hero-heading"
            className="
              font-['Poppins']
              text-[28px] font-medium
              leading-[1.32]
              tracking-[-0.6px]
              text-[#FFFBF7]
              sm:text-[36px]
              lg:text-[39px]
              xl:text-[45px]
            "
          >

            <span className="block">
              {t.heading}
            </span>

            <span className="
              block font-bold
              text-[#F1C98E]
            ">
              {t.accent}
            </span>

            <span className="block">
              {t.headingEnd}
            </span>

          </motion.h1>

          {/* ANIMATED GOLD LINE */}

          <motion.div
            aria-hidden="true"
            initial={
              reducedMotion
                ? false
                : { scaleX: 0 }
            }
            animate={{ scaleX: 1 }}
            transition={{
              duration: reducedMotion ? 0 : 0.9,
              delay: reducedMotion ? 0 : 0.25,
              ease,
            }}
            className="
              my-4 h-[2px] w-14
              origin-left bg-[#F1C98E]
            "
          />

          {/* DESCRIPTION */}

          <motion.p
            {...reveal(0.15)}
            className="
              max-w-[560px]
              text-[13px] leading-[1.85]
              text-[#FFF1E8]
              sm:text-[15px]
            "
          >
            {t.description}
          </motion.p>

          <motion.p
            {...reveal(0.22)}
            className="
              mt-3 max-w-[530px]
              text-[12px] leading-[1.85]
              text-[#E8CCC7]
              sm:text-[14px]
            "
          >
            {t.description2}
          </motion.p>

          {/* ==================================
              GOLD ENQUIRY CTA
          ================================== */}

          <motion.div
            {...reveal(0.3)}
            className="mt-6"
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
                bg-[#F1C98E]
                py-3 pl-5 pr-3
                text-left text-[13px]
                font-semibold text-[#6B2935]
                shadow-[0_8px_25px_rgba(35,10,15,0.2)]
                transition-colors duration-300
                hover:bg-[#FFDBA6]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
                focus-visible:ring-offset-4
                focus-visible:ring-offset-[#78333F]
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
                rounded-[6px]
                bg-[#843642] text-[#F1C98E]
              ">

                <ArrowUpRight
                  size={19}
                  strokeWidth={1.8}
                  className="
                    transition-transform duration-300
                    motion-safe:group-hover:-translate-y-0.5
                    motion-safe:group-hover:translate-x-0.5
                  "
                />

              </span>

              {/* BUTTON SHINE */}

              <span className="
                pointer-events-none absolute
                inset-y-0 -left-full
                w-1/2 skew-x-[-20deg]
                bg-white/25
                transition-all duration-700
                motion-safe:group-hover:left-[130%]
              " />

            </motion.button>

          </motion.div>

        </div>

        {/* ====================================
            ALL SEVEN PRODUCTS SHOWCASE
        ==================================== */}

        <div className="relative min-w-0">

          <div className="
            relative isolate
            mx-auto h-[255px] w-full
            max-w-[650px]
            sm:h-[340px]
            lg:h-[365px]
            xl:h-[400px]
          ">

            {/* LARGE TYPOGRAPHIC WATERMARK */}

            <motion.span
              aria-hidden="true"
              initial={
                reducedMotion
                  ? false
                  : { opacity: 0, scale: 0.95 }
              }
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: reducedMotion ? 0 : 1.2,
                ease,
              }}
              className="
                pointer-events-none absolute
                inset-x-0 top-0 -z-10
                select-none text-center
                font-['Poppins']
                text-[105px] font-black
                leading-none tracking-[-6px]
                text-[#F1C98E]/[0.09]
                sm:text-[155px]
                xl:text-[180px]
              "
            >
              LALA
            </motion.span>

            {/* WARM PRODUCT LIGHT */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                inset-x-[10%] inset-y-[5%]
                -z-10 rounded-full
                bg-[#D5A27A]/20 blur-[70px]
              "
            />

            {/* PRODUCT SHADOW */}

            <div
              aria-hidden="true"
              className="
                absolute bottom-[1%]
                left-[5%] right-[5%]
                h-[30px] rounded-[50%]
                bg-[#32101B]/40 blur-xl
              "
            />

            {/* ALL PRODUCTS */}

            {productDisplay.map((product) => (
              <motion.img
                key={product.id}
                src={`/p${product.id}.png`}
                alt={t.products[product.id - 1]}
                loading="eager"
                decoding="async"
                fetchPriority={
                  product.id === 1
                    ? "high"
                    : "auto"
                }
                initial={
                  reducedMotion
                    ? false
                    : {
                        y: 25,
                        scale: 0.94,
                        rotate: 0,
                      }
                }
                animate={{
                  y: 0,
                  scale: 1,
                  rotate: product.rotate,
                }}
                transition={{
                  duration: reducedMotion ? 0 : 1,
                  delay: reducedMotion
                    ? 0
                    : product.delay,
                  ease,
                }}
                className={`
                  absolute object-contain
                  drop-shadow-[0_15px_15px_rgba(35,10,15,0.28)]
                  ${product.position}
                `}
              />
            ))}

          </div>

          {/* COLLECTION CAPTION */}

          <motion.div
            {...reveal(0.45, 10)}
            className="
              mt-3 flex items-center
              justify-center gap-3
              sm:mt-4
            "
          >

            <span className="
              h-px w-7 shrink-0
              bg-[#F1C98E]/50
              sm:w-12
            " />

            <span className="
              text-center text-[9px]
              font-medium uppercase
              tracking-[1.5px]
              text-[#F1C98E]
              sm:text-[11px]
            ">
              {t.collection}
            </span>

            <span className="
              h-px w-7 shrink-0
              bg-[#F1C98E]/50
              sm:w-12
            " />

          </motion.div>

        </div>

      </div>

      {/* ======================================
          BOTTOM BUSINESS CATEGORY STRIP
      ====================================== */}

      <motion.div
        {...reveal(0.35, 15)}
        className="
          relative border-t
          border-[#F1C98E]/20
          bg-[#4B1B26]/30
        "
      >

        <div className="
          mx-auto grid max-w-[1400px]
          grid-cols-3
          px-3 sm:px-8 lg:px-12
        ">

          {t.categories.map((item, index) => {
            const Icon = categoryIcons[index];

            return (
              <div
                key={index}
                className={`
                  group relative flex min-w-0
                  flex-col items-center
                  justify-center gap-2
                  px-2 py-4 text-center
                  sm:gap-3 sm:px-4 sm:py-5
                  lg:flex-row lg:justify-start
                  lg:gap-4 lg:text-left
                  ${
                    index !== 0
                      ? "border-l border-[#F1C98E]/15"
                      : ""
                  }
                `}
              >

                {/* CATEGORY ICON */}

                <div className="
                  flex h-10 w-10 shrink-0
                  items-center justify-center
                  rounded-[10px]
                  border border-[#F1C98E]/20
                  bg-white/[0.05]
                  text-[#F1C98E]
                  transition-colors duration-300
                  group-hover:bg-[#F1C98E]
                  group-hover:text-[#843642]
                  sm:h-12 sm:w-12
                ">

                  <Icon
                    size={23}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />

                </div>

                {/* CATEGORY CONTENT */}

                <div className="min-w-0">

                  <h3 className="
                    text-[10px] font-semibold
                    leading-[1.5] text-[#FFF8ED]
                    sm:text-[13px]
                    lg:text-[14px]
                  ">
                    {item.title}
                  </h3>

                  <p className="
                    mt-1 hidden text-[11px]
                    leading-[1.7]
                    text-[#DDBDB9]
                    sm:block lg:text-[12px]
                  ">
                    {item.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </motion.div>

      {/* BOTTOM GOLD LINE */}

      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 bottom-0
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-[#F1C98E]
          to-transparent
        "
      />

    </section>
  );
}
