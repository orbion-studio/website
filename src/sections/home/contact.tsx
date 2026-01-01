import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="py-32 px-6 bg-white/2">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-linear-to-br from-white/5 to-white/2 border border-white/10 rounded-2xl p-12 md:p-16 text-center backdrop-blur-sm"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Vamos Criar Algo Incrível?</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">Sua marca merece um posicionamento de elite.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com/orbion-studio/reuniao-de-descoberta"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-electric-blue text-snow font-semibold rounded-xl hover:bg-electric-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-electric-blue/20"
            >
              Agendar Reunião de Diagnóstico
            </a>
          </div>

          <div className="mt-8">
            <a
              href="https://wa.me/5587991985000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-snow transition-colors duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">Chamar no WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
