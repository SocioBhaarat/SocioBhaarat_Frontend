import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img src="/images/logo-full.webp" alt="Socio Bhaarat" className="h-10 mb-4" />
            <p className="text-muted-foreground mb-4">
              Growing businesses digitally with professional marketing solutions that drive real results.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/sociobhaarat/" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/sociobhaarat/" className="text-muted-foreground hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/sociobhaarat/" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@SocioBhaarat" className="text-muted-foreground hover:text-red-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/hiring" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/digital-marketing/social-media" className="text-muted-foreground hover:text-primary transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link to="/design-development/web-development" className="text-muted-foreground hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/performance-marketing" className="text-muted-foreground hover:text-primary transition-colors">
                  Performance Marketing
                </Link>
              </li>
              <li>
                <Link to="/digital-marketing/content-marketing" className="text-muted-foreground hover:text-primary transition-colors">
                  Content Creation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-muted-foreground">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                <span className="break-all">official@sociobhaarat.com</span>
              </li>
              <li className="flex items-start space-x-3 text-muted-foreground">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-secondary" />
                <span>+91 95895 81364</span>
              </li>
              <li className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                <span>Jabalpur, Madhya Pradesh, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Socio Bhaarat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
