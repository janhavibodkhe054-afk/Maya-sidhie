
import React, { useContext, useState } from "react";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  MapPin,
  Phone,
  Globe2,
  MessageCircle,
  ArrowUpRight,
  ArrowRight,
  UserRound,
  Mail,
  FileText,
  Send,
  Navigation,
  MessageSquare,
} from "lucide-react";

import { LanguageContext } from "../../context/LanguageContext";

// ==========================================
// CONTACT CONFIGURATION
// ==========================================

const PHONE = "+91 8766493543";
const WHATSAPP_NUMBER = "918766493543";
const WEBSITE = "www.mayassiddhe.com";

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    "Siddhalaxmi Mahila Gruh Udyog, Narishing Heights, Near Kadadi School, Bhavani Peth, Solapur, Maharashtra 413002"
  );

const ease = [0.22, 1, 0.36, 1];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

// ==========================================
// BILINGUAL CONTENT
// ==========================================

const content = {
  en: {
    eyebrow: "LET'S CONNECT",

    heading: "We’d Love to",
    headingAccent: "Hear From You.",

    description:
      "From our traditional flavours to your everyday table, we are just a conversation away. Connect with us for product information, orders and general enquiries.",

    addressLabel: "Visit Us",

    address:
  "Siddhalaxmi Mahila Gruh Udyog, Narishing Heights, Near Kadadi School, Bhavani Peth, Solapur, Maharashtra – 413002.",

    directions: "Find Directions",

    phoneLabel: "Give Us a Call",

    websiteLabel: "Explore Our Website",

    whatsappHeading: "Prefer a Quick Conversation?",

    whatsappDescription:
      "Connect with us directly on WhatsApp.",

    whatsapp: "Chat Now",

    whatsappMessage:
      "Hello Maya’s LALA Food Products! I would like to know more about your products.",

    formEyebrow: "WRITE TO US",

    formHeading: "Send Us a Message",

    formDescription:
      "Tell us what you are looking for.",

    name: "Full Name",
    namePlaceholder: "Enter your name",

    phone: "Mobile Number",
    phonePlaceholder: "Enter mobile number",

    email: "Email Address",
    emailPlaceholder: "Enter your email address",

    subject: "Subject",
    subjectPlaceholder: "What is your enquiry about?",

    message: "Message",
    messagePlaceholder: "How can we help you?",

    submit: "Submit Message",

    note: "Continue to WhatsApp to send your message.",

    error:
      "Please complete all fields and enter a valid mobile number.",

    brand: "Maya’s LALA Food Products",
    brandLine: "Authentic Flavours of Solapur.",
  },

  mr: {
    eyebrow: "आमच्याशी संपर्क साधा",

    heading: "आपल्याशी संवाद",
    headingAccent: "साधायला आवडेल.",

    description:
      "सोलापूरच्या पारंपरिक चवीपासून तुमच्या रोजच्या जेवणापर्यंत, आम्ही तुमच्या सोबत आहोत. उत्पादनांची माहिती, ऑर्डर आणि इतर चौकशीसाठी आमच्याशी संपर्क साधा.",

    addressLabel: "आमचा पत्ता",

    address:
  "सिद्धलक्ष्मी महिला गृह उद्योग, नरसिंह हाईट्स, कडादी शाळेजवळ, भवानी पेठ, सोलापूर, महाराष्ट्र – ४१३००२.",

    directions: "पत्ता शोधा",

    phoneLabel: "आम्हाला फोन करा",

    websiteLabel: "आमची वेबसाईट",

    whatsappHeading: "लगेच संपर्क साधायचा आहे?",

    whatsappDescription:
      "WhatsApp वर थेट आमच्याशी संवाद साधा.",

    whatsapp: "चॅट करा",

    whatsappMessage:
      "नमस्कार! मला मायाज लाला फूड प्रॉडक्ट्सच्या उत्पादनांची माहिती हवी आहे.",

    formEyebrow: "आमच्याशी संवाद साधा",

    formHeading: "आम्हाला संदेश पाठवा",

    formDescription:
      "तुमची चौकशी आम्हाला कळवा.",

    name: "पूर्ण नाव",
    namePlaceholder: "तुमचे नाव टाका",

    phone: "मोबाईल नंबर",
    phonePlaceholder: "मोबाईल नंबर टाका",

    email: "ई-मेल आयडी",
    emailPlaceholder: "ई-मेल आयडी टाका",

    subject: "विषय",
    subjectPlaceholder: "चौकशीचा विषय लिहा",

    message: "संदेश",
    messagePlaceholder: "तुमचा संदेश येथे लिहा...",

    submit: "संदेश पाठवा",

    note: "संदेश पाठवण्यासाठी WhatsApp वर पुढे जा.",

    error:
      "कृपया सर्व माहिती आणि योग्य मोबाईल नंबर भरा.",

    brand: "मायाज लाला फूड प्रॉडक्ट्स",
    brandLine: "सोलापूरची अस्सल पारंपरिक चव.",
  },
};

