import ServiceCard from "@/components/ServiceCard";
import { Megaphone, Palette, Target, Code, BarChart, TrendingUp, Mail, Video } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Megaphone className="h-7 w-7" />,
      title: "Social Media Marketing",
      description: "Build your brand presence across all major social platforms with engaging content and strategic campaigns that drive engagement.",
      features: ["Content Strategy & Planning", "Community Management", "Paid Social Advertising", "Analytics & Reporting", "Influencer Partnerships"],
      gradient: "orange" as const,
    },
    {
      icon: <Palette className="h-7 w-7" />,
      title: "Graphic Designing",
      description: "Create stunning visual identities that capture your brand essence and connect with your audience on a deeper level.",
      features: ["Brand Identity Design", "Marketing Materials", "UI/UX Design", "Print Design", "Packaging Design"],
      gradient: "blue" as const,
    },
    {
      icon: <Target className="h-7 w-7" />,
      title: "Performance Marketing",
      description: "Data-driven marketing strategies that focus on measurable results and ROI optimization across all digital channels.",
      features: ["Campaign Optimization", "A/B Testing", "Conversion Tracking", "ROI Analysis", "Multi-Channel Attribution"],
      gradient: "green" as const,
    },
    {
      icon: <Code className="h-7 w-7" />,
      title: "Web Development",
      description: "Custom websites and web applications that drive conversions and deliver exceptional user experiences.",
      features: ["Responsive Web Design", "E-commerce Solutions", "CMS Integration", "SEO Optimization", "Performance Optimization"],
      gradient: "orange" as const,
    },
    {
      icon: <BarChart className="h-7 w-7" />,
      title: "Content Marketing",
      description: "Engaging content that tells your story and connects with your audience through multiple touchpoints.",
      features: ["Blog Writing", "Video Production", "Email Marketing", "Content Strategy", "Copywriting"],
      gradient: "blue" as const,
    },
    {
      icon: <TrendingUp className="h-7 w-7" />,
      title: "SEO Services",
      description: "Improve your search rankings and drive organic traffic to your business with proven SEO strategies.",
      features: ["Keyword Research", "On-Page SEO", "Link Building", "Technical SEO", "Local SEO"],
      gradient: "green" as const,
    },
    {
      icon: <Mail className="h-7 w-7" />,
      title: "Email Marketing",
      description: "Build relationships with your audience through targeted email campaigns that convert and retain customers.",
      features: ["Campaign Design", "List Segmentation", "Automation Setup", "Performance Analytics", "A/B Testing"],
      gradient: "orange" as const,
    },
    {
      icon: <Video className="h-7 w-7" />,
      title: "Video Marketing",
      description: "Captivating video content that engages your audience and communicates your brand message effectively.",
      features: ["Video Production", "Motion Graphics", "Video Editing", "YouTube Marketing", "Video SEO"],
      gradient: "blue" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive digital marketing solutions tailored to grow your business and achieve your goals. We specialize in services that deliver measurable results.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-bold mb-8">Why Choose Socio Bhaarat?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Successful Projects</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">98%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">24/7</div>
              <p className="text-muted-foreground">Support Available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
