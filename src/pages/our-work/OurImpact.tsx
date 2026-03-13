import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Target, Zap, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OurImpact = () => {
  const navigate = useNavigate();
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
    <div className="min-h-screen bg-background">
      <section className="relative pt-12 pb-32 px-4 overflow-hidden bg-[#fafafa]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-gradient-slow" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-8 shadow-sm">
              <Zap className="w-3 h-3" /> Performance Engineering
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 leading-[0.95] tracking-tighter mb-8">
              Our <span className="relative inline-block py-1 pr-4 -mr-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium overflow-visible">
                Impact
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium italic border-x-4 border-primary/10 px-8">
              "A curated selection of brands we’ve helped grow through digital strategy and innovation."
            </p>

          </motion.div>

        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
      </section>

      <section className="py-12 bg-white border-y border-slate-100 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { val: "₹ 1 cr+", label: "Ad Spend Managed", color: "text-primary" },
              { val: "6.5x", label: "Average ROAS", color: "text-secondary" },
              { val: "150+", label: "Success Stories", color: "text-accent" },
              { val: "85%", label: "Client Retention", color: "text-slate-900" }
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
      </section>

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
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 italic leading-tight">
                      {study.client}
                    </h3>
                  </div>

                  {/* Compact Challenge & Solution Stack */}
                  <div className="space-y-5 py-5 border-y border-slate-100">
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold text-primary uppercase tracking-[0.3em] flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        Challenge
                      </span>
                      <p className="text-slate-500 text-sm italic font-medium leading-snug border-l border-primary/20 pl-4">
                        {study.challenge}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[9px] font-bold text-secondary uppercase tracking-[0.3em] flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-secondary" />
                        Solution
                      </span>
                      <p className="text-slate-500 text-sm italic font-medium leading-snug border-l border-secondary/20 pl-4">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Compact Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {study.results.map((result, i) => (
                      <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-slate-900 transition-all duration-500">
                        <div className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-white transition-colors">
                          {result.value}
                        </div>
                        <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-0.5">
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

      <section className="py-12 md:py-24 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-primary to-indigo-900 p-8 sm:p-12 md:p-20 text-center rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl relative overflow-hidden group">


            {/* 2. CONTENT ARCHITECTURE */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 text-white italic tracking-tighter leading-tight uppercase">
                Ready to <span className="text-secondary italic">Scale?</span>
              </h2>

              <p className="text-sm md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium italic">
                "Data-Backed Execution. Quantifiable <span className="text-white">Impact.</span> <br className="hidden md:block" />
                Initiate your <span className="text-secondary">strategy audit</span> today."
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

export default OurImpact;
