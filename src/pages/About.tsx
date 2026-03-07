import { Users, Target, Award, Lightbulb, Cpu, Eye, Globe, Layers, Smartphone, TrendingUp, Zap, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Results-Driven",
      description: "We focus on delivering measurable outcomes that contribute to your business growth.",
      color: "text-primary",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client-Centric",
      description: "Your success is our success. We build lasting partnerships with our clients.",
      color: "text-secondary",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "We stay ahead of digital trends to provide cutting-edge solutions.",
      color: "text-accent",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do.",
      color: "text-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* ABOUT SOCIO BHAARAT */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-[#fafafa]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-gradient-slow" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px] md:bg-[size:45px_45px]" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* IMAGE FIRST ON MOBILE (order-1), LEFT ON DESKTOP (lg:order-1) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative group order-2 lg:order-1"
            >
              <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl group-hover:bg-primary/20 transition-all duration-700" />
              <div className="relative rounded-[2.5rem] p-3 bg-white border-2 border-slate-200 shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Growth Engineering"
                  className="w-full h-auto object-cover rounded-[2rem] group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-900/80 backdrop-blur-md rounded-full border border-white/20 whitespace-nowrap">
                  <p className="text-[10px] font-black text-white uppercase tracking-[0.2em]">System_Optimization_v3.0</p>
                </div>
              </div>
            </motion.div>

            {/* TEXT SECOND ON MOBILE (order-2), RIGHT ON DESKTOP (lg:order-2) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 space-y-8 order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-primary text-[10px] font-black tracking-[0.3em] uppercase shadow-sm">
                <Cpu className="w-3 h-3" /> Growth Engineering Lab
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-black text-slate-900 leading-[0.95] tracking-tighter">
                About <br />
                <span className="relative inline-block py-1 pr-4 -mr-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium uppercase overflow-visible">
                  Socio Bhaarat
                </span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium italic border-l-4 border-primary/20 pl-8">
                  "Socio Bhaarat is a results-driven digital marketing and IT solutions company helping startups, entrepreneurs, and growing businesses scale in the digital world."
                </p>
                <p className="text-base md:text-lg text-slate-400 leading-relaxed font-medium">
                  We combine strategic marketing, modern technology, and data-driven insights to deliver measurable growth and long-term success.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR STORY */}
      <section className="py-16 md:py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8 order-1 lg:order-1 hidden lg:block"
            >
              <div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4 italic">Origin Protocol</h2>
                <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8 italic leading-none">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Story</span>
                </h3>
              </div>
              <div className="space-y-6 text-slate-500 text-md md:text-lg leading-relaxed italic border-l-4 border-primary/20 pl-8">
                <p>
                  Founded with a vision to simplify digital growth, Socio Bhaarat began as a small team passionate about marketing and technology.
                </p>
                <p className="text-base md:text-lg not-italic font-medium text-slate-400">
                  Our goal is simple — provide strategic, transparent, and performance-driven solutions that actually deliver results.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-100" />
                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Growth_History_Verified</span>
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
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000 aspect-square lg:aspect-auto"
                    alt="Engineering Team"
                  />
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-900/80 backdrop-blur-md rounded-full border border-white/20 whitespace-nowrap">
                    <p className="text-[10px] font-black text-white uppercase tracking-[0.2em]">SB_LAB_UNIT_01</p>
                  </div>
                </div>
              </div>
            </motion.div>

            
          </div>
        </div>
      </section>

      <section className="py-24 px-2 bg-[#fafafa] relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4 italic">Capabilities Lab</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter italic leading-none">
              What <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium inline-block pr-4 -mr-4 overflow-visible leading-normal">We Do</span>
            </h3>
            <p className="mt-6 text-slate-500 max-w-2xl mx-auto italic font-medium">
              "We provide complete digital growth solutions tailored to modern business needs."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Web Development", desc: "High-performance, responsive websites built for speed, security, and scalability.", icon: <Globe /> },
              { title: "App Development", desc: "Custom mobile and web applications designed for seamless user experience.", icon: <Smartphone /> },
              { title: "Digital Marketing", desc: "Strategic campaigns across social media and paid platforms to drive leads.", icon: <Zap /> },
              { title: "UI/UX Design", desc: "User-centered designs that enhance engagement and brand experience.", icon: <Layers /> },
              { title: "SEO & Performance", desc: "Data-driven optimization strategies to improve visibility and maximize ROI.", icon: <TrendingUp /> },
              { title: "Consulting", desc: "Expert strategy sessions to align your technology with business goals.", icon: <Cpu /> }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="relative p-[2px] rounded-[2.5rem] overflow-hidden group bg-transparent transition-all duration-500 border"
              >
                {/* Animation Logic: Star-Border simulation (ReactBits style) */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary animate-spin-slow opacity-0 transition-opacity duration-500" style={{ margin: '-100%' }} />

                <div className="relative bg-white p-10 rounded-[2.4rem] h-full flex flex-col items-start border border-slate-100">
                  <div className="p-4 rounded-2xl bg-slate-50 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-lg md:text-xl font-black text-slate-900 italic mb-4">{service.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed italic border-l-2 border-primary/10 pl-4">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-16 items-center">

            {/* Narrative Side */}
            <div className="lg:col-span-6 space-y-12">
              <div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4 italic">Verification Protocol</h2>
                <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter italic leading-tight">
                  Why Partner with <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium inline-block pr-4 -mr-4 overflow-visible leading-normal">Socio Bhaarat?</span>
                </h3>
              </div>

              {/* Animation Logic: One by one lines from left/right */}
              <div className="space-y-4">
                {[
                  { text: "Experienced and skilled professionals", dir: -20 },
                  { text: "Client-focused and result-oriented approach", dir: 20 },
                  { text: "Transparent communication and pricing", dir: -20 },
                  { text: "On-time project delivery", dir: 20 },
                  { text: "Data-driven decision making", dir: -20 },
                  { text: "Proven track record of success", dir: 20 }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: item.dir }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-primary/20 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Check size={14} strokeWidth={4} />
                    </div>
                    <span className="text-slate-700 font-bold italic text-sm md:text-base">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Visual Side: Star Border Animation Module */}
            <div className="lg:col-span-6 relative">
              <div className="relative p-[2px] rounded-[3rem] overflow-hidden">
                {/* Star-Border Animation (ReactBits Simulation) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary via-transparent to-secondary animate-pulse scale-150" />

                <div className="relative bg-white rounded-[2.9rem] p-4">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
                    alt="Team Collaboration"
                    className="rounded-[2.5rem] w-full h-auto shadow-2xl"
                  />
                  {/* Technical Watermark */}
                  <div className="absolute top-10 right-10 text-slate-900/5 text-7xl font-black italic select-none">
                    RESULT
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 px-2 bg-slate-50 overflow-hidden">
        <div className="container mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="group perspective-1000"
          >
            <div className="relative h-auto md:h-64 transition-transform duration-500 preserve-3d group-hover:rotate-y-12 bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl text-primary"><Target size={24} /></div>
                <h4 className="text-2xl font-black tracking-tighter uppercase italic">Our Mission</h4>
              </div>
              <p className="text-slate-500 italic font-medium leading-relaxed">
                To empower businesses with innovative digital marketing solutions that increase visibility and generate measurable revenue growth.
              </p>
            </div>
          </motion.div>

          {/* Vision Card: Slide-in Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="group perspective-1000"
          >
            <div className="relative h-auto md:h-64 transition-transform duration-500 preserve-3d group-hover:-rotate-y-12 bg-slate-600 p-10 rounded-[2.5rem] text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/10 rounded-xl text-white"><Eye size={24} /></div>
                <h4 className="text-2xl font-black uppercase italic">Our Vision</h4>
              </div>
              <p className="text-slate-200 italic font-medium leading-relaxed">
                To become a trusted digital transformation partner known for delivering impactful strategies and scalable solutions.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      <section className="py-20 bg-white border-y border-slate-100 relative">
        <div className="absolute inset-0 opacity-[0.02] bg-[size:20px_20px] bg-[radial-gradient(#000_1px,transparent_1px)]" />

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { val: "100+", label: "Projects Delivered" },
              { val: "50+", label: "Happy Clients" },
              { val: "5+", label: "Years Combined" },
              { val: "95%", label: "Satisfaction Rate" }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <h4 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter group-hover:text-primary transition-colors">
                  {stat.val}
                </h4>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
