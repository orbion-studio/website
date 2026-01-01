import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface MobileMockupProps {
  mobileImage: string;
  alt: string;
}

export const MobileMockup = ({ mobileImage, alt }: MobileMockupProps) => {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const imageRef = React.useRef<HTMLImageElement>(null);

  const [finalY, setFinalY] = React.useState("0%");

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
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
    // 300vh height because finger scrolling is faster
    <section ref={targetRef} className="relative h-[300vh] bg-obsidian block md:hidden">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div style={{ scale }} className="w-full max-w-[320px] px-4 relative will-change-transform">
          <div className="text-center mb-6 opacity-60">
            <span className="text-electric-blue text-xs font-mono uppercase tracking-widest">Mobile Experience</span>
          </div>

          {/* --- MOCKUP FRAME --- */}
          <div className="relative">
            {/* Phone Body */}
            <div className="relative bg-zinc-900 rounded-[3rem] p-3 shadow-2xl border border-zinc-700 ring-1 ring-black">
              {/* Screen Bezel */}
              <div
                ref={containerRef}
                className="relative bg-black rounded-[2.5rem] overflow-hidden aspect-[9/19.5] screen-glow z-10"
              >
                {/* Notch / Dynamic Island / Speaker grill cosmetic */}
                {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 bg-black rounded-b-3xl z-30 flex justify-center items-center">
                  <div className="w-16 h-1 bg-zinc-800 rounded-full opacity-50"></div>
                </div> */}

                {/* Scrollable Content */}
                <div className="relative w-full h-full overflow-hidden bg-zinc-900">
                  <motion.img
                    ref={imageRef}
                    style={{ y }}
                    src={mobileImage}
                    alt={alt}
                    className="w-full h-auto object-cover object-top will-change-transform"
                  />
                </div>

                {/* Reflections (Glass) */}
                <div className="absolute inset-0 bg-linear-to-tr from-white/10 via-transparent to-transparent pointer-events-none z-20 opacity-30" />
              </div>
            </div>

            {/* Bluish glow behind the phone (Ambient) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-electric-blue/15 blur-[80px] rounded-full -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
