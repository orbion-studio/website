import { motion } from "framer-motion";

interface ContextProps {
  challenge: string;
  solution: string;
}

export function Context({ challenge, solution }: ContextProps) {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* The Challenge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-electric-blue mb-4 uppercase tracking-wider">O Desafio</h2>
            <p className="text-slate-300 text-lg leading-relaxed">{challenge}</p>
          </motion.div>

          {/* The Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-electric-blue mb-4 uppercase tracking-wider">A Solução</h2>
            <p className="text-slate-300 text-lg leading-relaxed">{solution}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
