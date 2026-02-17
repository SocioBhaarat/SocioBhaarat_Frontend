import { Phone, Mail, MessageCircle } from "lucide-react";

const TopBar = () => {
  return (
    <div className="hidden sm:flex bg-primary text-primary-foreground py-2 px-4 sm:px-6 lg:px-8 text-sm">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-4">
          <a href="tel:+919589581364" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
            <Phone className="h-3.5 w-3.5" />
            <span>Phone: +91 95895 81364</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="mailto:contact@sociobhaarat.com" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
            <Mail className="h-3.5 w-3.5" />
            <span className="hidden md:inline">official@sociobhaarat.com</span>
          </a>
          <a href="https://wa.me/919589581364" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
            <MessageCircle className="h-3.5 w-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
