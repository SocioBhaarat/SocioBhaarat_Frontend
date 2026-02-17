import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const PerformanceMarketingPackages = () => {
  const packages = [
    {
      name: "Starter Campaign",
      price: "Get quote",
      adSpend: "₹20,000 - ₹50,000/month",
      description: "Perfect for businesses starting with performance marketing",
      features: [
        "Google Ads or Meta Ads",
        "1 Platform Management",
        "Basic Campaign Setup",
        "Monthly Reporting",
        "Conversion Tracking",
        "Landing Page Optimization",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Growth Campaign",
      price: "₹Get quote",
      adSpend: "₹50,000 - ₹2,00,000/month",
      description: "Most popular for scaling businesses",
      features: [
        "Multi-Platform Campaigns",
        "Google Ads + Meta Ads",
        "Advanced Targeting",
        "A/B Testing",
        "Weekly Reporting",
        "Conversion Rate Optimization",
        "Remarketing Campaigns",
        "Custom Landing Pages",
        "Priority Support"
      ],
      popular: true
    },
    {
      name: "Enterprise Campaign",
      price: "Get quote",
      adSpend: "₹2,00,000+/month",
      description: "For businesses with aggressive growth targets",
      features: [
        "Full-Funnel Strategy",
        "All Major Platforms",
        "Advanced Analytics & AI",
        "Daily Optimization",
        "Custom Dashboards",
        "Dedicated Account Manager",
        "24/7 Support",
        "Competitor Analysis",
        "Brand Strategy",
        "Creative Production",
        "Advanced Attribution",
        "Marketing Automation"
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
              Performance Marketing Packages
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Results-driven marketing packages designed to maximize your ROI. Pay only for performance.
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
                <div className="text-3xl font-bold text-primary mb-1">{pkg.price}</div>
                <div className="text-sm text-muted-foreground mb-2">+ Ad Spend: {pkg.adSpend}</div>
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

          <Card className="bg-primary text-primary-foreground p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Performance Guarantee</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2" />
                Transparent reporting with real-time access to campaign data
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2" />
                No long-term contracts - monthly basis with 30-day notice period
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2" />
                Clear KPIs and success metrics defined upfront
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2" />
                Regular optimization to improve campaign performance
              </li>
            </ul>
          </Card>

          <Card className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Business?</h2>
            <p className="text-lg mb-8 opacity-90">Let's discuss your goals and create a custom performance marketing strategy</p>
            <Button size="lg" variant="default" onClick={() => window.open("https://wa.me/919589581364", "_blank")} >
              Schedule Strategy Call
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMarketingPackages;
