
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function AboutHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about-hero"
      aria-labelledby="about-title"
      className="
        relative isolate flex
        h-[230px] w-full
        items-center justify-center
        overflow-hidden
        bg-[#5B2635]
        pt-[65px]
        sm:h-[270px]
        lg:h-[320px]
        lg:pt-[75px]
      "
    >
      {/* BACKGROUND IMAGE + SLOW ZOOM */}
      <motion.div
        aria-hidden="true"
        className="
          absolute inset-0 -z-20
          bg-cover bg-center bg-no-repeat
        "
        style={{
          backgroundImage: "url('https://5.imimg.com/data5/SELLER/Default/2024/9/454524916/FS/ST/LL/62778942/solapur-shenga-chutney.jpg')",
        }}
        initial={
          reduceMotion ? false : { scale: 1.12 }
        }
        animate={{ scale: 1 }}
        transition={{
          duration: reduceMotion ? 0 : 2,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* SOFT DARK OVERLAY FOR TEXT READABILITY */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-10
          bg-gradient-to-r
          from-[#30141F]/60
          via-[#421D2B]/45
          to-[#30141F]/60
        "
      />

      {/* SUBTLE GOLD DECORATIVE LINES */}
      <motion.div
        aria-hidden="true"
        initial={
          reduceMotion ? false : { scaleX: 0 }
        }
        animate={{ scaleX: 1 }}
        transition={{
          duration: reduceMotion ? 0 : 1.1,
          delay: 0.4,
        }}
        className="
          absolute bottom-0 left-1/2
          h-[2px] w-28
          -translate-x-1/2
          origin-center bg-[#F1C98E]
        "
      />

      {/* CENTER HEADING */}
      <motion.h1
        id="about-title"
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: 30,
                letterSpacing: "0.18em",
              }
        }
        animate={{
          opacity: 1,
          y: 0,
          letterSpacing: "0.04em",
        }}
        transition={{
          duration: reduceMotion ? 0 : 1,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative z-10
          font-['Poppins']
          text-[32px] font-semibold
          uppercase leading-tight
          text-[#FFF8EE]
          drop-shadow-[0_5px_20px_rgba(0,0,0,0.3)]
          sm:text-[42px]
          lg:text-[52px]
        "
      >
        About Us
      </motion.h1>
    </section>
  );
}
