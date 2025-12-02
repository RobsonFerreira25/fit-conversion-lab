import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Flame } from "lucide-react";
import productWhey from "@/assets/product-whey.jpg";
import productPreworkout from "@/assets/product-preworkout.jpg";
import productBcaa from "@/assets/product-bcaa.jpg";

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  badge: string;
  badgeColor: string;
  category?: string;
  sizes?: string[];
  colors?: string[];
  gender?: "masculino" | "feminino" | "unissex";
}

const defaultProducts: Product[] = [
  {
    id: 1,
    name: "Whey Protein Isolado",
    description: "30g de proteína por dose. Absorção ultra-rápida para máximo ganho muscular.",
    image: productWhey,
    rating: 4.9,
    reviews: 2847,
    badge: "Mais Vendido",
    badgeColor: "bg-primary",
    category: "Suplementos",
  },
  {
    id: 2,
    name: "Pré-Treino Extreme",
    description: "Energia explosiva, foco mental e pump muscular intenso por horas.",
    image: productPreworkout,
    rating: 4.8,
    reviews: 1923,
    badge: "Alta Demanda",
    badgeColor: "bg-destructive",
    category: "Suplementos",
  },
  {
    id: 3,
    name: "BCAA Recovery",
    description: "Aminoácidos essenciais para recuperação muscular e redução de fadiga.",
    image: productBcaa,
    rating: 4.7,
    reviews: 1456,
    badge: "Novidade",
    badgeColor: "bg-accent",
    category: "Suplementos",
  },
];

interface ProductsSectionProps {
  products?: Product[];
  title?: string;
  subtitle?: string;
  description?: string;
}

const ProductsSection = ({ 
  products = defaultProducts,
  title = "PRODUTOS QUE",
  subtitle = "FUNCIONAM",
  description = "Produtos de alta qualidade para atletas que buscam resultados reais."
}: ProductsSectionProps) => {

  return (
    <section id="produtos" className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold uppercase tracking-wider text-sm mb-4">
            Nossos produtos
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            {title} <span className="text-gradient">{subtitle}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product image */}
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Badge */}
                <div className={`absolute top-4 left-4 ${product.badgeColor} px-3 py-1 rounded-full`}>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-foreground">
                    {product.badge}
                  </span>
                </div>
              </div>

              {/* Product info */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-warning fill-warning"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews.toLocaleString()} avaliações)
                  </span>
                </div>

                <h3 className="font-display text-2xl mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* CTA */}
                <Button variant="cta" className="w-full group/btn">
                  <ShoppingCart className="w-5 h-5" />
                  COMPRAR AGORA
                  <Flame className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust message */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            <span className="text-accent font-semibold">✓ Frete Grátis</span> para todo Brasil | 
            <span className="text-accent font-semibold"> ✓ Qualidade Premium</span> garantida | 
            <span className="text-accent font-semibold"> ✓ Garantia</span> de 30 dias
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
