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
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import React from "react";

const EcommerceDevelopment = () => {
  const navigate = useNavigate();

  /* DATA */

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
    <div className="min-h-screen bg-background">

      {/* HERO SECTION */}
      <section className="relative h-[80vh] sm:h-[90vh] flex items-start overflow-hidden bg-[#fafafa]">

        {/* 1. TECHNICAL BACKGROUND ARCHITECTURE */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Blueprint Grid Overlay - Representing the Storefront Logic */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]" />

          {/* Atmospheric Mesh Blobs - Shifted to Conversion Tones (Orange/Blue) */}
          <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-blue-600/5 blur-[130px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-orange-500/10 blur-[110px] rounded-full" />

          {/* Large Section Watermark */}
          <div className="absolute left-10 bottom-20 text-[10rem] font-black text-primary/[0.02] select-none italic tracking-tighter uppercase">
            RETAIL
          </div>
        </div>

        {/* 2. MAIN CONTENT GRID */}
        <div className="container mx-auto px-4 relative z-10 mt-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* LEFT COLUMN: Narrative */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8 text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-primary text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm">
                <ShoppingBag className="w-3 h-3" /> Transaction Architecture Lab
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tighter">
                Engineer <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium uppercase">
                  High-Converting
                </span> Digital Flagships.
              </h1>

              <p className="text-base md:text-xl text-slate-500 max-w-2xl leading-relaxed font-medium italic border-l-4 border-primary/30 pl-6">
                "We build industrial-strength e-commerce ecosystems that handle massive traffic while delivering seamless checkout experiences for brands across India."
              </p>

              <div className="flex justify-start pt-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-12 h-14 md:h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105"
                  onClick={() => navigate("/contact")}
                >
                  Launch Your Storefront <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Visual Proof (E-com Bento) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="lg:col-span-5 relative hidden lg:block"
            >
              <div className="relative group">
                {/* Decorative Glow */}
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

                {/* Framed Layer for Identity */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border-2 border-primary/10 rounded-[4rem] rotate-3 -z-10" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-4 bg-muted/30 border-y border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 italic tracking-tight">The E-commerce Edge</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We combine strategy, technology, and customer-focused design to create platforms that deliver seamless shopping experiences and revenue growth.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-background rounded-2xl border border-border shadow-sm">
                  <div className="text-3xl font-black text-orange-500">500+</div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Successful Projects</p>
                </div>
                <div className="p-4 bg-background rounded-2xl border border-border shadow-sm">
                  <div className="text-3xl font-black text-blue-600">98%</div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Satisfaction Rate</p>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-4">
              {whyChooseUsData.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-5 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/40 hover:shadow-lg transition-all group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <item.icon />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-[11px] text-muted-foreground leading-relaxed italic">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES (BENTO GRID) */}
      <section className="py-12 md:py-24 px-4 bg-background relative overflow-hidden">

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Responsive Header */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-10 md:mb-16 text-center italic tracking-tighter leading-tight">
            Ecommerce <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">
              Solutions
            </span>
          </h2>

          {/* 2. ADAPTIVE GRID (1 col mobile, 2 cols desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.01 }}
                className="group relative p-6 sm:p-8 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] bg-muted/20 border border-border/60 overflow-hidden transition-all duration-500"
              >
                {/* Responsive Icon Watermark */}
                <div className="absolute top-0 right-0 p-6 md:p-8 text-primary/10 group-hover:scale-110 md:group-hover:scale-125 transition-transform pointer-events-none">
                  {React.cloneElement(service.icon as React.ReactElement, {
                    size: typeof window !== 'undefined' && window.innerWidth < 768 ? 60 : 100
                  })}
                </div>

                <div className="relative z-10">
                  {/* Fluid Typography for Headings */}
                  <h3 className="text-2xl md:text-3xl font-black mb-3 md:mb-4 tracking-tight group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed italic pr-8">
                    {service.description}
                  </p>

                  {/* 3. RESPONSIVE FEATURE GRID (Stays as 2 cols but adjusts text size) */}
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 md:gap-2 text-[9px] md:text-xs font-black uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">
                        <Zap className="h-3 w-3 md:h-4 md:w-4 text-orange-500 fill-orange-500/20" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Accent Line */}
                  <div className="mt-8 h-1 w-0 bg-primary rounded-full group-hover:w-16 transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTION ROADMAP */}
      <section className="py-24 px-4 bg-[#020617] text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white italic">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-orange-600 italic font-serif font-medium">Production Roadmap</span> </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step) => (
              <motion.div key={step.id} whileHover={{ y: -10 }} className="relative p-10 bg-white/5 rounded-[2.5rem] border border-white/10 shadow-sm hover:shadow-md transition-all group overflow-hidden">
                <span className="absolute top-6 right-10 text-7xl font-bold text-gray-500 italic select-none group-hover:text-gray-400 transition-colors">
                  {step.id}
                </span>
                <div className="mb-6 relative z-10 text-orange-500">{step.icon}</div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3">{step.step}</h3>
                  <p className="text-slate-400 italic leading-relaxed text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH CLOUD */}
      <section className="py-24 px-4 bg-muted/30 border-y border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Retail Stack</span></h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 text-">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
                className="px-6 py-3 bg-card border border-border rounded-2xl text-sm text-center font-bold shadow-sm transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection quote="Turning visitors into customers with conversion-focused digital stores designed to scale." />

      {/* FINAL CTA */}
      <section className="py-12 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-primary to-indigo-900 p-8 sm:p-12 md:p-20 text-center rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl relative overflow-hidden group">

            {/* 1. RESPONSIVE DECORATIVE ICON (Scaled and hidden on small mobiles if needed) */}
            <div className="absolute top-0 right-0 p-4 md:p-10 opacity-10 pointer-events-none transition-transform duration-700 group-hover:rotate-[25deg] group-hover:scale-110">
              <Smartphone className="w-32 h-32 md:w-64 md:h-64 rotate-12" />
            </div>

            {/* 2. CONTENT ARCHITECTURE */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 text-white italic tracking-tighter leading-tight uppercase">
                Ready to Scale Your Online Empire?
              </h2>

              <p className="text-sm md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium italic">
                Let’s build a powerful e-commerce store that drives revenue and customer satisfaction
              </p>

              {/* 3. ADAPTIVE BUTTON (Full width on mobile, centered on desktop) */}
              <div className="flex justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto rounded-full h-14 md:h-16 px-8 md:px-12 text-lg md:text-xl font-black shadow-xl hover:scale-105 active:scale-95 transition-all bg-secondary text-wrap text-primary hover:bg-slate-50"
                  onClick={() => window.open("https://wa.me/919589581364", "_blank")}
                >
                  Start Your Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default EcommerceDevelopment;