import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

import {
  ArrowUpRight,
  MessageCircle,
  X,
  Package,
  UserRound,
  Phone,
  MapPin,
  ShoppingBag,
  Send,
} from "lucide-react";

import { LanguageContext } from "../../context/LanguageContext";

// ==========================================
// WHATSAPP NUMBER
// ==========================================

const WHATSAPP_NUMBER = "918766493543";

// ==========================================
// PRODUCTS
// ==========================================

const products = [
  {
    id: 1,
    image: "/p1.png",
    en: "Solapuri Shenga Chutney",
    mr: "सोलापुरी शेंगा चटणी",
    descEn:
      "Bold Solapuri flavour inspired by traditional homemade recipes.",
    descMr:
      "पारंपरिक घरगुती पाककृतीतून आलेली अस्सल झणझणीत सोलापुरी चव.",
  },
  {
    id: 2,
    image: "/p2.png",
    en: "Roasted Peanuts",
    mr: "भाजलेले शेंगदाणे",
    descEn:
      "Crunchy, flavourful roasted peanuts for everyday snacking.",
    descMr:
      "रोजच्या खाण्यासाठी खमंग आणि कुरकुरीत भाजलेले शेंगदाणे.",
  },
  {
    id: 3,
    image: "/p3.png",
    en: "Blanched Peanuts",
    mr: "साल काढलेले शेंगदाणे",
    descEn:
      "Convenient skinless peanuts for a variety of recipes.",
    descMr:
      "विविध घरगुती पदार्थांसाठी उपयुक्त साल काढलेले शेंगदाणे.",
  },
  {
    id: 4,
    image: "/p4.png",
    en: "Masala Peanuts",
    mr: "मसाला शेंगदाणे",
    descEn:
      "A delicious combination of peanuts and savoury spices.",
    descMr:
      "शेंगदाणे आणि मसाल्यांच्या मिश्रणातून तयार झालेली खमंग चव.",
  },
  {
    id: 5,
    image: "/p5.png",
    en: "Crunchy Masala Peanuts",
    mr: "कुरकुरीत मसाला शेंगदाणे",
    descEn:
      "A satisfying crunch with a bold masala flavour.",
    descMr:
      "प्रत्येक घासात कुरकुरीतपणा आणि मसाल्यांची झणझणीत चव.",
  },
  {
    id: 6,
    image: "/p6.png",
    en: "Spicy Peanut Chivda",
    mr: "तिखट शेंगदाणा चिवडा",
    descEn:
      "A crunchy snack with familiar traditional spicy flavours.",
    descMr:
      "पारंपरिक तिखट चवीचा कुरकुरीत आणि खमंग चिवडा.",
  },
  {
    id: 7,
    image: "/p7.png",
    en: "Peanut Ladoo",
    mr: "शेंगदाणा लाडू",
    descEn:
      "A traditional peanut sweet with a homemade touch.",
    descMr:
      "घरगुती गोडव्याची आठवण करून देणारे पारंपरिक शेंगदाणा लाडू.",
  },
];

// ==========================================
// BILINGUAL CONTENT
// ==========================================

