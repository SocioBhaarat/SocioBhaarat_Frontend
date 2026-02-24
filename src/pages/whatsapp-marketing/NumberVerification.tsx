import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Shield,
  Zap,
  Phone,
  BadgeCheck,
  Users
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const NumberVerification = () => {
  const navigate = useNavigate();

  /* ================= HERO DATA ================= */

  const heroData = {
    heading: "Accurate WhatsApp Number & Profile Verification for Businesses",
    subtext:
      "Ensure your marketing campaigns reach real and active users with our reliable WhatsApp number and name verification services. Improve delivery rates, reduce bounce rates, and maintain a clean customer database.",
    cta: "Start Verification"
  };

  /* ================= WHY CHOOSE US ================= */

  const whyChooseIntro =
    "We provide secure, fast, and accurate WhatsApp verification solutions that help businesses validate contacts before launching campaigns.";

  const whyChoosePoints = [
    "Real-Time WhatsApp Number Verification",
    "Accurate Name & Profile Validation",
    "Bulk Database Verification",
    "High Accuracy & Fast Processing",
    "Secure & Confidential Data Handling",
    "API Integration Available"
  ];

  /* ================= WHY YOU NEED ================= */

  const whyNeedIntro =
    "Sending campaigns to invalid or inactive numbers wastes time and money. Verifying WhatsApp numbers ensures higher delivery rates, better engagement, and improved campaign ROI.";

  const whyNeedPoints = [
    "Improve Message Delivery Rate",
    "Reduce Campaign Costs",
    "Remove Invalid or Inactive Numbers",
    "Increase Engagement & Conversion",
    "Maintain Clean CRM Database",
    "Boost Marketing Performance"
  ];

  /* ================= SERVICES ================= */

  const services = [
    "Bulk WhatsApp Number Verification",
    "Individual Number Validation",
    "Name & Profile Data Matching",
    "Database Cleaning & Filtering",
    "API-Based Verification Solutions",
    "CRM Integration Support",
    "Real-Time Status Reports",
    "Detailed Verification Analytics",
    "WhatsApp Campaign Automation",
    "Chatbot Maintenance & Optimization"
  ];

  /* ================= FEATURES (UNCHANGED DESIGN) ================= */

  const features = [
    {
      icon: BadgeCheck,
      title: "Official Business Verification",
      description:
        "Get your WhatsApp Business account officially verified with the green tick",
      benefits: [
        "Verified Badge",
        "Increased Trust",
        "Better Deliverability",
        "Official Business Profile"
      ]
    },
    {
      icon: Shield,
      title: "Custom Name Verification",
      description: "Display your business name instead of phone number",
      benefits: [
        "Brand Recognition",
        "Professional Appearance",
        "Customer Confidence",
        "Easy Identification"
      ]
    },
    {
      icon: Phone,
      title: "Number Authentication",
      description:
        "Secure authentication and verification for your business number",
      benefits: [
        "Security Compliance",
        "Account Protection",
        "Identity Verification",
        "API Access"
      ]
    },
    {
      icon: Users,
      title: "Multi-User Access",
      description:
        "Enable multiple team members to use verified business account",
      benefits: [
        "Team Collaboration",
        "Role Management",
        "Activity Tracking",
        "Centralized Control"
      ]
    }
  ];

  /* ================= VERIFICATION PROCESS (UNCHANGED DESIGN) ================= */

  const process = [
    { step: "Documentation", description: "Submit required business documents" },
    {
      step: "Verification Request",
      description: "We submit verification to WhatsApp"
    },
    {
      step: "Review Process",
      description: "WhatsApp reviews your application"
    },
    { step: "Approval", description: "Get verified badge and custom name" }
  ];

  return (
    <div className="min-h-screen bg-background">

      {/* ================= HERO ================= */}
      <section className="pt-10 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Accurate <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                WhatsApp Number & Profile Verification
              </span> for Businesses
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ensure your marketing campaigns reach real and active users with our reliable WhatsApp number and name verification services. Improve delivery rates, reduce bounce rates.
            </p>

            <Button
              size="sm"
              className="rounded-full px-8 shadow-lg "
              onClick={() => navigate("/contact")}
            >
              Start Verification
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <img
              src="https://img.freepik.com/free-vector/identity-verification-concept-illustration_114360-5580.jpg"
              alt="Number Verification"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Why Choose Sociobhaarat?
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-12">
            {whyChooseIntro}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePoints.map((point, index) => (
              <Card key={index} className="p-6 text-center">
                <CheckCircle className="h-6 w-6 text-primary mx-auto mb-3" />
                <p className="font-medium">{point}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY YOU NEED ================= */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Why Do You Need WhatsApp Verification?
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-12">
            {whyNeedIntro}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyNeedPoints.map((point, index) => (
              <Card key={index} className="p-6 text-center">
                <CheckCircle className="h-6 w-6 text-secondary mx-auto mb-3" />
                <p className="font-medium">{point}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-12">Our Verification Services</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 text-center">
                <Shield className="h-6 w-6 text-primary mx-auto mb-3" />
                <p className="font-medium">{service}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            Features
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {feature.description}
                </p>

                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm"
                    >
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VERIFICATION PROCESS ================= */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            Verification Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold mb-2">
                  {item.step}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-12 text-center">
            <Zap className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Get Verified Today!
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of verified businesses on WhatsApp
            </p>

            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate("/contact")}
            >
              Start Verification Process
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default NumberVerification;