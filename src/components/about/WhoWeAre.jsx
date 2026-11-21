
import React, { useContext } from "react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  MapPin,
  Heart,
  Sparkles,
} from "lucide-react";
import { LanguageContext } from "../../context/LanguageContext";

// ==========================================
// BILINGUAL CONTENT
// ==========================================

const content = {
  en: {
    eyebrow: "WHO WE ARE",
    heading1: "More Than Food.",
    heading2: "A Connection to Tradition.",

    paragraphs: [
      "Maya’s LALA Food Products is a food brand associated with Siddhalaxmi Mahila Gruh Udyog, a proprietorship business based in Solapur, Maharashtra.",
      "The brand celebrates traditional Maharashtrian food flavours, with Solapuri Shenga Chutney as its signature offering.",
      "Our identity is built around authentic taste, regional food heritage and a passion for bringing traditional accompaniments to everyday meals.",
      "We believe that food is more than nourishment. It carries memories, culture and a sense of belonging.",
    ],

    imageLabel: "THE TASTE OF SOLAPUR",
    imageSub: "Tradition in every flavour",
    productLabel: "OUR SIGNATURE",
    productName: "Solapuri Shenga Chutney",

    features: [
      {
        title: "Traditional Flavours",
        desc: "Inspired by Maharashtra",
        icon: Heart,
      },
      {
        title: "Authentic Taste",
        desc: "Rooted in food heritage",
        icon: Sparkles,
      },
      {
        title: "Solapur Heritage",
        desc: "Celebrating regional food",
        icon: MapPin,
      },
    ],
  },

  mr: {
    eyebrow: "आमची ओळख",
    heading1: "केवळ खाद्यपदार्थ नाहीत.",
    heading2: "तर परंपरेशी जोडलेलं नातं.",

    paragraphs: [
      "मायाज लाला फूड प्रॉडक्ट्स हा सोलापूर, महाराष्ट्र येथील सिद्धलक्ष्मी महिला गृह उद्योग या एकल मालकीच्या व्यवसायाशी संबंधित खाद्यपदार्थांचा ब्रँड आहे.",
      "हा ब्रँड महाराष्ट्राच्या पारंपरिक खाद्यसंस्कृतीचा गौरव करतो. सोलापुरी शेंगा चटणी हे आमचे प्रमुख वैशिष्ट्यपूर्ण उत्पादन आहे.",
      "अस्सल चव, प्रादेशिक खाद्यपरंपरा आणि रोजच्या जेवणात पारंपरिक चवींचा आनंद पोहोचवण्याची आवड यांवर आमची ओळख उभी आहे.",
      "आमच्या मते अन्न म्हणजे केवळ पोट भरण्याचं साधन नाही. त्यात आठवणी, संस्कृती आणि आपलेपणाची भावना सामावलेली असते.",
    ],

    imageLabel: "सोलापूरची अस्सल चव",
    imageSub: "प्रत्येक चवीत परंपरेचा स्पर्श",
    productLabel: "आमचे खास उत्पादन",
    productName: "सोलापुरी शेंगा चटणी",

    features: [
      {
        title: "पारंपरिक चव",
        desc: "महाराष्ट्राच्या परंपरेतून प्रेरित",
        icon: Heart,
      },
      {
        title: "अस्सल स्वाद",
        desc: "खाद्यसंस्कृतीशी जोडलेला",
        icon: Sparkles,
      },
      {
        title: "सोलापूरचा वारसा",
        desc: "प्रादेशिक खाद्यपरंपरेचा गौरव",
        icon: MapPin,
      },
    ],
  },
};

const ease = [0.22, 1, 0.36, 1];

