
import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { LanguageContext } from "../../context/LanguageContext";

// ==========================================
// CONTENT
// ==========================================

const content = {
  en: {
    eyebrow: "A LEGACY OF FLAVOUR",
    heading1: "A Taste Inspired by",
    heading2: "Solapur's Food Heritage",

    paragraph1:
      "Solapur has a distinctive food culture, known for its bold spices, traditional recipes and flavourful accompaniments.",

    paragraph2:
      "Our story draws inspiration from a food tradition associated with the LALA name since 1968.",

    paragraph3:
      "Maya's LALA Food Products carries this inspiration forward through traditional food products that celebrate the familiar taste of Maharashtra.",

    since: "SINCE",
    year: "1968",
    highlight: "A Tradition of Taste",
    photoLabel: "ROOTED IN SOLAPUR",
    photoSub: "Inspired by tradition. Made for today.",
    cta: "Discover Our Story",
  },

  mr: {
    eyebrow: "चवीचा समृद्ध वारसा",
    heading1: "सोलापूरच्या खाद्यपरंपरेतून",
    heading2: "प्रेरित झालेली अस्सल चव",

    paragraph1:
      "सोलापूरची खाद्यसंस्कृती तिच्या झणझणीत मसाल्यांसाठी, पारंपरिक पाककृतींसाठी आणि चविष्ट पदार्थांसाठी ओळखली जाते.",

    paragraph2:
      "आमच्या प्रवासाला १९६८ पासून लाला नावाशी जोडलेल्या खाद्यपरंपरेची प्रेरणा लाभली आहे.",

    paragraph3:
      "महाराष्ट्राच्या परिचित पारंपरिक चवींचा वारसा जपणाऱ्या खाद्यपदार्थांमधून मायाज लाला फूड प्रॉडक्ट्स ही प्रेरणा पुढे नेत आहे.",

    since: "सन",
    year: "१९६८",
    highlight: "चवीची समृद्ध परंपरा",
    photoLabel: "सोलापूरच्या मातीत रुजलेली परंपरा",
    photoSub: "परंपरेतून प्रेरणा, आजच्या काळासाठी.",
    cta: "आमची कहाणी जाणून घ्या",
  },
};

const ease = [0.22, 1, 0.36, 1];

// ==========================================
// PREMIUM DOT EXPAND BUTTON
// ==========================================

