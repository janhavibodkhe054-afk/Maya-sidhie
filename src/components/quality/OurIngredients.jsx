
import React, { useContext } from "react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import { Check, ChefHat } from "lucide-react";

import { LanguageContext } from "../../context/LanguageContext";

const ease = [0.22, 1, 0.36, 1];

// ==========================================
// BILINGUAL CONTENT
// ==========================================

const content = {
  en: {
    eyebrow: "THE INGREDIENTS BEHIND THE TASTE",

    heading: "A Distinctive Blend of",
    accent: "Traditional Ingredients.",

    description:
      "Our signature Solapuri Shenga Chutney combines peanuts, garlic, Kashmiri chilli powder, Byadgi chilli powder, cumin seeds and salt.",

    description2:
      "Each ingredient contributes to the chutney’s distinctive flavour, aroma and character.",

    ingredientsHeading: "What Goes Into Our Chutney",

    ingredients: [
      "Peanuts",
      "Garlic",
      "Kashmiri Chilli Powder",
      "Byadgi Chilli Powder",
      "Cumin Seeds",
      "Salt",
    ],

    signature: "Inspired by Solapur’s Food Tradition",
  },

  mr: {
    eyebrow: "अस्सल चवीमागील खास जिन्नस",

    heading: "पारंपरिक जिन्नसांचा",
    accent: "वैशिष्ट्यपूर्ण संगम.",

    description:
      "आमची खास सोलापुरी शेंगा चटणी शेंगदाणे, लसूण, काश्मिरी मिरची पावडर, ब्याडगी मिरची पावडर, जिरे आणि मीठ यांच्या मिश्रणातून तयार होते.",

    description2:
      "प्रत्येक जिन्नस चटणीची वैशिष्ट्यपूर्ण चव, सुगंध आणि खमंगपणा वाढवतो.",

    ingredientsHeading: "आमच्या चटणीतील खास जिन्नस",

    ingredients: [
      "शेंगदाणे",
      "लसूण",
      "काश्मिरी मिरची पावडर",
      "ब्याडगी मिरची पावडर",
      "जिरे",
      "मीठ",
    ],

    signature: "सोलापूरच्या खाद्यपरंपरेतून प्रेरित",
  },
};

// ==========================================
// INGREDIENT IMAGES
// ==========================================

