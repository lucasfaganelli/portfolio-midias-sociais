import { motion } from "framer-motion";
import { ArrowDown, Play, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import lucasProfile from "@/assets/lucas-profile.jpg";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col items-center"
        >
          <div className="relative">
            <img
              src={lucasProfile}
              alt="Lucas"
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border border-white/10 shadow-xl"
            />
          </div>

          <div className="mt-4 flex items-center gap-2 tag-purple">
            <Sparkles size={12} />
            Editor de Vídeo
          </div>
        </motion.div>

        {/* NOME */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
        >
          Lucas <span className="text-gradient">Faganelli</span>
        </motion.h1>

        {/* HEADLINE */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl sm:text-2xl text-white mb-6 font-medium"
        >
          Transformando vídeos em performance que{" "}
          <span className="text-secondary"> <strong>prendem atenção</strong></span>
        </motion.p>

        {/* DESCRIÇÃO */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Edição focada em retenção, ritmo e performance para Reels, TikTok e Shorts.
        </motion.p>

        {/* BOTÕES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#portfolio" className="btn-primary flex items-center gap-2">
            <Play size={16} />
            Ver Projetos
          </a>

          <a href="#contato" className="btn-outline">
            Falar Comigo
          </a>
        </motion.div>

        {/* PROVA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 flex justify-center gap-10 text-sm text-muted-foreground flex-wrap"
        >
          <span>Reels • TikTok • Shorts</span>
          <span>Alta retenção</span>
          <span>Edição profissional</span>
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 flex flex-col items-center"
      >
        <ArrowDown className="animate-bounce text-white" />
      </motion.div>
    </section>
  );
}