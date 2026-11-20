
import React, { useEffect } from "react";
import Lenis from "lenis";
import { useLocation } from "react-router-dom";

export default function SmoothScroll({ children }) {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.35,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1,
      lerp: 0.085,
      autoRaf: true,
      anchors: {
        offset: -90,
      },
    });

    window.lenis = lenis;

    return () => {
      lenis.destroy();
      if (window.lenis === lenis) {
        delete window.lenis;
      }
    };
  }, []);

  useEffect(() => {
    const lenis = window.lenis;

    if (!lenis) return;

    lenis.scrollTo(0, {
      immediate: true,
      force: true,
    });
  }, [location.pathname]);

  return <>{children}</>;
}
