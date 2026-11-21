import React, { useContext, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import { LanguageContext } from "../../context/LanguageContext";

// ==========================================
// HERO IMAGES
// ==========================================

const HERO_IMAGES = {
  en: {
    desktop: "/hero-en-laptop.png",
    mobile: "/hero-en-mobile.png",
  },
  mr: {
    desktop: "/hero-mr-laptop.png",
    mobile: "/hero-mr-mobile.png",
  },
};

const ease = [0.22, 1, 0.36, 1];

// ==========================================
// HERO COMPONENT
// ==========================================

export default function HeroSection() {
  const { language } = useContext(LanguageContext);

  const reduceMotion = useReducedMotion();
  const heroRef = useRef(null);

  const currentLanguage = language === "mr" ? "mr" : "en";
  const images = HERO_IMAGES[currentLanguage];

  // ==========================================
  // SCROLL PARALLAX ANIMATION
  // ==========================================

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 65]
  );

  const parallaxScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.045]
  );

  return (
    <section
      ref={heroRef}
      aria-label={
        currentLanguage === "mr"
          ? "मायाज लाला फूड प्रॉडक्ट्स"
          : "Maya's LALA Food Products"
      }
      className="
        relative isolate w-full overflow-hidden
        bg-[#560D18]

        h-[500px]
        sm:h-[550px]
        md:h-[580px]
        lg:h-[590px]
        xl:h-[650px]
        2xl:h-[650px]
      "
    >

      {/* =====================================
          MAIN ANIMATED IMAGE WRAPPER
      ===================================== */}

      <motion.div
        style={{
          y: reduceMotion ? 0 : parallaxY,
          scale: reduceMotion ? 1 : parallaxScale,
        }}
        className="absolute inset-0"
      >

        <AnimatePresence mode="sync">

          <motion.picture
            key={currentLanguage}

            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    scale: 1.045,
                  }
            }

            animate={{
              opacity: 1,
              scale: 1,
            }}

            exit={{
              opacity: 0,
              scale: reduceMotion ? 1 : 0.99,

              transition: {
                duration: reduceMotion ? 0 : 0.45,
                ease: "easeInOut",
              },
            }}

            transition={{
              opacity: {
                duration: reduceMotion ? 0 : 0.75,
                ease: "easeInOut",
              },

              scale: {
                duration: reduceMotion ? 0 : 1.6,
                ease,
              },
            }}

            className="
              absolute inset-0
              block h-full w-full
              will-change-transform
            "
          >

            {/* Mobile Image */}

            <source
              media="(max-width: 767px)"
              srcSet={images.mobile}
            />

            {/* Desktop / Laptop Image */}

            <img
              src={images.desktop}

              alt={
                currentLanguage === "mr"
                  ? "सोलापूरची अस्सल चव प्रत्येक घरापर्यंत"
                  : "Bringing the Authentic Taste of Solapur to Every Home"
              }

              fetchPriority="high"
              loading="eager"
              decoding="async"
              draggable={false}

              className="
                block h-full w-full
                select-none
                object-cover object-center
              "
            />

          </motion.picture>

        </AnimatePresence>

      </motion.div>

      {/* =====================================
          CINEMATIC PAGE LOAD REVEAL
      ===================================== */}

      {!reduceMotion && (
        <motion.div
          aria-hidden="true"

          initial={{
            scaleX: 1,
          }}

          animate={{
            scaleX: 0,
          }}

          transition={{
            duration: 1,
            delay: 0.08,
            ease: [0.76, 0, 0.24, 1],
          }}

          className="
            pointer-events-none
            absolute inset-0 z-20
            origin-right

            bg-gradient-to-r
            from-[#560D18]
            via-[#752B37]
            to-[#843642]
          "
        />
      )}

      {/* =====================================
          SECONDARY GOLDEN REVEAL LINE
      ===================================== */}

      {!reduceMotion && (
        <motion.div
          aria-hidden="true"

          initial={{
            left: "0%",
            opacity: 1,
          }}

          animate={{
            left: "100%",
            opacity: [1, 1, 0],
          }}

          transition={{
            duration: 1,
            delay: 0.08,
            ease: [0.76, 0, 0.24, 1],
          }}

          className="
            pointer-events-none
            absolute inset-y-0 z-30
            w-[3px]

            bg-gradient-to-b
            from-transparent
            via-[#FFE3AD]
            to-transparent

            shadow-[0_0_18px_rgba(255,218,163,0.65)]
          "
        />
      )}

      {/* =====================================
          CINEMATIC GOLDEN LIGHT SWEEP
      ===================================== */}

      {!reduceMotion && (
        <motion.div
          aria-hidden="true"

          initial={{
            x: "-150%",
            opacity: 0,
          }}

          animate={{
            x: "500%",
            opacity: [0, 0.35, 0.35, 0],
          }}

          transition={{
            duration: 2.3,
            delay: 1.05,
            ease: "easeInOut",
          }}

          className="
            pointer-events-none
            absolute inset-y-0 left-0 z-10

            w-[28%]
            -skew-x-12

            bg-gradient-to-r
            from-transparent
            via-[#FFF0C9]/30
            to-transparent

            mix-blend-screen
          "
        />
      )}

      {/* =====================================
          ANIMATED GOLDEN BOTTOM BORDER
      ===================================== */}

      <div className="
        pointer-events-none
        absolute inset-x-0 bottom-0 z-30
        h-[2px] overflow-hidden
        bg-[#A97848]
      ">

        <motion.div

          initial={
            reduceMotion
              ? false
              : { scaleX: 0 }
          }

          animate={{
            scaleX: 1,
          }}

          transition={{
            duration: reduceMotion ? 0 : 1.4,
            delay: reduceMotion ? 0 : 0.5,
            ease,
          }}

          className="
            absolute inset-0
            origin-center

            bg-gradient-to-r
            from-[#A97848]
            via-[#FFE4B5]
            to-[#A97848]
          "
        />

        {!reduceMotion && (
          <motion.div

            initial={{
              x: "-100%",
            }}

            animate={{
              x: ["-100%", "500%"],
            }}

            transition={{
              duration: 3,
              delay: 2,
              repeat: Infinity,
              repeatDelay: 7,
              ease: "easeInOut",
            }}

            className="
              absolute inset-y-0 left-0
              w-[25%]

              bg-gradient-to-r
              from-transparent
              via-[#FFFFFF]
              to-transparent
            "
          />
        )}

      </div>

    </section>
  );
}