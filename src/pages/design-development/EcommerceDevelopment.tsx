import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, CreditCard, Package, TrendingUp, Shield, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EcommerceDevelopment = () => {
  const navigate = useNavigate();
  const features = [
    {
      icon: ShoppingCart,
      title: "Custom E-commerce Solutions",
      description: "Tailored online stores built for your unique business needs",
      items: ["Product Catalogs", "Shopping Cart", "Wishlist", "Product Search & Filter"]
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description: "Secure payment gateways for seamless transactions",
      items: ["Multiple Payment Options", "Razorpay Integration", "Stripe Integration", "COD Support"]
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Real-time inventory tracking and management",
      items: ["Stock Management", "Order Tracking", "Automated Alerts", "Supplier Management"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security for customer data protection",
      items: ["SSL Certificates", "PCI Compliance", "Data Encryption", "Secure Checkout"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-32 pb-16 px-4">
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
      </div>
    </div>
  );
};

export default EcommerceDevelopment;
