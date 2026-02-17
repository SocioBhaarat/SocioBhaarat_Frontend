import { Button } from "@/components/ui/button";

const DigitalMarketingPackages = () => {
  const packages = [
    {
      name: "Starter",
      price: "₹25,000",
      period: "/month",
      description: "Perfect for small businesses starting their digital journey",
      features: [
        "Social Media Management (2 platforms)",
        "8 Posts per month",
        "Basic Graphic Design",
        "Monthly Performance Report",
        "Email Support",
      ],
      notIncluded: [
        "Paid Advertising",
        "SEO Services",
        "Content Marketing",
        "Video Production",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      price: "₹50,000",
      period: "/month",
      description: "Ideal for growing businesses seeking comprehensive marketing",
      features: [
        "Social Media Management (4 platforms)",
        "20 Posts per month",
        "Advanced Graphic Design",
        "Basic SEO (10 keywords)",
        "Google My Business Optimization",
        "Monthly Blog Posts (2)",
        "Bi-weekly Performance Reports",
        "WhatsApp & Email Support",
        "Competitor Analysis",
      ],
      notIncluded: [
        "Paid Advertising Management",
        "Video Production",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "₹1,00,000",
      period: "/month",
      description: "Complete digital marketing solution for established businesses",
      features: [
        "Social Media Management (All platforms)",
        "40 Posts per month",
        "Premium Graphic & Video Content",
        "Advanced SEO (30 keywords)",
        "Google Ads Management (₹50k budget included)",
        "Facebook/Instagram Ads Management",
        "Content Marketing (4 blogs/month)",
        "Email Marketing Campaigns",
        "ORM Services",
        "Weekly Performance Reports",
        "Dedicated Account Manager",
        "24/7 Priority Support",
        "Quarterly Strategy Sessions",
      ],
      notIncluded: [],
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Digital Marketing <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Packages</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Choose the perfect package for your business goals. All packages include dedicated support and transparent reporting.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-card rounded-lg shadow-lg border-2 ${
                  pkg.highlighted ? 'border-primary scale-105' : 'border-border'
                } p-8 relative`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="font-display text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground">{pkg.period}</span>
                  </div>
                  <Button className={`w-full ${pkg.highlighted ? 'bg-primary hover:bg-primary/90' : ''}`} onClick={() => window.open("https://wa.me/919589581364", "_blank")}>
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xl text-center mt-8">
          *All services will be provided according to your business requirements and selected budget.*
        </p>
      </section>

      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold mb-12 text-left sm:text-center text-primary">
            We offer customized services under these packages,tailored to your specific business goals.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {[
              "SOCIAL MEDIA MANAGEMENT",
              "GRAPHIC DESIGNING",
              "VIDEO PRODUCTION / EDITING",
              "META ADS ACCOUNT SETTUP / VERIFICATION",
              "GOOGLE ADS ACCOUNT SETTUP / VERIFICATION",
              "CONTENT PLANNING",
              "GOOGLE BUSINESS PROFILE SETUP / MGMT",
              "WEBSITE DEVELOPMENT",
              "WHATSAPP API / MARKETING",
              "TELECALLING",
              "SALES SUPPORT / LEADS FILTERING",
              "SEARCH ENGINE OPTIMISATION / GOOGLE RANKING",
              "ONLINE REPUTATION MANAGEMENT SERVICES",
              "WORDPRESS WEBSITE",
              "PERFORMANCE MARKETING"
            ].map((service, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg border border-border">
                <h3 className="font-semibold text-lg">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-bold mb-6">Need a Custom Package?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Click the button below so our experts can reach out to you.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8" onClick={() => window.open("https://wa.me/919589581364", "_blank")} >
            Request Custom Quote
          </Button>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPackages;
