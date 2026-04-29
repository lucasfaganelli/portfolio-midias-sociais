import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Youtube, Video, TrendingUp, Code2 } from "lucide-react";
import lucasProfile from "@/assets/lucas-profile.jpg";

const platforms = [
  {
    icon: Instagram,
    label: "Instagram",
    gradient: "from-pink-500 to-purple-500",
    url: "https://www.instagram.com/risekraken_",
  },
  {
    icon: Youtube,
    label: "YouTube",
    gradient: "from-red-500 to-orange-500",
    url: "https://www.youtube.com/@RiseKraken",
  },
  {
    icon: Video,
    label: "TikTok",
    gradient: "from-primary to-secondary",
    url: "https://www.tiktok.com/@risekraken",
  },
];

const focuses = [
  "Edição de vídeos curtos com alta retenção",
  "Cortes dinâmicos e ritmo envolvente",
  "Legendagem e elementos visuais",
  "Color grading e finalização",
  "Estrutura de vídeos para Reels, Shorts e TikTok",
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="orb-purple w-[400px] h-[400px] top-0 left-0 opacity-30" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="section-divider mb-16" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">Sobre Mim</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            Edição &amp; <span className="text-gradient">Performance</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
              Sou editor de vídeo com background em desenvolvimento, focado na criação de conteúdos dinâmicos e de alta retenção para redes sociais utilizando <span className="text-primary font-medium">DaVinci Resolve</span>.
            </p>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
              Minha base em tecnologia me permite entender profundamente{" "}
              <span className="text-primary font-medium">retenção</span>, comportamento do público e estrutura de vídeos que performam, aplicando isso diretamente na edição para maximizar resultados.
            </p>

            {/* Focus list */}
            <div className="space-y-3">
              {focuses.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm sm:text-base">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-8 text-foreground font-medium text-base sm:text-lg"
            >
              Meu objetivo é transformar ideias em vídeos que prendem atenção, aumentam retenção e geram resultado.
            </motion.p>
          </motion.div>

          {/* Right: Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-8 neon-border-purple">
              {/* Profile */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative flex-shrink-0">
                  <div
                    className="w-20 h-20 rounded-2xl p-[2px] pulse-glow"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(262 83% 58%), hsl(217 91% 60%), hsl(262 83% 58%))",
                    }}
                  >
                    <img
                      src={lucasProfile}
                      alt="Lucas Vinicius"
                      loading="eager"
                      decoding="async"
                      className="w-full h-full rounded-2xl object-cover 
                                border border-white/10
                                shadow-xl
                                contrast-110 saturate-110"
                      style={{
                        imageRendering: "auto",
                        objectPosition: "center 20%",
                        transform: "scale(1.08)",
                      }}
                    />
                  </div>

                  <div
                    className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-card"
                    style={{ background: "hsl(142 76% 46%)" }}
                  />
                </div>

                <div>
                  <div className="font-display font-bold text-foreground text-lg">
                    Lucas Faganelli
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Video Editor | Social Media
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "hsl(142 76% 56%)" }}
                    />
                    <span
                      className="text-xs"
                      style={{ color: "hsl(142 76% 56%)" }}
                    >
                      Disponível
                    </span>
                  </div>
                </div>
              </div>

              {/* Dev background */}
              <div className="flex items-center gap-3 mb-6 p-3 bg-muted/40 rounded-xl border border-border/50">
                <Code2 size={18} className="text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">
                    Background
                  </div>
                  <div className="text-sm text-foreground font-medium">
                    Editor de Video
                  </div>
                </div>
              </div>

              {/* Platforms */}
              <div className="mb-6">
                <div className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">
                  Plataformas
                </div>

                <div className="flex gap-3">
                  {platforms.map((p) => (
                    <a
                      key={p.label}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex flex-col items-center gap-2 p-3 bg-muted/30 rounded-xl border border-border/40 hover:border-primary/40 transition-colors cursor-pointer"
                    >
                      <div
                        className={`w-8 h-8 rounded-lg bg-gradient-to-br ${p.gradient} flex items-center justify-center`}
                      >
                        <p.icon size={16} className="text-foreground" />
                      </div>

                      <span className="text-xs text-muted-foreground">
                        {p.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Performance indicator */}
              <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-xl border border-primary/20">
                <TrendingUp size={16} className="text-primary" />
                <span className="text-primary text-sm font-medium">
                  Focado em retenção e performance
                </span>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}