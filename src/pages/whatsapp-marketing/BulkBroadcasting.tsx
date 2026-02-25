import { Button } from "@/components/ui/button";
import { Check, Zap, Shield, BarChart3, Target, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const BulkBroadcasting = () => {
  const navigate = useNavigate();

  /* ================= DATA VARIABLES ================= */

  const heroData = {
    heading: "Reach Thousands Instantly with Smart Bulk Broadcasting",
    subtext:
      "We help businesses connect with their audience instantly through reliable, fast, and targeted bulk broadcasting services. Whether it’s promotions, updates, or alerts — deliver your message at scale with confidence.",
    cta: "Start Broadcasting",
    image:
      "https://img.freepik.com/free-vector/bulk-sms-marketing-concept-illustration_114360-1884.jpg",
  };

  const whyChooseIntro =
    "We combine advanced technology, strategic targeting, and real-time analytics to ensure your bulk messaging campaigns achieve maximum reach and engagement.";

  const whyChoosePoints = [
    "High Delivery Rate",
    "Instant Message Broadcasting",
    "Targeted Audience Segmentation",
    "Secure & Compliant Messaging",
    "Real-Time Campaign Tracking",
    "Affordable & Scalable Solutions",
  ];

  const whyNeedIntro =
    "Bulk broadcasting enables businesses to communicate quickly and effectively with large audiences. It is one of the fastest and most cost-effective ways to promote offers, send alerts, and maintain customer engagement.";

  const whyNeedPoints = [
    "Instant Customer Communication",
    "Promote Offers & Discounts",
    "Send Transactional Alerts",
    "Increase Customer Engagement",
    "Improve Brand Awareness",
    "Cost-Effective Marketing Channel",
  ];

  const services = [
    "Bulk SMS Marketing",
    "WhatsApp Bulk Messaging",
    "Email Broadcasting Campaigns",
    "Promotional & Transactional SMS",
    "OTP & Notification Services",
    "API Integration for Messaging",
    "Campaign Analytics & Reporting",
    "Database Management & Segmentation",
    "Analytics & Performance Reporting",
    "Crisis Management & Reputation Monitoring",
  ];

  const features = [
    "Send to unlimited contacts",
    "Schedule messages",
    "Rich media support (images, videos, PDFs)",
    "Contact list management",
    "Delivery reports",
    "Personalized messages",
  ];

  /* ================= UI ================= */

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="pt-10 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {heroData.heading.split("Smart")[0]}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Smart Bulk Broadcasting
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {heroData.subtext}
            </p>

            <Button
              size="sm"
              className="rounded-full px-8 shadow-lg"
              onClick={() => navigate("/contact")}
            >
              {heroData.cta}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <img
              src={heroData.image}
              alt="Bulk Broadcasting"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-6">Why Choose Sociobhaarat?</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-12">
            {whyChooseIntro}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoosePoints.map((point, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-card p-6 rounded-2xl shadow-md border border-border hover:shadow-xl transition-all"
              >
                <Zap className="h-8 w-8 text-primary mb-4 mx-auto" />
                <h3 className="font-semibold text-lg">{point}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY YOU NEED IT ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-6">Why Do You Need Bulk Broadcasting?</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-12">
            {whyNeedIntro}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyNeedPoints.map((point, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-card p-6 rounded-2xl shadow-md border border-border"
              >
                <Target className="h-8 w-8 text-secondary mb-4 mx-auto" />
                <h3 className="font-semibold text-lg">{point}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR SERVICES ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-12">Our Bulk Messaging Services</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="bg-background p-6 rounded-2xl shadow-lg border border-border"
              >
                <MessageSquare className="h-8 w-8 text-primary mb-4 mx-auto" />
                <h3 className="font-semibold">{service}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-12">Powerful Features</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-card p-6 rounded-2xl shadow-md border border-border"
              >
                <Check className="h-8 w-8 text-primary mb-4 mx-auto" />
                <h3 className="font-semibold">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default BulkBroadcasting;