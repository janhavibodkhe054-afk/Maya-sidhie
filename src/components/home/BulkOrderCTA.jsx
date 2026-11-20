
import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowUpRight,
  Store,
  Package,
  ClipboardList,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { LanguageContext } from "../../context/LanguageContext";

// ==========================================
// CONTENT
// ==========================================

const content = {
  en: {
    eyebrow: "BUSINESS ENQUIRIES",
    heading1: "Bring the Taste",
    heading2: "of Solapur",
    heading3: "to Your Customers.",

    description1:
      "Discover the traditional flavours of Maharashtra with Maya's LALA Food Products. Interested in introducing our food products at your retail outlet or exploring business opportunities?",

    description2:
      "From Solapuri Shenga Chutney to a variety of peanut-based specialities, explore our range of authentic food products inspired by traditional tastes.",

    description3:
      "Connect with our team to discuss product availability, packaging options, quantities and your order-related requirements.",

    primaryCTA: "Enquire for Bulk Orders",
    secondaryCTA: "Contact Us",

    showcaseTitle: "Authentic Solapuri Flavours",
    showcaseSub: "MAYA'S LALA FOOD PRODUCTS",

    highlightLabel: "LET'S DISCUSS YOUR REQUIREMENTS",

    highlights: [
      {
        title: "Retail Product Enquiries",
        desc: "Explore our food products for your retail requirements.",
        icon: Store,
      },
      {
        title: "Packaging Discussions",
        desc: "Ask our team about available packaging options.",
        icon: Package,
      },
      {
        title: "Order Requirements",
        desc: "Share your product preferences and quantity needs.",
        icon: ClipboardList,
      },
    ],
  },

  mr: {
    eyebrow: "व्यावसायिक चौकशी",
    heading1: "सोलापूरची अस्सल चव",
    heading2: "पोहोचवा",
    heading3: "तुमच्या ग्राहकांपर्यंत.",

    description1:
      "मायाज लाला फूड प्रॉडक्ट्ससोबत महाराष्ट्राच्या पारंपरिक चवींची ओळख करून घ्या. तुमच्या रिटेल दुकानात आमची उत्पादने उपलब्ध करून देण्यास किंवा व्यावसायिक संधी जाणून घेण्यास इच्छुक आहात?",

    description2:
      "सोलापुरी शेंगा चटणीपासून शेंगदाण्यांपासून बनवलेल्या विविध पदार्थांपर्यंत आमच्या पारंपरिक चवींच्या उत्पादनांची माहिती घ्या.",

    description3:
      "उत्पादनांची उपलब्धता, पॅकेजिंगचे पर्याय, आवश्यक प्रमाण आणि ऑर्डरसंबंधी गरजांबद्दल आमच्या टीमशी संपर्क साधा.",

    primaryCTA: "मोठ्या ऑर्डरसाठी चौकशी करा",
    secondaryCTA: "संपर्क साधा",

    showcaseTitle: "अस्सल सोलापुरी स्वाद",
    showcaseSub: "मायाज लाला फूड प्रॉडक्ट्स",

    highlightLabel: "तुमच्या गरजांबद्दल चर्चा करूया",

    highlights: [
      {
        title: "रिटेल उत्पादन चौकशी",
        desc: "रिटेल व्यवसायासाठी आमच्या उत्पादनांची माहिती घ्या.",
        icon: Store,
      },
      {
        title: "पॅकेजिंगविषयी चर्चा",
        desc: "उपलब्ध पॅकेजिंग पर्यायांची चौकशी करा.",
        icon: Package,
      },
      {
        title: "ऑर्डरच्या आवश्यकता",
        desc: "आवश्यक उत्पादने आणि प्रमाणाची माहिती द्या.",
        icon: ClipboardList,
      },
    ],
  },
};

const ease = [0.22, 1, 0.36, 1];

// ==========================================
// PREMIUM DOT EXPAND BUTTON
// ==========================================

