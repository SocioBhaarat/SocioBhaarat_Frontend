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

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-24 pb-28 px-4 overflow-hidden bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10 animate-pulse" />

        <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs font-bold mb-6 border border-blue-200">
              <Zap className="w-3 h-3 fill-current" />
              ROI-DRIVEN STRATEGIES
            </div>

            <h1 className="font-display text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight">
              Drive Measurable Growth with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-indigo-500">
                Performance Marketing
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
              We scale businesses through data-backed paid advertising. Every rupee spent is tracked, optimized, and tied directly to your revenue goals.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full px-10 h-16 text-lg shadow-[0_20px_40px_-15px_rgba(var(--primary),0.3)] hover:scale-105 transition-transform"
                onClick={() => navigate("/contact")}
              >
                Get Free Audit <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-10 h-16 text-lg border-2"
                onClick={() => navigate("/portfolio")}
              >
                View Case Studies
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[3rem] blur-2xl opacity-40 -z-10" />
            <img
              src="https://img.freepik.com/free-vector/performance-marketing-concept-illustration_114360-1432.jpg"
              alt="Performance Marketing Illustration"
              className="relative w-full max-w-lg mx-auto rounded-[2.5rem] shadow-2xl border border-white/20"
            />
            {/* Floating Live Metric Mockup */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border p-5 rounded-2xl shadow-xl animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-green-500/20 text-green-600 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase">Current ROAS</p>
                  <p className="text-xl font-black text-foreground">4.85x</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= METRICS DASHBOARD ================= */}
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

      {/* ================= WHY SOCIOBHAARAT (Glow Cards) ================= */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">The Growth Engine</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              We don't just "run ads." We engineer conversion ecosystems that turn visitors into high-value customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "ROI Strategy", desc: "Every campaign is built with profitability in mind, ensuring spend translates to revenue." },
              { icon: PieChart, title: "Data-Driven Insights", desc: "We use real-time analytics to make continuous adjustments for maximum efficiency." },
              { icon: MousePointer2, title: "Precision Targeting", desc: "Laser-focused strategies to reach high-intent users and reduce wasted spend." },
              { icon: FileSearch, title: "Continuous A/B Testing", desc: "We constantly test creatives, copies, and audiences to find the ultimate winners." },
              { icon: DollarSign, title: "CRO Focus", desc: "Optimized landing pages and funnels that convert traffic into qualified leads." },
              { icon: Briefcase, title: "Total Transparency", desc: "Actionable weekly reports so you always know exactly where your investment goes." }
            ].map((item, index) => (
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

      {/* ================= WHY YOU NEED PERFORMANCE MARKETING ================= */}
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
                <span className="text-primary italic">Start Scaling.</span>
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

      {/* ================= PERFORMANCE MARKETING SERVICES ================= */}
      <section className="py-24 px-4 bg-muted/30 border-y border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Precision-Targeted Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We manage your full-funnel strategy across the world's most powerful ad platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Google Ads Management", icon: <Target />, desc: "Search and Shopping campaigns optimized for high-intent traffic." },
              { title: "Meta Ads (FB & IG)", icon: <TrendingUp />, desc: "Creative-driven lead generation and brand visibility." },
              { title: "LinkedIn Advertising", icon: <Briefcase />, desc: "B2B lead generation targeting professional decision-makers." },
              { title: "YouTube Video Ads", icon: <BarChart />, desc: "Engaging video campaigns to increase recall and conversions." },
              { title: "Retargeting Campaigns", icon: <RefreshCcw />, desc: "Turning warm prospects into paying customers." },
              { title: "Analytics & CRO", icon: <FileSearch />, desc: "Attribution modeling and landing page optimization." }
            ].map((service, index) => (
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
                <Button variant="link" className="p-0 h-auto text-primary font-bold group-hover:gap-3 transition-all">
                  LEARN MORE <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS (Horizontal Roadmap) ================= */}
      <section className="py-24 px-4 bg-muted/50 overflow-hidden relative">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-20 italic">The Roadmap to Scale</h2>

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

      {/* ================= INDUSTRIES (Bento Grid) ================= */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 italic">Industries We Serve Best</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShoppingCart, title: "E-commerce", grad: "from-pink-500 to-rose-500" },
              { icon: Briefcase, title: "B2B Services", grad: "from-blue-600 to-indigo-600" },
              { icon: Heart, title: "Healthcare", grad: "from-emerald-500 to-teal-500" },
              { icon: Home, title: "Real Estate", grad: "from-amber-500 to-orange-500" }
            ].map((ind, i) => (
              <div key={i} className="group p-8 rounded-[2rem] bg-card border border-border relative overflow-hidden h-64 flex flex-col justify-end">
                <div className={`absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform`}>
                  <ind.icon className="w-32 h-32" />
                </div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${ind.grad} flex items-center justify-center text-white mb-4`}>
                  <ind.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">{ind.title}</h3>
                <p className="text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Tailored high-ROAS funnels for {ind.title} growth.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRICING & TRANSPARENCY ================= */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Transparent Pricing</h2>
            <div className="h-1.5 w-24 bg-primary rounded-full mx-auto" />
          </div>

          <Card className="p-10 md:p-16 rounded-[3rem] border-2 border-primary/20 bg-card/50 backdrop-blur-xl relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <ShieldCheck className="w-64 h-64" />
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">The ROI Model</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We operate on a performance fee structure, typically <strong>15-20% of monthly ad spend</strong>. This ensures our incentives are perfectly aligned with your growth.
                </p>
                <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20">
                  <p className="text-sm font-bold text-primary">Minimum Spend: ₹50,000 / mo</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold uppercase text-xs tracking-widest text-muted-foreground">Standard Terms</h4>
                <ul className="space-y-4">
                  {["50% Advance Payment", "Direct Platform Billing", "No Long-Term Contracts", "Weekly ROI Reporting"].map((term, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-semibold">
                      <Check className="h-5 w-5 text-green-500" strokeWidth={3} />
                      {term}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-4xl font-bold mb-8 text-center">Transparent Pricing & Payment Terms</h2>
          <div className="bg-gradient-to-br from-background via-secondary/5 to-primary/10 p-8 rounded-lg shadow-lg border border-border">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-xl mb-3">Our Pricing Model</h3>
                <p className="text-muted-foreground">We charge a management fee of 15-20% of your monthly ad spend, depending on campaign complexity and volume. Minimum monthly ad spend: ₹50,000.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3">Payment Terms</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>50% advance payment before campaign launch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Balance 50% at month-end based on actual ad spend</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Ad budget is paid directly to the platform (Google, Facebook, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>No long-term contracts - monthly rolling agreements</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3">What You Get</h3>
                <p className="text-muted-foreground">Complete campaign management, weekly reports, dedicated account manager, landing page recommendations, and continuous optimization to improve your ROAS.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <Card className="bg-gradient-to-br from-primary to-indigo-900 text-white p-12 md:p-20 text-center rounded-[4rem] relative overflow-hidden border-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-32 -right-32 w-80 h-80 bg-white/5 rounded-full blur-3xl"
            />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 italic leading-tight tracking-tight">
                Ready to Stop Guessing <br /> and Start Scaling?
              </h2>
              <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto font-medium leading-relaxed">
                Join 500+ businesses who rely on Socio Bhaarat to deliver consistent leads and massive ROI through performance marketing.
              </p>
              <Button size="lg" variant="secondary" className="rounded-full h-16 px-12 text-xl font-bold hover:scale-105 transition-all shadow-2xl" onClick={() => window.open("https://wa.me/919589581364", "_blank")}>
                Claim Your Free ROI Audit Now
              </Button>
            </div>
          </Card>
        </div>
      </section>

    </div>
  );
};

export default PerformanceMarketing;