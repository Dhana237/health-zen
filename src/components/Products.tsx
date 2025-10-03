import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import vitaminsImg from "@/assets/product-vitamins.jpg";
import painReliefImg from "@/assets/product-pain-relief.jpg";
import firstAidImg from "@/assets/product-first-aid.jpg";
import thermometerImg from "@/assets/product-thermometer.jpg";
import bpMonitorImg from "@/assets/product-bp-monitor.jpg";
import sanitizerImg from "@/assets/product-sanitizer.jpg";

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}

const Products = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Multivitamin Complex",
      price: "$24.99",
      description: "Complete daily nutrition with essential vitamins and minerals for overall health.",
      image: vitaminsImg,
    },
    {
      id: 2,
      name: "Pain Relief Tablets",
      price: "$12.99",
      description: "Fast-acting pain relief for headaches, muscle aches, and minor pains.",
      image: painReliefImg,
    },
    {
      id: 3,
      name: "First Aid Kit",
      price: "$34.99",
      description: "Comprehensive first aid supplies for home and travel emergencies.",
      image: firstAidImg,
    },
    {
      id: 4,
      name: "Digital Thermometer",
      price: "$18.99",
      description: "Accurate temperature readings in seconds with easy-to-read display.",
      image: thermometerImg,
    },
    {
      id: 5,
      name: "Blood Pressure Monitor",
      price: "$49.99",
      description: "Professional-grade home monitoring for accurate blood pressure tracking.",
      image: bpMonitorImg,
    },
    {
      id: 6,
      name: "Hand Sanitizer",
      price: "$8.99",
      description: "Premium antibacterial formula that kills 99.9% of germs instantly.",
      image: sanitizerImg,
    },
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover our range of high-quality healthcare products and wellness solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-border group"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    {product.price}
                  </span>
                  <Button size="sm" className="gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
