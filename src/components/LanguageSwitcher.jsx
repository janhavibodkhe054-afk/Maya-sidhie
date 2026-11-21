import React, { useContext } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { Languages, Check } from "lucide-react";
import { LanguageContext } from "../context/LanguageContext";

const languages = [
  {
    value: "en",
    label: "EN",
    name: "English",
    aria: "Switch to English",
  },
  {
    value: "mr",
    label: "मराठी",
    name: "Marathi",
    aria: "मराठी भाषा निवडा",
  },
];

const spring = {
  type: "spring",
  stiffness: 380,
  damping: 29,
};

export default function LanguageSwitcher() {
  const { language, changeLanguage } =
    useContext(LanguageContext);

  const reduceMotion = useReducedMotion();

  return (
    <div
      className="
        pointer-events-none fixed z-[90]

        bottom-[max(6px,env(safe-area-inset-bottom))]
        left-1/2 -translate-x-1/2

        lg:bottom-auto lg:left-auto
        lg:right-5 lg:top-1/2
        lg:translate-x-0 lg:-translate-y-1/2
        xl:right-6
      "
    >
      <motion.div
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                scale: 0.8,
                y: 25,
              }
        }
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.8,
          delay: reduceMotion ? 0 : 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        role="group"
        aria-label="Website language"
        className="
          pointer-events-auto relative isolate
          flex items-center gap-1.5

          rounded-full
          border border-[#DCC2A1]
          bg-[#FFFCF8]/95 p-[5px]

          shadow-[0_8px_30px_rgba(132,54,66,0.15)]
          backdrop-blur-xl

          lg:flex-col lg:gap-2
          lg:rounded-[20px] lg:p-[6px]
        "
      >
        {/* Decorative Golden Border */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-[3px]
            -z-10 rounded-full
            border border-[#EBD9C4]/70
            lg:rounded-[16px]
          "
        />

        {/* Animated Language Icon */}

        <motion.div
          key={`language-icon-${language}`}
          initial={
            reduceMotion
              ? false
              : {
                  rotate: -90,
                  scale: 0.65,
                  opacity: 0,
                }
          }
          animate={{
            rotate: 0,
            scale: 1,
            opacity: 1,
          }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : spring
          }
          className="
            relative flex h-10 w-10 shrink-0
            items-center justify-center
            overflow-hidden rounded-full

            border border-[#E2CCAF]
            bg-gradient-to-br
            from-[#FFF5E5] to-[#EBD3B5]

            text-[#843642]

            lg:h-11 lg:w-11
            lg:rounded-[12px]
          "
        >
          <Languages
            size={21}
            strokeWidth={1.7}
          />

          {/* Small Golden Accent */}

          <span
            className="
              absolute right-[5px] top-[5px]
              h-[4px] w-[4px]
              rounded-full bg-[#C9A16C]
            "
          />
        </motion.div>

        {/* Responsive Divider */}

        <div
          className="
            h-6 w-px
            bg-gradient-to-b
            from-transparent via-[#D9BD9B]
            to-transparent

            lg:h-px lg:w-9
            lg:bg-gradient-to-r
          "
        />

        {/* Language Selection */}

        <div
          className="
            relative flex items-center
            gap-1 lg:flex-col
          "
        >
          {languages.map((item) => {
            const active = language === item.value;

            return (
              <motion.button
                key={item.value}
                type="button"
                onClick={() => {
                  if (!active) {
                    changeLanguage(item.value);
                  }
                }}
                aria-label={item.aria}
                aria-pressed={active}
                whileTap={
                  reduceMotion
                    ? undefined
                    : { scale: 0.91 }
                }
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -1 }
                }
                className={`
                  group relative isolate
                  flex h-[44px] min-w-[72px]
                  touch-manipulation
                  items-center justify-center
                  overflow-hidden rounded-full
                  px-3

                  text-[13px] font-bold
                  transition-colors duration-300

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#C9A16C]

                  lg:h-[45px] lg:min-w-[51px]
                  lg:rounded-[12px] lg:px-2
                  lg:text-[12px]

                  ${
                    active
                      ? "text-white"
                      : "text-[#843642] hover:bg-[#F6E9DB]"
                  }
                `}
              >
                {/* Smooth Sliding Active Background */}

                {active && (
                  <motion.span
                    layoutId="lala-language-active"
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : spring
                    }
                    className="
                      absolute inset-0 -z-20
                      rounded-full

                      border border-[#A75B64]

                      bg-gradient-to-br
                      from-[#A64D59]
                      via-[#843642]
                      to-[#702A35]

                      shadow-[0_4px_12px_rgba(132,54,66,0.25)]

                      lg:rounded-[12px]
                    "
                  />
                )}

                {/* Inner Golden Outline */}

                {active && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.3,
                    }}
                    className="
                      pointer-events-none absolute
                      inset-[3px] -z-10
                      rounded-full
                      border border-[#F1C98E]/50
                      lg:rounded-[9px]
                    "
                  />
                )}

                {/* Premium Golden Shine */}

                {active && !reduceMotion && (
                  <motion.span
                    initial={{
                      x: "-180%",
                    }}
                    animate={{
                      x: "300%",
                    }}
                    transition={{
                      duration: 0.9,
                      ease: "easeInOut",
                    }}
                    className="
                      pointer-events-none absolute
                      inset-y-0 left-0 -z-10
                      w-1/2 -skew-x-12

                      bg-gradient-to-r
                      from-transparent
                      via-[#F1C98E]/45
                      to-transparent
                    "
                  />
                )}

                {/* Animated Language Text */}

                <motion.span
                  animate={{
                    scale: active ? 1.04 : 1,
                  }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : spring
                  }
                  className="
                    relative flex items-center
                    justify-center gap-1.5
                  "
                >
                  {item.label}

                  {/* Active Check Indicator */}

                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.span
                        initial={{
                          opacity: 0,
                          scale: reduceMotion ? 1 : 0,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          scale: reduceMotion ? 1 : 0,
                        }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.25,
                        }}
                        className="
                          flex h-[14px] w-[14px]
                          items-center justify-center
                          rounded-full
                          bg-[#F1C98E]
                          text-[#843642]
                          lg:hidden
                        "
                      >
                        <Check
                          size={10}
                          strokeWidth={2.8}
                        />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.span>

                {/* Desktop Active Indicator */}

                {active && (
                  <motion.span
                    layoutId="lala-language-dot"
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : spring
                    }
                    className="
                      absolute bottom-[4px]
                      left-1/2 hidden
                      h-[3px] w-[13px]
                      -translate-x-1/2
                      rounded-full bg-[#F1C98E]
                      lg:block
                    "
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}