import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const WhatsAppPackages = () => {
  const packages = [
    {
      name: "Basic Package",
      price: "₹Get quote",
      description: "For small businesses starting with WhatsApp",
      features: [
        "Up to 5,000 Messages/month",
        "Basic Chatbot",
        "Broadcast Messages",
        "Quick Replies",
        "Basic Analytics",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Professional Package",
      price: "Get quote",
      description: "Most popular for growing businesses",
      features: [
        "Up to 20,000 Messages/month",
        "Advanced Chatbot",
        "Broadcast Campaigns",
        "Contact Management",
        "Advanced Analytics",
        "Template Messages",
        "CRM Integration",
        "Priority Support",
        "Custom Workflows"
      ],
      popular: true
    },
    {
      name: "Enterprise Package",
      price: "Get quote",
      description: "For large-scale operations",
      features: [
        "Unlimited Messages",
        "AI-Powered Chatbot",
        "Advanced Automation",
        "Multi-Agent Support",
        "Custom API Integration",
        "Dedicated Account Manager",
        "24/7 Support",
        "Custom Reporting",
        "White Label Solution",
        "Number Verification Included",
        "Team Training"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              WhatsApp Marketing Packages
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful WhatsApp marketing solutions to engage customers and grow your business.
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

          <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Want to Discuss Your Requirements?</h2>
            <p className="text-lg mb-8 opacity-90">Schedule a free consultation to find the perfect package for your business</p>
            <Button size="lg" variant="secondary" onClick={() => window.open("https://wa.me/919589581364", "_blank")} >
              Book Free Consultation
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppPackages;
