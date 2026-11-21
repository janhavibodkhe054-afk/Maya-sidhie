import React, {
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";

import { createPortal } from "react-dom";
import { Link, NavLink, useLocation } from "react-router-dom";

import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  MapPin,
  MessageCircle,
  House,
  UsersRound,
  ShoppingBasket,
  Images,
  BadgeCheck,
  Boxes,
  Mail,
  X,
  ChevronRight,
} from "lucide-react";

import { LanguageContext } from "../context/LanguageContext";

const PHONE = "918766493543";
const WHATSAPP_URL = `https://wa.me/${PHONE}`;
const ease = [0.22, 1, 0.36, 1];

// ==========================================
// NAVIGATION
// ==========================================

const navLinks = [
  {
    en: "Home",
    mr: "मुख्यपृष्ठ",
    path: "/",
    icon: House,
  },
  {
    en: "About Us",
    mr: "आमच्याबद्दल",
    path: "/about",
    icon: UsersRound,
  },
  {
    en: "Our Products",
    mr: "आमची उत्पादने",
    path: "/products",
    icon: ShoppingBasket,
  },
  
  {
    en: "Quality & Manufacturing",
    mr: "गुणवत्ता व उत्पादन",
    path: "/quality",
    icon: BadgeCheck,
  },
  {
    en: "Bulk Enquiry",
    mr: "घाऊक चौकशी",
    path: "/bulk-enquiry",
    icon: Boxes,
  },
  {
    en: "Contact Us",
    mr: "संपर्क करा",
    path: "/contact",
    icon: Mail,
  },
];

// ==========================================
// LANGUAGE CONTENT
// ==========================================

const content = {
  en: {
    location: "Solapur, Maharashtra, India",
    shortLocation: "Solapur, Maharashtra",
    tagline: "Authentic Taste of Solapur",
    tradition: "Tradition. Taste. Quality.",
    foodProducts: "Food Products",
    enquiry: "Enquire Now",
    whatsapp: "Connect on WhatsApp",
    navigation: "Explore Maya’s LALA",
    menuOpen: "Open navigation",
    menuClose: "Close navigation",
    bulkTitle: "Let's Grow Together.",
    bulkDescription:
      "Discover opportunities for retail and bulk requirements.",
    bulkCTA: "Explore Bulk Enquiry",
    call: "Call Us",
  },

  mr: {
    location: "सोलापूर, महाराष्ट्र, भारत",
    shortLocation: "सोलापूर, महाराष्ट्र",
    tagline: "सोलापूरची अस्सल चव",
    tradition: "परंपरा. चव. गुणवत्ता.",
    foodProducts: "फूड प्रॉडक्ट्स",
    enquiry: "चौकशी करा",
    whatsapp: "व्हॉट्सॲपवर संपर्क साधा",
    navigation: "मायाज लालाची ओळख",
    menuOpen: "मेनू उघडा",
    menuClose: "मेनू बंद करा",
    bulkTitle: "चला, एकत्र प्रगती करूया.",
    bulkDescription:
      "किरकोळ आणि घाऊक खरेदीच्या संधी जाणून घ्या.",
    bulkCTA: "घाऊक चौकशी करा",
    call: "फोन करा",
  },
};

// ==========================================
// ANIMATED BRAND LOGO
// ==========================================

