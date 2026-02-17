import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Zap, Clock, Users, Bot, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CustomChatbot = () => {
  const navigate = useNavigate();
  const features = [
    {
      icon: MessageCircle,
      title: "24/7 Automated Responses",
      description: "Never miss a customer query with round-the-clock automated support",
      benefits: ["Instant Replies", "Multi-language Support", "Smart Routing", "Context Awareness"]
    },
    {
      icon: Users,
      title: "Customer Engagement",
      description: "Engage customers with personalized conversations",
      benefits: ["Personalized Greetings", "Product Recommendations", "Order Updates", "FAQ Automation"]
    },
    {
      icon: Zap,
      title: "Lead Generation",
      description: "Capture and qualify leads automatically through WhatsApp",
      benefits: ["Lead Capture Forms", "Qualification Questions", "CRM Integration", "Auto Follow-ups"]
    },
    {
      icon: TrendingUp,
      title: "Sales Automation",
      description: "Automate your sales process and close deals faster",
      benefits: ["Product Catalogs", "Order Booking", "Payment Links", "Upselling"]
    }
  ];

  const useCases = [
    "E-commerce Order Management",
    "Customer Support Automation",
    "Appointment Booking",
    "Lead Qualification",
    "Payment Collection",
    "Feedback Collection"
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Bot className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              WhatsApp Custom Chatbot Development
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Automate customer interactions, boost engagement, and increase sales with intelligent WhatsApp chatbots tailored to your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Zap className="h-4 w-4 text-secondary mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Use Cases</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
                  <p className="font-semibold">{useCase}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-primary text-primary-foreground p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Automate Your WhatsApp?</h2>
            <p className="text-lg mb-8 opacity-90">Get a custom chatbot built specifically for your business needs</p>
            <Button size="lg" variant="secondary"  onClick={() => navigate("/contact")} >
              Schedule a Demo
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CustomChatbot;
