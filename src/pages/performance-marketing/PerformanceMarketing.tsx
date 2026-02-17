import { Button } from "@/components/ui/button";
import { Check, BarChart, Target, DollarSign, TrendingUp, FileSearch, ShoppingCart, Briefcase, Heart, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PerformanceMarketing = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Performance <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Marketing Services</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Pay only for results. Our data-driven performance marketing strategies deliver measurable ROI through optimized campaigns across Google Ads, Facebook Ads, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"  onClick={() => navigate("/contact")} >
              Get Free Audit
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-4xl font-bold mb-8 text-center">What is Performance Marketing?</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Performance marketing is a results-driven approach where you only pay when specific actions are completed—such as clicks, leads, or sales. Unlike traditional advertising, every rupee spent is tied directly to measurable outcomes.
          </p>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Our performance marketing strategies leverage advanced analytics, A/B testing, and continuous optimization to maximize your return on ad spend (ROAS) and minimize customer acquisition costs (CAC).
          </p>
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.2x</div>
              <p className="text-muted-foreground">Average ROAS</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">65%</div>
              <p className="text-muted-foreground">Lower CAC</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">300+</div>
              <p className="text-muted-foreground">Campaigns Managed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">₹50Cr+</div>
              <p className="text-muted-foreground">Ad Spend Managed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Our Performance Marketing Process</h2>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { icon: FileSearch, title: "Business Audit", desc: "Comprehensive analysis of your business, competitors, and market opportunities" },
              { icon: Target, title: "Strategy Development", desc: "Custom performance marketing strategy aligned with your goals and budget" },
              { icon: BarChart, title: "Campaign Setup", desc: "Platform setup, pixel installation, and campaign structure optimization" },
              { icon: TrendingUp, title: "Launch & Optimize", desc: "Campaign launch with continuous A/B testing and optimization" },
              { icon: DollarSign, title: "Scale & Report", desc: "Scale winning campaigns and provide detailed performance reports" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">What's Included in Our Service</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Google Ads Management (Search, Display, Shopping)",
              "Facebook & Instagram Ads",
              "LinkedIn Advertising",
              "YouTube Video Ads",
              "Programmatic Advertising",
              "Landing Page Optimization",
              "Conversion Rate Optimization (CRO)",
              "Retargeting & Remarketing Campaigns",
              "A/B Testing & Experimentation",
              "Analytics & Attribution Tracking",
              "Weekly Performance Reports",
              "Dedicated Account Manager",
            ].map((service, index) => (
              <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Industries We Serve Best</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShoppingCart, title: "E-commerce", desc: "Drive sales and increase ROAS for online stores" },
              { icon: Briefcase, title: "B2B Services", desc: "Generate high-quality leads for service businesses" },
              { icon: Heart, title: "Healthcare", desc: "Patient acquisition and appointment bookings" },
              { icon: Home, title: "Real Estate", desc: "Property leads and site visits" },
            ].map((industry, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg border border-border text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">{industry.title}</h3>
                <p className="text-muted-foreground">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-4xl font-bold mb-8 text-center">Transparent Pricing & Payment Terms</h2>
          <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-xl mb-3">Our Pricing Model</h3>
                <p className="text-muted-foreground">We charge a management fee of 15-20% of your monthly ad spend, depending on campaign complexity and volume. Minimum monthly ad spend: ₹50,000.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3">Payment Terms</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>50% advance payment before campaign launch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Balance 50% at month-end based on actual ad spend</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Ad budget is paid directly to the platform (Google, Facebook, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>No long-term contracts - monthly rolling agreements</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3">What You Get</h3>
                <p className="text-muted-foreground">Complete campaign management, weekly reports, dedicated account manager, landing page recommendations, and continuous optimization to improve your ROAS.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-primary-foreground">Get Your Free Website & Business Audit</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Discover untapped opportunities and get a custom performance marketing strategy tailored to your business.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-8" onClick={() => window.open("https://wa.me/919589581364", "_blank")}>
            Claim Your Free Audit Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PerformanceMarketing;
