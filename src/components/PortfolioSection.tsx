import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play, ArrowUpRight, TrendingUp } from "lucide-react";

const projects = [
  {
    category: "Reels de Performance",
    title: "Conteúdo Motivacional",
    client: "Instagram • Nicho Motivacional",
    result: "Alta retenção",
    retention: "Impacto emocional",
    subtitle:
      "Vídeo estruturado para prender atenção, aumentar tempo de retenção e gerar maior conexão com o público.",
    link: "https://www.instagram.com/reel/DTBSakaAQ8b/",
    metrics: ["Retenção Alta", "Impacto Emocional", "Engajamento"],
  },
  {
    category: "Short-form Editing",
    title: "Edição de Vídeos Curtos",
    client: "TikTok • Conteúdo Estratégico",
    result: "Ritmo dinâmico",
    retention: "Cortes estratégicos",
    subtitle:
      "Cortes estratégicos e edição pensada para manter atenção e melhorar performance orgânica.",
    link: "https://www.tiktok.com/@risekraken/video/7557452853858585868",
    metrics: ["DaVinci Resolve", "Ritmo Dinâmico", "Alta Conversão"],
  },
  {
    category: "Growth Content",
    title: "Vídeo para Crescimento",
    client: "TikTok • Estratégia Orgânica",
    result: "+25 mil views",
    retention: "Alta Performance",
    subtitle:
      "Vídeo estruturado para crescimento, retenção e fortalecimento de autoridade digital.",
    link: "https://www.tiktok.com/@risekraken/video/7539225503278845190",
    metrics: ["Orgânico", "Performance", "Crescimento"],
  },
];

export default function PortfolioSection() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="portfolio"
      className="relative py-24 sm:py-32 overflow-hidden bg-[#050505]"
    >
      {/* Glow Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <div className="mb-20">
          <span className="section-label">Portfólio</span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Cases de <span className="text-gradient">Performance</span>
          </h2>

          <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed">
            Edição estratégica para creators e negócios que precisam de vídeos
            com retenção real, performance e crescimento orgânico.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-10">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
              }}
              className="group block"
            >
              <div
                className="rounded-3xl border border-white/10 bg-white/[0.02]
                backdrop-blur-xl overflow-hidden
                hover:border-primary/30 transition-all duration-500
                hover:shadow-[0_0_80px_rgba(139,92,246,0.08)]
                hover:-translate-y-1"
              >
                <div className="grid lg:grid-cols-2">
                  {/* LEFT SIDE */}
                  <div className="relative min-h-[340px] bg-gradient-to-br from-zinc-900 via-zinc-800 to-black flex items-center justify-center overflow-hidden">
                    {/* Glow */}
                    <div className="absolute w-72 h-72 rounded-full bg-purple-500/10 blur-3xl" />

                    {/* Play Button */}
                    <div
                      className="relative z-10 w-24 h-24 rounded-full
                      border border-white/10
                      bg-white/5 backdrop-blur-xl
                      flex items-center justify-center
                      group-hover:scale-110 transition duration-300"
                    >
                      <Play
                        size={34}
                        className="text-white ml-1"
                      />
                    </div>

                    {/* Category */}
                    <div className="absolute top-6 left-6">
                      <span
                        className="px-4 py-2 rounded-full text-xs
                        border border-white/10
                        bg-black/30 backdrop-blur-md
                        text-white font-medium"
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="p-8 sm:p-10 flex flex-col justify-between">
                    <div>
                      {/* Label */}
                      <div className="flex items-center gap-2 text-primary text-sm font-medium mb-3">
                        <TrendingUp size={16} />
                        Resultado estratégico
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl font-bold text-white mb-3">
                        {project.title}
                      </h3>

                      {/* Client */}
                      <p className="text-zinc-400 mb-6">
                        {project.client}
                      </p>

                      {/* Description */}
                      <p className="text-zinc-300 leading-relaxed mb-8">
                        {project.subtitle}
                      </p>

                      {/* Results */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div
                          className="rounded-2xl border border-white/5
                          bg-white/[0.02] p-4"
                        >
                          <div className="text-xs text-zinc-500 mb-1">
                            Resultado
                          </div>

                          <div className="text-white font-semibold">
                            {project.result}
                          </div>
                        </div>

                        <div
                          className="rounded-2xl border border-white/5
                          bg-white/[0.02] p-4"
                        >
                          <div className="text-xs text-zinc-500 mb-1">
                            Foco
                          </div>

                          <div className="text-white font-semibold">
                            {project.retention}
                          </div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex gap-2 flex-wrap">
                        {project.metrics.map((metric) => (
                          <span
                            key={metric}
                            className="px-3 py-1.5 rounded-full
                            text-xs text-zinc-300
                            border border-white/10
                            bg-white/[0.02]"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-10 flex items-center gap-3 text-white font-medium">
                      <span>Assistir Projeto</span>

                      <div
                        className="w-10 h-10 rounded-xl
                        border border-white/10
                        flex items-center justify-center
                        group-hover:translate-x-1 transition"
                      >
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}