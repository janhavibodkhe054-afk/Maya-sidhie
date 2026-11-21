import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

import {
  ArrowUpRight,
  ArrowRight,
  Store,
  Package,
  ClipboardList,
  Sparkles,
  MapPin,
  MessageCircle,
} from "lucide-react";

import { LanguageContext } from "../../context/LanguageContext";

const ease = [0.22, 1, 0.36, 1];

// ==========================================
// BILINGUAL CONTENT
// ==========================================

const content = {
  en: {
    eyebrow: "BUSINESS ENQUIRIES",

    heading1: "Bring the Taste of",
    heading2: "Solapur",
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

    location: "Solapur, Maharashtra",

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

    products: [
      "Solapuri Shenga Chutney",
      "Masala Peanuts",
      "Peanut Ladoo",
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

    location: "सोलापूर, महाराष्ट्र",

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

    products: [
      "सोलापुरी शेंगा चटणी",
      "मसाला शेंगदाणे",
      "शेंगदाणा लाडू",
    ],
  },
};

// ==========================================
// PREMIUM CTA BUTTON
// ==========================================

function PremiumButton({
  children,
  to,
  secondary = false,
}) {
  return (
    <Link
      to={to}
      className={`
        group relative isolate inline-flex
        min-h-[52px] items-center justify-between
        gap-3 overflow-hidden rounded-[7px]
        py-2 pl-4 pr-2
        text-[13px] font-semibold
        transition-all duration-300
        motion-safe:hover:-translate-y-1
        motion-safe:active:scale-[0.97]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#F1C98E]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[#560D18]
        ${
          secondary
            ? "border border-[#D4A875] bg-transparent text-[#FFF4E6] hover:text-[#560D18]"
            : "border border-[#EAC28B] bg-gradient-to-r from-[#FFE6BF] to-[#E6B87C] text-[#560D18] shadow-[0_8px_25px_rgba(0,0,0,0.18)]"
        }
      `}
    >
      {/* ANIMATED BACKGROUND */}

      <span
        aria-hidden="true"
        className={`
          pointer-events-none absolute inset-0
          -z-10 -translate-x-full
          transition-transform duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:translate-x-0
          ${
            secondary
              ? "bg-[#F1C98E]"
              : "bg-[#FFF4DD]"
          }
        `}
      />

      {/* BUTTON SHINE */}

      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute
          inset-y-0 -left-1/2 w-1/3
          -skew-x-12 bg-white/30
          transition-all duration-700
          motion-safe:group-hover:left-[150%]
        "
      />

      {secondary ? (
        <MessageCircle size={18} strokeWidth={1.7} />
      ) : (
        <Package size={19} strokeWidth={1.7} />
      )}

      <span className="relative flex-1">
        {children}
      </span>

      {/* DOUBLE ARROW ANIMATION */}

      <span
        className={`
          relative flex h-9 w-9 shrink-0
          items-center justify-center
          overflow-hidden rounded-[5px]
          transition-colors duration-300
          ${
            secondary
              ? "bg-[#F1C98E]/15 text-[#F1C98E] group-hover:bg-[#560D18] group-hover:text-white"
              : "bg-[#560D18] text-[#F1C98E]"
          }
        `}
      >
        <ArrowUpRight
          size={20}
          strokeWidth={1.8}
          className="
            absolute transition-transform
            duration-300
            motion-safe:group-hover:translate-x-7
            motion-safe:group-hover:-translate-y-7
          "
        />

        <ArrowUpRight
          size={20}
          strokeWidth={1.8}
          className="
            absolute -translate-x-7 translate-y-7
            transition-transform duration-300
            motion-safe:group-hover:translate-x-0
            motion-safe:group-hover:translate-y-0
          "
        />
      </span>
    </Link>
  );
}

// ==========================================
// DECORATIVE TRADITIONAL PATTERN
// ==========================================

function TraditionalPattern() {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      className="h-full w-full"
    >
      {[60, 95, 135, 175, 195].map((radius) => (
        <circle
          key={radius}
          cx="200"
          cy="200"
          r={radius}
          stroke="currentColor"
          strokeWidth="0.8"
        />
      ))}

      {Array.from({ length: 16 }, (_, i) => (
        <g
          key={i}
          transform={`rotate(${i * 22.5} 200 200)`}
        >
          <path
            d="
              M200 25
              Q240 80 200 135
              Q160 80 200 25Z
            "
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="
              M200 105
              Q225 145 200 173
              Q175 145 200 105Z
            "
            stroke="currentColor"
            strokeWidth="0.8"
          />

          <circle
            cx="200"
            cy="15"
            r="2.5"
            fill="currentColor"
          />

          <path
            d="M200 30V115"
            stroke="currentColor"
            strokeWidth="0.6"
          />
        </g>
      ))}

      <circle
        cx="200"
        cy="200"
        r="28"
        stroke="currentColor"
      />
    </svg>
  );
}