function DotExpandButton({
  children,
  secondary = false,
}) {
  return (
    <Link
      to="/contact"
      className={`
        group relative inline-flex
        min-h-[55px] items-center
        justify-center gap-4
        overflow-hidden rounded-full
        px-7 py-3
        text-[13px] font-semibold
        transition-all duration-500
        hover:-translate-y-1
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-[#F1C98E]
        ${
          secondary
            ? "border border-[#F1C98E]/50 bg-[#54182B]/35 text-white hover:border-[#F1C98E]"
            : "bg-[#FFF0DC] text-[#68233C] shadow-[0_12px_32px_rgba(0,0,0,0.15)]"
        }
      `}
    >
      {/* VIOLET DOT EXPAND */}
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
          group-hover:scale-[100]
        "
      />

      <span
        className="
          relative z-10
          transition-colors duration-500
          group-hover:text-white
        "
      >
        {children}
      </span>

      <span
        className={`
          relative z-10 flex h-8 w-8
          items-center justify-center
          rounded-full
          transition-all duration-500
          group-hover:translate-x-1
          group-hover:rotate-45
          group-hover:bg-white/20
          ${
            secondary
              ? "bg-white/15 text-white"
              : "bg-[#843642]/10 text-[#68233C] group-hover:text-white"
          }
        `}
      >
        <ArrowUpRight size={17} strokeWidth={1.8} />
      </span>
    </Link>
  );
}

// ==========================================
// FLOATING PRODUCT IMAGE
// ==========================================

