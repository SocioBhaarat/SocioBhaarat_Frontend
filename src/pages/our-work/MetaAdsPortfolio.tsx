import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Target, Zap, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MetaAdsPortfolio = () => {
  const navigate = useNavigate();
  const caseStudies = [
    {
      client: "Fashion E-commerce Brand",
      industry: "E-commerce",
      challenge: "Low ROAS and high cart abandonment rate",
      solution: "Implemented dynamic product ads with retargeting campaigns",
      results: [
        { metric: "ROAS", value: "8.2x", icon: DollarSign },
        { metric: "Conversion Rate", value: "240%↑", icon: TrendingUp },
        { metric: "CAC", value: "65%↓", icon: Target },
        { metric: "Revenue", value: "₹45L/mo", icon: DollarSign },
      ],
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop",
    },
    {
      client: "EdTech Platform",
      industry: "Education",
      challenge: "High cost per lead and low-quality leads",
      solution: "Audience segmentation with lookalike audiences and lead forms",
      results: [
        { metric: "Cost/Lead", value: "72%↓", icon: Target },
        { metric: "Lead Quality", value: "3.5x", icon: Users },
        { metric: "Enrollments", value: "420%↑", icon: TrendingUp },
        { metric: "ROAS", value: "6.8x", icon: DollarSign },
      ],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop",
    }
  ];

  return (
    // <div className="min-h-screen bg-background">
    //   {/* Hero Section */}
    //   <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
    //     <div className="container mx-auto max-w-4xl text-center">
    //       <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
    //         Meta Ads <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Portfolio</span>
    //       </h1>
    //       <p className="text-xl text-muted-foreground leading-relaxed">
    //         Real results from real campaigns. See how we've helped businesses achieve exceptional ROI through Facebook & Instagram advertising.
    //       </p>
    //     </div>
    //   </section>

    //   {/* Overall Stats */}
    //   <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
    //     <div className="container mx-auto max-w-6xl">
    //       <div className="grid md:grid-cols-4 gap-8">
    //         <div className="text-center">
    //           <div className="text-4xl font-bold text-primary mb-2">₹12Cr+</div>
    //           <p className="text-muted-foreground">Ad Spend Managed</p>
    //         </div>
    //         <div className="text-center">
    //           <div className="text-4xl font-bold text-secondary mb-2">6.5x</div>
    //           <p className="text-muted-foreground">Average ROAS</p>
    //         </div>
    //         <div className="text-center">
    //           <div className="text-4xl font-bold text-accent mb-2">150+</div>
    //           <p className="text-muted-foreground">Successful Campaigns</p>
    //         </div>
    //         <div className="text-center">
    //           <div className="text-4xl font-bold text-primary mb-2">85%</div>
    //           <p className="text-muted-foreground">Client Retention</p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Case Studies */}
    //   <section className="py-20 px-4 sm:px-6 lg:px-8">
    //     <div className="container mx-auto max-w-6xl">
    //       <h2 className="font-display text-4xl font-bold mb-12 text-center">Success Stories</h2>
    //       <div className="space-y-16">
    //         {caseStudies.map((study, index) => (
    //           <div key={index} className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
    //             <div className={index % 2 === 1 ? 'md:order-2' : ''}>
    //               <img
    //                 src={study.image}
    //                 alt={study.client}
    //                 className="rounded-lg shadow-lg w-full h-[300px] object-cover"
    //               />
    //             </div>
    //             <div className={index % 2 === 1 ? 'md:order-1' : ''}>
    //               <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
    //                 {study.industry}
    //               </div>
    //               <h3 className="font-display text-3xl font-bold mb-4">{study.client}</h3>
    //               <div className="mb-4">
    //                 <h4 className="font-semibold text-lg mb-2">Challenge:</h4>
    //                 <p className="text-muted-foreground">{study.challenge}</p>
    //               </div>
    //               <div className="mb-6">
    //                 <h4 className="font-semibold text-lg mb-2">Solution:</h4>
    //                 <p className="text-muted-foreground">{study.solution}</p>
    //               </div>
    //               <div className="grid grid-cols-2 gap-4">
    //                 {study.results.map((result, i) => (
    //                   <div key={i} className="bg-card p-4 rounded-lg border border-border">
    //                     <result.icon className="h-6 w-6 text-primary mb-2" />
    //                     <div className="font-bold text-2xl mb-1">{result.value}</div>
    //                     <div className="text-sm text-muted-foreground">{result.metric}</div>
    //                   </div>
    //                 ))}
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </section>

    //   {/* CTA */}
    //   <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
    //     <div className="container mx-auto max-w-4xl text-center">
    //       <h2 className="font-display text-4xl font-bold mb-6 text-primary-foreground">Ready to Scale Your Business?</h2>
    //       <p className="text-xl text-primary-foreground/90 mb-8">
    //         Let's create a winning Meta Ads strategy for your business. Get a free audit today.
    //       </p>
    //       <Button size="lg" variant="secondary" className="rounded-full px-8"  onClick={() => navigate("/contact")} >
    //         Get Your Free Meta Ads Audit
    //       </Button>
    //     </div>
    //   </section>
    // </div>
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
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[0.95] tracking-tighter mb-8">
              Meta Ads <br />
              <span className="relative inline-block py-1 pr-4 -mr-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium uppercase overflow-visible">
                Portfolio
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium italic border-x-4 border-primary/10 px-8">
              "Real results from real campaigns. We don't just create ads; we build high-converting acquisition systems."
            </p>

          </motion.div>

        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
      </section>

      <section className="py-12 bg-white border-y border-slate-100 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { val: "₹12Cr+", label: "Ad Spend Managed", color: "text-primary" },
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

      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="space-y-32">
            {caseStudies.map((study, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-7 space-y-8 order-1 lg:order-1"
                >
                  <div className="inline-block px-3 py-1 rounded-md bg-slate-900 text-white text-[9px] font-black uppercase tracking-[0.2em]">
                    {study.industry}
                  </div>

                  <h3 className="text-4xl md:text-5xl font-black text-slate-900 ">
                    <span className="relative inline-block py-1 pr-4 -mr-4 overflow-visible">
                      {study.client}
                    </span>
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-slate-100">
                    <div className="space-y-2">
                      <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">The Challenge</span>
                      <p className="text-slate-500 text-sm italic font-medium leading-relaxed border-l-2 border-primary/10 pl-4">
                        {study.challenge}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">The Solution</span>
                      <p className="text-slate-500 text-sm italic font-medium leading-relaxed border-l-2 border-secondary/10 pl-4">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* RESULTS GRID */}
                  <div className="grid grid-cols-2 gap-4">
                    {study.results.map((result, i) => (
                      <div key={i} className="p-6 bg-slate-50 rounded-[1.5rem] border border-slate-100 group hover:border-primary/30 transition-all duration-500">
                        <div className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter group-hover:text-primary transition-colors">
                          {result.value}
                        </div>
                        <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-5 relative group order-2 lg:order-2"
                >
                  <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl group-hover:bg-primary/20 transition-all duration-700" />

                  <div className="relative rounded-[2.5rem] p-3 bg-white border-2 border-slate-200 shadow-2xl overflow-hidden">
                    <div className="relative rounded-[2rem] overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.client}
                        className="w-full h-auto aspect-square object-cover group-hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-900/80 backdrop-blur-md rounded-full border border-white/20 whitespace-nowrap">
                        <p className="text-[10px] font-black text-white uppercase tracking-[0.2em]">
                          ROI_VERIFIED_UNIT_{index + 1}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-6 leading-none">
            Ready to <span className="text-secondary italic">Scale?</span>
          </h2>
          <p className="text-lg text-slate-400 mb-10 italic font-medium">
            "Let's create a winning Meta Ads strategy for your business. Get a free audit today."
          </p>

          <Button
            size="lg"
            className="h-16 px-10 rounded-full bg-primary hover:bg-white hover:text-primary text-white font-black text-lg transition-all shadow-2xl hover:scale-[1.05]"
            onClick={() => navigate("/contact")}
          >
            GET YOUR FREE META ADS AUDIT <Send className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MetaAdsPortfolio;
