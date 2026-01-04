import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <div className="font-righteous text-xl mb-2 text-snow">orbion studio</div>
            <p className="text-slate-400 text-sm">© 2025. Criando excelência digital.</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:contato@orbion.studio"
              className="flex items-center gap-2 text-slate-400 hover:text-snow transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm font-medium">Email</span>
            </a>
            <a
              href="https://linkedin.com/company/orbionstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-snow transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
