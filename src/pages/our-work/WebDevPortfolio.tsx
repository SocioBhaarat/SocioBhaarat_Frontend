import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/ui/CTASection";
import { motion } from "framer-motion";
import { ExternalLink, Smartphone, Zap, Globe } from "lucide-react";

const WebDevPortfolio = () => {
  const projects = [
    {
      title: "Pune News 24",
      category: "News Portal",
      description: "A multilingual news platform delivering Pune, national, and current affairs updates in multiple languages.",
      technologies: ["React", "Node.js", "MongoDB", "SEO Optimization"],
      results: ["Daily news publishing system", "Multilingual news delivery", "High SEO visibility"],
      image: "/webDevPortfolio/puneNews24.webp",
      live: "https://punenews24.in"
    },
    {
      title: "Calm Chase",
      category: "Personal Development Platform",
      description: "A personal growth and mental wellness platform empowering individuals with emotional balance, confidence, and life skills.",
      technologies: ["React", "Node.js", "MongoDB", "Content Platform"],
      results: ["Personal development resources", "Mental well-being guidance", "Self-growth learning platform"],
      image: "/webDevPortfolio/calmChase.webp",
      live: "https://calmchase.com"
    },

    {
      title: "SN Realities",
      category: "Real Estate Development Company",
      description: "A professional real estate website designed to showcase residential and commercial projects, helping buyers explore properties, view project details, and connect directly with the developer.",
      technologies: ["React", "Node.js", "MongoDB", "Real Estate CMS"],
      results: [
        "Modern property showcase platform",
        "Improved online property inquiries",
        "Lead generation for real estate projects"
      ],
      image: "/webDevPortfolio/SNRealities.webp",
      live: "https://snrealities.com"
    },
    {
      title: "Lotus Job Group",
      category: "Recruitment & Job Portal Platform",
      description: "A recruitment and employment platform designed to connect job seekers with employers while helping companies streamline their hiring process through a centralized digital portal.",
      technologies: ["React", "Node.js", "MongoDB", "Job Portal System"],
      results: [
        "Online platform connecting employers and job seekers",
        "Simplified job posting and candidate application process",
        "Improved recruitment visibility for companies"
      ],
      image: "/webDevPortfolio/lotusGroup.webp",
      live: "https://www.lotusjobgroup.com/"
    },
    {
      title: "The Resonance",
      category: "Business & Innovation Platform",
      description: "A purpose-driven initiative empowering entrepreneurs and skilled talent through innovation, partnerships, and impact-led growth.",
      technologies: ["React", "Next.js", "Node.js", "SEO Optimization"],
      results: ["Entrepreneur ecosystem support", "Innovation-driven collaboration", "Impact-led initiatives"],
      image: "/webDevPortfolio/theresonance.webp",
      live: "https://theresonance.co.in"
    },
  ]

  return (
    <>
      <SEO
        title="Web Development Projects | Portfolio | Socio Bhaarat"
        description="Browse our web development portfolio showcasing modern, scalable, and high-performing websites built for various industries."
        keywords="web development projects, portfolio, website portfolio, web design work, web development company in jabalpur"
        url="/our-work/web-development-projects"
      />
      <div className="min-h-screen bg-background relative overflow-hidden">

        {/* <section className="relative pt-12 pb-32 px-4 overflow-hidden bg-[#fafafa]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-gradient-slow" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-8 shadow-sm">
              <Zap className="w-3 h-3" /> Scalable Web Systems
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-slate-800 leading-[0.95] tracking-tighter mb-8">
              Web Developemnt <br />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium overflow-visible ">
                Portfolio
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-semibold border-x-4 border-primary/10 px-8">
              Code that scales. Design that converts. We don't just build websites; we engineer high-performance digital infrastructure that powers growth.
            </p>

          </motion.div>

        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
      </section> */}

        <section className="relative pt-12 pb-12 px-4 overflow-hidden bg-[#fafafa]">

          {/* Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-gradient-slow" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>
          <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] bg-blue-600/[0.06] rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[-80px] left-[-80px] w-[360px] h-[360px] bg-orange-500/[0.05] rounded-full blur-[90px] pointer-events-none" />

          {/* Floating cards */}
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
              <Globe size={15} />
            </div>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[.15em] text-slate-400 mb-0.5">Websites Built</p>
              <p className="text-sm font-black text-slate-900 leading-none">50+ Projects</p>
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
              <Zap size={15} />
            </div>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[.15em] text-slate-400 mb-0.5">Page Speed</p>
              <p className="text-sm font-black text-slate-900 leading-none">99 Score</p>
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
              <p className="text-[9px] font-bold uppercase tracking-[.15em] text-slate-400 mb-0.5">Uptime</p>
              <p className="text-sm font-black text-slate-900 leading-none">99.9% Guaranteed</p>
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
              <Smartphone size={15} />
            </div>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[.15em] text-slate-400 mb-0.5">Mobile Ready</p>
              <p className="text-sm font-black text-slate-900 leading-none">100% Responsive</p>
            </div>
          </motion.div>

          {/* Main content — unchanged */}
          <div className="container mx-auto max-w-5xl relative z-10 text-center px-4 md:px-6 pt-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center gap-6"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-primary text-[9px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase shadow-sm">
                <Zap className="w-3 h-3" /> Scalable Web Systems
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-slate-800 leading-[1.1] md:leading-[0.95] tracking-tighter">
                Web Development{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium inline-block">
                  Portfolio
                </span>
              </h1>

              {/* Paragraph: Switched to left-border only on mobile for better readability */}
              <p className="text-base md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-semibold border-l-4 md:border-x-4 border-primary/10 px-6 md:px-8">
                Code that scales. Design that converts. We don't just build websites; we
                engineer high-performance digital infrastructure that powers growth.
              </p>

              {/* Responsive Stat Strip */}
              <div className="w-full max-w-3xl grid grid-cols-2 md:flex md:items-center gap-0 border border-slate-100 rounded-2xl md:rounded-full overflow-hidden bg-white shadow-sm mt-4">
                {[
                  { val: "50+", label: "Projects Built", color: "text-blue-600" },
                  { val: "99", label: "PageSpeed Score", color: "text-orange-600" },
                  { val: "99.9%", label: "Uptime", color: "text-green-600" },
                  { val: "100%", label: "Mobile Ready", color: "text-violet-600" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className={`px-4 py-6 md:px-8 md:py-4 flex-1 text-center 
            ${i % 2 === 0 ? "border-r" : "md:border-r"} 
            ${i < 2 ? "border-b md:border-b-0" : ""} 
            border-slate-100 last:border-r-0`}
                  >
                    <div className={`font-display text-2xl md:text-xl font-black leading-none mb-1 ${s.color}`}>
                      {s.val}
                    </div>
                    <div className="text-[8px] md:text-[9px] font-bold uppercase tracking-[.15em] text-slate-700 whitespace-nowrap">
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

        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="flex flex-col gap-32">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "circOut" }}
                  className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                >
                  {/* Image Chrome (The Browser Window) */}
                  <div className="w-full lg:w-1/2 group">
                    <div className="relative rounded-2xl p-2 bg-slate-50 border border-slate-200 shadow-xl transition-all duration-500 group-hover:shadow-primary/10">
                      {/* Browser Header - Refined to match news site nav feel */}
                      <div className="flex items-center justify-between mb-2 px-3">
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-red-300" />
                          <div className="w-2 h-2 rounded-full bg-yellow-300" />
                          <div className="w-2 h-2 rounded-full bg-green-300" />
                        </div>
                        {/* Added a subtle "URL" bar to mimic the news site top bar */}
                        <div className="h-3 w-32 bg-slate-200 rounded-full border border-slate-100" />
                      </div>

                      <div className="relative aspect-[21/9] md:aspect-[2/1] overflow-hidden rounded-md bg-slate-100">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />

                        {/* Performance Badge Overlay - Moved to bottom to match news caption placement */}
                        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-sm border border-slate-200 shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                            <span className="text-[9px] font-bold text-slate-700 uppercase tracking-wider">
                              Performance Optimized
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="space-y-2">
                      <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">
                        {project.category} // UNIT_0{index + 1}
                      </span>
                      <div className="text-4xl lg:text-5xl font-black text-slate-900 ">
                        {project.title}
                      </div>
                    </div>

                    <p className="text-slate-700 text-lg leading-relaxed font-medium border-l-4 border-slate-100 pl-6">
                      {project.description}
                    </p>

                    {/* Technical Results Grid */}
                    <div className="grid grid-cols-2 gap-4 py-6">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100 group/item hover:border-primary/30 transition-colors">
                          <div className="flex items-center gap-2 mb-1">
                            <Zap className="h-3 w-3 text-secondary" />
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Metric_Log</span>
                          </div>
                          <span className="text-sm font-bold text-slate-900 ">{result}</span>
                        </div>
                      ))}
                    </div>

                    <Button asChild className="h-14 px-8 rounded-full bg-slate-900 hover:bg-primary text-white font-bold text-xs tracking-[0.2em] transition-all group/btn shadow-xl shadow-slate-200">
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        EXPLORE DEPLOYMENT
                        <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* "And Many More" - System Buffer Version */}
            <div className="mt-12 flex flex-col items-center">
              {/* <div className="mb-8 flex items-center gap-3">
              <div className="h-[1px] w-12 bg-slate-200" />
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Buffer_Sequence_End</span>
              <div className="h-[1px] w-12 bg-slate-200" />
            </div>

            <button className="group relative px-12 py-6 bg-white border-2 border-slate-900 overflow-hidden transition-all">
              <div className="absolute inset-0 w-0 bg-slate-900 transition-all duration-300 group-hover:w-full" />
              <span className="relative z-10 text-sm font-black tracking-[0.2em] text-slate-900 group-hover:text-white uppercase flex items-center gap-3">
                Access Full Archive
                <span className="animate-pulse text-primary group-hover:text-white">+++</span>
              </span>
            </button> */}

              <p className="mt-4 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                42+ Additional Projects available upon request
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title={<>Ready to start <br className="hidden sm:block" /> your digital transformation?</>}
          description={<>Let’s discuss your vision and build something that puts you ahead of the competition.</>}
          buttonText="Start Your Project"
        />

      </div>
    </>

  );
};

export default WebDevPortfolio;
