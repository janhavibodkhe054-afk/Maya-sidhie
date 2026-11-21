import React, { useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  MapPin,
  Flame,
  HeartHandshake,
  Quote,
  Sparkles,
} from "lucide-react";

import { LanguageContext } from "../../context/LanguageContext";

const ease = [0.22, 1, 0.36, 1];

// ==========================================
// BILINGUAL CONTENT
// ==========================================

const content = {
  en: {
    eyebrow: "OUR JOURNEY",
    heading1: "Inspired by a Tradition",
    heading2: "Since 1968.",
    intro:
      "The LALA name is associated with a food tradition that traces its roots to 1968 in Solapur.",

    yearLabel: "ROOTS OF A FOOD TRADITION",
    location: "SOLAPUR, MAHARASHTRA",

    timeline: [
      {
        number: "01",
        title: "The Roots",
        text: "The LALA name is associated with a food tradition that traces its roots to 1968 in Solapur.",
        icon: MapPin,
      },
      {
        number: "02",
        title: "A Distinctive Taste",
        text: "Known for its distinctive spicy flavours, the tradition reflects the rich culinary identity of the region.",
        icon: Flame,
      },
      {
        number: "03",
        title: "Carrying the Inspiration Forward",
        text: "Inspired by this heritage, Maya’s LALA Food Products brings forward the familiar taste of traditional Solapuri Shenga Chutney.",
        icon: HeartHandshake,
      },
    ],

    closing:
      "Our journey represents a connection between regional food culture and the needs of today’s consumers.",

    closingLabel: "TRADITION MEETS TODAY",
  },

  mr: {
    eyebrow: "आमचा प्रवास",
    heading1: "१९६८ पासूनच्या खाद्यपरंपरेतून",
    heading2: "मिळालेली प्रेरणा.",
    intro:
      "लाला हे नाव सोलापूरमधील १९६८ पासून सुरू झालेल्या एका खाद्यपरंपरेशी जोडलेले आहे.",

    yearLabel: "खाद्यपरंपरेची मुळे",
    location: "सोलापूर, महाराष्ट्र",

    timeline: [
      {
        number: "०१",
        title: "परंपरेची सुरुवात",
        text: "लाला हे नाव सोलापूरमधील १९६८ पासून सुरू झालेल्या एका खाद्यपरंपरेशी जोडलेले आहे.",
        icon: MapPin,
      },
      {
        number: "०२",
        title: "वैशिष्ट्यपूर्ण तिखट चव",
        text: "आपल्या खास तिखट चवीसाठी ओळखली जाणारी ही परंपरा सोलापूरच्या समृद्ध खाद्यसंस्कृतीचे दर्शन घडवते.",
        icon: Flame,
      },
      {
        number: "०३",
        title: "परंपरेतून पुढे जाणारा प्रवास",
        text: "याच वारशातून प्रेरणा घेऊन मायाज लाला फूड प्रॉडक्ट्स पारंपरिक सोलापुरी शेंगा चटणीची परिचित चव पुढे आणत आहे.",
        icon: HeartHandshake,
      },
    ],

    closing:
      "आमचा प्रवास म्हणजे प्रादेशिक खाद्यसंस्कृती आणि आजच्या ग्राहकांच्या गरजा यांना जोडणारा एक दुवा आहे.",

    closingLabel: "परंपरा आणि आधुनिक काळाचा संगम",
  },
};

// ==========================================
// DECORATIVE HERITAGE PATTERN
// ==========================================

