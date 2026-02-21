import { Button } from "@/components/ui/button";
import { Check, Shield, Star, AlertTriangle, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ORMServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Shield,
      title: "Reputation Monitoring & Alerts",
      desc: "Real-time tracking of brand mentions, reviews, and search visibility across digital platforms."
    },
    {
      icon: Star,
      title: "Review Management & Response",
      desc: "Professional handling of customer reviews to build trust and improve ratings."
    },
    {
      icon: AlertTriangle,
      title: "Negative Content Suppression",
      desc: "Strategic SEO techniques to reduce the visibility of harmful or misleading content."
    },
    {
      icon: TrendingUp,
      title: "Positive Content Promotion",
      desc: "Promoting testimonials, achievements, and success stories to strengthen brand image."
    },
    {
      icon: Shield,
      title: "Brand Image Building",
      desc: "Developing authority-driven content strategies to enhance online credibility."
    },
    {
      icon: AlertTriangle,
      title: "Crisis Management Strategy",
      desc: "Rapid response planning and execution to control and recover from reputation crises."
    },
    {
      icon: TrendingUp,
      title: "Online PR & Media Outreach",
      desc: "Improving brand visibility through digital PR campaigns and authoritative publications."
    },
    {
      icon: Star,
      title: "Competitor Reputation Analysis",
      desc: "Monitoring competitor strategies to position your brand ahead in the market."
    },
  ]

  const whyChooseUs = [
    "24/7 Reputation Monitoring",
    "Expert Review Response Management",
    "Negative Content Suppression",
    "SEO-Based Brand Protection",
    "Crisis Management Strategies",
    "Transparent Reporting & Analysis",
  ]

  const whatIncluded = [
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
  ]

  const WhyORMMatters = [
    "90% of consumers read online reviews before visiting a business",
    "88% trust online reviews as much as personal recommendations",
    "A one-star increase can lead to 5-9% revenue increase",
    "It takes 12 positive experiences to make up for one negative review",
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Protect & Strengthen Your <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Brand Reputation</span> Online
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            We help businesses monitor, manage, and improve their online reputation by handling reviews, suppressing negative content, and promoting positive brand visibility
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8" onClick={() => navigate("/contact")} >
            Protect Your Reputation
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/40">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-6 text-center">
            Why Choose Us
          </h2>

          <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            We combine strategic monitoring, professional response management, and advanced SEO techniques to protect and enhance your brand’s online image.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((point, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border shadow-md">
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary mt-1" />
                  <p className="text-lg font-medium">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ORM Matters */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-4xl font-bold mb-8 text-center">Why ORM Matters</h2>
          <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            In today’s digital world, customers trust online reviews and search results before making decisions.
            A single negative review or harmful content can impact your brand credibility.
            Online Reputation Management ensures your business maintains a positive image,
            builds customer trust, and stays ahead of competitors.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {WhyORMMatters.map((stat, index) => (
              <div key={index} className="flex items-start gap-4 bg-card p-6 rounded-lg border border-border hover:shadow-md ">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">{stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">
            Our ORM Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-lg border border-border text-center hover:shadow-xl transition duration-300"
              >
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
