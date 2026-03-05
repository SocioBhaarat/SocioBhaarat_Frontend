import { cardAnimation, fadeUp, staggerContainer } from "@/components/ui/animation";
import { Button } from "@/components/ui/button";
import QuoteSection from "@/components/ui/QuoteSection";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Check, FileText, Heart, Search, ShieldCheck, Sparkles, Target, TrendingUp, Users, Zap } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ContentMarketing = () => {
  const navigate = useNavigate();

  const services = [
    { title: "Blog Writing & Publishing", desc: "SEO-optimized blog posts that drive organic traffic and establish thought leadership" },
    { title: "Video Content Creation", desc: "Engaging video content for YouTube, social media, and your website" },
    { title: "Infographic Design", desc: "Visually compelling infographics that simplify complex information" },
    { title: "E-books & Whitepapers", desc: "In-depth resources that generate leads and showcase expertise" },
    { title: "Email Newsletter Content", desc: "Engaging email content that nurtures leads and drives conversions" },
    { title: "Case Studies", desc: "Compelling success stories that build credibility and trust" },
    { title: "Social Media Content", desc: "Platform-specific content that drives engagement and brand awareness" },
    { title: "Podcast Production", desc: "Audio content that reaches your audience on-the-go" },
    { title: "Content Strategy & Planning", desc: "Comprehensive content roadmaps aligned with your business goals" },
  ]

  const process = [
    { step: "01", title: "Research & Strategy", desc: "We analyze your audience, competitors, and industry to create a winning content strategy" },
    { step: "02", title: "Content Creation", desc: "Our expert writers and designers craft high-quality, engaging content" },
    { step: "03", title: "Optimization & Publishing", desc: "We optimize content for SEO and publish across relevant channels" },
    { step: "04", title: "Analysis & Refinement", desc: "We track performance and continuously refine our approach for better results" },
  ]

  const whyChooseUs = [
    { title: "300% Organic Growth", icon: <TrendingUp />, color: "text-blue-600", bg: "bg-blue-50", desc: "Increase organic traffic by up to 300% with SEO-optimized assets." },
    { title: "3x Lead Generation", icon: <Target />, color: "text-orange-600", bg: "bg-orange-50", desc: "Generate 3x more leads than traditional marketing methods." },
    { title: "Brand Authority", icon: <ShieldCheck />, color: "text-indigo-600", bg: "bg-indigo-50", desc: "Build long-term brand authority and trust through expert storytelling." },
    { title: "SEO Dominance", icon: <Search />, color: "text-emerald-600", bg: "bg-emerald-50", desc: "Significantly improve search engine rankings for competitive keywords." },
    { title: "Audience Engagement", icon: <Users />, color: "text-pink-600", bg: "bg-pink-50", desc: "Deeply engage and educate your target audience with high-value content." },
    { title: "Evergreen ROI", icon: <Zap />, color: "text-yellow-600", bg: "bg-yellow-50", desc: "Create evergreen assets that continue to deliver ROI years after creation." },
    { title: "Sales Enablement", icon: <FileText />, color: "text-slate-600", bg: "bg-slate-50", desc: "Support your sales team with valuable, high-intent resources." },
    { title: "Reduced CAC", icon: <BarChart3 />, color: "text-red-600", bg: "bg-red-50", desc: "Significantly reduce customer acquisition costs through inbound growth." },
  ]

  const whyMatters = [
    { title: "SEO Visibility", desc: "Improve search engine rankings and attract high-intent organic traffic.", icon: <Search /> },
    { title: "Brand Credibility", desc: "Establish deep trust and authority in the Bhopal & Jabalpur markets.", icon: <ShieldCheck /> },
    { title: "Traffic Generation", desc: "Drive consistent, value-driven visitor flow to your digital assets.", icon: <TrendingUp /> },
    { title: "Lead Nurturing", desc: "Generate qualified leads by educating and engaging your ideal audience.", icon: <Users /> },
    { title: "Campaign Support", desc: "Fuel your social media and paid advertising with high-converting assets.", icon: <Zap /> },
    { title: "Long-term Loyalty", desc: "Foster deep brand loyalty through consistent, valuable storytelling.", icon: <Heart /> },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-start overflow-hidden bg-[#fafafa]">

        {/* Technical Background Design */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 opacity-1 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]" />
          <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-blue-600/10 blur-[130px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-orange-500/10 blur-[110px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10 mt-12">
          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* Left Column: Narrative (Text Upwards) */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-7 space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-primary text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm">
                <Sparkles className="w-3 h-3" /> MP's Content Engineering Hub
              </div>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tighter">
                Engage, Educate <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">& Convert</span>.
              </h1>
              <p className="text-lg sm:text-xl text-slate-500 max-w-xl leading-relaxed font-medium italic">
                "We create high-quality, value-driven content that builds brand authority across Bhopal & Jabalpur."
              </p>
              <div className="flex justify-start pt-4">
                <Button size="lg" className="rounded-full px-12 h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105" onClick={() => navigate("/contact")}>
                  Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>

            {/* Right Column: Metric Bento Hub */}
            <motion.div initial={{ opacity: 0, scale: 0.9, x: 40 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ delay: 0.3, duration: 1 }} className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                { val: "500+", label: "Pieces Created", icon: <FileText /> },
                { val: "200+", label: "Happy Clients", icon: <Users /> },
                { val: "85%", label: "Traffic Boost", icon: <TrendingUp /> },
                { val: "95%", label: "Retention Rate", icon: <Target /> }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <h3 className="text-3xl font-black text-slate-900">{stat.val}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fafafa] relative overflow-hidden">


        <motion.div
          className="container mx-auto max-w-7xl relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {/* Header Block */}
          <motion.div variants={fadeUp} className="text-center max-w-4xl mx-auto mb-20 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-3 h-3" />
              The Content Engineering Edge
            </div>

            <h2 className="font-display text-4xl sm:text-6xl font-black text-slate-900 leading-tight tracking-tighter">
              Why Choose Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">
                Content Ecosystem
              </span>
            </h2>

            <p className="text-lg text-slate-500 font-medium italic leading-relaxed max-w-3xl mx-auto border-l-4 border-primary/30 pl-6">
              "We build digital assets that scale your brand authority and drive measurable growth across the Bhopal & Jabalpur business landscape."
            </p>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={cardAnimation}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between h-72"
              >
                {/* Subtle Hover Gradient */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} mb-6 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-inner`}>
                    {React.cloneElement(item.icon as React.ReactElement, { size: 22 })}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors mb-2 tracking-tight leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-md text-slate-400 leading-relaxed italic group-hover:text-slate-600 transition-colors">
                    {item.desc}
                  </p>
                </div>

                {/* Large Watermark Number - Production Roadmap Aesthetic */}
                <span className="absolute bottom-[-10%] right-[-5%] text-8xl font-black text-slate-50 opacity-[0.03] group-hover:opacity-10 transition-opacity italic select-none">
                  0{index + 1}
                </span>

                <div className="relative z-10 mt-4 w-8 h-1 bg-slate-100 rounded-full group-hover:w-full group-hover:bg-primary transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What is Content Marketing */}
      <section className="py-24 px-4 bg-background overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="relative p-12 md:p-20 rounded-[4rem] bg-slate-700 text-white shadow-2xl overflow-hidden">
            {/* Atmospheric Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />

            <div className="relative z-10 space-y-10">
              <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter text-white">What is <span className="text-secondary font-serif pl-1">Content Marketing</span></h2>
              <div className="grid md:grid-cols-2 gap-12 text-slate-300 text-lg leading-relaxed font-medium">
                <p>Content marketing is a strategic approach focused on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience.</p>
                <p>Unlike traditional advertising, this approach establishes your brand as an industry authority, generating <span className="text-white font-bold">3x more leads</span> while costing <span className="text-secondary font-bold">62% less</span>.</p>
              </div>
              <div className="pt-8 border-t border-white/10 flex justify-center">
                <div className="h-1.5 w-24 bg-secondary rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Content Marketing Matters*/}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">


        <motion.div
          className="container mx-auto max-w-6xl relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Header Block with Performance Typography */}
          <motion.div variants={fadeUp} className="text-center max-w-4xl mx-auto mb-20 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-3 h-3" />
              The Organic Advantage
            </div>

            <h2 className="font-display text-4xl sm:text-6xl font-black text-slate-900 leading-tight tracking-tighter">
              Why Content Marketing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">
                Matters for Growth
              </span>
            </h2>

            <p className="text-xl text-slate-500 font-medium italic leading-relaxed max-w-3xl mx-auto">
              "High-quality content builds trust, establishes authority, and attracts customers organically across the <span className="text-slate-900 font-bold">Madhya Pradesh</span> business landscape."
            </p>
          </motion.div>

          {/* 2. VALUE BENTO GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyMatters.map((item, index) => (
              <motion.div
                key={index}
                variants={cardAnimation}
                whileHover={{ y: -12 }}
                className="group relative p-10 rounded-[2.5rem] bg-gray-50 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Subtle Hover Gradient */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-8 transition-all duration-500 group-hover:bg-primary group-hover:text-white shadow-inner">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-3 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed italic group-hover:text-slate-600 transition-colors">
                    {item.desc}
                  </p>
                </div>

                {/* Large Watermark Number - Aligns with Production Roadmap */}
                <span className="absolute bottom-[-10%] right-[-5%] text-8xl font-black text-slate-50 opacity-[0.03] group-hover:opacity-10 transition-opacity italic select-none">
                  0{index + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Our Services */}
      <section className="py-24 px-4 bg-background relative overflow-hidden">

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter text-slate-900 leading-none">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-serif font-medium">Content</span> Solutions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic mt-6">
              Precision-engineered assets designed to dominate the digital landscape of Madhya Pradesh.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -12 }}
                className="group relative p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between"
              >
                {/* Background Step Number - Production Roadmap Look */}
                <span className="absolute top-4 right-6 text-7xl font-black text-slate-50 group-hover:text-primary/5 transition-colors italic select-none">
                  0{index + 1}
                </span>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors tracking-tight leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed italic text-sm group-hover:text-slate-700">
                    {service.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-8 w-10 h-1 bg-slate-100 rounded-full group-hover:w-full group-hover:bg-primary transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-4 bg-[#fafafa] relative overflow-hidden">
        {/* 1. ATMOSPHERIC GRADIENT & GRID - Replaces Dark Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Soft Mesh Gradients to fill white space */}
          <div className="absolute top-1/4 left-[-5%] w-[45%] h-[45%] bg-blue-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-[-5%] w-[40%] h-[40%] bg-orange-500/5 blur-[110px] rounded-full" />
        </div>

        <motion.div
          className="container mx-auto max-w-7xl relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {/* Header Block */}
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter text-slate-900 leading-none">
              The Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-serif font-medium">Pipeline</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto italic mt-4 border-b border-primary/20 pb-4">
              A structured, high-velocity approach for building brand authority in <span className="text-slate-900 font-bold">Bhopal & Jabalpur</span>.
            </p>
          </div>

          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Horizontal Energy Line (Visible only on Desktop) */}
            <div className="absolute top-10 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500/20 via-primary/40 to-orange-500/20 hidden lg:block -z-10" />

            {process.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="relative text-center group"
              >
                {/* Animated Step Node */}
                <div className="relative w-20 h-20 rounded-[2rem] bg-white border border-slate-100 flex items-center justify-center text-3xl font-black text-primary mx-auto mb-8 shadow-xl group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500">
                  {item.step}
                  {/* Pulsing Aura */}
                  <div className="absolute inset-0 rounded-[2rem] bg-primary/20 animate-ping group-hover:block hidden" />
                </div>

                {/* Content Card (Glassmorphism) */}
                <div className="p-6 rounded-[2rem] bg-white/40 backdrop-blur-md border border-slate-100 group-hover:shadow-2xl group-hover:bg-white transition-all duration-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed italic group-hover:text-slate-700">
                    {item.desc}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <QuoteSection
        quote="Content that informs, engages, and drives measurable results." />

      {/* CTA */}
      <section className="py-12 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-primary to-indigo-900 p-8 sm:p-12 md:p-20 text-center rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl relative overflow-hidden group">


            {/* 2. CONTENT ARCHITECTURE */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 text-white italic tracking-tighter leading-tight uppercase">
                Ready to Transform Your Content Strategy?
              </h2>

              <p className="text-sm md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium italic">
                "Let's create content that drives real business results. Get a free content audit today."
              </p>

              {/* 3. ADAPTIVE BUTTON */}
              <div className="flex justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto rounded-full h-14 md:h-16 px-8 md:px-12 text-sm md:text-xl font-black shadow-xl hover:scale-105 active:scale-95 transition-all bg-secondary text-primary text-wrap hover:bg-slate-50"
                  onClick={() => window.open("https://wa.me/919589581364", "_blank")}
                >
                  Get Your Free Content Audit
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentMarketing;
