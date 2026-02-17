import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Code, Smartphone, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WebDevPortfolio = () => {
  const navigate = useNavigate();
  const projects = [
    {
      title: "E-commerce Fashion Store",
      category: "E-commerce",
      description: "Modern online fashion store with payment gateway integration and inventory management",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      results: ["300% increase in online sales", "50,000+ monthly visitors", "40% conversion rate improvement"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "Real Estate Portal",
      category: "Web Application",
      description: "Comprehensive property listing platform with advanced search and filtering",
      technologies: ["Next.js", "PostgreSQL", "AWS", "Google Maps API"],
      results: ["10,000+ properties listed", "5,000+ daily active users", "Reduced bounce rate by 60%"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Web Development Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our best web development projects that have helped businesses transform digitally and achieve their goals.
            </p>
          </div>

          <div className="grid gap-12 mb-16">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="h-64 md:h-auto bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2 flex items-center">
                        <Zap className="h-4 w-4 mr-2 text-secondary" />
                        Key Results
                      </h4>
                      <ul className="space-y-1">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">• {result}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button variant="outline" className="group">
                      View website
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="bg-primary text-primary-foreground p-12 text-center">
            <Smartphone className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Dream Website?</h2>
            <p className="text-lg mb-8 opacity-90">Let's create something amazing together</p>
            <Button size="lg" variant="secondary"  onClick={() => navigate("/contact")} >
              Start Your Project
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WebDevPortfolio;