function FloatingProduct({
  src,
  className,
  delay = 0,
  reducedMotion,
}) {
  return (
    <motion.img
      src={src}
      alt=""
      aria-hidden="true"
      draggable={false}
      loading="lazy"
      className={`
        pointer-events-none absolute
        select-none object-contain
        drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)]
        ${className}
      `}
      animate={
        reducedMotion
          ? undefined
          : {
              y: [0, -12, 0],
              rotate: [-2, 2, -2],
            }
      }
      transition={{
        duration: 5.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

// ==========================================
// BUSINESS HIGHLIGHT
// ==========================================

function BusinessHighlight({
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
          : { opacity: 0, y: 30 }
      }
      animate={
        visible
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 30 }
      }
      transition={{
        duration: reducedMotion ? 0 : 0.7,
        delay: reducedMotion ? 0 : 0.45 + index * 0.13,
        ease,
      }}
      whileHover={
        reducedMotion ? undefined : { y: -6 }
      }
      className="
        group relative overflow-hidden
        rounded-[22px]
        border border-[#F1C98E]/25
        bg-[#54182B]/55
        p-6
        shadow-[0_15px_40px_rgba(0,0,0,0.1)]
        backdrop-blur-sm
        transition-colors duration-500
        hover:border-[#F1C98E]/60
        hover:bg-[#68233C]/75
      "
    >
      {/* HOVER GLOW */}
      <div
        className="
          pointer-events-none absolute
          -right-16 -top-16
          h-36 w-36 rounded-full
          bg-[#F1C98E]/10
          blur-[45px]
          opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      {/* ICON */}
      <div
        className="
          relative mb-5 flex
          h-12 w-12 items-center
          justify-center rounded-[15px]
          bg-[#F1C98E]/15
          text-[#F1C98E]
          transition-all duration-500
          group-hover:rotate-[-7deg]
          group-hover:bg-[#75437F]
          group-hover:text-white
        "
      >
        <Icon size={23} strokeWidth={1.5} />
      </div>

      {/* TITLE */}
      <h3
        className="
          relative text-[16px]
          font-semibold text-[#FFF8EE]
        "
      >
        {item.title}
      </h3>

      {/* DESCRIPTION */}
      <p
        className="
          relative mt-2
          text-[13px] leading-[1.85]
          text-[#F4DCE2]/85
        "
      >
        {item.desc}
      </p>

      {/* GOLD LINE */}
      <div
        className="
          relative mt-5 h-[2px] w-10
          rounded-full bg-[#F1C98E]
          transition-all duration-500
          group-hover:w-20
        "
      />
    </motion.div>
  );
}

// ==========================================
// MAIN SECTION
// ==========================================

export default function BulkOrderCTA() {
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
      id="bulk-order-cta"
      aria-labelledby="bulk-order-heading"
      className="
        relative isolate overflow-hidden
        bg-[#82243E]
        py-16 sm:py-20 lg:py-20
      "
    >
      {/* =====================================
          ORIGINAL MAROON PATTERN BACKGROUND
      ===================================== */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-30
          bg-cover bg-center bg-no-repeat
        "
        style={{
          backgroundImage: "url('https://img.magnific.com/free-vector/vintage-style-floral-pattern-background-with-mandala-decoration_1017-49477.jpg?semt=ais_hybrid&w=740&q=80')",
        }}
      />

      {/* LIGHT BURGUNDY OVERLAY */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-20
          bg-gradient-to-r
          from-[#60182B]/30
          via-[#781F37]/15
          to-[#60182B]/25
        "
      />

      {/* SOFT AMBIENT LIGHT */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          inset-0 -z-10 overflow-hidden
        "
      >
        <motion.div
          className="
            absolute -left-28 top-0
            h-[380px] w-[380px]
            rounded-full
            bg-[#F1C98E]/10
            blur-[115px]
          "
          animate={
            reducedMotion
              ? undefined
              : {
                  x: [0, 45, 0],
                  y: [0, 25, 0],
                }
          }
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            absolute -right-28 bottom-0
            h-[420px] w-[420px]
            rounded-full
            bg-[#75437F]/20
            blur-[125px]
          "
          animate={
            reducedMotion
              ? undefined
              : {
                  x: [0, -40, 0],
                  y: [0, -25, 0],
                }
          }
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* =====================================
          MAIN CONTAINER
      ===================================== */}
      <div
        className="
          relative mx-auto
          max-w-[1350px]
          px-5 sm:px-8 lg:px-10
        "
      >
        <div
          className="
            grid items-center gap-10
            lg:grid-cols-[1.12fr_0.88fr]
            lg:gap-12
          "
        >
          {/* LEFT CONTENT */}
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
              duration: reducedMotion ? 0 : 0.9,
              ease,
            }}
            className="relative z-10"
          >
            {/* EYEBROW */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#F1C98E]" />

              <span
                className="
                  text-[10px] font-bold
                  uppercase tracking-[2.5px]
                  text-[#F1C98E]
                  sm:text-[11px]
                "
              >
                {t.eyebrow}
              </span>
            </div>

            {/* HEADING */}
            <h2
              id="bulk-order-heading"
              className="
                max-w-[720px]
                font-['Poppins']
                text-[27px] font-semibold
                leading-[1.3] tracking-[-0.7px]
                text-[#FFF8EE]
                sm:text-[31px] lg:text-[35px]
              "
            >
              <span className="block">{t.heading1}</span>

              <span className="block text-[#F1C98E]">
                {t.heading2}
              </span>

              <span className="block">{t.heading3}</span>
            </h2>

            {/* DESCRIPTION 1 */}
            <p
              className="
                mt-6 max-w-[620px]
                text-[14px] leading-[1.95]
                text-[#FFF0EA]/95
                sm:text-[15px]
              "
            >
              {t.description1}
            </p>

            {/* DESCRIPTION 2 */}
            <p
              className="
                mt-4 max-w-[620px]
                text-[14px] leading-[1.95]
                text-[#FFF0EA]/90
                sm:text-[15px]
              "
            >
              {t.description2}
            </p>

            {/* DESCRIPTION 3 */}
            <p
              className="
                mt-4 max-w-[620px]
                text-[14px] leading-[1.95]
                text-[#FFF0EA]/90
                sm:text-[15px]
              "
            >
              {t.description3}
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-3">
              <DotExpandButton>
                {t.primaryCTA}
              </DotExpandButton>

              <DotExpandButton secondary>
                {t.secondaryCTA}
              </DotExpandButton>
            </div>

            {/* SMALL DECORATIVE SIGNATURE */}
            <div className="mt-10 flex items-center gap-3">
              <Sparkles
                size={17}
                strokeWidth={1.4}
                className="text-[#F1C98E]"
              />

              <span className="h-px w-20 bg-[#F1C98E]/55" />

              <span className="h-1.5 w-1.5 rounded-full bg-[#F1C98E]" />
            </div>
          </motion.div>

          {/* =====================================
              RIGHT PRODUCT SHOWCASE
          ===================================== */}
          <motion.div
            initial={
              reducedMotion
                ? false
                : {
                    opacity: 0,
                    x: 45,
                    scale: 0.94,
                  }
            }
            animate={
              visible
                ? {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }
                : {
                    opacity: 0,
                    x: 45,
                    scale: 0.94,
                  }
            }
            transition={{
              duration: reducedMotion ? 0 : 1,
              delay: reducedMotion ? 0 : 0.2,
              ease,
            }}
            className="
              relative mx-auto
              h-[350px] w-full
              max-w-[520px]
              sm:h-[440px]
              lg:h-[600px]
            "
          >
            {/* SUBTLE GLASS PANEL */}
            <div
              className="
                absolute inset-x-[5%]
                top-[5%] bottom-[6%]
                overflow-hidden
                rounded-[32px]
                border border-[#F1C98E]/25
                bg-[#54182B]/35
                shadow-[0_25px_70px_rgba(0,0,0,0.12)]
                backdrop-blur-sm
              "
            >
              {/* DECORATIVE GOLD CIRCLE */}
              <div
                className="
                  absolute left-1/2 top-[42%]
                  h-[70%] w-[75%]
                  -translate-x-1/2 -translate-y-1/2
                  rounded-full
                  border border-[#F1C98E]/25
                "
              />

              {/* BOTTOM LABEL */}
              <div
                className="
                  absolute inset-x-0 bottom-0
                  bg-gradient-to-t
                  from-[#4A192B]/90
                  to-transparent
                  px-5 pb-7 pt-20
                  text-center
                "
              >
                <p
                  className="
                    text-[13px] font-semibold
                    text-[#F1C98E]
                  "
                >
                  {t.showcaseTitle}
                </p>

                <p
                  className="
                    mt-2 text-[10px]
                    tracking-[2px]
                    text-[#FFF8EE]/70
                  "
                >
                  {t.showcaseSub}
                </p>
              </div>
            </div>

            {/* ROTATING GOLD ORBIT */}
            <motion.div
              aria-hidden="true"
              animate={
                reducedMotion
                  ? undefined
                  : { rotate: 360 }
              }
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute left-1/2 top-[43%]
                h-[270px] w-[270px]
                -translate-x-1/2 -translate-y-1/2
                rounded-full border border-dashed
                border-[#F1C98E]/35
                sm:h-[350px] sm:w-[350px]
              "
            />

            {/* PRODUCT IMAGES */}
            <FloatingProduct
              src="/p1.png"
              className="
                left-[22%] top-[4%]
                z-20 h-[74%] w-[55%]
              "
              reducedMotion={reducedMotion}
            />

            <FloatingProduct
              src="/p4.png"
              className="
                left-[-2%] top-[25%]
                z-10 h-[51%] w-[40%]
              "
              delay={0.7}
              reducedMotion={reducedMotion}
            />

            <FloatingProduct
              src="/p7.png"
              className="
                right-[-2%] top-[26%]
                z-10 h-[51%] w-[40%]
              "
              delay={1.3}
              reducedMotion={reducedMotion}
            />

            <Sparkles
              aria-hidden="true"
              size={27}
              strokeWidth={1.3}
              className="
                absolute right-[5%] top-[7%]
                text-[#F1C98E]
              "
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