// ==========================================
// PRODUCT SHOWCASE
// ==========================================

function ProductShowcase({ t, reducedMotion }) {
  const stageRef = useRef(null);

  const visible = useInView(stageRef, {
    amount: 0.2,
  });

  const animate = visible && !reducedMotion;

  const products = [
    {
      src: "/p4.png",
      alt: t.products[1],
      className:
        "left-[1%] bottom-[16%] z-10 h-[58%] w-[35%]",
      x: -25,
      rotate: -6,
      delay: 0.15,
    },
    {
      src: "/p7.png",
      alt: t.products[2],
      className:
        "right-[1%] bottom-[16%] z-10 h-[58%] w-[35%]",
      x: 25,
      rotate: 6,
      delay: 0.3,
    },
    {
      src: "/p1.png",
      alt: t.products[0],
      className:
        "left-[27%] bottom-[15%] z-20 h-[79%] w-[46%]",
      x: 0,
      rotate: 0,
      delay: 0,
    },
  ];

  return (
    <div
      ref={stageRef}
      className="
        relative isolate mx-auto w-full
        max-w-[590px]
        h-[300px] sm:h-[370px]
        lg:h-[410px] xl:h-[440px]
      "
    >
      {/* GOLDEN BACKDROP ARCH */}

      <div
        className="
          absolute bottom-[14%] left-1/2
          h-[79%] w-[66%]
          -translate-x-1/2
        "
      >
        <motion.div
          initial={
            reducedMotion ? false : { scale: 0.95 }
          }
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="
            absolute inset-0 overflow-hidden
            rounded-t-full rounded-b-[10px]
            border border-[#F1C98E]/70
            bg-[linear-gradient(160deg,#D5A570_0%,#F4D8B0_45%,#A87542_100%)]
            shadow-[0_15px_50px_rgba(0,0,0,0.18)]
          "
        >
          <div className="
            absolute inset-[7px]
            rounded-t-full rounded-b-[6px]
            border border-[#8E5D39]/40
          " />

          <div className="
            absolute inset-x-0 bottom-0
            h-2/3 bg-gradient-to-t
            from-[#773E35]/25 to-transparent
          " />

          <div className="
            absolute left-1/2 top-1/2
            h-[115%] w-[115%]
            -translate-x-1/2 -translate-y-1/2
            text-[#80552D]/15
          ">
            <TraditionalPattern />
          </div>
        </motion.div>

        {/* OUTER GOLD FRAME */}

        <div className="
          absolute -inset-[10px]
          rounded-t-full rounded-b-[14px]
          border border-[#F1C98E]/25
        " />

        <div className="
          absolute -inset-[20px]
          rounded-t-full rounded-b-[18px]
          border border-[#F1C98E]/10
        " />
      </div>

      {/* BRAND WATERMARK */}

      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-1/2 top-[15%]
          -translate-x-1/2
          select-none font-serif
          text-[90px] leading-none
          font-bold tracking-[-5px]
          text-[#703C2D]/15
          sm:text-[125px] lg:text-[145px]
        "
      >
        LALA
      </span>

      {/* GOLDEN SPARKLES */}

      {[
        "left-[12%] top-[19%]",
        "right-[12%] top-[24%]",
        "left-[8%] top-[50%]",
        "right-[9%] top-[56%]",
      ].map((position, index) => (
        <motion.div
          key={index}
          aria-hidden="true"
          animate={
            animate
              ? {
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.15, 0.8],
                }
              : { opacity: 0.6, scale: 1 }
          }
          transition={{
            duration: animate ? 3 : 0,
            delay: animate ? index * 0.5 : 0,
            repeat: animate ? Infinity : 0,
          }}
          className={`
            pointer-events-none absolute
            text-[#F1C98E] ${position}
          `}
        >
          <Sparkles
            size={index < 2 ? 22 : 14}
            strokeWidth={1.4}
          />
        </motion.div>
      ))}

      {/* PLATFORM SHADOW */}

      <div className="
        absolute bottom-[11%] left-[8%]
        h-[12%] w-[84%]
        rounded-[50%] bg-black/40 blur-xl
      " />

      {/* PRODUCT DISPLAY PLATFORM */}

      <div className="
        absolute bottom-[11%] left-1/2
        h-[10%] w-[88%]
        -translate-x-1/2
        rounded-[50%]
        bg-gradient-to-b
        from-[#8E4C3D] to-[#391019]
        shadow-[0_12px_20px_rgba(0,0,0,0.3)]
      " />

      <div className="
        absolute bottom-[15%] left-1/2
        h-[9%] w-[88%]
        -translate-x-1/2
        rounded-[50%]
        border border-[#E8BF86]
        bg-gradient-to-r
        from-[#9A6C42]
        via-[#F4D7AB]
        to-[#9A6C42]
      " />

      {/* PRODUCT IMAGES */}

      {products.map((product) => (
        <motion.div
          key={product.src}
          initial={
            reducedMotion
              ? false
              : {
                  x: product.x,
                  y: 20,
                  scale: 0.94,
                }
          }
          whileInView={{
            x: 0,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: reducedMotion ? 0 : 0.9,
            delay: reducedMotion ? 0 : product.delay,
            ease,
          }}
          className={`absolute ${product.className}`}
        >
          <motion.img
            src={product.src}
            alt={product.alt}
            loading="lazy"
            decoding="async"
            draggable={false}
            initial={false}
            style={{ rotate: product.rotate }}
            whileHover={
              reducedMotion
                ? undefined
                : {
                    y: -9,
                    scale: 1.07,
                    rotate: 0,
                  }
            }
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 18,
            }}
            className="
              block h-full w-full
              select-none object-contain
              drop-shadow-[0_18px_15px_rgba(25,4,10,0.35)]
            "
          />
        </motion.div>
      ))}

      {/* SHOWCASE CAPTION */}

      <div className="
        absolute inset-x-0 bottom-0
        z-30 text-center
      ">
        <div className="
          mb-1.5 flex items-center
          justify-center gap-2
        ">
          <span className="h-px w-7 bg-[#F1C98E]/60" />

          <span className="
            h-1.5 w-1.5 rotate-45 bg-[#F1C98E]
          " />

          <p className="
            text-[12px] font-semibold
            text-[#FFE0B4] sm:text-[14px]
          ">
            {t.showcaseTitle}
          </p>

          <span className="
            h-1.5 w-1.5 rotate-45 bg-[#F1C98E]
          " />

          <span className="h-px w-7 bg-[#F1C98E]/60" />
        </div>

        <p className="
          text-[9px] font-medium
          tracking-[2px] text-[#F4D9C8]
          sm:text-[10px]
        ">
          {t.showcaseSub}
        </p>
      </div>
    </div>
  );
}

// ==========================================
// BUSINESS HIGHLIGHT ITEM
// ==========================================

function BusinessHighlight({
  item,
  index,
  reducedMotion,
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={reducedMotion ? false : { y: 16 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reducedMotion ? 0 : 0.65,
        delay: reducedMotion ? 0 : index * 0.1,
        ease,
      }}
      className="
        group relative flex items-start
        gap-3 px-4 py-4
        transition-colors duration-300
        hover:bg-[#F0DDC6]
        sm:gap-4 sm:px-5
      "
    >
      {/* ANIMATED ICON */}

      <div className="
        relative flex h-11 w-11 shrink-0
        items-center justify-center
        overflow-hidden rounded-[8px]
        border border-[#D8B58F]
        bg-[#EBD3B5]
        text-[#752531]
        transition-colors duration-300
        group-hover:bg-[#752531]
        group-hover:text-[#F1C98E]
        sm:h-12 sm:w-12
      ">
        <Icon
          size={23}
          strokeWidth={1.6}
          className="
            transition-transform duration-300
            motion-safe:group-hover:-rotate-6
            motion-safe:group-hover:scale-110
          "
        />
      </div>

      {/* TEXT */}

      <div className="min-w-0 flex-1">
        <h3 className="
          text-[13px] font-bold
          leading-[1.5] text-[#651D2A]
          sm:text-[14px]
        ">
          {item.title}
        </h3>

        <p className="
          mt-1 text-[12px] leading-[1.65]
          text-[#5E483B]
        ">
          {item.desc}
        </p>
      </div>

      {/* NUMBERING */}

      <span className="
        hidden font-serif text-[23px]
        font-bold leading-none
        text-[#B48A60]/45 xl:block
      ">
        0{index + 1}
      </span>

      {/* BOTTOM HOVER LINE */}

      <span className="
        pointer-events-none absolute
        bottom-0 left-0 h-[2px] w-full
        origin-left scale-x-0
        bg-[#843642]
        transition-transform duration-500
        group-hover:scale-x-100
      " />
    </motion.div>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function BulkOrderCTA() {
  const { language } = useContext(LanguageContext);

  const lang = language === "mr" ? "mr" : "en";
  const t = content[lang];

  const reducedMotion = useReducedMotion();

  const reveal = (delay = 0, y = 18) => ({
    initial: reducedMotion ? false : { y },
    whileInView: { y: 0 },
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
      id="bulk-order-cta"
      aria-labelledby="bulk-order-heading"
      className="
        relative isolate overflow-hidden
        border-y border-[#C99B68]
        bg-[#560D18]
        py-9 sm:py-11 lg:py-14
      "
    >
      {/* ======================================
          PREMIUM BACKGROUND
      ====================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          inset-0 -z-30
          bg-[linear-gradient(115deg,#390B15_0%,#641A29_42%,#843642_100%)]
        "
      />

      {/* SOFT GOLDEN LIGHT */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          -z-20
          bg-[radial-gradient(ellipse_at_85%_35%,#E1A46A25_0%,transparent_48%)]
        "
      />

      {/* TRADITIONAL BACKGROUND ART */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-[240px] -top-[220px]
          -z-10 h-[560px] w-[560px]
          text-[#F1C98E]/10
        "
      >
        <TraditionalPattern />
      </div>

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-[280px] -right-[160px]
          -z-10 h-[650px] w-[650px]
          text-[#F1C98E]/10
        "
      >
        <TraditionalPattern />
      </div>

      {/* GOLDEN TOP BORDER ANIMATION */}

      <motion.div
        aria-hidden="true"
        initial={
          reducedMotion ? false : { scaleX: 0 }
        }
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: reducedMotion ? 0 : 1.3,
          ease,
        }}
        className="
          absolute inset-x-0 top-0
          h-[2px] origin-center
          bg-gradient-to-r from-transparent
          via-[#F1C98E] to-transparent
        "
      />

      {/* ======================================
          MAIN CONTAINER
      ====================================== */}

      <div className="
        relative mx-auto max-w-[1380px]
        px-4 sm:px-7 lg:px-10
      ">

        <div className="
          grid items-center gap-6
          lg:grid-cols-[1.12fr_0.88fr]
          lg:gap-10 xl:gap-14
        ">

          {/* ====================================
              LEFT BUSINESS CONTENT
          ==================================== */}

          <div className="relative min-w-0">

            {/* SECTION LABEL */}

            <motion.div
              {...reveal()}
              className="
                mb-4 inline-flex items-center
                gap-2.5 border-b
                border-[#F1C98E]/35 pb-2
              "
            >
              <span className="
                h-1.5 w-1.5 rotate-45
                bg-[#F1C98E]
              " />

              <span className="
                text-[10px] font-bold
                tracking-[2px] text-[#F1C98E]
                sm:text-[11px]
              ">
                {t.eyebrow}
              </span>
            </motion.div>

            {/* MAIN HEADING */}

            <motion.h2
              {...reveal(0.05)}
              id="bulk-order-heading"
              className="
                font-['Poppins']
                text-[29px] font-semibold
                leading-[1.3]
                tracking-[-0.8px]
                text-[#FFF8EF]
                sm:text-[35px]
                lg:text-[39px]
                xl:text-[44px]
              "
            >
              {t.heading1}{" "}

              <span className="text-[#F1C98E]">
                {t.heading2}
              </span>

              <span className="block">
                {t.heading3}
              </span>
            </motion.h2>

            {/* DECORATIVE GOLD LINE */}

            <div className="
              my-4 flex items-center gap-2
            ">
              <motion.span
                initial={
                  reducedMotion
                    ? false
                    : { scaleX: 0 }
                }
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: reducedMotion ? 0 : 0.9,
                  ease,
                }}
                className="
                  h-[2px] w-[70px] origin-left
                  bg-gradient-to-r
                  from-[#F1C98E] to-[#B98752]
                "
              />

              <span className="
                h-1.5 w-1.5 rotate-45
                bg-[#F1C98E]
              " />
            </div>

            {/* BUSINESS DESCRIPTION */}

            <motion.div {...reveal(0.1)}>
              <p className="
                max-w-[650px]
                text-[14px] leading-[1.85]
                text-[#FFF4E7]
                sm:text-[15px]
              ">
                {t.description1}
              </p>

              <p className="
                mt-3 max-w-[650px]
                text-[13px] leading-[1.85]
                text-[#F4E0D6]
                sm:text-[14px]
              ">
                {t.description2}
              </p>

              <p className="
                mt-3 max-w-[650px]
                text-[13px] leading-[1.85]
                text-[#F4E0D6]
                sm:text-[14px]
              ">
                {t.description3}
              </p>
            </motion.div>

            {/* CTA BUTTONS */}

            <motion.div
              {...reveal(0.15)}
              className="
                mt-6 grid gap-3
                sm:flex sm:flex-wrap
              "
            >
              <PremiumButton to="/bulk-enquiry">
                {t.primaryCTA}
              </PremiumButton>

              <PremiumButton
                to="/contact"
                secondary
              >
                {t.secondaryCTA}
              </PremiumButton>
            </motion.div>

            {/* SOLAPUR LOCATION SIGNATURE */}

            <motion.div
              {...reveal(0.2)}
              className="
                mt-5 flex items-center gap-2
                text-[#F4D3AD]
              "
            >
              <MapPin
                size={15}
                strokeWidth={1.6}
              />

              <span className="
                text-[11px] font-medium
                tracking-wide
              ">
                {t.location}
              </span>

              <span className="
                ml-2 h-px w-12
                bg-[#F1C98E]/35
              " />
            </motion.div>
          </div>

          {/* ====================================
              RIGHT PRODUCT DISPLAY
          ==================================== */}

          <ProductShowcase
            t={t}
            reducedMotion={reducedMotion}
          />
        </div>

        {/* ======================================
            BUSINESS REQUIREMENTS STRIP
        ====================================== */}

        <motion.div
          {...reveal(0.1)}
          className="
            relative mt-8 overflow-hidden
            rounded-[10px]
            border border-[#D8AC79]
            bg-[#FFF0DC]
            shadow-[0_15px_35px_rgba(25,4,10,0.14)]
            sm:mt-9 lg:mt-10
          "
        >
          <div className="
            flex flex-wrap items-center
            justify-between gap-2
            border-b border-[#D8B895]
            bg-gradient-to-r
            from-[#F0D5B2] to-[#F9E7D0]
            px-4 py-3 sm:px-5
          ">
            <div className="
              flex items-center gap-2
            ">
              <Sparkles
                size={16}
                strokeWidth={1.7}
                className="text-[#843642]"
              />

              <span className="
                text-[10px] font-bold
                tracking-[1.3px]
                text-[#752531]
                sm:text-[11px]
              ">
                {t.highlightLabel}
              </span>
            </div>

            <Link
              to="/bulk-enquiry"
              aria-label={t.primaryCTA}
              className="
                group hidden items-center
                gap-1.5 text-[11px]
                font-semibold text-[#752531]
                sm:flex
              "
            >
              {t.primaryCTA}

              <ArrowRight
                size={15}
                className="
                  transition-transform duration-300
                  motion-safe:group-hover:translate-x-1
                "
              />
            </Link>
          </div>

          <div className="
            grid divide-y divide-[#DFC5A6]
            md:grid-cols-3
            md:divide-x md:divide-y-0
          ">
            {t.highlights.map((item, index) => (
              <BusinessHighlight
                key={index}
                item={item}
                index={index}
                reducedMotion={reducedMotion}
              />
            ))}
          </div>
        </motion.div>

        {/* ======================================
            BOTTOM GOLDEN ORNAMENT
        ====================================== */}

        <div
          aria-hidden="true"
          className="
            mt-6 flex items-center
            justify-center gap-2
          "
        >
          <span className="
            h-px w-[65px]
            bg-gradient-to-r
            from-transparent to-[#C9A16C]
          " />

          <span className="
            h-1 w-1 rotate-45
            bg-[#C9A16C]
          " />

          <span className="
            h-2 w-2 rotate-45
            border border-[#F1C98E]
          " />

          <span className="
            h-1 w-1 rotate-45
            bg-[#C9A16C]
          " />

          <span className="
            h-px w-[65px]
            bg-gradient-to-l
            from-transparent to-[#C9A16C]
          " />
        </div>
      </div>
    </section>
  );
}