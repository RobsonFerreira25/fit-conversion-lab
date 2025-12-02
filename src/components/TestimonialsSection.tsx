import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Carlos Eduardo",
    role: "Personal Trainer",
    avatar: "CE",
    rating: 5,
    text: "Em 15 anos de academia, nunca vi resultados tão rápidos. O Whey deles é outro nível! Meus alunos também começaram a usar e todos estão impressionados.",
    result: "Ganhou 8kg de massa em 3 meses",
  },
  {
    id: 2,
    name: "Marina Santos",
    role: "Atleta Crossfit",
    avatar: "MS",
    rating: 5,
    text: "O pré-treino mudou minha performance completamente. Treino às 5h da manhã e tenho energia de sobra. Recomendo para qualquer atleta sério.",
    result: "Melhorou tempo em 23%",
  },
  {
    id: 3,
    name: "Rafael Oliveira",
    role: "Empresário",
    avatar: "RO",
    rating: 5,
    text: "Trabalho 12h por dia e ainda consigo treinar pesado graças ao BCAA. A recuperação é muito mais rápida, acordo sem dor muscular.",
    result: "Perdeu 15kg em 4 meses",
  },
  {
    id: 4,
    name: "Ana Beatriz",
    role: "Fisioterapeuta",
    avatar: "AB",
    rating: 5,
    text: "Como profissional de saúde, sou muito criteriosa com suplementos. A qualidade dos produtos é impecável, fórmulas limpas e eficazes.",
    result: "Definição muscular em 8 semanas",
  },
  {
    id: 5,
    name: "Thiago Mendes",
    role: "Competidor Bodybuilding",
    avatar: "TM",
    rating: 5,
    text: "Uso há 2 anos para competições. A consistência e qualidade são imbatíveis. Já testei várias marcas importadas e essa supera todas.",
    result: "2x Campeão Estadual",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-card overflow-hidden">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold uppercase tracking-wider text-sm mb-4">
            Depoimentos reais
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            +50.000 <span className="text-gradient">TRANSFORMAÇÕES</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja o que nossos clientes estão dizendo sobre os resultados alcançados.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-background rounded-2xl border border-border p-6 hover:border-primary/50 transition-all duration-300 ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-warning fill-warning" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Result badge */}
              <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
                ✓ {testimonial.result}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="font-bold text-primary-foreground">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-background rounded-2xl border border-border">
          <div className="text-center">
            <div className="font-display text-4xl md:text-5xl text-primary mb-2">50K+</div>
            <p className="text-muted-foreground text-sm">Clientes Satisfeitos</p>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl md:text-5xl text-primary mb-2">4.9</div>
            <p className="text-muted-foreground text-sm">Avaliação Média</p>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl md:text-5xl text-primary mb-2">98%</div>
            <p className="text-muted-foreground text-sm">Taxa de Recompra</p>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl md:text-5xl text-primary mb-2">5 Anos</div>
            <p className="text-muted-foreground text-sm">No Mercado</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
