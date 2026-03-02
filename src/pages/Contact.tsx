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
      content: "Jabalpur, Madhya Pradesh, India",
      href: "#",
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
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="rounded-[2.5rem] border-2 border-border/50 bg-white/50 backdrop-blur-xl hover:border-primary/30 transition-all hover:shadow-2xl group overflow-hidden"
              >
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <div className={`p-4 rounded-2xl bg-muted/50 mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 ${info.color}`}>
                    {info.icon}
                  </div>
                  <h3 className="font-black text-xs uppercase tracking-widest mb-3 text-slate-400">{info.title}</h3>
                  <a
                    href={info.href}
                    className="text-lg font-bold text-slate-900 hover:text-primary transition-colors italic tracking-tight"
                  >
                    {info.content}
                  </a>
                </CardContent>
                {/* Tiny index watermark */}
                <div className="absolute -bottom-2 -right-2 text-slate-900/[0.03] text-6xl font-black italic select-none">
                  0{index + 1}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FORM & NARRATIVE SPLIT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* Narrative Side */}
            <div className="lg:col-span-5 space-y-8">
              <div className="max-w-md border-l-4 border-primary pl-8">
                <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-6">
                  Send Us a <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serif font-medium">Message</span>
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed font-medium italic">
                  Fill out the engineering brief below. Our team analyzes every inquiry and provides a strategic response within 24 business hours.
                </p>
              </div>

              {/* Working Hours/Location Detail */}
              <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:30px_30px]" />
                <div className="relative z-10 space-y-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Regional Headquarter</p>
                  <h4 className="text-xl font-bold">Jabalpur, Madhya Pradesh</h4>
                  <p className="text-slate-400 text-sm italic">Serving the digital heart of Central India since 2024.</p>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-7">
              <Card className="rounded-[3rem] border-2 border-border/50 bg-white shadow-2xl overflow-hidden relative">
                <CardContent className="p-8 md:p-12">
                  <form className="space-y-6" onSubmit={(e) => {
                    try {
                      setSubmitting(true);
                      const form = e.currentTarget as HTMLFormElement;
                      setTimeout(() => {
                        form.reset();
                        toast({
                          title: "Message Sent!",
                          description:
                            "Your response has been saved successfully.",
                        });
                        setSubmitting(false);
                      }, 500);
                    } catch {
                      toast({
                        title: "Submission Failed",
                        description:
                          "Something went wrong. Please try again later.",
                        variant: "destructive",
                      });
                      setSubmitting(false);
                    }
                  }}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name *</label>
                        <Input name="name" required placeholder="John Doe" className="h-14 rounded-2xl border-2 focus:border-primary transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address *</label>
                        <Input type="email" name="email" required placeholder="john@example.com" className="h-14 rounded-2xl border-2" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Phone Number</label>
                      <Input type="tel" name="phone" placeholder="+91 98765 43210" className="h-14 rounded-2xl border-2" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Project Brief *</label>
                      <Textarea name="message" required placeholder="Tell us about your project goals..." className="min-h-[150px] rounded-3xl border-2 p-6" />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={submitting}
                      className="w-full h-16 rounded-full bg-slate-900 hover:bg-primary text-white font-black text-lg transition-all shadow-xl hover:scale-[1.02]"
                    >
                      {submitting ? "PROCESSING..." : "TRANSMIT MESSAGE"}
                      <Send className="ml-2 h-5 w-5" />
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
