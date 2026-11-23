import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

import { LanguageContext } from "../../context/LanguageContext";

// ==========================================
// PRODUCTS
// ==========================================

const products = [
  {
    id: 1,
    image: "/p1.png",
    en: "Solapuri Shenga Chutney",
    mr: "सोलापुरी शेंगा चटणी",
    descEn: "Bold Solapuri flavour inspired by traditional homemade recipes.",
    descMr: "पारंपरिक घरगुती पाककृतीतून आलेली अस्सल झणझणीत सोलापुरी चव.",
  },
  {
    id: 2,
    image: "/p2.png",
    en: "Roasted Peanuts",
    mr: "भाजलेले शेंगदाणे",
    descEn: "Crunchy, flavourful roasted peanuts for everyday snacking.",
    descMr: "रोजच्या खाण्यासाठी खमंग आणि कुरकुरीत भाजलेले शेंगदाणे.",
  },
  {
    id: 3,
    image: "/p3.png",
    en: "Blanched Peanuts",
    mr: "साल काढलेले शेंगदाणे",
    descEn: "Convenient skinless peanuts for a variety of recipes.",
    descMr: "विविध घरगुती पदार्थांसाठी उपयुक्त साल काढलेले शेंगदाणे.",
  },
  {
    id: 4,
    image: "/p4.png",
    en: "Masala Peanuts",
    mr: "मसाला शेंगदाणे",
    descEn: "A delicious combination of peanuts and savoury spices.",
    descMr: "शेंगदाणे आणि मसाल्यांच्या मिश्रणातून तयार झालेली खमंग चव.",
  },
  {
    id: 5,
    image: "/p5.png",
    en: "Crunchy Masala Peanuts",
    mr: "कुरकुरीत मसाला शेंगदाणे",
    descEn: "A satisfying crunch with a bold masala flavour.",
    descMr: "प्रत्येक घासात कुरकुरीतपणा आणि मसाल्यांची झणझणीत चव.",
  },
  {
    id: 6,
    image: "/p6.png",
    en: "Maka Chivda",
    mr: "मका चिवडा",
    descEn:
      "A crunchy and flavourful corn-based snack with traditional spices.",
    descMr:
      "मक्यापासून बनवलेला पारंपरिक मसाल्यांचा खमंग आणि कुरकुरीत चिवडा.",
  },
  {
    id: 7,
    image: "/p7.png",
    en: "Peanut Ladoo",
    mr: "शेंगदाणा लाडू",
    descEn: "A traditional peanut sweet with a homemade touch.",
    descMr: "घरगुती गोडव्याची आठवण करून देणारे पारंपरिक शेंगदाणा लाडू.",
  },

  // NEW PRODUCT 08
  {
    id: 8,
    image: "/kala-masala.png",
    en: "Solapuri Kala Tikhat Masala",
    mr: "सोलापुरी काळा तिखट मसाला",
    descEn:
      "A traditional blend of aromatic spices that brings a bold Solapuri flavour to everyday cooking.",
    descMr:
      "रोजच्या स्वयंपाकाला अस्सल सोलापुरी झणझणीत चव देणारे पारंपरिक मसाल्यांचे मिश्रण.",
  },

  // NEW PRODUCT 09
  {
    id: 9,
    image: "/jawas.png",
    en: "Jawas Chutney",
    mr: "जवस चटणी",
    descEn:
      "A traditional flaxseed chutney blended with garlic, chilli and cumin for a distinctive flavour.",
    descMr:
      "जवस, लसूण, तिखट आणि जिरे यांच्या मिश्रणातून तयार झालेली खमंग पारंपरिक चटणी.",
  },

  // NEW PRODUCT 10
  {
    id: 10,
    image: "/karal.png",
    en: "Karal Chutney",
    mr: "कारळ चटणी",
    descEn:
      "A traditional niger seed chutney with a distinctive nutty flavour that complements everyday meals.",
    descMr:
      "रोजच्या जेवणाची लज्जत वाढवणारी खमंग आणि चविष्ट पारंपरिक कारळ चटणी.",
  },
];

// ==========================================
// TRANSLATIONS
// ==========================================

