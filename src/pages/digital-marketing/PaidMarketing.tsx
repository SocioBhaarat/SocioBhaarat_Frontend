import { Button } from "@/components/ui/button";
import { Check, TrendingUp, Target, DollarSign, BarChart } from "lucide-react";
import { platform } from "os";
import { useNavigate } from "react-router-dom";

const PaidMarketing = () => {
  const navigate = useNavigate();

  const services = [
    "Meta (Facebook & Instagram) Ads",
    "Google Search Ads",
    "Google Display Ads",
    "YouTube Video Ads",
    "Remarketing & Retargeting Campaigns",
    "Conversion Tracking Setup",
    "Landing Page Optimization",
    "Performance Analysis & Reporting",
  ]

  const whyChooseUs = [
    "Certified Ads Specialists",
    "Advanced Audience Targeting",
    "ROI-Focused Campaign Strategy",
    "A/B Testing & Optimization",
    "Budget Control & Scaling",
    "Transparent Reporting & Insights",
  ]

  const whatIncluded = [
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
  ]

  const WhyMatters = [
    "Instant visibility on search & social platforms",
    "Highly targeted audience reach",
    "Faster lead generation",
    "Measurable ROI",
    "Scalable growth opportunities",
  ]

  const Platforms = [
    { title: "Google Ads", desc: "Search, Display, Shopping, and YouTube ads" },
    { title: "Facebook Ads", desc: "Targeted campaigns for engagement and conversions" },
    { title: "Instagram Ads", desc: "Visual storytelling that drives action" },
    { title: "LinkedIn Ads", desc: "B2B lead generation and brand awareness" },
    { title: "Twitter Ads", desc: "Real-time engagement and brand building" },
    { title: "Programmatic Ads", desc: "Automated bidding across ad exchanges" },
  ]

  const Approach = [
    { icon: Target, title: "Targeting", desc: "Precise audience targeting based on demographics, interests, and behavior" },
    { icon: BarChart, title: "Testing", desc: "Continuous A/B testing to optimize ad performance" },
    { icon: TrendingUp, title: "Optimization", desc: "Daily monitoring and bid adjustments for maximum ROI" },
    { icon: DollarSign, title: "Scaling", desc: "Scale winning campaigns to maximize returns" },
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Drive Instant Traffic & <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Leads with Paid Marketing</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            We create high-converting Meta and Google ad campaigns that drive targeted traffic, generate quality leads, and maximize return on investment through data-driven paid marketing strategies
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8" onClick={() => navigate("/contact")} >
            Start Your Campaign
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="font-display text-4xl font-bold mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground mb-12 max-w-3xl mx-auto">
            We combine performance-driven strategies, audience targeting precision,
            and continuous optimization to deliver profitable and scalable paid advertising campaigns.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((point, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg">{point}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why Paid Marketing Matters */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="font-display text-4xl font-bold mb-4">
            Why Paid Marketing Matters
          </h2>
          <p className="text-muted-foreground mb-12 max-w-3xl mx-auto">
            Paid marketing helps businesses reach their ideal customers instantly and
            generate faster results compared to organic strategies. With precise
            targeting and measurable performance, Meta and Google Ads increase visibility,
            drive traffic, and boost conversions efficiently.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {WhyMatters.map((point, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 shadow-sm"
              >
                <p className="font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">
            Our Paid Marketing Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Platforms We Advertise On</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Platforms.map((platform, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg border border-border">
                <h3 className="font-bold text-xl mb-3">{platform.title}</h3>
                <p className="text-muted-foreground">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {Approach.map((item, index) => (
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

      {/* What's Included */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-4xl font-bold mb-8 text-center">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whatIncluded.map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Button */}
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
