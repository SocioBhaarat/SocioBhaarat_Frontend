import { Button } from "@/components/ui/button";
import { Check, Code, Smartphone, Zap, Lock, Rocket, Globe, Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WebDevelopment = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Build <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"> Powerful, Scalable & High-Performance</span> Websites
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            We design and develop modern, responsive, and conversion-focused websites that help businesses establish a strong digital presence and drive measurable growth
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8" onClick={() => navigate("/contact")} >
            Start Your Project
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Why Choose Our Web Development Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                title: "Experienced Web Developers",
                desc: "Skilled professionals with hands-on expertise in modern frameworks and scalable architecture."
              },
              {
                icon: Layers,
                title: "Custom-Built Solutions",
                desc: "Every website is tailored to your business needs with flexible and future-ready development."
              },
              {
                icon: Smartphone,
                title: "Responsive & Mobile-First Design",
                desc: "Seamless experience across all devices with optimized layouts and smooth interactions."
              },
              {
                icon: Globe,
                title: "SEO-Optimized Development",
                desc: "Built with technical SEO best practices to improve search visibility and performance."
              },
              {
                icon: Lock,
                title: "Secure & Scalable Architecture",
                desc: "Strong security standards and scalable backend systems that grow with your business."
              },
              {
                icon: Rocket,
                title: "Transparent & Timely Delivery",
                desc: "Clear communication, milestone tracking, and on-time project completion."
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg border border-border text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Our Development Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Corporate Websites",
              "E-commerce Platforms",
              "Landing Pages",
              "Web Applications",
              "Progressive Web Apps (PWA)",
              "API Development & Integration",
              "Website Redesign",
              "Website Maintenance",
              "Performance Optimization",
            ].map((service, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg border border-border">
                <Check className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold text-lg">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-4xl font-bold mb-10 text-center">
            Technologies We Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "React.js",
              "Next.js",
              "Three.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "MySQL",
              "GSAP",
              "Framer",
              "WordPress",
              "And many more...",
            ].map((tech, index) => (
              <div key={index} className="bg-card p-4 rounded-lg shadow border border-border text-center font-semibold hover:bg-primary/5 transition">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process*/}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold mb-6 text-center">
            Our Development Process
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            A structured, transparent, and efficient approach to deliver high-performing digital solutions.
          </p>

          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full"></div>

            <div className="space-y-16">
              {[
                {
                  title: "Requirement Analysis & Planning",
                  desc: "We understand your goals, target audience, and business requirements to create a strategic roadmap."
                },
                {
                  title: "UI/UX Design",
                  desc: "Crafting intuitive, engaging, and user-focused designs that align with your brand identity."
                },
                {
                  title: "Frontend & Backend Development",
                  desc: "Developing scalable, secure, and high-performance architecture using modern technologies."
                },
                {
                  title: "Testing & Quality Assurance",
                  desc: "Comprehensive testing to ensure performance, security, responsiveness, and bug-free deployment."
                },
                {
                  title: "Deployment",
                  desc: "Smooth and optimized deployment with performance checks and final verification."
                },
                {
                  title: "Ongoing Support & Optimization",
                  desc: "Continuous monitoring, updates, and improvements to keep your website future-ready."
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Step Content */}
                  <div className="md:w-1/2 px-6">
                    <div className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-2xl transition duration-300">
                      <h3 className="font-bold text-xl mb-4">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="relative z-10 my-6 md:my-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary via-secondary to-accent flex items-center justify-center text-white font-bold text-lg shadow-xl">
                      {index + 1}
                    </div>
                  </div>

                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-primary-foreground">Ready to Build Your Website?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Get a free consultation and quote for your web development project.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-8" onClick={() => window.open("https://wa.me/919589581364", "_blank")}>
            Get Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
