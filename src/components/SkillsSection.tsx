import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Video,
  Scissors,
  TrendingUp,
  FileText,
  BarChart2,
  Palette,
  Search,
  Target,
} from "lucide-react";

const skills = [
  {
    icon: Video,
    title: "Reels & TikTok",
    description: "Criação de conteúdo estratégico para Reels e TikTok com alto potencial de viralização.",
    color: "from-primary to-secondary",
    tag: "Vídeo",
  },
  {
    icon: Scissors,
    title: "Edição (DaVinci Resolve)",
    description: "Edição dinâmica com cortes estratégicos, trilhas sonoras e legendas envolventes.",
    color: "from-secondary to-blue-400",
    tag: "Edição",
  },
  {
    icon: Target,
    title: "Estratégias de Retenção",
    description: "Técnicas avançadas para maximizar o tempo de visualização e engajamento.",
    color: "from-primary to-purple-400",
    tag: "Estratégia",
  },
  {
    icon: FileText,
    title: "Roteirização",
    description: "Roteiros para vídeos curtos focados em gancho, retenção e call-to-action.",
    color: "from-violet-500 to-primary",
    tag: "Conteúdo",
  },
  {
    icon: TrendingUp,
    title: "Growth Orgânico",
    description: "Estratégias de crescimento sem anúncios através de SEO de conteúdo e consistência.",
    color: "from-secondary to-cyan-400",
    tag: "Growth",
  },
  {
    icon: Palette,
    title: "Canva & Design",
    description: "Criação de artes, thumbnails e posts com identidade visual coerente.",
    color: "from-pink-500 to-primary",
    tag: "Design",
  },
  {
    icon: Search,
    title: "Análise de Perfis",
    description: "Diagnóstico completo de perfis com estratégias de melhoria baseadas em dados.",
    color: "from-primary to-indigo-400",
    tag: "Analytics",
  },
  {
    icon: BarChart2,
    title: "Estratégia Digital",
    description: "Planejamento de conteúdo consistente com foco em posicionamento e autoridade.",
    color: "from-secondary to-primary",
    tag: "Planejamento",
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="habilidades" className="relative py-24 sm:py-32 overflow-hidden" style={{ background: "#161616" }}>
      <div className="orb-blue w-[500px] h-[500px] top-0 right-0 opacity-25" />
      <div className="orb-purple w-[400px] h-[400px] bottom-0 left-0 opacity-20" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="section-label">Habilidades</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            O Que Eu <span className="text-gradient">Faço</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
            Combinando visão tecnológica com criatividade para gerar conteúdo que converte.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className="skill-card gradient-border group"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon size={22} className="text-white" />
              </div>

              {/* Tag */}
              <div className="tag-purple mb-3 inline-block">{skill.tag}</div>

              {/* Title */}
              <h3 className="font-display font-bold text-foreground text-base mb-2">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
