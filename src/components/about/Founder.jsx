
import React, { useContext } from "react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import { Quote, MapPin } from "lucide-react";
import { LanguageContext } from "../../context/LanguageContext";

// ==========================================
// BILINGUAL CONTENT
// ==========================================

const content = {
  en: {
    eyebrow: "THE PERSON BEHIND THE BRAND",
    heading: "The People Behind",
    headingAccent: "Maya’s LALA",

    name: "Maya Sunil Siddhe",
    designation: "Proprietor",
    business: "Siddhalaxmi Mahila Gruh Udyog",
    location: "Solapur, Maharashtra",

    intro:
      "Behind Maya’s LALA Food Products is a commitment to celebrating traditional flavours and sharing the food heritage of Solapur.",

    description:
      "With a passion for regional taste and food traditions, the brand aims to create a meaningful connection between authentic recipes and today’s households.",

    signature: "Maya Sunil Siddhe",

    tagline: "Celebrating Taste. Preserving Tradition.",
  },

  mr: {
    eyebrow: "ब्रँडमागील प्रेरणादायी व्यक्तिमत्त्व",
    heading: "मायाज लाला",
    headingAccent: "मागील व्यक्तिमत्त्व",

    name: "माया सुनील सिद्धे",
    designation: "प्रोप्रायटर",
    business: "सिद्धलक्ष्मी महिला गृह उद्योग",
    location: "सोलापूर, महाराष्ट्र",

    intro:
      "पारंपरिक चवींचा गौरव करणे आणि सोलापूरचा समृद्ध खाद्यवारसा अधिकाधिक लोकांपर्यंत पोहोचवणे, ही मायाज लाला फूड प्रॉडक्ट्समागील प्रेरणा आहे.",

    description:
      "प्रादेशिक चवी आणि खाद्यपरंपरेविषयी असलेल्या आवडीतून पारंपरिक पाककृती आणि आजच्या कुटुंबांमध्ये एक आपुलकीचे नाते निर्माण करण्याचा ब्रँडचा प्रयत्न आहे.",

    signature: "माया सुनील सिद्धे",

    tagline: "चवीचा गौरव. परंपरेची जपणूक.",
  },
};

