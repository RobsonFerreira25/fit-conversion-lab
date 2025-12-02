import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Flame } from "lucide-react";
import productWhey from "@/assets/product-whey.jpg";
import productPreworkout from "@/assets/product-preworkout.jpg";
import productBcaa from "@/assets/product-bcaa.jpg";

const products = [
  {
    id: 1,
    name: "Whey Protein Isolado",
    description: "30g de proteína por dose. Absorção ultra-rápida para máximo ganho muscular.",
    image: productWhey,
    originalPrice: 249.90,
    salePrice: 149.90,
    rating: 4.9,
    reviews: 2847,
    badge: "Mais Vendido",
    badgeColor: "bg-primary",
  },
  {
    id: 2,
    name: "Pré-Treino Extreme",
    description: "Energia explosiva, foco mental e pump muscular intenso por horas.",
    image: productPreworkout,
    originalPrice: 179.90,
    salePrice: 109.90,
    rating: 4.8,
    reviews: 1923,
    badge: "Alta Demanda",
    badgeColor: "bg-destructive",
  },
  {
    id: 3,
    name: "BCAA Recovery",
    description: "Aminoácidos essenciais para recuperação muscular e redução de fadiga.",
    image: productBcaa,
    originalPrice: 159.90,
    salePrice: 99.90,
    rating: 4.7,
    reviews: 1456,
    badge: "Novidade",
    badgeColor: "bg-accent",
  },
];

const ProductsSection = () => {
  const calculateDiscount = (original: number, sale: number) => {
    return Math.round(((original - sale) / original) * 100);
  };

  return (
    <section id="produtos" className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold uppercase tracking-wider text-sm mb-4">
            Nossos produtos
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            SUPLEMENTOS QUE <span className="text-gradient">FUNCIONAM</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Fórmulas cientificamente desenvolvidas para atletas que buscam resultados reais.
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
                {/* Discount badge */}
                <div className="absolute top-4 right-4 bg-destructive px-3 py-1 rounded-full">
                  <span className="text-xs font-bold text-destructive-foreground">
                    -{calculateDiscount(product.originalPrice, product.salePrice)}%
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

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl font-bold text-primary">
                    R$ {product.salePrice.toFixed(2).replace(".", ",")}
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                  </span>
                </div>

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
            <span className="text-accent font-semibold"> ✓ Parcelamento</span> em até 12x | 
            <span className="text-accent font-semibold"> ✓ Garantia</span> de 30 dias
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
