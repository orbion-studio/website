import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface DesktopMockupProps {
  websiteImage: string;
  alt: string;
}

export const DesktopMockup = ({ websiteImage, alt }: DesktopMockupProps) => {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const imageRef = React.useRef<HTMLImageElement>(null);

  const [finalY, setFinalY] = React.useState("0%");

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1.2, 1.2, 0.9]);
  const y = useTransform(scrollYProgress, [0.05, 0.95], ["0%", finalY]);

  React.useEffect(() => {
    const img = imageRef.current;
    const container = containerRef.current;

    if (!img || !container) return;

    const calculateScroll = () => {
      const imgHeight = img.offsetHeight;
      const containerHeight = container.offsetHeight;

      // If the image is smaller than the container, it will not scroll
      if (imgHeight <= containerHeight) {
        setFinalY("0%");
        return;
      }

      const scrollDistance = imgHeight - containerHeight;
      const percentage = (scrollDistance / imgHeight) * 100;

      setFinalY(`-${percentage}%`);
    };

    // Observer ensures that the calculation runs as soon as the image gains height
    const observer = new ResizeObserver(calculateScroll);
    observer.observe(img);
    observer.observe(container);

    // Forces immediate calculation if the image is already cached
    if (img.complete) calculateScroll();

    return () => observer.disconnect();
  }, []);

  return (
    // A height of 450vh is needed to allow enough time for the animation
    <section ref={targetRef} className="relative h-[450vh] bg-obsidian">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden perspective-1000">
        <motion.div style={{ scale }} className="w-full max-w-5xl px-6 relative will-change-transform">
          <div className="text-center mb-6 opacity-60">
            <span className="text-electric-blue text-xs font-mono uppercase tracking-widest">Desktop Experience</span>
          </div>

          {/* --- MOCKUP FRAME --- */}
          <div className="relative">
            {/* Monitor Body */}
            <div className="relative bg-linear-to-b from-zinc-800 to-zinc-900 rounded-2xl p-2 shadow-2xl border border-white/5">
              {/* Screen Bezel */}
              <div
                ref={containerRef}
                className="relative bg-black rounded-xl overflow-hidden screen-glow aspect-16/10 group z-10"
              >
                {/* Scrollable Content */}
                <div className="relative w-full h-full overflow-hidden bg-zinc-900">
                  <motion.img
                    ref={imageRef}
                    style={{ y }}
                    src={websiteImage}
                    alt={alt}
                    className="w-full object-cover object-top will-change-transform"
                  />
                </div>

                {/* Reflections (Glass) */}
                <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent h-1/3 pointer-events-none z-20" />

                {/* Inner shadow on edges */}
                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] z-20 pointer-events-none rounded-xl" />
              </div>

              {/* Webcam / Sensor */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-zinc-800/80 shadow-inner border border-white/5 z-30" />
            </div>

            {/* Monitor Stand */}
            {/* <div className="flex flex-col items-center -mt-2 relative z-[-1]">
              <div className="w-32 h-16 bg-linear-to-b from-zinc-800 to-zinc-900 border-x border-white/5 shadow-2xl" />
              <div className="w-56 h-4 bg-linear-to-b from-zinc-700 to-zinc-900 rounded-lg shadow-2xl border-t border-white/10" />
            </div> */}

            {/* Bluish glow behind the monitor (Ambient) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-electric-blue/10 blur-[120px] rounded-full -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
