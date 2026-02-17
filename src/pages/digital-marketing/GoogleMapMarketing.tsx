import { Button } from "@/components/ui/button";
import { Check, MapPin, Star, Search, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GoogleMapMarketing = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Google Map <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Marketing & SEO</span>
          </h1>
          <p className="text-xl text-black mb-8 leading-relaxed max-w-3xl mx-auto">
            Dominate local search results and get found by customers in your area. Optimize your Google My Business profile for maximum visibility.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8" onClick={() => navigate("/contact")} >
            Optimize My Listing
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-4xl font-bold mb-8 text-center">What is Google Map Marketing?</h2>
          <p className="text-lg text-black mb-6 leading-relaxed">
            Google Map Marketing, also known as Local SEO or Google My Business (GMB) optimization, helps your business appear in local search results and Google Maps when customers search for products or services near them.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">46%</div>
              <p className="text-muted-foreground">Of Google searches are local</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">76%</div>
              <p className="text-muted-foreground">Visit within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">28%</div>
              <p className="text-muted-foreground">Result in purchase</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Our GMB Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MapPin, title: "Profile Setup", desc: "Complete GMB profile optimization" },
              { icon: Star, title: "Review Management", desc: "Build and manage 5-star reviews" },
              { icon: Search, title: "Local SEO", desc: "Rank higher in local search" },
              { icon: TrendingUp, title: "Performance Tracking", desc: "Monthly insights and reports" },
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
              "Complete GMB profile setup and verification",
              "Business category and attribute optimization",
              "Keyword-rich business description",
              "High-quality business photos and videos",
              "Regular post updates and offers",
              "Review generation and response strategy",
              "Q&A management",
              "Local citation building",
              "Competitor analysis",
              "Monthly performance reports",
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
          <h2 className="font-display text-4xl font-bold mb-6 text-primary-foreground">Get More Local Customers</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Optimize your Google My Business profile and dominate local search today.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-8" onClick={() => window.open("https://wa.me/919589581364", "_blank")}>
            Get Free GMB Audit
          </Button>
        </div>
      </section>
    </div>
  );
};

export default GoogleMapMarketing;
