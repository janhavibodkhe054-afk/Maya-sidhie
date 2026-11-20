
import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  ArrowUpRight,
  Menu,
  X,
  Phone,
  MapPin,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import { LanguageContext } from "../context/LanguageContext";

const PHONE = "919922604685";
const WHATSAPP_URL = `https://wa.me/${PHONE}`;

const navLinks = [
  { en: "Home", mr: "मुख्यपृष्ठ", path: "/" },
  { en: "About Us", mr: "आमच्याबद्दल", path: "/about" },
  { en: "Our Products", mr: "आमची उत्पादने", path: "/products" },
  { en: "Gallery", mr: "फोटो गॅलरी", path: "/gallery" },
  {
    en: "Quality & Manufacturing",
    mr: "गुणवत्ता व उत्पादन",
    path: "/quality",
  },
  {
    en: "Bulk Enquiry",
    mr: "घाऊक चौकशी",
    path: "/bulk-enquiry",
  },
  { en: "Contact Us", mr: "संपर्क करा", path: "/contact" },
];

const translations = {
  en: {
    location: "Solapur, Maharashtra, India",
    tagline: "Authentic Taste of Solapur",
    tradition: "Tradition • Taste • Quality",
    enquiry: "Enquire Now",
    explore: "EXPLORE OUR WORLD",
    menuHeading: "A Tradition of Taste.",
    menuDescription:
      "Discover the authentic flavours of Solapur.",
    whatsapp: "Enquire on WhatsApp",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    locationShort: "Solapur, Maharashtra",
  },
  mr: {
    location: "सोलापूर, महाराष्ट्र, भारत",
    tagline: "सोलापूरची अस्सल चव",
    tradition: "परंपरा • चव • गुणवत्ता",
    enquiry: "चौकशी करा",
    explore: "आमच्या विश्वाची ओळख",
    menuHeading: "चवीची समृद्ध परंपरा.",
    menuDescription:
      "सोलापूरच्या अस्सल पारंपरिक चवीचा अनुभव घ्या.",
    whatsapp: "WhatsApp वर चौकशी करा",
    menuOpen: "मेनू उघडा",
    menuClose: "मेनू बंद करा",
    locationShort: "सोलापूर, महाराष्ट्र",
  },
};

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.2 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.055,
      delayChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function BrandLogo({ onClick, language }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Maya's LALA Food Products"
      className="group flex shrink-0 items-center gap-3"
    >
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#84272F] shadow-[0_5px_18px_rgba(132,39,47,0.2)] sm:h-14 sm:w-14">
        <div className="absolute inset-[4px] rounded-full border border-[#D8B47B]/70" />

        <div className="relative text-center leading-none">
          <span className="block font-serif text-[9px] italic text-[#E9C88E]">
            Maya's
          </span>

          <span className="mt-0.5 block font-serif text-[17px] font-black text-white">
            LALA
          </span>
        </div>
      </div>

      <div className="leading-tight">
        <h2 className="whitespace-nowrap font-serif text-[21px] font-bold tracking-[-0.7px] text-[#75242B] sm:text-[25px]">
          Maya's LALA
        </h2>

        <div className="mt-1.5 flex items-center gap-1.5">
          <span className="h-px w-3 bg-[#C39A61]" />

          <span className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[1.5px] text-[#8B6B57] sm:text-[10px]">
            {language === "mr"
              ? "फूड प्रॉडक्ट्स"
              : "Food Products"}
          </span>

          <span className="h-px w-3 bg-[#C39A61]" />
        </div>
      </div>
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { language } = useContext(LanguageContext);
  const lang = language === "mr" ? "mr" : "en";
  const t = translations[lang];

  const location = useLocation();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const isActiveLink = (path) => {
    if (path === "/") return location.pathname === "/";

    return (
      location.pathname === path ||
      location.pathname.startsWith(path + "/")
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* TOP BAR */}
      <div className="hidden bg-gradient-to-r from-[#682027] via-[#84272F] to-[#682027] text-white lg:block">
        <div className="mx-auto flex h-11 max-w-[1800px] items-center justify-between px-6 xl:px-8 2xl:px-12">
          <div className="flex items-center gap-3 text-[12px] text-white/90">
            <MapPin size={15} className="text-[#E5C48B]" />
            <span>{t.location}</span>

            <span className="mx-2 text-white/30">|</span>

            <span>{t.tagline}</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`tel:+${PHONE}`}
              className="flex items-center gap-2 text-[12px] text-white/90 transition-colors hover:text-[#E5C48B]"
            >
              <Phone size={14} />
              +91 9922604685
            </a>

            <span className="h-4 w-px bg-white/25" />

            <span className="text-[11px] font-semibold tracking-[1px] text-[#E5C48B]">
              {t.tradition}
            </span>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <motion.div
        animate={{
          boxShadow: scrolled
            ? "0 10px 35px rgba(61,35,30,0.11)"
            : "0 1px 0 rgba(80,45,40,0.06)",
        }}
        transition={{ duration: 0.3 }}
        className={`relative border-b border-[#EBDDD0]/70 transition-colors duration-300 ${
          scrolled
            ? "bg-[#FFFCF8]/95 backdrop-blur-xl"
            : "bg-[#FFFCF8]"
        }`}
      >
        <div className="mx-auto flex h-[82px] max-w-[1800px] items-center justify-between gap-4 px-4 sm:h-[92px] sm:px-6 lg:h-[98px] lg:px-6 xl:px-8 2xl:px-12">
          <BrandLogo onClick={closeMenu} language={lang} />

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-3 2xl:flex 2xl:gap-5"
          >
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className="group relative whitespace-nowrap py-4 text-[14px] font-semibold text-[#55443E] transition-colors duration-300 hover:text-[#84272F] 2xl:text-[15px]"
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={
                        isActive ? "text-[#84272F]" : ""
                      }
                    >
                      {item[lang]}
                    </span>

                    {isActive && (
                      <motion.span
                        layoutId="desktop-nav-active"
                        className="absolute bottom-1 left-0 h-[3px] w-full rounded-full bg-[#A5363D]"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* DESKTOP WHATSAPP */}
          <div className="hidden shrink-0 2xl:flex">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#84272F] to-[#9B394A] px-6 py-3.5 text-[14px] font-semibold text-white shadow-[0_7px_22px_rgba(132,39,47,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(132,39,47,0.28)]"
            >
              <MessageCircle size={18} />
              {t.enquiry}

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* MOBILE / TABLET ACTIONS */}
          <div className="flex items-center gap-3 2xl:hidden">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Enquiry"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E8D8C8] bg-white text-[#84272F] transition-colors hover:bg-[#F8EEE6] sm:h-12 sm:w-12"
            >
              <MessageCircle size={21} />
            </a>

            <button
              type="button"
              aria-label={isOpen ? t.menuClose : t.menuOpen}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((prev) => !prev)}
              className={`relative flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 sm:h-12 sm:w-12 ${
                isOpen
                  ? "bg-[#84272F] text-white"
                  : "bg-[#F5EAE1] text-[#84272F]"
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isOpen ? "close" : "open"}
                  initial={{
                    opacity: 0,
                    rotate: -70,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 70,
                    scale: 0.7,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? (
                    <X size={23} />
                  ) : (
                    <Menu size={23} />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.div>

      {/* MOBILE / TABLET MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-x-0 bottom-0 top-[82px] z-[-1] bg-[#241612]/45 backdrop-blur-[4px] sm:top-[92px] lg:top-[142px]"
              onClick={closeMenu}
              aria-hidden="true"
            />

            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              className="absolute left-0 right-0 top-full z-50 flex max-h-[calc(100dvh-82px)] flex-col overflow-y-auto overscroll-contain border-t border-[#EBDDD0] bg-[#FFFCF8] shadow-[0_25px_60px_rgba(45,20,20,0.2)] sm:max-h-[calc(100dvh-92px)] lg:max-h-[calc(100dvh-142px)] 2xl:hidden"
            >
              {/* MENU INTRO */}
              <div className="relative overflow-hidden bg-gradient-to-br from-[#FBF3EC] to-[#F7E8E2] px-6 py-8 sm:px-10">
                <div className="pointer-events-none absolute -right-10 -top-16 h-44 w-44 rounded-full border-[28px] border-[#84272F]/[0.04]" />

                <motion.div variants={itemVariants}>
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[2px] text-[#A77D52]">
                    {t.explore}
                  </p>

                  <h2 className="font-serif text-[30px] font-semibold leading-tight text-[#75242B] sm:text-[38px]">
                    {t.menuHeading}
                  </h2>

                  <p className="mt-3 text-[14px] leading-relaxed text-[#8A7167]">
                    {t.menuDescription}
                  </p>
                </motion.div>
              </div>

              {/* MOBILE LINKS */}
              <div className="flex-1 px-4 py-5 sm:px-8">
                {navLinks.map((item, index) => {
                  const active = isActiveLink(item.path);

                  return (
                    <motion.div
                      key={item.path}
                      variants={itemVariants}
                    >
                      <Link
                        to={item.path}
                        onClick={closeMenu}
                        aria-current={active ? "page" : undefined}
                        className={`group relative flex min-h-[62px] items-center justify-between rounded-2xl px-5 py-3.5 transition-colors duration-200 ${
                          active
                            ? "bg-[#F5E6DD] text-[#84272F]"
                            : "text-[#4F403A] hover:bg-[#F8F0E8]"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span
                            className={`font-serif text-[12px] ${
                              active
                                ? "text-[#A5363D]"
                                : "text-[#B9A49A]"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="text-[17px] font-semibold sm:text-[19px]">
                            {item[lang]}
                          </span>
                        </div>

                        <ArrowUpRight
                          size={19}
                          className={`transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                            active
                              ? "text-[#84272F]"
                              : "text-[#BBA59B]"
                          }`}
                        />

                        {active && (
                          <motion.span
                            layoutId="mobile-active-indicator"
                            className="absolute bottom-3 left-0 top-3 w-[4px] rounded-full bg-[#84272F]"
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* MOBILE FOOTER */}
              <motion.div
                variants={itemVariants}
                className="border-t border-[#EDE1D6] bg-[#F8F1EA] px-5 pb-[max(24px,env(safe-area-inset-bottom))] pt-6 sm:px-9"
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#84272F] to-[#9B394A] px-5 text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(132,39,47,0.16)] transition-all hover:shadow-lg"
                >
                  <MessageCircle size={20} />
                  {t.whatsapp}
                  <ArrowRight size={19} />
                </a>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <a
                    href={`tel:+${PHONE}`}
                    className="flex items-center gap-2 text-[13px] font-semibold text-[#6F4D43]"
                  >
                    <Phone size={16} />
                    +91 9922604685
                  </a>

                  <span className="flex items-center gap-2 text-[12px] text-[#9A7D6E]">
                    <MapPin size={15} />
                    {t.locationShort}
                  </span>
                </div>

                <div className="mt-6 flex items-center justify-center gap-3 border-t border-[#E7D8CB] pt-5">
                  <span className="h-px w-7 bg-[#C8A47D]" />

                  <span className="font-serif text-[13px] italic text-[#9B7862]">
                    {t.tagline}
                  </span>

                  <span className="h-px w-7 bg-[#C8A47D]" />
                </div>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
