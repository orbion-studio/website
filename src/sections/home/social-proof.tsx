import { motion } from "framer-motion";
import { metrics } from "@/texts/home/metrics";
import { Counter } from "./components/counter";

export function SocialProof() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-electric-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-8 h-8 text-electric-blue" />
              </div>

              <div className="text-4xl md:text-5xl font-bold mb-2 bg-linear-to-r from-snow to-slate-400 bg-clip-text text-transparent">
                <Counter value={metric.value} />
              </div>

              <div className="text-slate-400 font-medium">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
