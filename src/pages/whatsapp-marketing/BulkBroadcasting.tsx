// import { Button } from "@/components/ui/button";
// import { Check, Zap, Shield, BarChart3, Target, MessageSquare } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const BulkBroadcasting = () => {
//   const navigate = useNavigate();

//   /* ================= DATA VARIABLES ================= */

//   const heroData = {
//     heading: "Reach Thousands Instantly with Smart Bulk Broadcasting",
//     subtext:
//       "We help businesses connect with their audience instantly through reliable, fast, and targeted bulk broadcasting services. Whether it’s promotions, updates, or alerts — deliver your message at scale with confidence.",
//     cta: "Start Broadcasting",
//     image:
//       "https://img.freepik.com/free-vector/bulk-sms-marketing-concept-illustration_114360-1884.jpg",
//   };

//   const whyChooseIntro =
//     "We combine advanced technology, strategic targeting, and real-time analytics to ensure your bulk messaging campaigns achieve maximum reach and engagement.";

//   const whyChoosePoints = [
//     "High Delivery Rate",
//     "Instant Message Broadcasting",
//     "Targeted Audience Segmentation",
//     "Secure & Compliant Messaging",
//     "Real-Time Campaign Tracking",
//     "Affordable & Scalable Solutions",
//   ];

//   const whyNeedIntro =
//     "Bulk broadcasting enables businesses to communicate quickly and effectively with large audiences. It is one of the fastest and most cost-effective ways to promote offers, send alerts, and maintain customer engagement.";

  // const whyNeedPoints = [
  //   "Instant Customer Communication",
  //   "Promote Offers & Discounts",
  //   "Send Transactional Alerts",
  //   "Increase Customer Engagement",
  //   "Improve Brand Awareness",
  //   "Cost-Effective Marketing Channel",
  // ];

//   const services = [
//     "Bulk SMS Marketing",
//     "WhatsApp Bulk Messaging",
//     "Email Broadcasting Campaigns",
//     "Promotional & Transactional SMS",
//     "OTP & Notification Services",
//     "API Integration for Messaging",
//     "Campaign Analytics & Reporting",
//     "Database Management & Segmentation",
//     "Analytics & Performance Reporting",
//     "Crisis Management & Reputation Monitoring",
//   ];

//   const features = [
//     "Send to unlimited contacts",
//     "Schedule messages",
//     "Rich media support (images, videos, PDFs)",
//     "Contact list management",
//     "Delivery reports",
//     "Personalized messages",
//   ];

//   /* ================= UI ================= */

//   return (
//     <div className="min-h-screen bg-background overflow-hidden">

//       {/* ================= HERO SECTION ================= */}
//       <section className="pt-10 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
//         <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">

//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//               {heroData.heading.split("Smart")[0]}
//               <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
//                 Smart Bulk Broadcasting
//               </span>
//             </h1>

//             <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
//               {heroData.subtext}
//             </p>

