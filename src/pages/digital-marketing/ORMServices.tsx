import { Button } from "@/components/ui/button";
import { Check, Shield, Star, AlertTriangle, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ORMServices = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Online Reputation <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Management</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Protect and enhance your brand's online reputation. Monitor, manage, and improve how your business is perceived online.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8" onClick={() => navigate("/contact")} >
            Protect Your Reputation
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-4xl font-bold mb-8 text-center">Why ORM Matters</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "90% of consumers read online reviews before visiting a business",
              "88% trust online reviews as much as personal recommendations",
              "A one-star increase can lead to 5-9% revenue increase",
              "It takes 12 positive experiences to make up for one negative review",
            ].map((stat, index) => (
              <div key={index} className="flex items-start gap-4 bg-card p-6 rounded-lg border border-border">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">{stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Our ORM Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Reputation Monitoring", desc: "24/7 monitoring of brand mentions across the web" },
              { icon: Star, title: "Review Management", desc: "Generate and respond to customer reviews" },
              { icon: AlertTriangle, title: "Crisis Management", desc: "Quick response to negative content and crises" },
              { icon: TrendingUp, title: "Brand Building", desc: "Positive content creation and promotion" },
            ].map((service, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg border border-border text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-4xl font-bold mb-8 text-center">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Brand mention monitoring across web and social media",
              "Review monitoring on Google, Facebook, Yelp, etc.",
              "Sentiment analysis and reporting",
              "Review response management",
              "Negative content suppression",
              "Positive content creation and promotion",
              "Crisis management planning",
              "Competitor reputation analysis",
              "Monthly reputation reports",
              "Review generation campaigns",
            ].map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-primary-foreground">Protect Your Online Reputation</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Get a free reputation audit and see what people are saying about your brand.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-8" onClick={() => window.open("https://wa.me/919589581364", "_blank")}>
            Get Free Reputation Audit
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ORMServices;
