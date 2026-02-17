import { Button } from "@/components/ui/button";
import { Check, Search, TrendingUp, FileText, Link2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WebsiteSEO = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Website <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">SEO Services</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Dominate search results and drive organic traffic with our proven SEO strategies. Get found by customers actively searching for your services.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8" onClick={() => navigate("/contact")} >
            Get Free SEO Audit
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Our SEO Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Search, title: "Keyword Research", desc: "In-depth keyword analysis to target the right search terms" },
              { icon: FileText, title: "On-Page SEO", desc: "Optimize content, meta tags, and site structure" },
              { icon: Link2, title: "Link Building", desc: "High-quality backlinks from authoritative websites" },
              { icon: TrendingUp, title: "Technical SEO", desc: "Site speed, mobile optimization, and crawlability" },
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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-4xl font-bold mb-8 text-center">Why SEO Matters</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "93% of online experiences begin with a search engine",
              "SEO leads have a 14.6% close rate vs 1.7% for outbound leads",
              "75% of users never scroll past the first page of search results",
              "Organic search drives 53% of all website traffic",
              "SEO provides 1000%+ ROI compared to traditional marketing",
              "Local searches lead 50% of mobile users to visit stores within one day",
            ].map((stat, index) => (
              <div key={index} className="flex items-start gap-4">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">{stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-primary-foreground">Ready to Rank #1 on Google?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Get a comprehensive SEO audit and custom strategy for your website.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-8" onClick={() => window.open("https://wa.me/919589581364", "_blank")} >
            Claim Your Free SEO Audit
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WebsiteSEO;
