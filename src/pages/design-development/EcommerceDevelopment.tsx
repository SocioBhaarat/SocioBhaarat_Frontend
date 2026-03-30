import { Button } from "@/components/ui/button";
import QuoteSection from "@/components/ui/QuoteSection";
import {
  ShoppingCart,
  CreditCard,
  Package,
  Shield,
  Check,
  Store,
  Layers,
  Globe,
  TrendingUp,
  ArrowRight,
  Zap,
  Search,
  Layout,
  MousePointer2,
  Users,
  Rocket,
  Smartphone,
  ShieldCheck,
  ShoppingBag
} from "lucide-react";
import {
  SiShopify,
  SiWoocommerce,
  SiGentoo,
  SiReact,
  SiNodedotjs,
  SiPhp,
  SiMongodb,
  SiMysql
} from "react-icons/si";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import React from "react";
import { CTASection } from "@/components/ui/CTASection";
import { cn } from "@/lib/utils";
import SEO from "@/components/SEO";

const EcommerceDevelopment = () => {
  const navigate = useNavigate();

  const whyChooseUsData = [
    {
      title: "Custom & Scalable Solutions",
      icon: Layers,
      desc: "Tailored store architecture that grows alongside your business volume."
    },
    {
      title: "Mobile-Optimized Experience",
      icon: Smartphone,
      desc: "Flawless shopping journeys optimized for 70% of modern mobile traffic."
    },
    {
      title: "Secure Payment Integration",
      icon: ShieldCheck,
      desc: "Enterprise-grade encryption for Razorpay, Stripe, and global gateways."
    },
    {
      title: "SEO & Performance Focused",
      icon: Zap,
      desc: "Lightning-fast load times and code built to dominate search rankings."
    }
  ];
  const ecomTechStack = [
    { name: "Shopify", icon: <SiShopify />, color: "#95BF47", category: "Storefront" },
    { name: "WooCommerce", icon: <SiWoocommerce />, color: "#96588A", category: "WordPress" },
    { name: "Magento", icon: <SiGentoo />, color: "#EE672F", category: "Enterprise" },
    { name: "React.js", icon: <SiReact />, color: "#61DAFB", category: "Frontend" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933", category: "API" },
    { name: "PHP", icon: <SiPhp />, color: "#777BB4", category: "Backend" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", category: "Database" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1", category: "Database" },
  ];
  const services = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Custom E-commerce Solutions",
      description: "Tailored online stores built for your unique business needs.",
      features: ["Product Catalogs", "Shopping Cart", "Wishlist", "Advanced Search"]
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Payment Integration",
      description: "Secure payment gateways for seamless, global transactions.",
      features: ["Razorpay & Stripe", "Multiple Gateways", "COD Support", "PCI Compliance"]
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Inventory Management",
      description: "Real-time tracking and automated logistics management.",
      features: ["Stock Management", "Order Tracking", "Automated Alerts", "Supplier Sync"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Compliance",
      description: "Enterprise-grade protection for customer data and privacy.",
      features: ["SSL Certificates", "PCI DSS Compliance", "Data Encryption", "Secure Checkout"]
    }
  ];

  const process = [
    { id: "01", step: "Requirement Analysis", icon: <Search />, description: "Analyzing products, audience behavior, and business revenue goals." },
    { id: "02", step: "UI/UX & Architecture", icon: <Layout />, description: "Designing seamless shopping journeys and logical store structures." },
    { id: "03", step: "Store Development", icon: <Store />, description: "Building high-performance stores with scalable backend architecture." },
    { id: "04", step: "Payment & Logistics", icon: <CreditCard />, description: "Integrating secure transaction gateways and third-party logistics." },
    { id: "05", step: "Testing & QA", icon: <Shield />, description: "Ensuring 100% bug-free performance across all devices and browsers." },
    { id: "06", step: "Launch & Support", icon: <Rocket />, description: "Optimized deployment with ongoing performance monitoring." }
  ];

  const technologies = ["Shopify", "WooCommerce", "Magento", "React.js", "Node.js", "PHP", "MongoDB", "MySQL"];

  return (
    <>
      <SEO
        title="E-commerce Development Services | Socio Bhaarat"
        description="Build scalable and secure e-commerce platforms that drive sales and deliver seamless shopping experiences."
        keywords="ecommerce development, online store development, shopify development, ecommerce website, ecommerce developer in jabalpur"
        url="/design-development/ecommerce-development"
      />
      <div className="min-h-screen bg-background">

        {/* HERO SECTION */}
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

              {/* LEFT COLUMN: Narrative (Text Upwards) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7 space-y-8 text-left"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-primary text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm">
                  <ShoppingBag className="w-3 h-3" /> E-commerce Development
                </div>

                <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold text-slate-800 leading-[1.05] tracking-tighter">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-primary to-orange-500 font-medium pr-4 -mr-4 overflow-visible">Ecommerce Development Services </span> for Scalable Online Stores
                </h1>

                <p className="text-base md:text-xl text-slate-700 max-w-2xl font-semibold font-montserrat border-l-4 tracking-wider border-primary/30 pl-6">
                  We design and develop secure, user-friendly, and conversion-focused e-commerce websites that help businesses sell more, manage operations efficiently, and scale with confidence.
                </p>

                <div className="flex justify-start pt-4">
                  <Button
                    size="lg"
                    className="rounded-full px-12 h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105"
                    onClick={() => navigate("/contact")}
                  >
                    Start Your Storefront <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
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
                      src="https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
                      alt="Advanced E-commerce Dashboard Engineering"
                      className="rounded-[2.5rem] w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                    />

                    {/* Floating Mini-Metric Overlay */}
                    <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg animate-bounce-slow">
                      <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Conversion Rate</p>
                      <div className="flex items-center gap-2">
                        <p className="text-xl font-black text-slate-900">+340% ROI</p>
                        <TrendingUp size={16} className="text-green-500" />
                      </div>
                    </div>
                  </div>

                  {/* Framed Layer - Matching the "Legacy" section rotation */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border-2 border-primary/10 rounded-[4rem] rotate-3 -z-10" />
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-12 bg-muted/30 border-y border-border">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Left */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-muted-foreground text-[11px] font-medium tracking-widest uppercase mb-6 w-fit">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Trusted Since 2022
                </div>

                <div className="w-8 h-0.5 bg-blue-600 mb-6 rounded-full" />

                <h2 className=" text-3xl sm:text-5xl font-bold mb-5">
                  Why Choose <br className="block sm:hidden"/>
                  <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 font-medium">
                    Socio Bhaarat
                  </span>
                </h2>

                <p className="text-muted-foreground text-base font-medium sm:text-lg leading-relaxed mb-10 max-w-md">
                  We combine strategy, technology, and customer-focused design to create
                  platforms that deliver seamless shopping experiences and real revenue growth.
                </p>

                <div className="grid grid-cols-2 gap-3 sm:max-w-xs">
                  <div className="bg-background rounded-2xl border border-border p-5">
                    <div className=" text-[2.6rem] font-normal text-orange-500 leading-none mb-1.5">
                      500+
                    </div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      Successful Projects
                    </p>
                  </div>
                  <div className="bg-background rounded-2xl border border-border p-5">
                    <div className=" text-[2.6rem] font-normal text-blue-600 leading-none mb-1.5">
                      98%
                    </div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      Satisfaction Rate
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col gap-2.5"
              >
                {whyChooseUsData.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="relative flex items-center gap-4 p-4 sm:p-5 bg-background rounded-2xl border border-border
                       hover:border-blue-200 hover:shadow-[0_4px_20px_rgba(37,99,235,0.08)]
                       transition-[border-color,box-shadow] duration-200 group overflow-hidden"
                  >
                    {/* Left accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-0 bg-blue-600 rounded-l-2xl
                            group-hover:w-[3px] transition-all duration-250" />

                    {/* Icon */}
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-muted border border-border flex items-center justify-center
                            group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-200">
                      <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                    </div>

                    <div>
                      <h4 className="text-[15px] font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[13px] text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

            </div>
          </div>
        </section>

        {/* SERVICES (BENTO GRID) */}

        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4 max-w-7xl">

            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Our E-commerce Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium pr-6 -mr-6 overflow-visible">
                  Services
                </span>
              </h2>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex flex-col bg-white border border-slate-200 rounded-[2.5rem] shadow-sm overflow-hidden group transition-shadow duration-300 hover:shadow-2xl"
                >
                  {/* Card Header */}
                  <div className="bg-[#1e3a5f] p-7 relative overflow-hidden">
                    {/* Dot grid texture */}
                    <div className="absolute inset-0 opacity-[0.07] pointer-events-none [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                    {/* Decorative circle */}
                    <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-white/[0.04] pointer-events-none" />

                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(250,204,21,0.4)] group-hover:scale-110 transition-transform duration-500">
                        {React.cloneElement(service.icon as React.ReactElement, {
                          size: 22,
                          strokeWidth: 2.5,
                          className: "text-[#1e3a5f]",
                        })}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-7 flex-grow flex flex-col">
                    <p className="text-slate-700 text-sm md:text-md mb-0 font-medium leading-relaxed">
                      {service.description}
                    </p>

                    {/* Gradient divider */}
                    <div className="h-px bg-gradient-to-r from-slate-200 to-transparent my-5" />

                    <div className="space-y-3 flex-grow">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-slate-700">
                          {/* Pill check icon */}
                          <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0">
                            <Check className="w-2.5 h-2.5 text-blue-600" strokeWidth={3} />
                          </div>
                          <span className="text-[14px] md:text-sm font-bold leading-tight">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* PRODUCTION ROADMAP */}

        <section className="py-5 bg-slate-50">
          <div className="container mx-auto max-w-7xl px-4">

            {/* Header */}
            <div className="text-center mb-14">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground mb-4">
                How we work
              </p>
              <h2 className=" text-3xl md:text-5xl font-bold text-slate-800">
                The{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium">
                  Production Roadmap
                </span>
              </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-border rounded-[2rem] overflow-hidden">
              {process.map((step, i, arr) => (
                <motion.div
                  key={step.id}
                  whileHover={{ backgroundColor: "rgb(248 250 252)" }}
                  className={cn(
                    "relative bg-white p-9 flex flex-col gap-0 group transition-colors duration-200 cursor-default overflow-hidden",
                    // right border: all except last in each row
                    i % 3 !== 2 && "lg:border-r border-border",
                    i % 2 !== 1 && "sm:border-r lg:border-r-0 border-border",
                    i % 3 === 2 && "lg:border-r-0",
                    // bottom border: all except last row
                    i < arr.length - 3 && "lg:border-b border-border",
                    i < arr.length - 2 && "sm:border-b lg:border-b-0 border-border",
                    i < arr.length - 1 && "border-b lg:border-b-0 sm:border-b-0 border-border",
                  )}
                >
                  {/* Top row: icon + number */}
                  <div className="flex items-start justify-between mb-7">
                    <div className="w-12 h-12 rounded-[14px] border border-border bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-200 transition-all duration-300">
                      <span className="text-blue-500">
                        {step.icon}
                      </span>
                    </div>
                    <span className=" text-[3.8rem] font-normal leading-none text-slate-200 group-hover:text-blue-100 transition-colors duration-300 select-none">
                      {step.id}
                    </span>
                  </div>

                  {/* Step label */}
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    Phase {String(step.id).padStart(2, "0")}
                  </p>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                    {step.step}
                  </h3>

                  {/* Description */}
                  <p className="text-[15px] text-muted-foreground italic leading-relaxed">
                    {step.description}
                  </p>

                  {/* Accent line */}
                  <div className="mt-7 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full group-hover:w-9 transition-all duration-500" />
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* TECH CLOUD */}

        <section className="py-24 bg-white relative">
          {/* Soft Background Accents */}
          <div className="absolute top-20 left-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-20 right-0 w-72 h-72 bg-orange-50 rounded-full blur-3xl opacity-50" />

          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                E-commerce <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Infrastructure</span>
              </h2>
              <div className="h-1 w-20 bg-slate-100 mx-auto mt-6 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="h-full w-1/2 bg-blue-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {ecomTechStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] flex flex-col items-center shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  {/* Icon Container */}
                  <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-3xl flex items-center justify-center group-hover:bg-white transition-all duration-500 border border-transparent group-hover:border-slate-100 shadow-inner group-hover:shadow-none overflow-hidden">

                    {/* Dynamic Background Glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl rounded-full"
                      style={{ backgroundColor: tech.color }}
                    />

                    {/* React Icon Component */}
                    <div
                      className="text-4xl md:text-5xl transition-all duration-500 "
                      style={{ color: tech.color }}
                    >
                      {tech.icon}
                    </div>
                  </div>

                  {/* Text Info */}
                  <h3 className="text-lg font-bold text-slate-800 transition-colors group-hover:text-black">
                    {tech.name}
                  </h3>

                  <div className="mt-3 px-3 py-1 rounded-full bg-slate-50 group-hover:bg-white border border-transparent group-hover:border-slate-100 transition-all">
                    <span className="text-[10px] font-bold tracking-widest text-slate-400 group-hover:text-slate-600">
                      {tech.category}
                    </span>
                  </div>

                  {/* Decorative Line */}
                  <div
                    className="mt-6 h-1 w-0 group-hover:w-8 transition-all duration-500 rounded-full"
                    style={{ backgroundColor: tech.color }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <QuoteSection quote="Turning visitors into customers with conversion-focused digital stores designed to scale." />

        {/* FINAL CTA */}
        <CTASection
          title={<>Ready to Scale <br className="hidden md:block" /> Your Online Empire?</>}
          description={<>Let’s build a powerful e-commerce store that drives revenue and customer satisfaction</>}
          buttonText="Start Your Consultation"
        />

      </div>
    </>

  );
};

export default EcommerceDevelopment;