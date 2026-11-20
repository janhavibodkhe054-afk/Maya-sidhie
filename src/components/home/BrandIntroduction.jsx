
import React, { useContext, useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Sparkles,
  Wheat,
  Flame,
  Heart,
} from "lucide-react";

import { LanguageContext } from "../../context/LanguageContext";

const IMAGE = "https://thestateplate.com/cdn/shop/products/2_1.jpg?v=1680931727";

const content = {
  en: {
    eyebrow: "WELCOME TO MAYA'S LALA",
    heading1: "Rooted in Tradition.",
    heading2: "Made for Every Kitchen.",
    p1: "At Maya's LALA Food Products, we believe that great food begins with authentic flavours and time-honoured traditions.",
    p2: "Inspired by the rich culinary culture of Solapur, our products celebrate the traditional tastes that have been enjoyed across generations.",
    p3: "Our signature Solapuri Shenga Chutney brings together peanuts, garlic, red chillies and aromatic spices to create a bold, flavourful accompaniment for everyday meals.",
    p4: "From traditional Bhakri to modern food combinations, we aim to keep the taste of Solapur alive in every kitchen.",
    cta: "Know More About Us",
    heritage: "A Heritage of Taste",
    heritageSmall: "SOLAPUR • SINCE 1968",
    imageLabel: "The Authentic Taste of Solapur",
    features: [
      "Authentic Flavours",
      "Traditional Recipes",
      "Made with Care",
    ],
  },

  mr: {
    eyebrow: "मायाज लाला मध्ये आपले स्वागत आहे",
    heading1: "परंपरेशी जोडलेली चव.",
    heading2: "प्रत्येक स्वयंपाकघरासाठी.",
    p1: "मायाज लाला फूड प्रॉडक्ट्समध्ये आमचा विश्वास आहे की उत्तम खाद्यपदार्थांची सुरुवात अस्सल चव आणि पिढ्यानपिढ्या जपलेल्या परंपरेतून होते.",
    p2: "सोलापूरच्या समृद्ध खाद्यसंस्कृतीतून प्रेरणा घेऊन आम्ही अनेक पिढ्यांपासून आवडीने चाखल्या जाणाऱ्या पारंपरिक चवींचा वारसा जपतो.",
    p3: "आमची खास सोलापुरी शेंगा चटणी शेंगदाणे, लसूण, लाल मिरच्या आणि सुगंधी मसाल्यांच्या मिश्रणातून तयार होते. त्यामुळे रोजच्या जेवणाला मिळते अस्सल झणझणीत चव.",
    p4: "पारंपरिक भाकरीपासून आधुनिक खाद्यपदार्थांपर्यंत, सोलापूरची चव प्रत्येक स्वयंपाकघरात पोहोचवणे हे आमचे ध्येय आहे.",
    cta: "आमच्याबद्दल अधिक जाणून घ्या",
    heritage: "चवीचा समृद्ध वारसा",
    heritageSmall: "सोलापूर • १९६८ पासून",
    imageLabel: "सोलापूरची अस्सल चव",
    features: [
      "अस्सल चव",
      "पारंपरिक पाककृती",
      "आपुलकीने निर्मिती",
    ],
  },
};

const ease = [0.22, 1, 0.36, 1];

