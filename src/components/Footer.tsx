import { Heart, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Quick Links": [
      { name: "About Us", href: "#about" },
      { name: "Products", href: "#products" },
      { name: "Promotions", href: "#promotions" },
      { name: "Contact", href: "#contact" },
    ],
    "Customer Service": [
      { name: "Help Center", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Shipping Info", href: "#" },
    ],
    "Resources": [
      { name: "Health Blog", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Pharmacy Services", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-hero p-2 rounded-lg">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary">HealthCare Plus</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Your trusted partner in healthcare solutions. Quality medicines, expert care, 
              and wellness products delivered with trust and convenience.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground p-2 rounded-lg transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-foreground mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} HealthCare Plus. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Licensed Pharmacy • Trusted Healthcare Provider
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
