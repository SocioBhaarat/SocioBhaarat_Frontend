import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      content: "official@sociobhaarat.com",
      href: "mailto:official@sociobhaarat.com",
      color: "text-primary",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      content: "+91 95895 81364",
      href: "tel:+919589581364",
      color: "text-secondary",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      content: " 5th Floor, Muskan City, Ekta Chowk, Sanatan Chowk, Vijay Nagar, Jabalpur, Madhya Pradesh 482001",
      href: "https://maps.app.goo.gl/wKCUub1GDcrxZ5Bs9",
      color: "text-accent",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] relative overflow-hidden">

      {/* 1. HERO SECTION WITH BLUEPRINT GRID */}
      <section className="relative pt-20 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10 animate-pulse" />

        </div>

        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-8 shadow-sm">
              <Mail className="w-3 h-3" /> Communication Lab
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-black text-slate-900 leading-tight tracking-tighter mb-6">
              Get In <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium uppercase">
                Touch
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium italic border-x-0 md:border-x border-slate-200 md:px-10">
              "Have a project in mind? Let's architect a high-performance roadmap to achieve your digital growth milestones."
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTACT INFO CARDS (Bento Style) */}

      <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-stretch">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                /* 3rd card ko dono columns ke beech mein center karne ka logic */
                className={`h-full ${index === 2 ? "md:col-span-2 flex justify-center" : ""
                  }`}
              >
                <Card className={`rounded-[2.5rem] h-full border-2 border-border/50 bg-white/50 backdrop-blur-xl hover:shadow-2xl group overflow-hidden ${index === 2 ? "md:max-w-md w-full" : "w-full"
                  }`}>
                  <CardContent className="p-10 text-center flex flex-col items-center justify-center h-full relative">

                    {/* Icon Module */}
                    <div className={`p-5 rounded-2xl bg-muted/50 mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm ${info.color}`}>
                      {info.icon}
                    </div>

                    {/* Technical Spec Labels */}
                    <h3 className="font-black text-[10px] uppercase tracking-[0.3em] mb-4 text-slate-400 italic">
                      {info.title}
                    </h3>

                    {/* Communication Link */}
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-md md:text-xl font-semibold text-slate-900 hover:text-primary "
                    >
                      {info.content}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FORM & NARRATIVE SPLIT */}
      
      <section className="py-16 md:py-24 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
        {/* Technical Background Design (Blueprint Grid) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">

            {/* Narrative Side: Stacks on top for Mobile, Left for Desktop */}
            <div className="lg:col-span-5 space-y-8 md:sticky md:top-24">
              <div className="max-w-md border-l-4 border-primary pl-6 md:pl-8">
                <h2 className="font-display text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4 md:mb-6 leading-[0.95]">
                  Send Us a <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium lowercase">
                    Message
                  </span>
                </h2>
                <p className="text-base md:text-lg text-slate-500 leading-relaxed font-medium italic">
                  "Fill out the engineering brief below. Our team analyzes every inquiry and provides a strategic response within 24 business hours."
                </p>
              </div>

              {/* Headquarter Badge: Scaled for mobile touch */}
              <div className="p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:30px_30px] group-hover:bg-[size:20px_20px] transition-all duration-1000" />
                <div className="relative z-10 space-y-2 md:space-y-4">
                  <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Regional Headquarter</p>
                  <h4 className="text-lg md:text-xl font-bold italic tracking-tight">Jabalpur, Madhya Pradesh</h4>
                  <p className="text-slate-400 text-xs md:text-sm italic border-l border-white/20 pl-4">Serving the digital heart of Central India since 2024.</p>
                </div>
              </div>
            </div>

            {/* Form Side: Adaptive Card padding */}
            <div className="lg:col-span-7 w-full">
              <Card className="rounded-[2.5rem] md:rounded-[3rem] border-2 border-border/50 bg-white shadow-2xl overflow-hidden relative">
                <CardContent className="p-6 md:p-12">
                  <form className="space-y-5 md:space-y-6" onSubmit={(e) => {
                    /* ... existing form logic ... */
                  }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name *</label>
                        <Input name="name" required placeholder="Socio Bhaarat" className="h-12 md:h-14 rounded-xl md:rounded-2xl border-2 focus:border-primary transition-all text-sm md:text-base" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address *</label>
                        <Input type="email" name="email" required placeholder="example@email.com" className="h-12 md:h-14 rounded-xl md:rounded-2xl border-2 text-sm md:text-base" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Phone Number</label>
                      <Input type="tel" name="phone" placeholder="+91 98765 43210" className="h-12 md:h-14 rounded-xl md:rounded-2xl border-2 text-sm md:text-base" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Project Brief *</label>
                      <Textarea name="message" required placeholder="Tell us about your project goals..." className="min-h-[120px] md:min-h-[150px] rounded-2xl md:rounded-3xl border-2 p-4 md:p-6 text-sm md:text-base" />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={submitting}
                      className="w-full h-14 md:h-16 rounded-full bg-slate-900 hover:bg-primary text-white font-black text-base md:text-lg transition-all shadow-xl hover:scale-[1.01] active:scale-95"
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

      {/* Smooth Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-primary to-orange-500 opacity-20" />
    </div>
  );
};

export default Contact;
