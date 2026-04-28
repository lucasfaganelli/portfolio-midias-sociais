import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

const projects = [
  {
    tag: "Reels & TikTok",
    title: "Conteúdo Motivacional",
    subtitle: "Alta retenção e impacto emocional",
    link: "https://www.instagram.com/reel/DTBSakaAQ8b/",
    gradient: "from-pink-500 via-purple-500 to-indigo-500",
    metrics: ["Retenção Alta", "Impacto Emocional"],
  },
  {
    tag: "Edição",
    title: "Edição de Vídeos Curtos",
    subtitle: "Ritmo dinâmico e cortes estratégicos",
    link: "https://www.tiktok.com/@risekraken/video/7557452853858585868",
    gradient: "from-blue-500 via-cyan-500 to-teal-400",
    metrics: ["DaVinci Resolve", "Ritmo Dinâmico"],
  },
  {
    tag: "Performance",
    title: "Vídeo para Crescimento",
    subtitle: "Foco em retenção e engajamento",
    link: "https://www.tiktok.com/@risekraken/video/7539225503278845190",
    gradient: "from-violet-500 via-fuchsia-500 to-purple-500",
    metrics: ["Orgânico", "Alta Performance"],
  },
];

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="mb-16">
          <span className="section-label">Portfólio</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-muted-foreground">
            Edições focadas em retenção, ritmo e performance real.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all"
            >
              {/* GRADIENT BACKGROUND */}
              <div
                className={`h-72 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
              >
                {/* Glow animado */}
                <div className="absolute inset-0 opacity-30 blur-2xl bg-white/20 group-hover:scale-110 transition duration-700" />

                {/* Overlay escuro */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition">
                    <Play size={28} className="text-white ml-1" />
                  </div>
                </div>

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-black/40 backdrop-blur text-white border border-white/10">
                    {project.tag}
                  </span>
                </div>

                {/* Texto */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* FOOTER */}
              <div className="p-4 bg-[#0D0D0D]/80 backdrop-blur">
                <div className="flex gap-2 flex-wrap">
                  {project.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md text-white/80"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}