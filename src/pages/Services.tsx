import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import {
  Megaphone, Palette, Target, Code, BarChart, TrendingUp,
  Mail, Video, MessageSquare, Globe, Layout, Search,
  Settings, Smartphone, ShieldCheck, Bot, ShoppingCart, Eye
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const serviceCategories = [
    {
      category: "Digital Marketing",
      description: "Comprehensive strategies to amplify your online presence and reputation.",
      items: [
        {
          icon: <Settings className="h-7 w-7" />,
          title: "ORM Services",
          description: "Proactive monitoring and management of your brand's digital reputation.",
          features: ["Review Management", "Sentiment Analysis", "Crisis Control"],
          path: "/digital-marketing/orm-services",
          gradient: "blue" as const,
        },
        {
          icon: <Megaphone className="h-7 w-7" />,
          title: "Social Media Marketing",
          description: "Engaging content and strategic campaigns across all major platforms.",
          features: ["Community Management", "Paid Social Advertising", "Influencer Collabs"],
          path: "/digital-marketing/social-media",
          gradient: "orange" as const,
        },
        {
          icon: <Search className="h-7 w-7" />,
          title: "Website SEO",
          description: "Dominate search engine rankings and drive high-intent organic traffic.",
          features: ["On-Page SEO", "Technical Audits", "Link Building"],
          path: "/digital-marketing/website-seo",
          gradient: "green" as const,
        },
        {
          icon: <Eye className="h-7 w-7" />,
          title: "Google Business Profile & SEO",
          description: "Optimize your local presence to capture 'near me' search intent.",
          features: ["GMB Optimization", "Local Citations", "Review Growth"],
          path: "/digital-marketing/website-seo",
          gradient: "blue" as const,
        },
        {
          icon: <Target className="h-7 w-7" />,
          title: "Paid Marketing (Meta & Google Ads)",
          description: "Hyper-targeted advertising campaigns focused strictly on ROI and conversion.",
          features: ["PPC Management", "Remarketing", "Conversion Tracking"],
          path: "/digital-marketing/paid-marketing",
          gradient: "orange" as const,
        },
        {
          icon: <BarChart className="h-7 w-7" />,
          title: "Content Marketing",
          description: "Engaging storytelling that connects with your audience across touchpoints.",
          features: ["Blog Production", "Copywriting", "Content Strategy"],
          path: "/digital-marketing/content-marketing",
          gradient: "green" as const,
        },
        {
          icon: <Target className="h-7 w-7" />,
          title: "Performance Marketing",
          description: "Paid marketing (Meta/Google Ads) focused strictly on ROI and conversions.",
          features: ["PPC Management", "A/B Testing", "Retargeting"],
          path: "/performance-marketing",
          gradient: "orange" as const,
        },
        {
          icon: <Mail className="h-7 w-7" />,
          title: "Email Marketing",
          description: "Targeted campaigns that nurture leads and improve customer retention.",
          features: ["Automation Flows", "List Segmentation", "A/B Testing"],
          path: "/digital-marketing/email-marketing",
          gradient: "blue" as const,
        },
        {
          icon: <Video className="h-7 w-7" />,
          title: "Video Marketing",
          description: "Captivating visual content designed to engage and communicate brand messages.",
          features: ["Production & Editing", "Motion Graphics", "YouTube SEO"],
          path: "/digital-marketing/video-marketing",
          gradient: "orange" as const,
        },
      ]
    },
    {
      category: "Design & Development",
      description: "Building robust, beautiful, and scalable digital solutions.",
      items: [
        {
          icon: <Globe className="h-7 w-7" />,
          title: "Web Development",
          description: "Custom high-performance websites built with modern web frameworks.",
          features: ["React/Next.js", "Responsive Design", "Speed Optimization"],
          path: "/design-development/web-development",
          gradient: "blue" as const,
        },
        {
          icon: <Layout className="h-7 w-7" />,
          title: "WordPress Development",
          description: "Scalable and easy-to-manage professional WordPress solutions.",
          features: ["Custom Theme Design", "Plugin Integration", "Security Audits"],
          path: "/design-development/wordpress-development",
          gradient: "green" as const,
        },
        {
          icon: <Smartphone className="h-7 w-7" />,
          title: "App Development",
          description: "Native and cross-platform mobile apps built for optimal user engagement.",
          features: ["iOS & Android", "UI/UX Flow", "Cross-Platform Sync"],
          path: "/design-development/app-development",
          gradient: "orange" as const,
        },
        {
          icon: <Palette className="h-7 w-7" />,
          title: "Graphic Designing",
          description: "Stunning visual identities that capture and communicate your brand essence.",
          features: ["Brand Identity", "Marketing Materials", "Packaging Design"],
          path: "/design-development/ui-ux-design",
          gradient: "blue" as const,
        },
        {
          icon: <Palette className="h-7 w-7" />,
          title: "UI/UX Design",
          description: "User-centric designs that ensure high engagement and low friction.",
          features: ["Wireframing", "Prototyping", "User Testing"],
          path: "/services/ui-ux",
          gradient: "blue" as const,
        },
        {
          icon: <ShoppingCart className="h-7 w-7" />,
          title: "E-commerce Development",
          description: "Full-scale online stores designed to drive sales and handle high traffic.",
          features: ["Shopify/WooCommerce", "Payment Gateway", "Inventory Management"],
          path: "/design-development/ecommerce-development",
          gradient: "green" as const,
        },
      ]
    },
    {
      category: "WhatsApp Marketing",
      description: "Official automation tools for the world's most popular messaging app.",
      items: [
        {
          icon: <MessageSquare className="h-7 w-7" />,
          title: "Bulk Broadcasting",
          description: "Reach thousands of customers instantly via official WhatsApp API.",
          features: ["Verified Templates", "Campaign Scheduling", "Analytics"],
          path: "/whatsapp-marketing/bulk-broadcasting",
          gradient: "green" as const,
        },
        {
          icon: <Bot className="h-7 w-7" />,
          title: "Custom Chatbot",
          description: "24/7 automated support and lead qualification using smart AI flows.",
          features: ["CRM Integration", "Auto-Replies", "Lead Gen Bots"],
          path: "/whatsapp-marketing/custom-chatbot",
          gradient: "blue" as const,
        },
        {
          icon: <ShieldCheck className="h-7 w-7" />,
          title: "Number Verification",
          description: "Audit and clean your database to ensure high delivery and low bounce rates.",
          features: ["Active Status Check", "Bulk Filtering", "API Integration"],
          path: "/whatsapp-marketing/number-verification",
          gradient: "orange" as const,
        },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      {/* Dynamic Header */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold mb-8"
          >
            Digital <span className="text-primary italic">Excellence</span> Delivered
          </motion.h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Socio Bhaarat offers a unified suite of services across marketing, development, and automation to scale your brand with precision.
          </p>
        </div>
      </section>

      {/* Dynamic Categories Section */}
      {serviceCategories.map((cat, catIdx) => (
        <section key={catIdx} className="py-16 px-4 sm:px-6 lg:px-8 border-b border-border last:border-0">
          <div className="container mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-2">{cat.category}</h2>
              <p className="text-muted-foreground">{cat.description}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {cat.items.map((service, index) => (
                <div key={index} className="flex flex-col h-full group">
                  <ServiceCard {...service} />
                  <div className="mt-[-20px] px-6 pb-6 relative z-10">
                    <Button
                      variant="outline"
                      className="w-full rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                      onClick={() => navigate(service.path)}
                    >
                      View Service Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Impact Section */}
      <section className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="bg-card border border-border rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <Megaphone className="w-64 h-64 rotate-12" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-16 relative z-10">Why Brands Trust Socio Bhaarat</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
              {[
                { label: "Projects Completed", value: "500+" },
                { label: "Client Satisfaction", value: "98%" },
                { label: "Support Uptime", value: "24/7" },
                { label: "ROI Average", value: "3.5x" },
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-5xl font-black text-primary tracking-tighter">{stat.value}</div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;