import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
  ShieldCheck
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
    <div className="min-h-screen bg-background selection:bg-orange-100">

      {/* HERO SECTION */}
      <section className="relative pt-44 pb-32 px-4 overflow-hidden bg-[#fafafa] bg-gradient-to-br from-secondary/60 to-accent/35">

        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-slate-200 backdrop-blur-md text-orange-600 text-[10px] font-bold mb-10 tracking-[0.2em] uppercase shadow-sm">
              <Zap className="w-3 h-3" /> Retail Engineering Lab
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black mb-8 text-slate-900 leading-[1.05] tracking-tighter">
              Build <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-blue-600">High-Converting</span> Stores.
            </h1>

            <p className="text-lg sm:text-xl text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed italic">
              "Turning visitors into customers with conversion-focused digital stores designed to scale."
            </p>

            <Button size="lg" className="rounded-full px-12 h-16 text-lg font-bold bg-orange-500 hover:bg-orange-600 shadow-xl shadow-orange-200 transition-all hover:scale-105" onClick={() => navigate("/contact")}>
              Launch Your Store <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
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
                    <item.icon/>
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
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center italic tracking-tight">E-commerce Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} whileHover={{ scale: 1.01 }} className="group relative p-10 rounded-[3.5rem] bg-muted/20 border border-border/60 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-primary/10 group-hover:scale-125 transition-transform">{service.icon}</div>
                <h3 className="text-3xl font-extrabold mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed italic">{service.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider opacity-70">
                      <Zap className="h-4 w-4 text-orange-500" /> {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTION ROADMAP (01–06 GRID) */}
      <section className="py-24 px-4 bg-[#020617] text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white italic">The Production Roadmap</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step) => (
              <motion.div key={step.id} whileHover={{ y: -10 }} className="relative p-10 bg-white/5 rounded-[2.5rem] border border-white/10 shadow-sm hover:shadow-md transition-all group overflow-hidden">
                <span className="absolute top-6 right-10 text-7xl font-bold text-white/[0.03] italic select-none group-hover:text-white/10 transition-colors">
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
      <section className="py-24 px-4 bg-background border-y border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-12 italic">The Retail Stack</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tool, index) => (
              <motion.span key={index} whileHover={{ scale: 1.1, color: "#f97316" }} className="px-8 py-4 bg-card border-2 border-border rounded-2xl text-lg font-bold shadow-sm transition-all cursor-default">
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection quote="Turning visitors into customers with conversion-focused digital stores designed to scale." />

      {/* FINAL CTA */}
      <section className="my-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-primary to-indigo-900 p-12 md:p-24 text-center rounded-[5rem] shadow-2xl relative overflow-hidden text-white border-none">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.pattern')] opacity-20" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 italic tracking-tighter leading-tight">Ready to Scale Your Online Empire?</h2>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-medium">Let’s build a powerful e-commerce store that drives revenue and customer satisfaction.</p>
              <Button size="lg" variant="secondary" className="rounded-full h-16 px-12 text-xl font-bold shadow-xl hover:scale-110 transition-all bg-white text-orange-600 border-none" onClick={() => window.open("https://wa.me/919589581364", "_blank")}>
                Start Your Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default EcommerceDevelopment;