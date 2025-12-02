import { Zap, Shield, Target, Heart, TrendingUp, Award } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Energia Explosiva",
    description: "Fórmulas que liberam energia sustentada para treinos mais intensos e duradouros.",
  },
  {
    icon: Target,
    title: "Resultados Rápidos",
    description: "Absorção 3x mais rápida que suplementos comuns. Veja a diferença em semanas.",
  },
  {
    icon: Shield,
    title: "100% Seguro",
    description: "Testado em laboratório, aprovado pela ANVISA. Sem substâncias proibidas.",
  },
  {
    icon: Heart,
    title: "Saúde Completa",
    description: "Vitaminas e minerais essenciais para fortalecer seu sistema imunológico.",
  },
  {
    icon: TrendingUp,
    title: "Ganho de Massa",
    description: "Proteínas de alta biodisponibilidade para maximizar a síntese muscular.",
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Matéria-prima importada, padrão internacional de excelência.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold uppercase tracking-wider text-sm mb-4">
            Por que escolher nossos produtos
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            6 MOTIVOS PARA <span className="text-gradient">COMEÇAR HOJE</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Desenvolvidos por nutricionistas e atletas profissionais para entregar 
            o máximo de performance e resultados reais.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-8 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
