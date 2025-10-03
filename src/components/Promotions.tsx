import { Button } from "./ui/button";
import { Tag, Percent, Gift } from "lucide-react";

const Promotions = () => {
  const deals = [
    {
      icon: Tag,
      title: "Summer Sale",
      description: "Up to 30% off on all vitamins and supplements",
      discount: "30% OFF",
      color: "from-primary to-primary-light",
    },
    {
      icon: Percent,
      title: "Buy 2 Get 1 Free",
      description: "Special offer on pain relief medications",
      discount: "BOGO",
      color: "from-secondary to-accent",
    },
    {
      icon: Gift,
      title: "New Customer Bonus",
      description: "Get $10 off your first order over $50",
      discount: "$10 OFF",
      color: "from-accent to-secondary",
    },
  ];

  return (
    <section id="promotions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Special Promotions
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't miss out on our exclusive deals and limited-time offers!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="relative bg-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-border group"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${deal.color} opacity-10 rounded-bl-full`}></div>
              
              <div className="p-8 relative">
                <div className={`bg-gradient-to-br ${deal.color} p-4 rounded-lg w-fit mb-6`}>
                  <deal.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
                    {deal.discount}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {deal.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {deal.description}
                  </p>
                </div>
                
                <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                  Claim Offer
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
