import React, { useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, FileText } from "lucide-react";
import { LanguageContext } from "../../context/LanguageContext";

// ==========================================
// CERTIFICATE IMAGES
// ==========================================

const certificates = [
  { id: 1, image: "/c1.png" },
  { id: 2, image: "/c2.png" },
  { id: 3, image: "/c3.png" },
];

// ==========================================
// BILINGUAL CONTENT
// ==========================================

const content = {
  en: {
    eyebrow: "BUSINESS COMPLIANCE",
    heading: "GST Registration",
    accent: "Certificate",
    description:
      "Goods and Services Tax registration documents of Siddhalaxmi Mahila Gruh Udyog.",
    close: "Close Preview",
    page: "Page",
    view: "View Certificate",
    unavailable: "Certificate image unavailable.",
  },
  mr: {
    eyebrow: "व्यावसायिक नियमांचे पालन",
    heading: "जीएसटी नोंदणी",
    accent: "प्रमाणपत्र",
    description:
      "सिद्धलक्ष्मी महिला गृह उद्योगाचे वस्तू आणि सेवा कर नोंदणी प्रमाणपत्र.",
    close: "प्रमाणपत्र बंद करा",
    page: "पृष्ठ",
    view: "प्रमाणपत्र पाहा",
    unavailable: "प्रमाणपत्राची प्रत उपलब्ध नाही.",
  },
};

const ease = [0.22, 1, 0.36, 1];

// ==========================================
// CERTIFICATE IMAGE
// ==========================================

function CertificateImage({ src, alt, error, original = false }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex min-h-[180px] w-full flex-col items-center justify-center gap-3 bg-[#F8F5F1] p-5 text-center">
        <FileText
          size={32}
          strokeWidth={1.5}
          className="text-[#843642]"
        />
        <p className="text-[13px] text-[#786A62]">
          {error}
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="eager"
      decoding="async"
      onError={() => setFailed(true)}
      style={{
        display: "block",
        width: "auto",
        height: "auto",
        maxWidth: original ? "none" : "100%",
        maxHeight: "none",
        objectFit: "contain",
        filter: "none",
        transform: "none",
        imageRendering: "auto",
      }}
    />
  );
}

// ==========================================
// ORIGINAL SIZE IMAGE POPUP
// ==========================================

function CertificatePreview({ certificate, t, onClose }) {
  const reducedMotion = useReducedMotion();
  const closeRef = useRef(null);
  const previewRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "Tab") {
        event.preventDefault();

        if (document.activeElement === closeRef.current) {
          previewRef.current?.focus();
        } else {
          closeRef.current?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [onClose]);

  return createPortal(
    <motion.div
      initial={{ opacity: reducedMotion ? 1 : 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reducedMotion ? 0 : 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-3 sm:p-5"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-preview-heading"
        onClick={(event) => event.stopPropagation()}
        className="flex max-h-[94dvh] w-fit max-w-full flex-col overflow-hidden rounded-[8px] bg-white shadow-2xl"
      >
        {/* POPUP HEADER */}

        <div className="flex shrink-0 items-center justify-between gap-5 border-b border-[#E3DAD2] bg-white px-4 py-3 sm:px-5">
          <h3
            id="certificate-preview-heading"
            className="text-[14px] font-semibold leading-relaxed text-[#843642] sm:text-[17px]"
          >
            {t.heading} {t.accent}
          </h3>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[5px] bg-[#843642] text-white transition-colors duration-300 hover:bg-[#63232E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#843642] focus-visible:ring-offset-2"
          >
            <X size={21} />
          </button>
        </div>

        {/* ORIGINAL SIZE CERTIFICATE */}

        <div
          ref={previewRef}
          tabIndex={0}
          aria-label={`${t.page} ${certificate.id}`}
          className="min-h-0 flex-1 overflow-auto overscroll-contain bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#843642]"
        >
          <div className="mx-auto w-max">
            <CertificateImage
              src={certificate.image}
              alt={`${t.heading} ${t.accent} - ${t.page} ${certificate.id}`}
              error={t.unavailable}
              original
            />
          </div>
        </div>
      </div>
    </motion.div>,
    document.body
  );
}

// ==========================================
// MAIN CERTIFICATIONS COMPONENT
// ==========================================

export default function Certifications() {
  const { language } = useContext(LanguageContext);
  const lang = language === "mr" ? "mr" : "en";
  const t = content[lang];

  const reducedMotion = useReducedMotion();
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const closePreview = React.useCallback(() => {
    setSelectedCertificate(null);
  }, []);

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="scroll-mt-[120px] border-y border-[#E8DDD3] bg-[#FBF8F4] py-8 sm:py-10 lg:py-12"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-7 lg:px-10">

        {/* SECTION HEADING */}

        <motion.div
          initial={reducedMotion ? false : { y: 12 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reducedMotion ? 0 : 0.6,
            ease,
          }}
          className="mx-auto mb-7 max-w-[850px] text-center sm:mb-9"
        >
          <p className="mb-2 text-[11px] font-semibold tracking-[1.8px] text-[#986C40]">
            {t.eyebrow}
          </p>

          <h2
            id="certifications-heading"
            className="font-['Poppins'] text-[27px] font-semibold leading-[1.4] tracking-[-0.5px] text-[#482D32] sm:text-[31px] lg:text-[35px]"
          >
            {t.heading}{" "}
            <span className="text-[#843642]">
              {t.accent}
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-[700px] text-[14px] leading-[1.8] text-[#6D6057] sm:text-[15px]">
            {t.description}
          </p>
        </motion.div>

        {/* CERTIFICATE GALLERY */}

        <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={reducedMotion ? false : { y: 12 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: reducedMotion ? 0 : 0.6,
                delay: reducedMotion ? 0 : index * 0.1,
                ease,
              }}
              className="flex min-w-0 justify-center"
            >
              <button
                type="button"
                onClick={() => setSelectedCertificate(certificate)}
                aria-label={`${t.view} - ${t.page} ${certificate.id}`}
                className="block h-auto w-fit max-w-full cursor-zoom-in overflow-hidden border border-[#DCD2C9] bg-white transition-[border-color,box-shadow] duration-300 hover:border-[#843642] hover:shadow-[0_6px_22px_rgba(80,40,30,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#843642] focus-visible:ring-offset-2"
              >
                <CertificateImage
                  src={certificate.image}
                  alt={`${t.heading} ${t.accent} - ${t.page} ${certificate.id}`}
                  error={t.unavailable}
                />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CERTIFICATE POPUP */}

      <AnimatePresence>
        {selectedCertificate && (
          <CertificatePreview
            key={selectedCertificate.id}
            certificate={selectedCertificate}
            t={t}
            onClose={closePreview}
          />
        )}
      </AnimatePresence>
    </section>
  );
}