const translations = {
  en: {
    eyebrow: "EXPLORE MAYA’S LALA COLLECTION",
    heading: "Authentic Flavours.",
    headingAccent: "Traditional Favourites.",
    subtitle:
      "Discover our range of Solapuri specialities, delicious peanut-based snacks and traditional Maharashtrian food products.",
    collection: "Our Product Collection",
    productsAvailable: "Products",
    signature: "Signature Product",
    enquiry: "Enquire Now",
    formTitle: "Product Enquiry",
    formSubtitle:
      "Fill in your details to connect with us on WhatsApp.",
    product: "Selected Product",
    name: "Full Name",
    namePlaceholder: "Enter your full name",
    phone: "Mobile Number",
    phonePlaceholder: "Enter mobile number",
    city: "City / Location",
    cityPlaceholder: "Enter your city",
    quantity: "Required Quantity",
    quantityPlaceholder: "e.g. 2 packets or 1 kg",
    message: "Additional Requirements",
    messagePlaceholder: "Tell us your requirements...",
    optional: "Optional",
    submit: "Send Enquiry on WhatsApp",
    close: "Close enquiry form",
    note: "Continue to WhatsApp to send your enquiry.",
    numberError: "WhatsApp number is not configured.",
    nameError: "Please enter your full name.",
    phoneError: "Please enter a 10-digit mobile number.",
    cityError: "Please enter your city or location.",
    quantityError: "Please enter the required quantity.",
  },

  mr: {
    eyebrow: "मायाज लाला उत्पादन संग्रह",
    heading: "अस्सल चव.",
    headingAccent: "पारंपरिक आवड.",
    subtitle:
      "सोलापूरचे खास पदार्थ, शेंगदाण्यांपासून बनवलेले खमंग स्नॅक्स आणि महाराष्ट्रातील पारंपरिक खाद्यपदार्थांचा संग्रह.",
    collection: "आमचा उत्पादन संग्रह",
    productsAvailable: "उत्पादने",
    signature: "आमचे खास उत्पादन",
    enquiry: "चौकशी करा",
    formTitle: "उत्पादन चौकशी",
    formSubtitle:
      "WhatsApp वर आमच्याशी संपर्क साधण्यासाठी तुमची माहिती भरा.",
    product: "निवडलेले उत्पादन",
    name: "पूर्ण नाव",
    namePlaceholder: "तुमचे पूर्ण नाव",
    phone: "मोबाईल नंबर",
    phonePlaceholder: "मोबाईल नंबर टाका",
    city: "शहर / ठिकाण",
    cityPlaceholder: "तुमच्या शहराचे नाव",
    quantity: "आवश्यक प्रमाण",
    quantityPlaceholder: "उदा. २ पाकिटे किंवा १ किलो",
    message: "अतिरिक्त माहिती",
    messagePlaceholder: "तुमची आवश्यकता लिहा...",
    optional: "ऐच्छिक",
    submit: "WhatsApp वर चौकशी पाठवा",
    close: "चौकशी फॉर्म बंद करा",
    note: "चौकशी पाठवण्यासाठी WhatsApp वर पुढे जा.",
    numberError: "WhatsApp नंबर सेट केलेला नाही.",
    nameError: "कृपया तुमचे पूर्ण नाव टाका.",
    phoneError: "कृपया १० अंकी मोबाईल नंबर टाका.",
    cityError: "कृपया तुमच्या शहराचे नाव टाका.",
    quantityError: "कृपया आवश्यक प्रमाण टाका.",
  },
};

const ease = [0.22, 1, 0.36, 1];

// ==========================================
// PRODUCT CARD
// ==========================================