function HeritagePattern({ index }) {
  return (
    <svg
      viewBox="0 0 220 220"
      fill="none"
      aria-hidden="true"
      className="h-full w-full"
    >
      {index === 0 && (
        <>
          {[35, 55, 75, 95, 108].map((r) => (
            <circle
              key={r}
              cx="110"
              cy="110"
              r={r}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}

          {Array.from({ length: 12 }, (_, i) => (
            <path
              key={i}
              d="M110 12 Q150 60 110 105 Q70 60 110 12Z"
              transform={`rotate(${i * 30} 110 110)`}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
        </>
      )}

      {index === 1 && (
        <>
          {Array.from({ length: 9 }, (_, i) => (
            <path
              key={i}
              d={`M${20 + i * 22} 0 Q${-40 + i * 22} 110 ${20 + i * 22} 220`}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}

          {Array.from({ length: 9 }, (_, i) => (
            <path
              key={i}
              d={`M0 ${20 + i * 22} Q110 ${80 + i * 22} 220 ${20 + i * 22}`}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
        </>
      )}

      {index === 2 && (
        <>
          {Array.from({ length: 8 }, (_, i) => (
            <rect
              key={i}
              x={15 + i * 10}
              y={15 + i * 10}
              width={190 - i * 20}
              height={190 - i * 20}
              rx="25"
              transform={`rotate(${i * 9} 110 110)`}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
        </>
      )}
    </svg>
  );
}

// ==========================================
// PREMIUM JOURNEY CARD
// ==========================================

function JourneyCard({ item, index, reduceMotion }) {
  const Icon = item.icon;
  const dark = index === 1;

  return (
    <motion.article
      initial={reduceMotion ? false : { y: 20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.75,
        delay: reduceMotion ? 0 : index * 0.14,
        ease,
      }}
      className={`
        group relative isolate flex h-full min-w-0 flex-col
        overflow-hidden rounded-[12px] border
        transition-all duration-500
        motion-safe:hover:-translate-y-2
        ${
          dark
            ? "border-[#A96369] bg-[#843642] shadow-[0_10px_25px_rgba(132,54,66,0.14)] hover:shadow-[0_18px_35px_rgba(132,54,66,0.24)]"
            : "border-[#DCC3A5] bg-[#FFFCF7] shadow-[0_6px_20px_rgba(98,59,44,0.06)] hover:border-[#C9A16C] hover:shadow-[0_18px_35px_rgba(98,59,44,0.12)]"
        }
      `}
    >
      {/* UNIQUE CARD BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background: dark
            ? "linear-gradient(145deg, #A34C58 0%, #843642 45%, #62232F 100%)"
            : index === 0
            ? "linear-gradient(145deg, #FFFDF8 0%, #F8EDDE 100%)"
            : "linear-gradient(145deg, #FFFDF9 0%, #F4E2CF 100%)",
        }}
      />

      {/* ANIMATED DECORATIVE PATTERN */}

      <motion.div
        aria-hidden="true"
        whileHover={reduceMotion ? undefined : { rotate: 20 }}
        transition={{ duration: 1.2, ease }}
        className={`
          pointer-events-none absolute -right-16 -top-16 -z-10
          h-[230px] w-[230px]
          transition-transform duration-1000
          motion-safe:group-hover:rotate-12
          ${dark ? "text-[#F1C98E]/15" : "text-[#B78953]/15"}
        `}
      >
        <HeritagePattern index={index} />
      </motion.div>

      {/* INNER FRAME */}

      <div
        aria-hidden="true"
        className={`
          pointer-events-none absolute inset-[6px] rounded-[8px] border
          ${dark ? "border-[#F1C98E]/20" : "border-[#D6B68C]/25"}
        `}
      />

      {/* GOLDEN TOP ACCENT */}

      <div className="absolute inset-x-0 top-0 h-[3px] overflow-hidden">
        <span className="absolute inset-0 bg-gradient-to-r from-[#AC7946] via-[#F1C98E] to-[#AC7946]" />

        <span
          className="
            absolute inset-y-0 -left-1/2 w-1/3
            bg-gradient-to-r from-transparent via-white/80 to-transparent
            transition-all duration-1000 motion-safe:group-hover:left-[130%]
          "
        />
      </div>

      {/* CARD HEADER */}

      <div className="relative flex items-center justify-between px-5 pt-6 sm:px-7">
        {/* ICON DESIGN */}

        <div
          className={`
            relative flex h-[66px] w-[66px] items-center justify-center
            rounded-[14px] border p-[5px] sm:h-[76px] sm:w-[76px]
            ${dark ? "border-[#F1C98E]/50" : "border-[#D2AE84]"}
          `}
        >
          <motion.div
            whileHover={
              reduceMotion
                ? undefined
                : { rotate: -8, scale: 1.08 }
            }
            transition={{
              type: "spring",
              stiffness: 230,
              damping: 17,
            }}
            className={`
              relative flex h-full w-full items-center justify-center
              overflow-hidden rounded-[10px]
              transition-colors duration-500
              ${
                dark
                  ? "bg-gradient-to-br from-[#FFE6BC] to-[#D5A76E] text-[#752B37]"
                  : "bg-gradient-to-br from-[#A34C58] to-[#752B37] text-[#F1C98E]"
              }
            `}
          >
            <Icon
              size={29}
              strokeWidth={1.5}
              className="
                relative z-10 transition-transform duration-500
                motion-safe:group-hover:scale-110
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute -bottom-5 -right-5 h-14 w-14
                rounded-full border border-current opacity-20
              "
            />
          </motion.div>

          <span
            className={`
              absolute -right-1 -top-1 h-[9px] w-[9px] rotate-45
              ${dark ? "bg-[#F1C98E]" : "bg-[#B78953]"}
            `}
          />
        </div>

        {/* OVERSIZED CARD NUMBER */}

        <span
          aria-hidden="true"
          className={`
            select-none font-['Poppins'] text-[65px] font-bold
            leading-none tracking-[-4px] sm:text-[80px]
            transition-transform duration-700
            motion-safe:group-hover:scale-110
            ${dark ? "text-[#F1C98E]/20" : "text-[#843642]/10"}
          `}
        >
          {item.number}
        </span>
      </div>

      {/* CARD CONTENT */}

      <div className="relative flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-7 sm:pb-7">
        {/* SMALL SECTION DECORATION */}

        <div className="mb-3 flex items-center gap-2">
          <span
            className={`
              h-[5px] w-[5px] rotate-45
              ${dark ? "bg-[#F1C98E]" : "bg-[#B78953]"}
            `}
          />

          <span
            className={`
              h-px w-8 transition-all duration-500
              group-hover:w-14
              ${dark ? "bg-[#F1C98E]" : "bg-[#B78953]"}
            `}
          />
        </div>

        <h3
          className={`
            font-['Poppins'] text-[19px] font-semibold
            leading-[1.5] sm:text-[21px]
            ${dark ? "text-[#FFF9F1]" : "text-[#70242D]"}
          `}
        >
          {item.title}
        </h3>

        <p
          className={`
            mt-3 flex-1 text-[13px] leading-[1.85] sm:text-[14px]
            ${dark ? "text-[#FFF0E3]" : "text-[#604C43]"}
          `}
        >
          {item.text}
        </p>

        {/* BOTTOM HERITAGE ORNAMENT */}

        <div
          aria-hidden="true"
          className={`
            mt-5 flex items-center gap-2 border-t pt-3
            ${dark ? "border-[#F1C98E]/25" : "border-[#DDC4A9]"}
          `}
        >
          <div className="flex items-center gap-1">
            {[0, 1, 2].map((dot) => (
              <span
                key={dot}
                className={`
                  h-[4px] w-[4px] rotate-45
                  transition-transform duration-500
                  motion-safe:group-hover:scale-125
                  ${dark ? "bg-[#F1C98E]" : "bg-[#B78953]"}
                `}
                style={{ opacity: 1 - dot * 0.25 }}
              />
            ))}
          </div>

          <div
            className={`
              relative h-px flex-1 overflow-hidden
              ${dark ? "bg-[#F1C98E]/20" : "bg-[#DBC2A4]"}
            `}
          >
            <span
              className={`
                absolute inset-0 origin-left scale-x-0
                transition-transform duration-700 group-hover:scale-x-100
                ${dark ? "bg-[#F1C98E]" : "bg-[#843642]"}
              `}
            />
          </div>

          <Sparkles
            size={17}
            strokeWidth={1.5}
            className={`
              transition-transform duration-500
              motion-safe:group-hover:rotate-12
              ${dark ? "text-[#F1C98E]" : "text-[#B78953]"}
            `}
          />
        </div>
      </div>
    </motion.article>
  );
}

// ==========================================
// MAIN OUR JOURNEY COMPONENT
// ==========================================

export default function OurJourney() {
  const { language } = useContext(LanguageContext);

  const lang = language === "mr" ? "mr" : "en";
  const t = content[lang];

  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0, y = 18) => ({
    initial: reduceMotion ? false : { y },
    whileInView: { y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: {
      duration: reduceMotion ? 0 : 0.75,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="our-journey"
      aria-labelledby="journey-heading"
      className="
        relative isolate overflow-hidden
        border-y border-[#E8D6C0]
        bg-[#F8F1E9]
        py-10 sm:py-12 lg:py-14
      "
    >
      {/* ======================================
          SECTION BACKGROUND
      ====================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-20
          bg-[linear-gradient(135deg,#F4E5D4_0%,#FFFCF7_48%,#F6E8D8_100%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(#B78953_1px,transparent_1px)]
          [background-size:25px_25px] opacity-[0.045]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-32 -top-32 -z-10
          h-[420px] w-[420px] text-[#B78953]/10
        "
      >
        <HeritagePattern index={0} />
      </div>

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -bottom-40 -left-40 -z-10
          h-[400px] w-[400px] text-[#B78953]/10
        "
      >
        <HeritagePattern index={0} />
      </div>

      <div className="mx-auto max-w-[1320px] px-4 sm:px-7 lg:px-10">

        {/* ======================================
            SECTION HEADER
        ====================================== */}

        <motion.div
          {...reveal()}
          className="mx-auto max-w-[850px] text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-2.5">
            <span className="h-px w-8 bg-[#B78953]" />

            <span className="h-[5px] w-[5px] rotate-45 bg-[#B78953]" />

            <span className="text-[10px] font-bold tracking-[2px] text-[#875B30] sm:text-[11px]">
              {t.eyebrow}
            </span>

            <span className="h-[5px] w-[5px] rotate-45 bg-[#B78953]" />

            <span className="h-px w-8 bg-[#B78953]" />
          </div>

          <h2
            id="journey-heading"
            className="
              font-['Poppins'] text-[27px] font-semibold
              leading-[1.4] tracking-[-0.6px] text-[#482D32]
              sm:text-[32px] lg:text-[36px]
            "
          >
            {t.heading1}{" "}

            <span className="text-[#843642]">
              {t.heading2}
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-[660px] text-[14px] leading-[1.85] text-[#604C43] sm:text-[15px]">
            {t.intro}
          </p>
        </motion.div>

        {/* ======================================
            PREMIUM 1968 HERITAGE DISPLAY
        ====================================== */}

        <motion.div
          {...reveal(0.1)}
          className="relative mx-auto mt-7 flex max-w-[950px] flex-col items-center sm:mt-9"
        >
          <div className="relative flex items-center justify-center gap-5 sm:gap-10">

            {/* LEFT ORNAMENT */}

            <div className="hidden items-center gap-2 sm:flex">
              <motion.span
                initial={reduceMotion ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 1.1,
                  ease,
                }}
                className="
                  h-px w-20 origin-right
                  bg-gradient-to-r from-transparent to-[#B78953]
                  lg:w-32
                "
              />

              <span className="h-2 w-2 rotate-45 border border-[#B78953]" />
            </div>

            {/* YEAR TYPOGRAPHY */}

            <div className="relative text-center">
              <span
                aria-hidden="true"
                className="
                  pointer-events-none absolute left-1/2 top-1/2
                  -translate-x-1/2 -translate-y-1/2
                  select-none whitespace-nowrap font-['Poppins']
                  text-[120px] font-bold leading-none tracking-[-8px]
                  text-[#843642]/[0.04]
                  sm:text-[180px] lg:text-[220px]
                "
              >
                1968
              </span>

              <motion.div
                initial={reduceMotion ? false : { scale: 0.92 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 1.1,
                  ease,
                }}
                className="relative"
              >
                <span
                  className="
                    inline-block font-['Poppins']
                    text-[85px] font-bold leading-none tracking-[-5px]
                    text-transparent bg-clip-text
                    bg-gradient-to-b from-[#A34C58] via-[#843642] to-[#54202B]
                    sm:text-[115px] lg:text-[135px]
                  "
                >
                  1968
                </span>

                <div className="mt-2.5 flex items-center justify-center gap-2">
                  <span className="h-px w-5 bg-[#B78953]" />

                  <span className="text-[9px] font-bold tracking-[1.3px] text-[#875B30] sm:text-[11px]">
                    {t.yearLabel}
                  </span>

                  <span className="h-px w-5 bg-[#B78953]" />
                </div>
              </motion.div>
            </div>

            {/* RIGHT ORNAMENT */}

            <div className="hidden items-center gap-2 sm:flex">
              <span className="h-2 w-2 rotate-45 border border-[#B78953]" />

              <motion.span
                initial={reduceMotion ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 1.1,
                  ease,
                }}
                className="
                  h-px w-20 origin-left
                  bg-gradient-to-l from-transparent to-[#B78953]
                  lg:w-32
                "
              />
            </div>
          </div>

          {/* LOCATION LABEL */}

          <div
            className="
              relative mt-4 inline-flex items-center gap-2
              rounded-[5px] border border-[#DBC2A4]
              bg-[#F4E5D3] px-4 py-2.5
            "
          >
            <MapPin size={15} strokeWidth={1.7} className="text-[#843642]" />

            <span className="text-[10px] font-bold tracking-[1.1px] text-[#70242D]">
              {t.location}
            </span>
          </div>
        </motion.div>

        {/* ======================================
            NEW PREMIUM HERITAGE TIMELINE
        ====================================== */}

        <div className="relative mt-8 sm:mt-10">

          {/* SINGLE DESKTOP CONNECTING LINE */}

          <div
            aria-hidden="true"
            className="
              absolute left-[16.66%] right-[16.66%] top-[22px]
              hidden h-[2px] bg-[#DEC5A7] lg:block
            "
          />

          <motion.div
            aria-hidden="true"
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 1.6,
              ease,
            }}
            className="
              absolute left-[16.66%] right-[16.66%] top-[22px]
              hidden h-[2px] origin-left
              bg-gradient-to-r from-[#B78953] via-[#843642] to-[#B78953]
              lg:block
            "
          />

          {/* MOBILE VERTICAL TIMELINE */}

          <div
            aria-hidden="true"
            className="
              absolute bottom-5 left-[16px] top-[18px]
              w-px bg-[#D2AF87] lg:hidden
            "
          />

          <motion.div
            aria-hidden="true"
            initial={reduceMotion ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: reduceMotion ? 0 : 1.6,
              ease,
            }}
            className="
              absolute bottom-5 left-[16px] top-[18px]
              w-[2px] origin-top bg-gradient-to-b
              from-[#B78953] via-[#843642] to-[#B78953]
              lg:hidden
            "
          />

          {/* TIMELINE CARDS */}

          <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
            {t.timeline.map((item, index) => (
              <div
                key={index}
                className="relative flex min-w-0 flex-col pl-12 lg:pl-0"
              >

                {/* TIMELINE NODE */}

                <motion.div
                  initial={reduceMotion ? false : { scale: 0.85 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.6,
                    delay: reduceMotion ? 0 : index * 0.12,
                    ease,
                  }}
                  className="
                    absolute left-0 top-5 z-20
                    flex h-[34px] w-[34px]
                    items-center justify-center
                    rounded-full border border-[#B78953]
                    bg-[#FFF9F0] p-[4px]
                    lg:relative lg:left-auto lg:top-auto
                    lg:mx-auto lg:mb-5 lg:h-[46px] lg:w-[46px]
                  "
                >
                  <span
                    className="
                      flex h-full w-full items-center justify-center
                      rounded-full bg-[#843642]
                      text-[11px] font-bold text-[#F1C98E]
                      shadow-[0_3px_9px_rgba(132,54,66,0.18)]
                      lg:text-[13px]
                    "
                  >
                    {item.number}
                  </span>
                </motion.div>

                {/* PREMIUM CARD */}

                <div className="flex flex-1 flex-col">
                  <JourneyCard
                    item={item}
                    index={index}
                    reduceMotion={reduceMotion}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================
            PREMIUM CLOSING STATEMENT
        ====================================== */}

        <motion.div
          {...reveal(0.12)}
          className="
            relative isolate mt-7 overflow-hidden
            rounded-[10px] border border-[#DCC09D]
            bg-gradient-to-r from-[#F0DCC3] via-[#FFF5E6] to-[#F0DCC3]
            sm:mt-9
          "
        >
          {/* DECORATIVE PATTERN */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute -right-16 -top-20 -z-10
              h-[250px] w-[250px] text-[#B78953]/15
            "
          >
            <HeritagePattern index={0} />
          </div>

          <div
            className="
              flex flex-col items-start gap-3
              px-5 py-5
              sm:flex-row sm:items-center sm:gap-6
              sm:px-7 sm:py-6
            "
          >
            {/* QUOTE ICON */}

            <div
              className="
                flex h-12 w-12 shrink-0 items-center justify-center
                rounded-[9px] border border-[#C9A16C]
                bg-[#843642] text-[#F1C98E]
                sm:h-[65px] sm:w-[65px]
              "
            >
              <Quote size={29} strokeWidth={1.5} />
            </div>

            {/* CLOSING TEXT */}

            <div className="flex-1 sm:border-l sm:border-[#D4B38E] sm:pl-6">
              <div className="mb-2 flex items-center gap-2">
                <span className="h-[5px] w-[5px] rotate-45 bg-[#B78953]" />

                <span className="text-[10px] font-bold tracking-[1.6px] text-[#875B30]">
                  {t.closingLabel}
                </span>
              </div>

              <p
                className="
                  max-w-[930px] font-['Poppins']
                  text-[15px] font-medium leading-[1.75]
                  text-[#70242D] sm:text-[17px] lg:text-[18px]
                "
              >
                {t.closing}
              </p>
            </div>

            <Sparkles
              size={27}
              strokeWidth={1.2}
              className="hidden shrink-0 text-[#B78953] lg:block"
            />
          </div>

          {/* ANIMATED GOLDEN BOTTOM BORDER */}

          <motion.span
            aria-hidden="true"
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 1.2,
              ease,
            }}
            className="
              absolute inset-x-0 bottom-0 h-[2px] origin-center
              bg-gradient-to-r from-transparent via-[#B78953] to-transparent
            "
          />
        </motion.div>
      </div>
    </section>
  );
}