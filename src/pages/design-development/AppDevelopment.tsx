import { Button } from "@/components/ui/button";
import { Check, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AppDevelopment = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Mobile App <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Development</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Build powerful iOS and Android apps that engage users and drive business growth.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8" onClick={() => navigate("/contact")} >
            Start Your App Project
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Our App Development Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "iOS App Development",
              "Android App Development",
              "Cross-Platform Apps (React Native, Flutter)",
              "UI/UX Design",
              "App Store Optimization",
              "App Maintenance & Support",
            ].map((service, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg border border-border">
                <Check className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold text-lg">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopment;
