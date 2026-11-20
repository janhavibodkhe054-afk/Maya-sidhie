
import React, { useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

export default function BrandVideo() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const reducedMotion = useReducedMotion();

  const inView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
  });

  // CHANGE THESE TWO FILE PATHS
  const videoSrc = "/v1.mp4";
  const backgroundImage = "https://i.pinimg.com/1200x/d4/a2/e1/d4a2e11dc77970927c44a57640e6f462.jpg";

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Maya's LALA brand video"
      className="
        relative isolate overflow-hidden
        bg-[#29171A]
        py-14 sm:py-20 lg:py-24
      "
    >
      {/* FULL BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />

      {/* CINEMATIC OVERLAY */}
      

      {/* SOFT MOVING GLOW */}
      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-24 top-0
          h-[350px] w-[350px]
          rounded-full bg-[#C68D71]/20
          blur-[110px]
        "
        animate={
          reducedMotion
            ? undefined
            : {
                x: [0, 80, 0],
                y: [0, 35, 0],
              }
        }
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-20 bottom-0
          h-[380px] w-[380px]
          rounded-full bg-[#E2B47A]/15
          blur-[120px]
        "
        animate={
          reducedMotion
            ? undefined
            : {
                x: [0, -60, 0],
                y: [0, -40, 0],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* VIDEO CONTAINER */}
      <div className="relative mx-auto max-w-[1160px] px-4 sm:px-8 lg:px-10">
        <motion.div
          initial={
            reducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 55,
                  scale: 0.94,
                }
          }
          animate={
            inView || reducedMotion
              ? {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }
              : {
                  opacity: 0,
                  y: 55,
                  scale: 0.94,
                }
          }
          transition={{
            duration: reducedMotion ? 0 : 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative"
        >
          {/* BACK GLOW */}
          <div
            className="
              pointer-events-none absolute
              -inset-5 rounded-[36px]
              bg-gradient-to-r
              from-[#E3B887]/25
              via-[#FFFFFF]/10
              to-[#A45B65]/25
              blur-3xl
              transition-opacity duration-700
              group-hover:opacity-100
            "
          />

          {/* OUTER GLASS FRAME */}
          <div
            className="
              relative rounded-[20px]
              border border-white/25
              bg-white/10
              p-[6px]
              shadow-[0_30px_90px_rgba(0,0,0,0.4)]
              backdrop-blur-xl
              transition-all duration-700
              group-hover:border-white/45
              group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.5)]
              sm:rounded-[28px] sm:p-[9px]
            "
          >
            {/* VIDEO */}
            <div
              className="
                relative aspect-video overflow-hidden
                rounded-[15px] bg-black
                sm:rounded-[21px]
              "
            >
              <video
                ref={videoRef}
                src={videoSrc}
                className="h-full w-full object-contain"
                controls
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                aria-label="Maya's LALA video"
              />

              {/* SUBTLE TOP REFLECTION */}
              <div
                className="
                  pointer-events-none absolute
                  inset-x-0 top-0 h-[18%]
                  bg-gradient-to-b
                  from-white/10 to-transparent
                "
              />
            </div>
          </div>

          {/* DECORATIVE LIGHT DOTS */}
          <motion.div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -right-2 -top-2
              h-3 w-3 rounded-full
              bg-[#E8C18F]
              shadow-[0_0_25px_rgba(232,193,143,0.65)]
            "
            animate={
              reducedMotion
                ? undefined
                : {
                    opacity: [0.4, 1, 0.4],
                    scale: [1, 1.25, 1],
                  }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />

          <motion.div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -bottom-2 -left-2
              h-2 w-2 rounded-full
              bg-[#D9A87A]
              shadow-[0_0_20px_rgba(217,168,122,0.6)]
            "
            animate={
              reducedMotion
                ? undefined
                : {
                    opacity: [1, 0.4, 1],
                  }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
