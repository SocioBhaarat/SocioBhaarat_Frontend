import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WordPressDevelopment = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            WordPress <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Development</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Power your website with WordPress - the world's most popular CMS. Custom themes, plugins, and maintenance services.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8" onClick={() => navigate("/contact")} >
            Start Your WordPress Project
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-4xl font-bold mb-8 text-center">Why WordPress?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Powers 43% of all websites on the internet",
              "Easy to use content management system",
              "Thousands of themes and plugins available",
              "SEO-friendly out of the box",
              "Highly customizable and scalable",
              "Cost-effective development",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Our WordPress Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Custom Theme Development",
              "Plugin Development",
              "WooCommerce Setup",
              "WordPress Migration",
              "Speed Optimization",
              "Security Hardening",
              "WordPress Maintenance",
              "Bug Fixes & Updates",
              "Backup & Recovery",
            ].map((service, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg border border-border">
                <Check className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold text-lg">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-primary-foreground">Ready to Build with WordPress?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Get a free consultation for your WordPress development needs.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-8" onClick={() => window.open("https://wa.me/919589581364", "_blank")}>
            Get Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WordPressDevelopment;
