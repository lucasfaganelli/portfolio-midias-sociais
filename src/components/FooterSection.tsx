import { motion } from "framer-motion";
import { Instagram, MessageCircle, Mail, Heart } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="relative border-t border-border/50 py-12 overflow-hidden" style={{ background: "#161616" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-display font-bold text-sm">LF</span>
            </div>
            <div>
              <div className="font-display font-bold text-foreground text-sm">
                Lucas Faganelli 
              </div>
              <div className="text-muted-foreground text-xs">
                Editor de Video e Criador de Conteudo
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/lucas_faganelli"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
            href="https://wa.me/5514998245716"
            target="_blank"
            rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-green-400/40 transition-all duration-200"
              aria-label="WhatsApp"
            >
              <MessageCircle size={16} />
            </a>
            <a
              href="mailto:lucasviniciusfaganeli@outlook.com"
              className="w-9 h-9 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-muted-foreground text-sm flex items-center gap-1">
            © 2026 Lucas Faganelli. Feito com
           criatividade.
          </div>
        </div>
      </div>
    </footer>
  );
}
