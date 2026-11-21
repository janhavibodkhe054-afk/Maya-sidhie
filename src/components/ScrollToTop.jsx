import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
      return;
    }

    let observer;

    const scrollToSection = () => {
      const element = document.getElementById(hash.slice(1));

      if (element) {
        element.scrollIntoView({
          behavior: window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches
            ? "instant"
            : "smooth",
          block: "start",
        });

        observer?.disconnect();
        return true;
      }

      return false;
    };

    const frame = requestAnimationFrame(() => {
      if (!scrollToSection()) {
        observer = new MutationObserver(scrollToSection);

        observer.observe(document.body, {
          childList: true,
          subtree: true,
        });
      }
    });

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [pathname, hash]);

  return null;
}