import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowUpRight } from "lucide-react";
import { cloneElement } from "react";
import React from "react";

const Footer = () => {

  const footerData = {
    about: {
      logo: "/images/logo-full.webp",
      description: "Growing businesses digitally with professional engineering solutions that drive real results.",
      socials: [
        { icon: <Facebook />, name: "Facebook", href: "https://www.facebook.com/sociobhaarat/", color: "hover:text-blue-600" },
        { icon: <Instagram />, name: "Instagram", href: "https://www.instagram.com/sociobhaarat/", color: "hover:text-pink-600" },
        { icon: <Linkedin />, name: "Linkedin", href: "https://www.linkedin.com/company/sociobhaarat/", color: "hover:text-blue-700" },
        { icon: <Youtube />, name: "Youtube", href: "https://www.youtube.com/@SocioBhaarat", color: "hover:text-red-600" },
      ]
    },
    quickLinks: [
      { name: "Our Services", path: "/services" },
      { name: "About the Lab", path: "/about" },
      { name: "Testimonials", path: "/testimonials" },
      { name: "Careers / Hiring", path: "/hiring" },
    ],
    // Digital Marketing Stack
    marketing: [
      { name: "ORM Services", path: "/digital-marketing/orm-services" },
      { name: "Social Media Marketing", path: "/digital-marketing/social-media" },
      { name: "Website SEO", path: "/digital-marketing/website-seo" },
      { name: "Google Business Profile", path: "/digital-marketing/google-map-marketing" },
      { name: "Paid Marketing (Meta/Google)", path: "/digital-marketing/paid-marketing" },
      { name: "Content Marketing", path: "/digital-marketing/content-marketing" },
      { name: "Email Marketing", path: "/digital-marketing/email-marketing" },
      { name: "Video Marketing", path: "/digital-marketing/video-marketing" },
      { name: "Performance Marketing", path: "/performance-marketing" },
    ],
    // Development & Engineering Stack
    development: [
      { name: "Web Development", path: "/design-development/web-development" },
      { name: "Wordpress Development", path: "/design-development/wrodpress-development" },
      { name: "App Development", path: "/design-development/app-development" },
      { name: "UI/UX Design", path: "/design-development/ui-ux-design" },
      { name: "E-commerce Solutions", path: "/design-development/ecommerce-development" },
      { name: "Graphic Designing", path: "/design-development/graphic-designing" },
    ],
    automation: [
      { name: "WhatsApp Business API", path: "/whatsapp-business-api" },
    ],
    legal: [
      { name: "Terms & Conditions", path: "/terms" },
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Return & Refund Policy", path: "/refunds" },
    ],
    contact: [
      { icon: <Mail className="text-primary" />, content: "official@sociobhaarat.com", label: "Email" },
      { icon: <Phone className="text-secondary" />, content: "+91 95895 81364", label: "Phone" },
      { icon: <MapPin className="text-accent" />, content: "Jabalpur, Madhya Pradesh", label: "Visit" },
    ]
  };

  return (
    <footer className="relative bg-white border-t border-slate-100 overflow-hidden font-sans">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12 pt-14 md:pt-20 pb-10 relative z-10">

        {/* ROW 1: Brand + Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12 pb-12 border-b border-slate-100">

          {/* Brand Profile */}
          <div className="md:col-span-7 flex flex-col gap-6 text-center md:text-left">
            <img
              src={footerData.about.logo}
              alt="Socio Bhaarat"
              className="h-10 md:h-12 md:w-32 md:mx-0 object-contain"
            />
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium border-l-0 md:border-l-4 border-primary/20 md:pl-6 max-w-xl mx-auto md:mx-0">
              {footerData.about.description}
            </p>
            <div className="flex justify-center md:justify-start gap-3">
              {footerData.about.socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  aria-label={social.name}
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl bg-slate-50 text-slate-700 ${social.color} transition-all border border-slate-100 hover:shadow-sm active:scale-95`}

                >
                  {React.cloneElement(social.icon as React.ReactElement, { size: 18 })}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-slate-600 text-center md:text-left">
              Architecture
            </div>
            <div className="grid grid-cols-2 gap-2">
              {footerData.quickLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  className="flex items-center justify-center md:justify-start gap-1.5 text-[13px] md:text-sm font-semibold text-slate-600 hover:text-primary transition-all py-2.5 px-3.5 bg-slate-50/60 rounded-xl border border-transparent hover:border-slate-100 hover:bg-white group"
                >
                  {link.name}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ROW 2: Service Stacks + Contact */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

          {/* Marketing Stack */}
          <div className="flex flex-col gap-5">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600 italic border-b border-slate-100 pb-3">
              Marketing Stack
            </div>
            <ul className="flex flex-col gap-3">
              {footerData.marketing.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-[13px] md:text-sm font-semibold text-slate-600 hover:text-primary transition-colors leading-snug block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dev & Design Stack */}
          <div className="flex flex-col gap-5">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600 italic border-b border-slate-100 pb-3">
              Dev & Design
            </div>
            <ul className="flex flex-col gap-3">
              {footerData.development.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-[13px] md:text-sm font-semibold text-slate-600 hover:text-primary transition-colors leading-snug block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600 italic border-b border-slate-100 pb-3 pt-5">
              Automation
            </div>
            <ul className="flex flex-col gap-3">
              {footerData.automation.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-[13px] md:text-sm font-semibold text-slate-600 hover:text-primary transition-colors leading-snug block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-5">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600 italic border-b border-slate-100 pb-3">
              Direct Line
            </div>
            <ul className="flex flex-col gap-5">
              {footerData.contact.map((item, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-9 h-9 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 15, className: "text-slate-500" })}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[9px] font-bold text-slate-700 uppercase tracking-widest mb-0.5">
                      {item.label}
                    </span>
                    <span className="text-[13px] md:text-sm font-semibold text-slate-800 leading-snug truncate">
                      {item.content}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Base */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2">
            {footerData.legal.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="text-[10px] font-bold text-slate-500 hover:text-primary uppercase tracking-widest transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest italic text-center sm:text-right">
            &copy; {new Date().getFullYear()} Socio Bhaarat Lab. All rights reserved.
          </p>
        </div>

      </div>
    </footer >
  );
};

export default Footer;