const ease = [0.22, 1, 0.36, 1];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function Founder() {
  const { language } = useContext(LanguageContext);
  const isMarathi = language === "mr";
  const t = content[isMarathi ? "mr" : "en"];
  const reducedMotion = useReducedMotion();

  const reveal = (delay = 0, y = 22) => ({
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
      duration: reducedMotion ? 0 : 0.75,
      delay: reducedMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="founder"
      aria-labelledby="founder-heading"
      className="relative isolate overflow-hidden bg-[#FFFBF7] py-14 sm:py-20 lg:py-24"
    >
      {/* SIGNATURE FONT */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
      `}</style>

      {/* ========================================
          BACKGROUND
      ======================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#FFFBF7_0%,#FBF5EF_60%,#F7ECE5_100%)]" />

        <div className="absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-[#E9CFC3]/25 blur-[100px]" />

        <div className="absolute -left-24 bottom-0 h-[300px] w-[300px] rounded-full bg-[#EBD8C2]/30 blur-[90px]" />

        <div className="absolute left-0 top-0 h-px w-full bg-[#E9D9CD]" />
      </div>

      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">

        {/* ========================================
            SECTION HEADING
        ======================================== */}

        <div className="mx-auto mb-10 max-w-[800px] text-center sm:mb-14">

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

          <motion.h2
            {...reveal(0.08)}
            id="founder-heading"
            className="font-['Poppins'] text-[27px] font-semibold leading-[1.35] tracking-[-0.7px] text-[#4D3034] sm:text-[31px] lg:text-[35px]"
          >
            {t.heading}{" "}

            <span className="text-[#843642]">
              {t.headingAccent}
            </span>
          </motion.h2>
        </div>

        {/* ========================================
            FOUNDER PROFILE
        ======================================== */}

        <div className="relative mx-auto grid max-w-[1150px] items-center gap-8 lg:grid-cols-[370px_1fr] lg:gap-0">

          {/* CONTINUOUS BACKGROUND PANEL */}
          <div
            aria-hidden="true"
            className="absolute inset-y-8 left-[230px] right-0 hidden rounded-[28px] border border-[#EADBCF] bg-[#FFFDF9] shadow-[0_20px_60px_rgba(84,44,35,0.055)] lg:block"
          />

          {/* ========================================
              FOUNDER PHOTO
          ======================================== */}

          <div className="relative z-10 mx-auto w-full max-w-[370px]">

            {/* GOLD OUTLINE */}
            <div className="absolute -inset-2 rounded-t-[185px] rounded-b-[20px] border border-[#C9A16C]/60 sm:-inset-3" />

            {/* INNER PHOTO FRAME */}
            <div className="group relative h-[390px] overflow-hidden rounded-t-[185px] rounded-b-[20px] bg-[#EBDDD1] shadow-[0_18px_45px_rgba(83,42,37,0.12)] sm:h-[460px]">

              {/* PHOTO - NO HIDDEN ANIMATION */}
              <motion.img
                src="/founder.webp"
                alt="Maya Sunil Siddhe, Proprietor of Siddhalaxmi Mahila Gruh Udyog"
                loading="eager"
                decoding="async"
                initial={false}
                whileHover={
                  reducedMotion
                    ? undefined
                    : { scale: 1.035 }
                }
                transition={{
                  duration: 0.8,
                  ease,
                }}
                className="h-full w-full object-cover object-top"
              />

              {/* BOTTOM GRADIENT */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#321A20]/60 via-transparent to-transparent" />

              {/* FOUNDER NAME PLATE */}
              <div className="absolute inset-x-3 bottom-3 rounded-[14px] border border-[#EAC28A]/30 bg-[#843642] px-4 py-5 text-center sm:inset-x-4 sm:bottom-4">

                <h3 className="font-['Poppins'] text-[19px] font-semibold leading-tight text-white sm:text-[22px]">
                  {t.name}
                </h3>

                <div className="mx-auto my-2.5 h-px w-10 bg-[#F1C98E]/70" />

                <p className="text-[10px] font-medium uppercase tracking-[2px] text-[#F1C98E] sm:text-[11px]">
                  {t.designation}
                </p>
              </div>
            </div>
          </div>

          {/* ========================================
              FOUNDER INTRODUCTION
          ======================================== */}

          <div className="relative rounded-[24px] border border-[#EADBCF] bg-[#FFFDF9] px-6 py-8 sm:px-10 sm:py-10 lg:rounded-none lg:border-0 lg:bg-transparent lg:py-14 lg:pl-16 lg:pr-12">

            {/* DECORATIVE QUOTATION ICON */}
            <motion.div
              {...reveal(0)}
              aria-hidden="true"
              className="mb-5"
            >
              <Quote
                size={42}
                strokeWidth={1.1}
                fill="#EBD7BC"
                className="text-[#C9A16C]"
              />
            </motion.div>

            {/* MAIN INTRODUCTION */}
            <motion.p
              {...reveal(0.08)}
              className="font-['Poppins'] text-[18px] font-medium leading-[1.8] tracking-[-0.2px] text-[#843642] sm:text-[20px] lg:text-[23px]"
            >
              {t.intro}
            </motion.p>

            {/* GOLD ANIMATED DIVIDER */}
            <div className="my-6 flex items-center gap-2">

              <motion.span
                initial={
                  reducedMotion
                    ? false
                    : { scaleX: 0 }
                }
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: reducedMotion ? 0 : 0.85,
                  ease,
                }}
                className="h-[2px] w-14 origin-left bg-[#C9A16C]"
              />

              <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A16C]" />
            </div>

            {/* DESCRIPTION */}
            <motion.p
              {...reveal(0.16)}
              className="max-w-[650px] text-[14px] leading-[1.95] text-[#75665F] sm:text-[15px]"
            >
              {t.description}
            </motion.p>

            {/* ========================================
                SIGNATURE STYLE
            ======================================== */}

            <motion.div
              {...reveal(0.22)}
              className="mt-7 sm:mt-9"
            >
              <div
                className={`w-fit text-[#843642] ${
                  isMarathi
                    ? "text-[27px] font-medium italic sm:text-[32px]"
                    : "text-[36px] leading-[1.4] sm:text-[45px]"
                }`}
                style={{
                  fontFamily: isMarathi
                    ? "inherit"
                    : "'Great Vibes', cursive",
                }}
              >
                {t.signature}
              </div>

              {/* SIGNATURE UNDERLINE */}
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
                  delay: reducedMotion ? 0 : 0.15,
                  ease,
                }}
                className="h-px w-36 origin-left bg-gradient-to-r from-[#C9A16C] to-transparent sm:w-48"
              />

              <p className="mt-3 text-[13px] font-semibold text-[#5D343B] sm:text-[14px]">
                {t.business}
              </p>

              <div className="mt-2 flex items-center gap-1.5 text-[#998174]">

                <MapPin
                  size={14}
                  strokeWidth={1.7}
                  className="shrink-0 text-[#B18A60]"
                />

                <span className="text-[12px]">
                  {t.location}
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ========================================
            BOTTOM BRAND TAGLINE
        ======================================== */}

        <motion.div
          {...reveal(0.1, 15)}
          className="mt-10 flex items-center justify-center gap-4 sm:mt-12"
        >
          <span className="hidden h-px w-14 bg-[#C9A16C]/50 sm:block" />

          <span className="text-center text-[11px] font-medium tracking-[1px] text-[#843642] sm:text-[12px]">
            {t.tagline}
          </span>

          <span className="hidden h-px w-14 bg-[#C9A16C]/50 sm:block" />
        </motion.div>
      </div>
    </section>
  );
}
