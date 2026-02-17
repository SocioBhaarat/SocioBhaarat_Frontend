import { Button } from "@/components/ui/button";
import { Check, Code, Smartphone, Zap, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WebDevelopment = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Web <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Development</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Custom websites that drive conversions, engage users, and grow your business. Built with the latest technologies for performance and scalability.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8" onClick={() => navigate("/contact")} >
            Start Your Project
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Why Choose Our Web Development Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Smartphone, title: "Responsive Design", desc: "Perfect on all devices and screen sizes" },
              { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed and performance" },
              { icon: Lock, title: "Secure & Reliable", desc: "Built with security best practices" },
              { icon: Code, title: "Clean Code", desc: "Maintainable and scalable architecture" },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg border border-border text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Our Development Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Corporate Websites",
              "E-commerce Platforms",
              "Landing Pages",
              "Web Applications",
              "Progressive Web Apps (PWA)",
              "API Development & Integration",
              "Website Redesign",
              "Website Maintenance",
              "Performance Optimization",
            ].map((service, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg border border-border">
                <Check className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold text-lg">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-4xl font-bold mb-8 text-center">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["React", "Next.js","Three.js", "Node.js", "Express.js", "MongoDB", "MySQL","GSAP", "Framer", "WordPress", "And many more..."].map((tech, index) => (
              <div key={index} className="bg-card p-4 rounded-lg shadow border border-border text-center font-semibold">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-primary-foreground">Ready to Build Your Website?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Get a free consultation and quote for your web development project.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-8" onClick={() => window.open("https://wa.me/919589581364", "_blank")}>
            Get Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
