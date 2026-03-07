import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, Code, Smartphone, Zap, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WebDevPortfolio = () => {
  const navigate = useNavigate();
  const projects = [
    {
      title: "Pune News 24",
      category: "News Portal",
      description: "A multilingual news platform delivering Pune, national, and current affairs updates in multiple languages.",
      technologies: ["React", "Node.js", "MongoDB", "SEO Optimization"],
      results: ["Daily news publishing system", "Multilingual news delivery", "High SEO visibility"],
      image: "/webDevPortfolio/puneNews24.png",
      live: "https://punenews24.in"
    },

    {
      title: "NotesMates",
      category: "Education Platform",
      description: "An open educational platform designed for RGPV university students to study, share notes, and access academic resources easily.",
      technologies: ["React", "Node.js", "MongoDB", "Cloud Storage"],
      results: ["Centralized notes sharing", "Accessible academic resources", "Student collaboration platform"],
      image: "/webDevPortfolio/notesmate.png",
      live: "https://notesmates.in"
    },

    {
      title: "Daksh Edu",
      category: "EdTech Platform",
      description: "A modern ed-tech platform combining social media engagement with meaningful learning experiences.",
      technologies: ["React", "Node.js", "MongoDB", "Real-time Features"],
      results: ["Interactive learning environment", "Social learning engagement", "Scalable education platform"],
      image: "/webDevPortfolio/dakshedu.png",
      live: "https://dakshedu.in"
    },

    {
      title: "Outlawed",
      category: "Exam Preparation Platform",
      description: "A CLAT preparation platform providing exam-accurate mock tests, performance analytics, and affordable preparation resources.",
      technologies: ["React", "Node.js", "MongoDB", "Analytics Engine"],
      results: ["Mock test simulation system", "Detailed performance analytics", "Affordable preparation resources"],
      image: "/webDevPortfolio/outlawed.png",
      live: "https://outlawed.in"
    },

    {
      title: "The Resonance",
      category: "Business & Innovation Platform",
      description: "A purpose-driven initiative empowering entrepreneurs and skilled talent through innovation, partnerships, and impact-led growth.",
      technologies: ["React", "Next.js", "Node.js", "SEO Optimization"],
      results: ["Entrepreneur ecosystem support", "Innovation-driven collaboration", "Impact-led initiatives"],
      image: "/webDevPortfolio/theresonance.png",
      live: "https://theresonance.co.in"
    },

    {
      title: "RealtySnow",
      category: "Real Estate Platform",
      description: "A real estate platform simplifying property buying, selling, and renting through expert guidance and technology-driven solutions.",
      technologies: ["React", "Node.js", "MongoDB", "Search & Filter Systems"],
      results: ["Simplified property search", "Property listing management", "Seamless property transactions"],
      image: "/webDevPortfolio/realtySnow.png",
      live: "https://realtysnow.com"
    },

    {
      title: "CS Nyayavidhi",
      category: "Legal Services Website",
      description: "A client-focused legal practice specializing in dispute resolution, arbitration, mediation, and financial recovery solutions.",
      technologies: ["React", "Node.js", "CMS", "SEO Optimization"],
      results: ["Professional legal services platform", "Client consultation interface", "Trust-building legal presence"],
      image: "/webDevPortfolio/csNyayavidhi.png",
      live: "https://csnyayavidhi.com"
    },

    {
      title: "Calm Chase",
      category: "Personal Development Platform",
      description: "A personal growth and mental wellness platform empowering individuals with emotional balance, confidence, and life skills.",
      technologies: ["React", "Node.js", "MongoDB", "Content Platform"],
      results: ["Personal development resources", "Mental well-being guidance", "Self-growth learning platform"],
      image: "/webDevPortfolio/calmChase.png",
      live: "https://calmchase.com"
    },

    {
      title: "Calm Chase SSB Zone",
      category: "Defense Training Platform",
      description: "A guided SSB preparation platform helping aspirants train through daily challenges focused on psychology, leadership, and communication.",
      technologies: ["React", "Node.js", "MongoDB", "Interactive Challenges"],
      results: ["Daily SSB training exercises", "Leadership skill development", "Psychology-based preparation"],
      image: "/webDevPortfolio/ssbCalmChase.png",
      live: "https://ssb.calmchase.com"
    },

    {
      title: "Mehta Auto Works",
      category: "Automobile Services Website",
      description: "A digital platform showcasing two-wheeler servicing, spare parts, and electric scooter solutions.",
      technologies: ["React", "Node.js", "MongoDB", "Booking System"],
      results: ["Service booking system", "EV product showcase", "Customer service integration"],
      image: "/webDevPortfolio/MehtaAutoWorks.png",
      live: "https://mehtaautoworks.com"
    },

    {
      title: "Five Rivers Duct Cleaning",
      category: "Home Services Website",
      description: "A professional service platform enabling customers to book air duct cleaning services and improve indoor air quality.",
      technologies: ["React", "Node.js", "MongoDB", "Online Booking System"],
      results: ["Online service booking", "Improved service visibility", "Customer inquiry management"],
      image: "/webDevPortfolio/fiveRiversDuctCleaning.png",
      live: "https://fiveriversductcleaning.com"
    }
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <section className="relative pt-12 pb-32 px-4 overflow-hidden bg-[#fafafa]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-gradient-slow" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-8 shadow-sm">
              <Zap className="w-3 h-3" /> Scalable Web Systems
            </div>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[0.95] tracking-tighter mb-8">
              Web Developemnt <br />
              <span className="relative inline-block py-1 pr-4 -mr-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium uppercase overflow-visible">
                Portfolio
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium italic border-x-4 border-primary/10 px-8">
              "Code that scales. Design that converts. We don't just build websites; we engineer high-performance digital infrastructure that powers growth."
            </p>

          </motion.div>

        </div>
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
                    <h3 className="text-4xl lg:text-5xl font-black text-slate-900 ">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-500 text-lg leading-relaxed italic font-medium border-l-4 border-slate-100 pl-6">
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

                  <Button asChild className="h-14 px-8 rounded-full bg-slate-900 hover:bg-primary text-white font-black text-xs tracking-[0.2em] transition-all group/btn shadow-xl shadow-slate-200">
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
          <div className="mt-32 pt-20 border-t border-slate-100 flex flex-col items-center">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-[1px] w-12 bg-slate-200" />
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Buffer_Sequence_End</span>
              <div className="h-[1px] w-12 bg-slate-200" />
            </div>

            <button className="group relative px-12 py-6 bg-white border-2 border-slate-900 overflow-hidden transition-all">
              {/* Fill effect on hover */}
              <div className="absolute inset-0 w-0 bg-slate-900 transition-all duration-300 group-hover:w-full" />
              <span className="relative z-10 text-sm font-black tracking-[0.2em] text-slate-900 group-hover:text-white uppercase flex items-center gap-3">
                Access Full Archive
                <span className="animate-pulse text-primary group-hover:text-white">+++</span>
              </span>
            </button>

            <p className="mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">
              42+ Additional Projects available upon request
            </p>
          </div>
        </div>
      </section>


      {/* CTA Section */}

      <section className="py-24 px-4 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-6 leading-none">
            Ready to start your digital <br /> transformation?
          </h2>
          <p className="text-lg text-slate-400 mb-10 italic font-medium">
            "Let’s discuss your vision and build something that puts you ahead of the competition."
          </p>

          <Button
            size="lg"
            className="h-16 px-10 rounded-full bg-primary hover:bg-white hover:text-primary text-white font-black text-lg transition-all shadow-2xl hover:scale-[1.05]"
            onClick={() => navigate("/contact")}
          >

            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WebDevPortfolio;
