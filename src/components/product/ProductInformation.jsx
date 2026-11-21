import React, { useContext, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useInView,
} from "framer-motion";

import {
  Star,
  Flame,
  Sprout,
  Package,
  MapPin,
  Factory,
  ArrowUpRight,
  Wheat,
  ChefHat,
  MessageCircle,
  Award,
} from "lucide-react";

import { LanguageContext } from "../../context/LanguageContext";

const WHATSAPP_NUMBER = "918766493543";
const PRODUCT_IMAGE = "/p1.png";
const ease = [0.22, 1, 0.36, 1];

// ==========================================
// BILINGUAL CONTENT
// ==========================================

const content = {
  en: {
    eyebrow: "OUR SIGNATURE SPECIALITY",
    heading: "The Taste That",
    headingAccent: "Defines Us.",
    badge: "Customer Favourite",
    signature: "Our Signature Product",
    productName: "Solapuri Shenga Chutney",
    tagline: "Authentically Solapuri. Distinctively Delicious.",

    description:
      "At the heart of Maya’s LALA Food Products is our signature Solapuri Shenga Chutney — a customer favourite that celebrates the distinctive food heritage of Solapur.",

    description2:
      "The combination of peanuts, garlic, chilli powders and cumin seeds creates a rich, nutty texture with a bold, spicy flavour. Inspired by traditional Maharashtrian recipes, it brings an authentic regional touch to everyday Indian meals.",

    ingredientsTitle: "The Ingredients Behind the Taste",

    ingredients: [
      "Peanuts",
      "Garlic",
      "Chilli Powders",
      "Cumin Seeds",
    ],

    information: "Know Our Signature Product",

    details: [
      {
        label: "Category",
        value: "Traditional Dry Chutney",
      },
      {
        label: "Main Ingredient",
        value: "Peanuts",
      },
      {
        label: "Flavour Profile",
        value: "Spicy, Nutty, Garlicky",
      },
      {
        label: "Cuisine",
        value: "Maharashtrian",
      },
      {
        label: "Packaging",
        value: "Packaged Food Product",
      },
      {
        label: "Origin",
        value: "Solapur, Maharashtra",
      },
    ],

    manufacturerLabel: "Manufactured By",
    manufacturer: "Siddhalaxmi Mahila Gruh Udyog",
    enquiry: "Enquire on WhatsApp",

    whatsappMessage:
      "Hello Maya’s LALA Food Products! I am interested in your signature Solapuri Shenga Chutney. Please share the price, available pack sizes and ordering details.",

    heritage: "Inspired by Solapur’s Food Tradition",
    bottomLine: "A little chutney. A whole lot of Solapur.",
  },

  mr: {
    eyebrow: "आमचे खास आणि लोकप्रिय उत्पादन",
    heading: "आमची ओळख.",
    headingAccent: "सोलापूरची अस्सल चव.",
    badge: "ग्राहकांची खास पसंती",
    signature: "आमचे प्रमुख उत्पादन",
    productName: "सोलापुरी शेंगा चटणी",
    tagline: "अस्सल सोलापुरी. खमंग आणि झणझणीत.",

    description:
      "मायाज लाला फूड प्रॉडक्ट्सची खास ओळख म्हणजे सोलापुरी शेंगा चटणी. ग्राहकांच्या विशेष पसंतीस उतरलेली ही चटणी सोलापूरच्या वैशिष्ट्यपूर्ण खाद्यपरंपरेचा गौरव करते.",

    description2:
      "शेंगदाणे, लसूण, मिरची पावडर आणि जिरे यांच्या मिश्रणातून तयार होणारी ही खमंग व झणझणीत चटणी रोजच्या जेवणाची चव आणखी वाढवते. महाराष्ट्राच्या पारंपरिक पाककृतींपासून प्रेरित असलेली ही चटणी सोलापूरची अस्सल चव तुमच्या ताटात आणते.",

    ingredientsTitle: "अस्सल चवीमागील खास जिन्नस",

    ingredients: [
      "शेंगदाणे",
      "लसूण",
      "मिरची पावडर",
      "जिरे",
    ],

    information: "जाणून घ्या आमच्या खास उत्पादनाविषयी",

    details: [
      {
        label: "प्रकार",
        value: "पारंपरिक कोरडी चटणी",
      },
      {
        label: "मुख्य घटक",
        value: "शेंगदाणे",
      },
      {
        label: "चवीचे वैशिष्ट्य",
        value: "तिखट, खमंग आणि लसणाची चव",
      },
      {
        label: "खाद्यसंस्कृती",
        value: "महाराष्ट्रीयन",
      },
      {
        label: "पॅकेजिंग",
        value: "पॅकबंद खाद्यपदार्थ",
      },
      {
        label: "मूळ ठिकाण",
        value: "सोलापूर, महाराष्ट्र",
      },
    ],

    manufacturerLabel: "उत्पादक",
    manufacturer: "सिद्धलक्ष्मी महिला गृह उद्योग",
    enquiry: "WhatsApp वर चौकशी करा",

    whatsappMessage:
      "नमस्कार मायाज लाला फूड प्रॉडक्ट्स! मला तुमची खास सोलापुरी शेंगा चटणी खरेदी करायची आहे. कृपया किंमत, उपलब्ध पॅकिंग आणि ऑर्डरची माहिती पाठवा.",

    heritage: "सोलापूरच्या खाद्यपरंपरेतून प्रेरित",
    bottomLine: "थोडीशी चटणी... सोलापूरची भरभरून चव!",
  },
};