const translations = {
  en: {
    eyebrow: "MAYA'S LALA COLLECTION",
    heading: "Our Products",
    subtitle:
      "Discover authentic Solapuri flavours, traditional favourites and delicious peanut-based specialities.",
    seeAll: "See All Products",
    previous: "Previous product",
    next: "Next product",
  },

  mr: {
    eyebrow: "मायाज लाला उत्पादन संग्रह",
    heading: "आमची उत्पादने",
    subtitle:
      "अस्सल सोलापुरी चव, पारंपरिक पदार्थ आणि शेंगदाण्यांपासून बनवलेल्या खास पदार्थांचा संग्रह.",
    seeAll: "सर्व उत्पादने पाहा",
    previous: "मागील उत्पादन",
    next: "पुढील उत्पादन",
  },
};

const ease = [0.22, 1, 0.36, 1];

// ==========================================
// PRODUCT CARD
// ==========================================

function ProductCard({ product, lang, index, reducedMotion }) {
  return (
    <motion.article
      whileHover={
        reducedMotion
          ? undefined
          : {
              y: -9,
              transition: { duration: 0.35 },
            }
      }
      className="
        group relative flex h-full flex-col
        overflow-hidden rounded-[24px]
        bg-white/65
        shadow-[0_10px_32px_rgba(91,49,46,0.065)]
        backdrop-blur-xl
        transition-[background-color,box-shadow] duration-500
        hover:bg-white/90
        hover:shadow-[0_25px_60px_rgba(91,49,46,0.15)]
      "
    >
      {/* IMAGE AREA */}
      <div
        className="
          relative flex aspect-[1/1.04]
          items-center justify-center
          overflow-hidden
          bg-[#F8F0EC]
        "
      >
        {/* SOFT BACKGROUND */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_50%_40%,#FFFFFF_0%,#FBF5F0_48%,#EBD9D2_100%)]
          "
        />

        {/* DECORATIVE GLOW */}
        <motion.div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            h-[75%] w-[75%]
            rounded-full bg-white/45 blur-3xl
          "
          animate={
            reducedMotion
              ? undefined
              : {
                  scale: [1, 1.12, 1],
                  opacity: [0.4, 0.7, 0.4],
                }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
        />

        {/* GLASS REFLECTION */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -left-[85%] top-0 z-20
            h-full w-[45%]
            skew-x-[-20deg]
            bg-gradient-to-r
            from-transparent via-white/65 to-transparent
            blur-lg
            transition-transform duration-1000
            group-hover:translate-x-[480%]
          "
        />

        {/* PRODUCT IMAGE */}
        <motion.img
          src={product.image}
          alt={product[lang]}
          loading="lazy"
          draggable={false}
          className="
            relative z-10
            h-[96%] w-[96%]
            select-none object-contain
            drop-shadow-[0_17px_19px_rgba(69,37,29,0.15)]
            transition-[filter] duration-500
            group-hover:drop-shadow-[0_23px_23px_rgba(69,37,29,0.23)]
          "
          animate={
            reducedMotion
              ? undefined
              : {
                  y: [0, -7, 0],
                }
          }
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.18,
          }}
          whileHover={
            reducedMotion
              ? undefined
              : {
                  scale: 1.08,
                  rotate: -1,
                }
          }
        />

        {/* BOTTOM FADE */}
        <div
          className="
            pointer-events-none absolute
            inset-x-0 bottom-0 z-10
            h-12 bg-gradient-to-t
            from-[#F1E4DD]/55 to-transparent
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative flex flex-1 flex-col
          px-5 pb-5 pt-5
          sm:px-6
        "
      >
        {/* PRODUCT TITLE */}
        <h3
          className="
            text-[18px] font-bold
            leading-[1.45]
            text-[#532E32]
            sm:text-[19px]
          "
        >
          {product[lang]}
        </h3>

        {/* SHORT DESCRIPTION */}
        <p
          className="
            mt-2 flex-1
            text-[13px] leading-[1.8]
            text-[#826D67]
            sm:text-[14px]
          "
        >
          {lang === "mr" ? product.descMr : product.descEn}
        </p>

        {/* HOVER LINE */}
        <div
          className="
            mt-5 h-[2px] w-10
            rounded-full bg-[#C69A75]
            transition-all duration-500
            group-hover:w-24
            group-hover:bg-[#963F50]
          "
        />
      </div>
    </motion.article>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function OurProducts() {
  const { language } = useContext(LanguageContext);

  const lang = language === "mr" ? "mr" : "en";
  const t = translations[lang];

  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const pausedRef = useRef(false);
  const activeIndexRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);

  const reducedMotion = useReducedMotion();

  const inView = useInView(sectionRef, {
    once: false,
    amount: 0.1,
  });

  const visible = reducedMotion || inView;

  // ==========================================
  // CAROUSEL POSITION
  // ==========================================

  const getMaxIndex = useCallback(() => {
    const container = carouselRef.current;

    if (!container) return products.length - 1;

    const cards = Array.from(container.children);
    const maxScroll = container.scrollWidth - container.clientWidth;

    let maxIndex = 0;

    cards.forEach((card, index) => {
      const position = card.offsetLeft - container.offsetLeft;

      if (position <= maxScroll + 2) {
        maxIndex = index;
      }
    });

    return maxIndex;
  }, []);

  // ==========================================
  // SCROLL TO CARD
  // ==========================================

  const scrollToCard = useCallback(
    (index) => {
      const container = carouselRef.current;

      if (!container) return;

      const maxIndex = getMaxIndex();

      const normalized =
        index > maxIndex ? 0 : index < 0 ? maxIndex : index;

      const card = container.children[normalized];

      if (!card) return;

      activeIndexRef.current = normalized;
      setActiveIndex(normalized);

      const target = card.offsetLeft - container.offsetLeft;

      container.scrollTo({
        left: target,
        behavior: reducedMotion ? "auto" : "smooth",
      });
    },
    [getMaxIndex, reducedMotion],
  );

  // ==========================================
  // AUTO CAROUSEL - EVERY 1 SECOND
  // ==========================================

  useEffect(() => {
    if (!inView || reducedMotion) return;

    const interval = setInterval(() => {
      if (pausedRef.current) return;

      scrollToCard(activeIndexRef.current + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [inView, reducedMotion, scrollToCard]);

  // ==========================================
  // SCROLL SYNC
  // ==========================================

  const handleScroll = () => {
    const container = carouselRef.current;

    if (!container) return;

    const cards = Array.from(container.children);

    let nearest = 0;
    let smallestDistance = Infinity;

    cards.forEach((card, index) => {
      const position = card.offsetLeft - container.offsetLeft;

      const distance = Math.abs(position - container.scrollLeft);

      if (distance < smallestDistance) {
        smallestDistance = distance;
        nearest = index;
      }
    });

    const maxIndex = getMaxIndex();
    const nextIndex = Math.min(nearest, maxIndex);

    activeIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);
  };

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <section
      ref={sectionRef}
      id="our-products"
      aria-labelledby="our-products-heading"
      className="
        relative isolate overflow-hidden
        bg-[#F5E9E6]
        py-12 sm:py-14 lg:py-16
      "
    >
      {/* ANIMATED BACKGROUND */}
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
            h-[350px] w-[350px]
            rounded-full bg-[#E9BDBB]/35
            blur-[105px]
          "
          animate={
            reducedMotion
              ? undefined
              : {
                  x: [0, 40, 0],
                  y: [0, -25, 0],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            absolute -right-28 bottom-0
            h-[380px] w-[380px]
            rounded-full bg-[#E6C49D]/30
            blur-[110px]
          "
          animate={
            reducedMotion
              ? undefined
              : {
                  x: [0, -35, 0],
                  y: [0, 30, 0],
                }
          }
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div
        className="
          mx-auto max-w-[1350px]
          px-5 sm:px-8 lg:px-10
        "
      >
        {/* HEADER */}
        <motion.div
          initial={
            reducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 25,
                }
          }
          animate={
            visible
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 25 }
          }
          transition={{
            duration: reducedMotion ? 0 : 0.75,
            ease,
          }}
          className="
            mb-8 flex flex-wrap
            items-end justify-between gap-5
          "
        >
          <div className="max-w-[750px]">
            <span
              className="
                mb-2 block
                text-[10px] font-bold
                uppercase tracking-[2px]
                text-[#A67968]
              "
            >
              {t.eyebrow}
            </span>

            {/* MAIN HEADING */}
            <h2
              id="our-products-heading"
              className="
                font-['Poppins']
                text-[27px] font-semibold
                leading-[1.3] tracking-[-0.5px]
                text-[#632A30]
                sm:text-[31px] lg:text-[35px]
              "
            >
              {t.heading}
            </h2>

            <p
              className="
                mt-3 max-w-[650px]
                text-[13px] leading-[1.8]
                text-[#806C66]
                sm:text-[14px]
              "
            >
              {t.subtitle}
            </p>
          </div>

          {/* SEE ALL LINK */}
          <Link
            to="/products"
            className="
              group inline-flex shrink-0
              items-center gap-2
              border-b border-[#B98A75]
              pb-1 text-[12px] font-semibold
              text-[#845044]
              transition-all duration-300
              hover:border-[#84272F]
              hover:text-[#84272F]
              sm:text-[13px]
            "
          >
            {t.seeAll}

            <ArrowRight
              size={16}
              className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </motion.div>

        {/* PRODUCT CAROUSEL */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
          onTouchStart={() => {
            pausedRef.current = true;
          }}
          onTouchEnd={() => {
            pausedRef.current = false;
          }}
          className="
            flex snap-x snap-mandatory
            gap-4 overflow-x-auto
            pb-7 pt-3
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            sm:gap-5
          "
          style={{
            scrollBehavior: reducedMotion ? "auto" : "smooth",
          }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={
                reducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 35,
                      scale: 0.96,
                    }
              }
              animate={
                visible
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }
                  : {
                      opacity: 0,
                      y: 35,
                      scale: 0.96,
                    }
              }
              transition={{
                duration: reducedMotion ? 0 : 0.7,
                delay: reducedMotion ? 0 : index * 0.07,
                ease,
              }}
              className="
                w-[82%] shrink-0 snap-start
                sm:w-[47%]
                lg:w-[calc((100%-60px)/4)]
              "
            >
              <ProductCard
                product={product}
                lang={lang}
                index={index}
                reducedMotion={reducedMotion}
              />
            </motion.div>
          ))}
        </div>

        {/* BOTTOM NAVIGATION */}
        <div className="mt-3 flex items-center justify-between">

          {/* PROGRESS */}
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-semibold text-[#7A4C43]">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>

            <div
              className="
                h-[3px] w-24 overflow-hidden
                rounded-full bg-[#E2CFC8]
                sm:w-36
              "
            >
              <motion.div
                className="
                  h-full rounded-full
                  bg-gradient-to-r
                  from-[#A66A55] to-[#D8AC83]
                "
                animate={{
                  width: `${
                    ((activeIndex + 1) / products.length) * 100
                  }%`,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <span className="text-[12px] text-[#B19A8B]">
              {String(products.length).padStart(2, "0")}
            </span>
          </div>

          {/* NAVIGATION ARROWS */}
          <div className="flex items-center gap-2">

            {/* PREVIOUS BUTTON */}
            <button
              type="button"
              onClick={() =>
                scrollToCard(activeIndexRef.current - 1)
              }
              aria-label={t.previous}
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full bg-white/75
                text-[#81564A]
                shadow-[0_4px_15px_rgba(0,0,0,0.045)]
                backdrop-blur-lg
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-white
                hover:shadow-[0_9px_20px_rgba(91,49,46,0.12)]
              "
            >
              <ArrowLeft size={17} />
            </button>

            {/* NEXT BUTTON */}
            <button
              type="button"
              onClick={() =>
                scrollToCard(activeIndexRef.current + 1)
              }
              aria-label={t.next}
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full bg-white/75
                text-[#81564A]
                shadow-[0_4px_15px_rgba(0,0,0,0.045)]
                backdrop-blur-lg
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-white
                hover:shadow-[0_9px_20px_rgba(91,49,46,0.12)]
              "
            >
              <ArrowRight size={17} />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}