function BrandLogo({ lang, compact, onClick }) {
  const t = content[lang];
  const reducedMotion = useReducedMotion();

  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Maya's LALA Food Products"
      className="group flex shrink-0 items-center gap-2.5"
    >
      <motion.div
        whileHover={
          reducedMotion
            ? undefined
            : { rotate: -5, scale: 1.05 }
        }
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 18,
        }}
        className={`
          relative flex shrink-0 items-center
          justify-center rounded-full
          bg-gradient-to-br
          from-[#A54550] via-[#84272F] to-[#692028]
          shadow-[0_5px_14px_rgba(132,39,47,0.18)]
          transition-[width,height] duration-300
          ${
            compact
              ? "h-[43px] w-[43px]"
              : "h-[48px] w-[48px] sm:h-[55px] sm:w-[55px]"
          }
        `}
      >
        {/* Gold Circular Border */}

        <span className="absolute inset-[3px] rounded-full border border-[#F1C98E]/80" />

        <span className="absolute inset-[6px] rounded-full border border-[#F1C98E]/20" />

        <span className="absolute left-1/2 top-[7px] h-[3px] w-[3px] -translate-x-1/2 rotate-45 bg-[#F1C98E]" />

        <div className="relative text-center leading-none">
          <span className="block font-serif text-[8px] italic text-[#F1C98E]">
            Maya's
          </span>

          <span className="mt-[3px] block font-serif text-[17px] font-black tracking-[-0.5px] text-white">
            LALA
          </span>
        </div>
      </motion.div>

      <div className="leading-none">
        <span
          className={`
            block whitespace-nowrap font-serif
            font-bold tracking-[-0.9px]
            text-[#75242B] transition-all duration-300
            ${
              compact
                ? "text-[21px]"
                : "text-[23px] sm:text-[26px]"
            }
          `}
        >
          Maya's LALA
        </span>

        <div className="mt-2 flex items-center justify-center gap-1.5">
          <span className="h-px flex-1 bg-[#C9A16C]" />

          <span className="whitespace-nowrap text-[8px] font-semibold uppercase tracking-[1.6px] text-[#96704A] sm:text-[9px]">
            {t.foodProducts}
          </span>

          <span className="h-px flex-1 bg-[#C9A16C]" />
        </div>
      </div>
    </Link>
  );
}

// ==========================================
// PREMIUM ANIMATED ENQUIRY BUTTON
// ==========================================

