import { useInView } from "framer-motion";
import { useRef } from "react";

interface ResultsProps {
  metrics: Array<{ value: string; label: string }>;
}

function MetricCard({ metric, index }: { metric: { value: string; label: string }; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div
      ref={ref}
      className={`bg-white/5 border border-white/10 rounded-xl p-8 text-center backdrop-blur-sm hover:bg-white/10 transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-5xl md:text-6xl font-bold mb-3 bg-linear-to-r from-electric-blue to-violet-500 bg-clip-text text-transparent">
        {metric.value}
      </div>
      <div className="text-slate-400 font-medium">{metric.label}</div>
    </div>
  );
}

export function Results({ metrics }: ResultsProps) {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className={`text-4xl md:text-5xl font-bold mb-16 text-center transition-all duration-700 ease-out ${isTitleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
            }`}
        >
          Resultados Mensuráveis
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
