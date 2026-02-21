import { Button } from "@/components/ui/button";
import { Check, FileText, Target, TrendingUp, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContentMarketing = () => {
  const navigate = useNavigate();

  const services = [
    { title: "Blog Writing & Publishing", desc: "SEO-optimized blog posts that drive organic traffic and establish thought leadership" },
    { title: "Video Content Creation", desc: "Engaging video content for YouTube, social media, and your website" },
    { title: "Infographic Design", desc: "Visually compelling infographics that simplify complex information" },
    { title: "E-books & Whitepapers", desc: "In-depth resources that generate leads and showcase expertise" },
    { title: "Email Newsletter Content", desc: "Engaging email content that nurtures leads and drives conversions" },
    { title: "Case Studies", desc: "Compelling success stories that build credibility and trust" },
    { title: "Social Media Content", desc: "Platform-specific content that drives engagement and brand awareness" },
    { title: "Podcast Production", desc: "Audio content that reaches your audience on-the-go" },
    { title: "Content Strategy & Planning", desc: "Comprehensive content roadmaps aligned with your business goals" },
  ]

  const process = [
    { step: "01", title: "Research & Strategy", desc: "We analyze your audience, competitors, and industry to create a winning content strategy" },
    { step: "02", title: "Content Creation", desc: "Our expert writers and designers craft high-quality, engaging content" },
    { step: "03", title: "Optimization & Publishing", desc: "We optimize content for SEO and publish across relevant channels" },
    { step: "04", title: "Analysis & Refinement", desc: "We track performance and continuously refine our approach for better results" },
  ]

  const whyChooseUs = [
    "SEO-Optimized Content Creation",
    "Industry-Focused Research",
    "Consistent Brand Voice",
    "Multi-Platform Content Strategy",
    "Conversion-Focused Writing",
    "Performance Tracking & Reporting",
  ]

  const impact = [
    "Increase organic traffic by up to 300%",
    "Generate 3x more leads than traditional marketing",
    "Build long-term brand authority and trust",
    "Improve search engine rankings",
    "Engage and educate your target audience",
    "Create evergreen assets that deliver ROI over time",
    "Support your sales team with valuable resources",
    "Reduce customer acquisition costs",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
                Engage, Educate & Convert with  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Powerful Content</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We create high-quality, value-driven content that builds brand authority, attracts the right audience, and converts readers into loyal customers
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8" onClick={() => navigate("/contact")} >
                Get Started Today
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-lg border border-border">
                <FileText className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-2xl mb-2">500+</h3>
                <p className="text-muted-foreground">Content Pieces Created</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg border border-border">
                <Users className="h-10 w-10 text-secondary mb-4" />
                <h3 className="font-bold text-2xl mb-2">200+</h3>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg border border-border">
                <TrendingUp className="h-10 w-10 text-accent mb-4" />
                <h3 className="font-bold text-2xl mb-2">85%</h3>
                <p className="text-muted-foreground">Avg. Traffic Increase</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg border border-border">
                <Target className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-2xl mb-2">95%</h3>
                <p className="text-muted-foreground">Client Retention Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="font-display text-4xl font-bold mb-6">
            Why Choose Our Content Marketing Services?
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            We combine creativity, research, and SEO-driven strategies to deliver
            impactful content that builds trust and drives measurable business growth.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-lg border border-border hover:shadow-xl transition"
              >
                <Check className="h-8 w-8 text-primary mb-4 mx-auto" />
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Content Marketing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-4xl font-bold mb-8 text-center">What is Content Marketing?</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Content marketing is a strategic approach focused on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience — and, ultimately, to drive profitable customer action.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Unlike traditional advertising, content marketing provides value to your audience through educational, entertaining, or inspiring content that builds trust and establishes your brand as an industry authority. This approach generates 3x more leads than traditional marketing while costing 62% less.
          </p>
        </div>
      </section>

      {/* Why Content Marketing Matters*/}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-6 text-center">
            Why Content Marketing Matters
          </h2>

          <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            Content marketing helps businesses build trust, establish authority,
            and attract potential customers organically. High-quality content improves
            search engine rankings and keeps your audience engaged. A strong content
            strategy not only drives traffic but also nurtures leads and increases
            long-term brand loyalty.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Improve search engine visibility",
              "Build brand credibility",
              "Increase website traffic",
              "Generate qualified leads",
              "Support social media & paid campaigns",
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-4 bg-card p-6 rounded-lg border border-border">
                <TrendingUp className="h-6 w-6 text-primary mt-1" />
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Our Content Marketing Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow">
                <Check className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact and Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">
            Our Content Marketing Impact
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {impact.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <Check className="h-6 w-6 text-primary mt-1" />
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Our Content Marketing Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Why Choose Our Content Marketing Services?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Increase organic traffic by up to 300%",
              "Generate 3x more leads than traditional marketing",
              "Build long-term brand authority and trust",
              "Improve search engine rankings",
              "Engage and educate your target audience",
              "Create evergreen assets that deliver ROI over time",
              "Support your sales team with valuable resources",
              "Reduce customer acquisition costs",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-primary-foreground">Ready to Transform Your Content Strategy?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let's create content that drives real business results. Get a free content audit today.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-8" onClick={() => window.open("https://wa.me/919589581364", "_blank")}>
            Get Your Free Content Audit
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ContentMarketing;
