import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Gift, Shield, Truck } from "lucide-react";

const SpecialOfferSection = () => {
  // Countdown timer - 24 hours from now
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset to 24 hours
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <section className="py-20 lg:py-28 bg-gradient-hero relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-destructive/20 border border-destructive/50 px-6 py-2 rounded-full mb-8">
            <Clock className="w-5 h-5 text-destructive" />
            <span className="text-destructive font-semibold">Oferta por tempo limitado!</span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl mb-6">
            COMBO TRANSFORMAÇÃO
            <br />
            <span className="text-gradient">40% DE DESCONTO</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Whey Protein + Pré-Treino + BCAA — Tudo que você precisa para 
            resultados extraordinários em um único combo.
          </p>

          {/* Countdown timer */}
          <div className="flex justify-center gap-4 mb-10">
            <div className="bg-card border border-border rounded-2xl p-6 min-w-[100px] animate-countdown">
              <div className="font-display text-5xl md:text-6xl text-primary mb-1">
                {formatNumber(timeLeft.hours)}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Horas</div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 min-w-[100px] animate-countdown">
              <div className="font-display text-5xl md:text-6xl text-primary mb-1">
                {formatNumber(timeLeft.minutes)}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Min</div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 min-w-[100px] animate-countdown">
              <div className="font-display text-5xl md:text-6xl text-primary mb-1">
                {formatNumber(timeLeft.seconds)}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Seg</div>
            </div>
          </div>

          {/* Price anchoring */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <div className="text-center">
              <p className="text-muted-foreground text-sm mb-1">Valor normal</p>
              <p className="text-3xl text-muted-foreground line-through">R$ 589,70</p>
            </div>
            <div className="hidden sm:block w-px h-16 bg-border" />
            <div className="text-center">
              <p className="text-accent text-sm font-semibold mb-1">Seu preço hoje</p>
              <p className="font-display text-5xl md:text-6xl text-primary">R$ 349,90</p>
              <p className="text-sm text-muted-foreground">ou 12x de R$ 29,16</p>
            </div>
          </div>

          {/* CTA */}
          <Button variant="hero" size="xl" className="mb-10 text-2xl px-12 py-8">
            GARANTIR MEU COMBO
            <ArrowRight className="w-6 h-6" />
          </Button>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Truck className="w-6 h-6 text-accent" />
              <span>Frete Grátis</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Shield className="w-6 h-6 text-accent" />
              <span>Garantia 30 dias</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Gift className="w-6 h-6 text-accent" />
              <span>Brinde Exclusivo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferSection;
