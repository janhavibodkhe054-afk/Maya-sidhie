
import React, { useContext, useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  Wheat,
  CookingPot,
  Flame,
  UtensilsCrossed,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { LanguageContext } from "../../context/LanguageContext";

// ==========================================
// CONTENT
// ==========================================

const content = {
  en: {
    eyebrow: "WHY CHOOSE MAYA'S LALA?",
    heading1: "What Makes Our",
    heading2: "Taste Special?",
    intro:
      "Inspired by Solapur's food heritage, our flavours bring together familiar ingredients, traditional inspiration and everyday enjoyment.",
    sealTop: "ROOTED IN",
    sealMain: "SOLAPUR",
    sealBottom: "INSPIRED BY TRADITION",
    footnote: "A TASTE OF TRADITION",
    features: [
      {
        number: "01",
        title: "Traditional Inspiration",
        description:
          "Flavours inspired by the food traditions of Solapur.",
        icon: Wheat,
      },
      {
        number: "02",
        title: "Ingredient-Focused Recipes",
        description:
          "A distinctive blend of peanuts, garlic and selected spices.",
        icon: CookingPot,
      },
      {
        number: "03",
        title: "Bold Maharashtrian Taste",
        description:
          "Rich, spicy flavours that complement traditional meals.",
        icon: Flame,
      },
      {
        number: "04",
        title: "Everyday Food Companion",
        description:
          "Enjoy with Bhakri, Chapati, Dal-Rice and more.",
        icon: UtensilsCrossed,
      },
    ],
  },

  mr: {
    eyebrow: "मायाज लाला का निवडावे?",
    heading1: "आमच्या चवीला",
    heading2: "खास काय बनवते?",
    intro:
      "सोलापूरच्या खाद्यपरंपरेतून प्रेरणा घेतलेल्या आमच्या चवीमध्ये पारंपरिकतेचा वारसा, निवडक पदार्थ आणि रोजच्या जेवणाचा आनंद एकत्र येतो.",
    sealTop: "परंपरेची",
    sealMain: "सोलापुरी चव",
    sealBottom: "परंपरेतून प्रेरणा",
    footnote: "पारंपरिक चवीचा वारसा",
    features: [
      {
        number: "०१",
        title: "पारंपरिक चवीची प्रेरणा",
        description:
          "सोलापूरच्या समृद्ध खाद्यपरंपरेतून प्रेरणा घेतलेल्या अस्सल चवी.",
        icon: Wheat,
      },
      {
        number: "०२",
        title: "निवडक घटकांचे मिश्रण",
        description:
          "शेंगदाणे, लसूण आणि निवडक मसाल्यांचे वैशिष्ट्यपूर्ण मिश्रण.",
        icon: CookingPot,
      },
      {
        number: "०३",
        title: "झणझणीत महाराष्ट्रीयन चव",
        description:
          "पारंपरिक जेवणाची चव वाढवणारे खमंग आणि मसालेदार स्वाद.",
        icon: Flame,
      },
      {
        number: "०४",
        title: "रोजच्या जेवणाची सोबत",
        description:
          "भाकरी, चपाती, वरण-भात आणि इतर पदार्थांसोबत आनंद घ्या.",
        icon: UtensilsCrossed,
      },
    ],
  },
};

const ease = [0.22, 1, 0.36, 1];

// ==========================================
// FEATURE CARD
// ==========================================

function FeatureCard({
  feature,
  index,
  visible,
  reducedMotion,
}) {
  const Icon = feature.icon;

  return (
    <motion.article
      initial={
        reducedMotion
          ? false
          : { opacity: 0, y: 45, scale: 0.94 }
      }
      animate={
        visible
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 45, scale: 0.94 }
      }
      transition={{
        duration: reducedMotion ? 0 : 0.75,
        delay: reducedMotion ? 0 : 0.16 + index * 0.12,
        ease,
      }}
      whileHover={
        reducedMotion
          ? undefined
          : { y: -8, transition: { duration: 0.3 } }
      }
      className="group relative min-h-[240px] overflow-hidden rounded-[22px] border border-[#E9D9C8] bg-white/75 p-6 shadow-[0_12px_35px_rgba(84,43,36,0.055)] backdrop-blur-xl transition-[border-color,box-shadow] duration-500 hover:border-[#D6B18A] hover:shadow-[0_24px_55px_rgba(84,43,36,0.13)] sm:p-7"
    >
      {/* HOVER GRADIENT */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#FFF9F0] via-white to-[#F9E9E8] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* MOVING LIGHT REFLECTION */}
      <div className="pointer-events-none absolute -left-[90%] top-0 h-full w-[55%] skew-x-[-22deg] bg-gradient-to-r from-transparent via-white/80 to-transparent blur-md transition-transform duration-1000 group-hover:translate-x-[450%]" />

      {/* DECORATIVE NUMBER */}
      <span
        aria-hidden="true"
        className="absolute right-5 top-4 text-[39px] font-light leading-none text-[#E8D9CC] transition-colors duration-500 group-hover:text-[#E1C7B4]"
      >
        {feature.number}
      </span>

      <div className="relative z-10">
        {/* ICON */}
        <div className="mb-7 flex h-[54px] w-[54px] items-center justify-center rounded-[16px] border border-[#E9D7C5] bg-[#FBF1E7] text-[#8B3940] transition-all duration-500 group-hover:rotate-[-6deg] group-hover:border-[#D7AD89] group-hover:bg-[#F6E3D4]">
          <Icon size={25} strokeWidth={1.5} />
        </div>

        {/* TITLE */}
        <h3 className="max-w-[240px] text-[17px] font-semibold leading-[1.45] text-[#492D2A] sm:text-[18px]">
          {feature.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-3 max-w-[270px] text-[13px] leading-[1.85] text-[#826C60] sm:text-[14px]">
          {feature.description}
        </p>

        {/* GOLD LINE */}
        <div className="mt-6 h-[2px] w-10 origin-left rounded-full bg-[#C99A5C] transition-all duration-500 group-hover:w-20" />
      </div>
    </motion.article>
  );
}

// ==========================================
// MAIN SECTION
// ==========================================

export default function WhyChooseUs() {
  const { language } = useContext(LanguageContext);
  const lang = language === "mr" ? "mr" : "en";
  const t = content[lang];

  const sectionRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const inView = useInView(sectionRef, {
    once: true,
    amount: 0.12,
  });

  const visible = reducedMotion || inView;

  return (
    <section
      ref={sectionRef}
      id="why-choose-us"
      aria-labelledby="why-choose-heading"
      className="relative isolate overflow-hidden bg-[#FFF9F3] py-14 sm:py-16 lg:py-20"
    >
      {/* ANIMATED BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          className="absolute -left-32 top-0 h-[380px] w-[380px] rounded-full bg-[#E6B8AF]/20 blur-[110px]"
          animate={
            reducedMotion
              ? undefined
              : { x: [0, 45, 0], y: [0, 25, 0] }
          }
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-28 bottom-0 h-[400px] w-[400px] rounded-full bg-[#E9C99D]/20 blur-[110px]"
          animate={
            reducedMotion
              ? undefined
              : { x: [0, -40, 0], y: [0, -30, 0] }
          }
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-[1350px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 lg:px-10">
        {/* LEFT EDITORIAL CONTENT */}
        <motion.div
          initial={
            reducedMotion
              ? false
              : { opacity: 0, x: -45 }
          }
          animate={
            visible
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: -45 }
          }
          transition={{
            duration: reducedMotion ? 0 : 0.85,
            ease,
          }}
          className="relative"
        >
          {/* EYEBROW */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#C99A5C]" />

            <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#A77C50] sm:text-[11px]">
              {t.eyebrow}
            </span>
          </div>

          {/* HEADING */}
          <h2
            id="why-choose-heading"
            className="max-w-[520px] font-['Poppins'] text-[27px] font-semibold leading-[1.3] tracking-[-0.7px] text-[#442925] sm:text-[31px] lg:text-[35px]"
          >
            {t.heading1}
            <span className="block text-[#84272F]">
              {t.heading2}
            </span>
          </h2>

          {/* INTRO */}
          <p className="mt-5 max-w-[490px] text-[14px] leading-[1.9] text-[#7F685C] sm:text-[15px]">
            {t.intro}
          </p>

          {/* ANIMATED TASTE SEAL */}
          <div className="relative mt-10 flex items-center justify-center py-5 sm:mt-12 lg:justify-start lg:pl-12">
            {/* OUTER ROTATING RING */}
            <motion.div
              aria-hidden="true"
              animate={
                reducedMotion
                  ? undefined
                  : { rotate: 360 }
              }
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[245px] w-[245px] rounded-full border border-dashed border-[#C9A47D]/60 sm:h-[275px] sm:w-[275px] lg:left-0"
            />

            {/* INNER CIRCLE */}
            <motion.div
              animate={
                reducedMotion
                  ? undefined
                  : { y: [0, -9, 0] }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 flex h-[205px] w-[205px] flex-col items-center justify-center rounded-full border-[8px] border-[#FFF7EE] bg-[radial-gradient(circle_at_35%_25%,#A34D53_0%,#84272F_55%,#682027_100%)] text-center shadow-[0_20px_45px_rgba(112,42,48,0.22)] sm:h-[230px] sm:w-[230px]"
            >
              <Sparkles
                size={24}
                strokeWidth={1.4}
                className="mb-3 text-[#E9C38F]"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#F0D7B5]">
                {t.sealTop}
              </span>

              <span className="mt-2 max-w-[190px] text-[23px] font-bold leading-[1.3] text-white sm:text-[26px]">
                {t.sealMain}
              </span>

              <div className="my-3 h-px w-12 bg-[#E5BF8A]" />

              <span className="max-w-[160px] text-[9px] font-semibold uppercase tracking-[1.2px] text-[#F0D7B5]">
                {t.sealBottom}
              </span>
            </motion.div>

            {/* FLOATING DOTS */}
            <motion.span
              aria-hidden="true"
              animate={
                reducedMotion
                  ? undefined
                  : { y: [0, -12, 0] }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[10%] top-3 h-4 w-4 rounded-full bg-[#D5A875]/60 lg:right-[20%]"
            />

            <motion.span
              aria-hidden="true"
              animate={
                reducedMotion
                  ? undefined
                  : { y: [0, 10, 0] }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-2 left-[10%] h-2.5 w-2.5 rounded-full bg-[#A65B60]/50"
            />
          </div>

          <div className="mt-7 flex items-center justify-center gap-3 lg:justify-start">
            <span className="h-px w-8 bg-[#D2B18A]" />
            <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#A8896A]">
              {t.footnote}
            </span>
            <span className="h-px w-8 bg-[#D2B18A]" />
          </div>
        </motion.div>

        {/* RIGHT FEATURE GRID */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {t.features.map((feature, index) => (
            <div
              key={index}
              className={
                index % 2 === 1
                  ? "sm:translate-y-7"
                  : ""
              }
            >
              <FeatureCard
                feature={feature}
                index={index}
                visible={visible}
                reducedMotion={reducedMotion}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
