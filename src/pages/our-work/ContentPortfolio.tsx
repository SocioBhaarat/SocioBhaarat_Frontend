import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, TrendingUp, Award, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContentPortfolio = () => {
  const navigate = useNavigate();
  const projects = [
    {
      client: "Tech Startup - SaaS Platform",
      industry: "Technology",
      description: "Complete content marketing strategy including blog posts, whitepapers, and case studies",
      deliverables: ["50+ Blog Articles", "5 Whitepapers", "10 Case Studies", "Email Campaigns"],
      results: ["200% increase in organic traffic", "500+ qualified leads generated", "35% improvement in engagement"],
      duration: "6 months"
    },
    {
      client: "E-commerce Fashion Brand",
      industry: "Fashion & Retail",
      description: "Product descriptions, social media content, and influencer collaboration content",
      deliverables: ["300+ Product Descriptions", "Daily Social Posts", "Video Scripts", "Brand Guidelines"],
      results: ["150% increase in social engagement", "40% boost in conversion rate", "100K+ followers gained"],
      duration: "12 months"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <FileText className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Content Marketing Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how our content marketing strategies have helped businesses across industries achieve remarkable growth.
            </p>
          </div>

          <div className="grid gap-8 mb-16">
            {projects.map((project, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.client}</h3>
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {project.industry}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Project Duration</div>
                    <div className="font-semibold">{project.duration}</div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">{project.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-primary" />
                      Deliverables
                    </h4>
                    <ul className="space-y-2">
                      {project.deliverables.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">• {item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2 text-secondary" />
                      Results Achieved
                    </h4>
                    <ul className="space-y-2">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">• {result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">500+</div>
              <p className="text-muted-foreground">Content Pieces Created</p>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">250%</div>
              <p className="text-muted-foreground">Average Traffic Increase</p>
            </Card>
            <Card className="p-6 text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">50+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Brand with Content?</h2>
            <p className="text-lg mb-8 opacity-90">Let's create a content strategy that drives real results</p>
            <Button size="lg" variant="secondary" onClick={() => navigate("/contact")} >
              Start Your Content Journey
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContentPortfolio;
