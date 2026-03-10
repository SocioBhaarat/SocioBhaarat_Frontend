import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, TrendingUp, Heart, MapPin, Clock, DollarSign, Sparkles, ArrowRight, Send, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Hiring = () => {
  const positions = [
    {
      title: "Social Media Manager",
      department: "Marketing",
      type: "Full-time",
      location: "Jabalpur, MP",
      description: "We're looking for a creative social media manager to lead our client campaigns and build engaging online communities.",
      requirements: ["3+ years experience", "Platform expertise", "Content creation skills", "Analytics knowledge"],
    },
    {
      title: "Graphic Designer",
      department: "Design",
      type: "Full-time",
      location: "Jabalpur, MP",
      description: "Join our design team to create stunning visuals that tell compelling brand stories for our diverse clientele.",
      requirements: ["2+ years experience", "Adobe Creative Suite", "Portfolio required", "Brand identity experience"],
    },
    {
      title: "Content Writer",
      department: "Content",
      type: "Full-time",
      location: "Jabalpur, MP",
      description: "Seeking a talented writer to craft compelling content across blogs, social media, and marketing materials.",
      requirements: ["2+ years experience", "SEO knowledge", "Excellent English", "Marketing background"],
    },
    {
      title: "Performance Marketing Specialist",
      department: "Marketing",
      type: "Full-time",
      location: "Jabalpur, MP",
      description: "Drive results through data-driven campaigns across Google Ads, Facebook, and other digital platforms.",
      requirements: ["3+ years experience", "Google Ads certified", "Analytics expertise", "ROI focused"],
    },
  ];

  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Career Growth",
      description: "Continuous learning opportunities and clear career progression paths.",
      color: "text-primary",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Great Team",
      description: "Work with passionate professionals who love what they do.",
      color: "text-secondary",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Work-Life Balance",
      description: "Flexible hours and a supportive work environment.",
      color: "text-accent",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Competitive Pay",
      description: "Industry-leading compensation and performance bonuses.",
      color: "text-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#fafafa]">
        {/* Technical Background Architecture */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]" />
          <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-primary/5 blur-[130px] rounded-full animate-pulse" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-8 shadow-sm">
              <Sparkles className="w-4 h-4" /> WE ARE RECRUITING TOP TALENT
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tighter mb-8">
              Join Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium uppercase">
                Engineering Team
              </span>
            </h1>

            <p className="text-base md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium italic border-x-0 md:border-x border-slate-200 md:px-12">
              "Be part of a dynamic squad that's transforming how businesses scale digitally through creative technical excellence."
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="mb-16 border-l-4 border-primary pl-8">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              Why Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Socio Bhaarat?</span>
            </h2>
            <p className="text-slate-500 font-medium italic mt-2">Industrial-grade benefits for high-performance individuals.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-card p-8 rounded-[2rem] border-2 border-border/50 hover:border-primary/40 transition-all shadow-sm group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-muted/50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 ${benefit.color}`}>
                  {benefit.icon}
                </div>
                <h3 className="font-black text-lg text-slate-900 italic mb-2">{benefit.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-medium italic">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter italic">
              Open <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Positions</span>
            </h2>
          </div>

          <div className="space-y-8">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group bg-white rounded-[2.5rem] p-8 md:p-12 border-2 border-border/50 hover:border-primary/30 transition-all shadow-xl hover:shadow-primary/5 relative overflow-hidden"
              >

                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative z-10">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-md">{position.department}</span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest rounded-md">{position.type}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 italic">{position.title}</h3>
                    <p className="text-slate-500 italic max-w-xl">{position.description}</p>
                  </div>

                  <Button
                    size="lg"
                    className="w-full lg:w-auto h-16 px-12 rounded-full font-black text-sm md:text-lg bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105"
                    onClick={() => window.open("https://forms.office.com/r/u7zAwghd9Y", "_blank")}
                  >
                    Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>

                {/* Technical Specs List */}
                <div className="mt-10 pt-10 border-t border-slate-100">
                  <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-6 italic">Engineering Requirements</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {position.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 group-hover:border-primary/10 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-[11px] md:text-xs font-bold text-slate-600 uppercase tracking-tight">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-4 relative overflow-hidden border-muted">

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="font-display text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase italic leading-[0.95]">
              Don't See Your Role?
            </h2>

            <p className="text-sm md:text-lg text-slate-400 mb-12 leading-relaxed font-medium italic border-x-0 md:border-x border-white/10 px-6 md:px-12">
              "We are always hunting for outliers and technical visionaries. If your expertise doesn't fit a standard box, send us your brief."
            </p>

            {/* High-Performance Action Button */}
            <div className="flex flex-col items-center gap-4">
              <Button
                size="lg"
                className="h-16 md:h-20 px-10 md:px-16 rounded-full bg-secondary text-slate-900 hover:bg-primary hover:text-white font-black text-lg md:text-xl transition-all shadow-2xl hover:scale-105 group"
                onClick={() => window.open("https://wa.me/919589581364", "_blank")}
              >
                Send Your Resume
                <Send className="ml-3 w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
              </Button>

              <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mt-4">
                Direct Line to Recruitment Lab: +91 95895 81364
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hiring;
