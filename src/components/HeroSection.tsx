import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-fitness.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Atleta fitness em treino intenso" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />

      <div className="container relative z-10 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-4 mb-8 animate-fade-in">
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-border/50">
              <Star className="w-4 h-4 text-warning fill-warning" />
              <span className="text-sm font-medium">4.9/5 Avaliação</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-border/50">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">+50.000 Clientes</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-border/50">
              <Trophy className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Marca #1 Brasil</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-6 animate-slide-up">
            TRANSFORME SEU{" "}
            <span className="text-gradient">CORPO</span>
            <br />
            EM 90 DIAS
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl animate-slide-up animation-delay-100">
            Suplementos premium de alta absorção para quem leva o treino a sério. 
            <span className="text-foreground font-semibold"> Resultados garantidos ou seu dinheiro de volta.</span>
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up animation-delay-200">
            <Button variant="hero" size="xl" className="group">
              QUERO RESULTADOS AGORA
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              VER PRODUTOS
            </Button>
          </div>

          {/* Urgency banner */}
          <div className="inline-flex items-center gap-3 bg-destructive/20 border border-destructive/50 px-6 py-3 rounded-lg animate-scale-in animation-delay-300">
            <div className="w-3 h-3 bg-destructive rounded-full animate-pulse" />
            <p className="text-sm font-medium">
              <span className="text-destructive font-bold">ÚLTIMAS 47 UNIDADES</span> com 40% OFF — Oferta expira em breve!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
