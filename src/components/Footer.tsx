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
      {name: "Video Marketing",path:"/digital-marketing/video-marketing"},
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8 lg:gap-x-12">

          {/* 1. Brand Profile - Spans full width on mobile/tablet to prevent empty side-space */}
          <div className="md:col-span-3 lg:col-span-1 space-y-6">
            <img src={footerData.about.logo} alt="Socio Bhaarat" className="h-10 md:h-12" />
            <p className="text-slate-500 text-xs leading-relaxed font-medium italic border-l-2 border-primary/20 pl-4 max-w-sm">
              {footerData.about.description}
            </p>
            <div className="flex space-x-3">
              {footerData.about.socials.map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg bg-slate-50 text-slate-400 ${social.color} transition-all border border-slate-100`}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 2. Architecture (Quick Links) */}
          <div className="space-y-6">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 italic">Architecture</h3>
            <ul className="space-y-3">
              {footerData.quickLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-slate-600 hover:text-primary text-xs font-bold transition-all flex items-center group">
                    {link.name} <ArrowUpRight className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-all shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Marketing Stack */}
          <div className="space-y-6">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 italic">Marketing Stack</h3>
            <ul className="space-y-3">
              {footerData.marketing.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-slate-600 hover:text-primary text-xs font-bold transition-all block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Dev & Design */}
          <div className="space-y-6">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 italic">Dev & Design</h3>
            <ul className="space-y-3">
              {footerData.development.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-slate-600 hover:text-primary text-xs font-bold transition-all block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Automation & Contact - Combined for balanced spacing */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 italic">Automation</h3>
              <ul className="space-y-3">
                {footerData.automation.map((link, i) => (
                  <li key={i}>
                    <Link to={link.path} className="text-slate-600 hover:text-primary text-xs font-bold transition-all block">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 pt-4 border-t border-slate-50 lg:border-none lg:pt-0">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 italic">Direct Line</h3>
              <ul className="space-y-4">
                {footerData.contact.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="shrink-0">{item.icon}</div>
                    <div className="flex flex-col">
                      <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</span>
                      <span className="text-xs font-bold text-slate-900 break-all leading-tight">{item.content}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Base */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {footerData.legal.map((item, i) => (
              <Link key={i} to={item.path} className="text-[10px] font-black text-slate-400 hover:text-primary uppercase tracking-widest">
                {item.name}
              </Link>
            ))}
          </div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">
            &copy; {new Date().getFullYear()} SOCIO BHAARAT LAB.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
