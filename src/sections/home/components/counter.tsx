import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";

export function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const match = value.match(/(\d+(?:\.\d+)?)/);
  const numericValue = match ? parseFloat(match[0]) : 0;
  const isFloat = match ? match[0].includes(".") : false;

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (isFloat) {
      return latest.toFixed(1);
    }
    return Math.round(latest).toString();
  });

  useEffect(() => {
    if (isInView && match) {
      const controls = animate(count, numericValue, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, numericValue, count, match]);

  if (!match) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  const index = match.index ?? 0;
  const prefix = value.slice(0, index);
  const suffix = value.slice(index + match[0].length);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
