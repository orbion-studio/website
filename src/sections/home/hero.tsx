export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Glowing Mesh Gradient Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-linear-to-br from-electric-blue/30 via-purple-500/20 to-violet-600/20 blur-[60px] md:blur-[120px] animate-pulse-glow"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight animate-fade-in-up"
        >
          Sofisticação através da{" "}
          <span className="bg-linear-to-r from-electric-blue to-violet-500 bg-clip-text text-transparent">
            Simplicidade
          </span>
          .
        </h1>

        <p
          className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}
        >
          Eliminamos o excesso para revelar a essência. Design estratégico projetado para clareza máxima e conversão de
          alto valor.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.5s", animationFillMode: "backwards" }}
        >
          <a
            href="#contato"
            className="px-8 py-4 bg-electric-blue text-snow font-semibold rounded-xl hover:bg-electric-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-electric-blue/20"
          >
            Iniciar Projeto
          </a>
          <a
            href="#projetos"
            className="px-8 py-4 border border-white/20 text-snow font-semibold rounded-xl hover:bg-white/5 transition-all duration-300"
          >
            Ver Projetos
          </a>
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-obsidian to-transparent" />
    </section>
  );
}
