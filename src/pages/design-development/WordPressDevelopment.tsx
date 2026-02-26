// import { Button } from "@/components/ui/button";
// import QuoteSection from "@/components/ui/QuoteSection";
// import { Building2, Check, Code2, Gauge, Layers, Newspaper, Palette, Puzzle, RefreshCw, Rocket, Shield, ShieldCheck, ShoppingCart, Smartphone } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const WordPressDevelopment = () => {
//   const navigate = useNavigate();
//   const services = [
//     {
//       title: "Custom WordPress Website Development",
//       icon: <Code2 className="h-8 w-8 text-primary" />,
//     },
//     {
//       title: "WordPress Theme Design & Customization",
//       icon: <Palette className="h-8 w-8 text-primary" />,
//     },
//     {
//       title: "Plugin Development & Integration",
//       icon: <Puzzle className="h-8 w-8 text-primary" />,
//     },
//     {
//       title: "WooCommerce Development",
//       icon: <ShoppingCart className="h-8 w-8 text-primary" />,
//     },
//     {
//       title: "Business & Corporate Websites",
//       icon: <Building2 className="h-8 w-8 text-primary" />,
//     },
//     {
//       title: "Blog & News Portal Development",
//       icon: <Newspaper className="h-8 w-8 text-primary" />,
//     },
//     {
//       title: "WordPress Migration Services",
//       icon: <RefreshCw className="h-8 w-8 text-primary" />,
//     },
//     {
//       title: "Website Speed Optimization",
//       icon: <Gauge className="h-8 w-8 text-primary" />,
//     },
//     {
//       title: "WordPress Maintenance & Security",
//       icon: <ShieldCheck className="h-8 w-8 text-primary" />,
//     },
//   ]

//   const process = [
//     "Requirement Analysis & Planning",
//     "UI/UX Design",
//     "Frontend & Backend Development",
//     "Testing & Quality Assurance",
//     "Deployment",
//     "Ongoing Support & Optimization",
//   ]

// const whyChooseUs = [
//   "Experienced WordPress Developers",
//   "Custom Theme Development",
//   "Plugin Integration & Customization",
//   "SEO-Optimized Structure",
//   "Mobile-Responsive Design",
//   "Secure & Performance-Focused Development",
//   "Transparent Communication & Support",
// ]

//   const Technologies = [
//     "WordPress CMS",
//     "Elementor / WPBakery",
//     "WooCommerce",
//     "PHP",
//     "MySQL",
//     "HTML5 / CSS3 / JavaScript",
//     "Yoast & RankMath SEO",
//   ]

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Hero Section */}
//       <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
//         <div className="container mx-auto max-w-6xl text-center">
//           <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
//             Build powerful & Scalable <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">WordPress Websites</span> for Your Business
//           </h1>
//           <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
//             We design and develop high-performance, secure, and fully customizable WordPress websites tailored to your business goals. From corporate sites to e-commerce stores, we deliver solutions that convert visitors into customers
//           </p>
//           <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8" onClick={() => navigate("/contact")} >
//             Start Your WordPress Project
//           </Button>
//         </div>
//       </section>

//       {/* WHY CHOOSE US */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="container mx-auto max-w-6xl">
//           <h2 className="font-display text-4xl font-bold mb-4 text-center">
//             Why Sociobhaarat is Best for WordPress Development
//           </h2>
//           <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
//             We combine creative design, technical expertise, and strategic planning
//             to deliver WordPress websites that are fast, secure, SEO-friendly, and easy to manage.
//           </p>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {whyChooseUs.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-card p-6 rounded-xl border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
//               >
//                 <Check className="h-6 w-6 text-primary mb-4 mx-auto" />
//                 <p className="font-medium">{item}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>


//       {/* WHY YOU NEED WORDPRESS */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
//         <div className="container mx-auto max-w-6xl">
//           <h2 className="font-display text-4xl font-bold mb-12 text-center">
//             Why Do You Need WordPress Development?
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8 text-center">
//             <div className="bg-card p-8 rounded-xl shadow-md border border-border hover:shadow-xl transition">
//               <Rocket className="h-10 w-10 text-primary mx-auto mb-4" />
//               <h3 className="font-semibold mb-2">Grow Online Presence</h3>
//               <p className="text-muted-foreground">
//                 Establish a strong digital presence with a scalable and future-ready website.
//               </p>
//             </div>

//             <div className="bg-card p-8 rounded-xl shadow-md border border-border hover:shadow-xl transition">
//               <Smartphone className="h-10 w-10 text-primary mx-auto mb-4" />
//               <h3 className="font-semibold mb-2">Mobile Responsive</h3>
//               <p className="text-muted-foreground">
//                 Reach customers on every device with responsive and optimized layouts.
//               </p>
//             </div>