function ProductCard({
  product,
  index,
  lang,
  t,
  onSelect,
  reducedMotion,
}) {
  return (
    <motion.article
      initial={reducedMotion ? false : { y: 25 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: reducedMotion ? 0 : 0.65,
        delay: reducedMotion ? 0 : (index % 4) * 0.09,
        ease,
      }}
      whileHover={reducedMotion ? undefined : { y: -6 }}
      className="
        group relative flex h-full min-w-0 flex-col
        overflow-hidden rounded-[18px]
        border border-[#EBDDD5] bg-white
        shadow-[0_8px_25px_rgba(91,49,46,0.045)]
        transition-shadow duration-500
        hover:shadow-[0_18px_45px_rgba(91,49,46,0.13)]
        sm:rounded-[24px]
      "
    >
      {/* PRODUCT IMAGE */}

      <button
        type="button"
        onClick={() => onSelect(product)}
        aria-label={`${t.enquiry}: ${product[lang]}`}
        className="
          relative flex aspect-square w-full
          items-center justify-center overflow-hidden
          bg-[radial-gradient(circle_at_50%_40%,#FFFFFF_0%,#FBF5F0_48%,#EBD9D2_100%)]
        "
      >
        {/* SIGNATURE LABEL */}

        {product.id === 1 && (
          <span
            className="
              absolute left-2 top-2 z-20
              rounded-full bg-[#843642]
              px-2.5 py-1.5 text-[8px]
              font-semibold text-white
              sm:left-4 sm:top-4 sm:px-3 sm:text-[10px]
            "
          >
            {t.signature}
          </span>
        )}

        {/* DECORATIVE PRODUCT BACKGROUND */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            h-[70%] w-[70%]
            rounded-full bg-white/60 blur-2xl
          "
        />

        {/* PRODUCT PHOTO */}

        <img
          src={product.image}
          alt={product[lang]}
          loading={index < 4 ? "eager" : "lazy"}
          decoding="async"
          draggable={false}
          className="
            relative z-10 h-[94%] w-[94%]
            select-none object-contain
            drop-shadow-[0_14px_16px_rgba(69,37,29,0.15)]
            transition-transform duration-700
            motion-safe:group-hover:scale-110
          "
        />

        {/* GLASS SHINE */}

        <div
          className="
            pointer-events-none absolute
            -left-[70%] top-0 z-20
            h-full w-[35%] -skew-x-12
            bg-gradient-to-r
            from-transparent via-white/60 to-transparent
            transition-transform duration-1000
            motion-safe:group-hover:translate-x-[500%]
          "
        />

        {/* QUICK ENQUIRY ICON */}

        <span
          className="
            absolute bottom-3 right-3 z-20
            flex h-8 w-8 items-center justify-center
            rounded-full border border-white/70
            bg-white/85 text-[#843642]
            shadow-sm backdrop-blur-md
            transition-colors duration-300
            group-hover:bg-[#843642]
            group-hover:text-white
            sm:h-10 sm:w-10
          "
        >
          <ArrowUpRight size={18} strokeWidth={1.7} />
        </span>
      </button>

      {/* PRODUCT CONTENT */}

      <div className="relative flex flex-1 flex-col p-3 sm:p-5">
        <button
          type="button"
          onClick={() => onSelect(product)}
          className="text-left"
        >
          <h3
            className="
              text-[13px] font-bold
              leading-[1.5] text-[#532E32]
              sm:text-[17px] lg:text-[18px]
            "
          >
            {product[lang]}
          </h3>
        </button>

        <p
          className="
            mb-4 mt-2 flex-1
            text-[11px] leading-[1.75]
            text-[#826D67]
            sm:text-[13px]
          "
        >
          {lang === "mr" ? product.descMr : product.descEn}
        </p>

        {/* ENQUIRY BUTTON */}

        <button
          type="button"
          onClick={() => onSelect(product)}
          className="
            group/button flex w-full
            items-center justify-center gap-1.5
            rounded-[9px] border border-[#843642]
            bg-[#843642] px-2 py-2.5
            text-[10px] font-semibold text-white
            transition-all duration-300
            hover:border-[#63252F]
            hover:bg-[#63252F]
            active:scale-[0.98]
            sm:gap-2 sm:rounded-[11px]
            sm:px-4 sm:py-3 sm:text-[12px]
          "
        >
          <MessageCircle
            size={16}
            strokeWidth={1.8}
            className="shrink-0"
          />

          <span>{t.enquiry}</span>

          <ArrowUpRight
            size={14}
            className="
              hidden transition-transform
              duration-300
              group-hover/button:-translate-y-0.5
              group-hover/button:translate-x-0.5
              sm:block
            "
          />
        </button>
      </div>
    </motion.article>
  );
}

// ==========================================
// FORM INPUT COMPONENT
// ==========================================

function FormInput({
  label,
  icon: Icon,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = true,
  ...rest
}) {
  return (
    <div className="min-w-0">
      <label
        htmlFor={`enquiry-${name}`}
        className="
          mb-1.5 block text-[12px]
          font-semibold text-[#57383A]
        "
      >
        {label}

        {required && (
          <span className="ml-1 text-[#843642]">*</span>
        )}
      </label>

      <div
        className="
          flex items-center gap-3
          rounded-[10px] border border-[#E5D8CF]
          bg-[#FFFCF9] px-3
          transition-all duration-300
          focus-within:border-[#843642]
          focus-within:ring-2
          focus-within:ring-[#843642]/10
        "
      >
        <Icon
          size={17}
          strokeWidth={1.6}
          className="shrink-0 text-[#A78070]"
        />

        <input
          id={`enquiry-${name}`}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          {...rest}
          className="
            min-w-0 w-full bg-transparent
            py-3 text-[14px] text-[#57383A]
            outline-none
            placeholder:text-[12px]
            placeholder:text-[#AA9790]
          "
        />
      </div>
    </div>
  );
}

// ==========================================
// WHATSAPP ENQUIRY POPUP
// ==========================================

function EnquiryModal({
  product,
  lang,
  t,
  onClose,
  reducedMotion,
}) {
  const modalRef = useRef(null);
  const closeRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    quantity: "",
    message: "",
  });

  const [error, setError] = useState("");

  // ========================================
  // BODY SCROLL LOCK & KEYBOARD ACCESS
  // ========================================

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "Tab") {
        const focusable = modalRef.current?.querySelectorAll(
          'button:not([disabled]), input:not([disabled]), textarea:not([disabled]), a[href]'
        );

        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (
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

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      previousFocus?.focus();
    };
  }, [onClose]);

  // ========================================
  // HANDLE INPUT
  // ========================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    let updatedValue = value;

    if (name === "phone") {
      // Support Marathi and English digits

      updatedValue = value
        .replace(/[०-९]/g, (digit) =>
          String("०१२३४५६७८९".indexOf(digit))
        )
        .replace(/\D/g, "")
        .slice(0, 10);
    }

    setForm((previous) => ({
      ...previous,
      [name]: updatedValue,
    }));

    setError("");
  };

  // ========================================
  // SIMPLE FORM VALIDATION
  // ========================================

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    // Full Name

    if (!form.name.trim()) {
      setError(t.nameError);
      document.getElementById("enquiry-name")?.focus();
      return;
    }

    // Mobile Number

    if (form.phone.length !== 10) {
      setError(t.phoneError);
      document.getElementById("enquiry-phone")?.focus();
      return;
    }

    // City

    if (!form.city.trim()) {
      setError(t.cityError);
      document.getElementById("enquiry-city")?.focus();
      return;
    }

    // Required Quantity

    if (!form.quantity.trim()) {
      setError(t.quantityError);
      document.getElementById("enquiry-quantity")?.focus();
      return;
    }

    // Check WhatsApp Number Configuration

    if (!/^91\d{10}$/.test(WHATSAPP_NUMBER)) {
      setError(t.numberError);
      return;
    }

    // ======================================
    // WHATSAPP MESSAGE
    // ======================================

    const message = [
      "*MAYA'S LALA FOOD PRODUCTS*",
      "*New Product Enquiry*",
      "",
      `*Product:* ${product.en}`,
      `*Name:* ${form.name.trim()}`,
      `*Mobile:* ${form.phone}`,
      `*City:* ${form.city.trim()}`,
      `*Quantity:* ${form.quantity.trim()}`,
      `*Requirements:* ${
        form.message.trim() || "Not specified"
      }`,
      "",
      "Please share the product price and availability.",
      "Thank you!",
    ].join("\n");

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <motion.div
      initial={{ opacity: reducedMotion ? 1 : 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: reducedMotion ? 1 : 0 }}
      transition={{
        duration: reducedMotion ? 0 : 0.25,
      }}
      onClick={onClose}
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        overflow-y-auto bg-[#2C171D]/65
        p-3 backdrop-blur-sm sm:p-5
      "
    >
      <motion.div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-heading"
        initial={
          reducedMotion
            ? false
            : { opacity: 0, scale: 0.94, y: 25 }
        }
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={
          reducedMotion
            ? undefined
            : { opacity: 0, scale: 0.96, y: 15 }
        }
        transition={{
          duration: reducedMotion ? 0 : 0.4,
          ease,
        }}
        onClick={(event) => event.stopPropagation()}
        className="
          relative max-h-[92dvh] w-full
          max-w-[540px] overflow-y-auto
          overscroll-contain rounded-[22px]
          bg-[#FFFCF9]
          shadow-[0_25px_80px_rgba(25,10,15,0.3)]
          sm:rounded-[26px]
        "
      >
        {/* ====================================
            POPUP HEADER
        ==================================== */}

        <div
          className="
            relative overflow-hidden
            bg-[#843642] px-5 py-5
            text-white sm:px-7 sm:py-6
          "
        >
          <div
            className="
              pointer-events-none absolute
              -right-16 -top-16 h-44 w-44
              rounded-full border border-white/10
            "
          />

          {/* CLOSE BUTTON */}

          <button
            ref={closeRef}
            type="button"
            aria-label={t.close}
            onClick={onClose}
            className="
              absolute right-4 top-4
              z-10 flex h-8 w-8
              items-center justify-center
              rounded-full bg-white/10
              transition-colors
              hover:bg-white/25
            "
          >
            <X size={18} />
          </button>

          <div className="flex items-center gap-3 pr-8">
            <div
              className="
                flex h-11 w-11 shrink-0
                items-center justify-center
                rounded-[12px] bg-white/10
                text-[#F1C98E]
              "
            >
              <ShoppingBag size={22} strokeWidth={1.6} />
            </div>

            <div>
              <h2
                id="enquiry-heading"
                className="
                  font-['Poppins']
                  text-[20px] font-semibold
                  sm:text-[23px]
                "
              >
                {t.formTitle}
              </h2>

              <p
                className="
                  mt-1 text-[11px]
                  leading-relaxed text-white/75
                  sm:text-[12px]
                "
              >
                {t.formSubtitle}
              </p>
            </div>
          </div>
        </div>

        {/* ====================================
            SELECTED PRODUCT
        ==================================== */}

        <div
          className="
            mx-5 mt-5 flex items-center gap-4
            rounded-[13px] border border-[#EBDBD1]
            bg-[#F7EDE6] p-3 sm:mx-7
          "
        >
          <div
            className="
              flex h-[80px] w-[80px] shrink-0
              items-center justify-center
              rounded-[10px] bg-white/70
            "
          >
            <img
              src={product.image}
              alt={product[lang]}
              className="h-full w-full object-contain"
            />
          </div>

          <div className="min-w-0">
            <span
              className="
                text-[10px] font-semibold
                uppercase tracking-[1px]
                text-[#A77C65]
              "
            >
              {t.product}
            </span>

            <h3
              className="
                mt-1 text-[16px]
                font-bold leading-snug
                text-[#843642]
              "
            >
              {product[lang]}
            </h3>

            <span
              className="
                mt-1 block text-[11px]
                text-[#8D7770]
              "
            >
              Maya’s LALA Food Products
            </span>
          </div>
        </div>

        {/* ====================================
            ENQUIRY FORM
        ==================================== */}

        <form
          onSubmit={handleSubmit}
          noValidate
          className="
            space-y-4 px-5 pb-6 pt-5
            sm:px-7 sm:pb-7
          "
        >
          {/* FULL NAME */}

          <FormInput
            label={t.name}
            icon={UserRound}
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={t.namePlaceholder}
            autoComplete="name"
            maxLength={80}
          />

          {/* PHONE AND CITY */}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormInput
              label={t.phone}
              icon={Phone}
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder={t.phonePlaceholder}
              inputMode="numeric"
              autoComplete="tel-national"
              maxLength={10}
            />

            <FormInput
              label={t.city}
              icon={MapPin}
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder={t.cityPlaceholder}
              maxLength={100}
            />
          </div>

          {/* QUANTITY */}

          <FormInput
            label={t.quantity}
            icon={Package}
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            placeholder={t.quantityPlaceholder}
            maxLength={100}
          />

          {/* ADDITIONAL REQUIREMENTS */}

          <div>
            <label
              htmlFor="enquiry-message"
              className="
                mb-1.5 block text-[12px]
                font-semibold text-[#57383A]
              "
            >
              {t.message}

              <span
                className="
                  ml-1 font-normal text-[#AA9790]
                "
              >
                ({t.optional})
              </span>
            </label>

            <textarea
              id="enquiry-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t.messagePlaceholder}
              rows={3}
              maxLength={500}
              className="
                block w-full resize-none
                rounded-[10px] border border-[#E5D8CF]
                bg-[#FFFCF9] p-3
                text-[14px] text-[#57383A]
                outline-none
                transition-all duration-300
                placeholder:text-[12px]
                placeholder:text-[#AA9790]
                focus:border-[#843642]
                focus:ring-2
                focus:ring-[#843642]/10
              "
            />
          </div>

          {/* SIMPLE FORM ERROR */}

          {error && (
            <p
              role="alert"
              className="
                rounded-lg border border-red-100
                bg-red-50 p-3
                text-[12px] text-red-700
              "
            >
              {error}
            </p>
          )}

          {/* WHATSAPP SUBMIT BUTTON */}

          <motion.button
            type="submit"
            whileTap={
              reducedMotion ? undefined : { scale: 0.98 }
            }
            className="
              group flex w-full items-center
              justify-center gap-2.5
              rounded-[12px] bg-[#168B46]
              px-4 py-3.5
              text-[13px] font-semibold text-white
              shadow-[0_8px_22px_rgba(22,139,70,0.18)]
              transition-colors duration-300
              hover:bg-[#10763A]
              sm:text-[14px]
            "
          >
            <MessageCircle size={21} strokeWidth={1.8} />

            <span>{t.submit}</span>

            <Send
              size={16}
              className="
                transition-transform duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </motion.button>

          {/* FORM NOTE */}

          <p
            className="
              text-center text-[10px]
              leading-relaxed text-[#99847B]
              sm:text-[11px]
            "
          >
            {t.note}
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
}

// ==========================================
// MAIN PRODUCT COLLECTION
// ==========================================

export default function ProductCollection() {
  const { language } = useContext(LanguageContext);

  const lang = language === "mr" ? "mr" : "en";
  const t = translations[lang];

  const reducedMotion = useReducedMotion();

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  const closeModal = React.useCallback(() => {
    setSelectedProduct(null);
  }, []);

  return (
    <>
      <section
        id="product-collection"
        aria-labelledby="collection-heading"
        className="
          relative isolate overflow-hidden
          bg-[#FBF5F0]
          py-12 sm:py-16 lg:py-20
        "
      >
        {/* ====================================
            BACKGROUND DESIGN
        ==================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            inset-0 -z-10 overflow-hidden
          "
        >
          <div
            className="
              absolute inset-0
              bg-[linear-gradient(145deg,#FFFBF7_0%,#F8EDE7_55%,#FBF6EF_100%)]
            "
          />

          <div
            className="
              absolute -left-36 top-10
              h-[400px] w-[400px]
              rounded-full bg-[#EBCAC2]/25
              blur-[100px]
            "
          />

          <div
            className="
              absolute -right-36 bottom-10
              h-[450px] w-[450px]
              rounded-full bg-[#E6C49D]/25
              blur-[110px]
            "
          />
        </div>

        <div
          className="
            mx-auto max-w-[1350px]
            px-4 sm:px-8 lg:px-10
          "
        >
          {/* ====================================
              SECTION INTRODUCTION
          ==================================== */}

          <motion.div
            initial={
              reducedMotion
                ? false
                : { opacity: 0, y: 20 }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: reducedMotion ? 0 : 0.75,
              ease,
            }}
            className="
              mx-auto mb-9 max-w-[850px]
              text-center sm:mb-12
            "
          >
            {/* EYEBROW */}

            <div
              className="
                mb-4 flex items-center
                justify-center gap-3
              "
            >
              <span className="h-px w-7 shrink-0 bg-[#C9A16C]" />

              <span
                className="
                  text-[9px] font-bold
                  uppercase tracking-[1.8px]
                  text-[#A77C50]
                  sm:text-[11px]
                "
              >
                {t.eyebrow}
              </span>

              <span className="h-px w-7 shrink-0 bg-[#C9A16C]" />
            </div>

            {/* HEADING */}

            <h2
              id="collection-heading"
              className="
                font-['Poppins']
                text-[25px] font-semibold
                leading-[1.35] tracking-[-0.6px]
                text-[#4D3034]
                sm:text-[31px] lg:text-[35px]
              "
            >
              {t.heading}{" "}

              <span className="text-[#843642]">
                {t.headingAccent}
              </span>
            </h2>

            <p
              className="
                mx-auto mt-4 max-w-[670px]
                text-[13px] leading-[1.9]
                text-[#806E65]
                sm:text-[15px]
              "
            >
              {t.subtitle}
            </p>
          </motion.div>

          {/* ====================================
              COLLECTION HEADER
          ==================================== */}

          <div
            className="
              mb-5 flex items-center
              justify-between gap-3
              border-b border-[#E6D5C8]
              pb-4 sm:mb-7
            "
          >
            <div className="flex items-center gap-2.5">
              <div
                className="
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  rounded-[10px] bg-[#EEDDD3]
                  text-[#843642]
                  sm:h-11 sm:w-11
                "
              >
                <Package size={20} strokeWidth={1.6} />
              </div>

              <h3
                className="
                  text-[14px] font-semibold
                  text-[#633B40]
                  sm:text-[18px]
                "
              >
                {t.collection}
              </h3>
            </div>

            <span
              className="
                shrink-0 rounded-full
                border border-[#E2CABB]
                bg-white/70 px-3 py-1.5
                text-[10px] font-medium
                text-[#843642]
                sm:text-[12px]
              "
            >
              {products.length} {t.productsAvailable}
            </span>
          </div>

          {/* ====================================
              RESPONSIVE PRODUCT GRID
          ==================================== */}

          <div
            className="
              grid grid-cols-2
              items-stretch gap-3
              sm:gap-5 md:grid-cols-3
              lg:grid-cols-4 lg:gap-6
            "
          >
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                lang={lang}
                t={t}
                onSelect={setSelectedProduct}
                reducedMotion={reducedMotion}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          ENQUIRY POPUP
      ====================================== */}

      <AnimatePresence>
        {selectedProduct && (
          <EnquiryModal
            key={selectedProduct.id}
            product={selectedProduct}
            lang={lang}
            t={t}
            onClose={closeModal}
            reducedMotion={reducedMotion}
          />
        )}
      </AnimatePresence>
    </>
  );
}