//             <Button
//               size="sm"
//               className="rounded-full px-8 shadow-lg"
//               onClick={() => navigate("/contact")}
//             >
//               {heroData.cta}
//             </Button>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             className="flex justify-center"
//           >
//             <img
//               src={heroData.image}
//               alt="Bulk Broadcasting"
//               className="rounded-2xl shadow-2xl"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* ================= WHY CHOOSE US ================= */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
//         <div className="container mx-auto max-w-6xl text-center">
//           <h2 className="text-4xl font-bold mb-6">Why Choose Sociobhaarat?</h2>
//           <p className="text-muted-foreground max-w-3xl mx-auto mb-12">
//             {whyChooseIntro}
//           </p>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {whyChoosePoints.map((point, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ y: -5 }}
//                 className="bg-card p-6 rounded-2xl shadow-md border border-border hover:shadow-xl transition-all"
//               >
//                 <Zap className="h-8 w-8 text-primary mb-4 mx-auto" />
//                 <h3 className="font-semibold text-lg">{point}</h3>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= WHY YOU NEED IT ================= */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="container mx-auto max-w-6xl text-center">
//           <h2 className="text-4xl font-bold mb-6">Why Do You Need Bulk Broadcasting?</h2>
//           <p className="text-muted-foreground max-w-3xl mx-auto mb-12">
//             {whyNeedIntro}
//           </p>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {whyNeedPoints.map((point, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.03 }}
//                 className="bg-card p-6 rounded-2xl shadow-md border border-border"
//               >
//                 <Target className="h-8 w-8 text-secondary mb-4 mx-auto" />
//                 <h3 className="font-semibold text-lg">{point}</h3>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= OUR SERVICES ================= */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
//         <div className="container mx-auto max-w-6xl text-center">
//           <h2 className="text-4xl font-bold mb-12">Our Bulk Messaging Services</h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ y: -6 }}
//                 className="bg-background p-6 rounded-2xl shadow-lg border border-border"
//               >
//                 <MessageSquare className="h-8 w-8 text-primary mb-4 mx-auto" />
//                 <h3 className="font-semibold">{service}</h3>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= FEATURES ================= */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="container mx-auto max-w-6xl text-center">
//           <h2 className="text-4xl font-bold mb-12">Powerful Features</h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-card p-6 rounded-2xl shadow-md border border-border"
//               >
//                 <Check className="h-8 w-8 text-primary mb-4 mx-auto" />
//                 <h3 className="font-semibold">{feature}</h3>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default BulkBroadcasting;



