import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { submitApplication } from "@/services/hiringService";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Send,
  ArrowLeft,
  Briefcase,
  User,
  Mail,
  Phone,
  FileText,
  Upload,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Linkedin,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const HiringForm = () => {
  const { jobTitle } = useParams();
  const navigate = useNavigate();
  const decodedTitle = decodeURIComponent(jobTitle || "Open Position");

  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    setFileName(selectedFile ? selectedFile.name : null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      if (!file) {
        throw new Error("Resume file is required");
      }
      const allowed = ["application/pdf"];
      if (!allowed.includes(file.type)) {
        throw new Error("Only PDF allowed");
      }
      
      formData.append("jobTitle", decodedTitle);
      formData.append("date", new Date().toISOString());

      await submitApplication(formData);

      setSubmitStatus("success");
      form.reset();
      setFile(null);
      setFileName(null);

    } catch (err) {
      console.error("Application submission failed:", err);
      setSubmitStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title={`Apply for ${decodedTitle} | Socio Bhaarat`}
        description={`Submit your application for the ${decodedTitle} position at Socio Bhaarat. Join our innovative team today.`}
        keywords="job application, career, apply now, hiring, socio bhaarat careers"
        url={`/hiring/${encodeURIComponent(decodedTitle)}`}
      />
      <div className="min-h-screen bg-[#fafafa] relative overflow-hidden">
        {/* Hero section */}
        <section className="relative pt-10 pb-8 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]" />
            <div className="absolute top-0 right-0 w-64 h-64 md:w-[500px] md:h-[500px] bg-primary/5 blur-[80px] md:blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-0 left-0 w-48 h-48 md:w-[400px] md:h-[400px] bg-blue-500/[0.04] blur-[60px] md:blur-[100px] rounded-full" />
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-5"
            >
              {/* Back button */}
              <button
                onClick={() => navigate("/hiring")}
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-primary transition-colors w-fit group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Careers
              </button>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] uppercase w-fit">
                <Sparkles className="w-3 h-3" /> Job Application
              </div>

              {/* Heading */}
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-800 leading-[1.1] tracking-tighter mb-4">
                  Apply for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium">
                    {decodedTitle}
                  </span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-slate-500 italic font-medium leading-relaxed border-l-4 border-primary/20 pl-4 sm:pl-5 py-1 max-w-2xl">
                  Fill out your details below and upload your resume. Our recruitment team will review your application and respond within 48 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Form section */}
        <section className="py-8 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
              {/* Left info panel */}
              <div className="lg:col-span-5 space-y-8 md:sticky md:top-24">
                <div className="max-w-md border-l-4 border-primary pl-6 md:pl-8">
                  <h2 className="font-display text-3xl md:text-5xl font-bold text-slate-900 tracking-tighter mb-4 md:mb-6 leading-[0.95]">
                    Your Next{" "}
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 font-medium">
                      Chapter
                    </span>
                  </h2>
                  <p className="text-base md:text-lg text-slate-500 leading-relaxed font-medium italic">
                    We look for curious minds who thrive in fast-paced environments and are passionate about creating digital impact.
                  </p>
                </div>

                {/* Info cards */}
                <div className="flex flex-col gap-3">
                  {[
                    { icon: Briefcase, text: `Position: ${decodedTitle}`, color: "primary" },
                    { icon: MapPin, text: "Location: Jabalpur, MP", color: "violet" },
                    { icon: CheckCircle2, text: "Applications reviewed within 48 hrs", color: "green" },
                    { icon: User, text: "Direct access to our hiring manager", color: "orange" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="group flex items-center gap-3 px-3 py-3 rounded-xl border border-transparent bg-white/60 hover:bg-white hover:border-primary/20 hover:shadow-sm transition-all duration-200 cursor-default"
                    >
                      <div className={`w-7 h-7 rounded-lg bg-${item.color === "primary" ? "primary" : item.color + "-500"}/10 text-${item.color === "primary" ? "primary" : item.color + "-600"} flex items-center justify-center flex-shrink-0 group-hover:bg-${item.color === "primary" ? "primary" : item.color + "-500"} group-hover:text-white transition-all duration-200`}>
                        <item.icon size={14} />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Process badge */}
                <div className="p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-slate-50 shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:30px_30px] group-hover:bg-[size:20px_20px] transition-all duration-1000" />
                  <div className="relative z-10 space-y-2 md:space-y-4">
                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-secondary">
                      Hiring Process
                    </p>
                    <h4 className="text-lg md:text-xl font-bold italic tracking-tight">
                      Apply → Review → Interview → Offer
                    </h4>
                    <p className="text-slate-800 text-xs md:text-sm italic border-l border-white/20 pl-4 font-medium">
                      Our streamlined process ensures a fast and transparent experience for every candidate.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right form panel */}
              <div className="lg:col-span-7 w-full">
                <Card className="rounded-[2.5rem] md:rounded-[3rem] border-2 border-border/50 bg-white shadow-2xl overflow-hidden relative">
                  <CardContent className="p-6 md:p-12">
                    <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
                      {/* Full name & Email */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-2">
                          <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-900 ml-2 flex items-center gap-1.5">
                            <User className="w-3 h-3" /> Full Name *
                          </label>
                          <Input
                            name="fullName"
                            required
                            placeholder="Enter your full name"
                            className="h-12 md:h-14 rounded-xl md:rounded-2xl border-2 focus:border-primary transition-all text-sm md:text-base"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-900 ml-2 flex items-center gap-1.5">
                            <Mail className="w-3 h-3" /> Email Address *
                          </label>
                          <Input
                            type="email"
                            name="email"
                            required
                            placeholder="example@email.com"
                            className="h-12 md:h-14 rounded-xl md:rounded-2xl border-2 text-sm md:text-base"
                          />
                        </div>
                      </div>

                      {/* Phone & LinkedIn */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-2">
                          <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-900 ml-2 flex items-center gap-1.5">
                            <Phone className="w-3 h-3" /> Phone Number *
                          </label>
                          <Input
                            type="tel"
                            name="phone"
                            required
                            placeholder="+91 XXXXX XXXXX"
                            className="h-12 md:h-14 rounded-xl md:rounded-2xl border-2 text-sm md:text-base"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-900 ml-2 flex items-center gap-1.5">
                            <Linkedin className="w-3 h-3" /> LinkedIn Profile
                          </label>
                          <Input
                            type="url"
                            name="linkedin"
                            placeholder="https://linkedin.com/in/yourprofile"
                            className="h-12 md:h-14 rounded-xl md:rounded-2xl border-2 text-sm md:text-base"
                          />
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="space-y-2">
                        <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-900 ml-2 flex items-center gap-1.5">
                          <Briefcase className="w-3 h-3" /> Skills *
                        </label>
                        <Input
                          type="text"
                          name="skills"
                          required
                          placeholder="e.g. Communication, Team Management, Decision Making"
                          className="h-12 md:h-14 rounded-xl md:rounded-2xl border-2 text-sm md:text-base"
                        />
                      </div>

                      {/* Experience */}
                      <div className="space-y-2">
                        <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-900 ml-2 flex items-center gap-1.5">
                          <Briefcase className="w-3 h-3" /> Years of Experience *
                        </label>
                        <Input
                          type="text"
                          name="experience"
                          required
                          placeholder="e.g. 2 years in social media marketing"
                          className="h-12 md:h-14 rounded-xl md:rounded-2xl border-2 text-sm md:text-base"
                        />
                      </div>

                      {/* Cover Letter */}
                      <div className="space-y-2">
                        <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-900 ml-2 flex items-center gap-1.5">
                          <FileText className="w-3 h-3" /> Cover Letter / Why This Role? *
                        </label>
                        <Textarea
                          name="coverLetter"
                          required
                          placeholder="Tell us why you're excited about this role and what makes you a great fit..."
                          className="min-h-[120px] md:min-h-[150px] rounded-2xl md:rounded-3xl border-2 p-4 md:p-6 text-sm md:text-base"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-900 ml-2 flex items-center gap-1.5">
                          <Briefcase className="w-3 h-3" /> Portfolio link
                        </label>
                        <Input
                          type="text"
                          name="portfolio"
                          required
                          placeholder="e.g. https://...."
                          className="h-12 md:h-14 rounded-xl md:rounded-2xl border-2 text-sm md:text-base"
                        />
                      </div>

                      {/* Resume Upload */}
                      <div className="space-y-2">
                        <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-900 ml-2 flex items-center gap-1.5">
                          <Upload className="w-3 h-3" /> Upload Resume (PDF/DOC) *
                        </label>
                        <div className="relative">
                          <input
                            type="file"
                            name="resume"
                            required
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                          />
                          <div className="h-14 md:h-16 rounded-xl md:rounded-2xl border-2 border-dashed border-slate-200 hover:border-primary/50 transition-all flex items-center justify-center gap-3 bg-slate-50/50 hover:bg-primary/[0.02]">
                            <Upload className="w-5 h-5 text-slate-400" />
                            <span className="text-sm font-medium text-slate-500">
                              {fileName ? (
                                <span className="text-primary font-semibold">{fileName}</span>
                              ) : (
                                "Click to upload or drag your resume here"
                              )}
                            </span>
                          </div>
                        </div>
                        <p className="text-[10px] text-slate-400 ml-2 mt-1">
                          Accepted formats: PDF, DOC, DOCX (Max 5MB)
                        </p>
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        size="lg"
                        disabled={submitting}
                        className="w-full h-14 md:h-16 rounded-full bg-slate-900 hover:bg-primary text-white font-black text-base md:text-lg transition-all shadow-xl hover:scale-[1.01] active:scale-95"
                      >
                        {submitting ? "SUBMITTING APPLICATION..." : "SUBMIT APPLICATION"}
                        <Send className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                      </Button>

                      {/* Status Feedback */}
                      {submitStatus === "success" && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 mt-4 text-sm text-green-800 bg-green-100 rounded-xl border border-green-200 flex items-center gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <div>
                            <p className="font-bold">Application Submitted Successfully!</p>
                            <p className="text-xs mt-0.5">Our team will review your profile and get back to you within 48 hours.</p>
                          </div>
                        </motion.div>
                      )}
                      {submitStatus === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 mt-4 text-sm text-red-800 bg-red-100 rounded-xl border border-red-200 flex items-center gap-3"
                        >
                          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                          <div>
                            <p className="font-bold">Submission Failed</p>
                            <p className="text-xs mt-0.5">Please try again later or send your resume directly to official@sociobhaarat.com</p>
                          </div>
                        </motion.div>
                      )}
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

export default HiringForm;