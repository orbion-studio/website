import advocaciaDesktop from "@/assets/projects/advocacia-desktop.webp";
import advocaciaMobile from "@/assets/projects/advocacia-mobile.webp";

import solarDesktop from "@/assets/projects/solar-desktop.webp";
import solarMobile from "@/assets/projects/solar-mobile.webp";

import esteticaDesktop from "@/assets/projects/estetica-desktop.webp";
import esteticaMobile from "@/assets/projects/estetica-mobile.webp";

import veiculosDesktop from "@/assets/projects/veiculos-desktop.webp";
import veiculosMobile from "@/assets/projects/veiculos-mobile.webp";

import autismoDesktop from "@/assets/projects/autismo-desktop.webp";
import autismoMobile from "@/assets/projects/autismo-mobile.webp";

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  tags: string[];
  span: string;
  image: string;
  hero: {
    video?: string;
    image: string;
  };
  challenge: string;
  solution: string;
  mockupImage: string;
  mockupMobileImage: string;
  metrics: {
    value: string;
    label: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "advocacia-estrategica",
    title: "Advocacia Estratégica",
    category: "Jurídico",
    tags: ["Landing Page", "Lead Generation", "Authority"],
    span: "md:col-span-2 md:row-span-2",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop",
    hero: {
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&auto=format&fit=crop",
    },
    challenge:
      "O escritório possuía um site institucional denso que não convertia visitantes em contatos. A navegação era complexa e não direcionava o cliente para o agendamento de consultas, perdendo oportunidades para concorrentes com posicionamento digital mais agressivo.",
    solution:
      "Desenvolvemos uma Landing Page de alta conversão focada em 'Contato Imediato'. Simplificamos a jornada do usuário, destacamos as áreas de atuação com copy persuasiva e integramos botões de WhatsApp estratégicos que acompanham a leitura, transmitindo autoridade e facilidade.",
    mockupImage: advocaciaDesktop.src,
    mockupMobileImage: advocaciaMobile.src,
    metrics: [
      { value: "0.7s", label: "Tempo de Carregamento" },
      { value: "+42%", label: "Aumento em Leads" },
      { value: "97", label: "PageSpeed Performance" },
    ],
  },
  {
    id: 2,
    slug: "energia-solar-residencial",
    title: "Energia Solar Residencial",
    category: "Energia Renovável",
    tags: ["Landing Page", "Calculator", "Ads Ready"],
    span: "md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop",
    hero: {
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&auto=format&fit=crop",
    },
    challenge:
      "O cliente precisava qualificar os leads vindos de tráfego pago. O público chegava com muitas dúvidas sobre o retorno financeiro (ROI) e abandonava a página antes de solicitar um orçamento devido à falta de clareza.",
    solution:
      "Reestruturamos a navegação para priorizar as informações financeiras que o cliente buscava. Com uma comunicação direta sobre a economia gerada e selos de qualidade visíveis, transformamos a página em uma ferramenta de qualificação, retendo apenas os usuários com real potencial de fechar negócio.",
    mockupImage: solarDesktop.src,
    mockupMobileImage: solarMobile.src,
    metrics: [
      { value: "0.9s", label: "Tempo de Carregamento" },
      { value: "42%", label: "Taxa de Conversão" },
      { value: "-30%", label: "Custo por Lead (CPL)" },
    ],
  },
  {
    id: 3,
    slug: "clinica-estetica-premium",
    title: "Clínica de Estética",
    category: "Beleza & Bem-estar",
    tags: ["Web Design", "Branding", "Visual Experience"],
    span: "md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop",
    hero: {
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&auto=format&fit=crop",
    },
    challenge:
      "A clínica oferece tratamentos de alto valor, mas seu site antigo não refletia essa sofisticação. As imagens eram genéricas e o agendamento era confuso, o que afastava o público-alvo classe A/B.",
    solution:
      "Redesenhamos o site para transmitir exclusividade e confiança. Substituímos o visual genérico por uma estética refinada e simplificamos a jornada de agendamento com botões claros, garantindo que a experiência digital seja tão acolhedora quanto o atendimento presencial.",
    mockupImage: esteticaDesktop.src,
    mockupMobileImage: esteticaMobile.src,
    metrics: [
      { value: "1.0s", label: "Tempo de Carregamento" },
      { value: "+80%", label: "Retenção na Página" },
      { value: "50%", label: "Novos Agendamentos" },
    ],
  },
  {
    id: 4,
    slug: "concessionaria-veiculos",
    title: "Venda de Veículos Premium",
    category: "Automotivo",
    tags: ["Catalog", "Filtering", "Performance"],
    span: "md:col-span-2 md:row-span-1",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop",
    hero: {
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600&auto=format&fit=crop",
    },
    challenge:
      "A concessionária tinha dificuldades em exibir seu estoque de forma rápida. O carregamento de fotos de alta resolução era lento, frustrando usuários em dispositivos móveis e prejudicando o SEO local.",
    solution:
      'Desenvolvemos uma vitrine digital "Mobile First". O sistema agora comprime as fotos de alta resolução sem perder qualidade visual, permitindo uma navegação fluida pelo estoque. Isso resolveu a frustração dos usuários no celular e aumentou o tempo de permanência no site.',
    mockupImage: veiculosDesktop.src,
    mockupMobileImage: veiculosMobile.src,
    metrics: [
      { value: "0.8s", label: "Carregamento do Catálogo" },
      { value: "+110%", label: "Agendamento Test Drive" },
      { value: "100", label: "PageSpeed SEO" },
    ],
  },
  {
    id: 5,
    slug: "clinica-acolhimento-autismo",
    title: "Clínica de Acolhimento",
    category: "Saúde & Acessibilidade",
    tags: ["Accessibility", "UX/UI", "Empathy"],
    span: "md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1630332457155-dcdecb13fc40?w=800&auto=format&fit=crop",
    hero: {
      image: "https://images.unsplash.com/photo-1630332457155-dcdecb13fc40?w=1600&auto=format&fit=crop",
    },
    challenge:
      "Famílias atípicas buscam informações de forma rápida e clara, muitas vezes em momentos de estresse. O site antigo era poluído visualmente e com cores vibrantes demais, dificultando a navegação e não transmitindo o acolhimento necessário.",
    solution:
      "Foco total em Acessibilidade e UX. Paleta de cores calma e sensorialmente confortável. Arquitetura da informação reestruturada para que pais encontrem terapias e especialistas facilmente. O site transmite abraço e competência técnica.",
    mockupImage: autismoDesktop.src,
    mockupMobileImage: autismoMobile.src,
    metrics: [
      { value: "AA+", label: "Nível de Acessibilidade" },
      { value: "98", label: "Satisfação do Usuário" },
      { value: "+200%", label: "Cliques no WhatsApp" },
    ],
  },
];
