
import { Button } from "@/components/ui/button";
import {
  Check, Zap, Shield, BarChart3, Target, MessageSquare,
  Send, Users, Globe, Smartphone, Mail, Key, Layers, Rocket,
  ArrowRight,
  Radio
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const BulkBroadcasting = () => {
  const navigate = useNavigate();

  /* DATA VARIABLES */
  const heroData = {
    heading: "Reach Thousands Instantly with Smart Bulk Broadcasting",
    subtext:
      "We help businesses connect with their audience instantly through reliable, fast, and targeted bulk broadcasting services. Whether it’s promotions, updates, or alerts — deliver your message at scale with confidence.",
    cta: "Start Broadcasting Now",
    image: "https://img.freepik.com/free-vector/bulk-sms-marketing-concept-illustration_114360-1884.jpg",
  };

  const whyChoosePoints = [
    { title: "High Delivery Rate", icon: <Rocket className="w-6 h-6" /> },
    { title: "Instant Broadcasting", icon: <Zap className="w-6 h-6" /> },
    { title: "Smart Segmentation", icon: <Users className="w-6 h-6" /> },
    { title: "Secure & Compliant", icon: <Shield className="w-6 h-6" /> },
    { title: "Real-Time Tracking", icon: <BarChart3 className="w-6 h-6" /> },
    { title: "Scalable Solutions", icon: <Layers className="w-6 h-6" /> },
  ];

  const services = [
    { name: "Bulk SMS Marketing", icon: <Smartphone /> },
    { name: "WhatsApp Messaging", icon: <MessageSquare /> },
    { name: "Email Campaigns", icon: <Mail /> },
    { name: "Transactional SMS", icon: <Send /> },
    { name: "OTP Services", icon: <Key /> },
    { name: "API Integration", icon: <Globe /> },
  ];

  const whyNeedPoints = [
    "Instant Customer Communication",
    "Promote Offers & Discounts",
    "Send Transactional Alerts",
    "Increase Customer Engagement",
    "Improve Brand Awareness",
    "Cost-Effective Marketing Channel",
  ];

  const features = [
    "Unlimited Contacts",
    "Smart Scheduling",
    "Rich Media Support",
    "Contact Management",
    "Delivery Analytics",
    "Dynamic Personalization",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">

      {/* HERO SECTION (Kept Structure) */}
      <section className="relative min-h-[90vh] flex items-start overflow-hidden bg-[#fafafa]">

        {/* 1. TECHNICAL BACKGROUND ARCHITECTURE */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Blueprint Grid Overlay - Representing Messaging Infrastructure */}
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
              className="lg:col-span-7 space-y-8 text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-primary text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm">
                <Radio className="w-3 h-3" /> Mass Outreach Architecture
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tighter">
                {heroData.heading.split("Smart")[0]} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium uppercase">
                  Smart Broadcasting
                </span> Solutions.
              </h1>

              <p className="text-base md:text-xl text-slate-500 leading-relaxed font-medium italic border-l-4 border-primary/30 pl-6">
                {heroData.subtext}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-12 h-14 md:h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105"
                  onClick={() => navigate("/contact")}
                >
                  {heroData.cta} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Visual Proof (Broadcasting Bento) */}
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
                    src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80"
                    alt="Advanced Messaging Dashboard"
                    className="rounded-[2.5rem] w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                  />

                  {/* Floating Mini-Metric Overlay */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg animate-bounce-slow">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Efficiency</p>
                    <div className="flex items-center gap-2">
                      <p className="text-xl font-black text-slate-900">98% Delivery</p>
                      <Zap size={16} className="text-yellow-500 fill-yellow-500" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (Modern Grid) */}
      <section className="py-24 px-4 bg-background relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Socio Bhaarat </span> ?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-lg">
              We combine advanced technology and real-time analytics to ensure your campaigns achieve maximum engagement.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePoints.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="group p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300"
              >
                <div className="mb-5 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">Engineered for speed and reliability to keep your business growing.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY YOU NEED IT */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-muted">

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Heading Area */}
          <div className="text-center mb-12 md:mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-black tracking-[0.2em] uppercase text-[10px] md:text-xs border-b-2 border-primary/20 pb-1"
            >
              Business Impact Architecture
            </motion.span>

            <h2 className="text-3xl md:text-5xl font-black mt-6 mb-6 text-slate-900 leading-tight">
              Why Do You Need
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium px-2">
                Bulk Broadcasting?
              </span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed font-medium italic">
              "Bulk broadcasting eliminates the lag between your idea and your customer's action, ensuring you are the first to reach the phone."
            </p>
          </div>

          {/* Content Grid: Stacks on mobile, 2 columns on medium+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

            {/* Visual Side (Left on Desktop, Bottom on Mobile) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1 relative"
            >
              <div className="bg-card border-2 border-border/50 p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden group">

                <div className="space-y-6 md:space-y-8 relative z-10">
                  {whyNeedPoints.slice(0, 3).map((point, index) => (
                    <div key={index} className="flex items-center gap-4 group/item">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover/item:bg-secondary group-hover/item:text-white transition-all duration-300 shadow-sm">
                        <Target className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <h3 className="text-lg md:text-xl font-black text-slate-800 italic">{point}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Narrative Side (Right on Desktop, Top on Mobile) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2 space-y-6 md:space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-[10px] md:text-xs font-bold uppercase tracking-widest border border-secondary/20 backdrop-blur-md">
                <Zap className="w-3 md:w-4 h-4 fill-secondary/20" />
                <span>Speed to Market</span>
              </div>

              <h3 className="text-2xl md:text-4xl font-black leading-tight text-slate-900 tracking-tighter italic">
                Communicate at the <br /> speed of thought.
              </h3>

              <p className="text-slate-500 text-sm md:text-lg leading-relaxed font-medium border-l-4 border-secondary/30 pl-6 italic">
                In a world of noise, being the first to reach your customer's phone is everything. We engineering the infrastructure that makes it happen.
              </p>

              {/* Mini Grid for secondary points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {whyNeedPoints.slice(3).map((point, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded-xl hover:bg-muted/50 transition-colors">
                    <div className="bg-primary/10 p-1.5 rounded-lg">
                      <Check className="w-3 h-3 md:w-4 md:h-4 text-primary" strokeWidth={4} />
                    </div>
                    <span className="font-bold text-xs md:text-sm text-slate-700 tracking-tight">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES (Glassmorphism Cards) */}
      <section className="py-16 md:py-24 px-4 bg-background relative overflow-hidden">

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header Architecture */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12 md:mb-16 gap-6">
            <div className="max-w-2xl border-l-4 border-primary pl-6 md:pl-8">
              <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900 leading-tight">
                Our <br className="block md:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium ">
                  Specialized Services
                </span>
              </h2>
              <p className="text-slate-500 text-base md:text-lg font-medium italic">
                "Powerful communication tools engineered for every industrial scale."
              </p>
            </div>
          </div>

          {/* Adaptive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -5 }}
                className="flex items-center gap-4 p-5 md:p-6 rounded-[1.5rem] md:rounded-2xl bg-gradient-to-b from-card to-background border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all group"
              >
                {/* Responsive Icon Container */}
                <div className="p-3 md:p-4 rounded-xl bg-secondary/10 text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0 shadow-sm">
                  {/* Ensuring icon scales properly */}
                  <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>

                <div className="flex flex-col">
                  <h3 className="font-black text-sm md:text-lg text-slate-800 italic group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  {/* Added a subtle detail line for the "Lab" aesthetic */}
                  <div className="h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500 mt-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 md:py-24 px-4 bg-primary/5 relative overflow-hidden">
        {/* Technical Background Architecture (Consistent with SocioBhaarat Lab) */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="bg-card border-2 border-border/50 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden p-6 sm:p-10 md:p-16 relative shadow-2xl">

            {/* Responsive Decorative Icon */}
            <div className="absolute top-0 right-0 p-4 md:p-10 opacity-5 pointer-events-none">
              <Target className="w-32 h-32 md:w-64 md:h-64 rotate-12" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-10 md:mb-12 text-center md:text-left text-slate-900 uppercase italic">
                Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Features</span>
              </h2>

              {/* Adaptive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-10 gap-x-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="mt-1 bg-green-500/10 p-1.5 rounded-xl text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 shrink-0">
                      <Check className="h-4 w-4 md:h-5 md:w-5" strokeWidth={4} />
                    </div>
                    <div>
                      <h3 className="font-black text-lg md:text-xl mb-1 text-slate-800 uppercase italic leading-tight">
                        {feature}
                      </h3>
                      <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                        Optimize your workflow with our built-in intelligence.
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Responsive Testimonial & Social Proof Footer */}
              <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-border/50 flex flex-col md:flex-row items-center gap-8 justify-between">
                <div className="max-w-md border-l-4 border-primary/20 pl-6 text-center md:text-left">
                  <p className="text-lg md:text-xl font-bold italic text-slate-500 leading-relaxed">
                    "The most reliable broadcasting tool we've ever used."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-primary to-indigo-900 p-8 sm:p-12 md:p-20 text-center rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl relative overflow-hidden group">


            {/* 2. CONTENT ARCHITECTURE */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 text-white italic tracking-tighter leading-tight uppercase">
                Ready to Scale Your Growth?
              </h2>

              <p className="text-sm md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium italic">
                "Join 500+ businesses using Sociobhaarat to reach their customers daily."
              </p>

              {/* 3. ADAPTIVE BUTTON */}
              <div className="flex justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto rounded-full h-14 md:h-16 px-8 md:px-12 text-sm md:text-xl font-black shadow-xl hover:scale-105 active:scale-95 transition-all bg-secondary text-primary text-wrap hover:bg-slate-50"
                  onClick={() => window.open("https://wa.me/919589581364", "_blank")}
                >
                  Get Started for Free
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default BulkBroadcasting;