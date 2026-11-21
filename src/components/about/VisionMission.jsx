
import React, { useContext } from "react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import { Eye, Target, Sparkles } from "lucide-react";
import { LanguageContext } from "../../context/LanguageContext";

const content = {
  en: {
    eyebrow: "THE PURPOSE THAT GUIDES US",
    heading: "Our Vision & Mission",
    subtitle:
      "Celebrating our roots. Carrying our traditions forward.",

    vision: {
      label: "Our Vision",
      description:
        "To make the authentic flavours of Solapur and traditional Maharashtrian food products more widely recognised and appreciated.",
    },

    mission: {
      label: "Our Mission",
      description:
        "To celebrate traditional recipes, focus on distinctive flavours and make regional food products accessible to more households.",
    },

    imageTitle: "Rooted in Tradition.",
    imageAccent: "Inspired by Taste.",

    values: [
      "Authentic Flavours",
      "Regional Food Heritage",
      "Traditional Recipes",
    ],
  },

  mr: {
    eyebrow: "आमच्या प्रवासाची दिशा",
    heading: "आमची दृष्टी आणि ध्येय",
    subtitle:
      "आपल्या मातीचा अभिमान आणि परंपरा पुढे नेण्याचा संकल्प.",

    vision: {
      label: "आमची दृष्टी",
      description:
        "सोलापूरच्या अस्सल चवी आणि महाराष्ट्रातील पारंपरिक खाद्यपदार्थांना अधिक व्यापक ओळख व मान्यता मिळवून देणे.",
    },

    mission: {
      label: "आमचे ध्येय",
      description:
        "पारंपरिक पाककृतींचा गौरव करणे, वैशिष्ट्यपूर्ण चवींवर भर देणे आणि प्रादेशिक खाद्यपदार्थ अधिकाधिक घरांपर्यंत पोहोचवणे.",
    },

    imageTitle: "परंपरेशी जोडलेली नाळ.",
    imageAccent: "अस्सल चवींची प्रेरणा.",

    values: [
      "अस्सल चव",
      "प्रादेशिक खाद्यपरंपरा",
      "पारंपरिक पाककृती",
    ],
  },
};

const ease = [0.22, 1, 0.36, 1];

