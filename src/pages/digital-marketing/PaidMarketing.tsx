import { Button } from "@/components/ui/button";
import { Check, TrendingUp, Target, DollarSign, BarChart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PaidMarketing = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Paid <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Marketing Services</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Drive instant traffic and conversions with strategic paid advertising campaigns across Google, Facebook, Instagram, and more.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"  onClick={() => navigate("/contact")} >
            Start Your Campaign
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Platforms We Advertise On</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Google Ads", desc: "Search, Display, Shopping, and YouTube ads" },
              { title: "Facebook Ads", desc: "Targeted campaigns for engagement and conversions" },
              { title: "Instagram Ads", desc: "Visual storytelling that drives action" },
              { title: "LinkedIn Ads", desc: "B2B lead generation and brand awareness" },
              { title: "Twitter Ads", desc: "Real-time engagement and brand building" },
              { title: "Programmatic Ads", desc: "Automated bidding across ad exchanges" },
            ].map((platform, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg border border-border">
                <h3 className="font-bold text-xl mb-3">{platform.title}</h3>
                <p className="text-muted-foreground">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Targeting", desc: "Precise audience targeting based on demographics, interests, and behavior" },
              { icon: BarChart, title: "Testing", desc: "Continuous A/B testing to optimize ad performance" },
              { icon: TrendingUp, title: "Optimization", desc: "Daily monitoring and bid adjustments for maximum ROI" },
              { icon: DollarSign, title: "Scaling", desc: "Scale winning campaigns to maximize returns" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
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
              "Campaign strategy and planning",
              "Ad account setup and structure",
              "Keyword research and audience targeting",
              "Ad creative development",
              "Landing page recommendations",
              "Conversion tracking setup",
              "A/B testing and optimization",
              "Bid management and budget allocation",
              "Weekly performance reports",
              "Dedicated account manager",
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
          <h2 className="font-display text-4xl font-bold mb-6 text-primary-foreground">Ready to Scale Your Business?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Get a free paid advertising audit and custom strategy today.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-8" onClick={() => window.open("https://wa.me/919589581364", "_blank")}>
            Get Your Free Ad Audit
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PaidMarketing;
