
import React, { useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LanguageContext } from "../../context/LanguageContext";

const copy = {
  en: {
    eyebrow: "OUR GUIDING PURPOSE",
    heading: "Our Vision",
    headingAccent: "& Mission",
    subtitle:
      "Rooted in Solapur's food heritage. Inspired to take its authentic flavours further.",
    vision: {
      label: "OUR VISION",
      number: "01",
      title: "Making Our Flavours Known.",
      description:
        "To make the authentic flavours of Solapur and traditional Maharashtrian food products more widely recognised and appreciated.",
      photoLabel: "A VISION INSPIRED BY HERITAGE",
    },
    mission: {
      label: "OUR MISSION",
      number: "02",
      title: "Keeping Traditions Alive.",
      description:
        "To celebrate traditional recipes, focus on distinctive flavours and make regional food products accessible to more households.",
      photoLabel: "A MISSION DRIVEN BY TASTE",
    },
    footer: "FROM SOLAPUR'S FOOD HERITAGE TO EVERYDAY TABLES",
  },
  mr: {
    eyebrow: "आमच्या प्रवासाची दिशा",
    heading: "आमची दृष्टी",
    headingAccent: "आणि ध्येय",
    subtitle:
      "सोलापूरच्या खाद्यपरंपरेशी जोडलेली नाळ आणि अस्सल चवी अधिक लोकांपर्यंत पोहोचवण्याची प्रेरणा.",
    vision: {
      label: "आमची दृष्टी",
      number: "०१",
      title: "आपल्या चवींना व्यापक ओळख.",
      description:
        "सोलापूरच्या अस्सल चवी आणि महाराष्ट्रातील पारंपरिक खाद्यपदार्थांना अधिक व्यापक ओळख व मान्यता मिळवून देणे.",
      photoLabel: "परंपरेतून प्रेरित दृष्टी",
    },
    mission: {
      label: "आमचे ध्येय",
      number: "०२",
      title: "पारंपरिक चवींचा वारसा जपणे.",
      description:
        "पारंपरिक पाककृतींचा गौरव करणे, वैशिष्ट्यपूर्ण चवींवर भर देणे आणि प्रादेशिक खाद्यपदार्थ अधिकाधिक घरांपर्यंत पोहोचवणे.",
      photoLabel: "अस्सल चवींसाठी आमचे ध्येय",
    },
    footer: "सोलापूरच्या खाद्यपरंपरेपासून रोजच्या जेवणापर्यंत",
  },
};

const ease = [0.22, 1, 0.36, 1];

const stories = [
  { key: "vision", image: "/vision-food.webp" },
  { key: "mission", image: "/mission-food.webp" },
];

export default function VisionMission() {
  const { language } = useContext(LanguageContext);
  const t = copy[language === "mr" ? "mr" : "en"];
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="vision-mission"
      aria-labelledby="vision-mission-heading"
      className="relative overflow-hidden bg-[#FFFBF7] py-16 sm:py-20 lg:py-24"
    >
      {/* BACKGROUND DETAILS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-0 top-0 h-px w-full bg-[#E9DCCF]" />
        <div className="absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-[#F1E1D5]/35 blur-[90px]" />
        <div className="absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[#F0E1D6]/25 blur-[90px]" />
      </div>

      <div className="relative mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-10">
        {/* HEADING */}
        <motion.div
          initial={
            reducedMotion ? false : { opacity: 0, y: 28 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: reducedMotion ? 0 : 0.8,
            ease,
          }}
          className="mx-auto mb-12 max-w-[740px] text-center lg:mb-14"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#C9A16C]" />
            <span className="text-[10px] font-bold uppercase tracking-[2.4px] text-[#A77C50]">
              {t.eyebrow}
            </span>
            <span className="h-px w-9 bg-[#C9A16C]" />
          </div>

          <h2
            id="vision-mission-heading"
            className="font-['Poppins'] text-[27px] font-semibold leading-[1.3] tracking-[-0.6px] text-[#4D3034] sm:text-[31px] lg:text-[35px]"
          >
            {t.heading}{" "}
            <span className="text-[#843642]">
              {t.headingAccent}
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[600px] text-[14px] leading-[1.9] text-[#806E65] sm:text-[15px]">
            {t.subtitle}
          </p>
        </motion.div>

        {/* TWO EDITORIAL STORIES */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-9 lg:gap-12">
          {stories.map((story, index) => {
            const item = t[story.key];

            return (
              <motion.article
                key={story.key}
                initial={
                  reducedMotion
                    ? false
                    : { opacity: 0, y: 42 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reducedMotion ? 0 : 0.85,
                  delay: reducedMotion ? 0 : index * 0.16,
                  ease,
                }}
                className="group min-w-0"
              >
                {/* IMAGE AREA */}
                <div className="relative">
                  <div className="absolute -bottom-2 -right-2 h-full w-full rounded-[18px] border border-[#C9A16C]/45 sm:-bottom-3 sm:-right-3" />

                  <div className="relative aspect-[1.35/1] overflow-hidden rounded-[18px] bg-[#EBDDD0] shadow-[0_16px_40px_rgba(73,38,30,0.08)]">
                    <motion.img
                      src={story.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                      whileHover={
                        reducedMotion
                          ? undefined
                          : { scale: 1.065 }
                      }
                      transition={{
                        duration: 0.85,
                        ease,
                      }}
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#271219]/65 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 sm:bottom-7 sm:left-7">
                      <span className="text-[10px] font-semibold uppercase tracking-[1.8px] text-white">
                        {item.photoLabel}
                      </span>

                      <span className="font-['Poppins'] text-[30px] font-semibold leading-none text-white/75 sm:text-[38px]">
                        {item.number}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CONTENT AREA */}
                <div className="px-1 pt-8 sm:px-2 sm:pt-9">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-[2px] w-8 bg-[#C9A16C]" />

                    <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#A77C50]">
                      {item.label}
                    </span>
                  </div>

                  <h3 className="font-['Poppins'] text-[22px] font-semibold leading-[1.4] tracking-[-0.4px] text-[#843642] sm:text-[25px] lg:text-[27px]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-[530px] text-[14px] leading-[1.95] text-[#78685F] sm:text-[15px]">
                    {item.description}
                  </p>

                  <div className="mt-7 h-px w-full bg-[#E6D7C9]">
                    <div className="h-full w-12 bg-[#C9A16C] transition-all duration-500 group-hover:w-28" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* FOOTER ACCENT */}
        <motion.div
          initial={
            reducedMotion ? false : { opacity: 0, y: 16 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reducedMotion ? 0 : 0.75,
            delay: reducedMotion ? 0 : 0.25,
          }}
          className="mt-14 flex items-center justify-center gap-4 sm:mt-16"
        >
          <span className="hidden h-px w-14 bg-[#D9C4AF] sm:block" />

          <span className="text-center text-[10px] font-semibold uppercase tracking-[1.5px] text-[#A88A75] sm:tracking-[2px]">
            {t.footer}
          </span>

          <span className="hidden h-px w-14 bg-[#D9C4AF] sm:block" />
        </motion.div>
      </div>
    </section>
  );
}
