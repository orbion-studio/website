import { motion } from "framer-motion";
import { services } from "@/texts/home/services";

export function Services() {
  return (
    <section id="servicos" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Serviços de Elite</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Soluções digitais que combinam estética impecável com performance excepcional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-electric-blue/10 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-electric-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
