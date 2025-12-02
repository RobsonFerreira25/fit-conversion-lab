import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo leva para ver resultados?",
    answer:
      "A maioria dos nossos clientes começa a perceber diferenças nas primeiras 2-3 semanas de uso consistente. Resultados mais significativos, como ganho de massa muscular e definição, são visíveis após 30-60 dias combinando nossos suplementos com treino adequado e alimentação balanceada.",
  },
  {
    question: "Os produtos são seguros? Têm registro na ANVISA?",
    answer:
      "Sim, todos os nossos produtos são 100% seguros e registrados na ANVISA. Utilizamos apenas ingredientes de alta qualidade, importados e testados em laboratório. Não contém substâncias proibidas e podem ser usados por atletas profissionais sem risco de doping.",
  },
  {
    question: "Qual a política de devolução?",
    answer:
      "Oferecemos garantia incondicional de 30 dias. Se por qualquer motivo você não ficar satisfeito com os resultados, basta entrar em contato conosco que devolvemos 100% do seu dinheiro, sem perguntas. Acreditamos tanto nos nossos produtos que assumimos todo o risco.",
  },
  {
    question: "Como devo tomar os suplementos?",
    answer:
      "Cada produto vem com instruções detalhadas. Em geral: Whey Protein logo após o treino; Pré-Treino 20-30 minutos antes de treinar; BCAA durante ou após o treino. Recomendamos consultar um nutricionista para personalizar as doses conforme seus objetivos.",
  },
  {
    question: "Vocês entregam para todo o Brasil?",
    answer:
      "Sim! Entregamos para todos os estados brasileiros. O frete é GRÁTIS para compras acima de R$ 199. Pedidos são processados em até 24h e o prazo de entrega varia de 3 a 15 dias úteis dependendo da sua região. Você recebe código de rastreio por e-mail.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold uppercase tracking-wider text-sm mb-4">
              Dúvidas frequentes
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
              PERGUNTAS <span className="text-gradient">RESPONDIDAS</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas antes de começar sua transformação.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Additional help */}
          <div className="mt-12 text-center p-8 bg-card rounded-2xl border border-border">
            <p className="text-lg mb-2">Ainda tem dúvidas?</p>
            <p className="text-muted-foreground">
              Fale com nosso time de especialistas pelo WhatsApp:{" "}
              <a
                href="https://wa.me/5511999999999"
                className="text-primary font-semibold hover:underline"
              >
                (11) 99999-9999
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
