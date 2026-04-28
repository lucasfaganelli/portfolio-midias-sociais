import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Video,
  Scissors,
  TrendingUp,
  FileText,
  Palette,
  Target,
} from "lucide-react";

const skills = [
  {
    icon: Scissors,
    title: "Edição de Vídeo",
    description:
      "Edição profissional com cortes precisos, ritmo envolvente e narrativa fluida.",
    color: "from-primary to-secondary",
    tag: "Core",
  },
  {
    icon: Video,
    title: "Vídeos Curtos",
    description:
      "Edição para Reels, TikTok e Shorts com foco total em retenção.",
    color: "from-secondary to-blue-400",
    tag: "Formato",
  },
  {
    icon: Target,
    title: "Retenção de Audiência",
    description:
      "Estrutura de vídeos pensada para prender atenção nos primeiros segundos.",
    color: "from-primary to-purple-400",
    tag: "Performance",
  },
  {
    icon: FileText,
    title: "Storytelling",
    description:
      "Construção narrativa que mantém o público assistindo até o final.",
    color: "from-violet-500 to-primary",
    tag: "Narrativa",
  },
  {
    icon: Palette,
    title: "Color Grading",
    description:
      "Tratamento de cor para dar identidade visual e qualidade profissional.",
    color: "from-pink-500 to-primary",
    tag: "Visual",
  },
  {
    icon: Video,
    title: "Legendagem",
    description:
      "Legendas dinâmicas e estratégicas para aumentar retenção.",
    color: "from-indigo-500 to-blue-400",
    tag: "Engajamento",
  },
  {
    icon: Scissors,
    title: "Ritmo & Cortes",
    description:
      "Cortes sincronizados com áudio e dinâmica para manter o flow do vídeo.",
    color: "from-cyan-400 to-blue-500",
    tag: "Edição",
  },
  {
    icon: TrendingUp,
    title: "Performance de Conteúdo",
    description:
      "Edição orientada a métricas como retenção, tempo de exibição e engajamento.",
    color: "from-primary green-400",
    tag: "Resultado",
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="habilidades"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: "#161616" }}
    >
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
            Edição de vídeos focada em retenção, ritmo e performance para redes sociais.
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
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <skill.icon size={22} className="text-white" />
              </div>

              {/* Tag */}
              <div className="tag-purple mb-3 inline-block">
                {skill.tag}
              </div>

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