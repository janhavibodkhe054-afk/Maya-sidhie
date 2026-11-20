
import React, { useContext, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useInView,
} from "framer-motion";
import { Link } from "react-router-dom";

import {
  CookingPot,
  UtensilsCrossed,
  Sprout,
  ArrowUpRight,
} from "lucide-react";

import { LanguageContext } from "../../context/LanguageContext";

const categories = [
  {
    icon: Sprout,
    en: "Solapuri Shenga Chutney",
    mr: "सोलापुरी शेंगा चटणी",
  },
  {
    icon: CookingPot,
    en: "Traditional Chutneys",
    mr: "पारंपरिक चटण्या",
  },
  {
    icon: UtensilsCrossed,
    en: "Authentic Food Specialities",
    mr: "अस्सल खाद्यपदार्थ",
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function ProductCategories() {
  const { language } = useContext(LanguageContext);
  const lang = language === "mr" ? "mr" : "en";

  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.2,
    margin: "0px 0px -40px 0px",
  });

  const show = reduceMotion || isInView;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="categories-title"
      className="relative isolate overflow-hidden bg-[#FFF8F0] px-4 py-8 sm:px-6 sm:py-10 lg:py-12"
    >
      {/* ANIMATED BACKGROUND */}
      <motion.div
        aria-hidden="true"
        initial={false}
        animate={
          show
            ? { opacity: 1, scale: 1 }
            : { opacity: 0.5, scale: 1.07 }
        }
        transition={{
          duration: reduceMotion ? 0 : 1.5,
          ease,
        }}
        className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/d4/a2/e1/d4a2e11dc77970927c44a57640e6f462.jpg')",
        }}
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* SECTION HEADING */}
        <div className="mb-6 text-center sm:mb-8">
          {/* EYEBROW */}
          <motion.p
            initial={false}
            animate={
              show
                ? {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }
                : {
                    opacity: 0,
                    y: 15,
                    filter: "blur(5px)",
                  }
            }
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              ease,
            }}
            className="mb-2 text-[10px] font-bold uppercase tracking-[2.5px] text-[#B58B56] sm:text-[11px]"
          >
            {lang === "mr"
              ? "आमची पारंपरिक चव"
              : "DISCOVER OUR TASTE"}
          </motion.p>

          {/* MAIN HEADING */}
          <motion.h2
            id="categories-title"
            initial={false}
            animate={
              show
                ? {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }
                : {
                    opacity: 0,
                    y: 22,
                    filter: "blur(8px)",
                  }
            }
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              delay: reduceMotion ? 0 : 0.12,
              ease,
            }}
            className="font-['Poppins'] text-[26px] font-semibold leading-[1.3] tracking-[-0.5px] text-[#70242D] sm:text-[30px] lg:text-[34px]"
          >
            {lang === "mr"
              ? "उत्पादनांच्या श्रेणी"
              : "Product Categories"}
          </motion.h2>

          {/* ANIMATED GOLD DIVIDER */}
          <motion.div
            initial={false}
            animate={
              show
                ? { opacity: 1, scaleX: 1 }
                : { opacity: 0, scaleX: 0 }
            }
            transition={{
              duration: reduceMotion ? 0 : 0.75,
              delay: reduceMotion ? 0 : 0.35,
              ease,
            }}
            className="mx-auto mt-3 flex origin-center items-center justify-center gap-3"
          >
            <span className="h-px w-12 bg-[#C99A5C]" />

            <motion.span
              initial={false}
              animate={
                show
                  ? { rotate: 45, scale: 1 }
                  : { rotate: 0, scale: 0 }
              }
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 18,
                delay: reduceMotion ? 0 : 0.45,
              }}
              className="h-1.5 w-1.5 bg-[#C99A5C]"
            />

            <span className="h-px w-12 bg-[#C99A5C]" />
          </motion.div>
        </div>

        {/* CATEGORY CARDS */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-7">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.en}
                initial={false}
                animate={
                  show
                    ? {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotateX: 0,
                        filter: "blur(0px)",
                      }
                    : {
                        opacity: 0,
                        y: 42,
                        scale: 0.94,
                        rotateX: 8,
                        filter: "blur(5px)",
                      }
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: reduceMotion
                    ? 0
                    : 0.3 + index * 0.14,
                  ease,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -7,
                        rotateX: -2,
                        scale: 1.015,
                        transition: {
                          duration: 0.3,
                        },
                      }
                }
                style={{
                  transformPerspective: 1000,
                }}
                className="h-full"
              >
                <Link
                  to="/products"
                  className="
                    group relative
                    flex h-full min-h-[155px]
                    flex-col items-center justify-center
                    overflow-hidden
                    rounded-[8px]
                    border border-[#E6CEB4]
                    bg-[#FFF7EC]/90
                    px-4 py-5
                    text-center
                    shadow-[0_8px_25px_rgba(104,57,38,0.06)]
                    transition-[background-color,border-color,box-shadow] duration-500
                    hover:border-[#C99A5C]
                    hover:bg-white
                    hover:shadow-[0_18px_40px_rgba(104,57,38,0.14)]
                    sm:min-h-[170px]
                    lg:min-h-[185px]
                  "
                >
                  {/* CORNER DECORATIONS */}
                  <span className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l border-t border-[#D7B48D]/70" />

                  <span className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b border-r border-[#D7B48D]/70" />

                  {/* SUBTLE HOVER GLOW */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-16 left-1/2 h-24 w-40 -translate-x-1/2 rounded-full bg-[#D6B17C]/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />

                  {/* ICON */}
                  <motion.div
                    initial={false}
                    animate={
                      show
                        ? {
                            opacity: 1,
                            scale: 1,
                            rotate: 0,
                          }
                        : {
                            opacity: 0,
                            scale: 0.6,
                            rotate: -12,
                          }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 230,
                      damping: 17,
                      delay: reduceMotion
                        ? 0
                        : 0.48 + index * 0.14,
                    }}
                    className="
                      relative mb-3
                      flex h-[55px] w-[55px]
                      items-center justify-center
                      rounded-full
                      border border-[#E6CEB4]
                      bg-[#FFF1E1]
                      text-[#873C37]
                      transition-[background-color,border-color,color,transform] duration-500
                      group-hover:scale-110
                      group-hover:border-[#84272F]
                      group-hover:bg-[#84272F]
                      group-hover:text-white
                    "
                  >
                    <Icon size={28} strokeWidth={1.4} />
                  </motion.div>

                  {/* CATEGORY TITLE */}
                  <h3
                    className="
                      relative max-w-[260px]
                      font-['Poppins']
                      text-[16px]
                      font-semibold
                      leading-[1.4]
                      text-[#402820]
                      transition-colors duration-300
                      group-hover:text-[#84272F]
                      sm:text-[17px]
                      lg:text-[19px]
                    "
                  >
                    {category[lang]}
                  </h3>

                  {/* ANIMATED GOLD LINE */}
                  <motion.span
                    initial={false}
                    animate={
                      show
                        ? { scaleX: 1, opacity: 1 }
                        : { scaleX: 0, opacity: 0 }
                    }
                    transition={{
                      duration: reduceMotion ? 0 : 0.6,
                      delay: reduceMotion
                        ? 0
                        : 0.6 + index * 0.14,
                      ease,
                    }}
                    className="mt-3 h-[2px] w-10 origin-center rounded-full bg-[#D6B17C] transition-[width] duration-500 group-hover:w-16"
                  />

                  {/* HOVER ARROW */}
                  <ArrowUpRight
                    size={16}
                    className="absolute right-4 top-4 text-[#A06C58] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
