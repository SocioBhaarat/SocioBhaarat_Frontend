import { Button } from "@/components/ui/button";
import { Check, Instagram, Facebook, Linkedin, Twitter, Youtube, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SocialMedia = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Social Media <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Marketing</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Build a powerful social presence that drives engagement, loyalty, and conversions across all major platforms.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8" onClick={() => navigate("/contact")} >
            Start Growing Today
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Platforms We Master</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: Facebook, name: "Facebook", color: "text-blue-600" },
              { icon: Instagram, name: "Instagram", color: "text-pink-600" },
              { icon: Linkedin, name: "LinkedIn", color: "text-blue-700" },
              { icon: Twitter, name: "Twitter", color: "text-sky-500" },
              { icon: Youtube, name: "YouTube", color: "text-red-600" },
            ].map((platform, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg border border-border text-center hover:shadow-xl transition-shadow">
                <platform.icon className={`h-12 w-12 ${platform.color} mx-auto mb-4`} />
                <h3 className="font-bold text-lg">{platform.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Social Media Strategy Development",
              "Content Creation & Design",
              "Community Management",
              "Paid Social Advertising",
              "Influencer Marketing",
              "Social Media Audit & Competitor Analysis",
              "Analytics & Performance Reporting",
              "Crisis Management & Reputation Monitoring",
            ].map((service, index) => (
              <div key={index} className="flex items-start gap-4 bg-card p-6 rounded-lg border border-border">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">{service}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-primary-foreground">Ready to Dominate Social Media?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let's create a social media strategy that drives real business results.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-8" onClick={() => navigate("/contact")}>
            Get Your Free Social Audit
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SocialMedia;
