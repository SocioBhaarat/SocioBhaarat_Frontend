import SEO from "@/components/SEO";
import { CTASection } from "@/components/ui/CTASection";
import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Target, Zap, BarChart3 } from "lucide-react";

const OurImpact = () => {
  const caseStudies = [
    {
      client: "SN REALITIES",
      industry: "REAL ESTATE",
      challenge: "Zero Internet Presence and Zero Leads",
      solution: "Implemented high-quality video production and data-driven digital marketing strategies including social media campaigns, dynamic retargeting ads, Google Ads, Google Business Profile optimization, YouTube management, and property platform management (99acres & Housing.com) to drive business growth within optimized budgets.",
      results: [
        { metric: "ROAS", value: "8.2x", icon: DollarSign },
        { metric: "Conversion Rate", value: "240%↑", icon: TrendingUp },
        { metric: "CAC", value: "65%↓", icon: Target },
        { metric: "Revenue", value: "₹6 Cr", icon: DollarSign },
      ],
      image: "/OurImpact/SNRealities.webp",
    }, {
      client: "The Shaurya Academy",
      industry: "Education",
      challenge: "High cost per lead (CPL) and low student intent, leading to poor counselor conversion rates.",
      solution: "Audience segmentation using lookalike audiences of existing toppers and implementing Meta lead forms with qualifying questions.",
      results: [
        { metric: "Cost/Lead", value: "72%↓", icon: Target },
        { metric: "Lead Quality", value: "3.5x", icon: Users },
        { metric: "Enrollments", value: "420%↑", icon: TrendingUp },
        { metric: "ROAS", value: "6.8x", icon: DollarSign },
      ],
      image: "/OurImpact/Theshauryaacademy.webp",
    },

    {
      client: "Apple Property",
      industry: "Real Estate",
      challenge: "Limited brand visibility in a competitive market and high dependency on offline brokers for property inquiries.",
      solution: "Full-funnel digital strategy: High-end property walkthrough videos, dynamic retargeting for site visitors, and Google Local Services Ads for high-intent property buyers.",
      results: [
        { metric: "CPL (Real Estate)", value: "58%↓", icon: Target },
        { metric: "Site Visits", value: "120/mo", icon: Users },
        { metric: "Inventory Sold", value: "₹12Cr+", icon: TrendingUp },
        { metric: "Digital ROI", value: "12x", icon: DollarSign },
      ],
      image: "/OurImpact/AppleProperties.webp", // Updated image path suggestion
    },
  ];

  return (
    <>
      <SEO
        title="Our Impact | Results & Case Studies | Socio Bhaarat"
        description="Explore our proven results, success stories, and the impact we’ve created for businesses through our marketing and IT solutions."
        keywords="case studies, marketing results, business growth results, success stories, digital marketing results in jabalpur"
        url="/our-work/Our-Impact"
      />
      <div className="min-h-screen bg-background">

        <section className="relative pt-12 pb-12 px-4 overflow-hidden bg-[#fafafa]">

          {/* Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-gradient-slow" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>
          <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] bg-blue-600/[0.06] rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[-80px] left-[-80px] w-[360px] h-[360px] bg-orange-500/[0.05] rounded-full blur-[90px] pointer-events-none" />

          {/* Floating stat cards */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { delay: 0.8, duration: 0.5 },
              y: { delay: 0.8, duration: 3.5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute top-16 left-[4%] hidden xl:flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-slate-100 shadow-lg z-10 pointer-events-none"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
              <TrendingUp size={15} />
            </div>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[.15em] text-slate-400 mb-0.5">Avg Revenue Growth</p>
              <p className="text-sm font-black text-slate-900 leading-none">5× per Client</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { delay: 1.0, duration: 0.5 },
              y: { delay: 1.2, duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute top-16 right-[4%] hidden xl:flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-slate-100 shadow-lg z-10 pointer-events-none"
          >
            <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0">
              <Users size={15} />
            </div>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[.15em] text-slate-400 mb-0.5">Brands Served</p>
              <p className="text-sm font-black text-slate-900 leading-none">50+ Clients</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: [0, -9, 0] }}
            transition={{
              opacity: { delay: 1.2, duration: 0.5 },
              y: { delay: 0.6, duration: 3.8, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute bottom-36 left-[4%] hidden xl:flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-slate-100 shadow-lg z-10 pointer-events-none"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[.15em] text-slate-400 mb-0.5">Retention Rate</p>
              <p className="text-sm font-black text-slate-900 leading-none">80% Clients</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: [0, -11, 0] }}
            transition={{
              opacity: { delay: 1.4, duration: 0.5 },
              y: { delay: 1.8, duration: 3.2, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute bottom-36 right-[4%] hidden xl:flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-slate-100 shadow-lg z-10 pointer-events-none"
          >
            <div className="w-8 h-8 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center flex-shrink-0">
              <BarChart3 size={15} />
            </div>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[.15em] text-slate-400 mb-0.5">Ad Impressions</p>
              <p className="text-sm font-black text-slate-900 leading-none">10M+ Reached</p>
            </div>
          </motion.div>

          {/* Main content — unchanged */}
          <div className="container mx-auto max-w-5xl relative z-10 text-center px-4 pt-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center gap-6"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-primary text-[9px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase shadow-sm">
                <Zap className="w-3 h-3" /> Performance Engineering
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-slate-800 leading-[0.95] tracking-tighter">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium">
                  Impact & <br /> Case Studies
                </span>
              </h1>

              {/* Paragraph: Reduced padding/border on mobile */}
              <p className="text-base md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-semibold border-x-2 md:border-x-4 border-primary/10 px-4 md:px-8">
                A curated selection of brands we've helped grow through digital strategy and innovation.
              </p>

              {/* Stat Strip: Switched to Grid for Mobile */}
              <div className="w-full max-w-2xl grid grid-cols-2 md:grid-cols-4 gap-0 border border-slate-100 rounded-2xl md:rounded-3xl overflow-hidden bg-white shadow-sm mt-4">
                {[
                  { val: "50+", label: "Brands", color: "text-blue-600" },
                  { val: "5×", label: "Avg ROI", color: "text-orange-600" },
                  { val: "80%", label: "Retention", color: "text-violet-600" },
                  { val: "10M+", label: "Impressions", color: "text-green-600" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className={`px-4 py-6 md:px-6 md:py-5 text-center flex flex-col justify-center
            ${i % 2 === 0 ? "border-r" : "md:border-r"} 
            ${i < 2 ? "border-b md:border-b-0" : ""} 
            border-slate-100`}
                  >
                    <div className={`text-2xl md:text-3xl font-black leading-none mb-1.5 ${s.color}`}>
                      {s.val}
                    </div>
                    <div className="text-[10px] md:text-xs font-bold uppercase tracking-[.12em] md:tracking-[.18em] text-slate-500">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          </div>

          {/* Bottom fade — unchanged */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
        </section>

        {/* <section className="py-12 bg-white border-y border-slate-100 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { val: "₹ 10 lakhs+", label: "Ad Spend Managed", color: "text-primary" },
              { val: "6.5x", label: "Average ROAS", color: "text-secondary" },
              { val: "150+", label: "Success Stories", color: "text-accent" },
              { val: "80%", label: "Client Retention", color: "text-slate-900" }
            ].map((stat, i) => (
              <div key={i} className="text-center group border-r last:border-none border-slate-100">
                <h4 className={`text-4xl md:text-5xl font-black ${stat.color} tracking-tighter transition-transform group-hover:scale-110 duration-500`}>
                  {stat.val}
                </h4>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mt-2 italic">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto max-w-7xl px-4 relative z-10">
            <div className="space-y-32">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                >
                  {/* 1. CONTENT MODULE: Optimized for Vertical Height */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-[45%] space-y-6 order-1"
                  >
                    <div className="space-y-3">
                      <div className="inline-block px-2 py-0.5 rounded-md bg-slate-900 text-white text-[8px] font-bold uppercase tracking-[0.2em]">
                        {study.industry}
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                        {study.client}
                      </div>
                    </div>

                    {/* Compact Challenge & Solution Stack */}
                    <div className="space-y-5 py-5 border-y border-slate-100">
                      <div className="space-y-1">
                        <span className="text-[9px] font-bold text-primary uppercase tracking-[0.3em] flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary" />
                          Challenge
                        </span>
                        <p className="text-slate-700 text-sm font-medium leading-snug border-l border-primary/20 pl-4">
                          {study.challenge}
                        </p>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[9px] font-bold text-secondary uppercase tracking-[0.3em] flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-secondary" />
                          Solution
                        </span>
                        <p className="text-slate-700 text-sm font-medium leading-snug border-l border-secondary/20 pl-4">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* Compact Metrics Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {study.results.map((result, i) => (
                        <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-slate-700 transition-all duration-500">
                          <div className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-white transition-colors">
                            {result.value}
                          </div>
                          <div className="text-[8px] font-bold text-slate-500 uppercase group-hover:text-white tracking-widest mt-0.5">
                            {result.metric}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* 2. IMAGE MODULE: (Right side, fits the height) */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-[55%] relative group order-2"
                  >
                    <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] blur-2xl group-hover:bg-primary/10 transition-all duration-700" />

                    <div className="relative rounded-[1.5rem] md:rounded-[2rem] p-2 bg-white border border-slate-200 shadow-xl overflow-hidden">
                      <div className="relative rounded-[1.2rem] md:rounded-[1.7rem] overflow-hidden">
                        <img
                          src={study.image}
                          alt={study.client}
                          className="w-full h-auto aspect-video object-cover object-top group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                      </div>
                    </div>
                  </motion.div>

                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title={<>Ready to <span className="text-secondary italic">Scale?</span></>}
          description={<>Data-Backed Execution. Quantifiable <span className="text-white">Impact.</span> <br className="hidden md:block" />
            Initiate your <span className="text-secondary">strategy audit</span> today.</>}
          buttonText="Get Started for Free"
        />
      </div>
    </>

  );
};

export default OurImpact;
