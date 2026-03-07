import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: Lab Route Undefined:", location.pathname);
  }, [location.pathname]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fafafa]">
      
      {/* 1. TECHNICAL BACKGROUND ARCHITECTURE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Signature Blueprint Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]" />
        
        {/* Warning Mesh Blobs */}
        <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-orange-500/5 blur-[130px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-600/5 blur-[110px] rounded-full" />
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          {/* Error Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-md text-orange-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 shadow-sm">
            <AlertTriangle className="w-3 h-3" /> System Routing Failure
          </div>

          {/* Large Error Typography */}
          <h1 className="font-display text-[8rem] md:text-[12rem] font-black text-slate-900 leading-none tracking-tighter mb-4">
            4<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 italic font-serifinline-block pr-7 -mr-4 overflow-visible leading-normal">0</span>4
          </h1>

          <div className="max-w-md mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight uppercase italic">
              Route Architecture Not Found
            </h2>
            <p className="text-slate-500 font-medium italic border-x border-slate-200 px-6">
              "The requested path <span className="text-primary font-bold not-italic">[{location.pathname}]</span> does not exist within our current digital ecosystem."
            </p>
          </div>

          {/* Responsive Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-12">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto rounded-full px-8 h-14 border-2 font-bold hover:bg-slate-100 hover:text-black transition-all"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="mr-2 w-4 h-4" /> Go Back
            </Button>
            
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full px-10 h-14 font-black bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105"
              onClick={() => navigate("/")}
            >
              <Home className="mr-2 w-4 h-4" /> Return to Lab
            </Button>
          </div>
        </motion.div>
      </div>

      {/* 3. FOOTER IDENTITY LINE */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-primary to-orange-500 opacity-20" />
    </section>
  );
};

export default NotFound;