import { Button } from "./ui/button";
import { ArrowRight, ShieldCheck, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-pharmacy.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern pharmacy with healthcare products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-secondary/90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Your Trusted Partner in
            <span className="block text-accent">Healthcare Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Quality medicines, expert care, and wellness products delivered with trust and convenience. 
            Experience healthcare the way it should be.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" variant="hero" className="text-base">
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Learn More
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-primary-foreground">
              <div className="bg-primary-foreground/20 p-3 rounded-lg backdrop-blur-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold">100% Authentic</div>
                <div className="text-sm text-primary-foreground/80">Verified Products</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-primary-foreground">
              <div className="bg-primary-foreground/20 p-3 rounded-lg backdrop-blur-sm">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold">Fast Delivery</div>
                <div className="text-sm text-primary-foreground/80">24/7 Service</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-primary-foreground">
              <div className="bg-primary-foreground/20 p-3 rounded-lg backdrop-blur-sm">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold">Expert Care</div>
                <div className="text-sm text-primary-foreground/80">Trusted by Thousands</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
