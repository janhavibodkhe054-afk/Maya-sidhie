import React, { useContext } from "react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import { Link } from "react-router-dom";

import {
  CookingPot,
  UtensilsCrossed,
  Sprout,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

import { LanguageContext } from "../../context/LanguageContext";

// ==========================================
// CATEGORY DATA
// ==========================================

const categories = [
  {
    icon: Sprout,
    en: "Solapuri Shenga Chutney",
    mr: "सोलापुरी शेंगा चटणी",
    descEn: "The distinctive taste of Solapur.",
    descMr: "सोलापूरची अस्सल झणझणीत चव.",
    number: "01",
  },
  {
    icon: CookingPot,
    en: "Traditional Chutneys",
    mr: "पारंपरिक चटण्या",
    descEn: "Traditional flavours for every meal.",
    descMr: "प्रत्येक जेवणासाठी पारंपरिक चव.",
    number: "02",
  },
  {
    icon: UtensilsCrossed,
    en: "Authentic Food Specialities",
    mr: "अस्सल खाद्यपदार्थ",
    descEn: "Discover familiar Maharashtrian favourites.",
    descMr: "महाराष्ट्रातील आवडत्या खाद्यपदार्थांची चव.",
    number: "03",
  },
];

const ease = [0.22, 1, 0.36, 1];

// ==========================================
// CATEGORY CARD
// ==========================================

function CategoryCard({ category, index, lang }) {
  const reduceMotion = useReducedMotion();

  const Icon = category.icon;

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 32,
              scale: 0.96,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.75,
        delay: reduceMotion ? 0 : index * 0.13,
        ease,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -6,
              transition: {
                duration: 0.3,
              },
            }
      }
      whileTap={
        reduceMotion
          ? undefined
          : {
              scale: 0.98,
            }
      }
      className="h-full min-w-0"
    >

      <Link
        to="/products"
        className="
          group relative isolate
          flex h-full min-h-[120px]
          items-center gap-4
          overflow-hidden

          rounded-[13px]
          border border-[#DDC3A3]

          bg-[linear-gradient(145deg,#FFFCF7_0%,#FFF5E8_100%)]

          px-4 py-4

          shadow-[0_5px_20px_rgba(90,45,25,0.07)]

          transition-all duration-500

          hover:border-[#B78953]

          hover:shadow-[0_18px_40px_rgba(90,45,25,0.16)]

          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#843642]

          sm:min-h-[245px]
          sm:flex-col
          sm:justify-center
          sm:gap-0
          sm:px-5 sm:py-6

          lg:min-h-[255px]
        "
      >

        {/* ANIMATED BACKGROUND */}

        <span
          aria-hidden="true"
          className="
            pointer-events-none absolute
            inset-0 -z-20

            bg-[linear-gradient(145deg,#FFF0DC_0%,#F7DEBF_100%)]

            opacity-0
            transition-opacity duration-500

            group-hover:opacity-100
          "
        />

        {/* INNER PREMIUM BORDER */}

        <span
          aria-hidden="true"
          className="
            pointer-events-none absolute
            inset-[6px] -z-10

            rounded-[9px]
            border border-[#E9D4BB]

            transition-colors duration-500

            group-hover:border-[#C9A16C]
          "
        />

        {/* CATEGORY NUMBER */}

        <span
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -bottom-4 -right-1 -z-10

            select-none font-serif
            text-[100px] font-bold
            leading-none

            text-[#843642]/[0.045]

            transition-all duration-500

            group-hover:-translate-x-2
            group-hover:text-[#843642]/[0.08]

            lg:text-[125px]
          "
        >
          {category.number}
        </span>

        {/* GOLDEN CORNER DECORATION */}

        <span
          aria-hidden="true"
          className="
            absolute left-0 top-0
            h-7 w-7 rounded-tl-[13px]

            border-l-2 border-t-2
            border-[#B78953]

            transition-all duration-500

            group-hover:h-12
            group-hover:w-12
          "
        />

        <span
          aria-hidden="true"
          className="
            absolute bottom-0 right-0
            h-7 w-7 rounded-br-[13px]

            border-b-2 border-r-2
            border-[#B78953]

            transition-all duration-500

            group-hover:h-12
            group-hover:w-12
          "
        />

        {/* SHINE ANIMATION */}

        {!reduceMotion && (
          <span
            aria-hidden="true"
            className="
              pointer-events-none absolute
              inset-y-0 -left-1/2 z-20

              w-1/3 -skew-x-12

              bg-gradient-to-r
              from-transparent
              via-white/65
              to-transparent

              transition-all duration-1000

              group-hover:left-[140%]
            "
          />
        )}

        {/* =================================
            ANIMATED CATEGORY ICON
        ================================= */}

        <div className="
          relative flex h-[64px] w-[64px]
          shrink-0 items-center justify-center

          sm:mb-4
          sm:h-[80px] sm:w-[80px]

          lg:h-[86px] lg:w-[86px]
        ">

          {/* OUTER CIRCLE */}

          <span
            aria-hidden="true"
            className="
              absolute inset-0
              rounded-full
              border border-dashed
              border-[#B78953]

              transition-transform duration-700

              motion-safe:group-hover:rotate-90
            "
          />

          {/* INNER CIRCLE */}

          <span className="
            absolute inset-[6px]
            rounded-full

            border border-[#DEC09C]

            bg-gradient-to-br
            from-[#FFF7EA]
            to-[#EFD4B1]

            shadow-[0_4px_12px_rgba(132,54,66,0.09)]

            transition-all duration-500

            group-hover:border-[#843642]

            group-hover:from-[#A54B56]
            group-hover:to-[#70242D]
          " />

          {/* ICON */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    scale: 0.65,
                    rotate: -12,
                  }
            }
            whileInView={{
              scale: 1,
              rotate: 0,
            }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 17,
              delay: reduceMotion
                ? 0
                : 0.15 + index * 0.12,
              duration: reduceMotion ? 0 : undefined,
            }}
            className="relative z-10"
          >

            <Icon
              strokeWidth={1.5}
              className="
                h-7 w-7
                text-[#843642]

                transition-all duration-500

                group-hover:text-[#FFE4B5]

                motion-safe:group-hover:scale-110
                motion-safe:group-hover:-rotate-6

                sm:h-9 sm:w-9
              "
            />

          </motion.div>

          {/* SMALL GOLDEN DIAMOND */}

          <span
            aria-hidden="true"
            className="
              absolute -top-[2px]
              left-1/2 h-[6px] w-[6px]

              -translate-x-1/2 rotate-45

              bg-[#B78953]
            "
          />

        </div>

        {/* =================================
            CARD CONTENT
        ================================= */}

        <div className="
          relative min-w-0 flex-1

          sm:flex-none sm:text-center
        ">

          <h3 className="
            font-['Poppins']
            text-[15px] font-semibold
            leading-[1.45]

            text-[#642832]

            transition-colors duration-300

            group-hover:text-[#843642]

            sm:text-[17px]
            lg:text-[19px]
          ">

            {category[lang]}

          </h3>

          <p className="
            mt-1.5
            text-[12px] font-medium
            leading-[1.7]
            text-[#654B3D]

            sm:mx-auto sm:mt-2
            sm:max-w-[240px]
            sm:text-[13px]
          ">

            {lang === "mr"
              ? category.descMr
              : category.descEn}

          </p>

          {/* ANIMATED EXPLORE LINK */}

          <div className="
            mt-3 hidden
            items-center justify-center gap-2

            sm:flex
          ">

            <span className="
              relative text-[12px]
              font-semibold text-[#843642]
            ">

              {lang === "mr"
                ? "अधिक जाणून घ्या"
                : "Explore Category"}

              <span className="
                absolute -bottom-1 left-0

                h-px w-full origin-left
                scale-x-0 bg-[#843642]

                transition-transform duration-500

                group-hover:scale-x-100
              " />

            </span>

            <ArrowRight
              size={15}
              strokeWidth={2}
              className="
                text-[#843642]

                transition-transform duration-300

                motion-safe:group-hover:translate-x-1.5
              "
            />

          </div>

        </div>

        {/* =================================
            ANIMATED ARROW BUTTON
        ================================= */}

        <span className="
          relative flex h-9 w-9
          shrink-0 items-center justify-center

          overflow-hidden rounded-[7px]

          border border-[#E2C4A1]

          bg-[#F4E3CE]
          text-[#843642]

          transition-all duration-500

          group-hover:border-[#843642]
          group-hover:bg-[#843642]
          group-hover:text-white

          sm:absolute sm:right-3.5 sm:top-3.5
        ">

          <ArrowUpRight
            size={18}
            strokeWidth={1.8}
            className="
              absolute

              transition-transform duration-300

              motion-safe:group-hover:translate-x-7
              motion-safe:group-hover:-translate-y-7
            "
          />

          {!reduceMotion && (
            <ArrowUpRight
              size={18}
              strokeWidth={1.8}
              className="
                absolute
                -translate-x-7 translate-y-7

                transition-transform duration-300

                group-hover:translate-x-0
                group-hover:translate-y-0
              "
            />
          )}

        </span>

        {/* ANIMATED BOTTOM GOLDEN LINE */}

        <span
          aria-hidden="true"
          className="
            absolute bottom-0 left-1/2
            h-[3px] w-[35%]

            -translate-x-1/2

            bg-gradient-to-r
            from-transparent
            via-[#B78953]
            to-transparent

            transition-all duration-500

            group-hover:w-[90%]
          "
        />

      </Link>

    </motion.div>
  );
}

// ==========================================
// MAIN PRODUCT CATEGORIES SECTION
// ==========================================

export default function ProductCategories() {
  const { language } = useContext(LanguageContext);

  const lang = language === "mr" ? "mr" : "en";

  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="categories-title"
      className="
        relative isolate overflow-hidden

        bg-[#FFF8F0]

        px-4 py-8

        sm:px-6 sm:py-10
        lg:px-8 lg:py-12
      "
    >

      {/* =====================================
          BACKGROUND IMAGE
      ===================================== */}

      <motion.div
        aria-hidden="true"
        initial={
          reduceMotion
            ? false
            : { scale: 1.05 }
        }
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: reduceMotion ? 0 : 1.8,
          ease,
        }}
        className="
          pointer-events-none absolute
          inset-0 -z-30

          bg-cover bg-center bg-no-repeat
        "
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/d4/a2/e1/d4a2e11dc77970927c44a57640e6f462.jpg')",
        }}
      />

      {/* PREMIUM BACKGROUND OVERLAY */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          inset-0 -z-20

          bg-[linear-gradient(110deg,rgba(255,248,240,0.94)_0%,rgba(255,248,240,0.78)_50%,rgba(255,248,240,0.94)_50%)]
        "
      />

      {/* SUBTLE GOLDEN PATTERN */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          inset-0 -z-10

          bg-[radial-gradient(#B78953_1px,transparent_1px)]

          [background-size:22px_22px]

          opacity-[0.05]
        "
      />

      <div className="relative mx-auto max-w-[1240px]">

        {/* =====================================
            PREMIUM SECTION HEADING
        ===================================== */}

        <div className="mb-6 text-center sm:mb-8">

          {/* EYEBROW */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 12,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              ease,
            }}
            className="
              mb-2.5 inline-flex
              items-center justify-center gap-2.5
            "
          >

            <span className="
              h-px w-5 bg-[#B78953]
              sm:w-8
            " />

            <span className="
              h-[5px] w-[5px]
              rotate-45 bg-[#B78953]
            " />

            <p className="
              text-[10px] font-bold
              uppercase tracking-[2px]

              text-[#94622E]

              sm:text-[11px]
            ">

              {lang === "mr"
                ? "आमची पारंपरिक चव"
                : "DISCOVER OUR TASTE"}

            </p>

            <span className="
              h-[5px] w-[5px]
              rotate-45 bg-[#B78953]
            " />

            <span className="
              h-px w-5 bg-[#B78953]
              sm:w-8
            " />

          </motion.div>

          

          {/* DESCRIPTION */}

          <motion.p
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 10,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              delay: reduceMotion ? 0 : 0.18,
              ease,
            }}
            className="
              mx-auto mt-2 max-w-[550px]

              text-[13px] font-medium
              leading-[1.8]
              text-[#654B3D]

              sm:text-[14px]
            "
          >

            {lang === "mr"
              ? "महाराष्ट्राच्या पारंपरिक आणि अस्सल चवींचा आनंद घ्या."
              : "Explore the authentic flavours of Maharashtra, inspired by tradition."}

          </motion.p>

          {/* ANIMATED GOLDEN DIVIDER */}

          <div className="
            mx-auto mt-3.5 flex
            items-center justify-center gap-2.5
          ">

            <motion.span
              initial={
                reduceMotion
                  ? false
                  : { scaleX: 0 }
              }
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.9,
                delay: reduceMotion ? 0 : 0.2,
                ease,
              }}
              className="
                h-px w-12 origin-right

                bg-gradient-to-r
                from-transparent to-[#B78953]

                sm:w-16
              "
            />

            <motion.span
              initial={
                reduceMotion
                  ? false
                  : {
                      rotate: 0,
                      scale: 0,
                    }
              }
              whileInView={{
                rotate: 45,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: reduceMotion ? 0 : 0.3,
                ease,
              }}
              className="
                h-[7px] w-[7px]
                border border-[#B78953]
                bg-[#F4D9B6]
              "
            />

            <motion.span
              initial={
                reduceMotion
                  ? false
                  : { scaleX: 0 }
              }
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.9,
                delay: reduceMotion ? 0 : 0.2,
                ease,
              }}
              className="
                h-px w-12 origin-left

                bg-gradient-to-l
                from-transparent to-[#B78953]

                sm:w-16
              "
            />

          </div>

        </div>

        {/* =====================================
            CATEGORY CARDS GRID
        ===================================== */}

        <div className="
          grid grid-cols-1 gap-3

          sm:grid-cols-3 sm:gap-4

          lg:gap-6
        ">

          {categories.map((category, index) => (
            <CategoryCard
              key={category.en}
              category={category}
              index={index}
              lang={lang}
            />
          ))}

        </div>

      </div>

    </section>
  );
}