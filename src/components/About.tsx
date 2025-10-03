import { Users, Heart, Stethoscope, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Your health and wellbeing are our top priorities. We're committed to providing compassionate, personalized service.",
    },
    {
      icon: Stethoscope,
      title: "Expert Pharmacists",
      description: "Our licensed pharmacists are always available to answer your questions and provide professional healthcare advice.",
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Serving our community with integrity for over 15 years, building lasting relationships based on trust.",
    },
    {
      icon: Clock,
      title: "Always Available",
      description: "Extended hours and 24/7 online support ensure you have access to healthcare when you need it most.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About HealthCare Plus
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're more than just a pharmacy - we're your healthcare partner. With a commitment to quality, 
            authenticity, and exceptional service, we provide the care and products you can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-border"
            >
              <div className="bg-gradient-hero p-4 rounded-lg w-fit mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
