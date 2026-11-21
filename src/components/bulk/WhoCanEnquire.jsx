
import React, { useContext } from "react";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

import { LanguageContext } from "../../context/LanguageContext";

const ease = [0.22, 1, 0.36, 1];

const WHATSAPP_NUMBER = "919922604685";

// ==========================================
// BILINGUAL CONTENT
// ==========================================

const content = {
  en: {
    eyebrow: "BUSINESS ENQUIRY OPPORTUNITIES",

    heading: "Who Can",
    accent: "Enquire?",

    description:
      "Explore Maya’s LALA Food Products for your business requirements.",

    enquire: "Send Enquiry",

    categories: [
      {
        title: "Retail Stores",
        description:
          "Explore product availability for your retail outlet.",
      },
      {
        title: "Grocery & Food Shops",
        description:
          "Enquire about traditional packaged food products.",
      },
      {
        title: "Distributors",
        description:
          "Discuss potential product distribution opportunities.",
      },
      {
        title: "Bulk Buyers",
        description:
          "Share your quantity and packaging requirements.",
      },
    ],
  },

  mr: {
    eyebrow: "व्यावसायिक चौकशीच्या संधी",

    heading: "कोण चौकशी",
    accent: "करू शकते?",

    description:
      "तुमच्या व्यावसायिक गरजांसाठी मायाज लाला फूड प्रॉडक्ट्सची उत्पादने जाणून घ्या.",

    enquire: "चौकशी करा",

    categories: [
      {
        title: "किरकोळ विक्री दुकाने",
        description:
          "तुमच्या दुकानासाठी उत्पादनांच्या उपलब्धतेबाबत माहिती मिळवा.",
      },
      {
        title: "किराणा आणि खाद्यपदार्थांची दुकाने",
        description:
          "पारंपरिक पॅकबंद खाद्य उत्पादनांबाबत चौकशी करा.",
      },
      {
        title: "वितरक",
        description:
          "उत्पादनांच्या वितरणाच्या संभाव्य संधींबाबत चर्चा करा.",
      },
      {
        title: "मोठ्या प्रमाणात खरेदीदार",
        description:
          "तुमच्या आवश्यक प्रमाणाची आणि पॅकेजिंगची माहिती आम्हाला कळवा.",
      },
    ],
  },
};

// ==========================================
// CUSTOM SVG ILLUSTRATIONS
// ==========================================

