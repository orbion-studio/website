export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-obsidian/80 border-b border-white/10 animate-slide-down">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-righteous text-xl tracking-tight text-snow">
          orbion studio
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#servicos"
            className="text-sm font-medium text-slate-400 hover:text-snow transition-colors duration-300"
          >
            Serviços
          </a>
          <a
            href="#projetos"
            className="text-sm font-medium text-slate-400 hover:text-snow transition-colors duration-300"
          >
            Projetos
          </a>
          <a
            href="#contato"
            className="text-sm font-medium text-slate-400 hover:text-snow transition-colors duration-300"
          >
            Contato
          </a>
        </nav>

        <a
          href="#contato"
          className="px-5 py-2 text-sm font-medium border border-white/20 rounded-xl text-snow hover:bg-white/5 transition-all duration-300"
        >
          Agendar
        </a>
      </div>
    </header>
  );
}
