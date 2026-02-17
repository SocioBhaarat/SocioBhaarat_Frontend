import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, Zap, Phone, BadgeCheck, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NumberVerification = () => {
  const navigate = useNavigate();
  const features = [
    {
      icon: BadgeCheck,
      title: "Official Business Verification",
      description: "Get your WhatsApp Business account officially verified with the green tick",
      benefits: ["Verified Badge", "Increased Trust", "Better Deliverability", "Official Business Profile"]
    },
    {
      icon: Shield,
      title: "Custom Name Verification",
      description: "Display your business name instead of phone number",
      benefits: ["Brand Recognition", "Professional Appearance", "Customer Confidence", "Easy Identification"]
    },
    {
      icon: Phone,
      title: "Number Authentication",
      description: "Secure authentication and verification for your business number",
      benefits: ["Security Compliance", "Account Protection", "Identity Verification", "API Access"]
    },
    {
      icon: Users,
      title: "Multi-User Access",
      description: "Enable multiple team members to use verified business account",
      benefits: ["Team Collaboration", "Role Management", "Activity Tracking", "Centralized Control"]
    }
  ];

  const process = [
    { step: "Documentation", description: "Submit required business documents" },
    { step: "Verification Request", description: "We submit verification to WhatsApp" },
    { step: "Review Process", description: "WhatsApp reviews your application" },
    { step: "Approval", description: "Get verified badge and custom name" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <BadgeCheck className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              WhatsApp Number & Name Verification
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get your WhatsApp Business account officially verified and build customer trust with the verified green badge.
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
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Verification Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.step}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-12 text-center">
            <Zap className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Get Verified Today!</h2>
            <p className="text-lg mb-8 opacity-90">Join thousands of verified businesses on WhatsApp</p>
            <Button size="lg" variant="secondary" onClick={() => navigate("/contact")} >
              Start Verification Process
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NumberVerification;
