import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import {
  Megaphone, Palette, Target, BarChart,
  Mail, Video, MessageSquare, Globe, Layout, Search,
  Settings, Smartphone, ShoppingCart, Eye,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

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
          title: "WhatsApp Business API",
          description: "Integrate WhatsApp's official API to automate, scale, and manage customer conversations seamlessly.",
          features: ["Official API Access", "Multi-Agent Support", "Webhook Integration"],
          path: "/whatsapp-business-api",
          gradient: "green" as const,
        },
      ]
    }
  ];



  return (
    <>
      <SEO
        title="Services At Socio Bhaarat - Marketing, Automation & IT Solutions"
        description="Explore our complete range of services including digital marketing, web development, SEO, and performance marketing solutions."
        keywords="digital marketing services, web development services, seo services, performance marketing services, marketing services in jabalpur"
        url="/services"
      />
      {/* services at socio bharat */}
      <div className="min-h-screen bg-background selection:bg-primary/20">
        {/* Dynamic Header */}


        <section className="relative pb-10 flex items-start overflow-hidden bg-[#fafafa]">
          {/* 1. TECHNICAL BACKGROUND DESIGN */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Grid Overlay - Matches Brand Protection Lab */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]" />

            {/* Atmospheric Mesh Blobs */}
            <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-blue-600/5 blur-[130px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-orange-500/10 blur-[110px] rounded-full" />
          </div>

          {/* 2. MAIN CONTENT GRID */}
          <div className="container mx-auto px-4 relative z-10 mt-12">
            <div className="grid lg:grid-cols-12 gap-12 items-start">

              {/* LEFT COLUMN: Narrative */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7 space-y-5 text-left mt-8"
              >

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-800 leading-[1.05] tracking-tighter">
                  Services at<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-primary to-orange-500 font-medium pr-4 -mr-4 overflow-visible"> Socio Bhaarat</span>
                </h1>

                <div className="flex flex-wrap items-center gap-2">
                  {["Marketing", "Automation", "IT Solutions"].map((label, i) => (
                    <motion.span
                      key={label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide
        ${i === 0 ? "bg-blue-600 text-white shadow-[0_2px_12px_#2563eb25]"
                          : i === 1 ? "bg-orange-700 text-white shadow-[0_2px_12px_#E8610A25]"
                            : "border border-slate-200 text-slate-500"}`}
                    >
                      <span className={`w-1 h-1 rounded-full ${i === 2 ? "bg-blue-400" : "bg-white/60"}`} />
                      {label}
                    </motion.span>
                  ))}
                </div>

                <p className="text-base md:text-xl text-slate-700 max-w-2xl font-semibold font-montserrat border-l-4 tracking-wider border-primary/30 pl-6 py-3">
                  SocioBhaarat offers a unified suite of services across marketing, development, and automation to scale your brand with industrial-grade precision.
                </p>
              </motion.div>

              {/* RIGHT COLUMN: Visual Proof (Dev/Code Bento) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="lg:col-span-5 relative hidden lg:block"
              >
                <div className="relative group">
                  {/* Decorative Glow behind image */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 blur-3xl rounded-[3rem] animate-pulse" />

                  <div className="relative z-10 bg-white p-3 rounded-[3rem] shadow-2xl border border-white/50 overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/djady4qza/image/upload/q_auto/f_auto/v1775725428/photo-1766853297154-3dcb4d3b38f8_nqwgox.jpg"
                      alt="Brand Reputation Dashboard"
                      className="rounded-[2.5rem] w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                  </div>

                  {/* Framed Layer - Matching the "Legacy" section rotation */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border-2 border-primary/10 rounded-[4rem] rotate-3 -z-10" />
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Dynamic Categories Section */}
        {serviceCategories.map((cat, catIdx) => (
          <section key={catIdx} className="py-16 sm:px-6 lg:px-8 border-b border-border last:border-0">
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
                        className="w-full rounded-xl bg-blue-700 text-white group-hover:bg-blue-800 group-hover:text-primary-foreground transition-all font-semibold"
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
    </>

  );
};

export default Services;