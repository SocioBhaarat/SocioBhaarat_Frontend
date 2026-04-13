import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getJobListings } from "@/services/hiringService";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, TrendingUp, Heart, MapPin, Clock, DollarSign, Sparkles, ArrowRight, Send, Zap } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const Hiring = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [positions, setPositions] = useState([
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
  ]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await getJobListings();
        if (res.success && res.data) {
          setPositions(res.data);
        }
      } catch (err) {
        console.error("Failed to fetch jobs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

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
    <>
      <SEO
        title="Join Our Team | Work With Socio Bhaarat | Jobs & Internships"
        description="Explore exciting career opportunities and join our team to work on innovative digital marketing and IT projects."
        keywords="careers, hiring, jobs in digital marketing, job opportunities, hiring in jabalpur, marketing jobs in jabalpur"
        url="/hiring"
      />
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
                <Sparkles className="w-4 h-4" /> Work With Socio Bhaarat
              </div>

              <h1 className=" text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.05] tracking-tighter mb-8">
                Join <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium">
                  Our Team
                </span>
              </h1>

              <p className="text-base md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-semibold border-x-0 md:border-x border-slate-200 md:px-12">
                Be part of a dynamic squad that's transforming how businesses scale digitally through creative technical excellence.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-muted/30 relative">
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="mb-16 border-l-4 border-primary pl-8">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                Why Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium">Socio Bhaarat?</span>
              </h2>
              <p className="text-slate-700 font-medium italic mt-2">Industrial-grade benefits for high-performance individuals.</p>
            </div>

            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <motion.li
                  key={benefit.title} // Use title or id instead of index
                  whileHover={{ y: -5 }}
                  className="group bg-card border-border/50 hover:border-primary/40 rounded-[2rem] border-2 p-8 shadow-sm transition-all"
                >
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted/50 transition-all duration-300 group-hover:bg-primary group-hover:text-white ${benefit.color}`}
                    aria-hidden="true"
                  >
                    {benefit.icon}
                  </div>

                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    {benefit.title}
                  </h3>

                  <p className="text-xs md:text-sm font-medium leading-relaxed text-slate-700">
                    {benefit.description}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20 bg-muted/30 relative">
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="mb-16 border-l-4 border-primary pl-8">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                Why Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium">Socio Bhaarat?</span>
              </h2>
              <p className="text-slate-700 font-medium italic mt-2">Industrial-grade benefits for high-performance individuals.</p>
            </div>

            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <motion.li
                  key={benefit.title} // Use title or id instead of index
                  whileHover={{ y: -5 }}
                  className="group bg-card border-border/50 hover:border-primary/40 rounded-[2rem] border-2 p-8 shadow-sm transition-all"
                >
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted/50 transition-all duration-300 group-hover:bg-primary group-hover:text-white ${benefit.color}`}
                    aria-hidden="true"
                  >
                    {benefit.icon}
                  </div>

                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    {benefit.title}
                  </h3>

                  <p className="text-xs md:text-sm font-medium leading-relaxed text-slate-700">
                    {benefit.description}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6">

            {/* Section Header */}
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70 mb-4">
                Join Our Team
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Open{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-semibold">
                  Positions
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              {loading ? (
                <div className="text-center py-20 text-slate-500">
                  <div className="animate-spin rounded-full h-10 w-10 border-2 border-primary/30 border-t-primary mx-auto mb-4" />
                  <p className="text-sm font-medium text-slate-400">Loading open positions…</p>
                </div>
              ) : (
                positions.map((position, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
                    className="group bg-white rounded-3xl border border-slate-200 hover:border-primary/40 shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden"
                  >
                    {/* Top accent bar */}
                    <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-primary to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="p-8 md:p-10">

                      {/* Header Row */}
                      <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">

                        {/* Left: Meta + Title + Description */}
                        <div className="flex-1 space-y-4">

                          {/* Badges */}
                          <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1 rounded-lg bg-primary/8 text-primary text-[11px] font-semibold uppercase tracking-wider border border-primary/15">
                              {position.department}
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-lg bg-slate-100 text-slate-500 text-[11px] font-semibold uppercase tracking-wider border border-slate-200">
                              {position.type}
                            </span>
                          </div>

                          {/* Role Title */}
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
                            {position.title}
                          </h3>

                          {/* Description */}
                          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                            {position.description}
                          </p>
                        </div>

                        {/* Right: CTA */}
                        <div className="flex-shrink-0 flex items-center lg:items-start lg:pt-2">
                          <Button
                            size="lg"
                            className="w-full sm:w-auto h-14 px-10 rounded-full font-semibold text-sm tracking-wide bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.03] transition-all duration-200 flex items-center gap-2"
                            onClick={() => navigate(`/hiring/apply/${encodeURIComponent(position.title)}`)}
                          >
                            Apply Now
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="my-8 border-t border-slate-100" />

                      {/* Requirements */}
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400 mb-5">
                          Requirements
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {position.requirements.map((req, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 group-hover:border-primary/10 group-hover:bg-blue-50/40 transition-colors duration-200"
                            >
                              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-px" />
                              <span className="text-xs sm:text-[13px] font-medium text-slate-700 leading-snug">
                                {req}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                ))
              )}
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

              <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase leading-[0.95]">
                Don't See Your Role?
              </h2>

              <p className="text-sm md:text-lg text-slate-700 mb-12 leading-relaxed font-medium italic border-x-0 md:border-x border-white/10 px-6 md:px-12">
                "We are always hunting for outliers and technical visionaries. If your expertise doesn't fit a standard box, send us your brief."
              </p>

              {/* High-Performance Action Button */}
              <div className="flex flex-col items-center gap-4">
                <Button
                  size="lg"
                  className="h-16 md:h-20 px-10 md:px-16 rounded-full bg-secondary text-slate-900 hover:bg-primary hover:text-white font-black text-lg md:text-xl transition-all shadow-2xl hover:scale-105 group"
                  onClick={() => window.open("https://wa.me/+919407448837", "_blank")}
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
    </>

  );
};

export default Hiring;