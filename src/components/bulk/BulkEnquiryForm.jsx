
import React, { useContext, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  UserRound,
  Building2,
  Phone,
  MapPin,
  Store,
  ShoppingBasket,
  Truck,
  Warehouse,
  Boxes,
  BriefcaseBusiness,
  Package,
  MessageSquare,
  MessageCircle,
  ArrowUpRight,
  ArrowRight,
  Check,
} from "lucide-react";

import { LanguageContext } from "../../context/LanguageContext";

const WHATSAPP_NUMBER = "918766493543";

const ease = [0.22, 1, 0.36, 1];

// ==========================================
// BUSINESS TYPES
// ==========================================

const businessTypes = [
  {
    value: "Retail Store",
    en: "Retail Store",
    mr: "किरकोळ विक्री दुकान",
    icon: Store,
  },
  {
    value: "Grocery & Food Shop",
    en: "Grocery & Food Shop",
    mr: "किराणा व खाद्यपदार्थ दुकान",
    icon: ShoppingBasket,
  },
  {
    value: "Distributor",
    en: "Distributor",
    mr: "वितरक",
    icon: Truck,
  },
  {
    value: "Wholesaler",
    en: "Wholesaler",
    mr: "घाऊक विक्रेता",
    icon: Warehouse,
  },
  {
    value: "Bulk Buyer",
    en: "Bulk Buyer",
    mr: "मोठ्या प्रमाणात खरेदीदार",
    icon: Boxes,
  },
  {
    value: "Other",
    en: "Other Business",
    mr: "इतर व्यवसाय",
    icon: BriefcaseBusiness,
  },
];

// ==========================================
// BILINGUAL CONTENT
// ==========================================

const content = {
  en: {
    eyebrow: "LET'S WORK TOGETHER",
    heading: "Your Business.",
    accent: "Our Traditional Flavours.",

    description:
      "Interested in Maya’s LALA Food Products? Share your requirements and start a conversation with us.",

    contact: "Have a question?",
    call: "Talk to Us",

    businessTitle: "What Type of Business Do You Have?",
    businessSubtitle: "Select the option that best describes your business.",

    personalTitle: "Your Contact Details",
    personalSubtitle: "Let us know how we can reach you.",

    requirementTitle: "Your Product Requirements",
    requirementSubtitle: "Tell us what you are looking for.",

    fields: {
      name: "Full Name",
      businessName: "Business Name",
      phone: "Mobile Number",
      city: "City / Location",
      quantity: "Required Quantity",
      message: "Message",
    },

    placeholders: {
      name: "Enter your full name",
      businessName: "Enter business name",
      phone: "Enter mobile number",
      city: "Enter city / location",
      quantity: "e.g. 50 kg / 100 packets",
      message: "Mention products, packaging or additional requirements...",
    },

    optional: "Optional",
    submit: "Send Enquiry on WhatsApp",

    note: "Review your enquiry and send it directly through WhatsApp.",

    requiredNote: "Fields marked with * are required.",

    error:
      "Please select your business type, complete all required fields and enter a valid mobile number.",

    progress: "Required fields completed",

    directMessage:
      "Hello Maya’s LALA Food Products! I would like to enquire about bulk product requirements.",
  },

  mr: {
    eyebrow: "चला, एकत्र काम करूया",

    heading: "तुमचा व्यवसाय.",
    accent: "आमची पारंपरिक चव.",

    description:
      "मायाज लाला फूड प्रॉडक्ट्सची उत्पादने हवी आहेत? तुमच्या गरजा आम्हाला कळवा आणि आमच्याशी संवाद साधा.",

    contact: "काही प्रश्न आहेत?",
    call: "आमच्याशी बोला",

    businessTitle: "तुमच्या व्यवसायाचा प्रकार कोणता?",
    businessSubtitle: "तुमच्या व्यवसायासाठी योग्य पर्याय निवडा.",

    personalTitle: "तुमची संपर्क माहिती",
    personalSubtitle: "तुमच्याशी संपर्क साधण्यासाठी माहिती भरा.",

    requirementTitle: "तुमच्या उत्पादनांच्या गरजा",
    requirementSubtitle: "तुम्हाला आवश्यक असलेल्या उत्पादनांची माहिती कळवा.",

    fields: {
      name: "पूर्ण नाव",
      businessName: "व्यवसायाचे नाव",
      phone: "मोबाईल क्रमांक",
      city: "शहर / ठिकाण",
      quantity: "आवश्यक प्रमाण",
      message: "संदेश",
    },

    placeholders: {
      name: "तुमचे पूर्ण नाव टाका",
      businessName: "व्यवसायाचे नाव टाका",
      phone: "मोबाईल क्रमांक टाका",
      city: "शहर / ठिकाण टाका",
      quantity: "उदा. ५० किलो / १०० पाकिटे",
      message: "उत्पादने, पॅकेजिंग किंवा इतर गरजा लिहा...",
    },

    optional: "ऐच्छिक",
    submit: "व्हॉट्सॲपवर चौकशी पाठवा",

    note: "तुमची माहिती तपासून व्हॉट्सॲपवरून थेट चौकशी पाठवा.",

    requiredNote: "* चिन्ह असलेली माहिती आवश्यक आहे.",

    error:
      "कृपया व्यवसायाचा प्रकार निवडा, सर्व आवश्यक माहिती आणि वैध मोबाईल क्रमांक भरा.",

    progress: "आवश्यक माहिती पूर्ण",

    directMessage:
      "नमस्कार! मला मायाज लाला फूड प्रॉडक्ट्सची उत्पादने मोठ्या प्रमाणात खरेदी करण्याबाबत चौकशी करायची आहे.",
  },
};

