// import { Button } from "@/components/ui/button";
// import { Check, Bot, MessageCircle, Zap, Shield, BarChart3, TrendingUp, Users } from "lucide-react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { Card } from "@/components/ui/card";

// const WhatsAppChatbot = () => {
//   const navigate = useNavigate();

//   /* ================= DATA ================= */

//   const heroData = {
//     heading: "Automate Customer Engagement with Smart WhatsApp Chatbots",
//     subtext:
//       "We design and develop intelligent WhatsApp chatbots that automate customer communication, generate leads, handle queries instantly, and boost conversions — all within the world’s most popular messaging platform.",
//     cta: "Get Free Consultation",
//   };

//   const socialLogos = [
//     "https://cdn-icons-png.flaticon.com/512/733/733585.png", // WhatsApp
//     "https://cdn-icons-png.flaticon.com/512/733/733547.png", // Facebook
//     "https://cdn-icons-png.flaticon.com/512/733/733558.png", // Instagram
//     "https://cdn-icons-png.flaticon.com/512/5968/5968764.png", // API/Meta style
//   ];

//   const whyChooseIntro =
//     "We combine automation, AI-driven workflows, and marketing strategy to create powerful WhatsApp chatbot solutions that enhance customer experience and increase sales.";

//   const whyChoosePoints = [
//     "Custom Chatbot Development",
//     "Automated Lead Generation",
//     "24/7 Instant Customer Support",
//     "WhatsApp Business API Integration",
//     "CRM & Payment Gateway Integration",
//     "Real-Time Analytics & Reporting",
//   ];

// const whyNeedIntro =
//   "Customers expect instant responses and seamless communication. A WhatsApp chatbot helps you automate conversations, nurture leads, and provide round-the-clock assistance without increasing operational costs.";

// const whyNeedPoints = [
//   "Instant Automated Responses",
//   "Improved Customer Engagement",
//   "Higher Lead Conversion Rate",
//   "Reduced Manual Workload",
//   "Personalized Marketing Campaigns",
//   "Faster Customer Support",
// ];

// const services = [
//   "Custom Chatbot Flow Design",
//   "Lead Capture & Qualification Bots",
//   "E-commerce Chatbot Integration",
//   "Booking & Appointment Bot",
//   "Automated FAQ & Support Bots",
//   "Payment & Order Tracking Integration",
//   "WhatsApp Campaign Automation",
//   "Chatbot Maintenance & Optimization",
// ];

//   const developmentProcess = [
//     "Business Requirement Analysis",
//     "Chatbot Strategy & Flow Planning",
//     "UI/Conversation Design",
//     "API & System Integration",
//     "Testing & Deployment",
//     "Performance Monitoring & Optimization",
//   ];

//   const features = [
//     {
//       icon: MessageCircle,
//       title: "24/7 Automated Responses",
//       description: "Never miss a customer query with round-the-clock automated support",
//       benefits: ["Instant Replies", "Multi-language Support", "Smart Routing", "Context Awareness"]
//     },
//     {
//       icon: Users,
//       title: "Customer Engagement",
//       description: "Engage customers with personalized conversations",
//       benefits: ["Personalized Greetings", "Product Recommendations", "Order Updates", "FAQ Automation"]
//     },
//     {
//       icon: Zap,
//       title: "Lead Generation",
//       description: "Capture and qualify leads automatically through WhatsApp",
//       benefits: ["Lead Capture Forms", "Qualification Questions", "CRM Integration", "Auto Follow-ups"]
//     },
//     {
//       icon: TrendingUp,
//       title: "Sales Automation",
//       description: "Automate your sales process and close deals faster",
//       benefits: ["Product Catalogs", "Order Booking", "Payment Links", "Upselling"]
//     }
//   ];

//   /* ================= UI ================= */

//   return (
//     <div className="min-h-screen bg-background overflow-hidden">

//       {/* ================= HERO ================= */}
//       <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
//         <div className="container mx-auto max-w-6xl text-center">

//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
//           >
//             {heroData.heading.split("Smart")[0]}
//             <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
//                 Smart Bulk Broadcasting
//               </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8"
//           >
//             {heroData.subtext}
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             <Button
//               size="lg"
//               className="rounded-full px-8 shadow-lg"
//               onClick={() => navigate("/contact")}
//             >
//               {heroData.cta}
//             </Button>
//           </motion.div>