const ingredients = [
  {
    id: "01",
    image: "/peanuts.avif",
    en: "Peanuts",
    mr: "शेंगदाणे",
    position: "center",
  },
  {
    id: "02",
    image: "/garlic.avif",
    en: "Garlic",
    mr: "लसूण",
    position: "center",
  },
  {
    id: "03",
    image: "/red-chillis.avif",
    en: "Red Chillies",
    mr: "लाल मिरची",
    position: "center",
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function OurIngredients() {
  const { language } = useContext(LanguageContext);

  const lang = language === "mr" ? "mr" : "en";

  const t = content[lang];

  const reducedMotion = useReducedMotion();

  // ========================================
  // ANIMATION CONFIGURATION
  // ========================================

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
      amount: 0.08,
    },

    transition: {
      duration: reducedMotion ? 0 : 0.75,
      delay: reducedMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="our-ingredients"
      aria-labelledby="ingredients-heading"
      className="
        relative isolate overflow-hidden
        bg-[#FFFBF7]
        py-10 sm:py-14 lg:py-16
      "
    >

      {/* ======================================
          SECTION BACKGROUND
      ====================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          inset-0 -z-20
          bg-[linear-gradient(130deg,#FFFBF7_0%,#F9EFE5_55%,#FFFBF7_100%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-32 -top-32 -z-10
          h-[350px] w-[350px]
          rounded-full bg-[#E9D0AE]/20
          blur-[100px]
        "
      />

      <div className="
        mx-auto max-w-[1350px]
        px-5 sm:px-8 lg:px-10
      ">

        <div className="
          grid items-center gap-9
          lg:grid-cols-[0.85fr_1.15fr]
          lg:gap-12 xl:gap-16
        ">

          {/* ==================================
              LEFT SIDE — CONTENT
          ================================== */}

          <div className="min-w-0">

            {/* EYEBROW */}

            <motion.div
              {...reveal()}
              className="
                mb-4 flex items-center gap-3
              "
            >
              <span className="
                h-[2px] w-8 shrink-0
                bg-[#C9A16C]
              " />

              <span className="
                text-[10px] font-bold uppercase
                tracking-[1.8px] text-[#A77C50]
                sm:text-[11px]
              ">
                {t.eyebrow}
              </span>
            </motion.div>

            {/* HEADING */}

            <motion.h2
              {...reveal(0.08)}
              id="ingredients-heading"
              className="
                font-['Poppins']
                text-[27px] font-semibold
                leading-[1.3] tracking-[-0.7px]
                text-[#4D3034]
                sm:text-[32px] lg:text-[35px]
              "
            >
              {t.heading}

              <span className="
                block text-[#843642]
              ">
                {t.accent}
              </span>
            </motion.h2>

            {/* ANIMATED GOLD LINE */}

            <motion.div
              aria-hidden="true"
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
                my-5 h-[2px] w-14
                origin-left rounded-full
                bg-[#C9A16C]
              "
            />

            {/* DESCRIPTION */}

            <motion.p
              {...reveal(0.13)}
              className="
                text-[14px] leading-[1.9]
                text-[#746258]
                sm:text-[15px]
              "
            >
              {t.description}
            </motion.p>

            <motion.p
              {...reveal(0.18)}
              className="
                mt-3 text-[13px]
                leading-[1.9] text-[#806E65]
                sm:text-[14px]
              "
            >
              {t.description2}
            </motion.p>

            {/* ==================================
                INGREDIENTS LIST
            ================================== */}

            <motion.div
              {...reveal(0.23)}
              className="mt-6"
            >

              <div className="
                mb-4 flex items-center gap-2.5
              ">

                <ChefHat
                  size={20}
                  strokeWidth={1.65}
                  className="text-[#843642]"
                />

                <h3 className="
                  text-[13px] font-semibold
                  text-[#633B40]
                  sm:text-[15px]
                ">
                  {t.ingredientsHeading}
                </h3>

              </div>

              <div className="
                grid grid-cols-2
                gap-2 sm:gap-3
              ">

                {t.ingredients.map((item, index) => (
                  <motion.div
                    key={index}
                    {...reveal(0.05 * index)}
                    whileHover={
                      reducedMotion
                        ? undefined
                        : { x: 3 }
                    }
                    className="
                      group flex min-w-0
                      items-center gap-2
                      rounded-[8px]
                      border border-[#E9D9CB]
                      bg-white/75
                      px-2.5 py-2.5
                      transition-colors duration-300
                      hover:border-[#C9A16C]
                      hover:bg-[#F7E9DB]
                      sm:px-3
                    "
                  >

                    <div className="
                      flex h-5 w-5 shrink-0
                      items-center justify-center
                      rounded-full
                      bg-[#F1E3D3]
                      text-[#843642]
                      transition-colors duration-300
                      group-hover:bg-[#843642]
                      group-hover:text-white
                    ">
                      <Check
                        size={12}
                        strokeWidth={2}
                      />
                    </div>

                    <span className="
                      text-[11px] font-medium
                      leading-relaxed
                      text-[#633B40]
                      sm:text-[12px]
                    ">
                      {item}
                    </span>

                  </motion.div>
                ))}

              </div>
            </motion.div>

          </div>

          {/* ==================================
              RIGHT SIDE — INGREDIENT SHOWCASE
          ================================== */}

          <div className="min-w-0">

            <div className="
              grid grid-cols-3
              items-center gap-2
              sm:gap-4
            ">

              {ingredients.map((item, index) => (
                <motion.figure
                  key={item.id}
                  initial={
                    reducedMotion
                      ? false
                      : {
                          y: 25,
                          scale: 0.96,
                        }
                  }
                  whileInView={{
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                  transition={{
                    duration: reducedMotion ? 0 : 0.8,
                    delay: reducedMotion
                      ? 0
                      : index * 0.14,
                    ease,
                  }}
                  className={`
                    group relative isolate
                    min-w-0 overflow-hidden
                    rounded-[12px]
                    bg-[#E4C8AD]
                    shadow-[0_10px_30px_rgba(99,59,64,0.12)]
                    sm:rounded-[18px]
                    ${
                      index === 1
                        ? "h-[245px] sm:h-[340px] lg:h-[415px]"
                        : "h-[215px] sm:h-[300px] lg:h-[365px]"
                    }
                  `}
                >

                  {/* INGREDIENT IMAGE */}

                  <img
                    src={item.image}
                    alt={item[lang]}
                    loading="lazy"
                    decoding="async"
                    style={{
                      objectPosition: item.position,
                    }}
                    className="
                      absolute inset-0
                      h-full w-full object-cover
                      transition-transform
                      duration-700 ease-out
                      motion-safe:group-hover:scale-110
                    "
                  />

                  {/* DARK GRADIENT */}

                  <div className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-[#291619]/95
                    via-[#291619]/10
                    to-[#291619]/10
                  " />

                  {/* INNER GOLD BORDER */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none absolute
                      inset-[5px] rounded-[8px]
                      border border-white/25
                      sm:inset-2 sm:rounded-[12px]
                    "
                  />

                  {/* NUMBER LABEL */}

                  <div className="
                    absolute left-2.5 top-2.5
                    flex h-7 w-7
                    items-center justify-center
                    rounded-full
                    border border-white/30
                    bg-[#291619]/30
                    text-[10px] font-semibold
                    text-white backdrop-blur-md
                    sm:left-4 sm:top-4
                    sm:h-9 sm:w-9 sm:text-[12px]
                  ">
                    {item.id}
                  </div>

                  {/* INGREDIENT NAME */}

                  <figcaption className="
                    absolute inset-x-0 bottom-0
                    px-2 pb-5 pt-10
                    text-center
                    sm:px-3 sm:pb-7
                  ">

                    <div className="
                      mx-auto mb-2 h-[2px] w-5
                      rounded-full bg-[#F1C98E]
                      transition-all duration-500
                      group-hover:w-10
                    " />

                    <h3 className="
                      font-['Poppins']
                      text-[13px] font-semibold
                      leading-tight text-white
                      sm:text-[18px]
                      lg:text-[21px]
                    ">
                      {item[lang]}
                    </h3>

                  </figcaption>

                </motion.figure>
              ))}

            </div>

            {/* INGREDIENT SHOWCASE CAPTION */}

            <motion.div
              {...reveal(0.25)}
              className="
                mt-5 flex items-center
                justify-center gap-3
                sm:mt-6
              "
            >

              <span className="
                h-px w-7 shrink-0
                bg-[#C9A16C]
                sm:w-12
              " />

              <p className="
                text-center text-[11px]
                font-medium italic
                leading-relaxed text-[#A77C50]
                sm:text-[13px]
              ">
                {t.signature}
              </p>

              <span className="
                h-px w-7 shrink-0
                bg-[#C9A16C]
                sm:w-12
              " />

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
