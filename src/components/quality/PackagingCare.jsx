
import React, { useContext, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

import {
  Wheat,
  ClipboardList,
  PackageCheck,
  Factory,
  ArrowUpRight,
} from "lucide-react";

import { LanguageContext } from "../../context/LanguageContext";

const ease = [0.22, 1, 0.36, 1];

// ==========================================
// BILINGUAL CONTENT
// ==========================================

const content = {
  en: {
    eyebrow: "PACKAGING & PRODUCT CARE",

    heading: "Packed for",
    accent: "Everyday Convenience.",

    description:
      "Our packaged food products are designed to bring traditional flavours into everyday kitchens.",

    description2:
      "The product packaging includes ingredient information, nutritional details, storage instructions and manufacturer information to help consumers make informed choices.",

    productName: "Solapuri Shenga Chutney",

    explore: "Explore Our Packaging",

    information: [
      {
        title: "Ingredient Information",
        description:
          "Know the ingredients used in your favourite food product.",
        detail:
          "Refer to the ingredient list printed on the product packaging.",
      },
      {
        title: "Nutritional Details",
        description:
          "Understand the nutritional information of the product.",
        detail:
          "Refer to the nutritional information provided on the package.",
      },
      {
        title: "Storage Instructions",
        description:
          "Store your favourite products as recommended.",
        detail:
          "Follow the storage instructions and best-before date printed on the package.",
      },
      {
        title: "Manufacturer Information",
        description:
          "Know the manufacturer behind your favourite flavours.",
        detail:
          "Siddhalaxmi Mahila Gruh Udyog, Solapur, Maharashtra.",
      },
    ],
  },

  mr: {
    eyebrow: "पॅकेजिंग आणि उत्पादनाची काळजी",

    heading: "रोजच्या वापरासाठी",
    accent: "सोयीस्कर पॅकेजिंग.",

    description:
      "पारंपरिक चव प्रत्येक घराच्या स्वयंपाकघरापर्यंत पोहोचवण्यासाठी आमची पॅकबंद खाद्य उत्पादने तयार केली जातात.",

    description2:
      "ग्राहकांना योग्य निवड करता यावी यासाठी उत्पादनाच्या पॅकिंगवर जिन्नसांची माहिती, पोषणमूल्ये, साठवणुकीच्या सूचना आणि उत्पादकाची माहिती दिली जाते.",

    productName: "सोलापुरी शेंगा चटणी",

    explore: "पॅकेजिंगविषयी जाणून घ्या",

    information: [
      {
        title: "जिन्नसांची माहिती",
        description:
          "आपल्या आवडत्या खाद्यपदार्थातील जिन्नस जाणून घ्या.",
        detail:
          "उत्पादनाच्या पाकिटावर दिलेली जिन्नसांची यादी पाहा.",
      },
      {
        title: "पोषणमूल्यांची माहिती",
        description:
          "उत्पादनातील पोषणमूल्यांची माहिती जाणून घ्या.",
        detail:
          "उत्पादनाच्या पाकिटावर दिलेली पोषणमूल्यांची माहिती पाहा.",
      },
      {
        title: "साठवणुकीच्या सूचना",
        description:
          "आवडत्या उत्पादनांची सूचनेनुसार साठवणूक करा.",
        detail:
          "पाकिटावरील साठवणुकीच्या सूचना आणि बेस्ट बिफोर तारखेचे पालन करा.",
      },
      {
        title: "उत्पादकाची माहिती",
        description:
          "आपल्या आवडत्या चवीमागील उत्पादकाला जाणून घ्या.",
        detail:
          "सिद्धलक्ष्मी महिला गृह उद्योग, सोलापूर, महाराष्ट्र.",
      },
    ],
  },
};

const icons = [
  Wheat,
  ClipboardList,
  PackageCheck,
  Factory,
];

// ==========================================
// PACKAGING INFORMATION ITEM
// ==========================================

function InformationItem({
  item,
  index,
  active,
  onSelect,
  reducedMotion,
  side,
}) {
  const Icon = icons[index];

  return (
    <motion.button
      type="button"
      aria-pressed={active}
      onClick={() => onSelect(index)}
      onMouseEnter={() => onSelect(index)}
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              x: side === "left" ? -18 : 18,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: reducedMotion ? 0 : 0.7,
        delay: reducedMotion ? 0 : index * 0.08,
        ease,
      }}
      className={`
        group relative flex h-full w-full
        min-w-0 flex-col items-start
        rounded-[14px] border
        p-3.5 text-left
        outline-none transition-colors duration-300
        focus-visible:ring-2
        focus-visible:ring-[#843642]
        sm:p-5 lg:min-h-[152px]
        ${
          active
            ? "border-[#843642]/25 bg-[#843642] shadow-[0_10px_30px_rgba(132,54,66,0.13)]"
            : "border-[#E8D8C9] bg-[#FFFBF7] hover:border-[#C9A16C]"
        }
      `}
    >

      {/* ICON AND NUMBER */}

      <div className="
        mb-3 flex w-full items-center
        justify-between gap-2
      ">

        <div className={`
          flex h-10 w-10 shrink-0
          items-center justify-center
          rounded-[10px]
          transition-colors duration-300
          sm:h-12 sm:w-12
          ${
            active
              ? "bg-white/10 text-[#F1C98E]"
              : "bg-[#F3E5D6] text-[#843642]"
          }
        `}>

          <Icon
            size={23}
            strokeWidth={1.5}
          />

        </div>

        <span className={`
          font-['Poppins']
          text-[23px] font-semibold
          leading-none
          sm:text-[28px]
          ${
            active
              ? "text-white/25"
              : "text-[#843642]/15"
          }
        `}>
          {String(index + 1).padStart(2, "0")}
        </span>

      </div>

      {/* INFORMATION */}

      <h3 className={`
        text-[12px] font-semibold
        leading-[1.5] sm:text-[15px]
        ${
          active
            ? "text-white"
            : "text-[#843642]"
        }
      `}>
        {item.title}
      </h3>

      <p className={`
        mt-1.5 text-[11px]
        leading-[1.75] sm:text-[12px]
        ${
          active
            ? "text-[#F0DAD6]"
            : "text-[#806E65]"
        }
      `}>
        {item.description}
      </p>

      {/* BOTTOM ACCENT */}

      <div className="
        mt-auto flex w-full items-center
        justify-between pt-3
      ">

        <span className={`
          h-[2px] rounded-full
          transition-all duration-500
          ${
            active
              ? "w-10 bg-[#F1C98E]"
              : "w-5 bg-[#C9A16C]"
          }
        `} />

        <ArrowUpRight
          size={14}
          strokeWidth={1.6}
          className={`
            transition-colors
            ${
              active
                ? "text-[#F1C98E]"
                : "text-[#B99C81]"
            }
          `}
        />

      </div>

    </motion.button>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function PackagingCare() {
  const { language } = useContext(LanguageContext);

  const t = content[language === "mr" ? "mr" : "en"];

  const reducedMotion = useReducedMotion();

  const [active, setActive] = useState(0);

  const ActiveIcon = icons[active];

  const reveal = (delay = 0) => ({
    initial: reducedMotion
      ? false
      : { opacity: 0, y: 20 },

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
      id="packaging-care"
      aria-labelledby="packaging-heading"
      className="
        relative isolate overflow-hidden
        bg-[#FFFBF7]
        py-10 sm:py-12 lg:py-14
      "
    >

      {/* ======================================
          BACKGROUND
      ====================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          inset-0 -z-20
          bg-[linear-gradient(180deg,#FFFBF7_0%,#F9F0E6_55%,#FFFBF7_100%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-1/2 top-1/2 -z-10
          h-[500px] w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#E7C7A1]/20
          blur-[120px]
        "
      />

      <div className="
        mx-auto max-w-[1300px]
        px-4 sm:px-8 lg:px-10
      ">

        {/* ====================================
            SECTION HEADING
        ==================================== */}

        <motion.div
          {...reveal()}
          className="
            mx-auto mb-7 max-w-[850px]
            text-center sm:mb-9
          "
        >

          <div className="
            mb-3 flex items-center
            justify-center gap-3
          ">

            <span className="
              h-px w-8 shrink-0
              bg-[#C9A16C]
            " />

            <span className="
              text-[10px] font-bold
              uppercase tracking-[2px]
              text-[#A77C50]
              sm:text-[11px]
            ">
              {t.eyebrow}
            </span>

            <span className="
              h-px w-8 shrink-0
              bg-[#C9A16C]
            " />

          </div>

          <h2
            id="packaging-heading"
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
            {t.heading}{" "}

            <span className="text-[#843642]">
              {t.accent}
            </span>

          </h2>

          <p className="
            mx-auto mt-3 max-w-[680px]
            text-[13px] leading-[1.85]
            text-[#746258]
            sm:text-[15px]
          ">
            {t.description}
          </p>

          <p className="
            mx-auto mt-2 max-w-[770px]
            text-[12px] leading-[1.85]
            text-[#806E65]
            sm:text-[13px]
          ">
            {t.description2}
          </p>

        </motion.div>

        {/* ====================================
            INTERACTIVE PACKAGING SHOWCASE
        ==================================== */}

        <div className="
          relative mx-auto grid
          max-w-[1150px]
          grid-cols-2 gap-3
          sm:gap-4
          lg:grid-cols-[1fr_1.45fr_1fr]
          lg:items-center lg:gap-12
        ">

          {/* ==================================
              DESKTOP CONNECTING LINES
          ================================== */}

          <svg
            viewBox="0 0 1100 360"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="
              pointer-events-none absolute
              inset-0 hidden h-full w-full
              overflow-visible lg:block
            "
          >

            {[
              "M 260 85 H 350 L 440 150",
              "M 260 275 H 350 L 440 215",
              "M 840 85 H 750 L 660 150",
              "M 840 275 H 750 L 660 215",
            ].map((path, index) => (
              <motion.path
                key={index}
                d={path}
                fill="none"
                stroke={
                  active === index
                    ? "#843642"
                    : "#D8BEA0"
                }
                strokeWidth={
                  active === index ? 1.8 : 1
                }
                strokeDasharray={
                  active === index
                    ? undefined
                    : "5 5"
                }
                initial={
                  reducedMotion
                    ? false
                    : { pathLength: 0 }
                }
                whileInView={{
                  pathLength: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reducedMotion ? 0 : 1.3,
                  delay: reducedMotion ? 0 : index * 0.12,
                }}
              />
            ))}

            {[
              [440, 150],
              [440, 215],
              [660, 150],
              [660, 215],
            ].map(([x, y], index) => (
              <circle
                key={index}
                cx={x}
                cy={y}
                r={active === index ? 5 : 3}
                fill={
                  active === index
                    ? "#843642"
                    : "#C9A16C"
                }
              />
            ))}

          </svg>

          {/* ==================================
              LEFT INFORMATION — DESKTOP
          ================================== */}

          <div className="
            relative z-10 hidden
            flex-col gap-4 lg:flex
          ">

            {[0, 1].map((index) => (
              <InformationItem
                key={index}
                item={t.information[index]}
                index={index}
                active={active === index}
                onSelect={setActive}
                reducedMotion={reducedMotion}
                side="left"
              />
            ))}

          </div>

          {/* ==================================
              CENTER PRODUCT SHOWCASE
          ================================== */}

          <div className="
            relative col-span-2
            flex min-h-[285px]
            flex-col items-center
            justify-center
            sm:min-h-[330px]
            lg:col-span-1
            lg:min-h-[360px]
          ">

            {/* PRODUCT BACKGROUND CIRCLE */}

            <div
              aria-hidden="true"
              className="
                absolute left-1/2 top-[43%]
                h-[215px] w-[215px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[radial-gradient(circle,#FFFDF9_0%,#F0DEC7_100%)]
                sm:h-[270px] sm:w-[270px]
                lg:h-[290px] lg:w-[290px]
              "
            />

            {/* ANIMATED RING */}

            <div className="
              absolute left-1/2 top-[43%]
              h-[245px] w-[245px]
              -translate-x-1/2
              -translate-y-1/2
              sm:h-[305px] sm:w-[305px]
              lg:h-[325px] lg:w-[325px]
            ">

              <motion.div
                aria-hidden="true"
                animate={
                  reducedMotion
                    ? undefined
                    : { rotate: 360 }
                }
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  h-full w-full rounded-full
                  border border-dashed
                  border-[#C9A16C]/60
                "
              />

            </div>

            {/* SUBTLE WATERMARK */}

            <span
              aria-hidden="true"
              className="
                pointer-events-none absolute
                left-1/2 top-[23%]
                -translate-x-1/2
                select-none font-['Poppins']
                text-[85px] font-black
                leading-none
                tracking-[-5px]
                text-[#843642]/[0.055]
                sm:text-[115px]
              "
            >
              LALA
            </span>

            {/* PRODUCT DISPLAY */}

            <div className="
              relative z-10 flex
              h-[235px] w-full
              items-center justify-center
              sm:h-[275px]
              lg:h-[300px]
            ">

              {/* PRODUCT SHADOW */}

              <div className="
                absolute bottom-3
                left-1/2 h-7 w-[45%]
                -translate-x-1/2
                rounded-[50%]
                bg-[#843642]/15 blur-md
              " />

              <motion.img
                src="/p1.png"
                alt={t.productName}
                loading="lazy"
                decoding="async"
                initial={false}
                animate={
                  reducedMotion
                    ? undefined
                    : { y: [0, -6, 0] }
                }
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative z-10 h-full
                  w-[90%] max-w-[330px]
                  object-contain
                  drop-shadow-[0_15px_18px_rgba(99,59,64,0.18)]
                "
              />

            </div>

            {/* PRODUCT NAME */}

            <motion.div
              {...reveal(0.1)}
              className="
                relative z-10 mt-3
                text-center
              "
            >

              <h3 className="
                font-['Poppins']
                text-[16px] font-semibold
                text-[#843642]
                sm:text-[19px]
              ">
                {t.productName}
              </h3>

              <p className="
                mt-1 text-[10px]
                font-medium uppercase
                tracking-[1.5px]
                text-[#A77C50]
                sm:text-[11px]
              ">
                Maya’s LALA Food Products
              </p>

            </motion.div>

          </div>

          {/* ==================================
              RIGHT INFORMATION — DESKTOP
          ================================== */}

          <div className="
            relative z-10 hidden
            flex-col gap-4 lg:flex
          ">

            {[2, 3].map((index) => (
              <InformationItem
                key={index}
                item={t.information[index]}
                index={index}
                active={active === index}
                onSelect={setActive}
                reducedMotion={reducedMotion}
                side="right"
              />
            ))}

          </div>

          {/* ==================================
              MOBILE & TABLET INFORMATION
          ================================== */}

          {t.information.map((item, index) => (
            <div
              key={index}
              className="relative z-10 lg:hidden"
            >

              <InformationItem
                item={item}
                index={index}
                active={active === index}
                onSelect={setActive}
                reducedMotion={reducedMotion}
                side={index % 2 === 0 ? "left" : "right"}
              />

            </div>
          ))}

        </div>

        {/* ====================================
            ACTIVE INFORMATION STRIP
        ==================================== */}

        <motion.div
          {...reveal(0.15)}
          className="
            relative mx-auto mt-6
            max-w-[1150px]
            overflow-hidden rounded-[12px]
            border border-[#E5D3BF]
            bg-[#F5E9DB]
            sm:mt-7
          "
        >

          {/* ACTIVE LEFT BORDER */}

          <div className="
            absolute inset-y-0 left-0
            w-[3px] bg-[#843642]
          " />

          <div
            aria-live="polite"
            className="min-h-[100px] sm:min-h-[85px]"
          >

            <AnimatePresence mode="wait">

              <motion.div
                key={`${language}-${active}`}
                initial={
                  reducedMotion
                    ? false
                    : { opacity: 0, y: 8 }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={
                  reducedMotion
                    ? undefined
                    : { opacity: 0, y: -8 }
                }
                transition={{
                  duration: reducedMotion ? 0 : 0.22,
                }}
                className="
                  flex min-w-0 items-center
                  gap-3 px-4 py-4
                  sm:gap-5 sm:px-6
                "
              >

                <div className="
                  flex h-11 w-11 shrink-0
                  items-center justify-center
                  rounded-[12px]
                  bg-[#843642] text-[#F1C98E]
                  sm:h-12 sm:w-12
                ">

                  <ActiveIcon
                    size={23}
                    strokeWidth={1.5}
                  />

                </div>

                <div className="min-w-0 flex-1">

                  <p className="
                    text-[12px] font-semibold
                    text-[#843642]
                    sm:text-[14px]
                  ">
                    {t.information[active].title}
                  </p>

                  <p className="
                    mt-1 text-[11px]
                    leading-[1.75]
                    text-[#746258]
                    sm:text-[13px]
                  ">
                    {t.information[active].detail}
                  </p>

                </div>

                {/* ACTIVE NUMBER */}

                <div className="
                  hidden items-center gap-1
                  border-l border-[#D9BE9F]
                  pl-5 sm:flex
                ">

                  <span className="
                    font-['Poppins']
                    text-[26px] font-semibold
                    text-[#843642]
                  ">
                    {String(active + 1).padStart(2, "0")}
                  </span>

                  <span className="
                    text-[12px]
                    text-[#A77C50]
                  ">
                    / 04
                  </span>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

        </motion.div>

        {/* ====================================
            INTERACTIVE STEP INDICATORS
        ==================================== */}

        <div className="
          mt-5 flex items-center
          justify-center gap-2
        ">

          {t.information.map((item, index) => (
            <button
              key={index}
              type="button"
              aria-label={item.title}
              aria-pressed={active === index}
              onClick={() => setActive(index)}
              className="
                flex h-7 min-w-7
                items-center justify-center
                rounded-full
                outline-none
                focus-visible:ring-2
                focus-visible:ring-[#843642]
              "
            >

              <motion.span
                animate={{
                  width: active === index ? 25 : 7,
                  backgroundColor:
                    active === index
                      ? "#843642"
                      : "#D9C2AB",
                }}
                transition={{
                  duration: reducedMotion ? 0 : 0.3,
                }}
                className="block h-[7px] rounded-full"
              />

            </button>
          ))}

        </div>

      </div>
    </section>
  );
}
