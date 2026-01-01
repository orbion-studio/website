import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="fixed top-8 left-8 z-50"
    >
      <a
        href="/"
        className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-snow no-underline"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Voltar</span>
      </a>
    </motion.div>
  );
}
