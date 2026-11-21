
import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  Wheat,
  BookOpen,
  PackageCheck,
  ArrowUpRight,
  Sparkles,
  MoveUpRight,
} from "lucide-react";

import { LanguageContext } from "../../context/LanguageContext";

const content = {
  en: {
    eyebrow: "OUR QUALITY COMMITMENT",
    heading1: "Traditional Taste.",
    heading2: "Thoughtful Preparation.",
    paragraph1:
      "We believe that authentic flavour begins with the right combination of ingredients and attention to preparation.",
    paragraph2:
      "Our focus is on maintaining the distinctive character of traditional food recipes while offering convenient packaged products for today's consumers.",
    focusLabel: "OUR THREE FOCUS AREAS",
    cta: "Learn About Our Process",
    decorative: "QUALITY • TRADITION • TASTE •",
    areas: [
      {
        number: "01",
        title: "Ingredients & Flavour",
        icon: Wheat,
      },
      {
        number: "02",
        title: "Traditional Recipe Inspiration",
        icon: BookOpen,
      },
      {
        number: "03",
        title: "Convenient Packaging",
        icon: PackageCheck,
      },
    ],
  },

  mr: {
    eyebrow: "गुणवत्तेबाबत आमची बांधिलकी",
    heading1: "पारंपरिक चव.",
    heading2: "विचारपूर्वक तयारी.",
    paragraph1:
      "अस्सल चवीची सुरुवात योग्य घटकांच्या मिश्रणातून आणि पदार्थ तयार करताना घेतलेल्या काळजीतून होते, असा आमचा विश्वास आहे.",
    paragraph2:
      "आजच्या ग्राहकांसाठी सोयीस्कर पॅकेजिंगमध्ये उत्पादने उपलब्ध करून देताना पारंपरिक पाककृतींची वैशिष्ट्यपूर्ण चव जपण्यावर आमचा भर आहे.",
    focusLabel: "आमचे तीन प्रमुख भर",
    cta: "आमच्या प्रक्रियेबद्दल जाणून घ्या",
    decorative: "QUALITY • TRADITION • TASTE •",
    areas: [
      {
        number: "०१",
        title: "घटक आणि चव",
        icon: Wheat,
      },
      {
        number: "०२",
        title: "पारंपरिक पाककृतींची प्रेरणा",
        icon: BookOpen,
      },
      {
        number: "०३",
        title: "सोयीस्कर पॅकेजिंग",
        icon: PackageCheck,
      },
    ],
  },
};

const ease = [0.22, 1, 0.36, 1];

// ==========================================
// DOT EXPAND BUTTON
// ==========================================

