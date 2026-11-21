
import React, { useContext, useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  MapPin,
  Flame,
  HeartHandshake,
  ArrowUpRight,
} from "lucide-react";
import { LanguageContext } from "../../context/LanguageContext";

const content = {
  en: {
    eyebrow: "OUR JOURNEY",
    heading1: "Inspired by a Tradition",
    heading2: "Since 1968.",
    intro:
      "The LALA name is associated with a food tradition that traces its roots to 1968 in Solapur.",
    yearLabel: "ROOTS OF A FOOD TRADITION",
    location: "SOLAPUR, MAHARASHTRA",
    timeline: [
      {
        number: "01",
        title: "The Roots",
        text: "The LALA name is associated with a food tradition that traces its roots to 1968 in Solapur.",
        icon: MapPin,
      },
      {
        number: "02",
        title: "A Distinctive Taste",
        text: "Known for its distinctive spicy flavours, the tradition reflects the rich culinary identity of the region.",
        icon: Flame,
      },
      {
        number: "03",
        title: "Carrying the Inspiration Forward",
        text: "Inspired by this heritage, Maya’s LALA Food Products brings forward the familiar taste of traditional Solapuri Shenga Chutney.",
        icon: HeartHandshake,
      },
    ],
    closing:
      "Our journey represents a connection between regional food culture and the needs of today’s consumers.",
    closingLabel: "TRADITION MEETS TODAY",
  },

  mr: {
    eyebrow: "आमचा प्रवास",
    heading1: "१९६८ पासूनच्या खाद्यपरंपरेतून",
    heading2: "मिळालेली प्रेरणा.",
    intro:
      "लाला हे नाव सोलापूरमधील १९६८ पासून सुरू झालेल्या एका खाद्यपरंपरेशी जोडलेले आहे.",
    yearLabel: "खाद्यपरंपरेची मुळे",
    location: "सोलापूर, महाराष्ट्र",
    timeline: [
      {
        number: "०१",
        title: "परंपरेची सुरुवात",
        text: "लाला हे नाव सोलापूरमधील १९६८ पासून सुरू झालेल्या एका खाद्यपरंपरेशी जोडलेले आहे.",
        icon: MapPin,
      },
      {
        number: "०२",
        title: "वैशिष्ट्यपूर्ण तिखट चव",
        text: "आपल्या खास तिखट चवीसाठी ओळखली जाणारी ही परंपरा सोलापूरच्या समृद्ध खाद्यसंस्कृतीचे दर्शन घडवते.",
        icon: Flame,
      },
      {
        number: "०३",
        title: "परंपरेतून पुढे जाणारा प्रवास",
        text: "याच वारशातून प्रेरणा घेऊन मायाज लाला फूड प्रॉडक्ट्स पारंपरिक सोलापुरी शेंगा चटणीची परिचित चव पुढे आणत आहे.",
        icon: HeartHandshake,
      },
    ],
    closing:
      "आमचा प्रवास म्हणजे प्रादेशिक खाद्यसंस्कृती आणि आजच्या ग्राहकांच्या गरजा यांना जोडणारा एक दुवा आहे.",
    closingLabel: "परंपरा आणि आधुनिक काळाचा संगम",
  },
};

const ease = [0.22, 1, 0.36, 1];

