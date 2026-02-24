import { Button } from "@/components/ui/button";
import { Check, Bot, MessageCircle, Zap, Shield, BarChart3, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";

const WhatsAppChatbot = () => {
  const navigate = useNavigate();

  /* ================= DATA ================= */

  const heroData = {
    heading: "Automate Customer Engagement with Smart WhatsApp Chatbots",
    subtext:
      "We design and develop intelligent WhatsApp chatbots that automate customer communication, generate leads, handle queries instantly, and boost conversions — all within the world’s most popular messaging platform.",
    cta: "Get Free Consultation",
  };

  const socialLogos = [
    "https://cdn-icons-png.flaticon.com/512/733/733585.png", // WhatsApp
    "https://cdn-icons-png.flaticon.com/512/733/733547.png", // Facebook
    "https://cdn-icons-png.flaticon.com/512/733/733558.png", // Instagram
    "https://cdn-icons-png.flaticon.com/512/5968/5968764.png", // API/Meta style
  ];

  const whyChooseIntro =
    "We combine automation, AI-driven workflows, and marketing strategy to create powerful WhatsApp chatbot solutions that enhance customer experience and increase sales.";

  const whyChoosePoints = [
    "Custom Chatbot Development",
    "Automated Lead Generation",
    "24/7 Instant Customer Support",
    "WhatsApp Business API Integration",
    "CRM & Payment Gateway Integration",
    "Real-Time Analytics & Reporting",
  ];

  const whyNeedIntro =
    "Customers expect instant responses and seamless communication. A WhatsApp chatbot helps you automate conversations, nurture leads, and provide round-the-clock assistance without increasing operational costs.";

  const whyNeedPoints = [
    "Instant Automated Responses",
    "Improved Customer Engagement",
    "Higher Lead Conversion Rate",
    "Reduced Manual Workload",
    "Personalized Marketing Campaigns",
    "Faster Customer Support",
  ];

  const services = [
    "Custom Chatbot Flow Design",
    "Lead Capture & Qualification Bots",
    "E-commerce Chatbot Integration",
    "Booking & Appointment Bot",
    "Automated FAQ & Support Bots",
    "Payment & Order Tracking Integration",
    "WhatsApp Campaign Automation",
    "Chatbot Maintenance & Optimization",
  ];

  const developmentProcess = [
    "Business Requirement Analysis",
    "Chatbot Strategy & Flow Planning",
    "UI/Conversation Design",
    "API & System Integration",
    "Testing & Deployment",
    "Performance Monitoring & Optimization",
  ];

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

  /* ================= UI ================= */

  return (
    <div className="min-h-screen bg-background overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-6xl text-center">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            {heroData.heading.split("Smart")[0]}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Smart Bulk Broadcasting
              </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            {heroData.subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              size="lg"
              className="rounded-full px-8 shadow-lg"
              onClick={() => navigate("/contact")}
            >
              {heroData.cta}
            </Button>
          </motion.div>

          {/* Social Logos */}
          <div className="flex justify-center gap-6 mt-12">
            {socialLogos.map((logo, index) => (
              <motion.img
                key={index}
                src={logo}
                alt="Social"
                whileHover={{ scale: 1.1 }}
                className="h-10 w-10 opacity-80 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Why Sociobhaarat for WhatsApp Chatbots?
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-12">
            {whyChooseIntro}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoosePoints.map((point, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="bg-card p-6 rounded-2xl shadow-md border border-border hover:shadow-xl transition-all"
              >
                <Zap className="h-8 w-8 text-primary mb-4 mx-auto" />
                <h3 className="font-semibold">{point}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY YOU NEED ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Why Do You Need WhatsApp Chatbots?
          </h2>
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
                <MessageCircle className="h-8 w-8 text-secondary mb-4 mx-auto" />
                <h3 className="font-semibold">{point}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR SERVICES (SAME CARD STYLE) ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-12">
            Our WhatsApp Chatbot Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="bg-card p-6 rounded-2xl shadow-md border border-border hover:shadow-xl transition-all"
              >
                <Bot className="h-8 w-8 text-primary mb-4 mx-auto" />
                <h3 className="font-semibold">{service}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DEVELOPMENT PROCESS ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-12">Our Development Process</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProcess.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04 }}
                className="bg-card p-6 rounded-2xl shadow-md border border-border"
              >
                <BarChart3 className="h-8 w-8 text-accent mb-4 mx-auto" />
                <h3 className="font-semibold">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*FEATURES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Powerful Features</h2>

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

        </div>
      </section>
      <Card className="bg-primary text-primary-foreground p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Automate Your WhatsApp?</h2>
        <p className="text-lg mb-8 opacity-90">Get a custom chatbot built specifically for your business needs</p>
        <Button size="lg" variant="secondary" onClick={() => navigate("/contact")} >
          Schedule a Demo
        </Button>
      </Card>
    </div>
  );
};

export default WhatsAppChatbot;