const initialForm = {
  name: "",
  businessName: "",
  phone: "",
  city: "",
  businessType: "",
  quantity: "",
  message: "",
};

// ==========================================
// COMMON INPUT STYLE
// ==========================================

const inputClass = `
  h-[49px] w-full min-w-0
  rounded-[7px]
  border border-[#E5D9CC]
  bg-[#FFFCF9]
  pl-11 pr-3
  text-[14px] text-[#4D3034]
  outline-none
  transition-all duration-300
  placeholder:text-[#A3968A]
  hover:border-[#C9A16C]
  focus:border-[#843642]
  focus:bg-white
  focus:ring-2 focus:ring-[#843642]/10
`;

// ==========================================
// INPUT COMPONENT
// ==========================================

function FormField({
  name,
  label,
  placeholder,
  value,
  onChange,
  icon: Icon,
  type = "text",
  autoComplete,
}) {
  return (
    <div className="min-w-0">
      <label
        htmlFor={`bulk-${name}`}
        className="mb-2 block text-[13px] font-semibold text-[#633B40]"
      >
        {label}
        <span className="ml-1 text-[#843642]">*</span>
      </label>

      <div className="group relative">
        <Icon
          size={18}
          strokeWidth={1.6}
          aria-hidden="true"
          className="
            pointer-events-none absolute
            left-3.5 top-1/2 -translate-y-1/2
            text-[#AD8B71]
            transition-colors
            group-focus-within:text-[#843642]
          "
        />

        <input
          id={`bulk-${name}`}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          autoComplete={autoComplete}
          required
          inputMode={name === "phone" ? "numeric" : undefined}
          maxLength={name === "phone" ? 10 : 150}
          pattern={name === "phone" ? "[0-9]{10}" : undefined}
          className={inputClass}
        />
      </div>
    </div>
  );
}

// ==========================================
// SECTION LABEL
// ==========================================

function FormSectionHeading({ number, title, subtitle }) {
  return (
    <div className="mb-4 flex items-start gap-3">
      <div
        className="
          flex h-10 w-10 shrink-0
          items-center justify-center
          rounded-[8px]
          border border-[#E2CBB0]
          bg-[#F7EBDD]
          font-['Poppins']
          text-[15px] font-semibold text-[#843642]
        "
      >
        {number}
      </div>

      <div className="min-w-0">
        <h3 className="text-[16px] font-semibold text-[#633B40] sm:text-[18px]">
          {title}
        </h3>

        <p className="mt-0.5 text-[12px] leading-relaxed text-[#806E65]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function BulkEnquiryForm() {
  const { language } = useContext(LanguageContext);

  const lang = language === "mr" ? "mr" : "en";
  const t = content[lang];

  const reducedMotion = useReducedMotion();

  const [formData, setFormData] = useState(initialForm);
  const [error, setError] = useState(false);

  const reveal = (delay = 0) => ({
    initial: reducedMotion ? false : { y: 18 },
    whileInView: { y: 0 },
    viewport: { once: true, amount: 0.08 },
    transition: {
      duration: reducedMotion ? 0 : 0.7,
      delay: reducedMotion ? 0 : delay,
      ease,
    },
  });

  // ========================================
  // LIVE FORM PROGRESS
  // ========================================

  const completedFields = [
    Boolean(formData.businessType),
    Boolean(formData.name.trim()),
    Boolean(formData.businessName.trim()),
    /^[0-9]{10}$/.test(formData.phone),
    Boolean(formData.city.trim()),
    Boolean(formData.quantity.trim()),
  ].filter(Boolean).length;

  const progress = (completedFields / 6) * 100;

  // ========================================
  // HANDLE CHANGE
  // ========================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    const updatedValue =
      name === "phone"
        ? value
            .replace(/[०-९]/g, (digit) =>
              String("०१२३४५६७८९".indexOf(digit))
            )
            .replace(/\D/g, "")
            .slice(0, 10)
        : value;

    setFormData((previous) => ({
      ...previous,
      [name]: updatedValue,
    }));

    setError(false);
  };

  const selectBusinessType = (value) => {
    setFormData((previous) => ({
      ...previous,
      businessType: value,
    }));

    setError(false);
  };

  // ========================================
  // WHATSAPP FUNCTION
  // ========================================

  const openWhatsApp = (message) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  // ========================================
  // FORM SUBMIT
  // ========================================

  const handleSubmit = (event) => {
    event.preventDefault();

    if (completedFields !== 6) {
      setError(true);
      return;
    }

    const whatsappMessage = [
      "*MAYA'S LALA FOOD PRODUCTS*",
      "",
      "*NEW BULK ENQUIRY*",
      "--------------------------",
      "",
      `*Business Type:* ${formData.businessType}`,
      `*Full Name:* ${formData.name.trim()}`,
      `*Business Name:* ${formData.businessName.trim()}`,
      `*Mobile Number:* +91 ${formData.phone}`,
      `*City / Location:* ${formData.city.trim()}`,
      `*Required Quantity:* ${formData.quantity.trim()}`,
      `*Message:* ${formData.message.trim() || "Not specified"}`,
      "",
      "Please share product availability, pricing and packaging details.",
      "",
      "Thank you!",
    ].join("\n");

    setError(false);
    openWhatsApp(whatsappMessage);
  };

  return (
    <section
      id="bulk-enquiry"
      aria-labelledby="bulk-enquiry-heading"
      className="
        relative isolate scroll-mt-24 overflow-hidden
        border-t border-[#EADCCD]
        bg-[#FBF6EF]
        py-9 sm:py-12 lg:py-14
      "
    >
      {/* LIGHT BACKGROUND */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-20
          bg-[linear-gradient(135deg,#FFFBF7_0%,#F7EDDF_100%)]
        "
      />

      {/* DECORATIVE GOLD PATTERN */}

      <svg
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-24 -top-32 -z-10
          h-[400px] w-[400px] opacity-[0.18]
        "
      >
        {Array.from({ length: 14 }, (_, i) => (
          <path
            key={i}
            d={`M ${i * 18} 0 Q 420 140, ${i * 18} 400`}
            stroke="#C9A16C"
            strokeWidth="1"
          />
        ))}
      </svg>

      <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-10">

        {/* ==================================
            SECTION HEADER
        ================================== */}

        <motion.div
          {...reveal()}
          className="
            mb-6 flex flex-col gap-5
            lg:mb-8 lg:flex-row
            lg:items-end lg:justify-between
          "
        >
          <div className="max-w-[820px]">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#C9A16C]" />

              <span className="
                text-[10px] font-bold uppercase
                tracking-[1.8px] text-[#96704A]
                sm:text-[11px]
              ">
                {t.eyebrow}
              </span>
            </div>

            <h2
              id="bulk-enquiry-heading"
              className="
                font-['Poppins']
                text-[28px] font-semibold
                leading-[1.4] tracking-[-0.7px]
                text-[#4D3034]
                sm:text-[34px] lg:text-[38px]
              "
            >
              {t.heading}{" "}
              <span className="text-[#843642]">
                {t.accent}
              </span>
            </h2>

            <p className="
              mt-2.5 max-w-[750px]
              text-[13px] leading-[1.85]
              text-[#746258] sm:text-[14px]
            ">
              {t.description}
            </p>
          </div>

          {/* DIRECT CONTACT */}

          <div className="
            flex shrink-0 items-center gap-3
            border-l-2 border-[#C9A16C]
            pl-4 lg:pl-5
          ">
            <div>
              <p className="text-[11px] text-[#96704A]">
                {t.contact}
              </p>

              <a
                href="tel:+918766493543"
                className="
                  mt-1 block text-[17px]
                  font-semibold text-[#843642]
                  hover:underline sm:text-[20px]
                "
              >
                +91 87664 93543
              </a>
            </div>

            <button
              type="button"
              aria-label={t.call}
              onClick={() => openWhatsApp(t.directMessage)}
              className="
                flex h-11 w-11 shrink-0
                items-center justify-center
                rounded-full
                border border-[#DCC5AA]
                bg-white text-[#843642]
                transition-all duration-300
                hover:bg-[#843642] hover:text-white
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-[#843642]
              "
            >
              <MessageCircle size={22} strokeWidth={1.7} />
            </button>
          </div>
        </motion.div>

        {/* ==================================
            MAIN FORM CONTAINER
        ================================== */}

        <motion.form
          {...reveal(0.06)}
          onSubmit={handleSubmit}
          className="
            relative overflow-hidden
            rounded-[16px]
            border border-[#E4D4C2]
            bg-white
            shadow-[0_12px_45px_rgba(99,59,64,0.06)]
            sm:rounded-[22px]
          "
        >
          {/* LIVE PROGRESS BAR */}

          <div className="
            flex items-center justify-between gap-3
            border-b border-[#EADCCD]
            bg-[#FCF7F1]
            px-4 py-3 sm:px-7
          ">
            <div className="
              flex items-center gap-2
              text-[10px] font-medium
              text-[#806E65] sm:text-[12px]
            ">
              <span className="
                flex h-5 w-5 items-center
                justify-center rounded-full
                bg-[#F0DECB] text-[#843642]
              ">
                <Check size={12} />
              </span>

              {t.progress}
            </div>

            <div className="flex items-center gap-3">
              <div
                role="progressbar"
                aria-label={t.progress}
                aria-valuenow={completedFields}
                aria-valuemin={0}
                aria-valuemax={6}
                className="
                  h-[5px] w-[65px] overflow-hidden
                  rounded-full bg-[#E9D9C5]
                  sm:w-[140px] lg:w-[180px]
                "
              >
                <motion.div
                  initial={false}
                  animate={{ width: `${progress}%` }}
                  transition={{
                    duration: reducedMotion ? 0 : 0.4,
                  }}
                  className="
                    h-full rounded-full
                    bg-gradient-to-r
                    from-[#843642] to-[#C9A16C]
                  "
                />
              </div>

              <span className="
                text-[11px] font-semibold
                tabular-nums text-[#843642]
              ">
                {completedFields}/6
              </span>
            </div>
          </div>

          <div className="p-4 sm:p-6 lg:p-7">

            {/* ==================================
                01 — SELECT BUSINESS TYPE
            ================================== */}

            <motion.div {...reveal(0.08)}>
              <fieldset>
                <legend className="sr-only">
                  {t.businessTitle}
                </legend>

                <FormSectionHeading
                  number="01"
                  title={t.businessTitle}
                  subtitle={t.businessSubtitle}
                />

                <div className="
                  grid grid-cols-2 gap-2.5
                  sm:grid-cols-3 sm:gap-3
                  lg:grid-cols-6
                ">
                  {businessTypes.map((item) => {
                    const Icon = item.icon;
                    const selected =
                      formData.businessType === item.value;

                    return (
                      <motion.label
                        key={item.value}
                        whileHover={
                          reducedMotion ? undefined : { y: -3 }
                        }
                        whileTap={
                          reducedMotion
                            ? undefined
                            : { scale: 0.98 }
                        }
                        className={`
                          group relative isolate flex
                          min-h-[104px] cursor-pointer
                          flex-col items-center
                          justify-center gap-2
                          overflow-hidden rounded-[10px]
                          border px-2 py-3 text-center
                          transition-all duration-300
                          focus-within:ring-2
                          focus-within:ring-[#843642]/30
                          sm:min-h-[112px]
                          ${
                            selected
                              ? "border-[#843642] bg-[#F9EBEC] shadow-[0_4px_14px_rgba(132,54,66,0.08)]"
                              : "border-[#E8DACB] bg-[#FFFCF9] hover:border-[#C9A16C] hover:bg-[#FBF4EB]"
                          }
                        `}
                      >
                        <input
                          type="radio"
                          name="businessType"
                          value={item.value}
                          checked={selected}
                          onChange={() =>
                            selectBusinessType(item.value)
                          }
                          required
                          className="sr-only"
                        />

                        {/* SELECTION INDICATOR */}

                        <div className={`
                          absolute right-2 top-2
                          flex h-[16px] w-[16px]
                          items-center justify-center
                          rounded-full border
                          transition-colors duration-300
                          ${
                            selected
                              ? "border-[#843642] bg-[#843642] text-white"
                              : "border-[#DCC7B0] bg-white"
                          }
                        `}>
                          {selected && (
                            <Check size={10} strokeWidth={2.5} />
                          )}
                        </div>

                        {/* BUSINESS ICON */}

                        <div className={`
                          flex h-10 w-10
                          items-center justify-center
                          rounded-[9px]
                          transition-colors duration-300
                          ${
                            selected
                              ? "bg-[#843642] text-[#F1C98E]"
                              : "bg-[#F2E4D2] text-[#843642]"
                          }
                        `}>
                          <Icon size={23} strokeWidth={1.5} />
                        </div>

                        <span className="
                          text-[11px] font-semibold
                          leading-[1.5] text-[#633B40]
                          sm:text-[12px]
                        ">
                          {item[lang]}
                        </span>

                        {selected && (
                          <motion.div
                            layoutId="business-selected-line"
                            transition={{
                              duration: reducedMotion ? 0 : 0.3,
                            }}
                            className="
                              absolute inset-x-0 bottom-0
                              h-[3px] bg-[#843642]
                            "
                          />
                        )}
                      </motion.label>
                    );
                  })}
                </div>
              </fieldset>
            </motion.div>

            <div className="my-6 h-px bg-[#EADCCD]" />

            {/* ==================================
                02 — CONTACT DETAILS
            ================================== */}

            <motion.div {...reveal(0.12)}>
              <FormSectionHeading
                number="02"
                title={t.personalTitle}
                subtitle={t.personalSubtitle}
              />

              <div className="
                grid grid-cols-1 gap-4
                sm:grid-cols-2 lg:grid-cols-4
              ">
                <FormField
                  name="name"
                  label={t.fields.name}
                  placeholder={t.placeholders.name}
                  value={formData.name}
                  onChange={handleChange}
                  icon={UserRound}
                  autoComplete="name"
                />

                <FormField
                  name="businessName"
                  label={t.fields.businessName}
                  placeholder={t.placeholders.businessName}
                  value={formData.businessName}
                  onChange={handleChange}
                  icon={Building2}
                  autoComplete="organization"
                />

                <FormField
                  name="phone"
                  label={t.fields.phone}
                  placeholder={t.placeholders.phone}
                  value={formData.phone}
                  onChange={handleChange}
                  icon={Phone}
                  type="tel"
                  autoComplete="tel-national"
                />

                <FormField
                  name="city"
                  label={t.fields.city}
                  placeholder={t.placeholders.city}
                  value={formData.city}
                  onChange={handleChange}
                  icon={MapPin}
                  autoComplete="address-level2"
                />
              </div>
            </motion.div>

            <div className="my-6 h-px bg-[#EADCCD]" />

            {/* ==================================
                03 — PRODUCT REQUIREMENTS
            ================================== */}

            <motion.div {...reveal(0.16)}>
              <FormSectionHeading
                number="03"
                title={t.requirementTitle}
                subtitle={t.requirementSubtitle}
              />

              <div className="
                grid grid-cols-1 gap-4
                md:grid-cols-[1fr_2fr]
              ">
                <FormField
                  name="quantity"
                  label={t.fields.quantity}
                  placeholder={t.placeholders.quantity}
                  value={formData.quantity}
                  onChange={handleChange}
                  icon={Package}
                />

                <div className="min-w-0">
                  <label
                    htmlFor="bulk-message"
                    className="
                      mb-2 block text-[13px]
                      font-semibold text-[#633B40]
                    "
                  >
                    {t.fields.message}

                    <span className="
                      ml-2 text-[11px] font-normal
                      text-[#96877B]
                    ">
                      ({t.optional})
                    </span>
                  </label>

                  <div className="group relative">
                    <MessageSquare
                      size={18}
                      strokeWidth={1.6}
                      aria-hidden="true"
                      className="
                        pointer-events-none absolute
                        left-3.5 top-4 text-[#AD8B71]
                        group-focus-within:text-[#843642]
                      "
                    />

                    <textarea
                      id="bulk-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.placeholders.message}
                      rows={3}
                      maxLength={1000}
                      className="
                        block w-full resize-y
                        rounded-[7px]
                        border border-[#E5D9CC]
                        bg-[#FFFCF9]
                        py-3.5 pl-11 pr-3
                        text-[14px] leading-relaxed
                        text-[#4D3034] outline-none
                        placeholder:text-[#A3968A]
                        transition-all duration-300
                        hover:border-[#C9A16C]
                        focus:border-[#843642]
                        focus:bg-white
                        focus:ring-2 focus:ring-[#843642]/10
                      "
                    />
                  </div>

                  <p className="
                    mt-1.5 text-right
                    text-[10px] text-[#96877B]
                  ">
                    {formData.message.length}/1000
                  </p>
                </div>
              </div>
            </motion.div>

            {/* VALIDATION ERROR */}

            {error && (
              <div
                role="alert"
                className="
                  mt-4 rounded-[7px]
                  border border-red-200
                  bg-red-50 p-3
                  text-[12px] text-red-700
                "
              >
                {t.error}
              </div>
            )}

          </div>

          {/* ==================================
              BOTTOM ACTION BAR
          ================================== */}

          <div className="
            flex flex-col gap-4
            border-t border-[#E5D5C3]
            bg-[#FCF7F1]
            px-4 py-4 sm:px-7
            md:flex-row md:items-center
            md:justify-between
          ">
            <div className="flex items-start gap-3">
              <div className="
                hidden h-10 w-10 shrink-0
                items-center justify-center
                rounded-[9px]
                border border-[#E0C9AC]
                bg-[#F4E6D4]
                text-[#843642] sm:flex
              ">
                <MessageCircle size={21} strokeWidth={1.6} />
              </div>

              <div>
                <p className="
                  text-[12px] font-semibold
                  text-[#633B40]
                ">
                  {t.requiredNote}
                </p>

                <p className="
                  mt-1 max-w-[500px]
                  text-[11px] leading-relaxed
                  text-[#806E65]
                ">
                  {t.note}
                </p>
              </div>
            </div>

            {/* WHATSAPP CTA */}

            <motion.button
              type="submit"
              whileHover={
                reducedMotion ? undefined : { y: -2 }
              }
              whileTap={
                reducedMotion
                  ? undefined
                  : { scale: 0.985 }
              }
              className="
                group relative flex shrink-0
                items-center justify-between gap-4
                overflow-hidden rounded-[8px]
                bg-[#843642]
                p-2.5 pl-4
                text-white
                shadow-[0_6px_18px_rgba(132,54,66,0.16)]
                transition-colors duration-300
                hover:bg-[#71303A]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#843642]
                focus-visible:ring-offset-4
                md:min-w-[290px]
              "
            >
              <MessageCircle
                size={21}
                strokeWidth={1.7}
                className="relative z-10 shrink-0"
              />

              <span className="
                relative z-10 flex-1
                text-[13px] font-semibold
                sm:text-[14px]
              ">
                {t.submit}
              </span>

              <span className="
                relative z-10 flex h-9 w-9
                shrink-0 items-center justify-center
                rounded-[5px]
                bg-[#F1C98E] text-[#843642]
              ">
                <ArrowUpRight
                  size={19}
                  strokeWidth={1.8}
                  className="
                    transition-transform duration-300
                    motion-safe:group-hover:-translate-y-0.5
                    motion-safe:group-hover:translate-x-0.5
                  "
                />
              </span>

              <span
                aria-hidden="true"
                className="
                  pointer-events-none absolute
                  inset-y-0 -left-full w-1/2
                  -skew-x-12 bg-white/10
                  transition-all duration-700
                  motion-safe:group-hover:left-[130%]
                "
              />
            </motion.button>
          </div>

          {/* GOLD ACCENT */}

          <div
            aria-hidden="true"
            className="
              absolute inset-x-0 top-0
              h-[2px]
              bg-gradient-to-r
              from-[#C9A16C] via-[#843642]
              to-[#C9A16C]
            "
          />
        </motion.form>
      </div>
    </section>
  );
}