export default function OurJourney() {
  const { language } = useContext(LanguageContext);
  const lang = language === "mr" ? "mr" : "en";
  const t = content[lang];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.12,
  });

  const reduceMotion = useReducedMotion();
  const visible = reduceMotion || isInView;

  const fadeUp = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 30 },
    animate: visible
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 30 },
    transition: {
      duration: reduceMotion ? 0 : 0.8,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      ref={sectionRef}
      id="our-journey"
      aria-labelledby="journey-heading"
      className="
        relative isolate overflow-hidden
        bg-[#F8F1E9]
        py-16 sm:py-20 lg:py-24
      "
    >
      {/* BACKGROUND DECORATION */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#F8F1E9_0%,#FFF9F3_52%,#F4E7DD_100%)]" />

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#D9BFA4]/30" />

        <div className="absolute -right-24 -top-24 h-[370px] w-[370px] rounded-full border border-[#D9BFA4]/25" />

        <div className="absolute -bottom-48 -left-48 h-[450px] w-[450px] rounded-full bg-[#E8CFC5]/25 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        {/* SECTION HEADER */}
        <motion.div
          {...fadeUp(0)}
          className="mx-auto max-w-[800px] text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#C59C6C]" />

            <span className="text-[11px] font-bold uppercase tracking-[2.6px] text-[#A67B51]">
              {t.eyebrow}
            </span>

            <span className="h-px w-9 bg-[#C59C6C]" />
          </div>

          <h2
            id="journey-heading"
            className="
              font-['Poppins']
              text-[27px] font-semibold
              leading-[1.3]
              tracking-[-0.7px]
              text-[#482D32]
              sm:text-[31px]
              lg:text-[35px]
            "
          >
            {t.heading1}{" "}
            <span className="text-[#843642]">
              {t.heading2}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[14px] leading-[1.9] text-[#79675E] sm:text-[15px]">
            {t.intro}
          </p>
        </motion.div>

        {/* LARGE YEAR DISPLAY */}
        <motion.div
          {...fadeUp(0.12)}
          className="relative mx-auto mt-10 flex max-w-[950px] flex-col items-center"
        >
          <div className="relative">
            <span
              aria-hidden="true"
              className="
                pointer-events-none absolute
                left-1/2 top-1/2
                -translate-x-1/2 -translate-y-1/2
                whitespace-nowrap
                font-['Poppins']
                text-[110px] font-bold
                leading-none tracking-[-9px]
                text-[#843642]/[0.045]
                sm:text-[200px]
                lg:text-[270px]
              "
            >
              1968
            </span>

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, scale: 0.85 }
              }
              animate={
                visible
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.85 }
              }
              transition={{
                duration: reduceMotion ? 0 : 1.1,
                delay: reduceMotion ? 0 : 0.2,
                ease,
              }}
              className="relative z-10 text-center"
            >
              <span
                className="
                  font-['Poppins']
                  text-[75px] font-bold
                  leading-none tracking-[-5px]
                  text-[#843642]
                  sm:text-[115px]
                  lg:text-[145px]
                "
              >
                1968
              </span>

              <div className="mt-3 flex items-center justify-center gap-3">
                <span className="h-px w-9 bg-[#C9A16C]" />

                <span className="text-[10px] font-bold uppercase tracking-[1.8px] text-[#A67B51] sm:text-[11px]">
                  {t.yearLabel}
                </span>

                <span className="h-px w-9 bg-[#C9A16C]" />
              </div>
            </motion.div>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#E4D3C4] bg-white/70 px-5 py-2.5 text-[#815D53]">
            <MapPin size={14} className="text-[#843642]" />

            <span className="text-[10px] font-semibold uppercase tracking-[1.3px]">
              {t.location}
            </span>
          </div>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative mt-14 lg:mt-20">
          {/* DESKTOP CONNECTING LINE */}
          <div
            aria-hidden="true"
            className="absolute left-[16.66%] right-[16.66%] top-[26px] hidden h-px bg-[#D8B99D] lg:block"
          />

          <motion.div
            aria-hidden="true"
            initial={
              reduceMotion ? false : { scaleX: 0 }
            }
            animate={{ scaleX: visible ? 1 : 0 }}
            transition={{
              duration: reduceMotion ? 0 : 1.4,
              delay: reduceMotion ? 0 : 0.4,
              ease,
            }}
            className="absolute left-[16.66%] right-[16.66%] top-[26px] hidden h-[2px] origin-left bg-[#843642] lg:block"
          />

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {t.timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  {...fadeUp(0.25 + index * 0.15)}
                  className="relative"
                >
                  {/* TIMELINE NODE */}
                  <div className="relative z-10 mx-auto mb-6 hidden h-[53px] w-[53px] items-center justify-center rounded-full border-[6px] border-[#F8F1E9] bg-[#843642] text-[#FFF8EE] shadow-[0_7px_20px_rgba(132,54,66,0.18)] lg:flex">
                    <span className="text-[12px] font-semibold">
                      {item.number}
                    </span>
                  </div>

                  {/* CARD */}
                  <div
                    className="
                      group relative h-full
                      overflow-hidden rounded-[22px]
                      border border-[#E9D8C8]
                      bg-[#FFFCF8]
                      px-6 py-7
                      shadow-[0_12px_35px_rgba(98,59,44,0.04)]
                      transition-all duration-500
                      hover:-translate-y-2
                      hover:border-[#C9A16C]
                      hover:shadow-[0_22px_45px_rgba(98,59,44,0.1)]
                      sm:px-8 sm:py-8
                    "
                  >
                    {/* TOP ACCENT */}
                    <div className="absolute left-0 right-0 top-0 h-[3px] origin-left scale-x-0 bg-[#843642] transition-transform duration-500 group-hover:scale-x-100" />

                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-[15px] bg-[#F4E6DD] text-[#843642] transition-all duration-300 group-hover:bg-[#843642] group-hover:text-white">
                        <Icon size={22} strokeWidth={1.6} />
                      </div>

                      <span className="font-['Poppins'] text-[33px] font-semibold leading-none text-[#843642]/10">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="font-['Poppins'] text-[18px] font-semibold text-[#56333B]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[13px] leading-[1.95] text-[#806F65] sm:text-[14px]">
                      {item.text}
                    </p>

                    <div className="mt-6 flex items-center gap-2">
                      <span className="h-[2px] w-8 bg-[#C9A16C]" />

                      <ArrowUpRight
                        size={16}
                        className="text-[#B88D65] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CLOSING STATEMENT */}
        <motion.div
          {...fadeUp(0.55)}
          className="
            relative mt-12 overflow-hidden
            rounded-[22px]
            border border-[#E5CFC0]
            bg-[#F2E3D9]
            px-6 py-8
            text-center
            sm:mt-16 sm:px-12 sm:py-10
          "
        >
          <div
            aria-hidden="true"
            className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-[#C9A16C]/30"
          />

          <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#A77C50]">
            {t.closingLabel}
          </span>

          <p className="mx-auto mt-4 max-w-[780px] font-['Poppins'] text-[17px] font-medium leading-[1.75] text-[#713943] sm:text-[20px]">
            {t.closing}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
