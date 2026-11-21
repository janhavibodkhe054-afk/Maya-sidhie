
import React, { useContext } from "react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import { LanguageContext } from "../../context/LanguageContext";

// ==========================================
// CONTENT
// ==========================================

const content = {
  en: {
    eyebrow: "A LITTLE CARE GOES A LONG WAY",
    heading: "Keep the",
    accent: "Flavour Fresh.",
    subtitle:
      "Four simple steps to care for your favourite Maya’s LALA products.",

    instructions: [
      {
        title: "Store in a Cool & Dry Place",
        description:
          "Keep the product in a cool and dry place.",
      },
      {
        title: "Use an Airtight Container",
        description:
          "After opening, transfer the contents into an airtight container.",
      },
      {
        title: "Close After Every Use",
        description:
          "Keep the container properly closed after use.",
      },
      {
        title: "Check the Best-Before Date",
        description:
          "Follow the best-before date printed on the package.",
      },
    ],
  },

  mr: {
    eyebrow: "थोडीशी काळजी, चव टिकवण्यासाठी",
    heading: "चव आणि",
    accent: "ताजेपणा टिकवा.",
    subtitle:
      "मायाज लालाच्या आवडत्या उत्पादनांच्या योग्य साठवणुकीसाठी चार सोप्या सूचना.",

    instructions: [
      {
        title: "थंड आणि कोरडी जागा",
        description:
          "उत्पादन थंड आणि कोरड्या जागी ठेवा.",
      },
      {
        title: "हवाबंद डबा वापरा",
        description:
          "पाकीट उघडल्यानंतर त्यातील पदार्थ हवाबंद डब्यात ठेवा.",
      },
      {
        title: "वापरानंतर झाकण बंद करा",
        description:
          "प्रत्येक वापरानंतर डब्याचे झाकण व्यवस्थित बंद करा.",
      },
      {
        title: "बेस्ट बिफोर तारीख तपासा",
        description:
          "पाकिटावर दिलेल्या बेस्ट बिफोर तारखेचे पालन करा.",
      },
    ],
  },
};

const ease = [0.22, 1, 0.36, 1];

// ==========================================
// CUSTOM SVG ILLUSTRATIONS
// ==========================================