// ==========================================
// FORM INPUT COMPONENT
// ==========================================

function InputField({
  icon: Icon,
  label,
  name,
  type = "text",
  value,
  placeholder,
  onChange,
  ...props
}) {
  return (
    <div className="min-w-0">

      <label
        htmlFor={`contact-${name}`}
        className="
          mb-2 block text-[12px]
          font-semibold text-[#633B40]
          sm:text-[13px]
        "
      >
        {label}
        <span className="ml-1 text-[#843642]">*</span>
      </label>

      <div className="group relative">

        <Icon
          size={17}
          strokeWidth={1.65}
          className="
            pointer-events-none absolute
            left-3.5 top-1/2
            -translate-y-1/2
            text-[#A98D7E]
            transition-colors duration-300
            group-focus-within:text-[#843642]
          "
        />

        <input
          id={`contact-${name}`}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          {...props}
          className="
            h-[49px] w-full
            rounded-[8px]
            border border-[#E7DCD3]
            bg-[#FAF7F3]
            pl-10 pr-3
            text-[13px] text-[#4D3034]
            outline-none
            transition-all duration-300
            placeholder:text-[#998A81]
            hover:border-[#C9A16C]
            focus:border-[#843642]
            focus:bg-white
            focus:ring-[3px]
            focus:ring-[#843642]/[0.06]
            sm:h-[52px]
          "
        />

      </div>
    </div>
  );
}

// ==========================================
// CONTACT INFORMATION ROW
// ==========================================

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  external = false,
  children,
}) {
  return (
    <div className="
      group flex items-start gap-4
      border-b border-[#E6D9CE]
      py-4 sm:gap-5 sm:py-5
    ">

      {/* CONTACT ICON */}

      <div className="
        flex h-[49px] w-[49px]
        shrink-0 items-center justify-center
        rounded-[14px]
        border border-[#E7D7C9]
        bg-[#F6EAE0]
        text-[#843642]
        transition-all duration-500
        group-hover:-translate-y-1
        group-hover:border-[#843642]
        group-hover:bg-[#843642]
        group-hover:text-[#F1C98E]
        sm:h-[55px] sm:w-[55px]
      ">
        <Icon
          size={23}
          strokeWidth={1.65}
        />
      </div>

      {/* CONTACT CONTENT */}

      <div className="min-w-0 flex-1">

        <p className="
          text-[11px] font-medium
          text-[#947C6E]
          sm:text-[12px]
        ">
          {label}
        </p>

        {href ? (
          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={
              external
                ? "noopener noreferrer"
                : undefined
            }
            className="
              mt-1 inline-flex max-w-full
              items-center gap-2
              break-words text-[15px]
              font-semibold text-[#633B40]
              transition-colors
              hover:text-[#843642]
              sm:text-[17px]
            "
          >
            <span className="min-w-0 break-all">
              {value}
            </span>

            <ArrowUpRight
              size={15}
              className="
                shrink-0 text-[#B38B60]
                transition-transform duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>
        ) : (
          <p className="
            mt-1.5 max-w-[390px]
            text-[13px] font-medium
            leading-[1.85]
            text-[#633B40]
            sm:text-[14px]
          ">
            {value}
          </p>
        )}

        {children}

      </div>
    </div>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function ContactInformation() {
  const { language } = useContext(LanguageContext);

  const t = content[language === "mr" ? "mr" : "en"];

  const reducedMotion = useReducedMotion();

  const [form, setForm] = useState(initialForm);
  const [hasError, setHasError] = useState(false);

  // ========================================
  // ANIMATION CONFIGURATION
  // ========================================

  const reveal = (delay = 0, y = 18) => ({
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
      duration: reducedMotion ? 0 : 0.7,
      delay: reducedMotion ? 0 : delay,
      ease,
    },
  });

  // ========================================
  // INPUT HANDLER
  // ========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        name === "phone"
          ? value.replace(/\D/g, "").slice(0, 10)
          : value,
    }));

    setHasError(false);
  };

  // ========================================
  // WHATSAPP DIRECT LINK
  // ========================================

  const whatsappLink =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      t.whatsappMessage
    )}`;

  // ========================================
  // FORM SUBMISSION
  // ========================================

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !/^\d{10}$/.test(form.phone) ||
      !form.email.trim() ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      setHasError(true);
      return;
    }

    const message = [
      "*MAYA'S LALA FOOD PRODUCTS*",
      "",
      "*New Website Enquiry*",
      "",
      `*Name:* ${form.name.trim()}`,
      `*Mobile:* ${form.phone}`,
      `*Email:* ${form.email.trim()}`,
      `*Subject:* ${form.subject.trim()}`,
      "",
      `*Message:* ${form.message.trim()}`,
      "",
      "Thank you!",
    ].join("\n");

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message
      )}`;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="contact-information"
      aria-labelledby="contact-heading"
      className="
        relative isolate overflow-hidden
        bg-[#FFFBF7]
        py-10 sm:py-14 lg:py-16
      "
    >

      {/* ======================================
          SOFT BACKGROUND
      ====================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          inset-0 -z-20
          bg-[linear-gradient(120deg,#FFFBF7_0%,#F8F0E7_48%,#FFFBF7_100%)]
        "
      />

      {/* DECORATIVE BACKGROUND TYPOGRAPHY */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-14 -left-8 -z-10
          select-none whitespace-nowrap
          font-['Poppins']
          text-[140px] font-black
          leading-none tracking-[-10px]
          text-[#843642]/[0.025]
          sm:text-[210px] lg:text-[260px]
        "
      >
        LALA
      </div>

      <div className="
        mx-auto max-w-[1320px]
        px-5 sm:px-8 lg:px-10
      ">

        <div className="
          grid items-start gap-9
          lg:grid-cols-[0.85fr_1.15fr]
          lg:gap-14 xl:gap-20
        ">

          {/* ==================================
              LEFT SIDE — CONTACT INFORMATION
          ================================== */}

          <div className="min-w-0 lg:py-3">

            {/* HEADING */}

            <motion.div {...reveal()}>

              <div className="
                mb-4 flex items-center gap-3
              ">

                <span className="
                  h-[2px] w-9 bg-[#C9A16C]
                " />

                <span className="
                  text-[10px] font-bold
                  uppercase tracking-[2px]
                  text-[#A77C50]
                  sm:text-[11px]
                ">
                  {t.eyebrow}
                </span>

              </div>

              <h2
                id="contact-heading"
                className="
                  font-['Poppins']
                  text-[30px] font-semibold
                  leading-[1.25]
                  tracking-[-1px]
                  text-[#4D3034]
                  sm:text-[38px]
                  lg:text-[43px]
                "
              >
                {t.heading}

                <span className="
                  block text-[#843642]
                ">
                  {t.headingAccent}
                </span>

              </h2>

              <p className="
                mt-4 max-w-[470px]
                text-[13px] leading-[1.9]
                text-[#806E65]
                sm:text-[14px]
              ">
                {t.description}
              </p>

            </motion.div>

            {/* CONTACT INFORMATION ROWS */}

            <div className="mt-4">

              {/* ADDRESS */}

              <motion.div {...reveal(0.08)}>

                <ContactRow
                  icon={MapPin}
                  label={t.addressLabel}
                  value={t.address}
                >

                  <a
                    href={MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-2.5 inline-flex
                      items-center gap-1.5
                      text-[11px] font-semibold
                      text-[#843642]
                      transition-colors
                      hover:text-[#A77C50]
                      sm:text-[12px]
                    "
                  >
                    <Navigation size={13} />

                    {t.directions}

                    <ArrowUpRight size={13} />
                  </a>

                </ContactRow>

              </motion.div>

              {/* PHONE */}

              <motion.div {...reveal(0.14)}>

                <ContactRow
                  icon={Phone}
                  label={t.phoneLabel}
                  value={PHONE}
                  href={`tel:+${WHATSAPP_NUMBER}`}
                />

              </motion.div>

              

            </div>

            {/* ==================================
                COMPACT WHATSAPP BANNER
            ================================== */}

            <motion.div
              {...reveal(0.25)}
              className="
                relative isolate mt-6
                overflow-hidden rounded-[15px]
                bg-[#843642]
                px-4 py-4 sm:px-5
              "
            >

              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute
                  -right-12 -top-16 -z-10
                  h-44 w-44 rounded-full
                  border border-[#F1C98E]/20
                  bg-[#F1C98E]/[0.04]
                "
              />

              <div className="
                flex flex-wrap items-center
                justify-between gap-4
              ">

                <div className="
                  flex min-w-0 flex-1
                  items-center gap-3
                ">

                  <div className="
                    relative flex h-11 w-11
                    shrink-0 items-center
                    justify-center rounded-full
                    bg-white/10 text-[#F1C98E]
                  ">

                    <MessageCircle
                      size={23}
                      strokeWidth={1.6}
                    />

                  </div>

                  <div>

                    <h3 className="
                      text-[12px] font-semibold
                      leading-relaxed text-white
                      sm:text-[13px]
                    ">
                      {t.whatsappHeading}
                    </h3>

                    <p className="
                      mt-1 text-[10px]
                      leading-relaxed
                      text-[#EDD3D1]
                      sm:text-[11px]
                    ">
                      {t.whatsappDescription}
                    </p>

                  </div>
                </div>

                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={
                    reducedMotion
                      ? undefined
                      : { scale: 0.96 }
                  }
                  className="
                    group flex shrink-0
                    items-center gap-2
                    rounded-[8px]
                    bg-[#F1C98E]
                    px-3.5 py-3
                    text-[11px] font-bold
                    text-[#65323A]
                    transition-colors
                    hover:bg-[#FFE2B7]
                    sm:text-[12px]
                  "
                >

                  {t.whatsapp}

                  <ArrowUpRight
                    size={15}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />

                </motion.a>

              </div>
            </motion.div>

            {/* BRAND SIGNATURE */}

            <motion.div
              {...reveal(0.3)}
              className="
                mt-5 flex items-center gap-3
              "
            >

              <span className="
                h-8 w-[2px] shrink-0
                bg-[#C9A16C]
              " />

              <div>
                <p className="
                  text-[12px] font-semibold
                  text-[#843642]
                  sm:text-[13px]
                ">
                  {t.brand}
                </p>

                <p className="
                  mt-0.5 text-[11px]
                  italic text-[#947C6E]
                ">
                  {t.brandLine}
                </p>
              </div>

            </motion.div>

          </div>

          {/* ==================================
              RIGHT SIDE — CONTACT FORM
          ================================== */}

          <motion.div
            {...reveal(0.06, 25)}
            className="
              relative isolate min-w-0
              overflow-hidden
              rounded-[20px]
              border border-[#EBDDD2]
              bg-white
              px-5 py-6
              shadow-[0_18px_55px_rgba(99,59,64,0.07)]
              sm:rounded-[25px] sm:p-8
              lg:p-9
            "
          >

            {/* ANIMATED TOP ACCENT */}

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
                duration: reducedMotion ? 0 : 1,
                ease,
              }}
              className="
                absolute inset-x-0 top-0
                h-[4px] origin-left
                bg-gradient-to-r
                from-[#843642]
                via-[#C9A16C]
                to-[#F1C98E]
              "
            />

            {/* FORM HEADER */}

            <motion.div
              {...reveal(0.1)}
              className="
                mb-6 flex items-start
                justify-between gap-3
              "
            >

              <div>

                <span className="
                  text-[10px] font-bold
                  uppercase tracking-[1.8px]
                  text-[#A77C50]
                ">
                  {t.formEyebrow}
                </span>

                <h3 className="
                  mt-2 font-['Poppins']
                  text-[23px] font-semibold
                  leading-[1.35]
                  tracking-[-0.5px]
                  text-[#843642]
                  sm:text-[28px]
                ">
                  {t.formHeading}
                </h3>

                <p className="
                  mt-2 text-[12px]
                  leading-[1.8]
                  text-[#88756A]
                  sm:text-[13px]
                ">
                  {t.formDescription}
                </p>

              </div>

              {/* FORM HEADER ICON */}

              <div className="
                flex h-12 w-12 shrink-0
                items-center justify-center
                rounded-[15px]
                bg-[#F8EEE4]
                text-[#843642]
                sm:h-[58px] sm:w-[58px]
              ">

                <motion.div
                  whileHover={
                    reducedMotion
                      ? undefined
                      : { rotate: -8, scale: 1.08 }
                  }
                >
                  <Send
                    size={26}
                    strokeWidth={1.4}
                  />
                </motion.div>

              </div>

            </motion.div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* FULL NAME & MOBILE NUMBER */}

              <motion.div
                {...reveal(0.12)}
                className="
                  grid grid-cols-1 gap-4
                  sm:grid-cols-2
                "
              >

                <InputField
                  icon={UserRound}
                  label={t.name}
                  name="name"
                  value={form.name}
                  placeholder={t.namePlaceholder}
                  onChange={handleChange}
                  autoComplete="name"
                  maxLength={100}
                />

                <InputField
                  icon={Phone}
                  label={t.phone}
                  name="phone"
                  type="tel"
                  value={form.phone}
                  placeholder={t.phonePlaceholder}
                  onChange={handleChange}
                  autoComplete="tel-national"
                  inputMode="numeric"
                  maxLength={10}
                  pattern="[0-9]{10}"
                />

              </motion.div>

              {/* EMAIL ADDRESS */}

              <motion.div {...reveal(0.17)}>

                <InputField
                  icon={Mail}
                  label={t.email}
                  name="email"
                  type="email"
                  value={form.email}
                  placeholder={t.emailPlaceholder}
                  onChange={handleChange}
                  autoComplete="email"
                  maxLength={150}
                />

              </motion.div>

             

              {/* MESSAGE */}

              <motion.div {...reveal(0.23)}>

                <label
                  htmlFor="contact-message"
                  className="
                    mb-2 block text-[12px]
                    font-semibold text-[#633B40]
                    sm:text-[13px]
                  "
                >
                  {t.message}

                  <span className="
                    ml-1 text-[#843642]
                  ">
                    *
                  </span>
                </label>

                <div className="group relative">

                  <MessageSquare
                    size={17}
                    strokeWidth={1.65}
                    className="
                      pointer-events-none
                      absolute left-3.5 top-4
                      text-[#A98D7E]
                      transition-colors
                      group-focus-within:text-[#843642]
                    "
                  />

                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t.messagePlaceholder}
                    rows={4}
                    maxLength={2000}
                    required
                    className="
                      block min-h-[118px]
                      w-full resize-y
                      rounded-[8px]
                      border border-[#E7DCD3]
                      bg-[#FAF7F3]
                      py-3.5 pl-10 pr-4
                      text-[13px] leading-[1.8]
                      text-[#4D3034]
                      outline-none
                      transition-all duration-300
                      placeholder:text-[#998A81]
                      hover:border-[#C9A16C]
                      focus:border-[#843642]
                      focus:bg-white
                      focus:ring-[3px]
                      focus:ring-[#843642]/[0.06]
                    "
                  />

                </div>
              </motion.div>

              {/* ERROR MESSAGE */}

              {hasError && (
                <p
                  role="alert"
                  className="
                    rounded-lg border
                    border-red-200
                    bg-red-50 px-3 py-2
                    text-[12px] text-red-700
                  "
                >
                  {t.error}
                </p>
              )}

              {/* SUBMIT BUTTON */}

              <motion.div {...reveal(0.26)}>

                <motion.button
                  type="submit"
                  whileTap={
                    reducedMotion
                      ? undefined
                      : { scale: 0.98 }
                  }
                  className="
                    group relative flex w-full
                    items-center justify-between
                    gap-3 overflow-hidden
                    rounded-[9px]
                    bg-[#843642]
                    px-5 py-3.5
                    text-[13px] font-semibold
                    text-white
                    shadow-[0_7px_20px_rgba(132,54,66,0.16)]
                    transition-colors duration-300
                    hover:bg-[#652630]
                    sm:text-[14px]
                  "
                >

                  {/* BUTTON SHINE */}

                  <span className="
                    pointer-events-none absolute
                    inset-0 -translate-x-full
                    skew-x-12
                    bg-gradient-to-r
                    from-transparent
                    via-white/10
                    to-transparent
                    transition-transform
                    duration-700
                    motion-safe:group-hover:translate-x-full
                  " />

                  <span className="
                    flex items-center gap-2.5
                  ">

                    <Send
                      size={17}
                      strokeWidth={1.7}
                      className="text-[#F1C98E]"
                    />

                    {t.submit}

                  </span>

                  <span className="
                    flex h-7 w-7
                    items-center justify-center
                    rounded-full
                    bg-white/10
                    text-[#F1C98E]
                    transition-all duration-300
                    group-hover:bg-[#F1C98E]
                    group-hover:text-[#843642]
                  ">
                    <ArrowRight
                      size={16}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                      "
                    />
                  </span>

                </motion.button>

                <p className="
                  mt-3 flex items-center
                  justify-center gap-2
                  text-center text-[11px]
                  leading-relaxed
                  text-[#947C6E]
                ">

                  <MessageCircle
                    size={14}
                    className="
                      shrink-0 text-[#843642]
                    "
                  />

                  {t.note}

                </p>

              </motion.div>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
