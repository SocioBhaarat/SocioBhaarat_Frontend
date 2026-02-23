import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import QuoteSection from "@/components/ui/QuoteSection";
import {
  ShoppingCart,
  CreditCard,
  Package,
  Shield,
  Check,
  Store,
  Layers,
  Globe,
  TrendingUp
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const EcommerceDevelopment = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: ShoppingCart,
      title: "Custom E-commerce Solutions",
      description: "Tailored online stores built for your unique business needs",
      features: ["Product Catalogs", "Shopping Cart", "Wishlist", "Product Search & Filter"]
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description: "Secure payment gateways for seamless transactions",
      features: ["Multiple Payment Options", "Razorpay Integration", "Stripe Integration", "COD Support"]
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Real-time inventory tracking and management",
      features: ["Stock Management", "Order Tracking", "Automated Alerts", "Supplier Management"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security for customer data protection",
      features: ["SSL Certificates", "PCI Compliance", "Data Encryption", "Secure Checkout"]
    }
  ];

  const process = [
    { step: "Business Requirement Analysis", description: "Understanding your products, audience, and goals" },
    { step: "UI/UX Planning & Store Structure", description: "Designing seamless shopping journeys" },
    { step: "Store Development", description: "Building scalable and high-performing stores" },
    { step: "Payment & Shipping Integration", description: "Integrating secure transactions and logistics" },
    { step: "Testing & Quality Assurance", description: "Ensuring flawless functionality" },
    { step: "Launch & Ongoing Optimization", description: "Continuous monitoring and improvements" }
  ];

  const whyChooseUs = [
    "Experienced E-commerce Developers",
    "Custom & Scalable Store Solutions",
    "Mobile-Optimized Shopping Experience",
    "Secure Payment Gateway Integration",
    "SEO & Performance Optimized",
    "Transparent Process & Ongoing Support"
  ]

  const Technologies = [
    "WooCommerce",
    "Shopify",
    "Magento",
    "WordPress",
    "React.js",
    "Node.js",
    "PHP",
    "MySQL / MongoDB"
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* HERO SECTION */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Launch Your <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              High-Converting & Scalable
            </span> E-commerce Store
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            We design and develop secure, user-friendly, and conversion-focused e-commerce websites that help businesses sell more, manage operations efficiently, and scale with confidence.
          </p>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
            onClick={() => navigate("/contact")}
          >
            Start Your Online Store
          </Button>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="font-display text-4xl font-bold mb-4">
            Why Choose Sociobhaarat for E-commerce Development
          </h2>

          <p className="text-muted-foreground max-w-3xl mx-auto mb-12">
            We combine strategy, technology, and customer-focused design to create e-commerce platforms that deliver seamless shopping experiences and maximize revenue growth.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-lg transition"
              >
                <Check className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SERVICES (Same Card Style as UI/UX) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">
            Our E-commerce Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES WE USE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="font-display text-4xl font-bold mb-12">
            Technologies We Use
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
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

      {/* DEVELOPMENT PROCESS (Same Card Style as UI/UX) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">
            Our Development Process
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-md transition">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.step}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection
        quote="Turning visitors into customers with conversion-focused digital stores."
      />

      {/* FINAL CTA */}
      <section className="my-16 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Grow Your Online Business?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let’s build a powerful e-commerce store that drives revenue and customer satisfaction.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full px-8"
            onClick={() => navigate("/contact")}
          >
            Get Free Consultation
          </Button>
        </div>
      </section>


      {/* <div className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              E-commerce Development Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Build powerful online stores that convert visitors into customers with our comprehensive e-commerce development solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <TrendingUp className="h-4 w-4 text-secondary mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-12 text-center mb-16">
            <Smartphone className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Mobile-First E-commerce</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              70% of online shopping happens on mobile. We build responsive e-commerce stores that work flawlessly on all devices.
            </p>
            <Button size="lg" variant="secondary" onClick={() => navigate("/contact")} >
              Start Your Online Store
            </Button>
          </Card>
        </div>
      </div> */}
    </div>
  );
};

export default EcommerceDevelopment;