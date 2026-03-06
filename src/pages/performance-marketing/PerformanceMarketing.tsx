import { Button } from "@/components/ui/button";
import {
  Check, BarChart, Target, DollarSign, TrendingUp, FileSearch,
  ShoppingCart, Briefcase, Heart, Home, ArrowRight, Zap,
  ShieldCheck, PieChart, MousePointer2,
  Search,
  Settings,
  CheckCircle2,
  RefreshCcw
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";

const PerformanceMarketing = () => {
  const navigate = useNavigate();

  const services = [
    { title: "Google Ads Management", icon: <Target />, desc: "Search and Shopping campaigns optimized for high-intent traffic." },
    { title: "Meta Ads (FB & IG)", icon: <TrendingUp />, desc: "Creative-driven lead generation and brand visibility." },
    { title: "LinkedIn Advertising", icon: <Briefcase />, desc: "B2B lead generation targeting professional decision-makers." },
    { title: "YouTube Video Ads", icon: <BarChart />, desc: "Engaging video campaigns to increase recall and conversions." },
    { title: "Retargeting Campaigns", icon: <RefreshCcw />, desc: "Turning warm prospects into paying customers." },
    { title: "Analytics & CRO", icon: <FileSearch />, desc: "Attribution modeling and landing page optimization." }
  ]

  const whyChoooseUs = [
    { icon: Target, title: "ROI Strategy", desc: "Every campaign is built with profitability in mind, ensuring spend translates to revenue." },
    { icon: PieChart, title: "Data-Driven Insights", desc: "We use real-time analytics to make continuous adjustments for maximum efficiency." },
    { icon: MousePointer2, title: "Precision Targeting", desc: "Laser-focused strategies to reach high-intent users and reduce wasted spend." },
    { icon: FileSearch, title: "Continuous A/B Testing", desc: "We constantly test creatives, copies, and audiences to find the ultimate winners." },
    { icon: DollarSign, title: "CRO Focus", desc: "Optimized landing pages and funnels that convert traffic into qualified leads." },
    { icon: Briefcase, title: "Total Transparency", desc: "Actionable weekly reports so you always know exactly where your investment goes." }
  ]

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-start overflow-hidden bg-[#fafafa]">

        {/* 1. TECHNICAL BACKGROUND ARCHITECTURE */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Blueprint Grid Overlay - Representing Data Accuracy */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]" />

          {/* Atmospheric Mesh Blobs - Blue for Trust, Orange for Energy/Conversion */}
          <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-blue-600/5 blur-[130px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-orange-500/10 blur-[110px] rounded-full" />
        </div>

        {/* 2. MAIN CONTENT GRID */}
        <div className="container mx-auto px-4 relative z-10 mt-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* LEFT COLUMN: ROI Narrative */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8 text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-primary text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm">
                <Zap className="w-3 h-3 fill-current" /> ROI-Driven Engineering Lab
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tighter">
                Drive <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium uppercase">
                  Measurable Growth
                </span> Through Data.
              </h1>

              <p className="text-base md:text-xl text-slate-500 max-w-lg leading-relaxed font-medium italic border-l-4 border-primary/30 pl-6">
                "We scale businesses through precision-targeted advertising. Every rupee spent is tracked, optimized, and tied directly to your revenue goals."
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-12 h-14 md:h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105"
                  onClick={() => navigate("/contact")}
                >
                  Get Free Audit <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Visual Proof (Performance Bento) */}
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
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                    alt="Data Analytics and Growth Performance Dashboard"
                    className="rounded-[2.5rem] w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                  />

                  {/* Floating Live Metric Mockup */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/50 shadow-lg animate-bounce-slow">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Current ROAS</p>
                        <p className="text-xl font-black text-slate-900">4.85x</p>
                      </div>
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

      {/* METRICS DASHBOARD */}
      <section className="py-24 px-4 bg-muted/30 border-y border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Average ROAS", value: "4.2x", color: "text-blue-600" },
              { label: "Lower CAC", value: "65%", color: "text-purple-600" },
              { label: "Ad Managed", value: "₹50Cr+", color: "text-emerald-600" },
              { label: "Campaigns", value: "300+", color: "text-orange-600" }
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className={`text-5xl font-black mb-2 tracking-tighter ${stat.color} group-hover:scale-110 transition-transform`}>
                  {stat.value}
                </div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SOCIOBHAARAT (Glow Cards) */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium"> Growth Engine</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              We don't just "run ads." We engineer conversion ecosystems that turn visitors into high-value customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoooseUs.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="p-8 rounded-[2.5rem] bg-card border border-border/50 hover:border-primary/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY YOU NEED PERFORMANCE MARKETING */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Column: Contextual Narrative */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                <DollarSign className="w-3 h-3" />
                Financial Accountability
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Stop Guessing. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Start Scaling.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Performance marketing allows you to track, measure, and optimize every campaign in real-time. You pay only for measurable actions — ensuring better ROI and controlled budgets.
              </p>

              <div className="flex flex-col gap-4 pt-4">
                {[
                  { label: "Pay for Results", desc: "Spend only when specific actions like leads or sales are completed." },
                  { label: "Real-Time Optimization", desc: "Adjust budgets instantly based on what is actually converting." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-muted/50 border border-border">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm">{item.label}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Key Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Measurable Results", icon: <BarChart />, desc: "Track every lead with real-time dashboards." },
                { title: "Faster Lead Gen", icon: <Target />, desc: "Reach high-intent audiences instantly." },
                { title: "Higher Conversions", icon: <TrendingUp />, desc: "A/B testing to maximize your rates." },
                { title: "Budget Optimization", icon: <DollarSign />, desc: "Scale winners and cut wasted spend." }
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-sm mb-2">{benefit.title}</h3>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE MARKETING SERVICES */}
      <section className="py-24 px-4 bg-muted/30 border-y border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4"> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Precision-Targeted</span> Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We manage your full-funnel strategy across the world's most powerful ad platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="group p-8 rounded-[2.5rem] bg-card border border-border/50 hover:border-primary/40 transition-all duration-300"
              >
                <div className="mb-6 w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS (Horizontal Roadmap) */}
      <section className="py-24 px-4 bg-muted/50 overflow-hidden relative">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 italic">The Roadmap to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Scale</span> </h2>

          <div className="relative">
            <div className="hidden lg:block absolute top-[80px] left-[10%] right-[10%] h-px border-t-2 border-dashed border-border -z-10" />

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { step: "Audit", icon: Search, color: "bg-blue-500" },
                { step: "Strategy", icon: Target, color: "bg-purple-500" },
                { step: "Setup", icon: Settings, color: "bg-orange-500" },
                { step: "Launch", icon: Zap, color: "bg-emerald-500" },
                { step: "Scale", icon: TrendingUp, color: "bg-amber-500" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 ${item.color} text-white rounded-2xl flex items-center justify-center shadow-xl mb-6 transition-transform hover:rotate-6`}>
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">0{index + 1}. {item.step}</h4>
                  <p className="text-xs text-muted-foreground px-4">Standardized high-performance auditing and execution flow.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES (Bento Grid) */}
      <section className="py-16 md:py-24 px-4 bg-background relative overflow-hidden">

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Heading with Excellence Gradient */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 leading-[1.1]">
              Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Serve Best</span>
            </h2>
          </div>

          {/* 2. ADAPTIVE GRID (1 col mobile, 2 col tablet, 4 col desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: ShoppingCart, title: "E-commerce", grad: "from-pink-500 to-rose-500" },
              { icon: Briefcase, title: "B2B Services", grad: "from-blue-600 to-indigo-600" },
              { icon: Heart, title: "Healthcare", grad: "from-emerald-500 to-teal-500" },
              { icon: Home, title: "Real Estate", grad: "from-amber-500 to-orange-500" }
            ].map((ind, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="group p-6 md:p-8 rounded-[2rem] bg-card border border-border relative overflow-hidden min-h-[14rem] md:h-64 flex flex-col justify-end transition-all duration-300"
              >
                {/* Responsive Watermark Icon */}
                <div className="absolute top-0 right-0 p-4 md:p-8 text-slate-900/[0.03] group-hover:scale-110 md:group-hover:scale-125 transition-transform pointer-events-none">
                  <ind.icon className="w-24 h-24 md:w-32 md:h-32" />
                </div>

                <div className="relative z-10">
                  {/* Gradient Icon Badge */}
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-r ${ind.grad} flex items-center justify-center text-white mb-4 shadow-lg`}>
                    <ind.icon className="h-5 w-5 md:h-6" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-black tracking-tight text-slate-900 group-hover:text-primary transition-colors">
                    {ind.title}
                  </h3>

                  {/* Responsive Description - visible on mobile tap/desktop hover */}
                  <p className="text-[10px] md:text-xs text-muted-foreground mt-2 md:opacity-0 group-hover:opacity-100 transition-all duration-300 leading-relaxed italic">
                    Tailored high-ROAS funnels for {ind.title} growth in MP.
                  </p>

                  {/* Interactive Progress Line */}
                  <div className="mt-4 h-1 w-0 bg-primary rounded-full group-hover:w-12 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING & TRANSPARENCY */}
      <section className="py-12 md:py-24 bg-muted/30 relative overflow-hidden">

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 leading-tight">
              Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Pricing</span>
            </h2>
            <div className="h-1 md:h-1.5 w-16 md:w-24 bg-primary rounded-full mx-auto mt-4" />
          </div>

          {/* Adaptive Card: Scales padding and border radius for mobile */}
          <Card className="p-8 sm:p-12 md:p-16 rounded-[2.5rem] md:rounded-[3rem] border-2 border-primary/20 bg-card/50 backdrop-blur-xl relative overflow-hidden shadow-2xl">

            {/* Responsive Decorative Shield */}
            <div className="absolute top-0 right-0 p-4 md:p-10 opacity-5 pointer-events-none">
              <ShieldCheck className="w-32 h-32 md:w-64 md:h-64 rotate-12" />
            </div>

            {/* Grid: 1 col on mobile, 2 cols on md+ */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

              {/* The ROI Model Logic */}
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900">The ROI Model</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed italic">
                  We operate on a performance fee structure, typically <strong>15-20% of monthly ad spend</strong>. This ensures our incentives are perfectly aligned with your growth.
                </p>
                <div className="p-3 md:p-4 bg-primary/10 rounded-2xl border border-primary/20 inline-block md:block">
                  <p className="text-[10px] md:text-sm font-black text-primary uppercase tracking-widest">
                    Minimum Spend: ₹50,000 / mo
                  </p>
                </div>
              </div>

              {/* Standard Terms List */}
              <div className="space-y-4 md:space-y-5">
                <h4 className="font-black uppercase text-[10px] md:text-xs tracking-[0.2em] text-slate-400">
                  Standard Terms
                </h4>
                <ul className="space-y-3 md:space-y-4">
                  {["50% Advance Payment", "Direct Platform Billing", "No Long-Term Contracts", "Weekly ROI Reporting"].map((term, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs md:text-sm font-bold text-slate-700">
                      <div className="h-6 w-6 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                        <Check className="h-4 w-4 text-green-600" strokeWidth={3} />
                      </div>
                      {term}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </Card>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="py-12 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-primary to-indigo-900 p-8 sm:p-12 md:p-20 text-center rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl relative overflow-hidden group">


            {/* 2. CONTENT ARCHITECTURE */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 text-white italic tracking-tighter leading-tight uppercase">
                Ready to Stop Guessing <br /> and Start Scaling?
              </h2>

              <p className="text-sm md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium italic">
                "Join 500+ businesses who rely on Socio Bhaarat to deliver consistent leads and massive ROI through performance marketing."
              </p>

              {/* 3. ADAPTIVE BUTTON */}
              <div className="flex justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto rounded-full h-14 md:h-16 px-8 md:px-12 text-sm md:text-xl font-black shadow-xl hover:scale-105 active:scale-95 transition-all bg-secondary text-primary text-wrap hover:bg-slate-50"
                  onClick={() => window.open("https://wa.me/919589581364", "_blank")}
                >
                  Claim Your Free ROI Audit Now
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default PerformanceMarketing;