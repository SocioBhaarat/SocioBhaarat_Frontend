// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { motion } from "framer-motion";
// import {
//   CheckCircle,
//   Shield,
//   Zap,
//   Phone,
//   BadgeCheck,
//   Users
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const NumberVerification = () => {
//   const navigate = useNavigate();

// /* ================= HERO DATA ================= */

// const heroData = {
//   heading: "Accurate WhatsApp Number & Profile Verification for Businesses",
//   subtext:
//     "Ensure your marketing campaigns reach real and active users with our reliable WhatsApp number and name verification services. Improve delivery rates, reduce bounce rates, and maintain a clean customer database.",
//   cta: "Start Verification"
// };

// /* ================= WHY CHOOSE US ================= */

// const whyChooseIntro =
//   "We provide secure, fast, and accurate WhatsApp verification solutions that help businesses validate contacts before launching campaigns.";

// const whyChoosePoints = [
//   "Real-Time WhatsApp Number Verification",
//   "Accurate Name & Profile Validation",
//   "Bulk Database Verification",
//   "High Accuracy & Fast Processing",
//   "Secure & Confidential Data Handling",
//   "API Integration Available"
// ];

// /* ================= WHY YOU NEED ================= */

// const whyNeedIntro =
//   "Sending campaigns to invalid or inactive numbers wastes time and money. Verifying WhatsApp numbers ensures higher delivery rates, better engagement, and improved campaign ROI.";

// const whyNeedPoints = [
//   "Improve Message Delivery Rate",
//   "Reduce Campaign Costs",
//   "Remove Invalid or Inactive Numbers",
//   "Increase Engagement & Conversion",
//   "Maintain Clean CRM Database",
//   "Boost Marketing Performance"
// ];

// /* ================= SERVICES ================= */

// const services = [
//   "Bulk WhatsApp Number Verification",
//   "Individual Number Validation",
//   "Name & Profile Data Matching",
//   "Database Cleaning & Filtering",
//   "API-Based Verification Solutions",
//   "CRM Integration Support",
//   "Real-Time Status Reports",
//   "Detailed Verification Analytics",
//   "WhatsApp Campaign Automation",
//   "Chatbot Maintenance & Optimization"
// ];

// /* ================= FEATURES (UNCHANGED DESIGN) ================= */

// const features = [
//   {
//     icon: BadgeCheck,
//     title: "Official Business Verification",
//     description:
//       "Get your WhatsApp Business account officially verified with the green tick",
//     benefits: [
//       "Verified Badge",
//       "Increased Trust",
//       "Better Deliverability",
//       "Official Business Profile"
//     ]
//   },
//   {
//     icon: Shield,
//     title: "Custom Name Verification",
//     description: "Display your business name instead of phone number",
//     benefits: [
//       "Brand Recognition",
//       "Professional Appearance",
//       "Customer Confidence",
//       "Easy Identification"
//     ]
//   },
//   {
//     icon: Phone,
//     title: "Number Authentication",
//     description:
//       "Secure authentication and verification for your business number",
//     benefits: [
//       "Security Compliance",
//       "Account Protection",
//       "Identity Verification",
//       "API Access"
//     ]
//   },
//   {
//     icon: Users,
//     title: "Multi-User Access",
//     description:
//       "Enable multiple team members to use verified business account",
//     benefits: [
//       "Team Collaboration",
//       "Role Management",
//       "Activity Tracking",
//       "Centralized Control"
//     ]
//   }
// ];

// /* ================= VERIFICATION PROCESS (UNCHANGED DESIGN) ================= */

// const process = [
//   { step: "Documentation", description: "Submit required business documents" },
//   {
//     step: "Verification Request",
//     description: "We submit verification to WhatsApp"
//   },
//   {
//     step: "Review Process",
//     description: "WhatsApp reviews your application"
//   },
//   { step: "Approval", description: "Get verified badge and custom name" }
// ];

//   return (
//     <div className="min-h-screen bg-background">

//       {/* ================= HERO ================= */}
//       <section className="pt-10 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
//         <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">

//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//               Accurate <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
//                 WhatsApp Number & Profile Verification
//               </span> for Businesses
//             </h1>

//             <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
//               Ensure your marketing campaigns reach real and active users with our reliable WhatsApp number and name verification services. Improve delivery rates, reduce bounce rates.
//             </p>

//             <Button
//               size="sm"
//               className="rounded-full px-8 shadow-lg "
//               onClick={() => navigate("/contact")}
//             >
//               Start Verification
//             </Button>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             className="flex justify-center"
//           >
//             <img
//               src="https://img.freepik.com/free-vector/identity-verification-concept-illustration_114360-5580.jpg"
//               alt="Number Verification"
//               className="rounded-2xl shadow-2xl"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* ================= WHY CHOOSE US ================= */}
//       <section className="py-20 px-4 bg-muted/30">
//         <div className="container mx-auto max-w-6xl text-center">
//           <h2 className="text-4xl font-bold mb-6">
//             Why Choose Sociobhaarat?
//           </h2>
//           <p className="text-muted-foreground max-w-3xl mx-auto mb-12">
//             {whyChooseIntro}
//           </p>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {whyChoosePoints.map((point, index) => (
//               <Card key={index} className="p-6 text-center">
//                 <CheckCircle className="h-6 w-6 text-primary mx-auto mb-3" />
//                 <p className="font-medium">{point}</p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= WHY YOU NEED ================= */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto max-w-6xl text-center">
//           <h2 className="text-4xl font-bold mb-6">
//             Why Do You Need WhatsApp Verification?
//           </h2>
//           <p className="text-muted-foreground max-w-3xl mx-auto mb-12">
//             {whyNeedIntro}
//           </p>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {whyNeedPoints.map((point, index) => (
//               <Card key={index} className="p-6 text-center">
//                 <CheckCircle className="h-6 w-6 text-secondary mx-auto mb-3" />
//                 <p className="font-medium">{point}</p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= SERVICES ================= */}
//       <section className="py-20 px-4 bg-muted/30">
//         <div className="container mx-auto max-w-6xl text-center">
//           <h2 className="text-4xl font-bold mb-12">Our Verification Services</h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {services.map((service, index) => (
//               <Card key={index} className="p-6 text-center">
//                 <Shield className="h-6 w-6 text-primary mx-auto mb-3" />
//                 <p className="font-medium">{service}</p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= FEATURES ================= */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto max-w-6xl">
//           <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
//             Features
//           </h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             {features.map((feature, index) => (
//               <Card
//                 key={index}
//                 className="p-8 hover:shadow-lg transition-shadow"
//               >
//                 <feature.icon className="h-12 w-12 text-primary mb-4" />
//                 <h3 className="text-2xl font-bold mb-3">
//                   {feature.title}
//                 </h3>
//                 <p className="text-muted-foreground mb-4">
//                   {feature.description}
//                 </p>

//                 <ul className="space-y-2">
//                   {feature.benefits.map((benefit, idx) => (
//                     <li
//                       key={idx}
//                       className="flex items-center text-sm"
//                     >
//                       <CheckCircle className="h-4 w-4 text-secondary mr-2" />
//                       {benefit}
//                     </li>
//                   ))}
//                 </ul>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= VERIFICATION PROCESS ================= */}
//       <section className="py-20 px-4 bg-muted/30">
//         <div className="container mx-auto max-w-6xl">
//           <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
//             Verification Process
//           </h2>

//           <div className="grid md:grid-cols-4 gap-6">
//             {process.map((item, index) => (
//               <Card key={index} className="p-6 text-center">
//                 <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
//                   {index + 1}
//                 </div>

//                 <h3 className="text-xl font-bold mb-2">
//                   {item.step}
//                 </h3>

//                 <p className="text-muted-foreground text-sm">
//                   {item.description}
//                 </p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto max-w-6xl">
//           <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-12 text-center">
//             <Zap className="h-16 w-16 mx-auto mb-6" />
//             <h2 className="text-3xl font-bold mb-4">
//               Get Verified Today!
//             </h2>
//             <p className="text-lg mb-8 opacity-90">
//               Join thousands of verified businesses on WhatsApp
//             </p>

//             <Button
//               size="lg"
//               variant="secondary"
//               onClick={() => navigate("/contact")}
//             >
//               Start Verification Process
//             </Button>
//           </Card>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default NumberVerification;




import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  CheckCircle, Shield, Zap, Phone, BadgeCheck, Users,
  SearchCheck, Database, FileCheck, BarChart4, ArrowRight, Lock,
  Settings2,
  Code2,
  Layers,
  Rocket
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const NumberVerification = () => {
  const navigate = useNavigate();

  /* ================= DATA ================= */
  const whyChoosePoints = [
    { title: "Real-Time Verification", icon: <Zap /> },
    { title: "Profile Validation", icon: <BadgeCheck /> },
    { title: "Bulk Processing", icon: <Database /> },
    { title: "High Accuracy", icon: <CheckCircle /> },
    { title: "Confidential Data", icon: <Lock /> },
    { title: "Full API Support", icon: <BarChart4 /> },
  ];

  const processSteps = [
    { step: "Documentation", desc: "Submit business details" },
    { step: "Request", desc: "Official submission to WhatsApp" },
    { step: "Review", desc: "WhatsApp platform audit" },
    { step: "Approval", desc: "Green tick & custom name" }
  ];

  /* ================= SERVICES ================= */

  const services = [
    { name: "Bulk Number Verification", icon: <Database className="w-6 h-6" />, desc: "High-speed auditing for lists up to 1M+ contacts." },
    { name: "Individual Validation", icon: <SearchCheck className="w-6 h-6" />, desc: "Real-time single entry checks for instant feedback." },
    { name: "Profile Data Matching", icon: <Users className="w-6 h-6" />, desc: "Cross-reference names and profile photos automatically." },
    { name: "Database Filtering", icon: <Shield className="w-6 h-6" />, desc: "Remove dead leads and non-WhatsApp numbers." },
    { name: "API-Based Solutions", icon: <Code2 className="w-6 h-6" />, desc: "Seamlessly integrate verification into your own app." },
    { name: "CRM Sync Support", icon: <Layers className="w-6 h-6" />, desc: "Direct connectors for Salesforce, Hubspot, and more." },
    { name: "Live Status Reports", icon: <BarChart4 className="w-6 h-6" />, desc: "Downloadable PDF/CSV reports with delivery metrics." },
    { name: "Campaign Automation", icon: <Rocket className="w-6 h-6" />, desc: "Verify and launch in one single automated workflow." },
    { name: "Optimization Audit", icon: <Settings2 className="w-6 h-6" />, desc: "Monthly cleanup to maintain high sender reputation." },
  ]

  /* ================= FEATURES (UNCHANGED DESIGN) ================= */

  const features = [
    {
      icon: BadgeCheck,
      title: "Official Business Verification",
      description:
        "Get your WhatsApp Business account officially verified with the green tick",
      benefits: [
        "Verified Badge",
        "Increased Trust",
        "Better Deliverability",
        "Official Business Profile"
      ]
    },
    {
      icon: Shield,
      title: "Custom Name Verification",
      description: "Display your business name instead of phone number",
      benefits: [
        "Brand Recognition",
        "Professional Appearance",
        "Customer Confidence",
        "Easy Identification"
      ]
    },
    {
      icon: Phone,
      title: "Number Authentication",
      description:
        "Secure authentication and verification for your business number",
      benefits: [
        "Security Compliance",
        "Account Protection",
        "Identity Verification",
        "API Access"
      ]
    },
    {
      icon: Users,
      title: "Multi-User Access",
      description:
        "Enable multiple team members to use verified business account",
      benefits: [
        "Team Collaboration",
        "Role Management",
        "Activity Tracking",
        "Centralized Control"
      ]
    }
  ];


  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 border border-primary/20 uppercase tracking-widest">
                <Shield className="w-3 h-3" />
                Enterprise Grade Validation
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                Accurate <span className="text-primary italic">Verification</span> for WhatsApp
              </h1>

              <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-lg">
                Ensure your marketing campaigns reach real, active users. Reduce bounce rates by 99% and maintain a high-trust customer database with official green-tick support.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-10 h-14 shadow-2xl shadow-primary/20 text-lg hover:scale-105 transition-transform"
                  onClick={() => navigate("/contact")}
                >
                  Start Verification Now
                </Button>
                <div className="flex -space-x-3 items-center ml-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold">✓</div>
                  ))}
                  <span className="pl-6 text-sm font-medium text-muted-foreground">Used by 500+ Brands</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
              <img
                src="https://img.freepik.com/free-vector/identity-verification-concept-illustration_114360-5580.jpg"
                alt="Verification Process"
                className="relative rounded-[2.5rem] shadow-2xl border border-white/10 group-hover:translate-y-[-10px] transition-transform duration-500"
              />
              {/* Floating Verification Badge UI */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <BadgeCheck />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-muted-foreground">Status</p>
                  <p className="font-bold">Verified User</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US (Technical Grid) ================= */}
      <section className="py-24 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">The Sociobhaarat Edge</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePoints.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-card p-8 rounded-3xl border border-border/50 hover:border-primary transition-all flex flex-col items-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Fast-track your business growth with our secure validation engine.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY YOU NEED (Metric-Style) ================= */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">Why Verification Matters?</h2>
              <p className="text-lg text-muted-foreground">
                Sending campaigns to invalid numbers isn't just a waste of money—it risks your official WhatsApp API standing.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-4 border-l-4 border-primary bg-primary/5">
                  <p className="text-2xl font-bold">99.9%</p>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Accuracy Rate</p>
                </div>
                <div className="p-4 border-l-4 border-secondary bg-secondary/5">
                  <p className="text-2xl font-bold">0.1s</p>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Validation Speed</p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Improve Delivery", icon: <CheckCircle className="text-green-500" /> },
                { label: "Reduce Cost", icon: <CheckCircle className="text-green-500" /> },
                { label: "Maintain CRM", icon: <CheckCircle className="text-green-500" /> },
                { label: "Boost ROI", icon: <CheckCircle className="text-green-500" /> }
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3 p-6 rounded-2xl bg-card border border-border shadow-sm">
                  {point.icon}
                  <span className="font-bold text-sm">{point.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= ENHANCED SERVICES SECTION ================= */}
      <section className="py-24 px-4 bg-muted/30 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 border border-primary/20"
            >
              <Zap className="w-3 h-3" />
              <span>PRO-GRADE TOOLS</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Verification Suite</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Precision-engineered tools to audit, clean, and verify your global WhatsApp databases in seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Dynamic Service Mapping with Specific Icons */}
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-[2rem] bg-card border border-border/50 hover:border-primary/40 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-hidden"
              >
                {/* Accent Glow */}
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />

                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-secondary/10 text-secondary group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                    {service.icon}
                  </div>
                  <div className="text-[10px] font-bold text-muted-foreground/50 tracking-widest uppercase">
                    Service 0{index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                <div className="flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold">Platform Capabilities</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="p-10 h-full rounded-[2.5rem] bg-card hover:shadow-2xl hover:shadow-primary/5 transition-all border-border/50">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="p-4 rounded-3xl bg-primary/10 text-primary">
                      <feature.icon className="h-10 w-10" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 pt-4 border-t border-border/50">
                        {feature.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm font-semibold italic text-foreground/70">
                            <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= ENHANCED VERIFICATION ROADMAP ================= */}
      <section className="py-24 px-4 bg-muted/30 relative overflow-hidden">
        {/* Decorative Background Accents */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold tracking-[0.2em] uppercase text-xs"
            >
              Step-by-Step Guide
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">The Roadmap to Green Tick</h2>
          </div>

          <div className="relative">
            {/* Central Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary/10 via-primary to-primary/10 -z-10" />

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Step Card */}
                  <div className="bg-card border border-border/60 rounded-[2.5rem] p-8 text-center transition-all duration-500 hover:border-primary/50 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] group-hover:-translate-y-2 relative z-10 overflow-hidden">

                    {/* Corner Number Decor */}
                    <div className="absolute -top-2 -right-2 text-6xl font-black text-primary/5 italic select-none">
                      0{index + 1}
                    </div>

                    {/* Icon / Number Circle */}
                    <div className="relative mb-8">
                      <div className="w-16 h-16 bg-background border-4 border-muted rounded-full flex items-center justify-center font-bold mx-auto transition-all duration-500 group-hover:border-primary group-hover:scale-110 shadow-xl">
                        {index === 3 ? (
                          <BadgeCheck className="w-8 h-8 text-[#25D366]" />
                        ) : (
                          <span className="text-xl">{index + 1}</span>
                        )}
                      </div>

                      {/* Connection Dots (Mobile) */}
                      <div className="md:hidden w-px h-8 bg-dashed border-l border-primary/30 mx-auto mt-4" />
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {item.step}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    {/* Status Badge Mockup */}
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter ${index === 3 ? 'bg-green-500/10 text-green-500' : 'bg-secondary/10 text-secondary'
                      }`}>
                      <div className={`h-1.5 w-1.5 rounded-full animate-pulse ${index === 3 ? 'bg-green-500' : 'bg-secondary'
                        }`} />
                      {index === 3 ? 'Final Approval' : 'Standard Phase'}
                    </div>
                  </div>

                  {/* Hover Shadow Glow */}
                  <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity -z-20" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <Card className="bg-gradient-to-br from-[#121212] to-primary p-12 md:p-20 text-center relative overflow-hidden border-none text-white rounded-[3rem]">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"
            />

            <div className="relative z-10 space-y-8">
              <SearchCheck className="h-16 w-16 mx-auto text-white animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Ready to Verify Your Assets?
              </h2>
              <p className="text-lg opacity-80 max-w-xl mx-auto">
                Stop guessing and start validating. Join thousands of brands cleaning their databases today.
              </p>
              <div className="flex justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full h-16 px-12 text-lg font-bold hover:scale-105 transition-transform"
                  onClick={() => navigate("/contact")}
                >
                  Start Verification Process <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default NumberVerification;