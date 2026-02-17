import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Hiring from "./pages/Hiring";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ContentMarketing from "./pages/digital-marketing/ContentMarketing";
import SocialMedia from "./pages/digital-marketing/SocialMedia";
import WebsiteSEO from "./pages/digital-marketing/WebsiteSEO";
import GoogleMapMarketing from "./pages/digital-marketing/GoogleMapMarketing";
import PaidMarketing from "./pages/digital-marketing/PaidMarketing";
import ORMServices from "./pages/digital-marketing/ORMServices";
import WebDevelopment from "./pages/design-development/WebDevelopment";
import WordPressDevelopment from "./pages/design-development/WordPressDevelopment";
import AppDevelopment from "./pages/design-development/AppDevelopment";
import UIUXDesign from "./pages/design-development/UIUXDesign";
import EcommerceDevelopment from "./pages/design-development/EcommerceDevelopment";
import BulkBroadcasting from "./pages/whatsapp-marketing/BulkBroadcasting";
import CustomChatbot from "./pages/whatsapp-marketing/CustomChatbot";
import NumberVerification from "./pages/whatsapp-marketing/NumberVerification";
import PerformanceMarketing from "./pages/performance-marketing/PerformanceMarketing";
import DigitalMarketingPackages from "./pages/packages/DigitalMarketingPackages";
import WebDevelopmentPackages from "./pages/packages/WebDevelopmentPackages";
import WhatsAppPackages from "./pages/packages/WhatsAppPackages";
import PerformanceMarketingPackages from "./pages/packages/PerformanceMarketingPackages";
import MetaAdsPortfolio from "./pages/our-work/MetaAdsPortfolio";
import WebDevPortfolio from "./pages/our-work/WebDevPortfolio";
import ContentPortfolio from "./pages/our-work/ContentPortfolio";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import WhatsAppWidget from "./components/WhatsAppWidget";
import ScrollToTop from "./hooks/ScrollToTop";
import { Analytics } from "@vercel/analytics/react"
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <WhatsAppWidget />
      <BrowserRouter>
        <ScrollToTop />
        <Analytics/>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/hiring" element={<Hiring />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Digital Marketing */}
          <Route path="/digital-marketing/content-marketing" element={<ContentMarketing />} />
          <Route path="/digital-marketing/social-media" element={<SocialMedia />} />
          <Route path="/digital-marketing/website-seo" element={<WebsiteSEO />} />
          <Route path="/digital-marketing/google-map-marketing" element={<GoogleMapMarketing />} />
          <Route path="/digital-marketing/paid-marketing" element={<PaidMarketing />} />
          <Route path="/digital-marketing/orm-services" element={<ORMServices />} />
          
          {/* Design & Development */}
          <Route path="/design-development/web-development" element={<WebDevelopment />} />
          <Route path="/design-development/wordpress-development" element={<WordPressDevelopment />} />
          <Route path="/design-development/app-development" element={<AppDevelopment />} />
          <Route path="/design-development/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/design-development/ecommerce-development" element={<EcommerceDevelopment />} />
          
          {/* WhatsApp Marketing */}
          <Route path="/whatsapp-marketing/bulk-broadcasting" element={<BulkBroadcasting />} />
          <Route path="/whatsapp-marketing/custom-chatbot" element={<CustomChatbot />} />
          <Route path="/whatsapp-marketing/number-verification" element={<NumberVerification />} />
          
          {/* Performance Marketing */}
          <Route path="/performance-marketing" element={<PerformanceMarketing />} />
          
          {/* Packages */}
          <Route path="/packages/digital-marketing" element={<DigitalMarketingPackages />} />
          <Route path="/packages/website-development" element={<WebDevelopmentPackages />} />
          <Route path="/packages/whatsapp-marketing" element={<WhatsAppPackages />} />
          <Route path="/packages/performance-marketing" element={<PerformanceMarketingPackages />} />
          
          {/* Our Work */}
          <Route path="/our-work/meta-ads" element={<MetaAdsPortfolio />} />
          <Route path="/our-work/web-development" element={<WebDevPortfolio />} />
          <Route path="/our-work/content-work" element={<ContentPortfolio />} />
          
          {/* Blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