const detailIcons = [
  ChefHat,
  Sprout,
  Flame,
  Wheat,
  Package,
  MapPin,
];

// ==========================================
// CUSTOM INGREDIENT ILLUSTRATIONS
// ==========================================

function IngredientIllustration({ index }) {
  const illustration = [
    // PEANUTS
    <>
      <path
        d="M19 9C7 9 6 25 15 31C21 35 16 42 23 49C35 61 50 46 41 35C36 29 43 22 36 14C32 8 25 8 19 9Z"
        fill="#D6A36B"
        stroke="#936037"
        strokeWidth="1.5"
      />
      <path
        d="M17 17L31 13M12 25L34 21M22 34L39 29M22 43L43 38M28 50L39 46"
        stroke="#936037"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M21 11C17 25 35 32 31 53"
        fill="none"
        stroke="#B37A45"
        strokeWidth="1.5"
      />
      <ellipse
        cx="48"
        cy="47"
        rx="8"
        ry="12"
        transform="rotate(30 48 47)"
        fill="#B66F48"
        stroke="#8F4E32"
        strokeWidth="1.2"
      />
    </>,

    // GARLIC
    <>
      <path
        d="M29 21C12 17 5 34 13 47C20 59 44 59 51 46C59 32 47 19 35 21L34 9L29 21Z"
        fill="#FFF5DC"
        stroke="#B99C79"
        strokeWidth="1.5"
      />
      <path
        d="M29 22C16 32 20 48 27 54M34 22C47 34 43 48 36 55M31 23L31 55"
        stroke="#D4B9A1"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M29 21L30 8L35 7L35 21"
        fill="#C9AE85"
        stroke="#9F8057"
        strokeWidth="1.2"
      />
      <path
        d="M26 56L21 60M31 56L31 61M36 56L41 59"
        stroke="#A68C62"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </>,

    // CHILLI POWDER
    <>
      <path
        d="M16 31C27 12 41 13 49 27L55 38H9Z"
        fill="#C75034"
        stroke="#9D3226"
        strokeWidth="1.3"
      />
      <ellipse
        cx="32"
        cy="38"
        rx="26"
        ry="7"
        fill="#E16A3D"
      />
      <path
        d="M6 38L13 53Q32 65 51 53L58 38Q32 51 6 38Z"
        fill="#BF9464"
        stroke="#92653D"
        strokeWidth="1.5"
      />
      <path
        d="M12 47Q32 58 52 47"
        stroke="#E7C59B"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M38 8C54 5 60 14 48 22C50 14 42 11 38 8Z"
        fill="#B72F2C"
      />
      <path
        d="M39 9L32 5"
        stroke="#657447"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </>,

    // CUMIN SEEDS
    <>
      {[
        [19, 19, -35],
        [33, 15, 35],
        [47, 25, -20],
        [17, 36, 30],
        [32, 32, -40],
        [43, 43, 40],
        [27, 49, 20],
        [49, 10, 35],
        [10, 49, -25],
      ].map(([x, y, rotation], i) => (
        <g
          key={i}
          transform={`translate(${x} ${y}) rotate(${rotation})`}
        >
          <ellipse
            rx="3.4"
            ry="9"
            fill="#B28C52"
            stroke="#896536"
            strokeWidth="1"
          />
          <path
            d="M0 -7L0 7M-1.5 -5L-1.5 5"
            stroke="#E2C490"
            strokeWidth=".8"
          />
        </g>
      ))}
    </>,
  ];

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className="h-12 w-12 sm:h-[52px] sm:w-[52px]"
    >
      {illustration[index]}
    </svg>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function ProductInformation() {
  const { language } = useContext(LanguageContext);

  const isMarathi = language === "mr";
  const t = content[isMarathi ? "mr" : "en"];

  const reducedMotion = useReducedMotion();
  const stageRef = useRef(null);

  const stageVisible = useInView(stageRef, {
    amount: 0.15,
  });

  const whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      t.whatsappMessage
    )}`;

  const reveal = (delay = 0, y = 18) => ({
    initial: reducedMotion ? false : { y },
    whileInView: { y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: {
      duration: reducedMotion ? 0 : 0.75,
      delay: reducedMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="signature-product"
      aria-labelledby="signature-product-heading"
      className="
        relative isolate overflow-hidden
        border-y border-[#E8D5BD]
        bg-[#FFFBF6]
        py-9 sm:py-11 lg:py-14
      "
    >
      {/* BACKGROUND */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[linear-gradient(120deg,#F4E4D2_0%,#FFFBF6_48%,#FFF8EE_100%)]
        "
      />

      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-24 -top-40 -z-10
          h-[480px] w-[480px] rounded-full
          border border-[#C9A16C]/20
        "
      />

      <div className="mx-auto max-w-[1380px] px-4 sm:px-7 lg:px-10">

        {/* ======================================
            EDITORIAL SECTION HEADER
        ====================================== */}

        <motion.div
          {...reveal()}
          className="
            mb-6 flex flex-wrap items-end
            justify-between gap-4 sm:mb-8
          "
        >
          <div>
            <div className="mb-2.5 flex items-center gap-2.5">
              <span className="h-px w-7 bg-[#B78953]" />

              <Award
                size={17}
                strokeWidth={1.7}
                className="text-[#94612E]"
              />

              <span className="
                text-[10px] font-bold
                tracking-[1.8px] text-[#875B30]
                sm:text-[11px]
              ">
                {t.eyebrow}
              </span>
            </div>

            <h2
              id="signature-product-heading"
              className="
                font-['Poppins'] text-[27px]
                font-semibold leading-[1.4]
                tracking-[-0.6px] text-[#392529]
                sm:text-[32px] lg:text-[36px]
              "
            >
              {t.heading}{" "}
              <span className="text-[#843642]">
                {t.headingAccent}
              </span>
            </h2>
          </div>

          <div className="
            hidden items-center gap-2
            border-l-2 border-[#C9A16C]
            pl-4 lg:flex
          ">
            <MapPin size={19} className="text-[#843642]" />

            <p className="
              max-w-[190px] text-[12px]
              font-medium leading-relaxed text-[#654833]
            ">
              {t.heritage}
            </p>
          </div>
        </motion.div>

        {/* ======================================
            MAIN PRODUCT SHOWCASE
        ====================================== */}

        <div className="
          grid items-stretch gap-6
          lg:grid-cols-[0.95fr_1.05fr]
          lg:gap-10 xl:gap-14
        ">

          {/* ====================================
              PREMIUM PRODUCT STAGE
          ==================================== */}

          <div
            ref={stageRef}
            className="
              group relative isolate overflow-hidden
              rounded-[16px]
              border border-[#B78953]
              bg-[#54202B]
              min-h-[350px]
              sm:min-h-[430px]
              lg:min-h-[490px]
            "
          >
            {/* ROYAL BURGUNDY BACKGROUND */}

            <div className="
              absolute inset-0 -z-20
              bg-[radial-gradient(ellipse_at_50%_45%,#A85961_0%,#752E3C_45%,#421721_100%)]
            " />

            {/* GOLDEN TEXTURE */}

            <div className="
              pointer-events-none absolute inset-0 -z-10
              bg-[radial-gradient(#F1C98E_1px,transparent_1px)]
              [background-size:18px_18px]
              opacity-[0.07]
            " />

            {/* INNER FRAME */}

            <div className="
              pointer-events-none absolute
              inset-[9px] rounded-[10px]
              border border-[#F1C98E]/30
            " />

            {/* FOUR CORNER ACCENTS */}

            {[
              "left-[9px] top-[9px] border-l-2 border-t-2 rounded-tl-[10px]",
              "right-[9px] top-[9px] border-r-2 border-t-2 rounded-tr-[10px]",
              "bottom-[9px] left-[9px] border-b-2 border-l-2 rounded-bl-[10px]",
              "bottom-[9px] right-[9px] border-b-2 border-r-2 rounded-br-[10px]",
            ].map((position, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`
                  pointer-events-none absolute z-30
                  h-7 w-7 border-[#E9C18A]
                  ${position}
                `}
              />
            ))}

            {/* TOP CUSTOMER FAVOURITE LABEL */}

            <div className="
              absolute inset-x-0 top-0 z-30
              flex items-center justify-between
              gap-3 px-6 pt-6
              sm:px-8 sm:pt-7
            ">
              <motion.div
                {...reveal(0.1, -10)}
                className="
                  inline-flex items-center gap-2
                  rounded-[5px]
                  bg-gradient-to-r
                  from-[#FFE2B8] to-[#DEAD70]
                  px-3 py-2 text-[10px]
                  font-bold text-[#54202B]
                  shadow-lg sm:text-[11px]
                "
              >
                <Star size={13} fill="currentColor" />
                {t.badge}
              </motion.div>

              <span className="
                hidden font-serif text-[14px]
                italic tracking-wider
                text-[#F5D8AF] sm:block
              ">
                Maya's LALA
              </span>
            </div>

            {/* OVERSIZED BACKGROUND TYPOGRAPHY */}

            <span
              aria-hidden="true"
              className="
                pointer-events-none absolute
                left-1/2 top-[18%]
                -translate-x-1/2
                select-none font-serif
                text-[100px] font-bold
                leading-none tracking-[-5px]
                text-[#F5D8AF]/10
                sm:text-[145px] lg:text-[170px]
              "
            >
              LALA
            </span>

            {/* ARCHITECTURAL PRODUCT ARCH */}

            <div className="
              pointer-events-none absolute
              bottom-[13%] left-1/2
              h-[70%] w-[63%]
              -translate-x-1/2
            ">
              <motion.div
                initial={
                  reducedMotion
                    ? false
                    : { scale: 0.9, opacity: 0.4 }
                }
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: reducedMotion ? 0 : 1.2,
                  ease,
                }}
                className="
                  absolute inset-0
                  rounded-t-full rounded-b-[8px]
                  border border-[#F1C98E]/60
                  bg-gradient-to-b
                  from-[#F1C98E]/20 to-transparent
                "
              />

              <div className="
                absolute -inset-[10px]
                rounded-t-full rounded-b-[12px]
                border border-[#F1C98E]/20
              " />

              <div className="
                absolute -inset-[20px]
                rounded-t-full rounded-b-[16px]
                border border-[#F1C98E]/10
              " />
            </div>

            {/* SOFT SPOTLIGHT */}

            <motion.div
              aria-hidden="true"
              animate={
                reducedMotion || !stageVisible
                  ? { opacity: 0.4 }
                  : {
                      opacity: [0.3, 0.65, 0.3],
                      scale: [1, 1.1, 1],
                    }
              }
              transition={{
                duration: 5,
                repeat:
                  reducedMotion || !stageVisible
                    ? 0
                    : Infinity,
              }}
              className="
                pointer-events-none absolute
                left-[20%] top-[23%]
                h-[55%] w-[60%] rounded-full
                bg-[#E9AA77]/25 blur-3xl
              "
            />

            {/* DECORATIVE GOLDEN SPARKLES */}

            {[
              { x: "16%", y: "37%" },
              { x: "81%", y: "30%" },
              { x: "77%", y: "66%" },
              { x: "23%", y: "70%" },
            ].map((item, index) => (
              <motion.span
                key={index}
                aria-hidden="true"
                style={{
                  left: item.x,
                  top: item.y,
                }}
                animate={
                  reducedMotion || !stageVisible
                    ? { opacity: 0.5 }
                    : {
                        opacity: [0.2, 0.9, 0.2],
                        scale: [0.7, 1.3, 0.7],
                      }
                }
                transition={{
                  duration: 3,
                  delay: index * 0.6,
                  repeat:
                    reducedMotion || !stageVisible
                      ? 0
                      : Infinity,
                }}
                className="absolute h-1.5 w-1.5"
              >
                <span className="
                  block h-full w-full rotate-45
                  bg-[#F5CD92]
                " />
              </motion.span>
            ))}

            {/* PRODUCT DISPLAY PLATFORM */}

            <div className="
              pointer-events-none absolute
              bottom-[16%] left-1/2
              h-[27px] w-[62%]
              -translate-x-1/2
              rounded-[50%]
              border border-[#E0B67E]
              bg-gradient-to-r
              from-[#91603B]
              via-[#F3D2A2]
              to-[#91603B]
              shadow-[0_14px_22px_rgba(25,5,10,0.35)]
              sm:h-[36px]
            " />

            {/* PRODUCT IMAGE */}

            <div className="
              absolute inset-x-0
              bottom-[18%] top-[15%]
              flex items-end justify-center
            ">
              <motion.div
                initial={
                  reducedMotion
                    ? false
                    : { scale: 0.92 }
                }
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: reducedMotion ? 0 : 1,
                  ease,
                }}
                className="
                  relative z-20 flex h-full
                  w-[90%] items-end justify-center
                "
              >
                <motion.img
                  src={PRODUCT_IMAGE}
                  alt={t.productName}
                  loading="eager"
                  decoding="async"
                  draggable={false}
                  initial={false}
                  animate={
                    reducedMotion || !stageVisible
                      ? { y: 0 }
                      : { y: [0, -7, 0] }
                  }
                  transition={{
                    duration: 4.5,
                    repeat:
                      reducedMotion || !stageVisible
                        ? 0
                        : Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    block h-full w-full
                    select-none object-contain
                    drop-shadow-[0_20px_20px_rgba(25,4,10,0.4)]
                  "
                />
              </motion.div>
            </div>

            {/* PRODUCT SHINE */}

            {!reducedMotion && (
              <motion.div
                aria-hidden="true"
                initial={{ x: "-150%" }}
                whileInView={{ x: "500%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 2,
                  delay: 0.4,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none absolute
                  inset-y-0 left-0 z-20
                  w-[25%] -skew-x-12
                  bg-gradient-to-r
                  from-transparent
                  via-[#FFF2D5]/15
                  to-transparent
                "
              />
            )}

            {/* BOTTOM STAGE CAPTION */}

            <div className="
              absolute inset-x-0 bottom-0 z-30
              bg-gradient-to-t
              from-[#351018] to-transparent
              px-5 pb-6 pt-10 text-center
            ">
              <div className="
                mb-2 flex items-center justify-center gap-3
              ">
                <span className="h-px w-8 bg-[#C9A16C]" />

                <span className="
                  h-1.5 w-1.5 rotate-45
                  bg-[#F1C98E]
                " />

                <span className="h-px w-8 bg-[#C9A16C]" />
              </div>

              <p className="
                text-[10px] font-semibold
                tracking-[2px] text-[#FFE1B5]
                sm:text-[11px]
              ">
                {t.signature}
              </p>
            </div>
          </div>

          {/* ====================================
              PRODUCT INFORMATION
          ==================================== */}

          <div className="
            flex min-w-0 flex-col
            justify-center lg:py-2
          ">

            <motion.div {...reveal(0.05)}>

              <div className="mb-3 flex items-center gap-2">
                <MapPin
                  size={16}
                  strokeWidth={1.7}
                  className="shrink-0 text-[#843642]"
                />

                <span className="
                  text-[12px] font-semibold
                  text-[#875B30]
                ">
                  {t.heritage}
                </span>
              </div>

              <h3 className="
                font-['Poppins']
                text-[30px] font-semibold
                leading-[1.3] tracking-[-0.8px]
                text-[#752B37]
                sm:text-[39px]
                xl:text-[46px]
              ">
                {t.productName}
              </h3>

              <p className="
                mt-2.5 text-[14px] font-semibold
                leading-[1.6] text-[#926331]
                sm:text-[16px]
              ">
                {t.tagline}
              </p>

              {/* ANIMATED DIVIDER */}

              <div className="my-4 flex items-center gap-2">
                <motion.span
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
                    h-[2px] w-[72px] origin-left
                    bg-gradient-to-r
                    from-[#843642] to-[#C9A16C]
                  "
                />

                <span className="
                  h-1.5 w-1.5 rotate-45
                  bg-[#C9A16C]
                " />
              </div>
            </motion.div>

            {/* DESCRIPTION */}

            <motion.div {...reveal(0.1)}>
              <p className="
                text-[14px] leading-[1.85]
                text-[#45332D]
                sm:text-[15px]
              ">
                {t.description}
              </p>

              <p className="
                mt-3 text-[13px]
                leading-[1.85] text-[#59463D]
                sm:text-[14px]
              ">
                {t.description2}
              </p>
            </motion.div>

            {/* ====================================
                ILLUSTRATED INGREDIENT STRIP
            ==================================== */}

            <motion.div
              {...reveal(0.15)}
              className="mt-6"
            >
              <h4 className="
                mb-3 flex items-center gap-2
                text-[14px] font-bold
                text-[#752B37]
              ">
                <Sprout size={17} />
                {t.ingredientsTitle}
              </h4>

              <div className="
                grid grid-cols-4
                divide-x divide-[#E2CDB3]
                overflow-hidden rounded-[10px]
                border border-[#E2CDB3]
                bg-[#FFF9EF]
              ">
                {t.ingredients.map((ingredient, index) => (
                  <div
                    key={index}
                    className="
                      group/ingredient relative
                      flex min-w-0 flex-col
                      items-center justify-center
                      px-1.5 py-3
                      transition-colors duration-300
                      hover:bg-[#F3E2CC]
                      sm:px-3
                    "
                  >
                    <motion.div
                      whileHover={
                        reducedMotion
                          ? undefined
                          : { y: -4, rotate: 7 }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 240,
                        damping: 17,
                      }}
                      className="mb-2"
                    >
                      <IngredientIllustration index={index} />
                    </motion.div>

                    <span className="
                      text-center text-[10px]
                      font-semibold leading-[1.5]
                      text-[#60343A]
                      sm:text-[12px]
                    ">
                      {ingredient}
                    </span>

                    <span className="
                      absolute inset-x-0 bottom-0
                      h-[2px] origin-center scale-x-0
                      bg-[#B78953]
                      transition-transform duration-500
                      group-hover/ingredient:scale-x-100
                    " />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ====================================
                PREMIUM WHATSAPP CTA
            ==================================== */}

            <motion.div
              {...reveal(0.2)}
              className="mt-5"
            >
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={
                  reducedMotion
                    ? undefined
                    : { scale: 0.97 }
                }
                className="
                  group relative isolate
                  inline-flex min-h-[54px]
                  w-full items-center
                  justify-between gap-4
                  overflow-hidden rounded-[8px]
                  border border-[#A45F65]
                  bg-gradient-to-r
                  from-[#70242D] to-[#974651]
                  py-2 pl-4 pr-2
                  text-white
                  shadow-[0_7px_18px_rgba(132,54,66,0.18)]
                  transition-all duration-300
                  motion-safe:hover:-translate-y-1
                  hover:shadow-[0_12px_25px_rgba(132,54,66,0.25)]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#C9A16C]
                  sm:w-auto sm:min-w-[270px]
                "
              >
                {/* BUTTON SLIDE BACKGROUND */}

                <span className="
                  absolute inset-0 -z-10
                  -translate-x-full bg-[#4E1B25]
                  transition-transform duration-500
                  group-hover:translate-x-0
                " />

                <span className="
                  pointer-events-none absolute
                  inset-y-0 -left-1/2
                  w-1/3 -skew-x-12
                  bg-gradient-to-r
                  from-transparent
                  via-[#F1C98E]/35
                  to-transparent
                  transition-all duration-700
                  motion-safe:group-hover:left-[150%]
                " />

                <MessageCircle
                  size={21}
                  strokeWidth={1.8}
                  className="
                    shrink-0 text-[#F5CD92]
                    transition-transform duration-300
                    motion-safe:group-hover:-rotate-12
                  "
                />

                <span className="
                  flex-1 text-left text-[13px] font-semibold
                ">
                  {t.enquiry}
                </span>

                <span className="
                  relative flex h-9 w-9
                  shrink-0 items-center justify-center
                  overflow-hidden rounded-[5px]
                  bg-[#F1C98E] text-[#70242D]
                ">
                  <ArrowUpRight
                    size={21}
                    className="
                      absolute transition-transform
                      duration-300
                      motion-safe:group-hover:translate-x-8
                      motion-safe:group-hover:-translate-y-8
                    "
                  />

                  {!reducedMotion && (
                    <ArrowUpRight
                      size={21}
                      className="
                        absolute -translate-x-8 translate-y-8
                        transition-transform duration-300
                        group-hover:translate-x-0
                        group-hover:translate-y-0
                      "
                    />
                  )}
                </span>
              </motion.a>
            </motion.div>

          </div>
        </div>

        {/* ======================================
            UNIQUE PRODUCT INFORMATION PANEL
        ====================================== */}

        <motion.div
          {...reveal(0.05)}
          className="
            mt-7 overflow-hidden
            rounded-[12px]
            border border-[#DCC3A5]
            bg-[#FFFDF9]
            sm:mt-9
          "
        >
          <div className="
            grid lg:grid-cols-[230px_1fr]
            xl:grid-cols-[260px_1fr]
          ">

            {/* DARK LEFT TITLE AREA */}

            <div className="
              relative isolate flex items-center
              gap-3 overflow-hidden
              bg-gradient-to-br
              from-[#843642] to-[#54202B]
              px-5 py-4
              lg:flex-col lg:items-start
              lg:justify-center lg:px-6
            ">
              <Package
                aria-hidden="true"
                strokeWidth={0.5}
                className="
                  pointer-events-none absolute
                  -bottom-6 -right-6 -z-10
                  h-[130px] w-[130px]
                  text-white/10
                "
              />

              <div className="
                flex h-11 w-11 shrink-0
                items-center justify-center
                rounded-[7px]
                border border-[#F1C98E]/70
                bg-[#F1C98E] text-[#752B37]
              ">
                <Package size={23} strokeWidth={1.6} />
              </div>

              <h3 className="
                text-[16px] font-semibold
                leading-[1.5] text-white
                sm:text-[18px]
              ">
                {t.information}
              </h3>

              <span className="
                hidden h-[2px] w-12
                bg-[#F1C98E] lg:block
              " />
            </div>

            {/* SPECIFICATION DETAILS */}

            <div className="
              grid grid-cols-2
              gap-px bg-[#E7D6C0]
              sm:grid-cols-3
            ">
              {t.details.map((detail, index) => {
                const Icon = detailIcons[index];

                return (
                  <div
                    key={index}
                    className="
                      group/detail relative flex
                      min-w-0 flex-col gap-2
                      overflow-hidden bg-[#FFFDF9]
                      p-3.5
                      transition-colors duration-300
                      hover:bg-[#F7E9D8]
                      sm:flex-row sm:items-center
                      sm:gap-3 sm:p-4
                    "
                  >
                    <div className="
                      flex h-10 w-10 shrink-0
                      items-center justify-center
                      rounded-[7px]
                      border border-[#E4CCAE]
                      bg-[#F6E7D4] text-[#843642]
                      transition-colors duration-300
                      group-hover/detail:bg-[#843642]
                      group-hover/detail:text-[#F1C98E]
                    ">
                      <Icon
                        size={20}
                        strokeWidth={1.6}
                        className="
                          transition-transform duration-300
                          motion-safe:group-hover/detail:scale-110
                        "
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="
                        text-[11px] font-medium
                        leading-relaxed text-[#806049]
                      ">
                        {detail.label}
                      </p>

                      <p className="
                        mt-1 text-[12px] font-bold
                        leading-[1.5] text-[#54202B]
                        sm:text-[13px]
                      ">
                        {detail.value}
                      </p>
                    </div>

                    <span className="
                      absolute bottom-0 left-0
                      h-[2px] w-0 bg-[#B78953]
                      transition-all duration-500
                      group-hover/detail:w-full
                    " />
                  </div>
                );
              })}
            </div>
          </div>

          {/* MANUFACTURER STRIP */}

          <div className="
            flex flex-wrap items-center
            justify-between gap-3
            border-t border-[#DEC7A9]
            bg-[#F8EDDF]
            px-4 py-3.5 sm:px-6
          ">
            <div className="flex items-center gap-3">
              <Factory
                size={24}
                strokeWidth={1.5}
                className="shrink-0 text-[#843642]"
              />

              <div>
                <p className="
                  text-[10px] font-medium
                  text-[#78583E] sm:text-[11px]
                ">
                  {t.manufacturerLabel}
                </p>

                <p className="
                  mt-0.5 text-[13px] font-semibold
                  text-[#60313A] sm:text-[14px]
                ">
                  {t.manufacturer}
                </p>
              </div>
            </div>

            <span className="
              text-[11px] font-semibold
              tracking-wide text-[#956538]
              sm:text-[12px]
            ">
              Maya’s LALA Food Products
            </span>
          </div>
        </motion.div>

        {/* ======================================
            BOTTOM BRAND STATEMENT
        ====================================== */}

        <motion.div
          {...reveal(0.08)}
          className="
            mt-6 flex items-center
            justify-center gap-3 sm:gap-5
          "
        >
          <span className="
            hidden h-px max-w-[100px] flex-1
            bg-gradient-to-r
            from-transparent to-[#C9A16C]
            sm:block
          " />

          <span className="
            h-1.5 w-1.5 shrink-0
            rotate-45 bg-[#B78953]
          " />

          <p className="
            text-center font-serif text-[16px]
            font-medium italic leading-relaxed
            text-[#843642] sm:text-[20px]
          ">
            {t.bottomLine}
          </p>

          <span className="
            h-1.5 w-1.5 shrink-0
            rotate-45 bg-[#B78953]
          " />

          <span className="
            hidden h-px max-w-[100px] flex-1
            bg-gradient-to-l
            from-transparent to-[#C9A16C]
            sm:block
          " />
        </motion.div>

      </div>
    </section>
  );
}