
import { Megaphone, Palette, Target, Code, BarChart, TrendingUp, Award, Users, Clock, ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Sparkles, Zap, BarChart3, Globe, Rocket } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from 'framer-motion';

function Index() {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardAnimation = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const benefitAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const industries = [
    {
      name: "Real Estate",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    },
    {
      name: "Hospitality",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    },
    {
      name: "Retail & Fashion",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    },
    {
      name: "Healthcare",
      image:
        "https://images.unsplash.com/photo-1580281657527-47f249e8f4df",
    },
    {
      name: "Education",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    },
    {
      name: "Manufacturing",
      image:
        "https://images.unsplash.com/photo-1581091215367-59ab6b3a4c4d",
    },
    {
      name: "Restaurants & Hotels",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    },
    {
      name: "Coaching & Consultancies",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978",
    },
    {
      name: "Startups",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692",
    },
    {
      name: "CA Firms",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
    },
    {
      name: "Doctor’s Clinics",
      image:
        "https://images.unsplash.com/photo-1584982751601-97dcc096659c",
    },
    {
      name: "Advocates",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
    },
    {
      name: "Salon & Parlours",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e",
    },
    {
      name: "Cloth & Saree Showrooms",
      image:
        "https://images.unsplash.com/photo-1520975922284-6b6b5a9b3f65",
    },
    {
      name: "E-commerce",
      image:
        "https://images.unsplash.com/photo-1515169067865-5387ec356754",
    },
  ];
  const services = [
    {
      icon: <Megaphone className="h-7 w-7" />,
      title: "Social Media Marketing",
      description:
        "Build your brand presence across all major social platforms with engaging content.",
      features: [
        "Content Strategy",
        "Community Management",
        "Paid Advertising",
        "Analytics & Reporting",
      ],
      gradient: "orange" as const,
    },
    {
      icon: <Palette className="h-7 w-7" />,
      title: "Graphic Designing",
      description:
        "Create stunning visual identities that capture your brand essence.",
      features: [
        "Brand Identity",
        "Marketing Materials",
        "UI/UX Design",
        "Print Design",
      ],
      gradient: "blue" as const,
    },
    {
      icon: <Target className="h-7 w-7" />,
      title: "Performance Marketing",
      description:
        "Data-driven marketing strategies that focus on measurable results.",
      features: [
        "Campaign Optimization",
        "A/B Testing",
        "Conversion Tracking",
        "ROI Analysis",
      ],
      gradient: "green" as const,
    },
    {
      icon: <Code className="h-7 w-7" />,
      title: "Web Development",
      description:
        "Custom websites that drive conversions and deliver exceptional user experiences.",
      features: [
        "Responsive Design",
        "E-commerce Solutions",
        "CMS Integration",
        "SEO Optimization",
      ],
      gradient: "orange" as const,
    },
    {
      icon: <BarChart className="h-7 w-7" />,
      title: "Content Marketing",
      description:
        "Engaging content that tells your story and connects with your audience.",
      features: [
        "Blog Writing",
        "Video Production",
        "Email Marketing",
        "Content Strategy",
      ],
      gradient: "blue" as const,
    },
    {
      icon: <TrendingUp className="h-7 w-7" />,
      title: "SEO Services",
      description:
        "Improve your search rankings and drive organic traffic to your business.",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Link Building",
        "Technical SEO",
      ],
      gradient: "green" as const,
    },
  ];
  const stats = [
    {
      value: "500+",
      label: "Projects Completed",
      icon: <Award className="h-6 w-6" />,
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      icon: <Users className="h-6 w-6" />,
    },
    {
      value: "24/7",
      label: "Support Available",
      icon: <Clock className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-12 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay loop muted playsInline preload="auto"
            className="w-full h-full object-cover scale-105"
          >
            <source src="https://res.cloudinary.com/dtlqkeane/video/upload/q_auto:good,f_mp4,vc_h264,br_1200k,w_1280,fps_24/3141208-uhd_3840_2160_25fps_evhgy7.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background" />
        </div>

        {/* Added 'text-center' and 'flex-col items-center' to center all text and the button */}
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center mb-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md text-primary-foreground text-sm font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-primary" />
                MP's Growth Partner
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                MP’s Fastest Growing <br />
                <span className="text-transparent bg-clip-text bg-[#FFC105] italic font-serif">
                  Digital Marketing & IT
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl leading-relaxed">
                Empowering businesses in Jabalpur & Bhopal with data-backed strategies and creative technical excellence.
              </p>

              <div className="flex justify-center pt-4 pb-6">
                <Button
                  size="lg"
                  className="rounded-full px-10 h-16 text-lg shadow-2xl hover:scale-105 transition-transform"
                  onClick={() => navigate("/contact")}
                >
                  Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS SPOTLIGHT */}
      <section className="relative py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                We believe in <span className="text-primary italic">impactful</span> metrics.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since 2022, we've transformed the digital landscape for 50+ brands across MP. Our focus isn't just clicks—it's sustainable revenue and brand authority.
              </p>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-border">
                <ShieldCheck className="w-10 h-10 text-primary" />
                <div>
                  <p className="font-bold text-foreground">Verified Results</p>
                  <p className="text-sm text-muted-foreground tracking-tight italic">Performance audit available upon request.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: TrendingUp, label: "Revenue Growth", value: "5X", color: "text-orange-500" },
                { icon: Users, label: "Leads Delivered", value: "10k+", color: "text-blue-500" },
                { icon: Megaphone, label: "Ad Engagement", value: "10M+", color: "text-emerald-500" },
                { icon: Target, label: "Client Retention", value: "94%", color: "text-purple-500" },
              ].map((stat, i) => (
                <motion.div
                  key={i} variants={fadeUp}
                  className="p-8 rounded-[2.5rem] bg-card border border-border shadow-sm hover:shadow-xl transition-all group"
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mb-4 group-hover:scale-110 transition-transform`} />
                  <div className="text-4xl font-black tracking-tighter">{stat.value}</div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* 1. Primary Mesh Gradients to fill white space */}
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[140px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-500/10 blur-[130px] rounded-full" />

          {/* 2. Secondary Atmospheric Accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[40%] bg-primary/5 blur-[100px] rounded-full" />

          {/* 3. Global Tech-Grid (Covers the entire section) */}
          <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />

          {/* 4. Subtle Section Watermark */}
          <div className="absolute -left-10 bottom-10 text-[12rem] font-black text-primary/[0.02] select-none italic">
            SOCIO
          </div>
        </div>

        {/* Existing Subtle Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-muted/20 -skew-x-12 translate-x-1/2 -z-10" />

        <motion.div
          className="container mx-auto max-w-6xl relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* 1. LEFT COLUMN: Text & Narrative */}
            <motion.div variants={fadeLeft} className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20">
                <Sparkles className="w-3 h-3" />
                The SocioBhaarat Identity
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.1]">
                Bhopal & Jabalpur’s <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic">
                  Performance Architecture
                </span>
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p className="border-l-4 border-primary/30 pl-6 italic">
                  <strong>Socio Bhaarat</strong> is a performance-driven digital
                  marketing and IT agency helping businesses scale with strategy,
                  creativity, and technology. Since 2022, we’ve partnered with 50+
                  brands across Madhya Pradesh.
                </p>

                <p>
                  From paid advertising and SEO to branding and website development,
                  our focus is simple — deliver <strong>measurable results</strong>, not just online
                  presence. We combine local market understanding with data-backed
                  execution to help businesses grow faster and smarter.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <Button size="lg" className="rounded-full px-8 shadow-lg hover:shadow-primary/30 transition-all">
                  Our Success Stories
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-8">
                  Meet the Team
                </Button>
              </div>
            </motion.div>

            {/* 2. RIGHT COLUMN: Visual & Social Proof */}
            <motion.div variants={fadeRight} className="relative flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Main Image Container */}
                <div className="relative z-10 overflow-hidden rounded-[3rem] shadow-2xl border border-white/10">
                  <motion.img
                    src="./images/IndexPageImg.webp"
                    alt="Socio Bhaarat digital marketing team"
                    className="w-full max-w-md object-cover group-hover:scale-105 transition-transform duration-700"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>

                {/* Floating Metric Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -left-6 md:-left-12 z-20 bg-card/80 backdrop-blur-xl border border-border p-6 rounded-3xl shadow-2xl max-w-[240px]"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-600">
                      <Users className="w-5 h-5" />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Trusted By</p>
                  </div>
                  <p className="text-2xl font-black text-foreground">50+ Local Brands</p>
                  <p className="text-xs text-muted-foreground mt-1">Leading the digital shift across Madhya Pradesh.</p>
                </motion.div>

                {/* Decorative Back Elements - Updated with Blue/Orange hints */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl -z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-primary/10 rounded-[3rem] rotate-3 -z-10" />
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* WHY YOU NEEDS DIGITAL MARKETING */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fafafa] relative overflow-hidden">
        {/* Artistic Background Elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-orange-500/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          className="container mx-auto max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* 1. Header Block */}
          <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-[10px] font-bold uppercase tracking-widest border border-blue-200">
              <TrendingUp className="w-3 h-3" />
              Market Survival & Growth
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              Why Your Business Needs <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-primary to-blue-600 italic">
                Digital Marketing
              </span>
            </h2>

            <p className="text-lg text-slate-500 italic font-medium leading-relaxed underline decoration-orange-200 decoration-4 underline-offset-8">
              "Your customers are online. If your business isn’t visible there, you're losing opportunities every single day."
            </p>
          </motion.div>

          {/* 2. Interactive Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              { title: "Precision Targeting", desc: "Reach the right audience at the perfect moment in their buying journey.", icon: <Target className="w-6 h-6" /> },
              { title: "Lead Generation", desc: "Build a consistent pipeline of high-quality leads that actually convert.", icon: <Users className="w-6 h-6" /> },
              { title: "Brand Authority", desc: "Establish deep trust through social proof, expert branding, and high visibility.", icon: <Award className="w-6 h-6" /> },
              { title: "Real-time Tracking", desc: "Stop guessing. Track every rupee spent with advanced real-time analytics.", icon: <BarChart3 className="w-6 h-6" /> },
              { title: "Competitive Edge", desc: "Don't just compete—outperform your rivals by owning the digital space.", icon: <ShieldCheck className="w-6 h-6" /> },
              { title: "Scalable ROI", desc: "Scale profitably with targeted ad strategies designed for 2x–5x growth.", icon: <Zap className="w-6 h-6" /> },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                variants={cardAnimation}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed italic">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* 3. Closing Summary / Social Proof Hook */}
          <motion.div
            variants={fadeUp}
            className="relative p-10 rounded-[3rem] bg-gradient-to-br from-slate-900 to-blue-900 text-center text-white overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Globe className="w-32 h-32" />
            </div>

            <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto italic">
              "Today, customers search, compare, and decide online before making any purchase. Your digital presence directly impacts your growth, credibility, and revenue."
            </p>

            <div className="mt-8 h-1 w-24 bg-orange-500 rounded-full mx-auto" />
          </motion.div>
        </motion.div>
      </section>

      {/* GROWTH */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fafafa] relative overflow-hidden">
        {/* Background Motion Blur */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10 animate-pulse" />

        <motion.div
          className="container mx-auto max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="font-display text-4xl sm:text-6xl font-black text-slate-900 leading-tight tracking-tighter">
              The Roadmap to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-primary animate-gradient-x italic">
                Digital Dominance
              </span>
            </h2>
            <p className="text-lg text-slate-500 font-medium italic underline decoration-primary/20 decoration-2 underline-offset-8">
              "A high-velocity, data-driven approach designed for sustainable growth."
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* 1. INTERACTIVE STEPS COLUMN (7 Columns) */}
            <div className="lg:col-span-7 relative">
              {/* The Animated Connectivity Line */}
              <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-blue-400 to-transparent hidden md:block opacity-30" />

              <div className="space-y-12 relative z-10">
                {[
                  { title: "Research & Strategy", desc: "Analyzing brand positioning, competitors, and target audience to craft a growth roadmap." },
                  { title: "Creative & Technical Setup", desc: "High-converting designs, optimized website structure, and strategic content planning." },
                  { title: "Ads & SEO Execution", desc: "Meta & Google Ads combined with SEO visibility strategies that drive high-intent traffic." },
                  { title: "Tracking & Optimization", desc: "Pixel setup, heatmaps, and retargeting funnels for continuous performance improvement." },
                  { title: "Scaling & Growth", desc: "Once profitable, we strategically scale campaigns 2x–5x for maximum sustainable ROI." },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    variants={fadeLeft}
                    className="flex items-start gap-8 group"
                  >
                    {/* Animated Step Number */}
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center font-black text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 z-10 relative">
                        0{i + 1}
                      </div>
                      {/* Pulse Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-primary/20 animate-ping group-hover:block hidden" />
                    </div>

                    {/* Content Card */}
                    <div className="p-6 rounded-[2rem] bg-white/50 backdrop-blur-sm border border-slate-100 group-hover:border-primary/20 group-hover:shadow-xl group-hover:shadow-primary/5 transition-all duration-500 flex-grow">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed italic">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 2. CREATIVE ILLUSTRATION COLUMN (5 Columns) */}
            <motion.div
              className="lg:col-span-5 lg:sticky lg:top-32"
              variants={fadeRight}
            >
              <div className="relative">
                {/* Decorative Back Layers */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-blue-400/20 blur-3xl rounded-full animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-primary/5 rounded-[4rem] rotate-6" />

                <div className="relative z-10 overflow-hidden rounded-[3.5rem] shadow-2xl border-8 border-white">
                  <img
                    src="./images/IndexPageImg2.webp"
                    alt="Growth process"
                    className="w-full h-auto object-cover hover:scale-110 transition-transform duration-1000"
                  />
                  {/* Glass Overlay on Image */}
                  <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/80 backdrop-blur-md rounded-3xl border border-white/50 shadow-lg">
                    <p className="text-sm font-bold text-slate-900 text-center">
                      “We don’t just market; we partner for the long term.”
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom Narrative Statement */}
          <motion.div
            variants={fadeUp}
            className="mt-20 p-8 rounded-[2.5rem] bg-slate-900 text-white text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Rocket className="w-24 h-24 rotate-12" />
            </div>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed italic">
              "Your growth isn't a single event—it's a <span className="text-primary font-bold">continuous evolution</span> powered by data and creativity."
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* INDUSTRIES (CURATED SLIDER) */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Expertise Across <span className="text-primary italic">Verticals</span></h2>
              <p className="text-lg text-muted-foreground italic">Our solutions are engineered to meet the unique psychological triggers of different industries.</p>
            </div>
            <div className="flex gap-4">
              <button className="prev-btn w-12 h-12 flex items-center justify-center rounded-full bg-background border border-border hover:bg-primary hover:text-white transition-all shadow-sm">
                <ChevronLeft size={24} />
              </button>
              <button className="next-btn w-12 h-12 flex items-center justify-center rounded-full bg-background border border-border hover:bg-primary hover:text-white transition-all shadow-sm">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1} spaceBetween={30} loop={true}
            autoplay={{ delay: 3000 }}
            navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3.5 } }}
          >
            {industries.map((industry, index) => (
              <SwiperSlide key={index}>
                <div className="group relative h-[500px] rounded-[3rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img src={industry.image} alt={industry.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-10 left-10 right-10">
                    <h3 className="text-2xl font-bold text-white mb-2">{industry.name}</h3>
                    <div className="w-12 h-1 bg-primary rounded-full group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
        {/* Subtle Background "MP" Watermark */}
        <div className="absolute -right-0 top-1/2 -translate-y-1/2 text-[20rem] font-black text-primary/[0.02] select-none pointer-events-none italic">
          MP
        </div>

        <motion.div
          className="container mx-auto max-w-7xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* 1. Header with Creative Underline */}
          <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto mb-24 space-y-4">
            <h2 className="font-display text-4xl sm:text-6xl font-black text-slate-900 leading-tight tracking-tighter italic">
              What Makes Us <span className="text-primary underline decoration-orange-200 decoration-8 underline-offset-[12px]">Different?</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">
              We focus on measurable growth and real impact—building <strong>scalable digital systems</strong> rather than just isolated campaigns.
            </p>
          </motion.div>

          {/* 2. Bento Grid Stats Hub */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-20">
            {[
              { value: "50+", label: "Businesses Served Across MP", icon: <Users />, size: "md:col-span-2" },
              { value: "10,000+", label: "Leads Delivered", icon: <TrendingUp />, size: "md:col-span-2" },
              { value: "10M+", label: "Social Media Engagement", icon: <BarChart3 />, size: "md:col-span-2" },
              { value: "500+", label: "Ad Campaigns Managed", icon: <Megaphone />, size: "md:col-span-2" },
              { value: "1000+", label: "Creative Designs", icon: <Palette />, size: "md:col-span-2" },
              { value: "50+", label: "Websites Developed", icon: <Globe />, size: "md:col-span-2" },
              { value: "0x → 5x", label: "Revenue Growth", icon: <Rocket />, size: "md:col-span-full bg-primary text-white shadow-orange-200" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardAnimation}
                whileHover={{ scale: 1.02 }}
                className={`${item.size} p-8 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between transition-all duration-500 group shadow-sm hover:shadow-xl hover:border-primary/20 ${i === 6 ? 'items-center text-center' : 'bg-white'}`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${i === 6 ? 'bg-white/20 text-white' : 'bg-slate-50 text-primary group-hover:bg-primary group-hover:text-white'}`}>
                  {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                </div>

                <div className="mt-8">
                  <h3 className={`text-4xl font-black tracking-tighter ${i === 6 ? 'text-white' : 'text-slate-900'}`}>
                    {item.value}
                  </h3>
                  <p className={`text-xs font-bold uppercase tracking-widest mt-2 ${i === 6 ? 'text-white/80' : 'text-muted-foreground'}`}>
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 3. Local Authority Narrative Card */}
          <motion.div
            variants={fadeUp}
            className="relative max-w-4xl mx-auto p-12 rounded-[3.5rem] bg-slate-50 border border-slate-200 text-center overflow-hidden"
          >
            {/* Decorative Glows */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />

            <p className="relative z-10 text-xl md:text-2xl text-slate-700 leading-relaxed font-medium italic">
              "Socio Bhaarat stands apart because we deeply understand local consumer
              psychology in <span className="text-primary font-bold">Bhopal & Jabalpur</span>—we build for MP’s evolving business landscape."
            </p>

            <div className="mt-8 flex justify-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Our <span className="text-primary font-serif italic">Core</span> Ecosystem</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic underline decoration-primary/30">Complete digital growth solutions tailored for Bhopal & Jabalpur.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg" variant="ghost"
              className="rounded-full gap-2 text-lg font-bold group"
              onClick={() => navigate("/services")}
            >
              Explore All 12+ Services <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <Card className="bg-primary text-primary-foreground p-12 md:p-24 text-center rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(var(--primary),0.3)] relative overflow-hidden border-none">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 italic">Ready to Scale Your Online Empire?</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto mb-12 font-medium">
                Let's discuss how we can help you achieve your digital marketing goals and drive sustainable revenue.
              </p>
              <Button
                size="lg" variant="secondary"
                className="rounded-full h-16 px-12 text-xl font-black bg-white text-primary hover:bg-gray-100 transition-all shadow-xl"
                onClick={() => navigate("/contact")}
              >
                Claim Your Free Audit
              </Button>
            </div>
          </Card>
        </div>
      </section>

    </div>
  );
}

export default Index