//             <div className="bg-card p-8 rounded-xl shadow-md border border-border hover:shadow-xl transition">
//               <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
//               <h3 className="font-semibold mb-2">Secure & SEO Ready</h3>
//               <p className="text-muted-foreground">
//                 Built with strong security and SEO structure to rank higher on search engines.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SERVICES */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="container mx-auto max-w-6xl">
//           <h2 className="font-display text-4xl font-bold mb-12 text-center">
//             Our WordPress Services
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="group bg-card p-6 rounded-xl shadow-md border border-border 
//                 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
//               >
//                 <div className="mb-4 p-3 w-fit rounded-lg bg-primary/10 group-hover:bg-primary/20 transition mx-auto">
//                   {service.icon}
//                 </div>

//                 <h3 className="font-semibold text-lg leading-snug text-center">
//                   {service.title}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* TECHNOLOGIES */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
//         <div className="container mx-auto max-w-5xl text-center">
//           <h2 className="font-display text-4xl font-bold mb-8">
//             Technologies & Tools We Use
//           </h2>
//           <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
//             {Technologies.map((tech, index) => (
//               <span
//                 key={index}
//                 className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PROCESS */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="container mx-auto max-w-4xl text-center">
//           <h2 className="font-display text-4xl font-bold mb-10">
//             Our Development Process
//           </h2>

//           <div className="grid md:grid-cols-2 gap-6 text-left">
//             {process.map((step, index) => (
//               <div key={index} className="flex items-start gap-4">
//                 <Check className="h-6 w-6 text-primary mt-1" />
//                 <p className="font-medium">{step}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <QuoteSection
//         quote="Flexible, powerful WordPress solutions built to scale with your vision."
//       />

//       {/* Final CTA Button */}
//       <section className=" my-16 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
//         <div className="container mx-auto max-w-4xl text-center">
//           <h2 className="font-display text-4xl font-bold mb-6 text-primary-foreground">Ready to Build with WordPress?</h2>
//           <p className="text-xl text-primary-foreground/90 mb-8">
//             Get a free consultation for your WordPress development needs.
//           </p>
//           <Button size="lg" variant="secondary" className="rounded-full px-8" onClick={() => window.open("https://wa.me/919589581364", "_blank")}>
//             Get Free Consultation
//           </Button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default WordPressDevelopment;




