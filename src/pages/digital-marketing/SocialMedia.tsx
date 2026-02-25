import { Button } from "@/components/ui/button";
import QuoteSection from "@/components/ui/QuoteSection";
import { Check, Instagram, Facebook, Linkedin, Twitter, Youtube, TrendingUp } from "lucide-react";
import { platform } from "os";
import { useNavigate } from "react-router-dom";

const SocialMedia = () => {
  const navigate = useNavigate();

  const services = [
    "Social Media Strategy Development",
    "Content Creation & Design",
    "Community Management",
    "Paid Social Advertising",
    "Influencer Marketing",
    "Social Media Audit & Competitor Analysis",
    "Analytics & Performance Reporting",
    "Crisis Management & Reputation Monitoring",
  ]

  const whyChooseUs = [
    "Experienced Social Media Experts",
    "Customized Marketing Strategies",
    "Creative & Engaging Content",
    "Targeted Paid Advertising Campaigns",
    "Real-Time Performance Tracking",
    "Transparent Reporting & Analytics",
  ]

  const impact = [
    { number: "150+", label: "Brands Served" },
    { number: "500K+", label: "Leads Generated" },
    { number: "10M+", label: "Audience Reached" },
    { number: "98%", label: "Client Satisfaction" },
  ]

  const platforms = [
    { icon: Facebook, name: "Facebook", color: "text-blue-600" },
    { icon: Instagram, name: "Instagram", color: "text-pink-600" },
    { icon: Linkedin, name: "LinkedIn", color: "text-blue-700" },
    { icon: Twitter, name: "Twitter", color: "text-sky-500" },
    { icon: Youtube, name: "YouTube", color: "text-red-600" },
  ]

  const WhyMatters = [
    "Boost Brand Awareness",
    "Increase Customer Engagement",
    "Generate Qualified Leads",
    "Build Brand Trust & Authority",
    "Drive Website Traffic",
    "Convert Followers into Loyal Customers",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Grow Your Brand with Strategic <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Social Media Marketing</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            We help businesses connect with their target audience, increase brand awareness, and drive measurable growth through result-oriented social media strategies
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8" onClick={() => navigate("/contact")} >
            Start Growing Today
          </Button>
        </div>
      </section>

      {/* Why choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="font-display text-4xl font-bold mb-6">
            Why Sociobhaarat Excels in Social Media Marketing
          </h2>

          <p className="text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
            We combine creativity, strategy, and data-driven execution to deliver impactful social media campaigns that generate real business results.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-lg transition">
                <Check className="h-8 w-8 text-primary mb-4 mx-auto" />
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why do you need Social Media Marketing Section OR Why Matters*/}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="font-display text-4xl font-bold mb-6">
            Why Do You Need Social Media Marketing?
          </h2>

          <p className="text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
            Social media is where your customers spend their time, discover brands, and make purchasing decisions.
            A strong social presence helps you stay visible, relevant, and competitive.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {WhyMatters.map((point, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border">
                <TrendingUp className="h-8 w-8 text-secondary mb-4 mx-auto" />
                <p className="font-semibold">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms we master */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Platforms We Master</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg border border-border text-center hover:shadow-xl transition-shadow">
                <platform.icon className={`h-12 w-12 ${platform.color} mx-auto mb-4`} />
                <h3 className="font-bold text-lg">{platform.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
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

      {/* Impact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="font-display text-4xl font-bold mb-12">
            Our Impact in Numbers
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {impact.map((item, index) => (
              <div key={index} className="bg-card p-8 rounded-xl border border-border shadow-md">
                <h3 className="text-3xl font-bold text-primary mb-2">{item.number}</h3>
                <p className="text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection
        quote="Building meaningful connections that turn followers into loyal customers."
      />

      {/* Final CTA Button */}
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
