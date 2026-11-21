import React, { useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { ArrowRight, Info } from "lucide-react";

import { LanguageContext } from "../../context/LanguageContext";

const ease = [0.22, 1, 0.36, 1];

// ==========================================
// BILINGUAL CONTENT
// ==========================================

const content = {
  en: {
    eyebrow: "THE JOURNEY OF FLAVOUR",

    heading: "From Ingredients to",
    accent: "Traditional Flavour.",

    subtitle:
      "A proposed five-stage preparation journey, from individual ingredients to the finished product.",

    process: [
      {
        title: "Ingredient Selection",
        description:
          "Ingredients are chosen for the intended recipe and flavour profile.",
      },
      {
        title: "Ingredient Preparation",
        description:
          "Preparation is carried out according to the product recipe.",
      },
      {
        title: "Spice Blending",
        description:
          "Peanuts, garlic and spices are combined to achieve the characteristic taste.",
      },
      {
        title: "Product Packing",
        description:
          "The prepared chutney is packed for convenient storage and use.",
      },
      {
        title: "Product Labelling",
        description:
          "Packaging provides relevant product and consumer information.",
      },
    ],

    note: "Proposed process overview, subject to confirmation of the actual production process.",
  },

  mr: {
    eyebrow: "अस्सल चवीचा प्रवास",

    heading: "जिन्नसांपासून",
    accent: "पारंपरिक चवीपर्यंत.",

    subtitle:
      "जिन्नसांच्या निवडीपासून अंतिम उत्पादनापर्यंतच्या पाच प्रस्तावित टप्प्यांचा प्रवास.",

    process: [
      {
        title: "जिन्नसांची निवड",
        description:
          "पाककृती आणि अपेक्षित चव यानुसार जिन्नसांची निवड केली जाते.",
      },
      {
        title: "जिन्नसांची पूर्वतयारी",
        description: "उत्पादनाच्या पाककृतीनुसार आवश्यक पूर्वतयारी केली जाते.",
      },
      {
        title: "मसाल्यांचे मिश्रण",
        description:
          "वैशिष्ट्यपूर्ण चव मिळवण्यासाठी शेंगदाणे, लसूण आणि मसाल्यांचे मिश्रण केले जाते.",
      },
      {
        title: "उत्पादनाचे पॅकिंग",
        description:
          "साठवणूक आणि वापराच्या सोयीसाठी तयार चटणीचे पॅकिंग केले जाते.",
      },
      {
        title: "उत्पादनाचे लेबलिंग",
        description:
          "पॅकिंगवर उत्पादनासंबंधी आणि ग्राहकांसाठी आवश्यक माहिती दिली जाते.",
      },
    ],

    note: "ही प्रस्तावित प्रक्रिया आहे. प्रत्यक्ष उत्पादन प्रक्रियेच्या पुष्टीनंतर अंतिम माहिती निश्चित केली जाईल.",
  },
};

// ==========================================
// CUSTOM FOOD PROCESS ILLUSTRATIONS
// ==========================================

function ProcessIllustration({ index }) {
  const outline = {
    stroke: "#843642",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  return (
    <svg
      viewBox="0 0 180 140"
      className="h-full w-full"
      fill="none"
      aria-hidden="true"
    >
      {/* SOFT GROUND SHADOW */}

      <ellipse cx="90" cy="124" rx="62" ry="7" fill="#D9B99B" opacity="0.22" />

      {/* ====================================
          01 — INGREDIENT SELECTION
      ==================================== */}

      {index === 0 && (
        <>
          {/* INGREDIENT BASKET */}

          <path
            d="M28 66 Q90 55 152 66 L137 111 Q90 128 43 111Z"
            fill="#DDBB94"
            {...outline}
          />

          <ellipse
            cx="90"
            cy="66"
            rx="62"
            ry="13"
            fill="#F4E1CA"
            {...outline}
          />

          {/* PEANUTS */}

          {[
            [51, 57, -25],
            [77, 49, 35],
            [102, 56, -20],
            [127, 60, 25],
            [92, 69, -35],
            [62, 73, 15],
          ].map(([x, y, rotate], i) => (
            <g key={i} transform={`translate(${x} ${y}) rotate(${rotate})`}>
              <path
                d="M-13 -5 Q-17 -13 -8 -15 Q0 -17 2 -9 Q12 -14 15 -5 Q18 4 8 7 Q3 8 0 4 Q-12 12 -15 3Z"
                fill="#B98052"
                stroke="#843642"
                strokeWidth="1.2"
              />

              <path
                d="M-9 -5 L9 2 M-5 -10 L-2 5 M5 -7 L8 3"
                stroke="#E9C8A2"
                strokeWidth="1.1"
              />
            </g>
          ))}

          {/* BASKET TEXTURE */}

          {[0, 1, 2].map((n) => (
            <path
              key={n}
              d={`M${39 + n * 3} ${86 + n * 10} Q90 ${
                101 + n * 10
              } ${141 - n * 3} ${86 + n * 10}`}
              stroke="#B48B65"
              strokeWidth="1.5"
            />
          ))}

          <path
            d="M55 81 L65 115 M82 84 L84 120 M110 84 L106 119 M134 80 L126 113"
            stroke="#B48B65"
            strokeWidth="1.5"
          />

          {/* SELECTION CHECK */}

          <circle cx="142" cy="32" r="17" fill="#843642" />

          <path
            d="M134 32 L140 38 L150 26"
            stroke="#F1C98E"
            strokeWidth="2.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}

      {/* ====================================
          02 — INGREDIENT PREPARATION
      ==================================== */}

      {index === 1 && (
        <>
          {/* PREPARATION BOARD */}

          <rect
            x="23"
            y="68"
            width="125"
            height="49"
            rx="12"
            fill="#D8AC7B"
            {...outline}
          />

          <path
            d="M148 81 H164 Q172 81 172 91 Q172 101 164 101 H148"
            fill="#D8AC7B"
            {...outline}
          />

          <circle cx="161" cy="91" r="3" fill="#FBF6EF" stroke="#843642" />

          {/* GARLIC BULB */}

          <path
            d="M55 43 Q49 55 35 67 Q27 82 42 91 Q57 99 72 88 Q83 76 68 63 Q62 55 61 43Z"
            fill="#FFF7E8"
            {...outline}
          />

          <path
            d="M55 51 Q40 76 51 92 M61 51 Q74 75 61 93"
            stroke="#C5A487"
            strokeWidth="1.5"
          />

          <path d="M55 44 L53 33 M61 44 L63 33" {...outline} />

          {/* GARLIC CLOVES */}

          <path
            d="M84 88 Q75 68 90 65 Q106 70 99 89 Q91 96 84 88Z"
            fill="#FFF5E2"
            {...outline}
          />

          <path
            d="M105 102 Q99 85 113 82 Q126 92 117 103 Q111 108 105 102Z"
            fill="#F8E8CB"
            {...outline}
          />

          {/* CHILLI */}

          <path
            d="M91 45 Q111 27 139 40 Q120 42 115 57 Q103 68 86 60 Q97 55 91 45Z"
            fill="#A83D46"
            {...outline}
          />

          <path
            d="M137 40 Q147 33 145 24"
            stroke="#8E7854"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* BOARD GRAIN */}

          <path
            d="M35 106 H63 M128 76 H139"
            stroke="#B28258"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </>
      )}

      {/* ====================================
          03 — SPICE BLENDING
      ==================================== */}

      {index === 2 && (
        <>
          {/* MORTAR */}

          <path
            d="M34 75 Q38 107 61 116 H119 Q142 107 146 75Z"
            fill="#843642"
            {...outline}
          />

          <ellipse
            cx="90"
            cy="75"
            rx="56"
            ry="15"
            fill="#E4C49D"
            {...outline}
          />

          <ellipse cx="90" cy="77" rx="43" ry="8" fill="#AA684E" />

          {/* PESTLE */}

          <path
            d="M83 76 L117 25 Q124 15 135 22 Q145 29 137 40 L102 87 Q91 94 83 76Z"
            fill="#C79B70"
            {...outline}
          />

          <path
            d="M121 30 L132 37"
            stroke="#F5DFC2"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* MORTAR BASE */}

          <rect
            x="57"
            y="114"
            width="66"
            height="10"
            rx="4"
            fill="#A4555E"
            {...outline}
          />

          <path d="M50 94 Q90 107 130 94" stroke="#F1C98E" strokeWidth="1.8" />

          {/* DECORATIVE SPICE PARTICLES */}

          {[
            [39, 32],
            [53, 47],
            [78, 24],
            [65, 34],
            [34, 53],
          ].map(([x, y], i) => (
            <ellipse
              key={i}
              cx={x}
              cy={y}
              rx="3.8"
              ry="2.5"
              fill="#C9A16C"
              transform={`rotate(30 ${x} ${y})`}
            />
          ))}

          <path
            d="M38 67 Q28 39 56 23"
            stroke="#C9A16C"
            strokeWidth="1.5"
            strokeDasharray="4 5"
            strokeLinecap="round"
          />
        </>
      )}

      {/* ====================================
          04 — PRODUCT PACKING
      ==================================== */}

      {index === 3 && (
        <>
          {/* PRODUCT POUCH */}

          <path
            d="M43 26 H137 L143 115 Q90 127 37 115Z"
            fill="#F3DDC0"
            {...outline}
          />

          <path d="M43 26 H137 V39 H43Z" fill="#843642" {...outline} />

          <path
            d="M39 104 Q90 112 141 104 L143 115 Q90 127 37 115Z"
            fill="#843642"
          />

          {/* POUCH WINDOW */}

          <rect
            x="55"
            y="50"
            width="70"
            height="48"
            rx="7"
            fill="#DBB68A"
            {...outline}
          />

          <path
            d="M56 77 Q90 64 124 77 V91 Q124 97 117 97 H63 Q56 97 56 90Z"
            fill="#AC6E4C"
          />

          {[0, 1, 2, 3, 4, 5].map((n) => (
            <circle
              key={n}
              cx={68 + (n % 3) * 19}
              cy={81 + Math.floor(n / 3) * 10}
              r="2.5"
              fill="#E6BC8D"
            />
          ))}

          {/* SEALED TOP DETAIL */}

          <path
            d="M49 32 H131"
            stroke="#F1C98E"
            strokeWidth="1.4"
            strokeDasharray="3 3"
          />

          <path
            d="M55 16 V22 M90 10 V20 M125 16 V22"
            stroke="#C9A16C"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      )}

      {/* ====================================
          05 — PRODUCT LABELLING
      ==================================== */}

      {index === 4 && (
        <>
          {/* FINISHED PRODUCT POUCH */}

          <path
            d="M25 27 H105 L113 115 Q69 126 19 115Z"
            fill="#E5C5A1"
            {...outline}
          />

          <path d="M25 27 H105 V40 H25Z" fill="#843642" />

          <path
            d="M21 106 Q67 114 111 106 L113 115 Q69 126 19 115Z"
            fill="#843642"
          />

          {/* PRODUCT INFORMATION LABEL */}

          <rect
            x="37"
            y="49"
            width="58"
            height="52"
            rx="5"
            fill="#FFFBF7"
            {...outline}
          />

          <rect x="44" y="56" width="44" height="9" rx="2" fill="#843642" />

          <path
            d="M45 73 H85 M45 79 H79 M45 85 H85"
            stroke="#B59375"
            strokeWidth="1.7"
            strokeLinecap="round"
          />

          {/* BARCODE DETAIL */}

          {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => (
            <path
              key={n}
              d={`M${48 + n * 4} 90 V96`}
              stroke="#843642"
              strokeWidth={n % 2 === 0 ? 1.8 : 0.8}
            />
          ))}

          {/* INFORMATION TAG */}

          <g transform="rotate(12 127 73)">
            <path
              d="M111 42 H149 L162 56 V111 H111Z"
              fill="#FFF8EE"
              {...outline}
            />

            <path d="M149 42 V56 H162" fill="#E1C29F" {...outline} />

            <circle cx="131" cy="52" r="3" fill="#D6AD81" />

            <path
              d="M120 68 H151 M120 76 H145 M120 84 H151"
              stroke="#B59375"
              strokeWidth="1.8"
              strokeLinecap="round"
            />

            <circle cx="139" cy="99" r="10" fill="#843642" />

            <path
              d="M134 99 L138 103 L144 95"
              stroke="#F1C98E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </>
      )}
    </svg>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function PreparationProcess() {
  const { language } = useContext(LanguageContext);

  const t = content[language === "mr" ? "mr" : "en"];

  const reducedMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 20 },

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

  return (
    <section
      id="preparation-process"
      aria-labelledby="process-heading"
      className="
        relative scroll-mt-[120px] isolate overflow-hidden
        border-y border-[#EADACB]
        bg-[#F8F0E6]
        py-10 sm:py-12 lg:py-14
      "
    >
      {/* ======================================
          BACKGROUND
      ====================================== */}

      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-20
          bg-[linear-gradient(120deg,#FBF6EF_0%,#F4E7D9_55%,#FBF6EF_100%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-12 left-1/2 -z-10
          -translate-x-1/2 select-none
          whitespace-nowrap
          font-['Poppins']
          text-[130px] font-black
          leading-none tracking-[-8px]
          text-[#843642]/[0.025]
          sm:text-[190px] lg:text-[260px]
        "
      >
        TRADITION
      </div>

      <div
        className="
        mx-auto max-w-[1350px]
        px-5 sm:px-8 lg:px-10
      "
      >
        {/* ====================================
            SECTION HEADER
        ==================================== */}

        <motion.div
          {...reveal()}
          className="
            mb-7 flex flex-col gap-3
            lg:mb-10 lg:flex-row
            lg:items-end lg:justify-between
            lg:gap-10
          "
        >
          <div>
            <div
              className="
              mb-3 flex items-center gap-3
            "
            >
              <span
                className="
                h-[2px] w-8 shrink-0
                bg-[#C9A16C]
              "
              />

              <span
                className="
                text-[10px] font-bold
                uppercase tracking-[2px]
                text-[#A77C50]
                sm:text-[11px]
              "
              >
                {t.eyebrow}
              </span>
            </div>

            <h2
              id="process-heading"
              className="
                font-['Poppins']
                text-[27px] font-semibold
                leading-[1.35]
                tracking-[-0.6px]
                text-[#4D3034]
                sm:text-[32px]
                lg:text-[35px]
              "
            >
              {t.heading}

              <span
                className="
                block text-[#843642]
              "
              >
                {t.accent}
              </span>
            </h2>
          </div>

          <p
            className="
            max-w-[390px]
            text-[13px] leading-[1.85]
            text-[#806E65]
            sm:text-[14px]
            lg:border-l lg:border-[#C9A16C]
            lg:pl-5
          "
          >
            {t.subtitle}
          </p>
        </motion.div>

        {/* ====================================
            PREMIUM PROCESS TIMELINE
        ==================================== */}

        <div
          className="
          relative rounded-[18px]
          border border-[#E8D8C8]
          bg-[#FFFBF7]/80
          px-4 py-5
          sm:px-6 sm:py-7
          lg:rounded-[22px]
          lg:px-5 lg:py-7
        "
        >
          <ol
            className="
            relative grid
            grid-cols-1 gap-0
            lg:grid-cols-5
          "
          >
            {/* DESKTOP CONNECTING LINE */}

            <motion.li
              aria-hidden="true"
              initial={reducedMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: reducedMotion ? 0 : 1.7,
                ease,
              }}
              className="
                pointer-events-none absolute
                left-[10%] right-[10%]
                top-[161px] hidden h-px
                origin-left bg-[#C9A16C]
                lg:block
              "
            />

            {t.process.map((item, index) => (
              <motion.li
                key={index}
                {...reveal(index * 0.1)}
                className={`
                  group relative grid min-w-0
                  grid-cols-[100px_1fr]
                  items-center gap-4
                  py-4
                  sm:grid-cols-[125px_1fr]
                  sm:gap-5
                  lg:flex lg:flex-col
                  lg:items-start lg:gap-0
                  lg:px-4 lg:py-0
                  ${
                    index !== t.process.length - 1
                      ? "border-b border-[#E8D8C8] lg:border-b-0"
                      : ""
                  }
                `}
              >
                {/* ==================================
                    ILLUSTRATION
                ================================== */}

                <div
                  className="
                  relative flex h-[110px]
                  w-full items-center
                  justify-center
                  sm:h-[125px]
                  lg:h-[140px]
                "
                >
                  {/* LARGE BACKGROUND NUMBER */}

                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none absolute
                      left-0 top-0
                      font-['Poppins']
                      text-[45px] font-bold
                      leading-none
                      text-[#843642]/[0.055]
                      sm:text-[58px]
                      lg:text-[72px]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <motion.div
                    whileHover={
                      reducedMotion
                        ? undefined
                        : {
                            y: -5,
                            scale: 1.04,
                          }
                    }
                    transition={{
                      duration: 0.35,
                      ease,
                    }}
                    className="
                      relative z-10
                      h-full w-full
                      max-w-[180px]
                    "
                  >
                    <ProcessIllustration index={index} />
                  </motion.div>
                </div>

                {/* ==================================
                    DESKTOP TIMELINE NUMBER
                ================================== */}

                <div
                  className="
                  relative z-10 hidden
                  h-[44px] w-full
                  items-center justify-center
                  lg:flex
                "
                >
                  <span
                    className="
                    flex h-[38px] w-[38px]
                    items-center justify-center
                    rounded-[10px]
                    border-[3px]
                    border-[#FFFBF7]
                    bg-[#843642]
                    text-[11px] font-bold
                    text-[#F1C98E]
                    shadow-[0_0_0_1px_#C9A16C]
                    transition-all duration-300
                    group-hover:bg-[#C9A16C]
                    group-hover:text-[#633B40]
                  "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {index !== t.process.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="
                        absolute -right-[27px]
                        flex h-6 w-6
                        items-center justify-center
                        bg-[#FFFBF7]
                        text-[#B78D5D]
                      "
                    >
                      <ArrowRight size={15} strokeWidth={1.6} />
                    </div>
                  )}
                </div>

                {/* ==================================
                    STEP CONTENT
                ================================== */}

                <div
                  className="
                  min-w-0
                  lg:mt-4 lg:w-full
                  lg:text-center
                "
                >
                  {/* MOBILE STEP NUMBER */}

                  <div
                    className="
                    mb-2 inline-flex
                    items-center gap-2
                    lg:hidden
                  "
                  >
                    <span
                      className="
                      text-[10px] font-bold
                      tracking-[1.5px]
                      text-[#A77C50]
                    "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="
                      h-px w-6
                      bg-[#C9A16C]
                    "
                    />
                  </div>

                  <h3
                    className="
                    font-['Poppins']
                    text-[14px] font-semibold
                    leading-[1.5]
                    text-[#843642]
                    sm:text-[16px]
                    lg:min-h-[48px]
                    lg:text-[15px]
                    xl:text-[16px]
                  "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                    mt-2 text-[12px]
                    leading-[1.8]
                    text-[#806E65]
                    sm:text-[13px]
                    lg:text-[12px]
                    xl:text-[13px]
                  "
                  >
                    {item.description}
                  </p>

                  {/* HOVER ACCENT */}

                  <div
                    className="
                    mt-4 h-[2px] w-6
                    rounded-full bg-[#C9A16C]
                    transition-all duration-500
                    group-hover:w-12
                    group-hover:bg-[#843642]
                    lg:mx-auto
                  "
                  />
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* ====================================
            PROCESS CONFIRMATION NOTE
        ==================================== */}

        <motion.div
          {...reveal(0.15)}
          className="
            mt-5 flex items-start
            justify-center gap-2
            sm:mt-6
          "
        >
          <Info
            size={14}
            strokeWidth={1.6}
            className="
              mt-0.5 shrink-0
              text-[#A77C50]
            "
          />

          <p
            className="
            text-center text-[10px]
            leading-relaxed
            text-[#947C6E]
            sm:text-[11px]
          "
          >
            {t.note}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
