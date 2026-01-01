import { motion } from "framer-motion";

interface HeroProps {
  project: any;
}

export function Hero({ project }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${project.hero.image})` }}>
        <div className="absolute inset-0 bg-linear-to-b from-obsidian/60 via-obsidian/80 to-obsidian" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="text-electric-blue text-sm font-semibold mb-4 block">{project.category}</span>
          <div className="flex items-center justify-center gap-3 mb-8">
            {project.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-lg">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
        >
          {project.title}
        </motion.h1>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-obsidian to-transparent" />
    </section>
  );
}
