import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Palette, Users, Smartphone, Zap, Layout, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UIUXDesign = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: Palette,
      title: "User Interface Design",
      description: "Beautiful, intuitive interfaces that users love",
      features: ["Visual Design", "Design Systems", "Brand Integration", "Responsive Layouts"]
    },
    {
      icon: Users,
      title: "User Experience Design",
      description: "Research-driven UX that converts visitors into customers",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description: "Native and cross-platform app designs",
      features: ["iOS Design", "Android Design", "App Prototypes", "Animation Design"]
    },
    {
      icon: Layout,
      title: "Web Design",
      description: "Modern, conversion-focused website designs",
      features: ["Landing Pages", "E-commerce Design", "Dashboard Design", "Micro-interactions"]
    }
  ];

  const process = [
    { step: "Research & Discovery", description: "Understanding your users and business goals" },
    { step: "Wireframing", description: "Creating the blueprint of your digital product" },
    { step: "Visual Design", description: "Bringing your brand to life with stunning visuals" },
    { step: "Prototyping", description: "Interactive prototypes for testing and validation" },
    { step: "User Testing", description: "Validating designs with real users" },
    { step: "Handoff & Support", description: "Seamless transition to development team" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              UI/UX Design Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Create exceptional digital experiences that delight users and drive business growth with our expert UI/UX design services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Zap className="h-4 w-4 text-secondary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Design Process</h2>
            <div className="grid md:grid-cols-3 gap-6">
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

          <Card className="bg-primary text-primary-foreground p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Amazing User Experiences?</h2>
            <p className="text-lg mb-8 opacity-90">Let's discuss your design project and create something extraordinary</p>
            <Button size="lg" variant="secondary" onClick={() => navigate("/contact")} >
              Get Started Today
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UIUXDesign;
