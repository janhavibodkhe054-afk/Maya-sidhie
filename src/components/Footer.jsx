
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Phone,
  Globe,
  Heart,
  ChevronUp,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";

// ==========================================
// CONFIGURATION
// ==========================================

const PHONE = "+919922604685";
const DISPLAY_PHONE = "+91 9922604685";
const WEBSITE = "https://mayassiddhe.com";

// Add your verified social profile URLs here.
const SOCIALS = [
  // { icon: FaFacebookF, label: "Facebook", url: "https://facebook.com/..." },
  // { icon: FaInstagram, label: "Instagram", url: "https://instagram.com/..." },
  // { icon: FaYoutube, label: "YouTube", url: "https://youtube.com/..." },
];

const content = {
  en: {
    eyebrow: "ROOTED IN TRADITION",
    brandDescription:
      "Inspired by Solapur's distinctive food heritage and a tradition associated with the LALA name since 1968, Maya's LALA Food Products brings familiar Maharashtrian flavours to today's tables.",

    heritageSmall: "A TRADITION OF TASTE",
    heritageYear: "SINCE 1968",

    explore: "Explore",
    productsHeading: "Our Products",
    contactHeading: "Get in Touch",

    links: [
      { label: "Home", to: "/" },
      { label: "About Us", to: "/about" },
      { label: "Our Products", to: "/products" },
      { label: "Contact Us", to: "/contact" },
    ],

    products: [
      "Solapuri Shenga Chutney",
      "Roasted Peanuts",
      "Blanched Peanuts",
      "Masala Peanuts",
      "Crunchy Masala Peanuts",
      "Spicy Peanut Chivda",
      "Peanut Ladoo",
    ],

    location: "Solapur, Maharashtra, India",
    callUs: "Call Us",
    website: "Website",
    enquiry: "Have a Business Enquiry?",
    enquiryText:
      "Connect with us to discuss our products, availability and order requirements.",
    enquiryCTA: "Contact Our Team",

    copyright: "All Rights Reserved.",
    crafted: "Inspired by the Taste of Solapur",
    backToTop: "Back to top",
  },

  mr: {
    eyebrow: "परंपरेशी जोडलेली चव",
    brandDescription:
      "सोलापूरच्या वैशिष्ट्यपूर्ण खाद्यसंस्कृतीतून आणि १९६८ पासून लाला नावाशी जोडलेल्या खाद्यपरंपरेतून प्रेरणा घेत मायाज लाला फूड प्रॉडक्ट्स महाराष्ट्राच्या परिचित चवी आजच्या पिढीपर्यंत पोहोचवत आहे.",

    heritageSmall: "चवीची समृद्ध परंपरा",
    heritageYear: "सन १९६८ पासून",

    explore: "महत्त्वाचे दुवे",
    productsHeading: "आमची उत्पादने",
    contactHeading: "संपर्क साधा",

    links: [
      { label: "मुख्यपृष्ठ", to: "/" },
      { label: "आमच्याबद्दल", to: "/about" },
      { label: "आमची उत्पादने", to: "/products" },
      { label: "संपर्क", to: "/contact" },
    ],

    products: [
      "सोलापुरी शेंगा चटणी",
      "भाजलेले शेंगदाणे",
      "साल काढलेले शेंगदाणे",
      "मसाला शेंगदाणे",
      "क्रंची मसाला शेंगदाणे",
      "झणझणीत शेंगदाणा चिवडा",
      "शेंगदाणा लाडू",
    ],

    location: "सोलापूर, महाराष्ट्र, भारत",
    callUs: "फोन करा",
    website: "वेबसाइट",
    enquiry: "व्यावसायिक चौकशी करायची आहे?",
    enquiryText:
      "आमची उत्पादने, उपलब्धता आणि ऑर्डरच्या आवश्यकतांबद्दल माहिती घेण्यासाठी संपर्क साधा.",
    enquiryCTA: "आमच्या टीमशी संपर्क साधा",

    copyright: "सर्व हक्क राखीव.",
    crafted: "सोलापूरच्या अस्सल चवीतून प्रेरित",
    backToTop: "वर जा",
  },
};

