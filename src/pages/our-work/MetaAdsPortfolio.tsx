import { Button } from "@/components/ui/button";
import { TrendingUp, Users, DollarSign, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MetaAdsPortfolio = () => {
  const navigate = useNavigate();
  const caseStudies = [
    {
      client: "Fashion E-commerce Brand",
      industry: "E-commerce",
      challenge: "Low ROAS and high cart abandonment rate",
      solution: "Implemented dynamic product ads with retargeting campaigns",
      results: [
        { metric: "ROAS", value: "8.2x", icon: DollarSign },
        { metric: "Conversion Rate", value: "240%↑", icon: TrendingUp },
        { metric: "CAC", value: "65%↓", icon: Target },
        { metric: "Revenue", value: "₹45L/mo", icon: DollarSign },
      ],
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop",
    },
    {
      client: "EdTech Platform",
      industry: "Education",
      challenge: "High cost per lead and low-quality leads",
      solution: "Audience segmentation with lookalike audiences and lead forms",
      results: [
        { metric: "Cost/Lead", value: "72%↓", icon: Target },
        { metric: "Lead Quality", value: "3.5x", icon: Users },
        { metric: "Enrollments", value: "420%↑", icon: TrendingUp },
        { metric: "ROAS", value: "6.8x", icon: DollarSign },
      ],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Meta Ads <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Real results from real campaigns. See how we've helped businesses achieve exceptional ROI through Facebook & Instagram advertising.
          </p>
        </div>
      </section>

      {/* Overall Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">₹12Cr+</div>
              <p className="text-muted-foreground">Ad Spend Managed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">6.5x</div>
              <p className="text-muted-foreground">Average ROAS</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">150+</div>
              <p className="text-muted-foreground">Successful Campaigns</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <p className="text-muted-foreground">Client Retention</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Success Stories</h2>
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <img
                    src={study.image}
                    alt={study.client}
                    className="rounded-lg shadow-lg w-full h-[300px] object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    {study.industry}
                  </div>
                  <h3 className="font-display text-3xl font-bold mb-4">{study.client}</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-lg mb-2">Challenge:</h4>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-2">Solution:</h4>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {study.results.map((result, i) => (
                      <div key={i} className="bg-card p-4 rounded-lg border border-border">
                        <result.icon className="h-6 w-6 text-primary mb-2" />
                        <div className="font-bold text-2xl mb-1">{result.value}</div>
                        <div className="text-sm text-muted-foreground">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-primary-foreground">Ready to Scale Your Business?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let's create a winning Meta Ads strategy for your business. Get a free audit today.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-8"  onClick={() => navigate("/contact")} >
            Get Your Free Meta Ads Audit
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MetaAdsPortfolio;
