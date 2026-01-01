import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface NextProjectProps {
  nextProject: any;
}

export function NextProject({ nextProject }: NextProjectProps) {
  return (
    <section className="py-32 px-6 bg-white/2">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold text-electric-blue mb-8 uppercase tracking-wider text-center">
            Próximo Projeto
          </h2>

          <a
            href={`/projects/${nextProject.slug}`}
            className="group block relative overflow-hidden rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500"
          >
            <div className="aspect-21/9 relative">
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
                style={{ backgroundImage: `url(${nextProject.image})` }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-obsidian via-obsidian/60 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 mb-6 md:mb-0">
                  <span className="text-electric-blue text-sm font-semibold mb-2 hidden md:block">{nextProject.category}</span>
                  <h3 className="text-2xl mt-4 md:mt-0 md:text-4xl font-bold mb-4 text-snow">{nextProject.title}</h3>
                  <div className="flex items-center justify-center gap-2 text-snow/80 group-hover:text-snow transition-colors">
                    <span className="text-sm font-medium">Ver Projeto</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </a>

          <div className="mt-12 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-snow font-semibold rounded-xl hover:bg-white/5 transition-all duration-300"
            >
              Voltar ao Início
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