function CategoryIllustration({ index }) {
  const stroke = "#843642";
  const gold = "#C9A16C";
  const cream = "#F3E2CE";

  return (
    <svg
      viewBox="0 0 240 170"
      fill="none"
      aria-hidden="true"
      className="h-full w-full"
    >
      {/* Common Background */}

      <circle
        cx="120"
        cy="84"
        r="68"
        fill="#EEDDC8"
        opacity="0.65"
      />

      <ellipse
        cx="120"
        cy="151"
        rx="83"
        ry="8"
        fill="#843642"
        opacity="0.07"
      />

      <g
        stroke={stroke}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >

        {/* ==================================
            01 — RETAIL STORE
        ================================== */}

        {index === 0 && (
          <>
            {/* Store Building */}

            <rect
              x="48"
              y="49"
              width="144"
              height="100"
              rx="4"
              fill="#FFFBF7"
            />

            <rect
              x="65"
              y="23"
              width="110"
              height="27"
              rx="4"
              fill={cream}
            />

            <path d="M88 36 H152" stroke={gold} strokeWidth="3"/>

            {/* Shop Awning */}

            <path
              d="M48 49 H192 L203 75 H37 L48 49Z"
              fill="#F5D4A7"
            />

            {Array.from({ length: 6 }, (_, i) => (
              <path
                key={i}
                d={`
                  M ${48 + i * 24} 49
                  L ${60 + i * 24} 49
                  L ${51 + i * 27} 75
                  H ${37 + i * 27}
                  Z
                `}
                fill={
                  i % 2 === 0
                    ? "#843642"
                    : "#B97872"
                }
                stroke="none"
              />
            ))}

            {/* Display Window */}

            <rect
              x="60"
              y="86"
              width="78"
              height="48"
              rx="3"
              fill="#F0E3D3"
            />

            <path d="M60 109 H138" />

            {Array.from({ length: 4 }, (_, i) => (
              <g key={i}>
                <rect
                  x={66 + i * 17}
                  y="92"
                  width="11"
                  height="14"
                  rx="2"
                  fill={i % 2 ? gold : "#C5877B"}
                />
                <rect
                  x={66 + i * 17}
                  y="114"
                  width="11"
                  height="15"
                  rx="2"
                  fill={i % 2 ? "#C5877B" : gold}
                />
              </g>
            ))}

            {/* Entrance */}

            <rect
              x="150"
              y="86"
              width="29"
              height="63"
              rx="3"
              fill={cream}
            />

            <path d="M150 116 H179" />

            <circle
              cx="172"
              cy="124"
              r="1.8"
              fill={stroke}
            />

            <path d="M38 150 H203" />
          </>
        )}

        {/* ==================================
            02 — GROCERY & FOOD SHOP
        ================================== */}

        {index === 1 && (
          <>
            {/* Product Display Shelves */}

            <rect
              x="42"
              y="28"
              width="156"
              height="119"
              rx="5"
              fill="#FFFBF7"
            />

            <rect
              x="49"
              y="36"
              width="142"
              height="13"
              rx="2"
              fill={stroke}
            />

            <path
              d="M84 42 H156"
              stroke="#F1C98E"
              strokeWidth="2"
            />

            {[58, 102].map((y, row) => (
              <g key={row}>
                {Array.from(
                  { length: 5 },
                  (_, i) => (
                    <g key={i}>
                      <rect
                        x={57 + i * 26}
                        y={y}
                        width="19"
                        height="32"
                        rx="3"
                        fill={
                          i % 2
                            ? "#D5AC78"
                            : "#ECD2B3"
                        }
                      />

                      <rect
                        x={60 + i * 26}
                        y={y + 5}
                        width="13"
                        height="8"
                        rx="1"
                        fill={stroke}
                        stroke="none"
                      />

                      <path
                        d={`
                          M ${61 + i * 26} ${y + 20}
                          H ${72 + i * 26}
                          M ${61 + i * 26} ${y + 25}
                          H ${69 + i * 26}
                        `}
                        stroke={gold}
                      />
                    </g>
                  )
                )}

                <rect
                  x="49"
                  y={y + 34}
                  width="142"
                  height="6"
                  rx="1"
                  fill="#B98D61"
                />
              </g>
            ))}

            {/* Shopping Basket */}

            <path
              d="M151 120 H217 L208 151 H160 L151 120Z"
              fill="#F1C98E"
            />

            <path d="M166 120 L178 104" />
            <path d="M202 120 L190 104" />

            <path d="M169 129 L171 143" />
            <path d="M184 129 V143" />
            <path d="M199 129 L197 143" />
          </>
        )}

        {/* ==================================
            03 — DISTRIBUTORS
        ================================== */}

        {index === 2 && (
          <>
            {/* Warehouse */}

            <path
              d="M30 62 L107 22 L184 62"
              fill={cream}
            />

            <path
              d="M39 58 V137 H175 V58"
              fill="#FFFBF7"
            />

            <rect
              x="58"
              y="78"
              width="76"
              height="59"
              rx="3"
              fill="#E5CDB2"
            />

            {[88, 98, 108, 118].map((y) => (
              <path
                key={y}
                d={`M58 ${y} H134`}
                stroke={gold}
              />
            ))}

            <rect
              x="145"
              y="77"
              width="19"
              height="24"
              rx="2"
              fill={cream}
            />

            <path d="M94 47 H120" strokeWidth="3"/>

            {/* Delivery Truck */}

            <rect
              x="98"
              y="105"
              width="73"
              height="38"
              rx="3"
              fill="#843642"
            />

            <path
              d="M171 114 H197 L213 129 V143 H171Z"
              fill="#F1C98E"
            />

            <path
              d="M179 119 H193 L203 129 H179Z"
              fill="#FFFBF7"
            />

            <path
              d="M109 119 H158 M109 127 H146"
              stroke="#F1C98E"
            />

            <circle
              cx="118"
              cy="145"
              r="10"
              fill="#633B40"
            />

            <circle
              cx="193"
              cy="145"
              r="10"
              fill="#633B40"
            />

            <circle cx="118" cy="145" r="4" fill={cream}/>
            <circle cx="193" cy="145" r="4" fill={cream}/>

            <path
              d="M25 155 H220"
              stroke={gold}
            />
          </>
        )}

        {/* ==================================
            04 — BULK BUYERS
        ================================== */}

        {index === 3 && (
          <>
            {/* Stacked Packaging Boxes */}

            {[
              { x: 38, y: 91, w: 75, h: 55 },
              { x: 118, y: 91, w: 75, h: 55 },
              { x: 78, y: 29, w: 75, h: 55 },
            ].map((b, i) => (
              <g key={i}>

                <path
                  d={`
                    M ${b.x} ${b.y}
                    L ${b.x + 12} ${b.y - 9}
                    H ${b.x + b.w + 12}
                    L ${b.x + b.w} ${b.y}
                    Z
                  `}
                  fill="#E8C99F"
                />

                <path
                  d={`
                    M ${b.x + b.w} ${b.y}
                    L ${b.x + b.w + 12} ${b.y - 9}
                    V ${b.y + b.h - 9}
                    L ${b.x + b.w} ${b.y + b.h}
                    Z
                  `}
                  fill="#B88B61"
                />

                <rect
                  x={b.x}
                  y={b.y}
                  width={b.w}
                  height={b.h}
                  rx="2"
                  fill="#DDB98C"
                />

                <rect
                  x={b.x + 30}
                  y={b.y}
                  width="15"
                  height="26"
                  fill="#F7E3CA"
                  stroke="none"
                />

                <rect
                  x={b.x + 8}
                  y={b.y + 32}
                  width="30"
                  height="15"
                  rx="2"
                  fill="#FFFBF7"
                />

                <path
                  d={`
                    M ${b.x + 13} ${b.y + 37}
                    H ${b.x + 33}
                    M ${b.x + 13} ${b.y + 42}
                    H ${b.x + 27}
                  `}
                  stroke={gold}
                  strokeWidth="1.2"
                />

              </g>
            ))}

            {/* Order Clipboard */}

            <g transform="rotate(8 183 63)">

              <rect
                x="159"
                y="27"
                width="50"
                height="73"
                rx="5"
                fill="#FFFBF7"
              />

              <rect
                x="172"
                y="22"
                width="24"
                height="13"
                rx="3"
                fill={stroke}
              />

              {[46, 61, 76].map((y) => (
                <g key={y}>

                  <rect
                    x="166"
                    y={y}
                    width="8"
                    height="8"
                    rx="1"
                    fill={cream}
                    stroke={gold}
                  />

                  <path
                    d={`M181 ${y + 4} H201`}
                    stroke={gold}
                  />

                </g>
              ))}

            </g>

            {/* Wooden Base */}

            <rect
              x="29"
              y="147"
              width="184"
              height="7"
              rx="2"
              fill="#B78B64"
            />

          </>
        )}

      </g>

      {/* Small Decorative Accents */}

      <path
        d="M24 39 V49 M19 44 H29"
        stroke={gold}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M216 47 V57 M211 52 H221"
        stroke={gold}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <circle cx="27" cy="108" r="2.5" fill={gold}/>
      <circle cx="218" cy="91" r="2" fill={gold}/>

    </svg>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function WhoCanEnquire() {
  const { language } = useContext(LanguageContext);

  const isMarathi = language === "mr";

  const t = content[isMarathi ? "mr" : "en"];

  const reducedMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reducedMotion
      ? false
      : { opacity: 0, y: 22 },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.1,
    },

    transition: {
      duration: reducedMotion ? 0 : 0.7,
      delay: reducedMotion ? 0 : delay,
      ease,
    },
  });

  // ========================================
  // CATEGORY WISE ENQUIRY
  // ========================================

  const handleEnquiry = (category) => {
    const form = document.getElementById("bulk-enquiry");

    if (form) {
      form.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });

      return;
    }

    const message = isMarathi
      ? `नमस्कार! मला मायाज लाला फूड प्रॉडक्ट्सच्या उत्पादनांबाबत व्यावसायिक चौकशी करायची आहे.\n\nव्यवसायाचा प्रकार: ${category}\n\nकृपया उत्पादनांची माहिती, उपलब्ध प्रमाण आणि किंमत कळवावी.`
      : `Hello Maya’s LALA Food Products!\n\nI would like to enquire about your products.\n\nBusiness Type: ${category}\n\nPlease share product information, available quantities and pricing details.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="who-can-enquire"
      aria-labelledby="who-can-enquire-heading"
      className="
        relative isolate overflow-hidden
        bg-[#FFFBF7]
        py-10 sm:py-12 lg:py-14
      "
    >

      {/* BACKGROUND */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          inset-0 -z-20
          bg-[linear-gradient(180deg,#FFFBF7_0%,#F8EFE5_100%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-32 -top-32 -z-10
          h-[350px] w-[350px]
          rounded-full bg-[#C9A16C]/10
          blur-[90px]
        "
      />

      <div className="
        mx-auto max-w-[1350px]
        px-4 sm:px-8 lg:px-10
      ">

        {/* ====================================
            SECTION HEADER
        ==================================== */}

        <motion.div
          {...reveal()}
          className="
            mx-auto mb-7 max-w-[760px]
            text-center sm:mb-9
          "
        >

          <div className="
            mb-3 flex items-center
            justify-center gap-3
          ">

            <span className="
              h-px w-7 shrink-0
              bg-[#C9A16C]
            "/>

            <span className="
              text-[10px] font-bold
              uppercase tracking-[1.8px]
              text-[#96704A]
              sm:text-[11px]
            ">
              {t.eyebrow}
            </span>

            <span className="
              h-px w-7 shrink-0
              bg-[#C9A16C]
            "/>

          </div>

          <h2
            id="who-can-enquire-heading"
            className="
              font-['Poppins']
              text-[27px] font-semibold
              leading-[1.35]
              tracking-[-0.6px]
              text-[#4D3034]
              sm:text-[32px] lg:text-[35px]
            "
          >
            {t.heading}{" "}

            <span className="text-[#843642]">
              {t.accent}
            </span>

          </h2>

          <p className="
            mx-auto mt-3 max-w-[650px]
            text-[13px] leading-[1.8]
            text-[#746258]
            sm:text-[14px]
          ">
            {t.description}
          </p>

        </motion.div>

        {/* ====================================
            BUSINESS CATEGORY GRID
        ==================================== */}

        <div className="
          grid grid-cols-2 items-stretch
          gap-3 sm:gap-5
          lg:grid-cols-4 lg:gap-5
          xl:gap-6
        ">

          {t.categories.map((item, index) => (
            <motion.article
              key={index}
              {...reveal(index * 0.09)}
              className="
                group relative isolate
                flex h-full min-w-0
                flex-col overflow-hidden
                rounded-[14px]
                border border-[#E6D4C1]
                bg-[#FFFCF8]
                shadow-[0_5px_20px_rgba(99,59,64,0.035)]
                transition-[border-color,box-shadow]
                duration-300
                hover:border-[#C9A16C]
                hover:shadow-[0_12px_30px_rgba(99,59,64,0.09)]
                sm:rounded-[18px]
              "
            >

              {/* ==================================
                  ILLUSTRATION AREA
              ================================== */}

              <div className="
                relative isolate overflow-hidden
                border-b border-[#E9D9C9]
                bg-[linear-gradient(135deg,#F7EBDD_0%,#F1DFCB_100%)]
                px-2 pb-2 pt-3
                sm:px-4 sm:pb-3 sm:pt-4
              ">

                {/* LARGE STEP NUMBER */}

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute
                    left-3 top-1
                    -z-10 select-none
                    font-['Poppins']
                    text-[48px] font-bold
                    leading-none
                    text-[#843642]/[0.07]
                    sm:text-[65px]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* TOP RIGHT ACCENT */}

                <span
                  aria-hidden="true"
                  className="
                    absolute right-3 top-3
                    h-2 w-2 rotate-45
                    border border-[#C9A16C]
                  "
                />

                {/* CUSTOM ILLUSTRATION */}

                <motion.div
                  whileHover={
                    reducedMotion
                      ? undefined
                      : { y: -5, scale: 1.04 }
                  }
                  transition={{
                    duration: 0.4,
                    ease,
                  }}
                  className="
                    mx-auto h-[120px]
                    max-w-[240px]
                    sm:h-[155px]
                    xl:h-[175px]
                  "
                >

                  <CategoryIllustration index={index}/>

                </motion.div>

                {/* BOTTOM DECORATIVE LINE */}

                <div
                  aria-hidden="true"
                  className="
                    mx-auto h-[2px] w-8
                    bg-[#C9A16C]
                    transition-all duration-500
                    group-hover:w-16
                  "
                />

              </div>

              {/* ==================================
                  CATEGORY CONTENT
              ================================== */}

              <div className="
                flex flex-1 flex-col
                p-3 sm:p-5
              ">

                {/* CATEGORY LABEL */}

                <div className="
                  mb-2 flex items-center gap-2
                ">

                  <span className="
                    text-[10px] font-bold
                    text-[#A77C50]
                    sm:text-[11px]
                  ">
                    0{index + 1}
                  </span>

                  <span className="
                    h-px w-5 bg-[#C9A16C]
                  "/>

                </div>

                <h3 className="
                  font-['Poppins']
                  text-[13px] font-semibold
                  leading-[1.5]
                  text-[#633B40]
                  sm:text-[16px]
                  xl:text-[18px]
                ">
                  {item.title}
                </h3>

                <p className="
                  mb-4 mt-2
                  text-[11px] leading-[1.8]
                  text-[#746258]
                  sm:text-[13px]
                ">
                  {item.description}
                </p>

                {/* ==================================
                    ENQUIRY BUTTON
                ================================== */}

                <button
                  type="button"
                  onClick={() =>
                    handleEnquiry(item.title)
                  }
                  aria-label={`${t.enquire} — ${item.title}`}
                  className="
                    group/button mt-auto
                    flex w-full items-center
                    justify-between gap-2
                    rounded-[7px]
                    border border-[#E4CDB6]
                    bg-[#F8EFE5]
                    px-2.5 py-2
                    text-left text-[10px]
                    font-semibold text-[#843642]
                    transition-colors duration-300
                    hover:border-[#843642]
                    hover:bg-[#843642]
                    hover:text-white
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#843642]
                    focus-visible:ring-offset-2
                    sm:px-3 sm:py-2.5
                    sm:text-[12px]
                  "
                >

                  <span>
                    {t.enquire}
                  </span>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.7}
                    className="
                      shrink-0
                      transition-transform
                      duration-300
                      motion-safe:group-hover/button:-translate-y-0.5
                      motion-safe:group-hover/button:translate-x-0.5
                    "
                  />

                </button>

              </div>

              {/* BOTTOM HOVER LINE */}

              <div
                aria-hidden="true"
                className="
                  absolute inset-x-0 bottom-0
                  h-[2px] origin-left scale-x-0
                  bg-gradient-to-r
                  from-[#843642] to-[#C9A16C]
                  transition-transform duration-500
                  group-hover:scale-x-100
                  motion-reduce:transition-none
                "
              />

            </motion.article>
          ))}

        </div>

        {/* BOTTOM DECORATIVE ACCENT */}

        <motion.div
          {...reveal(0.2)}
          aria-hidden="true"
          className="
            mx-auto mt-7 flex max-w-[180px]
            items-center justify-center gap-2
          "
        >

          <span className="
            h-px flex-1 bg-gradient-to-r
            from-transparent to-[#C9A16C]
          "/>

          <span className="
            h-[6px] w-[6px]
            rotate-45 bg-[#C9A16C]
          "/>

          <span className="
            h-px flex-1 bg-gradient-to-l
            from-transparent to-[#C9A16C]
          "/>

        </motion.div>

      </div>

    </section>
  );
}
