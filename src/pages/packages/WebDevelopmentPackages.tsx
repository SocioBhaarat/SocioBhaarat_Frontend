import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const WebDevelopmentPackages = () => {
  const packages = [
    {
      name: "Starter Package",
      price: "₹12,999",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 4 Pages",
        "Responsive Design",
        "Contact Form",
        "Basic SEO Setup",
        "Mobile Optimized",
        "1 Month Support",
        "Social Media Integration",
        "Google Maps Integration"
      ],
      popular: false
    },
    {
      name: "Business Package",
      price: "₹29,999",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10 Pages",
        "Advanced Responsive Design",
        "Contact & Custom Forms",
        "Advanced SEO",
        "CMS Integration",
        "3 Months Support",
        "Analytics Integration",
        "Blog Section",
        "Newsletter Integration"
      ],
      popular: true
    },
    {
      name: "Enterprise Package",
      price: "Custom Pricing",
      description: "Complete solution for large businesses",
      features: [
        "Unlimited Pages",
        "Custom Design & Development",
        "Advanced Features",
        "Full SEO Optimization",
        "Custom CMS",
        "6 Months Support",
        "API Integrations",
        "User Dashboard",
        "Payment Gateway",
        "Advanced Security",
        "Performance Optimization",
        "Dedicated Account Manager"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 mx-0">
              Web Development <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Packages</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect package for your business needs. All packages include responsive design and quality assurance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`p-8 ${pkg.popular ? 'border-primary border-2 shadow-xl' : ''} hover:shadow-lg transition-shadow relative`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-primary mb-2">{pkg.price}</div>
                <p className="text-muted-foreground mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant={pkg.popular ? "default" : "outline"}
                  size="lg"
                  onClick={() => window.open("https://wa.me/919589581364", "_blank")}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>

          <Card className="bg-primary text-primary-foreground p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-lg mb-8 opacity-90">We can create a tailored package based on your specific requirements</p>
            <Button size="lg" variant="secondary" onClick={() => window.open("https://wa.me/919589581364", "_blank")} >
              Request Custom Quote
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentPackages;