export default function VisionMission() {
  const { language } = useContext(LanguageContext);
  const t = content[language === "mr" ? "mr" : "en"];
  const reducedMotion = useReducedMotion();

  const reveal = (delay = 0, y = 20) => ({
    initial: reducedMotion
      ? false
      : { opacity: 0, y },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.1,
    },

    transition: {
      duration: reducedMotion ? 0 : 0.65,
      delay: reducedMotion ? 0 : delay,
      ease,
    },
  });

  const items = [
    {
      ...t.vision,
      icon: Eye,
      number: "01",
    },
    {
      ...t.mission,
      icon: Target,
      number: "02",
    },
  ];

  return (
    <section
      id="vision-mission"
      aria-labelledby="vision-mission-heading"
      className="relative isolate overflow-hidden bg-[#FBF6EF] py-14 sm:py-16 lg:py-20"
    >
      {/* BACKGROUND DECORATION */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFBF7_0%,#FBF6EF_100%)]" />

        <div className="absolute -left-40 top-20 h-[380px] w-[380px] rounded-full border border-[#C9A16C]/15" />

        <div className="absolute -left-28 top-32 h-[280px] w-[280px] rounded-full border border-[#C9A16C]/10" />

        <div className="absolute -right-36 bottom-0 h-[400px] w-[400px] rounded-full bg-[#EBD8C6]/30 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-10">

        {/* ======================================
            SECTION HEADING
        ====================================== */}

        <div className="mx-auto mb-9 max-w-[750px] text-center sm:mb-11">

          {/* EYEBROW */}
          <motion.div
            {...reveal(0)}
            className="mb-4 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-[#C9A16C]" />

            <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#A77C50] sm:text-[11px]">
              {t.eyebrow}
            </span>

            <span className="h-px w-8 bg-[#C9A16C]" />
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h2
            {...reveal(0.08)}
            id="vision-mission-heading"
            className="font-['Poppins'] text-[27px] font-semibold leading-[1.3] tracking-[-0.8px] text-[#843642] sm:text-[32px] lg:text-[35px]"
          >
            {t.heading}
          </motion.h2>

          {/* SUBTITLE */}
          <motion.p
            {...reveal(0.16)}
            className="mt-3 text-[14px] leading-[1.85] text-[#806E65] sm:text-[15px]"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* ======================================
            PANORAMIC IMAGE
        ====================================== */}

        <div className="relative">

          <div className="group relative h-[280px] overflow-hidden rounded-[20px] bg-[#DCC8B5] sm:h-[350px] sm:rounded-[25px] lg:h-[410px]">

            {/* IMAGE — NO LOADING ANIMATION */}
            <motion.img
              src="https://madhurasrecipe.com/wp-content/uploads/2020/10/Solapuri-Shengadana-Chutney-Marathi-Recipe.jpg"
              alt="Traditional Solapuri and Maharashtrian food flavours"
              loading="eager"
              decoding="async"
              initial={false}
              whileHover={
                reducedMotion
                  ? undefined
                  : { scale: 1.04 }
              }
              transition={{
                duration: 0.9,
                ease,
              }}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* CINEMATIC GRADIENT */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#241318]/85 via-[#321922]/35 to-transparent" />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#321922]/35 to-transparent" />

            {/* IMAGE BORDER */}
            <div className="pointer-events-none absolute inset-3 rounded-[14px] border border-white/25 sm:inset-5 sm:rounded-[18px]" />

            {/* IMAGE CAPTION */}
            <div className="pointer-events-none absolute inset-0 flex items-center px-7 pb-5 sm:px-12 lg:px-16 lg:pb-16">

              <div className="max-w-[580px]">

                <motion.div
                  {...reveal(0)}
                  className="mb-4 flex items-center gap-3"
                >
                  <Sparkles
                    size={19}
                    strokeWidth={1.5}
                    className="text-[#F1C98E]"
                  />

                  <span className="h-px w-12 bg-[#F1C98E]/80" />
                </motion.div>

                <motion.p
                  {...reveal(0.08)}
                  className="font-['Poppins'] text-[24px] font-medium leading-[1.4] text-white sm:text-[33px] lg:text-[40px]"
                >
                  {t.imageTitle}
                </motion.p>

                <motion.p
                  {...reveal(0.16)}
                  className="mt-1 font-['Poppins'] text-[24px] font-medium leading-[1.4] text-[#F1C98E] sm:text-[33px] lg:text-[40px]"
                >
                  {t.imageAccent}
                </motion.p>
              </div>
            </div>
          </div>

          {/* ======================================
              OVERLAPPING VISION & MISSION PANEL
          ====================================== */}

          <div className="relative z-10 mx-auto -mt-7 w-[94%] overflow-hidden rounded-[20px] border border-[#EBDDD0] bg-[#FFFDFA] shadow-[0_18px_55px_rgba(87,44,36,0.09)] sm:-mt-12 sm:w-[91%] lg:-mt-16 lg:w-[90%]">

            <div className="grid md:grid-cols-2">

              {items.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className={`group relative min-w-0 overflow-hidden px-6 py-8 sm:px-9 sm:py-10 lg:px-12 ${
                      index === 1
                        ? "border-t border-[#EBDDD0] md:border-l md:border-t-0"
                        : ""
                    }`}
                  >
                    {/* TOP GOLD ACCENT */}
                    <motion.div
                      initial={
                        reducedMotion
                          ? false
                          : { scaleX: 0 }
                      }
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: reducedMotion ? 0 : 0.8,
                        ease,
                      }}
                      className="absolute left-0 top-0 h-[3px] w-full origin-left bg-gradient-to-r from-[#843642] via-[#C9A16C] to-[#E8D3B9]"
                    />

                    {/* LARGE WATERMARK NUMBER */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-2 top-3 select-none font-['Poppins'] text-[85px] font-bold leading-none text-[#843642]/[0.045] sm:text-[110px]"
                    >
                      {item.number}
                    </span>

                    {/* ICON AND TITLE */}
                    <motion.div
                      {...reveal(index * 0.1)}
                      className="relative flex items-center gap-4"
                    >
                      <motion.div
                        whileHover={
                          reducedMotion
                            ? undefined
                            : {
                                scale: 1.08,
                                rotate: -5,
                              }
                        }
                        transition={{
                          duration: 0.25,
                        }}
                        className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[15px] bg-[#843642] text-[#F1C98E] shadow-[0_7px_18px_rgba(132,54,66,0.15)] sm:h-[58px] sm:w-[58px]"
                      >
                        <Icon
                          size={26}
                          strokeWidth={1.5}
                        />
                      </motion.div>

                      <div>
                        <h3 className="font-['Poppins'] text-[23px] font-semibold leading-tight text-[#843642] sm:text-[27px]">
                          {item.label}
                        </h3>

                        <motion.div
                          initial={
                            reducedMotion
                              ? false
                              : { scaleX: 0 }
                          }
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: reducedMotion ? 0 : 0.65,
                            delay: reducedMotion ? 0 : 0.1,
                            ease,
                          }}
                          className="mt-2 h-[2px] w-9 origin-left bg-[#C9A16C]"
                        />
                      </div>
                    </motion.div>

                    {/* DESCRIPTION */}
                    <motion.p
                      {...reveal(0.12 + index * 0.1)}
                      className="relative mt-5 text-[14px] leading-[1.95] text-[#75665F] sm:mt-6 sm:text-[15px]"
                    >
                      {item.description}
                    </motion.p>

                    {/* HOVER ACCENT */}
                    <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-[#C9A16C] transition-all duration-700 group-hover:w-full" />
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* ======================================
            BRAND VALUES STRIP
        ====================================== */}

        <div className="mx-auto mt-8 flex max-w-[1000px] flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:mt-10 sm:gap-x-8">

          {t.values.map((value, index) => (
            <motion.div
              key={value}
              {...reveal(index * 0.08, 12)}
              className="flex items-center gap-2.5"
            >
              <span className="h-[6px] w-[6px] rotate-45 bg-[#C9A16C]" />

              <span className="text-[11px] font-medium tracking-[0.4px] text-[#843642] sm:text-[13px]">
                {value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
