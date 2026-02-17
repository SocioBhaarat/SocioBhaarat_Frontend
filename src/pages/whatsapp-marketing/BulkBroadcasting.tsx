import { Button } from "@/components/ui/button";
import { Check, MessageCircle, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BulkBroadcasting = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            WhatsApp <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Bulk Broadcasting</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Reach thousands of customers instantly with WhatsApp bulk messaging. 98% open rate guaranteed.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8" onClick={() => navigate("/contact")} >
            Start Broadcasting
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Send to unlimited contacts",
              "Schedule messages",
              "Rich media support (images, videos, PDFs)",
              "Contact list management",
              "Delivery reports",
              "Personalized messages",
            ].map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg border border-border">
                <Check className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold text-lg">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BulkBroadcasting;