export default function BrandIntroduction() {
  const { language } = useContext(LanguageContext);
  const lang = language === "mr" ? "mr" : "en";
  const t = content[lang];

  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.15,
    margin: "0px 0px -50px 0px",
  });

  const visible = Boolean(reduceMotion || isInView);

  const reveal = (delay = 0, x = 0, y = 22) => ({
    initial: false,
    animate: visible
      ? { opacity: 1, x: 0, y: 0, filter: "blur(0px)" }
      : {
          opacity: 0,
          x,
          y,
          filter: reduceMotion ? "blur(0px)" : "blur(5px)",
        },
    transition: {
      duration: reduceMotion ? 0 : 0.8,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#FFFCF8] py-12 sm:py-16 lg:py-20"
      aria-labelledby="brand-intro-heading"
    >
      {/* MOVING BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  x: [0, 35, 0],
                  y: [0, -25, 0],
                  scale: [1, 1.12, 1],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-28 top-10 h-[380px] w-[380px] rounded-full bg-[#E8C7B0]/20 blur-[100px]"
        />

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  x: [0, -35, 0],
                  y: [0, 30, 0],
                }
          }
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-[#DAB4B9]/15 blur-[110px]"
        />

        <motion.div
          animate={
            reduceMotion
              ? {}
              : { rotate: [0, 360] }
          }
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-[8%] top-12 hidden h-40 w-40 rounded-full border border-[#D6B58B]/20 lg:block"
        />

        <div className="absolute right-[10%] top-20 hidden h-24 w-24 rounded-full border border-[#D6B58B]/20 lg:block" />
      </div>

      <div className="mx-auto grid max-w-[1450px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-10 xl:gap-24">
        {/* LEFT IMAGE */}
        <motion.div
          initial={false}
          animate={
            visible
              ? { opacity: 1, x: 0, scale: 1 }
              : { opacity: 0, x: -50, scale: 0.95 }
          }
          transition={{
            duration: reduceMotion ? 0 : 1,
            ease,
          }}
          className="relative mx-auto w-full max-w-[620px] lg:max-w-none"
        >
          {/* OFFSET FRAME */}
          <motion.div
            animate={
              reduceMotion
                ? {}
                : { y: [0, -7, 0] }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-5 -right-4 top-5 left-5 rounded-[180px_180px_22px_22px] border border-[#CBA36D]/50 sm:-bottom-7 sm:-right-7"
          />

          {/* MAIN IMAGE */}
          <div className="group relative overflow-hidden rounded-[180px_180px_22px_22px] bg-[#E7C9AE] shadow-[0_25px_70px_rgba(85,38,29,0.17)] sm:rounded-[240px_240px_26px_26px]">
            <motion.img
              src={IMAGE}
              alt={
                lang === "mr"
                  ? "सोलापुरी शेंगा चटणी, भाकरी आणि पारंपरिक मसाले"
                  : "Solapuri Shenga Chutney with traditional spices and Bhakri"
              }
              loading="lazy"
              className="h-[390px] w-full object-cover sm:h-[520px] lg:h-[590px]"
              animate={
                reduceMotion
                  ? {}
                  : {
                      scale: [1, 1.045, 1],
                    }
              }
              whileHover={
                reduceMotion
                  ? undefined
                  : { scale: 1.09 }
              }
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#30130E]/65 via-transparent to-transparent" />

            {/* IMAGE CAPTION */}
            <motion.div
              {...reveal(0.55, 0, 15)}
              className="absolute bottom-7 left-7 right-7 sm:bottom-9 sm:left-10"
            >
              <div className="mb-3 h-px w-14 bg-[#E7C28B]" />

              <p className="text-[17px] font-medium italic leading-snug text-white sm:text-[21px]">
                {t.imageLabel}
              </p>
            </motion.div>
          </div>

          {/* FLOATING HERITAGE BADGE */}
          <motion.div
            initial={false}
            animate={
              visible
                ? { opacity: 1, scale: 1, rotate: 0 }
                : { opacity: 0, scale: 0.7, rotate: -12 }
            }
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 18,
              delay: reduceMotion ? 0 : 0.45,
            }}
            className="absolute -right-2 top-[14%] z-10 sm:-right-7"
          >
            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : { y: [0, -12, 0] }
              }
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex h-[115px] w-[115px] flex-col items-center justify-center rounded-full border-[5px] border-[#FFFCF8] bg-[#812A34] text-center shadow-[0_12px_35px_rgba(66,21,26,0.25)] sm:h-[145px] sm:w-[145px]"
            >
              <Wheat
                size={21}
                strokeWidth={1.5}
                className="mb-2 text-[#E7C28B]"
              />

              <span className="max-w-[100px] text-[13px] font-semibold leading-tight text-white sm:text-[15px]">
                {t.heritage}
              </span>

              <span className="mt-2 text-[8px] font-bold tracking-[0.6px] text-[#E7C28B] sm:text-[9px]">
                {t.heritageSmall}
              </span>
            </motion.div>
          </motion.div>

          {/* DECORATIVE LABEL */}
          <motion.div
            {...reveal(0.7, -10, 10)}
            className="absolute -bottom-7 left-6 z-10 hidden items-center gap-3 rounded-xl border border-[#E7D5C4] bg-[#FFF9F2] px-5 py-3 shadow-[0_10px_25px_rgba(80,45,35,0.08)] sm:flex"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F4E5D6] text-[#873A35]">
              <Flame size={19} />
            </span>

            <span className="text-[12px] font-semibold text-[#674A3D]">
              {lang === "mr"
                ? "सोलापूरची खास झणझणीत चव"
                : "Bold. Authentic. Solapuri."}
            </span>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="relative pt-4 lg:pt-0">
          {/* EYEBROW */}
          <motion.div
            {...reveal(0.1, 25, 0)}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-px w-9 bg-[#C99A5C]" />

            <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#A67B4F] sm:text-[11px]">
              {t.eyebrow}
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            {...reveal(0.2, 0, 28)}
            id="brand-intro-heading"
            className="max-w-[720px] font-['Poppins'] text-[27px] font-semibold leading-[1.3] tracking-[-0.6px] text-[#40251F] sm:text-[32px] lg:text-[36px]"
          >
            <span className="block">{t.heading1}</span>

            <span className="mt-1 block text-[#84272F]">
              {t.heading2}
            </span>
          </motion.h2>

          {/* DIVIDER */}
          <motion.div
            {...reveal(0.3)}
            className="my-6 flex items-center gap-3"
          >
            <motion.span
              initial={false}
              animate={
                visible
                  ? { scaleX: 1 }
                  : { scaleX: 0 }
              }
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: reduceMotion ? 0 : 0.4,
                ease,
              }}
              className="h-[2px] w-14 origin-left bg-[#C99A5C]"
            />

            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : { rotate: [0, 15, -15, 0] }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles size={17} className="text-[#C99A5C]" />
            </motion.div>

            <span className="h-px w-10 bg-[#E6D6C5]" />
          </motion.div>

          {/* DESCRIPTION */}
          <motion.div
            {...reveal(0.38)}
            className="max-w-[680px] space-y-4 text-[14px] leading-[1.85] text-[#6E5A50] sm:text-[15px]"
          >
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
            <p>{t.p4}</p>
          </motion.div>

          {/* ANIMATED FEATURES */}
          <div className="mt-7 grid grid-cols-3 gap-2 border-y border-[#EADBCB] py-5 sm:gap-4">
            {t.features.map((feature, index) => {
              const icons = [Wheat, Flame, Heart];
              const Icon = icons[index];

              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={
                    visible
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 22, scale: 0.94 }
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 0.65,
                    delay: reduceMotion
                      ? 0
                      : 0.5 + index * 0.12,
                    ease,
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -4 }
                  }
                  className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F7EAE0] text-[#873A35]">
                    <Icon size={18} strokeWidth={1.6} />
                  </span>

                  <span className="text-[11px] font-semibold leading-snug text-[#69473C] sm:text-[12px]">
                    {feature}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          
{/* CTA - PREMIUM GRADIENT SHADOW BUTTON */}
<motion.div
  {...reveal(0.75)}
  className="mt-7"
>
  <Link
    to="/about"
    className="
      group relative inline-flex
      items-center justify-center gap-4
      overflow-visible rounded-full
      bg-[#84272F]
      px-6 py-3.5
      text-[13px] font-semibold text-white
      transition-all duration-500
      hover:-translate-y-1
      sm:text-[14px]
    "
  >
    {/* GRADIENT GLOW SHADOW */}
    <span
      aria-hidden="true"
      className="
        pointer-events-none absolute
        -inset-[5px] -z-10
        rounded-full
        bg-gradient-to-r
        from-[#84272F]
        via-[#E36A88]
        to-[#D6A05B]
        opacity-0 blur-[15px]
        transition-all duration-500
        group-hover:opacity-80
        group-hover:blur-[20px]
      "
    />

    {/* GRADIENT BACKGROUND ON HOVER */}
    <span
      aria-hidden="true"
      className="
        absolute inset-0 rounded-full
        bg-gradient-to-r
        from-[#84272F]
        via-[#B43D60]
        to-[#D27C54]
        opacity-0
        transition-opacity duration-500
        group-hover:opacity-100
      "
    />

    {/* BUTTON TEXT */}
    <span className="relative z-10">
      {t.cta}
    </span>

    {/* ARROW */}
    <span
      className="
        relative z-10
        flex h-8 w-8
        items-center justify-center
        rounded-full bg-white
        text-[#84272F]
        transition-all duration-500
        group-hover:translate-x-1
        group-hover:rotate-45
      "
    >
      <ArrowUpRight size={18} />
    </span>
  </Link>
</motion.div>

        </div>
      </div>
    </section>
  );
}