function EnquiryButton({
  label,
  mobile = false,
  onClick,
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileTap={
        reducedMotion
          ? undefined
          : { scale: 0.97 }
      }
      className={`
        group relative isolate inline-flex
        shrink-0 items-center justify-between
        gap-3 overflow-hidden rounded-[9px]
        border border-[#A34B52]
        bg-[#84272F] p-[6px] pl-3.5
        font-semibold text-white
        shadow-[0_5px_16px_rgba(132,39,47,0.17)]
        transition-shadow duration-300
        hover:shadow-[0_8px_25px_rgba(132,39,47,0.28)]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#84272F]
        focus-visible:ring-offset-2
        ${
          mobile
            ? "w-full text-[14px]"
            : "text-[12px] 2xl:text-[13px]"
        }
      `}
    >
      {/* Animated Background */}

      <motion.span
        variants={{
          rest: { x: "-105%" },
          hover: { x: "0%" },
        }}
        transition={{
          duration: reducedMotion ? 0 : 0.45,
          ease,
        }}
        className="
          absolute inset-0 -z-10
          bg-gradient-to-r
          from-[#692028] to-[#A64853]
        "
      />

      {/* Shine Animation */}

      {!reducedMotion && (
        <motion.span
          aria-hidden="true"
          variants={{
            rest: { x: "-200%" },
            hover: { x: "450%" },
          }}
          transition={{ duration: 0.8, ease }}
          className="
            pointer-events-none absolute
            inset-y-0 left-0 -z-10
            w-[35%] -skew-x-12
            bg-gradient-to-r
            from-transparent via-white/20
            to-transparent
          "
        />
      )}

      <motion.span
        variants={{
          rest: { rotate: 0 },
          hover: {
            rotate: reducedMotion ? 0 : -10,
          },
        }}
        className="flex shrink-0 items-center"
      >
        <MessageCircle size={18} strokeWidth={1.8} />
      </motion.span>

      <span className="flex-1 whitespace-nowrap">
        {label}
      </span>

      {/* Golden Animated Arrow */}

      <span className="
        relative flex h-[33px] w-[35px]
        shrink-0 items-center justify-center
        overflow-hidden rounded-[6px]
        bg-gradient-to-br
        from-[#FFE4B5] to-[#E8BD80]
        text-[#84272F]
        shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]
      ">
        <motion.span
          variants={{
            rest: { x: 0, y: 0 },
            hover: {
              x: reducedMotion ? 0 : 25,
              y: reducedMotion ? 0 : -25,
            },
          }}
          transition={{ duration: 0.3, ease }}
          className="absolute flex"
        >
          <ArrowUpRight size={19} strokeWidth={1.9} />
        </motion.span>

        {!reducedMotion && (
          <motion.span
            variants={{
              rest: { x: -25, y: 25 },
              hover: { x: 0, y: 0 },
            }}
            transition={{ duration: 0.35, ease }}
            className="absolute flex"
          >
            <ArrowUpRight size={19} strokeWidth={1.9} />
          </motion.span>
        )}
      </span>
    </motion.a>
  );
}

// ==========================================
// DESKTOP NAVIGATION ITEM
// ==========================================

function DesktopNavItem({ item, lang }) {
  const reducedMotion = useReducedMotion();

  return (
    <NavLink
      to={item.path}
      end={item.path === "/"}
      className="
        group relative isolate
        whitespace-nowrap rounded-md
        px-2 py-3
        text-[12px] font-semibold
        text-[#55443E]
        transition-colors duration-300
        hover:text-[#84272F]
        2xl:px-3 2xl:text-[14px]
      "
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <motion.span
              layoutId="premium-navigation-active"
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : {
                      type: "spring",
                      stiffness: 400,
                      damping: 35,
                    }
              }
              className="
                absolute inset-0 -z-10
                rounded-md
                bg-gradient-to-b
                from-[#F3E2D2] to-[#FAF1E7]
              "
            />
          )}

          {!isActive && (
            <span className="
              absolute inset-0 -z-10
              scale-95 rounded-md
              bg-[#F7EDE2] opacity-0
              transition-all duration-300
              group-hover:scale-100
              group-hover:opacity-100
            " />
          )}

          <span className={isActive ? "text-[#84272F]" : ""}>
            {item[lang]}
          </span>

          <span
            className={`
              absolute bottom-[4px]
              left-1/2 h-[2px]
              -translate-x-1/2 rounded-full
              bg-gradient-to-r
              from-[#D7B17D] via-[#84272F]
              to-[#D7B17D]
              transition-all duration-300
              ${
                isActive
                  ? "w-7"
                  : "w-0 group-hover:w-7"
              }
            `}
          />
        </>
      )}
    </NavLink>
  );
}

// ==========================================
// ANIMATED HAMBURGER BUTTON
// ==========================================

function MenuButton({
  isOpen,
  onClick,
  buttonRef,
  label,
}) {
  const reducedMotion = useReducedMotion();

  const transition = {
    duration: reducedMotion ? 0 : 0.25,
    ease,
  };

  return (
    <motion.button
      ref={buttonRef}
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      whileTap={
        reducedMotion ? undefined : { scale: 0.92 }
      }
      className="
        relative flex h-11 w-11
        shrink-0 items-center justify-center
        overflow-hidden rounded-[9px]
        border border-[#E0C8AC]
        bg-gradient-to-br
        from-[#FBF4EA] to-[#EFDCC5]
        text-[#84272F]
        transition-shadow duration-300
        hover:shadow-[0_4px_14px_rgba(132,39,47,0.12)]
      "
    >
      <div className="relative h-6 w-6">
        <motion.span
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 6 : 0,
            width: isOpen ? 22 : 23,
          }}
          transition={transition}
          className="absolute left-0 top-[5px] h-[2px] rounded-full bg-[#84272F]"
        />

        <motion.span
          animate={{
            opacity: isOpen ? 0 : 1,
            x: isOpen ? 12 : 0,
          }}
          transition={transition}
          className="absolute right-0 top-[11px] h-[2px] w-[17px] rounded-full bg-[#84272F]"
        />

        <motion.span
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -6 : 0,
            width: isOpen ? 22 : 12,
          }}
          transition={transition}
          className="absolute right-[1px] top-[17px] h-[2px] rounded-full bg-[#84272F]"
        />
      </div>
    </motion.button>
  );
}

// ==========================================
// MAIN NAVBAR COMPONENT
// ==========================================

