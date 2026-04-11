import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsAppWidget from "./components/WhatsAppWidget";
import FAQWidget from "./components/FAQWidget";
import WelcomePopup from "./components/ui/WelcomePopup";
import ScrollToTop from "./hooks/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Hiring = lazy(() => import("./pages/Hiring"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ContentMarketing = lazy(() => import("./pages/digital-marketing/ContentMarketing"));
const SocialMedia = lazy(() => import("./pages/digital-marketing/SocialMedia"));
const WebsiteSEO = lazy(() => import("./pages/digital-marketing/WebsiteSEO"));
const GoogleMapMarketing = lazy(() => import("./pages/digital-marketing/GoogleMapMarketing"));
const PaidMarketing = lazy(() => import("./pages/digital-marketing/PaidMarketing"));
const ORMServices = lazy(() => import("./pages/digital-marketing/ORMServices"));
const EmailMarketing = lazy(() => import("./pages/digital-marketing/EmailMarketing"));
const VideoMarketing = lazy(() => import("./pages/digital-marketing/VideoMarketing"));
const WebDevelopment = lazy(() => import("./pages/design-development/WebDevelopment"));
const WordPressDevelopment = lazy(() => import("./pages/design-development/WordPressDevelopment"));
const AppDevelopment = lazy(() => import("./pages/design-development/AppDevelopment"));
const UIUXDesign = lazy(() => import("./pages/design-development/UIUXDesign"));
const EcommerceDevelopment = lazy(() => import("./pages/design-development/EcommerceDevelopment"));
const GraphicDesigning = lazy(() => import("./pages/design-development/GraphicDesigning"));
const PerformanceMarketing = lazy(() => import("./pages/performance-marketing/PerformanceMarketing"));
const DigitalMarketingPackages = lazy(() => import("./pages/packages/DigitalMarketingPackages"));
const WebDevelopmentPackages = lazy(() => import("./pages/packages/WebDevelopmentPackages"));
const WhatsAppPackages = lazy(() => import("./pages/packages/WhatsAppPackages"));
const PerformanceMarketingPackages = lazy(() => import("./pages/packages/PerformanceMarketingPackages"));
const MetaAdsPortfolio = lazy(() => import("./pages/our-work/OurImpact"));
const WebDevPortfolio = lazy(() => import("./pages/our-work/WebDevPortfolio"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const TermsAndConditions = lazy(() => import("./pages/footer-pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("./pages/footer-pages/PrivacyPolicy"));
const RefundPolicy = lazy(() => import("./pages/footer-pages/RefundPolicy"));
const WhatsappBusinessAPI = lazy(() => import("./pages/whatsapp-business-api/WhatsappBusinessAPI"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <WhatsAppWidget />
      <WelcomePopup />
      <BrowserRouter>
        <ScrollToTop />
        <FAQWidget />
        <Analytics />
        <Navigation />
        <main>
          <Suspense fallback={
            <div className="min-h-screen flex flex-col items-center justify-center gap-5">
              <svg width="40" height="40" viewBox="0 0 40 40" className="animate-spin">
                <circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" strokeWidth="3" className="opacity-10" />
                <path d="M20 4 A16 16 0 0 1 36 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>

              <div className="flex flex-col items-center gap-1.5">
                <p className="text-sm font-medium text-slate-700 tracking-tight">Getting things ready</p>
                <div className="flex gap-1.5 items-center">
                  {[0, 1, 2].map(i => (
                    <span key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }} />
                  ))}
                </div>
              </div>
            </div>
          }>
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
              <Route path="/digital-marketing/email-marketing" element={<EmailMarketing />} />
              <Route path="/digital-marketing/video-marketing" element={<VideoMarketing />} />

              {/* Design & Development */}
              <Route path="/design-development/web-development" element={<WebDevelopment />} />
              <Route path="/design-development/wordpress-development" element={<WordPressDevelopment />} />
              <Route path="/design-development/app-development" element={<AppDevelopment />} />
              <Route path="/design-development/ui-ux-design" element={<UIUXDesign />} />
              <Route path="/design-development/ecommerce-development" element={<EcommerceDevelopment />} />
              <Route path="/design-development/graphic-designing" element={<GraphicDesigning />} />

              {/* WhatsApp Marketing */}
              <Route path="/whatsapp-business-api" element={<WhatsappBusinessAPI />} />

              {/* Performance Marketing */}
              <Route path="/performance-marketing" element={<PerformanceMarketing />} />

              {/* Packages */}
              <Route path="/packages/digital-marketing" element={<DigitalMarketingPackages />} />
              <Route path="/packages/website-development" element={<WebDevelopmentPackages />} />
              <Route path="/packages/whatsapp-marketing" element={<WhatsAppPackages />} />
              <Route path="/packages/performance-marketing" element={<PerformanceMarketingPackages />} />

              {/* Our Work */}
              <Route path="/our-work/Our-Impact" element={<MetaAdsPortfolio />} />
              <Route path="/our-work/web-development-projects" element={<WebDevPortfolio />} />
              {/* <Route path="/our-work/content-work" element={<ContentPortfolio />} /> */}

              {/* Blog */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:postId" element={<BlogPost />} />

              {/* Other pages */}
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/refunds" element={<RefundPolicy />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
