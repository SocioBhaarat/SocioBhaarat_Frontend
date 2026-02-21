import { Button } from "@/components/ui/button";
import { Check, MapPin, Star, Search, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GoogleMapMarketing = () => {
  const navigate = useNavigate();

  const services = [
    { icon: MapPin, title: "Google Business Profile Setup & Optimization", desc: "Complete setup, verification, and profile optimization." },
    { icon: Search, title: "Local Keyword Research", desc: "Target high-converting local keywords for map ranking." },
    { icon: Star, title: "Review Generation & Management", desc: "Build trust with strategic review acquisition and responses." },
    { icon: TrendingUp, title: "Map Ranking Improvement", desc: "Advanced strategies to improve local pack ranking." },
    { icon: Check, title: "NAP Optimization", desc: "Consistent Name, Address, and Phone across platforms." },
    { icon: MapPin, title: "Local Citation Building", desc: "High-quality local directory submissions." },
    { icon: Search, title: "Competitor Map Analysis", desc: "Analyze top competitors and outrank them strategically." },
    { icon: TrendingUp, title: "Monthly Performance Reporting", desc: "Transparent reports with measurable growth insights." },
  ]

  const whyChooseUs = [
    "Google Business Profile Optimization",
    "Local Keyword Targeting",
    "Review & Rating Management",
    "Competitor Local Analysis",
    "Map Ranking Improvement Strategies",
    "Transparent Local SEO Reporting",
  ]

  const whatIncluded = [
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
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Rank Higher on <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Google Maps</span> & Get More Local Customers
          </h1>
          <p className="text-xl text-black mb-8 leading-relaxed max-w-3xl mx-auto">
            We help businesses improve their Google Maps visibility, optimize their Google Business Profile, and attract more local customers through strategic local SEO solutions
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8" onClick={() => navigate("/contact")} >
            Optimize My Listing
          </Button>
        </div>
      </section>

      {/* Why Choose us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-4 text-center">
            Why Choose Us?
          </h2>

          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            We combine local SEO expertise, Google Business Profile optimization,
            and review management strategies to help your business dominate local
            search results.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-md border border-border hover:shadow-xl transition-all duration-300"
              >
                <Check className="h-8 w-8 text-primary mb-4 mx-auto" />
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Google Map Marketing */}
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

      {/* Why Google Map Marketing Matters */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-4 text-center">
            Why Google Map Marketing Matters
          </h2>

          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            When customers search for services near them, Google Maps is often their
            first choice. A well-optimized Google Business Profile increases
            visibility, builds trust, and drives foot traffic or local inquiries.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Increase local visibility",
              "Attract nearby customers",
              "Improve online reviews and ratings",
              "Drive more calls and store visits",
              "Gain competitive advantage in local search",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300"
              >
                <Check className="h-8 w-8 text-primary mb-4 mx-auto" />
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Our GMB Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
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

      {/* Whats's Included */}
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
