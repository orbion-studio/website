import { motion } from "framer-motion";
import { projects } from "@/texts/home/projects";

export function Portfolio() {
  return (
    <section id="projetos" className="py-32 px-6 bg-[#111113]">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho Animado (Configuração Original) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">Projetos Recentes</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Cada projeto é uma obra única, criada para se destacar no mercado digital.
          </p>
        </motion.div>

        {/* O GRID (Estrutura que funciona) */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              // Animação de entrada Original (0.8s, y:30)
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              // Classes de Grid + Classes de Borda do layout novo
              className={`${project.span} group relative rounded-xl border border-white/10 overflow-hidden bg-white/5`}
            >
              <a href={`/projects/${project.slug}`} className="block w-full h-full">
                {/* 1. Imagem de Fundo (Com Grayscale e Scale-110 original) */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                {/* 2. Overlay (Com Gradient Obsidian original) */}
                <div className="absolute inset-0 bg-linear-to-t from-obsidian via-obsidian/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />

                {/* 3. Conteúdo (Com Electric Blue e translate original) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-electric-blue text-sm font-semibold mb-2 block">{project.category}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">{project.title}</h3>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