function StorageIllustration({ index }) {
  const common = {
    fill: "none",
    stroke: "#843642",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  return (
    <svg
      viewBox="0 0 140 125"
      className="h-full w-full"
      aria-hidden="true"
    >
      {/* COOL & DRY STORAGE */}

      {index === 0 && (
        <>
          <path
            d="M20 45 L70 13 L120 45"
            {...common}
          />

          <rect
            x="30"
            y="40"
            width="80"
            height="67"
            rx="4"
            fill="#F6E8D8"
            stroke="#843642"
            strokeWidth="1.8"
          />

          <path
            d="M39 73 H101 M39 97 H101"
            {...common}
          />

          <rect
            x="43"
            y="49"
            width="20"
            height="23"
            rx="4"
            fill="#D6A57D"
            stroke="#843642"
            strokeWidth="1.5"
          />

          <rect
            x="41"
            y="45"
            width="24"
            height="6"
            rx="2"
            fill="#843642"
          />

          <rect
            x="77"
            y="57"
            width="20"
            height="15"
            rx="3"
            fill="#C9A16C"
          />

          <path
            d="M48 83 H85 M48 89 H95"
            stroke="#B88A65"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M11 64 C18 57 20 68 26 62"
            {...common}
          />

          <path
            d="M114 63 C122 57 125 67 131 61"
            {...common}
          />
        </>
      )}

      {/* AIRTIGHT CONTAINER */}

      {index === 1 && (
        <>
          <rect
            x="37"
            y="32"
            width="66"
            height="80"
            rx="13"
            fill="#FFF9F0"
            stroke="#843642"
            strokeWidth="1.8"
          />

          <path
            d="M38 65 Q70 53 102 65 V99 Q102 112 89 112 H51 Q38 112 38 99Z"
            fill="#D6A57D"
          />

          <rect
            x="31"
            y="21"
            width="78"
            height="17"
            rx="5"
            fill="#843642"
          />

          <path
            d="M40 28 H100"
            stroke="#F1C98E"
            strokeWidth="1.5"
          />

          {[0, 1, 2, 3, 4, 5].map((n) => (
            <ellipse
              key={n}
              cx={50 + (n % 3) * 18}
              cy={77 + Math.floor(n / 3) * 19}
              rx="6"
              ry="3.5"
              transform={`rotate(-25 ${
                50 + (n % 3) * 18
              } ${77 + Math.floor(n / 3) * 19})`}
              fill="#B78055"
            />
          ))}

          <path
            d="M116 48 L122 54 L132 42"
            stroke="#A77C50"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}

      {/* KEEP CONTAINER CLOSED */}

      {index === 2 && (
        <>
          <rect
            x="40"
            y="50"
            width="60"
            height="61"
            rx="11"
            fill="#EAD3B6"
            stroke="#843642"
            strokeWidth="1.8"
          />

          <rect
            x="34"
            y="36"
            width="72"
            height="15"
            rx="5"
            fill="#843642"
          />

          <path
            d="M55 11 V27 M49 21 L55 27 L61 21"
            {...common}
          />

          <path
            d="M85 11 V27 M79 21 L85 27 L91 21"
            {...common}
          />

          <rect
            x="56"
            y="73"
            width="28"
            height="23"
            rx="5"
            fill="#843642"
          />

          <path
            d="M61 73 V65 A9 9 0 0 1 79 65 V73"
            {...common}
          />

          <circle
            cx="70"
            cy="83"
            r="2.5"
            fill="#F1C98E"
          />

          <path
            d="M70 84 V89"
            stroke="#F1C98E"
            strokeWidth="2"
          />
        </>
      )}

      {/* BEST BEFORE DATE */}

      {index === 3 && (
        <>
          <rect
            x="28"
            y="27"
            width="84"
            height="78"
            rx="9"
            fill="#FFF9F0"
            stroke="#843642"
            strokeWidth="1.8"
          />

          <path
            d="M28 37 Q28 27 38 27 H102 Q112 27 112 37 V47 H28Z"
            fill="#843642"
          />

          <path
            d="M48 18 V34 M92 18 V34"
            stroke="#C9A16C"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {[0, 1, 2, 3, 4, 5].map((n) => (
            <rect
              key={n}
              x={42 + (n % 3) * 21}
              y={57 + Math.floor(n / 3) * 17}
              width="10"
              height="8"
              rx="2"
              fill="#E8D2BA"
            />
          ))}

          <circle
            cx="104"
            cy="96"
            r="20"
            fill="#C9A16C"
            stroke="#FFFBF7"
            strokeWidth="4"
          />

          <path
            d="M95 96 L101 102 L113 89"
            stroke="#FFFFFF"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function StorageInstructions() {
  const { language } = useContext(LanguageContext);

  const t = content[language === "mr" ? "mr" : "en"];

  const reducedMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reducedMotion
      ? false
      : { opacity: 0, y: 18 },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.1,
    },

    transition: {
      duration: reducedMotion ? 0 : 0.65,
      delay: reducedMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="storage-instructions"
      aria-labelledby="storage-heading"
      className="
        relative isolate overflow-hidden
        bg-[#F8F0E6]
        py-10 sm:py-12 lg:py-14
      "
    >
      {/* ======================================
          SUBTLE BACKGROUND TYPOGRAPHY
      ====================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-8 left-1/2 -z-10
          -translate-x-1/2 select-none
          whitespace-nowrap font-['Poppins']
          text-[100px] font-black leading-none
          tracking-[-8px] text-[#843642]/[0.025]
          sm:text-[180px] lg:text-[245px]
        "
      >
        FRESHNESS
      </div>

      <div className="
        mx-auto max-w-[1350px]
        px-5 sm:px-8 lg:px-10
      ">

        {/* ====================================
            SECTION HEADING
        ==================================== */}

        <motion.div
          {...reveal()}
          className="
            mx-auto mb-8 max-w-[750px]
            text-center sm:mb-10
          "
        >
          <div className="
            mb-3 flex items-center
            justify-center gap-3
          ">
            <span className="
              h-px w-7 shrink-0 bg-[#C9A16C]
            " />

            <span className="
              text-[10px] font-bold uppercase
              tracking-[1.8px] text-[#A77C50]
              sm:text-[11px]
            ">
              {t.eyebrow}
            </span>

            <span className="
              h-px w-7 shrink-0 bg-[#C9A16C]
            " />
          </div>

          <h2
            id="storage-heading"
            className="
              font-['Poppins']
              text-[27px] font-semibold
              leading-[1.3] tracking-[-0.6px]
              text-[#4D3034]
              sm:text-[32px] lg:text-[35px]
            "
          >
            {t.heading}{" "}

            <span className="text-[#843642]">
              {t.accent}
            </span>
          </h2>

          <p className="
            mx-auto mt-3 max-w-[550px]
            text-[13px] leading-[1.8]
            text-[#806C5E] sm:text-[14px]
          ">
            {t.subtitle}
          </p>
        </motion.div>

        {/* ====================================
            ILLUSTRATED STORAGE GUIDE
        ==================================== */}

        <div className="
          relative grid grid-cols-2
          gap-x-4 gap-y-8
          sm:gap-x-8 lg:grid-cols-4
          lg:gap-8
        ">

          {/* CONNECTING LINE */}

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
              duration: reducedMotion ? 0 : 1.3,
              ease,
            }}
            className="
              absolute left-[12.5%] right-[12.5%]
              top-[65px] hidden h-px
              origin-left border-t border-dashed
              border-[#C9A16C]/60 lg:block
            "
          />

          {t.instructions.map((item, index) => (
            <motion.article
              key={index}
              {...reveal(index * 0.1)}
              className="
                group relative min-w-0
                text-center
              "
            >
              {/* ILLUSTRATION AREA */}

              <div className="
                relative mx-auto mb-4
                flex h-[115px] w-[115px]
                items-center justify-center
                sm:h-[130px] sm:w-[130px]
              ">

                {/* SOFT BACKGROUND */}

                <div className="
                  absolute inset-0 rounded-full
                  bg-[#FFFBF7]
                  shadow-[0_6px_25px_rgba(132,54,66,0.055)]
                  transition-all duration-500
                  group-hover:bg-[#F0DDC8]
                " />

                {/* CUSTOM SVG ANIMATION */}

                <motion.div
                  whileHover={
                    reducedMotion
                      ? undefined
                      : { y: -6, rotate: -3 }
                  }
                  transition={{
                    duration: 0.35,
                    ease,
                  }}
                  className="
                    relative z-10 h-[86%] w-[86%]
                  "
                >
                  <StorageIllustration index={index} />
                </motion.div>

                {/* STEP NUMBER */}

                <span className="
                  absolute -right-1 top-0 z-20
                  flex h-8 w-8 items-center
                  justify-center rounded-full
                  border-2 border-[#F8F0E6]
                  bg-[#843642]
                  text-[10px] font-bold
                  text-[#F1C98E]
                  shadow-sm
                ">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* TITLE */}

              <h3 className="
                mx-auto max-w-[230px]
                text-[13px] font-bold
                leading-[1.5] text-[#633B40]
                sm:text-[16px]
              ">
                {item.title}
              </h3>

              {/* DESCRIPTION */}

              <p className="
                mx-auto mt-2 max-w-[240px]
                text-[11px] leading-[1.8]
                text-[#806C5E]
                sm:text-[13px]
              ">
                {item.description}
              </p>

              {/* GOLD HOVER LINE */}

              <div className="
                mx-auto mt-4 h-[2px] w-7
                rounded-full bg-[#C9A16C]
                transition-all duration-500
                group-hover:w-14
                group-hover:bg-[#843642]
              " />
            </motion.article>
          ))}
        </div>

      </div>

      {/* BOTTOM DECORATIVE BORDER */}

      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 bottom-0
          h-[3px] bg-gradient-to-r
          from-transparent
          via-[#C9A16C]/65
          to-transparent
        "
      />
    </section>
  );
}