import { Button } from "@/components/ui/button";
import {
  Check, Zap, Shield, BarChart3, Target, MessageSquare,
  Send, Users, Bell, Globe, Smartphone, Mail, Key, Layers, Rocket
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const BulkBroadcasting = () => {
  const navigate = useNavigate();

  /* ================= DATA VARIABLES ================= */
  const heroData = {
    heading: "Reach Thousands Instantly with Smart Bulk Broadcasting",
    subtext:
      "We help businesses connect with their audience instantly through reliable, fast, and targeted bulk broadcasting services. Whether it’s promotions, updates, or alerts — deliver your message at scale with confidence.",
    cta: "Start Broadcasting Now",
    image: "https://img.freepik.com/free-vector/bulk-sms-marketing-concept-illustration_114360-1884.jpg",
  };

  const whyChoosePoints = [
    { title: "High Delivery Rate", icon: <Rocket className="w-6 h-6" /> },
    { title: "Instant Broadcasting", icon: <Zap className="w-6 h-6" /> },
    { title: "Smart Segmentation", icon: <Users className="w-6 h-6" /> },
    { title: "Secure & Compliant", icon: <Shield className="w-6 h-6" /> },
    { title: "Real-Time Tracking", icon: <BarChart3 className="w-6 h-6" /> },
    { title: "Scalable Solutions", icon: <Layers className="w-6 h-6" /> },
  ];

  const services = [
    { name: "Bulk SMS Marketing", icon: <Smartphone /> },
    { name: "WhatsApp Messaging", icon: <MessageSquare /> },
    { name: "Email Campaigns", icon: <Mail /> },
    { name: "Transactional SMS", icon: <Send /> },
    { name: "OTP Services", icon: <Key /> },
    { name: "API Integration", icon: <Globe /> },
  ];

  const whyNeedPoints = [
    "Instant Customer Communication",
    "Promote Offers & Discounts",
    "Send Transactional Alerts",
    "Increase Customer Engagement",
    "Improve Brand Awareness",
    "Cost-Effective Marketing Channel",
  ];

  const features = [
    "Unlimited Contacts",
    "Smart Scheduling",
    "Rich Media Support",
    "Contact Management",
    "Delivery Analytics",
    "Dynamic Personalization",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">

      {/* ================= HERO SECTION (Kept Structure) ================= */}
      <section className="relative pt-20 pb-24 px-4 overflow-hidden">
        {/* Animated Background Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[120px]" />
        </div>

        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-[1.1]">
              {heroData.heading.split("Smart")[0]}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-secondary">
                Smart Bulk Broadcasting
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
              {heroData.subtext}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="rounded-full px-10 h-14 text-lg font-semibold shadow-[0_10px_20px_-10px_rgba(var(--primary),0.5)] hover:scale-105 transition-transform"
                onClick={() => navigate("/contact")}
              >
                {heroData.cta}
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-10 border-2">
                View Pricing
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all opacity-50" />
            <img
              src={heroData.image}
              alt="Broadcasting Illustration"
              className="relative rounded-3xl shadow-2xl border border-white/10 hover:rotate-1 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US (Modern Grid) ================= */}
      <section className="py-24 px-4 bg-secondary/5 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Sociobhaarat?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We combine advanced technology and real-time analytics to ensure your campaigns achieve maximum engagement.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePoints.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="group p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300"
              >
                <div className="mb-5 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">Engineered for speed and reliability to keep your business growing.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY YOU NEED IT */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative Background Blob */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full -z-10" />

        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold tracking-widest uppercase text-sm"
            >
              Business Impact
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
              Why Do You Need Bulk Broadcasting?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Bulk broadcasting enables businesses to communicate quickly and effectively with large audiences. It is one of the fastest and most cost-effective ways to promote offers, send alerts, and maintain customer engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 items-center">
            {/* Visual Side (Left) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2rem] -z-10" />
              <div className="bg-card border border-border p-8 rounded-[2rem] shadow-2xl">
                <div className="space-y-6">
                  {whyNeedPoints.slice(0, 3).map((point, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                        <Target className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold">{point}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Narrative Side (Right) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                <Zap className="w-4 h-4" />
                <span>Speed to Market</span>
              </div>
              <h3 className="text-3xl font-bold leading-tight">
                Communicate at the speed of thought.
              </h3>
              <p className="text-muted-foreground text-lg">
                In a world of noise, being the first to reach your customer's inbox or phone is everything.
                Bulk broadcasting eliminates the lag between your idea and your customer's action.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {whyNeedPoints.slice(3).map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-primary/10 p-1 rounded-md">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES (Glassmorphism Cards) ================= */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-left">Our Specialized Services</h2>
              <p className="text-muted-foreground text-lg text-left">Powerful communication tools tailored for every business need.</p>
            </div>
            <Button variant="link" className="text-primary font-bold text-lg">Explore All Services →</Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-b from-card to-background border border-border hover:shadow-lg transition-all"
              >
                <div className="p-3 rounded-xl bg-secondary/10 text-secondary">
                  {service.icon}
                </div>
                <h3 className="font-bold text-lg">{service.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES (The Bento Section) ================= */}
      <section className="py-24 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-card border border-border rounded-[2.5rem] overflow-hidden p-8 md:p-16 relative">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <Target className="w-64 h-64" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center md:text-left">Powerful Features</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 bg-green-500/20 p-1 rounded-full text-green-600">
                      <Check className="h-5 w-5" strokeWidth={3} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">{feature}</h3>
                      <p className="text-muted-foreground text-sm">Optimize your workflow with our built-in intelligence.</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-10 border-t border-border flex flex-col md:flex-row items-center gap-8 justify-between">
                <p className="text-xl font-medium italic text-muted-foreground">"The most reliable broadcasting tool we've ever used."</p>
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-card bg-muted flex items-center justify-center text-[10px] font-bold">USER</div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-card bg-primary flex items-center justify-center text-[10px] text-white font-bold">+2k</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-4xl font-bold">Ready to Scale Your Growth?</h2>
          <p className="text-muted-foreground">Join 500+ businesses using Sociobhaarat to reach their customers daily.</p>
          <Button size="lg" className="rounded-full h-16 px-12 text-xl" onClick={() => navigate("/contact")}>
            Get Started for Free
          </Button>
        </motion.div>
      </section>

    </div>
  );
};

export default BulkBroadcasting;