function HeritageButton({ children }) {
  return (
    <Link
      to="/about"
      className="
        group relative inline-flex
        min-h-[55px] items-center
        justify-center gap-5
        overflow-hidden rounded-full
        bg-[#8B3540] px-7 py-3
        text-[13px] font-semibold text-white
        shadow-[0_12px_30px_rgba(139,53,64,0.18)]
        transition-all duration-500
        hover:-translate-y-1
        hover:shadow-[0_18px_45px_rgba(117,67,127,0.3)]
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-[#75437F]
      "
    >
      {/* PLUM VIOLET DOT EXPAND */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-1/2 top-1/2
          h-3 w-3
          -translate-x-1/2 -translate-y-1/2
          scale-0 rounded-full
          bg-[#75437F]
          transition-transform duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:scale-[90]
        "
      />

      <span className="relative z-10">
        {children}
      </span>

      <span
        className="
          relative z-10 flex h-8 w-8
          items-center justify-center
          rounded-full bg-white/15
          transition-all duration-500
          group-hover:translate-x-1
          group-hover:rotate-45
          group-hover:bg-white/25
        "
      >
        <ArrowUpRight size={17} strokeWidth={1.8} />
      </span>
    </Link>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function OurHeritage() {
  const { language } = useContext(LanguageContext);
  const lang = language === "mr" ? "mr" : "en";
  const t = content[lang];

  const sectionRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const inView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
  });

  const visible = reducedMotion || inView;

  return (
    <section
      ref={sectionRef}
      id="our-heritage"
      aria-labelledby="heritage-heading"
      className="
        relative isolate overflow-hidden
        bg-[#FBF6EF]
        py-16 sm:py-20 lg:py-24
      "
    >
      {/* BACKGROUND DECORATION */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="
            absolute -left-36 -top-36
            h-[420px] w-[420px]
            rounded-full
            border border-[#DCC5B5]/40
          "
        />

        <div
          className="
            absolute -left-24 -top-24
            h-[300px] w-[300px]
            rounded-full
            border border-[#DCC5B5]/30
          "
        />

        <motion.div
          className="
            absolute -right-32 bottom-0
            h-[400px] w-[400px]
            rounded-full
            bg-[#E9C6C2]/20
            blur-[120px]
          "
          animate={
            reducedMotion
              ? undefined
              : {
                  x: [0, -45, 0],
                  y: [0, -25, 0],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* MAIN GRID */}
      <div
        className="
          mx-auto grid max-w-[1350px]
          items-center gap-12
          px-5 sm:px-8
          lg:grid-cols-[0.95fr_1.05fr]
          lg:gap-20 lg:px-10
        "
      >
        {/* =====================================
            LEFT HERITAGE IMAGE COMPOSITION
        ===================================== */}
        <motion.div
          initial={
            reducedMotion
              ? false
              : { opacity: 0, x: -50, scale: 0.95 }
          }
          animate={
            visible
              ? { opacity: 1, x: 0, scale: 1 }
              : { opacity: 0, x: -50, scale: 0.95 }
          }
          transition={{
            duration: reducedMotion ? 0 : 0.95,
            ease,
          }}
          className="
            relative mx-auto w-full
            max-w-[550px]
            pb-9 pr-5
            sm:pb-12 sm:pr-10
          "
        >
          {/* GOLD FRAME OUTLINE */}
          <div
            className="
              absolute bottom-0 right-0
              top-10 left-9
              rounded-[28px]
              border border-[#C9A16C]/55
              sm:left-12
            "
          />

          {/* MAIN PHOTO */}
          <div
            className="
              group relative h-[380px]
              overflow-hidden rounded-[28px]
              bg-[#E5D3C3]
              shadow-[0_25px_60px_rgba(80,45,37,0.15)]
              sm:h-[480px]
            "
          >
            <motion.img
              src="/solapur.jpg"
              alt="Traditional Maharashtrian food heritage"
              loading="lazy"
              className="
                h-full w-full object-cover
                transition-transform duration-[1200ms]
                group-hover:scale-110
              "
            />

            {/* PHOTO GRADIENT */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-t
                from-[#351C23]/80
                via-transparent
                to-transparent
              "
            />

            {/* PHOTO CAPTION */}
            <div className="absolute bottom-7 left-7 right-7">
              <div className="mb-3 h-px w-12 bg-[#E8C69A]" />

              <p
                className="
                  text-[10px] font-bold
                  uppercase tracking-[2px]
                  text-[#E8C69A]
                "
              >
                {t.photoLabel}
              </p>

              <p
                className="
                  mt-2 text-[14px]
                  leading-[1.6] text-white/90
                "
              >
                {t.photoSub}
              </p>
            </div>
          </div>

          {/* FLOATING SINCE 1968 BADGE */}
          <motion.div
            initial={
              reducedMotion
                ? false
                : { opacity: 0, scale: 0.75 }
            }
            animate={
              visible
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.75 }
            }
            transition={{
              duration: reducedMotion ? 0 : 0.7,
              delay: 0.5,
              ease,
            }}
            className="
              absolute -bottom-2 right-0
              z-20 flex h-[135px] w-[135px]
              flex-col items-center justify-center
              rounded-full
              border-[5px] border-[#FBF6EF]
              bg-[#8B3540] text-center
              shadow-[0_15px_35px_rgba(95,35,45,0.25)]
              sm:h-[160px] sm:w-[160px]
            "
          >
            <span
              className="
                text-[10px] font-semibold
                uppercase tracking-[2px]
                text-[#E8C69A]
              "
            >
              {t.since}
            </span>

            <span
              className="
                mt-1 text-[37px] font-bold
                leading-none text-white
                sm:text-[44px]
              "
            >
              {t.year}
            </span>

            <span
              className="
                mt-2 max-w-[110px]
                text-[9px] leading-[1.4]
                text-[#F5DDD1]
                sm:text-[10px]
              "
            >
              {t.highlight}
            </span>
          </motion.div>

          {/* SMALL DECORATIVE SPARKLE */}
          <Sparkles
            aria-hidden="true"
            size={25}
            strokeWidth={1.3}
            className="
              absolute -left-3 top-5
              text-[#C9A16C]
            "
          />
        </motion.div>

        {/* =====================================
            RIGHT HERITAGE CONTENT
        ===================================== */}
        <motion.div
          initial={
            reducedMotion
              ? false
              : { opacity: 0, x: 45 }
          }
          animate={
            visible
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: 45 }
          }
          transition={{
            duration: reducedMotion ? 0 : 0.9,
            delay: reducedMotion ? 0 : 0.15,
            ease,
          }}
        >
          {/* EYEBROW */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C9A16C]" />

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

          {/* HEADING */}
          <h2
            id="heritage-heading"
            className="
              max-w-[650px]
              font-['Poppins']
              text-[27px] font-semibold
              leading-[1.3] tracking-[-0.7px]
              text-[#4C2C2C]
              sm:text-[31px] lg:text-[35px]
            "
          >
            {t.heading1}

            <span className="block text-[#8B3540]">
              {t.heading2}
            </span>
          </h2>

          {/* PARAGRAPHS */}
          <p
            className="
              mt-6 max-w-[600px]
              text-[14px] leading-[1.95]
              text-[#79675C]
              sm:text-[15px]
            "
          >
            {t.paragraph1}
          </p>

          <p
            className="
              mt-4 max-w-[600px]
              text-[14px] leading-[1.95]
              text-[#79675C]
              sm:text-[15px]
            "
          >
            {t.paragraph2}
          </p>

          <p
            className="
              mt-4 max-w-[600px]
              text-[14px] leading-[1.95]
              text-[#79675C]
              sm:text-[15px]
            "
          >
            {t.paragraph3}
          </p>

          {/* HERITAGE HIGHLIGHT */}
          <div
            className="
              relative mt-7 overflow-hidden
              rounded-r-[18px]
              border-l-[3px] border-[#C9A16C]
              bg-[#F2E7DA]
              px-5 py-5
              sm:px-6
            "
          >
            <div className="flex items-center gap-4">
              <span
                className="
                  text-[27px] font-bold
                  text-[#8B3540]
                  sm:text-[31px]
                "
              >
                {t.year}
              </span>

              <div className="h-9 w-px bg-[#D5BCA4]" />

              <div>
                <p
                  className="
                    text-[10px] font-bold
                    uppercase tracking-[1.5px]
                    text-[#A77C50]
                  "
                >
                  {t.since}
                </p>

                <p
                  className="
                    mt-1 text-[14px]
                    font-semibold text-[#60373B]
                    sm:text-[15px]
                  "
                >
                  {t.highlight}
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <HeritageButton>{t.cta}</HeritageButton>
          </div>

          {/* DECORATIVE SIGNATURE */}
          <div className="mt-10 flex items-center gap-3">
            <span className="h-px w-16 bg-[#C9A16C]" />

            <span
              className="
                text-[10px] font-semibold
                uppercase tracking-[2px]
                text-[#A77C50]
              "
            >
              MAYA'S LALA
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#C9A16C]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
