import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Play, TrendingUp, Scissors } from "lucide-react";

const projects = [
  {
    icon: Play,
    gradient: "from-primary via-purple-500 to-secondary",
    tag: "Reels & TikTok",
    title: "Conteúdo Motivacional",
    subtitle: "para Reels e TikTok",
    link: "https://www.instagram.com/reel/DTBSakaAQ8b/",
    description:
      "Criação de vídeos focados em retenção, impacto emocional e crescimento orgânico. Conteúdos com gatilhos emocionais e estrutura narrativa de alta performance.",
    metrics: [
      { label: "Alto Impacto", value: "Emocional" },
      { label: "Retenção", value: "Máxima" },
    ],
  },
  {
    icon: Scissors,
    gradient: "from-secondary via-blue-500 to-cyan-400",
    tag: "Edição",
    title: "Edição de Vídeos Curtos",
    subtitle: "Profissional & Dinâmica",
    link: "https://www.tiktok.com/@risekraken/video/7557452853858585868?is_from_webapp=1&sender_device=pc&web_id=7537686395855652357",
    description:
      "Edição dinâmica utilizando cortes estratégicos, legendas impactantes e ritmo envolvente. Cada corte é calculado para maximizar a retenção do espectador.",
    metrics: [
      { label: "Ferramenta", value: "DaVinci Resolve" },
      { label: "Ritmo", value: "Dinâmico" },
    ],
  },
  {
    icon: TrendingUp,
    gradient: "from-violet-500 via-primary to-blue-500",
    tag: "Growth",
    title: "Estratégia de Crescimento",
    subtitle: "de Perfil",
    link: "https://www.tiktok.com/@risekraken/video/7539225503278845190?is_from_webapp=1&sender_device=pc&web_id=7537686395855652357",
    description:
      "Planejamento e criação de conteúdo para aumento de alcance e engajamento. Análise de métricas, posicionamento de nicho e consistência estratégica.",
    metrics: [
      { label: "Foco", value: "Orgânico" },
      { label: "Meta", value: "Escala" },
    ],
  },
];

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="orb-purple w-[600px] h-[600px] -top-32 right-0 opacity-20" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="section-divider mb-16" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">Portfólio</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl">
            Trabalhos focados em retenção, impacto e crescimento real.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
              className="portfolio-card group"
            >
              {/* Thumbnail area */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                <div className="absolute inset-0 bg-[#0D0D0D]/40" />

                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(hsl(262 83% 58% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(262 83% 58% / 0.4) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-400`}>
                    <project.icon size={36} className="text-white" />
                  </div>
                </div>

                <div className="absolute top-4 left-4">
                  <span className="tag-blue">{project.tag}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-foreground text-xl mb-1">
                  {project.title}
                </h3>
                <p className="text-primary text-sm font-medium mb-3">
                  {project.subtitle}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="flex gap-3 mb-5">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="flex-1 text-center p-2 bg-muted/40 rounded-lg border border-border/50"
                    >
                      <div className="text-xs text-muted-foreground">
                        {m.label}
                      </div>
                      <div className="text-sm font-semibold text-foreground">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full flex items-center justify-center gap-2 text-sm py-2.5 cursor-pointer hover:-translate-y-0.5 transition"
                >
                  <ExternalLink size={14} />
                  Ver Projeto
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}