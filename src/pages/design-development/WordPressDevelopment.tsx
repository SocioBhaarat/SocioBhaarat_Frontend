import { Button } from "@/components/ui/button";
import QuoteSection from "@/components/ui/QuoteSection";
import { Building2, Check, Code2, Gauge, Layers, Newspaper, Palette, Puzzle, RefreshCw, Rocket, Shield, ShieldCheck, ShoppingCart, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WordPressDevelopment = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: "Custom WordPress Website Development",
      icon: <Code2 className="h-8 w-8 text-primary" />,
    },
    {
      title: "WordPress Theme Design & Customization",
      icon: <Palette className="h-8 w-8 text-primary" />,
    },
    {
      title: "Plugin Development & Integration",
      icon: <Puzzle className="h-8 w-8 text-primary" />,
    },
    {
      title: "WooCommerce Development",
      icon: <ShoppingCart className="h-8 w-8 text-primary" />,
    },
    {
      title: "Business & Corporate Websites",
      icon: <Building2 className="h-8 w-8 text-primary" />,
    },
    {
      title: "Blog & News Portal Development",
      icon: <Newspaper className="h-8 w-8 text-primary" />,
    },
    {
      title: "WordPress Migration Services",
      icon: <RefreshCw className="h-8 w-8 text-primary" />,
    },
    {
      title: "Website Speed Optimization",
      icon: <Gauge className="h-8 w-8 text-primary" />,
    },
    {
      title: "WordPress Maintenance & Security",
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    },
  ]

  const process = [
    "Requirement Analysis & Planning",
    "UI/UX Design",
    "Frontend & Backend Development",
    "Testing & Quality Assurance",
    "Deployment",
    "Ongoing Support & Optimization",
  ]

  const whyChooseUs = [
    "Experienced WordPress Developers",
    "Custom Theme Development",
    "Plugin Integration & Customization",
    "SEO-Optimized Structure",
    "Mobile-Responsive Design",
    "Secure & Performance-Focused Development",
    "Transparent Communication & Support",
  ]

  const Technologies = [
    "WordPress CMS",
    "Elementor / WPBakery",
    "WooCommerce",
    "PHP",
    "MySQL",
    "HTML5 / CSS3 / JavaScript",
    "Yoast & RankMath SEO",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Build powerful & Scalable <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">WordPress Websites</span> for Your Business
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            We design and develop high-performance, secure, and fully customizable WordPress websites tailored to your business goals. From corporate sites to e-commerce stores, we deliver solutions that convert visitors into customers
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8" onClick={() => navigate("/contact")} >
            Start Your WordPress Project
          </Button>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-4 text-center">
            Why Sociobhaarat is Best for WordPress Development
          </h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            We combine creative design, technical expertise, and strategic planning
            to deliver WordPress websites that are fast, secure, SEO-friendly, and easy to manage.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <Check className="h-6 w-6 text-primary mb-4 mx-auto" />
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* WHY YOU NEED WORDPRESS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">
            Why Do You Need WordPress Development?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-card p-8 rounded-xl shadow-md border border-border hover:shadow-xl transition">
              <Rocket className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Grow Online Presence</h3>
              <p className="text-muted-foreground">
                Establish a strong digital presence with a scalable and future-ready website.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-md border border-border hover:shadow-xl transition">
              <Smartphone className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Mobile Responsive</h3>
              <p className="text-muted-foreground">
                Reach customers on every device with responsive and optimized layouts.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-md border border-border hover:shadow-xl transition">
              <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Secure & SEO Ready</h3>
              <p className="text-muted-foreground">
                Built with strong security and SEO structure to rank higher on search engines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">
            Our WordPress Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card p-6 rounded-xl shadow-md border border-border 
                hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="mb-4 p-3 w-fit rounded-lg bg-primary/10 group-hover:bg-primary/20 transition mx-auto">
                  {service.icon}
                </div>

                <h3 className="font-semibold text-lg leading-snug text-center">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="font-display text-4xl font-bold mb-8">
            Technologies & Tools We Use
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
            {Technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-bold mb-10">
            Our Development Process
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {process.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <Check className="h-6 w-6 text-primary mt-1" />
                <p className="font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection
        quote="Flexible, powerful WordPress solutions built to scale with your vision."
      />

      {/* Final CTA Button */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-primary-foreground">Ready to Build with WordPress?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Get a free consultation for your WordPress development needs.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-8" onClick={() => window.open("https://wa.me/919589581364", "_blank")}>
            Get Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WordPressDevelopment;
