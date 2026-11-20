
import React, { useContext } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

import { LanguageContext } from "../../context/LanguageContext";

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

export default function HeroSection() {
  const { language } = useContext(LanguageContext);
  const reduceMotion = useReducedMotion();

  const currentLanguage = language === "mr" ? "mr" : "en";
  const images = HERO_IMAGES[currentLanguage];

  return (
    <section
      aria-label={
        currentLanguage === "mr"
          ? "मायाज लाला फूड प्रॉडक्ट्स"
          : "Maya's LALA Food Products"
      }
      className="relative w-full overflow-hidden bg-[#560D18]"
    >
      <AnimatePresence mode="sync" initial={false}>
        <motion.picture
          key={currentLanguage}
          initial={
            reduceMotion
              ? { opacity: 1 }
              : { opacity: 0, scale: 1.025 }
          }
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.25 },
          }}
          transition={{
            opacity: {
              duration: reduceMotion ? 0 : 0.65,
              ease: "easeInOut",
            },
            scale: {
              duration: reduceMotion ? 0 : 1.1,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="block w-full"
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
            className="
              block
              w-full
              h-[500px]
              object-cover
              object-center
              sm:h-[550px]
              md:h-[580px]
              lg:h-[590px]
              xl:h-[650px]
              2xl:h-[650px]
            "
          />
        </motion.picture>
      </AnimatePresence>
    </section>
  );
}