export default function Navbar() {
  const { language } = useContext(LanguageContext);

  const lang = language === "mr" ? "mr" : "en";
  const t = content[lang];

  const location = useLocation();
  const reducedMotion = useReducedMotion();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const drawerRef = useRef(null);
  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);

  const closeMenu = () => setIsOpen(false);

  // ========================================
  // STICKY SCROLL EFFECT
  // ========================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu after navigation

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close menu on desktop resize

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1280px)");

    const handleResize = (event) => {
      if (event.matches) setIsOpen(false);
    };

    media.addEventListener("change", handleResize);

    return () =>
      media.removeEventListener("change", handleResize);
  }, []);

  // ========================================
  // DRAWER ACCESSIBILITY
  // ========================================

  useEffect(() => {
    if (!isOpen) return;

    const oldOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }

      if (event.key === "Tab" && drawerRef.current) {
        const elements = Array.from(
          drawerRef.current.querySelectorAll(
            'a[href], button:not([disabled]), [tabindex="0"]'
          )
        ).filter(
          (element) => element.getClientRects().length > 0
        );

        const first = elements[0];
        const last = elements[elements.length - 1];

        if (!first || !last) return;

        if (!drawerRef.current.contains(document.activeElement)) {
          event.preventDefault();
          first.focus();
        } else if (
          event.shiftKey &&
          document.activeElement === first
        ) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = oldOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      if (menuButtonRef.current?.getClientRects().length) {
        menuButtonRef.current.focus();
      }
    };
  }, [isOpen]);

  // ========================================
  // ANIMATION VARIANTS
  // ========================================

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.055,
        delayChildren: reducedMotion ? 0 : 0.12,
      },
    },
  };

  const linkVariants = {
    hidden: {
      x: reducedMotion ? 0 : 24,
      opacity: reducedMotion ? 1 : 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: reducedMotion ? 0 : 0.45,
        ease,
      },
    },
  };

  const isActiveLink = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname === path ||
        location.pathname.startsWith(`${path}/`);

  return (
    <>
      <header className="sticky top-0 z-50 w-full">

        {/* ==================================
            PREMIUM TOP BAR
        ================================== */}

        <div className="
          hidden border-b border-[#E5D1B9]
          bg-gradient-to-r
          from-[#F0DECA]
          via-[#FCF5EB]
          to-[#F0DECA]
          lg:block
        ">
          <motion.div
            initial={
              reducedMotion ? false : { y: -10, opacity: 0 }
            }
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: reducedMotion ? 0 : 0.5,
              ease,
            }}
            className="
              mx-auto flex h-[34px]
              max-w-[1800px] items-center
              justify-between gap-5
              px-6 xl:px-8 2xl:px-12
            "
          >
            {/* Location */}

            <div className="flex items-center gap-2 text-[11px] font-medium text-[#755847]">
              <MapPin size={13} className="text-[#84272F]" />

              {t.location}
            </div>

            {/* Center Tagline */}

            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-[#C9A16C]" />

              <span className="h-[5px] w-[5px] rotate-45 bg-[#C9A16C]" />

              <span className="font-serif text-[13px] italic tracking-[0.4px] text-[#84272F]">
                {t.tagline}
              </span>

              <span className="h-[5px] w-[5px] rotate-45 bg-[#C9A16C]" />

              <span className="h-px w-6 bg-[#C9A16C]" />
            </div>

            {/* Contact Number */}

            <div className="flex items-center gap-4">
              <a
                href={`tel:+${PHONE}`}
                className="
                  group flex items-center gap-2
                  text-[11px] font-semibold
                  text-[#84272F] hover:underline
                "
              >
                <Phone
                  size={13}
                  className="transition-transform motion-safe:group-hover:rotate-12"
                />

                +91 87664 93543
              </a>

              <span className="h-3 w-px bg-[#D6BA9A]" />

              <span className="text-[10px] font-medium text-[#96704A]">
                {t.tradition}
              </span>
            </div>
          </motion.div>
        </div>

        {/* ==================================
            MAIN NAVIGATION BAR
        ================================== */}

        <div
          className={`
            relative border-b border-[#E7D7C7]
            transition-all duration-300
            ${
              scrolled
                ? "bg-[#FFFCF8]/95 shadow-[0_7px_28px_rgba(65,35,30,0.09)] backdrop-blur-xl"
                : "bg-[#FFFCF8]"
            }
          `}
        >
          <div
            className={`
              mx-auto flex max-w-[1800px]
              items-center justify-between
              gap-2 px-3 sm:gap-4 sm:px-6
              xl:gap-3 xl:px-7
              2xl:gap-6 2xl:px-12
              transition-[height] duration-300
              ${
                scrolled
                  ? "h-[65px] lg:h-[70px]"
                  : "h-[75px] sm:h-[82px] lg:h-[88px]"
              }
            `}
          >
            {/* Brand */}

            <motion.div
              initial={
                reducedMotion
                  ? false
                  : { x: -18, opacity: 0 }
              }
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: reducedMotion ? 0 : 0.65,
                ease,
              }}
            >
              <BrandLogo
                lang={lang}
                compact={scrolled}
                onClick={closeMenu}
              />
            </motion.div>

            {/* Desktop Links */}

            <motion.nav
              aria-label={t.navigation}
              variants={listVariants}
              initial="hidden"
              animate="visible"
              className="
                hidden min-w-0 flex-1
                items-center justify-center
                gap-0.5 xl:flex 2xl:gap-2
              "
            >
              {navLinks.map((item) => (
                <motion.div
                  key={item.path}
                  variants={linkVariants}
                  className="flex shrink-0"
                >
                  <DesktopNavItem
                    item={item}
                    lang={lang}
                  />
                </motion.div>
              ))}
            </motion.nav>

            {/* Desktop Enquiry Button */}

            <motion.div
              initial={
                reducedMotion
                  ? false
                  : { x: 18, opacity: 0 }
              }
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: reducedMotion ? 0 : 0.65,
                delay: reducedMotion ? 0 : 0.2,
                ease,
              }}
              className="hidden shrink-0 xl:block"
            >
              <EnquiryButton label={t.enquiry} />
            </motion.div>

            {/* ==================================
                MOBILE ACTION BUTTONS
            ================================== */}

            <div className="flex shrink-0 items-center gap-2 xl:hidden">

              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.whatsapp}
                whileTap={
                  reducedMotion
                    ? undefined
                    : { scale: 0.9 }
                }
                className="
                  group relative flex h-10 w-10
                  items-center justify-center
                  overflow-hidden rounded-[9px]
                  bg-[#84272F] text-white
                  shadow-[0_4px_12px_rgba(132,39,47,0.16)]
                  sm:h-11 sm:w-11
                "
              >
                <span className="
                  absolute inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent via-white/20
                  to-transparent
                  transition-transform duration-700
                  motion-safe:group-hover:translate-x-full
                " />

                <MessageCircle
                  size={21}
                  strokeWidth={1.7}
                />

              </motion.a>

              <MenuButton
                isOpen={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                buttonRef={menuButtonRef}
                label={isOpen ? t.menuClose : t.menuOpen}
              />
            </div>
          </div>

          {/* Animated Golden Bottom Border */}

          <motion.div
            initial={
              reducedMotion ? false : { scaleX: 0 }
            }
            animate={{ scaleX: 1 }}
            transition={{
              duration: reducedMotion ? 0 : 1.1,
              ease,
            }}
            className="
              absolute inset-x-0 bottom-0
              h-[2px] origin-center
              bg-gradient-to-r
              from-transparent
              via-[#C9A16C]
              to-transparent
            "
          />
        </div>
      </header>

      {/* ======================================
          MOBILE DRAWER — PORTAL
      ====================================== */}

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Background Overlay */}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: reducedMotion ? 0 : 0.3,
                  }}
                  onClick={closeMenu}
                  aria-hidden="true"
                  className="
                    fixed inset-0 z-[100]
                    bg-[#39272A]/35
                    backdrop-blur-[4px]
                    xl:hidden
                  "
                />

                {/* Sliding Drawer */}

                <motion.aside
                  ref={drawerRef}
                  id="mobile-navigation"
                  role="dialog"
                  aria-modal="true"
                  aria-label={t.navigation}
                  initial={
                    reducedMotion
                      ? false
                      : { x: "100%" }
                  }
                  animate={{ x: 0 }}
                  exit={{
                    x: reducedMotion ? 0 : "100%",
                  }}
                  transition={{
                    duration: reducedMotion ? 0 : 0.45,
                    ease,
                  }}
                  className="
                    fixed bottom-0 right-0 top-0
                    z-[110] flex h-[100dvh]
                    w-[94%] max-w-[420px]
                    flex-col overflow-hidden
                    rounded-l-[20px]
                    border-l border-[#D8B78E]
                    bg-[#FFFCF8]
                    shadow-[-15px_0_70px_rgba(61,35,30,0.18)]
                    xl:hidden
                  "
                >

                  {/* Drawer Brand Header */}

                  <div className="
                    relative flex shrink-0
                    items-center justify-between
                    gap-2 border-b border-[#E6D5C3]
                    px-4 py-4 sm:px-5
                  ">
                    <BrandLogo
                      lang={lang}
                      compact
                      onClick={closeMenu}
                    />

                    <motion.button
                      ref={closeButtonRef}
                      type="button"
                      aria-label={t.menuClose}
                      onClick={closeMenu}
                      whileHover={
                        reducedMotion
                          ? undefined
                          : { rotate: 90 }
                      }
                      whileTap={
                        reducedMotion
                          ? undefined
                          : { scale: 0.9 }
                      }
                      className="
                        flex h-10 w-10 shrink-0
                        items-center justify-center
                        rounded-full
                        border border-[#E5D1B9]
                        bg-[#F5E7D7]
                        text-[#84272F]
                      "
                    >
                      <X size={22} strokeWidth={1.7} />
                    </motion.button>
                  </div>

                  {/* Scrollable Content */}

                  <div className="
                    min-h-0 flex-1 overflow-y-auto
                    overscroll-contain
                    px-4 pb-4
                  ">

                    {/* Minimal Navigation Title */}

                    <div className="flex items-center gap-3 py-4">
                      <span className="h-px w-5 bg-[#C9A16C]" />

                      <span className="
                        shrink-0 text-[10px]
                        font-bold uppercase
                        tracking-[1.7px]
                        text-[#96704A]
                      ">
                        {t.navigation}
                      </span>

                      <span className="h-px flex-1 bg-[#E8D8C6]" />
                    </div>

                    {/* Animated Navigation List */}

                    <motion.nav
                      variants={listVariants}
                      initial="hidden"
                      animate="visible"
                      aria-label={t.navigation}
                      className="space-y-1.5"
                    >
                      {navLinks.map((item, index) => {
                        const Icon = item.icon;
                        const active = isActiveLink(item.path);

                        return (
                          <motion.div
                            variants={linkVariants}
                            key={item.path}
                          >
                            <Link
                              to={item.path}
                              onClick={closeMenu}
                              aria-current={
                                active ? "page" : undefined
                              }
                              className={`
                                group relative isolate
                                flex min-h-[53px]
                                items-center gap-3
                                overflow-hidden
                                rounded-[10px]
                                border px-3 py-2
                                transition-all duration-300
                                ${
                                  active
                                    ? "border-[#E2C8AC] text-[#84272F]"
                                    : "border-transparent text-[#55443E] hover:border-[#EADCCD] hover:bg-[#FAF1E7]"
                                }
                              `}
                            >
                              {active && (
                                <motion.span
                                  layoutId="mobile-active-background"
                                  className="
                                    absolute inset-0 -z-10
                                    bg-gradient-to-r
                                    from-[#F0DDC8]
                                    to-[#FCF5EB]
                                  "
                                />
                              )}

                              {/* Icon */}

                              <span
                                className={`
                                  flex h-9 w-9 shrink-0
                                  items-center justify-center
                                  rounded-[8px]
                                  transition-colors duration-300
                                  ${
                                    active
                                      ? "bg-[#84272F] text-[#F1C98E]"
                                      : "bg-[#F3E8DA] text-[#96704A] group-hover:text-[#84272F]"
                                  }
                                `}
                              >
                                <Icon
                                  size={18}
                                  strokeWidth={1.6}
                                />
                              </span>

                              <span className="min-w-0 flex-1 text-[14px] font-semibold leading-relaxed">
                                {item[lang]}
                              </span>

                              {/* Animated Arrow */}

                              <span className="
                                relative flex h-7 w-7
                                shrink-0 items-center
                                justify-center rounded-full
                                transition-colors duration-300
                                group-hover:bg-[#E8D2B9]
                              ">
                                <ChevronRight
                                  size={17}
                                  strokeWidth={1.7}
                                  className="
                                    text-[#B49575]
                                    transition-all duration-300
                                    group-hover:text-[#84272F]
                                    motion-safe:group-hover:translate-x-0.5
                                  "
                                />
                              </span>

                              {active && (
                                <span className="
                                  absolute bottom-3
                                  left-0 top-3 w-[3px]
                                  rounded-r-full
                                  bg-[#84272F]
                                " />
                              )}
                            </Link>
                          </motion.div>
                        );
                      })}
                    </motion.nav>

                    {/* ==================================
                        BULK ENQUIRY FEATURE
                    ================================== */}

                    <motion.div
                      initial={
                        reducedMotion
                          ? false
                          : { opacity: 0, y: 20 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: reducedMotion ? 0 : 0.45,
                        delay: reducedMotion ? 0 : 0.4,
                        ease,
                      }}
                      className="
                        relative isolate mt-5
                        overflow-hidden rounded-[12px]
                        border border-[#E0C6A8]
                        bg-gradient-to-br
                        from-[#FBF1E5]
                        to-[#F1DEC9]
                        p-4
                      "
                    >
                      {/* Decorative Outline */}

                      <span className="
                        pointer-events-none absolute
                        -bottom-14 -right-12 -z-10
                        h-44 w-44 rounded-full
                        border-[20px]
                        border-[#C9A16C]/15
                      " />

                      <span className="
                        pointer-events-none absolute
                        -bottom-8 -right-6 -z-10
                        h-32 w-32 rounded-full
                        border border-[#C9A16C]/40
                      " />

                      <div className="flex items-start gap-3">
                        <div className="
                          flex h-11 w-11 shrink-0
                          items-center justify-center
                          rounded-[9px]
                          border border-[#D6B48C]
                          bg-[#FFF8EF]
                          text-[#84272F]
                        ">
                          <Boxes size={24} strokeWidth={1.5} />
                        </div>

                        <div>
                          <h3 className="font-serif text-[20px] font-bold leading-tight text-[#84272F]">
                            {t.bulkTitle}
                          </h3>

                          <p className="mt-1.5 text-[12px] leading-relaxed text-[#806452]">
                            {t.bulkDescription}
                          </p>
                        </div>
                      </div>

                      <Link
                        to="/bulk-enquiry"
                        onClick={closeMenu}
                        className="
                          group mt-4 flex
                          items-center justify-between
                          gap-3 rounded-[7px]
                          border border-[#D3B28A]
                          bg-[#FFFCF8]
                          px-3 py-2.5
                          text-[12px] font-semibold
                          text-[#84272F]
                          transition-colors duration-300
                          hover:bg-[#84272F]
                          hover:text-white
                        "
                      >
                        {t.bulkCTA}

                        <ArrowRight
                          size={17}
                          className="
                            transition-transform
                            duration-300
                            motion-safe:group-hover:translate-x-1
                          "
                        />
                      </Link>
                    </motion.div>
                  </div>

                  {/* ==================================
                      FIXED BOTTOM CONTACT AREA
                  ================================== */}

                  <div className="
                    shrink-0 border-t
                    border-[#E4D2BF]
                    bg-[#F9F0E5]
                    px-4 pt-4
                    pb-[max(16px,env(safe-area-inset-bottom))]
                  ">
                    <EnquiryButton
                      label={t.whatsapp}
                      mobile
                      onClick={closeMenu}
                    />

                    <div className="
                      mt-3 grid grid-cols-2
                      divide-x divide-[#DFCCB5]
                    ">
                      <a
                        href={`tel:+${PHONE}`}
                        className="flex items-center gap-2 pr-2 text-[#84272F]"
                      >
                        <Phone size={16} strokeWidth={1.7} />

                        <div>
                          <p className="text-[10px] text-[#96704A]">
                            {t.call}
                          </p>

                          <p className="mt-0.5 text-[11px] font-semibold">
                            +91 99226 04685
                          </p>
                        </div>
                      </a>

                      <div className="flex items-center gap-2 pl-3 text-[#96704A]">
                        <MapPin
                          size={17}
                          strokeWidth={1.7}
                          className="shrink-0"
                        />

                        <span className="text-[11px] font-medium leading-relaxed">
                          {t.shortLocation}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.aside>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}