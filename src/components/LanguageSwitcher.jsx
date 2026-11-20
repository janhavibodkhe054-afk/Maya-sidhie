
import React, { useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Languages } from "lucide-react";
import { LanguageContext } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useContext(LanguageContext);
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : { opacity: 0, x: 30 }
      }
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed right-3 top-1/2 z-[100] -translate-y-1/2 sm:right-5 lg:right-7"
    >
      <div className="flex flex-col items-center gap-1 rounded-2xl border border-[#E8CADB] bg-white/95 p-1.5 shadow-[0_10px_35px_rgba(70,20,55,0.18)] backdrop-blur-xl">
        <div className="flex h-9 w-9 items-center justify-center text-[#87345F]">
          <Languages size={19} />
        </div>

        <div className="h-px w-7 bg-[#E8CADB]" />

        <button
          type="button"
          onClick={() => changeLanguage("en")}
          aria-label="Switch to English"
          aria-pressed={language === "en"}
          className={`flex h-10 min-w-12 items-center justify-center rounded-xl px-2 text-[12px] font-bold transition-all duration-300 ${
            language === "en"
              ? "bg-gradient-to-br from-[#87345F] to-[#713F89] text-white shadow-md"
              : "text-[#87345F] hover:bg-[#FFF0F6]"
          }`}
        >
          EN
        </button>

        <button
          type="button"
          onClick={() => changeLanguage("mr")}
          aria-label="मराठी भाषा निवडा"
          aria-pressed={language === "mr"}
          className={`flex h-10 min-w-12 items-center justify-center rounded-xl px-2 text-[12px] font-bold transition-all duration-300 ${
            language === "mr"
              ? "bg-gradient-to-br from-[#87345F] to-[#713F89] text-white shadow-md"
              : "text-[#87345F] hover:bg-[#FFF0F6]"
          }`}
        >
          मराठी
        </button>
      </div>
    </motion.div>
  );
}