import { Button } from "@/components/ui/button";
import QuoteSection from "@/components/ui/QuoteSection";
import {
  Building2, Code2, Gauge, Palette,
  Puzzle, Rocket, ShieldCheck, ShoppingCart,
  Smartphone, ArrowRight, Search,
  Users
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const WordPressDevelopment = () => {
  const navigate = useNavigate();

  /* ================= DATA ================= */
  const services = [
    { title: "Custom WordPress Development", icon: <Code2 />, desc: "High-performance, bespoke site architecture." },
    { title: "Theme Customization", icon: <Palette />, desc: "Tailored visual identities that convert." },
    { title: "Plugin Engineering", icon: <Puzzle />, desc: "Custom features and third-party integrations." },
    { title: "WooCommerce Solutions", icon: <ShoppingCart />, desc: "Scalable digital storefronts and gateways." },
    { title: "Enterprise Websites", icon: <Building2 />, desc: "Professional portals for corporate growth." },
    { title: "Speed & Performance", icon: <Gauge />, desc: "Core Web Vitals and caching optimization." },
  ];

  const whyChooseUs = [
    { title: "Experienced Developers", desc: "Expert professionals with hands-on CMS mastery.", icon: <Users className="w-5 h-5" /> },
    { title: "Custom Theme Design", desc: "Bespoke visuals tailored to your unique brand.", icon: <Palette className="w-5 h-5" /> },
    { title: "Plugin Engineering", desc: "Seamless integration and custom logic building.", icon: <Puzzle className="w-5 h-5" /> },
    { title: "SEO-Ready Code", desc: "Optimized structure for maximum search visibility.", icon: <Search className="w-5 h-5" /> },
    { title: "Mobile-Responsive", desc: "Perfectly optimized for every modern device.", icon: <Smartphone className="w-5 h-5" /> },
    { title: "Performance First", desc: "Secure and speed-focused backend architecture.", icon: <Gauge className="w-5 h-5" /> },
    { title: "Transparent Support", desc: "Clear communication throughout the lifecycle.", icon: <ShieldCheck className="w-5 h-5" /> }
  ]

  const process = [
    { title: "Requirement Analysis", desc: "Defining technical goals and business roadmaps." },
    { title: "UI/UX & Prototyping", desc: "Crafting modern, user-centric mobile-first designs." },
    { title: "Development Phase", desc: "Clean coding with PHP, MySQL, and modern CSS." },
    { title: "QA & Optimization", desc: "Rigorous security audits and speed testing." },
    { title: "Launch & Support", desc: "Seamless deployment with post-launch care." },
  ];

  const technologies = [
    "WordPress CMS", "PHP", "MySQL", "WooCommerce",
    "Elementor Pro", "Yoast SEO", "HTML5 / CSS3", "JavaScript",
    "Rest APIs", "WPBakery", "RankMath", "WP Rocket"
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-44 pb-32 px-4 overflow-hidden bg-gradient-to-br from-secondary/60 to-accent/35">
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
        {/* Animated Background Pattern */}
        {/* <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://img.freepik.com/premium-vector/web-development-concept-with-plexus-background-seo-website-app-design-digital-network-design_618588-1215.jpg')] bg-cover bg-center"></div> */}
        

        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 text-black leading-[1.1]">
              Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent italic">Scalable Foundations</span> with WordPress
            </h1>

            <p className="text-lg sm:text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed italic">
              We engineer high-performance, secure, and fully customizable WordPress ecosystems tailored to convert visitors into loyal customers.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="rounded-full px-10 h-16 text-lg shadow-2xl hover:scale-105 transition-transform"
                onClick={() => navigate("/contact")}
              >
                Launch Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 px-4 bg-muted/50 border-y border-border overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Column: Narrative & Visual Context */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 border border-primary/20 uppercase tracking-widest">
                <ShieldCheck className="w-3 h-3" />
                Top-Tier Engineering
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Why Choose <span className="text-primary">Sociobhaarat</span> for WordPress?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We combine creative design, technical expertise, and strategic planning to deliver WordPress websites that are fast, secure, SEO-friendly, and easy to manage.
                We don't just build sites; we build digital assets that scale with your business goals.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-background rounded-2xl border border-border shadow-sm">
                  <div className="text-3xl font-black text-primary">500+</div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Successful Projects</p>
                </div>
                <div className="p-4 bg-background rounded-2xl border border-border shadow-sm">
                  <div className="text-3xl font-black text-secondary">98%</div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Interactive Value Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid gap-4"
            >
              {whyChooseUs.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-5 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/40 hover:shadow-lg transition-all group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-[11px] text-muted-foreground leading-relaxed italic">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= WHY WORDPRESS ================= */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-16 text-center italic">Why Your Brand Needs WordPress</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Digital Dominance", icon: <Rocket />, desc: "Establish a future-ready presence with a highly scalable platform." },
              { title: "Edge Performance", icon: <Smartphone />, desc: "Responsive layouts optimized for every screen size and device." },
              { title: "SEO Authority", icon: <Search />, desc: "Built-in technical SEO structures to dominate search engine rankings." }
            ].map((box, i) => (
              <div key={i} className="bg-card p-10 rounded-[3rem] border border-border/50 shadow-sm hover:shadow-2xl transition-all group">
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform">{box.icon}</div>
                <h3 className="text-2xl font-bold mb-4 italic">{box.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICE GRID ================= */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Core Service Suite</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-[2rem] bg-card border border-border/60 hover:border-primary/40 transition-all duration-300 shadow-sm"
              >
                <div className="mb-6 p-4 w-fit rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECH STACK BENTO ================= */}
      <section className="py-24 px-4 bg-background border-y border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 italic tracking-tight">The WordPress Tech Stack</h2>
            <div className="h-1.5 w-24 bg-primary rounded-full mx-auto" />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
                className="px-6 py-3 bg-card border border-border rounded-2xl text-sm font-bold shadow-sm transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS PATH ================= */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center tracking-tight italic">Our Roadmap to Launch</h2>

          <div className="relative">
            {/* Center Path line */}
            <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-[2px] bg-primary/20 rounded-full" />

            <div className="space-y-20 relative z-10">
              {process.map((step, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="md:w-1/2"
                  >
                    <div className="bg-card p-10 rounded-[3rem] shadow-sm border border-border group hover:border-primary/30 transition-all">
                      <span className="text-5xl font-black text-primary/10 group-hover:text-primary/20 transition-colors uppercase italic select-none block mb-4">
                        Phase 0{index + 1}
                      </span>
                      <h3 className="font-bold text-2xl mb-4 tracking-tight">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed italic">{step.desc}</p>
                    </div>
                  </motion.div>

                  <div className="flex-shrink-0 relative">
                    <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-black text-xl shadow-xl z-20">
                      {index + 1}
                    </div>
                  </div>

                  <div className="md:w-1/2 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <QuoteSection quote="Flexible, powerful WordPress solutions built to scale with your vision and business goals." />

      {/* ================= FINAL CTA ================= */}
      <section className="my-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-primary to-indigo-900 p-12 md:p-24 text-center rounded-[4rem] shadow-2xl relative overflow-hidden text-white border-none">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <Code2 className="w-64 h-64 rotate-12" />
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 italic tracking-tight">Ready to Innovate with WordPress?</h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join 500+ brands powered by SocioBhaarat engineering. Let's start your technical consultation today.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full h-16 px-12 text-xl font-bold shadow-xl hover:scale-105 transition-all"
              onClick={() => window.open("https://wa.me/919589581364", "_blank")}
            >
              Start Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WordPressDevelopment;
