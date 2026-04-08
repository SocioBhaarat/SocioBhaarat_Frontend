import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/ui/CTASection";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BarChart3, Bell, Check, CheckCircle, MessageCircle, Send, Smartphone, Users, Zap } from "lucide-react";

const WhatsAppPackages = () => {
  const reduce = useReducedMotion();
  const packages = [
    {
      name: "Basic Package",
      price: "₹Get quote",
      description: "For small businesses starting with WhatsApp",
      features: [
        "Up to 5,000 Messages/month",
        "Basic Chatbot",
        "Broadcast Messages",
        "Quick Replies",
        "Basic Analytics",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Professional Package",
      price: "Get quote",
      description: "Most popular for growing businesses",
      features: [
        "Up to 20,000 Messages/month",
        "Advanced Chatbot",
        "Broadcast Campaigns",
        "Contact Management",
        "Advanced Analytics",
        "Template Messages",
        "CRM Integration",
        "Priority Support",
        "Custom Workflows"
      ],
      popular: true
    },
    {
      name: "Enterprise Package",
      price: "Get quote",
      description: "For large-scale operations",
      features: [
        "Unlimited Messages",
        "AI-Powered Chatbot",
        "Advanced Automation",
        "Multi-Agent Support",
        "Custom API Integration",
        "Dedicated Account Manager",
        "24/7 Support",
        "Custom Reporting",
        "White Label Solution",
        "Number Verification Included",
        "Team Training"
      ],
      popular: false
    }
  ];

  const floatingBadges = [
  { icon: Users,       value: "2B+",  label: "WA Users",      color: "bg-emerald-50 border-emerald-200 text-emerald-700", pos: "top-[22%] left-[0%]",    delay: 0 },
  { icon: BarChart3,   value: "98%",  label: "Open Rate",     color: "bg-blue-50 border-blue-200 text-blue-700",          pos: "top-[14%] right-[0%]",   delay: 0.15 },
  { icon: Send,        value: "< 3s", label: "Delivery Time", color: "bg-orange-50 border-orange-200 text-orange-700",    pos: "bottom-[30%] left-[0%]", delay: 0.3 },
  { icon: CheckCircle, value: "4.9★", label: "Client Rating", color: "bg-violet-50 border-violet-200 text-violet-700",    pos: "bottom-[26%] right-[0%]",delay: 0.45 },
];

  const chatBubbles = [
    { from: "brand", text: "Hey! 👋 Your order #4821 has shipped.", delay: 0 },
    { from: "user", text: "Great! When will it arrive?", delay: 0.6 },
    { from: "brand", text: "Expected by tomorrow 3 PM. Track here 📦", delay: 1.2 },
    { from: "user", text: "Perfect, thanks! 🙌", delay: 1.8 },
  ];

  const pills = ["Broadcast", "Automation", "Chatbot", "Analytics", "Bulk API", "CRM Sync"];

  const features = [
    "Verified Business Profile",
    "Rich Media Messages",
    "Auto-reply Workflows",
    "Click-to-WhatsApp Ads",
  ];

  return (
    <>
      <SEO
        title="WhatsApp Marketing Packages | Socio Bhaarat"
        description="Get scalable WhatsApp marketing packages for bulk messaging, automation, and customer engagement."
        keywords="whatsapp marketing packages, whatsapp api pricing, bulk messaging plans, whatsapp automation services, whatsapp marketing in jabalpur"
        url="/packages/whatsapp-marketing"
      />
      <div className="min-h-screen bg-background">
        <section className="relative pt-10 pb-12 overflow-hidden bg-[#fafafa]">

          {/* ── Background ── */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]" />
            <div className="absolute top-0 right-0 w-[560px] h-[560px] bg-emerald-400/6 blur-[130px] rounded-full animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-primary/5 blur-[110px] rounded-full animate-pulse [animation-delay:1.8s]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-300/5 blur-[90px] rounded-full" />

            {/* Orbital rings */}
            <div
              className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-dashed border-slate-200/70"
              style={{ animation: reduce ? "none" : "waSpin 28s linear infinite" }}
            />
            <div
              className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full border border-dashed border-slate-100/80"
              style={{ animation: reduce ? "none" : "waSpin 44s linear infinite reverse" }}
            />

            {/* Orbit dots */}
            <motion.div
              className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]"
              animate={reduce ? {} : { rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            >
              <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_12px_3px] shadow-emerald-400/50" />
            </motion.div>
            <motion.div
              className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px]"
              animate={reduce ? {} : { rotate: -360 }}
              transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
            >
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_8px_2px] shadow-orange-400/40" />
            </motion.div>

            {/* Scatter pulse dots */}
            {[
              "top-[18%] left-[22%]", "top-[30%] right-[25%]",
              "bottom-[22%] left-[28%]", "bottom-[35%] right-[20%]",
              "top-[55%] left-[10%]", "top-[65%] right-[12%]",
            ].map((pos, i) => (
              <motion.div
                key={i}
                className={`absolute ${pos} w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? "bg-emerald-400/25" : "bg-primary/20"}`}
                animate={{ scale: [1, 2, 1], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
              />
            ))}
          </div>

          {/* ── Floating Badges ── */}
          {floatingBadges.map(({ icon: Icon, value, label, color, pos, delay }) => (
            <motion.div
              key={label}
              className={`absolute ${pos} hidden lg:flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border backdrop-blur-sm shadow-sm z-20 ${color}`}
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + delay }}
              whileHover={{ scale: 1.06, y: -2 }}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <div>
                <p className="text-[10px] font-semibold opacity-70 leading-none mb-0.5">{label}</p>
                <p className="text-sm font-bold leading-none">{value}</p>
              </div>
            </motion.div>
          ))}

          {/* ── Floating phone widget (top-right area) ── */}
          <motion.div
            className="absolute top-10 right-[18%] hidden xl:block z-20"
            initial={{ opacity: 0, y: 20, rotate: 6 }}
            animate={{ opacity: 1, y: 0, rotate: 6 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            whileHover={{ rotate: 2, scale: 1.04 }}
          >
            <div className="w-10 h-10 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <MessageCircle className="w-5 h-5 text-white fill-white" />
            </div>
            <motion.div
              className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-orange-400 border-2 border-white flex items-center justify-center"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Bell className="w-2 h-2 text-white" />
            </motion.div>
          </motion.div>

          {/* ── Main content ── */}
          <div className="container mx-auto max-w-6xl relative z-10 pt-5">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

              {/* ── LEFT: Text content ── */}
              <motion.div
                className="flex-1 flex flex-col items-start text-left"
                initial={{ opacity: 0, x: -28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-8 shadow-sm"
                  animate={{ boxShadow: ["0 0 0 0 rgba(var(--primary),0.15)", "0 0 0 8px rgba(var(--primary),0)", "0 0 0 0 rgba(var(--primary),0)"] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <Zap className="w-3 h-3" /> Growth Engineering Lab
                </motion.div>

                {/* Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-800 leading-tight tracking-tighter mb-6">
                  WhatsApp Marketing <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-primary to-orange-500 font-medium">
                    Packages
                  </span>
                </h1>

                {/* Sub */}
                <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-lg leading-relaxed mb-8 font-semibold">
                  Select a high-performance framework tailored for your business scale. All packages include
                  industrial-grade reporting and dedicated lab support.
                </p>

                {/* Feature checks */}
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 mb-10"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {features.map((f, i) => (
                    <motion.div
                      key={f}
                      className="flex items-center gap-2 text-sm text-slate-600 font-semibold"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.08 }}
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      {f}
                    </motion.div>
                  ))}
                </motion.div>

                {/* Tech pills */}
                <motion.div
                  className="flex flex-wrap items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55, duration: 0.5 }}
                >
                  <span className="text-xs text-slate-400 font-medium mr-1">Includes</span>
                  {pills.map((pill, i) => (
                    <motion.span
                      key={pill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.06 }}
                      className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-600 shadow-sm hover:border-emerald-300 hover:text-emerald-600 transition-colors duration-200"
                    >
                      {pill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>

              {/* ── RIGHT: WhatsApp chat card ── */}
              <motion.div
                className="w-full lg:w-[380px] shrink-0"
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {/* Glow wrapper */}
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-br from-emerald-200/40 via-primary/10 to-orange-200/30 rounded-3xl blur-xl" />

                  <div className="relative rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
                    {/* Chat header */}
                    <div className="flex items-center gap-3 px-4 py-3 bg-emerald-500">
                      <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <Smartphone className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-white leading-none">Socio Bhaarat</p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
                          <p className="text-[10px] text-white/80 font-medium">online</p>
                        </div>
                      </div>
                      <MessageCircle className="w-5 h-5 text-white/70" />
                    </div>

                    {/* Chat body */}
                    <div className="bg-[#ece5dd] px-4 py-4 space-y-3 min-h-[220px]">
                      {chatBubbles.map(({ from, text, delay }) => (
                        <motion.div
                          key={text}
                          className={`flex ${from === "user" ? "justify-end" : "justify-start"}`}
                          initial={{ opacity: 0, x: from === "user" ? 12 : -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.9 + delay, duration: 0.4 }}
                        >
                          <div
                            className={`max-w-[78%] px-3 py-2 rounded-2xl text-[11px] font-medium shadow-sm leading-snug
                          ${from === "brand"
                                ? "bg-white text-slate-700 rounded-tl-sm"
                                : "bg-emerald-500 text-white rounded-tr-sm"
                              }`}
                          >
                            {text}
                          </div>
                        </motion.div>
                      ))}
                      {/* Typing indicator */}
                      <motion.div
                        className="flex justify-start"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3 }}
                      >
                        <div className="bg-white px-4 py-2.5 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1">
                          {[0, 1, 2].map((i) => (
                            <motion.span
                              key={i}
                              className="w-1.5 h-1.5 rounded-full bg-slate-400"
                              animate={{ y: [0, -4, 0] }}
                              transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15 }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Input bar */}
                    <div className="flex items-center gap-2 px-3 py-2.5 bg-[#f0f2f5] border-t border-slate-200">
                      <div className="flex-1 bg-white rounded-full px-4 py-2 text-[11px] text-slate-400 font-medium border border-slate-200">
                        Type a message…
                      </div>
                      <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 shadow-sm">
                        <Send className="w-3.5 h-3.5 text-white" />
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>

            </div>
          </div>

          {/* ── Bottom fade ── */}
          {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" /> */}

          <style jsx>{`
        @keyframes waSpin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
        </section>

        <section className="py-16 md:py-24 sm:px-6 lg:px-8 relative z-10">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch mb-16">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className={`bg-card rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-2 transition-all p-6 sm:p-8 md:p-10 relative group overflow-hidden h-full flex flex-col ${pkg.popular
                    ? 'border-primary scale-100 lg:scale-105 z-10'
                    : 'border-border/50'
                    }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-6 md:right-10 bg-primary text-white px-4 md:px-6 py-1.5 md:py-2 rounded-b-2xl text-[10px] font-black uppercase tracking-widest shadow-lg z-20">
                      Most Popular
                    </div>
                  )}

                  <div className="relative z-10 flex flex-col flex-grow">
                    {/* Header Area */}
                    <div className="mb-6 md:mb-8">
                      <div className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                        {pkg.name}
                      </div>
                      <p className="text-slate-600 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1">
                        {pkg.description}
                      </p>
                    </div>

                    {/* Price Architecture */}
                    <div className="mb-8 p-5 md:p-6 rounded-[2rem] md:rounded-3xl bg-muted/30 border border-border/50 text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row items-baseline justify-center sm:justify-start">
                        <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
                          {pkg.price}
                        </span>
                      </div>
                    </div>

                    {/* Features List: flex-grow expands to fill space, pushing button down */}
                    <ul className="relative z-10 space-y-4 mb-10 flex-grow">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start group/item">
                          <div className="h-5 w-5 rounded-md bg-primary/10 flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-primary transition-colors duration-300">
                            <Check className="h-3 w-3 text-primary group-hover/item:text-white" strokeWidth={4} />
                          </div>
                          <span className="text-xs md:text-sm font-bold text-slate-600 tracking-tight leading-snug">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Button Area: Stays at the bottom regardless of content length */}
                    <div className="relative z-10 mt-auto">
                      <Button
                        size="lg"
                        className={`w-full h-14 md:h-16 rounded-full text-base md:text-lg font-black transition-all shadow-xl group/btn ${pkg.popular
                          ? 'bg-primary hover:bg-primary/90 shadow-primary/20'
                          : 'bg-slate-700 hover:bg-slate-800'
                          }`}
                        onClick={() => window.open("https://wa.me/919589581364", "_blank")}
                      >
                        DEPLOY NOW <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer text */}
            <p className="text-[10px] md:text-xs text-center mt-12 md:mt-16 text-slate-600 font-bold uppercase tracking-[0.2em] italic max-w-2xl mx-auto px-4">
              *Precision delivery based on custom requirements and allocation.*
            </p>
          </div>
        </section>
        <CTASection
          title={<>Need a Custom Spec?</>}
          description={<>Contact our engineering team to architect a bespoke marketing framework for your brand.</>}
          buttonText="REQUEST CUSTOM QUOTE"
        />
      </div>
    </>

  );
};

export default WhatsAppPackages;