//           {/* Social Logos */}
//           <div className="flex justify-center gap-6 mt-12">
//             {socialLogos.map((logo, index) => (
//               <motion.img
//                 key={index}
//                 src={logo}
//                 alt="Social"
//                 whileHover={{ scale: 1.1 }}
//                 className="h-10 w-10 opacity-80 hover:opacity-100 transition"
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= WHY CHOOSE US ================= */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
//         <div className="container mx-auto max-w-6xl text-center">
//           <h2 className="text-4xl font-bold mb-6">
//             Why Sociobhaarat for WhatsApp Chatbots?
//           </h2>
//           <p className="text-muted-foreground max-w-3xl mx-auto mb-12">
//             {whyChooseIntro}
//           </p>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {whyChoosePoints.map((point, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ y: -6 }}
//                 className="bg-card p-6 rounded-2xl shadow-md border border-border hover:shadow-xl transition-all"
//               >
//                 <Zap className="h-8 w-8 text-primary mb-4 mx-auto" />
//                 <h3 className="font-semibold">{point}</h3>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

// {/* ================= WHY YOU NEED ================= */}
// <section className="py-20 px-4 sm:px-6 lg:px-8">
//   <div className="container mx-auto max-w-6xl text-center">
//     <h2 className="text-4xl font-bold mb-6">
//       Why Do You Need WhatsApp Chatbots?
//     </h2>
//     <p className="text-muted-foreground max-w-3xl mx-auto mb-12">
//       {whyNeedIntro}
//     </p>

//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {whyNeedPoints.map((point, index) => (
//         <motion.div
//           key={index}
//           whileHover={{ scale: 1.03 }}
//           className="bg-card p-6 rounded-2xl shadow-md border border-border"
//         >
//           <MessageCircle className="h-8 w-8 text-secondary mb-4 mx-auto" />
//           <h3 className="font-semibold">{point}</h3>
//         </motion.div>
//       ))}
//     </div>
//   </div>
// </section>

//       {/* ================= OUR SERVICES (SAME CARD STYLE) ================= */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
//         <div className="container mx-auto max-w-6xl text-center">
//           <h2 className="text-4xl font-bold mb-12">
//             Our WhatsApp Chatbot Services
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ y: -6 }}
//                 className="bg-card p-6 rounded-2xl shadow-md border border-border hover:shadow-xl transition-all"
//               >
//                 <Bot className="h-8 w-8 text-primary mb-4 mx-auto" />
//                 <h3 className="font-semibold">{service}</h3>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= DEVELOPMENT PROCESS ================= */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="container mx-auto max-w-6xl text-center">
//           <h2 className="text-4xl font-bold mb-12">Our Development Process</h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {developmentProcess.map((step, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.04 }}
//                 className="bg-card p-6 rounded-2xl shadow-md border border-border"
//               >
//                 <BarChart3 className="h-8 w-8 text-accent mb-4 mx-auto" />
//                 <h3 className="font-semibold">{step}</h3>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/*FEATURES */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
//         <div className="container mx-auto max-w-6xl">
//           <h2 className="text-4xl font-bold mb-12 text-center">Powerful Features</h2>

//           <div className="grid md:grid-cols-2 gap-8 mb-16">
//             {features.map((feature, index) => (
//               <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
//                 <feature.icon className="h-12 w-12 text-primary mb-4" />
//                 <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
//                 <p className="text-muted-foreground mb-4">{feature.description}</p>
//                 <ul className="space-y-2">
//                   {feature.benefits.map((benefit, idx) => (
//                     <li key={idx} className="flex items-center text-sm">
//                       <Zap className="h-4 w-4 text-secondary mr-2" />
//                       {benefit}
//                     </li>
//                   ))}
//                 </ul>
//               </Card>
//             ))}
//           </div>

//         </div>
//       </section>
//       <Card className="bg-primary text-primary-foreground p-12 text-center">
//         <h2 className="text-3xl font-bold mb-4">Ready to Automate Your WhatsApp?</h2>
//         <p className="text-lg mb-8 opacity-90">Get a custom chatbot built specifically for your business needs</p>
//         <Button size="lg" variant="secondary" onClick={() => navigate("/contact")} >
//           Schedule a Demo
//         </Button>
//       </Card>
//     </div>
//   );
// };