function DotExpandButton({ children }) {
  return (
    <Link
  to="/quality#preparation-process"
      className="
        group relative inline-flex
        min-h-[54px] items-center
        justify-center gap-5
        overflow-hidden rounded-full
        bg-[#843642] px-7 py-3
        text-[13px] font-semibold text-white
        shadow-[0_12px_30px_rgba(132,54,66,0.2)]
        transition-all duration-500
        hover:-translate-y-1
        hover:shadow-[0_18px_45px_rgba(117,67,127,0.3)]
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-[#75437F]
      "
    >
      {/* EXPANDING PLUM DOT */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-1/2 top-1/2
          h-3 w-3
          -translate-x-1/2 -translate-y-1/2
          scale-0 rounded-full
          bg-[#75437F]
          transition-transform duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:scale-[80]
        "
      />

      <span className="relative z-10">{children}</span>

      <span
        className="
          relative z-10 flex h-8 w-8
          items-center justify-center
          rounded-full bg-white/15
          transition-all duration-500
          group-hover:translate-x-1
          group-hover:rotate-45
          group-hover:bg-white/25
        "
      >
        <ArrowUpRight size={17} strokeWidth={1.8} />
      </span>
    </Link>
  );
}

// ==========================================
// QUALITY STRIP
// ==========================================

function QualityStrip({
  item,
  index,
  visible,
  reducedMotion,
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={
        reducedMotion
          ? false
          : { opacity: 0, y: 40 }
      }
      animate={
        visible
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 40 }
      }
      transition={{
        duration: reducedMotion ? 0 : 0.75,
        delay: reducedMotion ? 0 : 0.2 + index * 0.16,
        ease,
      }}
      className="
        group relative overflow-hidden
        border-b border-[#DDCEC7]
        py-6 sm:py-8
        transition-colors duration-500
        hover:border-[#75437F]/40
      "
    >
      {/* HOVER BACKGROUND */}
      <div
        className="
          pointer-events-none absolute inset-0
          -translate-x-full
          bg-gradient-to-r
          from-[#75437F]/[0.08]
          via-[#F1E4E9]/60
          to-transparent
          transition-transform duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:translate-x-0
        "
      />

      <div
        className="
          relative z-10 grid
          grid-cols-[40px_52px_minmax(0,1fr)_24px]
          items-center gap-3
          sm:grid-cols-[48px_62px_minmax(0,1fr)_28px]
          sm:gap-5
        "
      >
        {/* NUMBER */}
        <span
          className="
            text-[13px] font-semibold
            tracking-[1px] text-[#B79781]
            transition-colors duration-300
            group-hover:text-[#75437F]
          "
        >
          {item.number}
        </span>

        {/* ICON */}
        <div
          className="
            flex h-[50px] w-[50px]
            items-center justify-center
            rounded-[16px]
            bg-[#F2E4DB] text-[#873D47]
            transition-all duration-500
            group-hover:rotate-[-7deg]
            group-hover:scale-110
            group-hover:bg-[#75437F]
            group-hover:text-white
            sm:h-[60px] sm:w-[60px]
          "
        >
          <Icon size={25} strokeWidth={1.5} />
        </div>

        {/* TITLE */}
        <h3
          className="
            text-[16px] font-semibold
            leading-[1.5] text-[#4D3030]
            transition-all duration-500
            group-hover:translate-x-1
            group-hover:text-[#75437F]
            sm:text-[20px]
          "
        >
          {item.title}
        </h3>

        {/* DECORATIVE ARROW */}
        <MoveUpRight
          size={21}
          strokeWidth={1.4}
          aria-hidden="true"
          className="
            text-[#B69B8E]
            transition-all duration-500
            group-hover:-translate-y-1
            group-hover:translate-x-1
            group-hover:text-[#75437F]
          "
        />
      </div>
    </motion.div>
  );
}

// ==========================================
// MAIN SECTION
// ==========================================

export default function QualityCommitment() {
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
      id="quality-commitment"
      aria-labelledby="quality-heading"
      className="
        relative isolate overflow-hidden
        bg-[#FBF6F0]
        py-16 sm:py-20 lg:py-24
      "
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          className="
            absolute -left-32 top-0
            h-[400px] w-[400px]
            rounded-full bg-[#E8C6C4]/25
            blur-[120px]
          "
          animate={
            reducedMotion
              ? undefined
              : { x: [0, 50, 0], y: [0, 30, 0] }
          }
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            absolute -right-32 bottom-0
            h-[420px] w-[420px]
            rounded-full bg-[#C6A1C9]/15
            blur-[120px]
          "
          animate={
            reducedMotion
              ? undefined
              : { x: [0, -50, 0], y: [0, -35, 0] }
          }
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* LARGE DECORATIVE CIRCLE */}
        <div
          className="
            absolute -right-28 -top-36
            h-[440px] w-[440px]
            rounded-full border border-[#D8C6BD]/40
          "
        />

        <div
          className="
            absolute -right-16 -top-24
            h-[320px] w-[320px]
            rounded-full border border-[#D8C6BD]/30
          "
        />
      </div>

      <div
        className="
          mx-auto grid max-w-[1350px]
          items-center gap-12
          px-5 sm:px-8
          lg:grid-cols-[1fr_1.05fr]
          lg:gap-20 lg:px-10
        "
      >
        {/* LEFT SIDE */}
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
        >
          {/* EYEBROW */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#C99A5C]" />

            <span
              className="
                text-[10px] font-bold
                uppercase tracking-[2px]
                text-[#A77C50]
                sm:text-[11px]
              "
            >
              {t.eyebrow}
            </span>
          </div>

          {/* HEADING */}
          <h2
            id="quality-heading"
            className="
              max-w-[610px]
              font-['Poppins']
              text-[27px] font-semibold
              leading-[1.3] tracking-[-0.7px]
              text-[#4C2C2C]
              sm:text-[31px] lg:text-[35px]
            "
          >
            {t.heading1}

            <span className="block text-[#8B3540]">
              {t.heading2}
            </span>
          </h2>

          {/* CONTENT */}
          <p
            className="
              mt-6 max-w-[560px]
              text-[14px] leading-[1.95]
              text-[#79675C]
              sm:text-[15px]
            "
          >
            {t.paragraph1}
          </p>

          <p
            className="
              mt-4 max-w-[560px]
              text-[14px] leading-[1.95]
              text-[#79675C]
              sm:text-[15px]
            "
          >
            {t.paragraph2}
          </p>

          {/* DOT EXPAND CTA */}
          <div className="mt-8">
            <DotExpandButton>{t.cta}</DotExpandButton>
          </div>

          {/* DECORATIVE SIGNATURE */}
          <div className="mt-11 flex items-center gap-3">
            <Sparkles
              size={18}
              strokeWidth={1.4}
              className="text-[#C5A071]"
            />

            <span className="h-px w-16 bg-[#D8B993]" />

            <span className="h-1.5 w-1.5 rounded-full bg-[#C5A071]" />
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="relative">
          {/* TOP LABEL */}
          <motion.div
            initial={
              reducedMotion
                ? false
                : { opacity: 0, y: 20 }
            }
            animate={
              visible
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{
              duration: reducedMotion ? 0 : 0.7,
              delay: 0.15,
            }}
            className="mb-4 flex items-center gap-4"
          >
            <span
              className="
                shrink-0 text-[10px] font-bold
                uppercase tracking-[2px]
                text-[#A78562]
              "
            >
              {t.focusLabel}
            </span>

            <span className="h-px flex-1 bg-[#DCC9BB]" />
          </motion.div>

          {/* INTERACTIVE QUALITY STRIPS */}
          <div>
            {t.areas.map((item, index) => (
              <QualityStrip
                key={index}
                item={item}
                index={index}
                visible={visible}
                reducedMotion={reducedMotion}
              />
            ))}
          </div>

          {/* BOTTOM PROGRESS DECORATION */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: visible ? 1 : 0 }}
            transition={{
              duration: reducedMotion ? 0 : 1.2,
              delay: 0.7,
              ease,
            }}
            className="
              mt-8 h-[3px] w-full
              origin-left rounded-full
              bg-gradient-to-r
              from-[#8B3540]
              via-[#75437F]
              to-[#D5AE82]
            "
          />
        </div>
      </div>
    </section>
  );
}
