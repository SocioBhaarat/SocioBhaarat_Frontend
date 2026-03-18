// import { Link } from "react-router-dom";
// import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-muted/30 border-t border-border">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
//           <div>
//             <img src="/images/logo-full.webp" alt="Socio Bhaarat" className="h-10 mb-4" />
//             <p className="text-muted-foreground mb-4">
//               Growing businesses digitally with professional marketing solutions that drive real results.
//             </p>
//             <div className="flex space-x-4">
//               <a href="https://www.facebook.com/sociobhaarat/" className="text-muted-foreground hover:text-primary transition-colors">
//                 <Facebook className="h-5 w-5" />
//               </a>
//               <a href="https://www.instagram.com/sociobhaarat/" className="text-muted-foreground hover:text-secondary transition-colors">
//                 <Instagram className="h-5 w-5" />
//               </a>
//               <a href="https://www.linkedin.com/company/sociobhaarat/" className="text-muted-foreground hover:text-accent transition-colors">
//                 <Linkedin className="h-5 w-5" />
//               </a>
//               <a href="https://www.youtube.com/@SocioBhaarat" className="text-muted-foreground hover:text-red-600 transition-colors">
//                 <Youtube className="h-5 w-5" />
//               </a>
//             </div>
//           </div>

//           <div>
//             <h3 className="font-display font-semibold text-foreground mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/testimonials" className="text-muted-foreground hover:text-primary transition-colors">
//                   Testimonials
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/hiring" className="text-muted-foreground hover:text-primary transition-colors">
//                   Careers
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-display font-semibold text-foreground mb-4">Our Services</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link to="/digital-marketing/social-media" className="text-muted-foreground hover:text-primary transition-colors">
//                   Social Media Marketing
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/design-development/web-development" className="text-muted-foreground hover:text-primary transition-colors">
//                   Web Development
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/performance-marketing" className="text-muted-foreground hover:text-primary transition-colors">
//                   Performance Marketing
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/digital-marketing/content-marketing" className="text-muted-foreground hover:text-primary transition-colors">
//                   Content Creation
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-display font-semibold text-foreground mb-4">Contact Us</h3>
//             <ul className="space-y-3">
//               <li className="flex items-start space-x-3 text-muted-foreground">
//                 <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
//                 <span className="break-all">official@sociobhaarat.com</span>
//               </li>
//               <li className="flex items-start space-x-3 text-muted-foreground">
//                 <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-secondary" />
//                 <span>+91 95895 81364</span>
//               </li>
//               <li className="flex items-start space-x-3 text-muted-foreground">
//                 <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
//                 <span>Jabalpur, Madhya Pradesh, India</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="pt-8 border-t border-border text-center text-muted-foreground">
//           <p>&copy; {new Date().getFullYear()} Socio Bhaarat. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



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
        { icon: <Facebook />, href: "https://www.facebook.com/sociobhaarat/", color: "hover:text-blue-600" },
        { icon: <Instagram />, href: "https://www.instagram.com/sociobhaarat/", color: "hover:text-pink-600" },
        { icon: <Linkedin />, href: "https://www.linkedin.com/company/sociobhaarat/", color: "hover:text-blue-700" },
        { icon: <Youtube />, href: "https://www.youtube.com/@SocioBhaarat", color: "hover:text-red-600" },
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
    // Specialized Automation
    automation: [
      { name: "WhatsApp Broadcasting", path: "whatsapp-marketing/bulk-broadcasting" },
      { name: "Custom Chatbots", path: "/whatsapp-marketing/custom-chatbot" },
      { name: "Number Verification", path: "/whatsapp-marketing/number-verification" },
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
      <div className="container mx-auto px-6 sm:px-10 lg:px-12 pt-16 md:pt-24 pb-12 relative z-10">

        {/* ROW 1: Brand Profile & Architecture (Spans wider for balance) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-12 mb-16 pb-16 border-b border-slate-50">

          {/* Brand Profile - 7 cols on Desktop */}
          <div className="md:col-span-7 space-y-8 text-center md:text-left">
            <img src={footerData.about.logo} alt="Socio Bhaarat" className="h-12 md:h-16 mx-auto md:mx-0" />
            <p className="text-slate-500 text-base md:text-xl leading-relaxed font-medium italic border-l-0 md:border-l-4 border-primary/20 md:pl-8 max-w-2xl mx-auto md:mx-0">
              "{footerData.about.description}"
            </p>
            <div className="flex justify-center md:justify-start space-x-5">
              {footerData.about.socials.map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer"
                  className={`p-4 rounded-2xl bg-slate-50 text-slate-500 ${social.color} transition-all border border-slate-100 shadow-sm active:scale-95`}>
                  {React.cloneElement(social.icon as React.ReactElement, { size: 24 })}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links / Architecture - 5 cols on Desktop */}
          <div className="md:col-span-5 space-y-8">
            <h3 className="text-xs md:text-sm font-black uppercase tracking-[0.4em] text-slate-400 text-center md:text-left">Architecture</h3>
            <div className="grid grid-cols-2 gap-4">
              {footerData.quickLinks.map((link, i) => (
                <Link key={i} to={link.path} className="text-slate-700 hover:text-primary text-sm md:text-lg font-bold transition-all flex items-center group py-2 px-4 bg-slate-50/50 rounded-xl border border-transparent hover:border-slate-100 hover:bg-white justify-center md:justify-start">
                  {link.name} <ArrowUpRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ROW 2: Service Stacks & Contact (3 Columns on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-12">

          {/* Marketing Stack */}
          <div className="space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 italic border-b border-slate-100 pb-4">Marketing Stack</h3>
            <ul className="space-y-5">
              {footerData.marketing.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-slate-700 hover:text-primary text-base md:text-lg font-bold transition-all block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dev & Design Stack */}
          <div className="space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 italic border-b border-slate-100 pb-4">Dev & Design</h3>
            <ul className="space-y-5">
              {footerData.development.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-slate-700 hover:text-primary text-base md:text-lg font-bold transition-all block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Automation Stack */}
          <div className="space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 italic border-b border-slate-100 pb-4">Automation</h3>
            <ul className="space-y-5">
              {footerData.automation.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-slate-700 hover:text-primary text-base md:text-lg font-bold transition-all block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Line (Contact) */}
          <div className="space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 italic border-b border-slate-100 pb-4">Direct Line</h3>
            <ul className="space-y-8">
              {footerData.contact.map((item, i) => (
                <li key={i} className="flex items-center space-x-5 group">
                  <div className="shrink-0 p-4 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-white group-hover:shadow-lg transition-all">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</span>
                    <span className="text-base md:text-lg font-bold text-slate-900 break-all leading-tight">
                      {item.content}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Base */}
        <div className="mt-24 pt-10 border-t border-slate-100 flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {footerData.legal.map((item, i) => (
              <Link key={i} to={item.path} className="text-xs md:text-sm font-black text-slate-400 hover:text-primary uppercase tracking-widest transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
          <p className="text-xs md:text-sm font-black text-slate-400 uppercase tracking-widest italic text-center">
            &copy; {new Date().getFullYear()} SOCIO BHAARAT LAB. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