// export default WhatsAppChatbot;



import { Button } from "@/components/ui/button";
import {
  Check, Bot, MessageCircle, Zap, Shield, BarChart3,
  TrendingUp, Users, Smartphone, Code2, Headphones,
  Settings2, Rocket, Search, MessageSquareCode
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";

const WhatsAppChatbot = () => {
  const navigate = useNavigate();

  /* ================= DATA ================= */
  const heroData = {
    heading: "Automate Customer Engagement with Smart WhatsApp Chatbots",
    subtext: "We design and develop intelligent WhatsApp chatbots that automate customer communication, generate leads, handle queries instantly, and boost conversions — all within the world’s most popular messaging platform.",
    cta: "Get Free Consultation",
  };

  const socialLogos = [
    { src: "https://cdn-icons-png.flaticon.com/512/733/733585.png", label: "WhatsApp" },
    { src: "https://cdn-icons-png.flaticon.com/512/733/733547.png", label: "Facebook" },
    { src: "https://cdn-icons-png.flaticon.com/512/733/733558.png", label: "Instagram" },
    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png", label: "Meta API" },
  ];

  const whyChoosePoints = [
    { title: "Custom Development", icon: <Code2 /> },
    { title: "Lead Generation", icon: <TrendingUp /> },
    { title: "24/7 Support", icon: <Headphones /> },
    { title: "Official API Access", icon: <Smartphone /> },
    { title: "Payment Integration", icon: <Zap /> },
    { title: "Deep Analytics", icon: <BarChart3 /> },
  ];

  const whyNeedIntro =
    "Customers expect instant responses and seamless communication. A WhatsApp chatbot helps you automate conversations, nurture leads, and provide round-the-clock assistance without increasing operational costs.";

  const whyNeedPoints = [
    "Instant Automated Responses",
    "Improved Customer Engagement",
    "Higher Lead Conversion Rate",
    "Reduced Manual Workload",
    "Personalized Marketing Campaigns",
    "Faster Customer Support",
  ];

  const services = [
    "Custom Chatbot Flow Design",
    "Lead Capture & Qualification Bots",
    "E-commerce Chatbot Integration",
    "Booking & Appointment Bot",
    "Automated FAQ & Support Bots",
    "Payment & Order Tracking Integration",
    "WhatsApp Campaign Automation",
    "Chatbot Maintenance & Optimization",
  ];

  const developmentProcess = [
    { title: "Requirement Analysis", icon: <Search /> },
    { title: "Strategy & Flow", icon: <MessageSquareCode /> },
    { title: "UI & Conversation", icon: <Users /> },
    { title: "API Integration", icon: <Settings2 /> },
    { title: "Testing & Launch", icon: <Rocket /> },
    { title: "Optimization", icon: <TrendingUp /> },
  ];

  const features = [
    {
      icon: MessageCircle,
      title: "24/7 Automated Responses",
      description: "Never miss a customer query with round-the-clock automated support",
      benefits: ["Instant Replies", "Multi-language Support", "Smart Routing"]
    },
    {
      icon: Users,
      title: "Customer Engagement",
      description: "Engage customers with personalized conversations",
      benefits: ["Product Recommendations", "Order Updates", "FAQ Automation"]
    },
    {
      icon: Zap,
      title: "Lead Generation",
      description: "Capture and qualify leads automatically through WhatsApp",
      benefits: ["Lead Capture Forms", "CRM Integration", "Auto Follow-ups"]
    },
    {
      icon: TrendingUp,
      title: "Sales Automation",
      description: "Automate your sales process and close deals faster",
      benefits: ["Product Catalogs", "Order Booking", "Payment Links"]
    }
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent">
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8"
          >
            <Bot className="w-4 h-4" />
            <span>AI-POWERED AUTOMATION</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]"
          >
            {heroData.heading.split("WhatsApp")[0]}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] to-primary">
              WhatsApp Chatbots
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {heroData.subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              className="rounded-full px-10 h-14 text-lg shadow-xl hover:scale-105 transition-transform"
              onClick={() => navigate("/contact")}
            >
              {heroData.cta}
            </Button>
          </motion.div>

          {/* Partner/Social Trust Bar */}
          <div className="mt-20 border-t border-border pt-12">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8 font-bold">Integrated Across Ecosystems</p>
            <div className="flex justify-center items-center gap-8 md:gap-16 grayscale opacity-60 hover:grayscale-0 transition-all">
              {socialLogos.map((logo, index) => (
                <img key={index} src={logo.src} alt={logo.label} className="h-8 md:h-10 w-auto" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US (Sleek Grid) ================= */}
      <section className="py-24 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for Scale & Performance</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">We don't just build bots; we build conversational experiences that drive revenue.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoosePoints.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-card p-8 rounded-[2rem] border border-border/50 hover:border-primary/50 transition-all group shadow-sm hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Seamlessly integrated into your existing business workflow for maximum efficiency.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= WHY YOU NEED IT (Enhanced) ================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background">
        {/* Decorative Background Element */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#25D366]/5 blur-[120px] rounded-full -z-10" />

        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Column: Visual Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-[#25D366]/20 to-primary/10 rounded-[2.5rem] blur-xl opacity-50 -z-10" />
              <div className="bg-card border border-border p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                {/* Subtle watermark icon */}
                <MessageCircle className="absolute -right-8 -bottom-8 w-40 h-40 text-secondary/5 rotate-12" />

                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <div className="h-10 w-1 bg-secondary rounded-full" />
                  Key Business Benefits
                </h3>

                <div className="space-y-6">
                  {whyNeedPoints.slice(0, 4).map((point, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                        <Check className="w-6 h-6" strokeWidth={3} />
                      </div>
                      <span className="text-lg font-semibold">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Narrative Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider">
                <Zap className="w-4 h-4" />
                <span>Efficiency at Scale</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Why Do You Need <br />
                <span className="text-secondary">WhatsApp Chatbots?</span>
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {whyNeedIntro}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {whyNeedPoints.slice(4).map((point, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="h-1 w-12 bg-border group-hover:bg-primary transition-colors" />
                    <span className="font-bold text-sm uppercase tracking-tighter opacity-80">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <Button
                  variant="outline"
                  className="rounded-full px-8 border-2 hover:bg-primary hover:text-white transition-all"
                  onClick={() => navigate("/contact")}
                >
                  Explore Use Cases
                </Button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ================= OUR SERVICES (Spotlight Layout) ================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Our WhatsApp Chatbot Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                From simple FAQs to complex e-commerce automation, we build bots that handle the heavy lifting while you focus on growth.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-secondary/20 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-secondary" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, backgroundColor: "hsl(var(--card))" }}
                className="group relative p-8 rounded-[2rem] bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Background Glow on Hover */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />

                <div className="relative z-10">
                  <div className="mb-6 inline-flex p-3 rounded-xl bg-background border border-border group-hover:text-primary group-hover:border-primary/50 transition-all shadow-sm">
                    <Bot className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                    {service}
                  </h3>
                </div>

                <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                  <span>Details</span>
                  <div className="ml-2 h-[1px] w-0 group-hover:w-8 bg-primary transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES (Detailed View) ================= */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight">Powerful Capabilities</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full rounded-[2.5rem] border-2 border-transparent hover:border-primary/20 transition-all bg-gradient-to-br from-card to-background overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <feature.icon className="w-32 h-32" />
                  </div>

                  <feature.icon className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">{feature.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm font-medium">
                        <div className="h-2 w-2 rounded-full bg-secondary" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS (The Timeline) ================= */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Our Development Journey</h2>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {developmentProcess.map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 w-full md:text-right">
                    <div className={index % 2 === 0 ? 'md:text-left' : 'md:text-right'}>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">Strategy tailored to ensure your bot speaks your brand's voice perfectly.</p>
                    </div>
                  </div>

                  <div className="z-10 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg shadow-primary/30">
                    {index + 1}
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-[#25D366] text-white p-12 md:p-20 text-center rounded-[3rem] shadow-2xl relative overflow-hidden border-none">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready to Automate?</h2>
              <p className="text-xl mb-10 opacity-90 font-medium">Get a custom chatbot built specifically for your business needs.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="secondary" className="rounded-full h-14 px-10 text-lg font-bold" onClick={() => navigate("/contact")}>
                  Schedule a Demo
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-14 px-10 text-lg border-2 bg-transparent hover:bg-white hover:text-[#25D366]">
                  Contact Sales
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

    </div>
  );
};

export default WhatsAppChatbot;