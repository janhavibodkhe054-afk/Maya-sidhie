import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Phone,
  Globe,
  ChevronUp,
  Package,
  MessageCircle,
  Code2,
} from "lucide-react";

import { LanguageContext } from "../context/LanguageContext";

// ==========================================
// CONFIGURATION
// ==========================================

const PHONE = "918766493543";
const WHATSAPP = `https://wa.me/${PHONE}`;
const HASHGRID_URL = "https://www.hashgridtech.com/";

const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Siddhalaxmi Mahila Gruh Udyog, Narishing Heights, Near Kadadi School, Bhavani Peth, Solapur, Maharashtra 413002"
)}`;

const ease = [0.22, 1, 0.36, 1];

// ==========================================
// NAVIGATION & PRODUCTS
// ==========================================

const links = [
  { en: "Home", mr: "मुख्यपृष्ठ", to: "/" },
  { en: "About Us", mr: "आमच्याबद्दल", to: "/about" },
  { en: "Our Products", mr: "आमची उत्पादने", to: "/products" },
  
  {
    en: "Quality & Manufacturing",
    mr: "गुणवत्ता व उत्पादन",
    to: "/quality",
  },
  { en: "Bulk Enquiry", mr: "घाऊक चौकशी", to: "/bulk-enquiry" },
  { en: "Contact Us", mr: "संपर्क करा", to: "/contact" },
];

const products = [
  { en: "Solapuri Shenga Chutney", mr: "सोलापुरी शेंगा चटणी" },
  { en: "Roasted Peanuts", mr: "भाजलेले शेंगदाणे" },
  { en: "Blanched Peanuts", mr: "साल काढलेले शेंगदाणे" },
  { en: "Masala Peanuts", mr: "मसाला शेंगदाणे" },
  { en: "Crunchy Masala Peanuts", mr: "कुरकुरीत मसाला शेंगदाणे" },
  { en: "Spicy Peanut Chivda", mr: "तिखट शेंगदाणा चिवडा" },
  { en: "Peanut Ladoo", mr: "शेंगदाणा लाडू" },
];

// ==========================================
// BILINGUAL CONTENT
// ==========================================

const content = {
  en: {
    eyebrow: "LET'S GROW TOGETHER",

    heading: "Traditional Taste. New Opportunities.",

    description:
      "Interested in our products for your store or business? Connect with us for bulk enquiries.",

    bulkCTA: "Send Bulk Enquiry",

    talk: "Let's Talk",

    brandDescription:
      "Inspired by Solapur's distinctive food heritage and a tradition associated with the LALA name since 1968, we bring familiar Maharashtrian flavours to today's tables.",

    heritage: "A Tradition of Taste Since 1968",

    explore: "Quick Links",

    products: "Our Products",

    contact: "Get in Touch",

    addressLabel: "Our Address",

    address:
  "Siddhalaxmi Mahila Gruh Udyog, Narishing Heights, Near Kadadi School, Bhavani Peth, Solapur, Maharashtra – 413002.",

    phone: "Call Us",

    website: "Our Website",

    whatsapp: "Connect on WhatsApp",

    copyright: "All Rights Reserved.",

    backToTop: "Back to Top",
  },

  mr: {
    eyebrow: "चला, एकत्र प्रगती करूया",

    heading: "पारंपरिक चव. व्यवसायाच्या नव्या संधी.",

    description:
      "तुमच्या दुकानासाठी किंवा व्यवसायासाठी आमची उत्पादने हवी आहेत? घाऊक खरेदीसाठी आमच्याशी संपर्क साधा.",

    bulkCTA: "घाऊक चौकशी करा",

    talk: "आमच्याशी बोला",

    brandDescription:
      "सोलापूरच्या वैशिष्ट्यपूर्ण खाद्यसंस्कृतीतून आणि १९६८ पासून लाला नावाशी जोडलेल्या खाद्यपरंपरेतून प्रेरणा घेत महाराष्ट्राच्या परिचित चवी आजच्या पिढीपर्यंत पोहोचवत आहोत.",

    heritage: "१९६८ पासूनची चवीची परंपरा",

    explore: "महत्त्वाचे दुवे",

    products: "आमची उत्पादने",

    contact: "संपर्क साधा",

    addressLabel: "आमचा पत्ता",

    address:
  "सिद्धलक्ष्मी महिला गृह उद्योग, नरसिंह हाईट्स, कडादी शाळेजवळ, भवानी पेठ, सोलापूर, महाराष्ट्र – ४१३००२.",

    phone: "फोन करा",

    website: "आमची वेबसाइट",

    whatsapp: "व्हॉट्सॲपवर संपर्क साधा",

    copyright: "सर्व हक्क राखीव.",

    backToTop: "वर जा",
  },
};

// ==========================================
// PREMIUM ANIMATED BUTTON
// ==========================================

function PremiumButton({
  children,
  icon: Icon,
  to,
  href,
  secondary = false,
}) {
  const reducedMotion = useReducedMotion();

  const className = `
    group relative isolate inline-flex
    min-h-[48px] items-center justify-center
    gap-3 overflow-hidden rounded-[7px]
    border px-4 py-3
    text-[13px] font-semibold

    transition-all duration-300

    motion-safe:hover:-translate-y-1
    motion-safe:active:scale-[0.97]

    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-[#F5CD92]

    ${
      secondary
        ? `border-[#B98B69]
           bg-[#582830]
           text-[#FFFFFF]
           hover:text-[#35151D]`
        : `border-[#F5CD92]
           bg-gradient-to-r
           from-[#FFE2B5] to-[#E7B779]
           text-[#35151D]
           shadow-[0_5px_20px_rgba(0,0,0,0.18)]`
    }
  `;

  const inner = (
    <>
      {/* Sliding Background */}

      <span
        aria-hidden="true"
        className={`
          absolute inset-0 -z-10
          -translate-x-full

          transition-transform duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:translate-x-0

          ${
            secondary
              ? "bg-[#F5CD92]"
              : "bg-[#FFF0D8]"
          }
        `}
      />

      {/* Moving Shine */}

      {!reducedMotion && (
        <span
          aria-hidden="true"
          className="
            pointer-events-none absolute
            inset-y-0 -left-1/2
            w-1/3 -skew-x-12

            bg-gradient-to-r
            from-transparent via-white/50
            to-transparent

            transition-all duration-700
            group-hover:left-[140%]
          "
        />
      )}

      {Icon && (
        <Icon
          size={18}
          strokeWidth={1.8}
          className="
            shrink-0 transition-transform
            duration-300
            motion-safe:group-hover:-rotate-12
          "
        />
      )}

      <span>{children}</span>

      <span className="
        relative flex h-5 w-5
        shrink-0 items-center
        justify-center overflow-hidden
      ">

        <ArrowUpRight
          size={19}
          className="
            absolute transition-transform
            duration-300
            motion-safe:group-hover:translate-x-6
            motion-safe:group-hover:-translate-y-6
          "
        />

        {!reducedMotion && (
          <ArrowUpRight
            size={19}
            className="
              absolute -translate-x-6 translate-y-6
              transition-transform duration-300
              group-hover:translate-x-0
              group-hover:translate-y-0
            "
          />
        )}

      </span>
    </>
  );

  return to ? (
    <Link to={to} className={className}>
      {inner}
    </Link>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {inner}
    </a>
  );
}

// ==========================================
// FOOTER SECTION HEADING
// ==========================================

function FooterHeading({ children }) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="mb-4 sm:mb-5">

      <h3 className="
        font-['Poppins']
        text-[16px] font-semibold
        leading-relaxed
        text-[#F5CD92]
        sm:text-[18px]
      ">
        {children}
      </h3>

      <div className="mt-3 flex items-center gap-2">

        <motion.span
          initial={reducedMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: reducedMotion ? 0 : 0.8,
            ease,
          }}
          className="
            h-[2px] w-9 origin-left
            rounded-full bg-[#F5CD92]
          "
        />

        <span className="
          h-[5px] w-[5px]
          rotate-45 bg-[#F5CD92]
        " />

        <span className="h-px w-6 bg-[#94634F]" />

      </div>
    </div>
  );
}

// ==========================================
// ANIMATED FOOTER LINK
// ==========================================

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="
        group flex w-fit items-start
        gap-2.5 py-1.5

        text-[13px] font-medium
        leading-[1.7]
        text-[#FFF5ED]

        transition-colors duration-300
        hover:text-[#F5CD92]
        focus-visible:outline-[#F5CD92]
      "
    >
      <span className="
        relative mt-[5px] flex h-3 w-3
        shrink-0 items-center justify-center
      ">

        <span className="
          absolute h-1 w-1 rotate-45
          bg-[#F5CD92]

          transition-transform duration-300
          group-hover:scale-0
        " />

        <ArrowRight
          size={13}
          strokeWidth={2}
          className="
            absolute -translate-x-2
            text-[#F5CD92] opacity-0

            transition-all duration-300
            group-hover:translate-x-0
            group-hover:opacity-100
          "
        />

      </span>

      <span className="
        relative transition-transform duration-300
        motion-safe:group-hover:translate-x-1
      ">

        {children}

        <span className="
          absolute -bottom-0.5 left-0
          h-px w-full origin-left
          scale-x-0 bg-[#F5CD92]

          transition-transform duration-300
          group-hover:scale-x-100
        " />

      </span>
    </Link>
  );
}

// ==========================================
// CONTACT ITEM
// ==========================================

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
  external = false,
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-start gap-3"
    >

      <span className="
        flex h-10 w-10 shrink-0
        items-center justify-center
        rounded-[8px]

        border border-[#82534D]
        bg-[#582830]
        text-[#F5CD92]

        transition-all duration-300
        group-hover:border-[#F5CD92]
        group-hover:bg-[#F5CD92]
        group-hover:text-[#35151D]
      ">

        <Icon
          size={18}
          strokeWidth={1.8}
          className="
            transition-transform duration-300
            motion-safe:group-hover:scale-110
          "
        />

      </span>

      <div className="min-w-0">

        <p className="
          text-[12px] font-semibold
          text-[#F5CD92]
        ">
          {label}
        </p>

        <p className="
          mt-1 break-words
          text-[13px] font-medium
          leading-[1.85]
          text-[#FFF5ED]
        ">
          {value}
        </p>

      </div>
    </a>
  );
}

// ==========================================
// MAIN FOOTER COMPONENT
// ==========================================

export default function Footer() {
  const { language } = useContext(LanguageContext);

  const lang = language === "mr" ? "mr" : "en";
  const t = content[lang];

  const reducedMotion = useReducedMotion();

  const currentYear = new Date().getFullYear();

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
      amount: 0.05,
    },

    transition: {
      duration: reducedMotion ? 0 : 0.65,
      delay: reducedMotion ? 0 : delay,
      ease,
    },
  });

  const listVariants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.045,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: reducedMotion ? 1 : 0,
      x: reducedMotion ? 0 : -10,
    },

    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: reducedMotion ? 0 : 0.4,
        ease,
      },
    },
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <footer className="
      relative isolate overflow-hidden
      border-t border-[#C99A6E]
      bg-[#35151D]
      text-[#FFF5ED]
    ">

      {/* =====================================
          DARK PREMIUM BACKGROUND
      ===================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          inset-0 -z-20

          bg-[linear-gradient(120deg,#51232C_0%,#391820_50%,#2B1017_100%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          inset-0 -z-20

          bg-[radial-gradient(ellipse_at_top_left,#783D46_0%,transparent_50%)]
          opacity-40
        "
      />

      {/* Subtle Decorative Pattern */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          inset-0 -z-20

          bg-[radial-gradient(#F5CD92_1px,transparent_1px)]
          [background-size:20px_20px]
          opacity-[0.025]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-60 -right-52 -z-10

          h-[600px] w-[600px]
          rounded-full
          border border-[#F5CD92]/10
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-44 -right-36 -z-10

          h-[460px] w-[460px]
          rounded-full
          border border-[#F5CD92]/10
        "
      />

      {/* =====================================
          ANIMATED GOLDEN TOP BORDER
      ===================================== */}

      <div className="
        relative h-[2px] overflow-hidden
        bg-[#A77655]
      ">

        {!reducedMotion && (
          <motion.span
            initial={{ x: "-100%" }}
            whileInView={{ x: "400%" }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            className="
              absolute inset-y-0 left-0 w-1/3

              bg-gradient-to-r
              from-transparent
              via-[#FFEDCF]
              to-transparent
            "
          />
        )}

      </div>

      {/* =====================================
          COMPACT BUSINESS ENQUIRY STRIP
          NO PRODUCT IMAGES
      ===================================== */}

      <div className="
        mx-auto max-w-[1430px]
        px-4 pt-6
        sm:px-8 sm:pt-8
        lg:px-10
      ">

        <div className="
          relative isolate overflow-hidden
          rounded-[12px]
          border border-[#82534D]

          bg-[linear-gradient(115deg,#5D2C35_0%,#482029_60%,#3B1922_100%)]

          px-5 py-5
          sm:px-7 sm:py-6
          lg:px-8
        ">

          {/* Decorative Gold Accent */}

          <span className="
            absolute bottom-0 left-0 top-0
            w-[3px]

            bg-gradient-to-b
            from-[#FFE2B5]
            via-[#C8925E]
            to-[#8F5739]
          " />

          <div className="
            flex flex-col items-start
            justify-between gap-5

            lg:flex-row lg:items-center
          ">

            <motion.div
              {...reveal(0)}
              className="max-w-[680px]"
            >

              <div className="mb-2 flex items-center gap-2">

                <span className="h-px w-6 bg-[#F5CD92]" />

                <span className="
                  text-[10px] font-bold
                  tracking-[1.8px]
                  text-[#F5CD92]
                ">
                  {t.eyebrow}
                </span>

              </div>

              <h2 className="
                font-['Poppins']
                text-[21px] font-semibold
                leading-[1.4]
                tracking-[-0.4px]
                text-white

                sm:text-[24px]
                xl:text-[27px]
              ">
                {t.heading}
              </h2>

              <p className="
                mt-2 text-[13px]
                font-medium leading-[1.85]
                text-[#F8E6DD]
              ">
                {t.description}
              </p>

            </motion.div>

            {/* CTA Buttons */}

            <motion.div
              {...reveal(0.1, 12)}
              className="
                flex w-full flex-wrap
                items-center gap-3
                lg:w-auto lg:shrink-0
              "
            >

              <PremiumButton
                to="/bulk-enquiry"
                icon={Package}
              >
                {t.bulkCTA}
              </PremiumButton>

              <PremiumButton
                href={WHATSAPP}
                icon={MessageCircle}
                secondary
              >
                {t.talk}
              </PremiumButton>

            </motion.div>

          </div>
        </div>
      </div>

      {/* =====================================
          MAIN FOOTER CONTENT
      ===================================== */}

      <div className="
        relative mx-auto grid
        max-w-[1430px]
        grid-cols-2

        gap-x-4 gap-y-8
        px-5 py-9

        sm:gap-x-8 sm:px-8 sm:py-10

        lg:grid-cols-[1.25fr_0.9fr_1.1fr_1.2fr]
        lg:gap-8 lg:px-10 lg:py-10
      ">

        {/* =================================
            BRAND INFORMATION
        ================================= */}

        <motion.div
          {...reveal(0)}
          className="col-span-2 min-w-0 lg:col-span-1"
        >

          <Link
            to="/"
            className="group inline-flex items-center gap-3"
          >

            {/* CSS Brand Emblem */}

            <motion.div
              whileHover={
                reducedMotion
                  ? undefined
                  : { scale: 1.06, rotate: -6 }
              }
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 18,
              }}
              className="
                relative flex h-[58px] w-[58px]
                shrink-0 items-center justify-center

                rounded-full
                border border-[#F5CD92]

                bg-gradient-to-br
                from-[#793B45]
                to-[#4C212A]

                shadow-[0_5px_18px_rgba(0,0,0,0.25)]
              "
            >

              <span className="
                absolute inset-[4px]
                rounded-full
                border border-[#F5CD92]/60
              " />

              <span className="
                absolute inset-[7px]
                rounded-full
                border border-[#F5CD92]/20
              " />

              <div className="text-center leading-none">

                <span className="
                  block font-serif
                  text-[9px] italic
                  text-[#F5CD92]
                ">
                  Maya's
                </span>

                <span className="
                  mt-1 block font-serif
                  text-[20px] font-bold
                  text-white
                ">
                  LALA
                </span>

              </div>
            </motion.div>

            <div className="min-w-0">

              <span className="
                block font-serif
                text-[25px] font-bold
                leading-none
                tracking-[-0.6px]
                text-white
              ">
                Maya's LALA
              </span>

              <span className="
                mt-2 block text-[9px]
                font-bold tracking-[2px]
                text-[#F5CD92]
              ">
                FOOD PRODUCTS
              </span>

            </div>

          </Link>

          <p className="
            mt-5 max-w-[440px]
            text-[13px] font-medium
            leading-[1.95]
            text-[#FFF5ED]
          ">
            {t.brandDescription}
          </p>

          {/* Heritage Label */}

          <div className="
            mt-5 inline-flex max-w-full
            items-center gap-3

            rounded-[7px]
            border border-[#82534D]
            bg-[#4B2029]
            px-3.5 py-3
          ">

            <span className="
              shrink-0 border-r
              border-[#94634F] pr-3

              font-serif text-[27px]
              font-bold leading-none
              text-[#F5CD92]
            ">
              {lang === "mr" ? "१९६८" : "1968"}
            </span>

            <span className="
              text-[11px] font-semibold
              leading-[1.7]
              text-[#FFF5ED]
            ">
              {t.heritage}
            </span>

          </div>

        </motion.div>

        {/* =================================
            QUICK LINKS
        ================================= */}

        <motion.div
          {...reveal(0.06)}
          className="min-w-0"
        >

          <FooterHeading>
            {t.explore}
          </FooterHeading>

          <motion.nav
            aria-label={t.explore}
            variants={listVariants}
            initial={reducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >

            {links.map((item) => (
              <motion.div
                key={item.to}
                variants={itemVariants}
              >
                <FooterLink to={item.to}>
                  {item[lang]}
                </FooterLink>
              </motion.div>
            ))}

          </motion.nav>

        </motion.div>

        {/* =================================
            PRODUCT LINKS
        ================================= */}

        <motion.div
          {...reveal(0.12)}
          className="min-w-0"
        >

          <FooterHeading>
            {t.products}
          </FooterHeading>

          <motion.div
            variants={listVariants}
            initial={reducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >

            {products.map((product) => (
              <motion.div
                key={product.en}
                variants={itemVariants}
              >
                <FooterLink to="/products">
                  {product[lang]}
                </FooterLink>
              </motion.div>
            ))}

          </motion.div>

        </motion.div>

        {/* =================================
            CONTACT INFORMATION
        ================================= */}

        <motion.div
          {...reveal(0.18)}
          className="
            col-span-2 min-w-0
            border-t border-[#70434A]
            pt-6

            lg:col-span-1
            lg:border-0 lg:pt-0
          "
        >

          <FooterHeading>
            {t.contact}
          </FooterHeading>

          <div className="
            grid grid-cols-1 gap-4
            sm:grid-cols-2
            lg:grid-cols-1
          ">

            <ContactItem
              icon={MapPin}
              label={t.addressLabel}
              value={t.address}
              href={MAP_URL}
              external
            />

            <ContactItem
              icon={Phone}
              label={t.phone}
              value="+91 87664 93543"
              href={`tel:+${PHONE}`}
            />

            

          </div>

          {/* Animated WhatsApp Button */}

          <motion.a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"

            whileTap={
              reducedMotion
                ? undefined
                : { scale: 0.97 }
            }

            className="
              group relative isolate
              mt-5 flex min-h-[46px]
              items-center gap-3
              overflow-hidden rounded-[7px]

              border border-[#A77655]
              bg-[#4D232C]
              px-3.5 py-3

              text-[12px] font-semibold
              text-[#F5CD92]

              transition-colors duration-300
              hover:text-[#35151D]
            "
          >

            <span className="
              absolute inset-0 -z-10
              -translate-x-full
              bg-[#F5CD92]

              transition-transform duration-500
              group-hover:translate-x-0
            " />

            <MessageCircle
              size={20}
              strokeWidth={1.8}
              className="shrink-0"
            />

            <span className="flex-1">
              {t.whatsapp}
            </span>

            <ArrowUpRight
              size={17}
              className="
                shrink-0 transition-transform
                duration-300

                motion-safe:group-hover:translate-x-1
                motion-safe:group-hover:-translate-y-1
              "
            />

          </motion.a>

        </motion.div>

      </div>

      {/* =====================================
          GOLDEN DIVIDER
      ===================================== */}

      <div className="
        mx-auto flex max-w-[1430px]
        items-center gap-2.5
        px-5 sm:px-8 lg:px-10
      ">

        <motion.span
          initial={reducedMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: reducedMotion ? 0 : 0.9,
            ease,
          }}
          className="
            h-px flex-1 origin-right

            bg-gradient-to-r
            from-transparent
            to-[#B88760]
          "
        />

        <span className="
          h-1 w-1 rotate-45
          bg-[#F5CD92]
        " />

        <span className="
          h-2.5 w-2.5 rotate-45
          border border-[#F5CD92]
        " />

        <span className="
          h-1 w-1 rotate-45
          bg-[#F5CD92]
        " />

        <motion.span
          initial={reducedMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: reducedMotion ? 0 : 0.9,
            ease,
          }}
          className="
            h-px flex-1 origin-left

            bg-gradient-to-l
            from-transparent
            to-[#B88760]
          "
        />

      </div>

      {/* =====================================
          COPYRIGHT & DEVELOPER CREDIT
      ===================================== */}

      <div className="
        relative mt-5
        border-t border-[#5F333D]
        bg-[#220C13]
      ">

        <div className="
          mx-auto flex max-w-[1430px]
          flex-col items-center
          justify-between gap-3

          px-5 pt-4
          pb-[calc(80px+env(safe-area-inset-bottom))]

          sm:px-8

          lg:flex-row lg:gap-6
          lg:px-10 lg:py-4
        ">

          {/* COPYRIGHT */}

          <p className="
            text-center text-[12px]
            font-medium leading-[1.8]
            text-[#FFF5ED]
            lg:text-left
          ">
            © {currentYear} Maya's LALA Food Products.
            {" "}{t.copyright}
          </p>

          {/* HASHGRID DEVELOPER CREDIT */}

          <div className="
            flex flex-wrap items-center
            justify-center gap-x-2 gap-y-1
          ">

            <Code2
              size={16}
              strokeWidth={1.8}
              className="shrink-0 text-[#F5CD92]"
            />

            <span className="
              text-[12px] font-medium
              text-[#FFF5ED]
            ">
              Designed & Developed by
            </span>

            <a
              href={HASHGRID_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative inline-flex
                items-center gap-1.5

                text-[12px] font-semibold
                tracking-[0.1px]
                text-[#F5CD92]

                transition-colors duration-300
                hover:text-white
                focus-visible:outline-[#F5CD92]
              "
            >

              <span>
                Hashgrid Technologies Pvt. Ltd.
              </span>

              <ArrowUpRight
                size={13}
                strokeWidth={2}
                className="
                  shrink-0 transition-transform
                  duration-300
                  motion-safe:group-hover:translate-x-0.5
                  motion-safe:group-hover:-translate-y-0.5
                "
              />

              <span className="
                absolute -bottom-1 left-0
                h-px w-full origin-left
                scale-x-0 bg-[#F5CD92]

                transition-transform duration-500
                group-hover:scale-x-100
              " />

            </a>

          </div>

          {/* BACK TO TOP */}

          <motion.button
            type="button"
            onClick={scrollToTop}
            aria-label={t.backToTop}

            whileTap={
              reducedMotion
                ? undefined
                : { scale: 0.92 }
            }

            className="
              group flex shrink-0
              items-center gap-2.5

              text-[11px] font-semibold
              text-[#F5CD92]
            "
          >

            {t.backToTop}

            <span className="
              relative flex h-9 w-9
              items-center justify-center
              overflow-hidden rounded-full

              border border-[#F5CD92]
              bg-[#F5CD92]
              text-[#35151D]

              transition-all duration-300
              group-hover:bg-white
              group-hover:shadow-[0_0_18px_rgba(245,205,146,0.25)]
            ">

              <ChevronUp
                size={19}
                strokeWidth={2}
                className="
                  absolute
                  transition-transform duration-300
                  motion-safe:group-hover:-translate-y-8
                "
              />

              {!reducedMotion && (
                <ChevronUp
                  size={19}
                  strokeWidth={2}
                  className="
                    absolute translate-y-8
                    transition-transform duration-300
                    group-hover:translate-y-0
                  "
                />
              )}

            </span>

          </motion.button>

        </div>
      </div>

    </footer>
  );
}