export default function WhoWeAre() {
  const { language } = useContext(LanguageContext);
  const t = content[language === "mr" ? "mr" : "en"];
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: {
      duration: reduceMotion ? 0 : 0.7,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="about-story"
      aria-labelledby="who-we-are-heading"
      className="relative isolate overflow-hidden bg-[#FFFBF7] py-16 sm:py-20 lg:py-24"
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#FFFBF7_0%,#FFF9F4_65%,#F8EEE9_100%)]" />

        <div className="absolute -right-32 top-0 h-[360px] w-[360px] rounded-full bg-[#EEDBD3]/30 blur-[100px]" />

        <div className="absolute -left-32 bottom-0 h-[300px] w-[300px] rounded-full bg-[#E8D1C2]/25 blur-[90px]" />
      </div>

      <div className="mx-auto max-w-[1350px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* LEFT IMAGE COMPOSITION */}
          <div className="relative mx-auto w-full max-w-[540px] pb-12 pr-6 sm:pr-10">
            {/* GOLD FRAME */}
            <div className="absolute bottom-7 right-0 top-9 left-9 rounded-[28px] border border-[#C9A16C]/50 sm:left-12" />

            {/* MAIN IMAGE - INSTANT DISPLAY */}
            <div className="group relative h-[370px] overflow-hidden rounded-[26px] bg-[#E7D6C9] shadow-[0_25px_65px_rgba(92,49,42,0.13)] sm:h-[490px]">
              <motion.img
                src="/about-img.webp"
                alt="Traditional Maharashtrian food culture"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                initial={false}
                whileHover={
                  reduceMotion
                    ? undefined
                    : { scale: 1.04 }
                }
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className="h-full w-full object-cover"
              />

              {/* IMAGE GRADIENT */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#321923]/80 via-transparent to-transparent" />

              {/* IMAGE CAPTION */}
              <div className="absolute bottom-7 left-7 right-7">
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#F1C98E]">
                  {t.imageLabel}
                </span>

                <p className="mt-2 text-[16px] font-medium text-white">
                  {t.imageSub}
                </p>
              </div>
            </div>

            {/* FLOATING PRODUCT CARD */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, scale: 0.85, y: 20 }
              }
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                delay: reduceMotion ? 0 : 0.15,
                ease,
              }}
              className="absolute -bottom-2 right-0 z-20"
            >
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : { y: [0, -7, 0] }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex w-[160px] flex-col items-center rounded-[20px] border border-[#E9D9CC] bg-[#FFFDF9] px-3 pb-4 pt-2 shadow-[0_20px_45px_rgba(80,42,37,0.15)] sm:w-[190px]"
              >
                <img
                  src="/p1.png"
                  alt="Solapuri Shenga Chutney"
                  loading="lazy"
                  className="h-[105px] w-full object-contain sm:h-[130px]"
                />

                <span className="mt-1 text-[9px] font-bold uppercase tracking-[1.4px] text-[#B38A60]">
                  {t.productLabel}
                </span>

                <p className="mt-1 text-center text-[12px] font-semibold text-[#71333D]">
                  {t.productName}
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* EYEBROW */}
            <motion.div
              {...reveal(0)}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-[2px] w-9 bg-[#C9A16C]" />

              <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#A77C50] sm:text-[11px]">
                {t.eyebrow}
              </span>
            </motion.div>

            {/* HEADING */}
            <h2
              id="who-we-are-heading"
              className="max-w-[680px] font-['Poppins'] text-[27px] font-semibold leading-[1.3] tracking-[-0.7px] text-[#4C2C2C] sm:text-[31px] lg:text-[35px]"
            >
              <motion.span
                {...reveal(0.08)}
                className="block"
              >
                {t.heading1}
              </motion.span>

              <motion.span
                {...reveal(0.16)}
                className="block text-[#8B3540]"
              >
                {t.heading2}
              </motion.span>
            </h2>

            {/* ANIMATED GOLD DIVIDER */}
            <div className="mt-6 flex items-center gap-2">
              <motion.span
                initial={
                  reduceMotion
                    ? false
                    : { scaleX: 0 }
                }
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: reduceMotion ? 0 : 0.2,
                  ease,
                }}
                className="h-[2px] w-14 origin-left bg-[#C9A16C]"
              />

              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A16C]" />
            </div>

            {/* PARAGRAPHS */}
            <div className="mt-6 space-y-4">
              {t.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  {...reveal(0.15 + index * 0.08)}
                  className="max-w-[620px] text-[14px] leading-[1.95] text-[#75665F] sm:text-[15px]"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* CLOSING QUOTE */}
            <motion.div
              {...reveal(0.35)}
              className="mt-7 border-l-[3px] border-[#C9A16C] bg-[#F5EAE1] px-5 py-4"
            >
              <p className="text-[13px] font-medium italic leading-[1.8] text-[#7D3B46] sm:text-[14px]">
                {t.paragraphs[3]}
              </p>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM FEATURE STRIP */}
        <div className="mt-14 grid gap-4 border-t border-[#E8D8CA] pt-8 sm:grid-cols-3 lg:mt-16">
          {t.features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 20 }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  delay: reduceMotion
                    ? 0
                    : index * 0.1,
                  ease,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -5 }
                }
                className="group flex items-center gap-4 rounded-[18px] px-4 py-4 transition-colors duration-300 hover:bg-[#F6EBE4]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#F0E0D4] text-[#8B3540] transition-all duration-300 group-hover:bg-[#843642] group-hover:text-white">
                  <Icon size={21} strokeWidth={1.6} />
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold text-[#5C3037]">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-[12px] text-[#8D7970]">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