// ==========================================
// FOOTER LINK
// ==========================================

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="
        group inline-flex w-fit
        items-center gap-2
        text-[13px] leading-[1.8]
        text-[#F3E5E0]/75
        transition-all duration-300
        hover:translate-x-1
        hover:text-[#F1C98E]
      "
    >
      <span
        className="
          h-1 w-1 rounded-full
          bg-[#F1C98E]/50
          transition-all duration-300
          group-hover:w-3
          group-hover:bg-[#F1C98E]
        "
      />

      {children}
    </Link>
  );
}

// ==========================================
// FOOTER HEADING
// ==========================================

function FooterHeading({ children }) {
  return (
    <div className="mb-6">
      <h3
        className="
          text-[14px] font-semibold
          tracking-[0.3px]
          text-[#FFF8EE]
        "
      >
        {children}
      </h3>

      <div className="mt-3 h-[2px] w-9 rounded-full bg-[#F1C98E]" />
    </div>
  );
}

// ==========================================
// MAIN FOOTER
// ==========================================

export default function Footer() {
  const { language } = useContext(LanguageContext);
  const lang = language === "mr" ? "mr" : "en";
  const t = content[lang];

  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative isolate overflow-hidden
        bg-[#421D2B]
        text-white
      "
    >
      {/* BACKGROUND DECORATION */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(ellipse_at_80%_10%,#713448_0%,#421D2B_48%,#301621_100%)]
          "
        />

        <div
          className="
            absolute -right-40 -top-44
            h-[540px] w-[540px]
            rounded-full
            border border-[#F1C98E]/10
          "
        />

        <div
          className="
            absolute -right-24 -top-28
            h-[380px] w-[380px]
            rounded-full
            border border-[#F1C98E]/10
          "
        />

        <div
          className="
            absolute -bottom-44 -left-40
            h-[420px] w-[420px]
            rounded-full bg-[#75437F]/15
            blur-[110px]
          "
        />
      </div>

      {/* =====================================
          TOP ENQUIRY BANNER
      ===================================== */}
      <div className="border-b border-[#F1C98E]/15">
        <div
          className="
            mx-auto flex max-w-[1350px]
            flex-col gap-5
            px-5 py-8
            sm:px-8 sm:py-10
            lg:flex-row lg:items-center
            lg:justify-between lg:px-10
          "
        >
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[#F1C98E]" />

              <span
                className="
                  text-[10px] font-bold
                  uppercase tracking-[2px]
                  text-[#F1C98E]
                "
              >
                MAYA'S LALA FOOD PRODUCTS
              </span>
            </div>

            <h2
              className="
                font-['Poppins']
                text-[22px] font-semibold
                leading-[1.35] text-[#FFF8EE]
                sm:text-[26px]
              "
            >
              {t.enquiry}
            </h2>

            <p
              className="
                mt-2 max-w-[600px]
                text-[13px] leading-[1.8]
                text-[#F3E5E0]/70
              "
            >
              {t.enquiryText}
            </p>
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            className="
              group relative inline-flex
              min-h-[52px] shrink-0
              items-center justify-center gap-4
              self-start overflow-hidden
              rounded-full
              bg-[#FFF0DC]
              px-6 py-3
              text-[13px] font-semibold
              text-[#68233C]
              transition-all duration-500
              hover:-translate-y-1
              hover:shadow-[0_14px_35px_rgba(117,67,127,0.3)]
            "
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
                group-hover:scale-[90]
              "
            />

            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
              {t.enquiryCTA}
            </span>

            <ArrowUpRight
              size={17}
              className="
                relative z-10
                transition-all duration-500
                group-hover:translate-x-1
                group-hover:-translate-y-1
                group-hover:text-white
              "
            />
          </Link>
        </div>
      </div>

      {/* =====================================
          MAIN FOOTER GRID
      ===================================== */}
      <div
        className="
          mx-auto grid max-w-[1350px]
          gap-10 px-5 py-14
          sm:grid-cols-2 sm:px-8
          lg:grid-cols-[1.35fr_0.7fr_1fr_0.9fr]
          lg:gap-12 lg:px-10 lg:py-18
        "
      >
        {/* BRAND COLUMN */}
        <div>
          {/* LOGO / BRAND */}
          <Link to="/" className="inline-block">
            <span
              className="
                block text-[23px] font-bold
                tracking-[0.3px] text-[#FFF8EE]
              "
            >
              Maya's LALA
            </span>

            <span
              className="
                mt-1 block text-[10px]
                font-semibold uppercase
                tracking-[3px] text-[#F1C98E]
              "
            >
              FOOD PRODUCTS
            </span>
          </Link>

          {/* DESCRIPTION */}
          <p
            className="
              mt-6 max-w-[340px]
              text-[13px] leading-[1.95]
              text-[#F3E5E0]/75
            "
          >
            {t.brandDescription}
          </p>

          {/* HERITAGE LABEL */}
          <div
            className="
              mt-6 inline-flex
              items-center gap-3
              rounded-full
              border border-[#F1C98E]/25
              bg-white/[0.05]
              px-4 py-2.5
            "
          >
            <span className="h-2 w-2 rounded-full bg-[#F1C98E]" />

            <span
              className="
                text-[11px] font-semibold
                tracking-[0.5px]
                text-[#F1C98E]
              "
            >
              {t.heritageYear}
            </span>

            <span className="h-4 w-px bg-[#F1C98E]/30" />

            <span className="text-[11px] text-[#FFF8EE]/80">
              {t.heritageSmall}
            </span>
          </div>

          {/* SOCIAL MEDIA */}
          {SOCIALS.length > 0 && (
            <div className="mt-7 flex items-center gap-3">
              {SOCIALS.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="
                      flex h-10 w-10
                      items-center justify-center
                      rounded-full
                      border border-white/20
                      bg-white/[0.05]
                      text-[#FFF8EE]
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-[#F1C98E]
                      hover:bg-[#75437F]
                    "
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          )}
        </div>

        {/* QUICK LINKS */}
        <div>
          <FooterHeading>{t.explore}</FooterHeading>

          <div className="flex flex-col gap-3">
            {t.links.map((item) => (
              <FooterLink key={item.to} to={item.to}>
                {item.label}
              </FooterLink>
            ))}
          </div>
        </div>

        {/* PRODUCTS */}
        <div>
          <FooterHeading>{t.productsHeading}</FooterHeading>

          <div className="flex flex-col gap-2.5">
            {t.products.map((product, index) => (
              <FooterLink
                key={index}
                to="/products"
              >
                {product}
              </FooterLink>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <FooterHeading>{t.contactHeading}</FooterHeading>

          <div className="flex flex-col gap-6">
            {/* LOCATION */}
            <div className="flex items-start gap-3">
              <div
                className="
                  flex h-10 w-10 shrink-0
                  items-center justify-center
                  rounded-[12px]
                  bg-[#F1C98E]/10
                  text-[#F1C98E]
                "
              >
                <MapPin size={19} strokeWidth={1.6} />
              </div>

              <div>
                <p className="text-[11px] font-semibold text-[#F1C98E]">
                  {lang === "mr" ? "ठिकाण" : "Location"}
                </p>

                <p className="mt-1 text-[13px] leading-[1.8] text-[#F3E5E0]/75">
                  {t.location}
                </p>
              </div>
            </div>

            {/* PHONE */}
            <a
              href={`tel:${PHONE}`}
              className="group flex items-start gap-3"
            >
              <div
                className="
                  flex h-10 w-10 shrink-0
                  items-center justify-center
                  rounded-[12px]
                  bg-[#F1C98E]/10
                  text-[#F1C98E]
                  transition-colors duration-300
                  group-hover:bg-[#75437F]
                  group-hover:text-white
                "
              >
                <Phone size={19} strokeWidth={1.6} />
              </div>

              <div>
                <p className="text-[11px] font-semibold text-[#F1C98E]">
                  {t.callUs}
                </p>

                <p className="mt-1 text-[13px] text-[#F3E5E0]/80 transition-colors group-hover:text-white">
                  {DISPLAY_PHONE}
                </p>
              </div>
            </a>

            {/* WEBSITE */}
            <a
              href={WEBSITE}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3"
            >
              <div
                className="
                  flex h-10 w-10 shrink-0
                  items-center justify-center
                  rounded-[12px]
                  bg-[#F1C98E]/10
                  text-[#F1C98E]
                  transition-colors duration-300
                  group-hover:bg-[#75437F]
                  group-hover:text-white
                "
              >
                <Globe size={19} strokeWidth={1.6} />
              </div>

              <div>
                <p className="text-[11px] font-semibold text-[#F1C98E]">
                  {t.website}
                </p>

                <p className="mt-1 break-all text-[13px] text-[#F3E5E0]/80 transition-colors group-hover:text-white">
                  mayassiddhe.com
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* =====================================
          BOTTOM COPYRIGHT BAR
      ===================================== */}
      <div className="border-t border-[#F1C98E]/15">
        <div
          className="
            mx-auto flex max-w-[1350px]
            flex-col gap-4
            px-5 py-5
            sm:px-8
            md:flex-row md:items-center
            md:justify-between
            lg:px-10
          "
        >
          <p className="text-[11px] leading-[1.7] text-[#F3E5E0]/60">
            © {currentYear} Maya's LALA Food Products. {t.copyright}
          </p>

          <div className="flex items-center gap-2 text-[11px] text-[#F3E5E0]/60">
            <Heart size={13} className="text-[#F1C98E]" />
            <span>{t.crafted}</span>
          </div>

          {/* BACK TO TOP */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label={t.backToTop}
            className="
              group inline-flex w-fit
              items-center gap-2
              text-[11px] font-semibold
              text-[#F1C98E]
              transition-colors
              hover:text-white
            "
          >
            {t.backToTop}

            <span
              className="
                flex h-8 w-8
                items-center justify-center
                rounded-full
                border border-[#F1C98E]/35
                transition-all duration-300
                group-hover:-translate-y-1
                group-hover:bg-[#75437F]
              "
            >
              <ChevronUp size={15} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
