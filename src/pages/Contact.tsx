import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, ArrowRight, MessageCircle, ShieldCheck, TrendingUp, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");

  const text = encodeURIComponent(
    `New Lead:
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Project: ${message}`
        );


  const url = `https://wa.me/?text=919407448837${text}`;

  window.open(url, "_blank");
};


  return (
    <>
      <SEO
        title="Looking for Best Digital Marketing and IT Company?- Get in Touch"
        description="Get in touch with us for digital marketing, IT solutions, and business growth strategies tailored to your needs."
        keywords="contact digital marketing company, contact marketing agency, business inquiry, marketing services in jabalpur"
        url="/contact"
      />
      <div className="min-h-screen bg-[#fafafa] relative overflow-hidden">

        <section className="relative pt-10 pb-16 overflow-hidden">
          {/* Background - Added overflow-x-hidden to prevent horizontal scroll */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]" />
            {/* Scaled down background orbs for mobile */}
            <div className="absolute top-0 right-0 w-64 h-64 md:w-[500px] md:h-[500px] bg-primary/5 blur-[80px] md:blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-0 left-0 w-48 h-48 md:w-[400px] md:h-[400px] bg-blue-500/[0.04] blur-[60px] md:blur-[100px] rounded-full" />
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Grid: 1 column on mobile, 2 on LG screens */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">

              {/* ── LEFT ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-6 md:gap-7"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] uppercase w-fit">
                  <Mail className="w-3 h-3" /> Communication Lab
                </div>

                {/* Heading: Responsive text sizes */}
                <div>
                  <h1 className="text-4xl md:text-5xl font-semibold text-slate-800 leading-[1.1] tracking-tighter mb-4">
                    Looking for  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium">Best Digital Marketing and IT Company?
                    </span> <br /> <div className="text-3xl md:text-4xl sm:pt-3 md:pt-5" >- Get in Touch</div>
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg text-slate-700 font-medium leading-relaxed border-l-4 border-primary/20 pl-4 sm:pl-5 py-1">
                    Have a project in mind? Let's architect a high-performance roadmap to
                    achieve your digital growth milestones.
                  </p>
                </div>

                {/* Why contact us list */}
                <div className="flex flex-col gap-2">
                  {[
                    { icon: Zap, text: "Response within 2 hours on business days" },
                    { icon: ShieldCheck, text: "Free initial consultation — no commitment" },
                    { icon: TrendingUp, text: "Custom strategy built for your goals" },
                    { icon: Users, text: "Dedicated account manager from day one" },
                  ].map((f, i) => (
                    <div
                      key={i}
                      className="group flex items-center gap-3 px-3 py-3 rounded-xl border border-transparent bg-white/60 hover:bg-white hover:border-primary/20 hover:shadow-sm transition-all duration-200 cursor-default"
                    >
                      <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                        <f.icon size={14} />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-800 group-hover:text-slate-900 transition-colors">
                        {f.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Availability strip */}
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-green-50 border border-green-200 w-fit">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-green-700">
                    Currently accepting new clients
                  </span>
                </div>
              </motion.div>

              {/* ── RIGHT — stacked cards ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col gap-3 w-full"
              >
                {/* Helper function for cards to reduce repetition and ensure consistency */}
                {[
                  {
                    href: "mailto:official@sociobhaarat.com",
                    icon: Mail,
                    label: "Email Us",
                    val: "official@sociobhaarat.com",
                    color: "primary",
                    border: "hover:border-primary/25",
                    grad: "from-primary to-blue-400"
                  },
                  {
                    href: "tel:+919589581364",
                    icon: Phone,
                    label: "Call Us",
                    val: "+91 95895 81364",
                    color: "orange-600",
                    border: "hover:border-orange-200",
                    grad: "from-orange-500 to-amber-400",
                    iconBg: "bg-orange-50",
                    hoverBg: "group-hover:bg-orange-500"
                  },
                  {
                    href: "https://wa.me/+919407448837 ",
                    icon: MessageCircle,
                    label: "WhatsApp",
                    val: "Chat with us instantly",
                    color: "green-600",
                    border: "hover:border-green-200",
                    grad: "from-green-500 to-emerald-400",
                    iconBg: "bg-green-50",
                    hoverBg: "group-hover:bg-green-500"
                  },
                ].map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.href}
                    whileHover={{ x: 4 }}
                    className={`group flex items-center gap-4 px-4 sm:px-6 py-4 sm:py-5 rounded-2xl bg-white border border-slate-100 ${item.border} transition-all duration-200 cursor-pointer overflow-hidden relative w-full`}
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 flex-shrink-0 ${item.iconBg || 'bg-primary/10'} ${item.hoverBg || 'group-hover:bg-primary'} ${item.iconBg ? 'text-' + item.color : 'text-primary'} group-hover:text-white`}>
                      <item.icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[.25em] text-slate-700 mb-0.5 italic">
                        {item.label}
                      </p>
                      <p className="text-sm sm:text-base font-semibold text-slate-900 truncate">
                        {item.val}
                      </p>
                    </div>
                    <ArrowRight size={16} className="text-slate-300 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
                    <div className={`absolute bottom-0 left-0 h-[2.5px] w-0 group-hover:w-full bg-gradient-to-r ${item.grad} transition-all duration-500`} />
                  </motion.a>
                ))}

                {/* Location Card - Special handling for multiline address */}
                <motion.a
                  href="https://maps.app.goo.gl/4J91yBhEtNHJ6EpV6"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="group flex items-start sm:items-center gap-4 px-4 sm:px-6 py-4 sm:py-5 rounded-2xl bg-white border border-slate-100 hover:border-violet-200 transition-all duration-200 cursor-pointer overflow-hidden relative w-full"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[.25em] text-slate-400 mb-0.5 italic">
                      Visit Us
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                      5th Floor, Muskan City, Ekta Chowk, Vijay Nagar, Jabalpur, MP 482001
                    </p>
                  </div>
                  <ArrowRight size={16} className="text-slate-300 self-center group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
                  <div className="absolute bottom-0 left-0 h-[2.5px] w-0 group-hover:w-full bg-gradient-to-r from-violet-600 to-purple-400 transition-all duration-500" />
                </motion.a>
              </motion.div>

            </div>
          </div>
        </section>

        <section className="py-12 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
          {/* Technical Background Design (Blueprint Grid) */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">

              {/* Narrative Side: Stacks on top for Mobile, Left for Desktop */}
              <div className="lg:col-span-5 space-y-8 md:sticky md:top-24">
                <div className="max-w-md border-l-4 border-primary pl-6 md:pl-8">
                  <h2 className="font-display text-3xl md:text-5xl font-bold text-slate-900 tracking-tighter mb-4 md:mb-6 leading-[0.95]">
                    Send Us a <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium">
                      Message
                    </span>
                  </h2>
                  <p className="text-base md:text-lg text-slate-500 leading-relaxed font-medium italic">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </div>

                {/* Headquarter Badge: Scaled for mobile touch */}
                <div className="p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-slate-50 shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:30px_30px] group-hover:bg-[size:20px_20px] transition-all duration-1000" />
                  <div className="relative z-10 space-y-2 md:space-y-4">
                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Regional Headquarter</p>
                    <div className="text-lg md:text-xl font-bold italic tracking-tight">Jabalpur, Madhya Pradesh</div>
                    <p className="text-slate-800 text-xs md:text-sm italic border-l border-white/20 pl-4 font-medium">Serving the digital heart of Central India since 2024.</p>
                  </div>
                </div>
              </div>

              {/* Form Side: Adaptive Card padding */}
              <div className="lg:col-span-7 w-full">
                <Card className="rounded-[2.5rem] md:rounded-[3rem] border-2 border-border/50 bg-white shadow-2xl overflow-hidden relative">
                  <CardContent className="p-6 md:p-12">
                    <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-2">
                          <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-700 ml-2">Full Name *</label>
                          <Input name="name" required placeholder="Enter Your Full Name" className="h-12 md:h-14 rounded-xl md:rounded-2xl border-2 focus:border-primary transition-all text-sm md:text-base" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-700 ml-2">Email Address *</label>
                          <Input type="email" name="email" required placeholder="example@email.com" className="h-12 md:h-14 rounded-xl md:rounded-2xl border-2 text-sm md:text-base" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-700 ml-2">Phone Number</label>
                        <Input type="tel" name="phone" placeholder="Enter Your Phone Number" className="h-12 md:h-14 rounded-xl md:rounded-2xl border-2 text-sm md:text-base" />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-700 ml-2">Project Brief *</label>
                        <Textarea name="message" required placeholder="Tell us about your project goals..." className="min-h-[120px] md:min-h-[150px] rounded-2xl md:rounded-3xl border-2 p-4 md:p-6 text-sm md:text-base" />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={submitting}
                        className="w-full h-14 md:h-16 rounded-full bg-slate-900 hover:bg-primary text-white font-bold text-base md:text-lg transition-all shadow-xl hover:scale-[1.01] active:scale-95"
                      >
                        {submitting ? "PROCESSING..." : "TRANSMIT MESSAGE"}
                        <Send className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
