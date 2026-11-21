
import React, { useContext } from "react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import { LanguageContext } from "../../context/LanguageContext";

const ease = [0.22, 1, 0.36, 1];

export default function ContactHero() {
  const { language } = useContext(LanguageContext);

  const reducedMotion = useReducedMotion();

  const title =
    language === "mr" ? "संपर्क साधा" : "Contact Us";

  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="
        relative isolate flex h-[200px]
        items-center justify-center
        overflow-hidden bg-[#4D3034]
        sm:h-[250px] lg:h-[300px]
      "
    >
      {/* ======================================
          BACKGROUND IMAGE
      ====================================== */}

      <motion.img
        src="https://khamang.com/cdn/shop/files/chutneyresized.jpg?v=1712909705&width=1946"
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
          absolute inset-0 -z-20
          h-full w-full object-cover object-center
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
            : { opacity: 0.8 }
        }
        animate={{ opacity: 0.55 }}
        transition={{
          duration: reducedMotion ? 0 : 1.2,
          ease,
        }}
        className="
          absolute inset-0 -z-10
          bg-[#291619]
        "
      />

      {/* ======================================
          HERO CONTENT
      ====================================== */}

      <div className="relative px-5 text-center">

        {/* HEADING ANIMATION */}

        <div className="overflow-hidden py-2">
          <motion.h1
            key={language}
            id="contact-hero-heading"
            initial={
              reducedMotion
                ? false
                : {
                    opacity: 0,
                    y: "110%",
                    scale: 0.98,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: reducedMotion ? 0 : 0.85,
              delay: reducedMotion ? 0 : 0.15,
              ease,
            }}
            className="
              font-['Poppins']
              text-[30px] font-semibold
              leading-tight tracking-[-0.5px]
              text-white drop-shadow-lg
              sm:text-[37px] lg:text-[44px]
            "
          >
            {title}
          </motion.h1>
        </div>

        {/* GOLD UNDERLINE */}

        <motion.div
          initial={
            reducedMotion
              ? false
              : {
                  scaleX: 0,
                  opacity: 0,
                }
          }
          animate={{
            scaleX: 1,
            opacity: 1,
          }}
          transition={{
            duration: reducedMotion ? 0 : 0.8,
            delay: reducedMotion ? 0 : 0.45,
            ease,
          }}
          className="
            mx-auto mt-2 h-[2px] w-14
            origin-center rounded-full
            bg-[#F1C98E]
          "
        />

      </div>

      {/* ======================================
          BOTTOM GOLD BORDER
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
          absolute bottom-0 left-0
          h-[2px] w-full origin-center
          bg-gradient-to-r
          from-transparent
          via-[#C9A16C]
          to-transparent
        "
      />
    </section>
  );
}
