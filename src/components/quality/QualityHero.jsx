
import React, { useContext } from "react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import { LanguageContext } from "../../context/LanguageContext";

const ease = [0.22, 1, 0.36, 1];

// ==========================================
// BILINGUAL CONTENT
// ==========================================

const content = {
  en: {
    heading: "Great Taste Begins with",
    accent: "the Right Ingredients.",

    description:
      "At Maya’s LALA Food Products, we recognise the importance of ingredients, flavour balance and thoughtful preparation in traditional food products.",
  },

  mr: {
    heading: "उत्तम चवीची सुरुवात",
    accent: "योग्य जिन्नसांपासून होते.",

    description:
      "मायाज लाला फूड प्रॉडक्ट्समध्ये आम्ही पारंपरिक खाद्यपदार्थांसाठी योग्य जिन्नस, चवीचा समतोल आणि काळजीपूर्वक तयारी यांना महत्त्व देतो.",
  },
};

// ==========================================
// QUALITY HERO
// ==========================================

export default function QualityHero() {
  const { language } = useContext(LanguageContext);

  const t = content[language === "mr" ? "mr" : "en"];

  const reducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="quality-hero-heading"
      className="
        relative isolate flex
        min-h-[280px] items-center
        justify-center overflow-hidden
        bg-[#4D3034] py-10
        sm:min-h-[320px]
        lg:min-h-[350px]
      "
    >

      {/* ======================================
          BACKGROUND IMAGE
      ====================================== */}

      <motion.img
        src="https://thestateplate.com/cdn/shop/products/2_1.jpg?v=1680931727"
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        initial={
          reducedMotion
            ? false
            : { scale: 1.12 }
        }
        animate={{ scale: 1 }}
        transition={{
          duration: reducedMotion ? 0 : 1.8,
          ease,
        }}
        className="
          absolute inset-0 -z-30
          h-full w-full
          object-cover object-center
        "
      />

      {/* ======================================
          DARK OVERLAY
      ====================================== */}

      <motion.div
        aria-hidden="true"
        initial={
          reducedMotion
            ? false
            : { opacity: 0.85 }
        }
        animate={{ opacity: 0.60 }}
        transition={{
          duration: reducedMotion ? 0 : 1.2,
          ease,
        }}
        className="
          absolute inset-0 -z-20
          bg-[#291619]
        "
      />

      {/* GRADIENT OVERLAY */}

      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-10
          bg-gradient-to-r
          from-[#291619]/30
          via-transparent
          to-[#291619]/30
        "
      />

      {/* ======================================
          HERO CONTENT
      ====================================== */}

      <div className="
        relative mx-auto
        w-full max-w-[1000px]
        px-5 text-center sm:px-8
      ">

        <div key={language}>

          {/* HEADING LINE 1 */}

          <div className="overflow-hidden py-1">

            <motion.h2
              id="quality-hero-heading"
              initial={
                reducedMotion
                  ? false
                  : { opacity: 0, y: "100%" }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: reducedMotion ? 0 : 0.8,
                delay: reducedMotion ? 0 : 0.12,
                ease,
              }}
              className="
                font-['Poppins']
                text-[27px] font-semibold
                leading-[1.3]
                tracking-[-0.5px]
                text-white drop-shadow-lg
                sm:text-[35px]
                lg:text-[43px]
              "
            >
              {t.heading}

              <motion.span
                initial={
                  reducedMotion
                    ? false
                    : { opacity: 0, y: 20 }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: reducedMotion ? 0 : 0.8,
                  delay: reducedMotion ? 0 : 0.25,
                  ease,
                }}
                className="
                  mt-1 block
                  text-[#F1C98E]
                "
              >
                {t.accent}
              </motion.span>
            </motion.h2>

          </div>

          {/* GOLD DIVIDER */}

          <motion.div
            initial={
              reducedMotion
                ? false
                : { opacity: 0, scaleX: 0 }
            }
            animate={{
              opacity: 1,
              scaleX: 1,
            }}
            transition={{
              duration: reducedMotion ? 0 : 0.8,
              delay: reducedMotion ? 0 : 0.4,
              ease,
            }}
            className="
              mx-auto my-4
              h-[2px] w-14
              origin-center rounded-full
              bg-[#F1C98E]
            "
          />

          {/* DESCRIPTION */}

          <motion.p
            initial={
              reducedMotion
                ? false
                : { opacity: 0, y: 15 }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: reducedMotion ? 0 : 0.85,
              delay: reducedMotion ? 0 : 0.5,
              ease,
            }}
            className="
              mx-auto max-w-[720px]
              text-[13px] font-normal
              leading-[1.85]
              text-[#FFF4E8]
              sm:text-[15px]
              lg:text-[16px]
            "
          >
            {t.description}
          </motion.p>

        </div>
      </div>

      {/* ======================================
          BOTTOM ANIMATED GOLD BORDER
      ====================================== */}

      <motion.div
        aria-hidden="true"
        initial={
          reducedMotion
            ? false
            : { scaleX: 0 }
        }
        animate={{ scaleX: 1 }}
        transition={{
          duration: reducedMotion ? 0 : 1.2,
          delay: reducedMotion ? 0 : 0.3,
          ease,
        }}
        className="
          absolute inset-x-0 bottom-0
          h-[2px] origin-center
          bg-gradient-to-r
          from-transparent
          via-[#C9A16C]
          to-transparent
        "
      />

    </section>
  );
}
