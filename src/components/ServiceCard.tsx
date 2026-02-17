import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient?: "orange" | "blue" | "green";
}

const ServiceCard = ({ icon, title, description, features, gradient = "orange" }: ServiceCardProps) => {
  const gradientClasses = {
    orange: "from-accent/5 to-accent/10",
    blue: "from-primary/5 to-primary/10",
    green: "from-secondary/5 to-secondary/10",
  };

  const iconColors = {
    orange: "text-accent",
    blue: "text-primary",
    green: "text-secondary-foreground",
  };

  const iconBgColors = {
    orange: "bg-accent/10",
    blue: "bg-primary/10",
    green: "bg-secondary",
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent/30 overflow-hidden bg-card">
      <CardHeader className="relative">
        <div className={`w-16 h-16 rounded-lg ${iconBgColors[gradient]} flex items-center justify-center mb-4 ${iconColors[gradient]}`}>
          {icon}
        </div>
        <CardTitle className="font-display text-xl font-bold text-foreground">{title}</CardTitle>
        <CardDescription className="text-base text-muted-foreground leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent className="relative">
        <ul className="space-y-2.5 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <div className={`w-1.5 h-1.5 rounded-full ${gradient === "orange" ? "bg-accent" : gradient === "blue" ? "bg-primary" : "bg-secondary"} mr-2.5`} />
              {feature}
            </li>
          ))}
        </ul>
        {/* <Button variant="link" className="p-0 h-auto font-semibold text-accent group/btn">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button> */}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
