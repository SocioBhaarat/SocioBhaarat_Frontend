import React from 'react';
import { motion } from 'framer-motion';

// Types define karna zaroori hai taaki data sahi format mein aaye
interface ServiceItem {
  title: string;
  desc: string;
  color: string;
  icon: React.ReactNode;
}

interface ServiceListProps {
  services: ServiceItem[];
}

const ServiceList = ({ services }: ServiceListProps) => {
  return (
    <div className="w-full flex flex-col">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          // Local CSS Variable for hover effect
          style={{ '--hover-color': service.color } as React.CSSProperties}
          className="group grid grid-cols-1 md:grid-cols-12 py-8 border-b border-slate-100 items-center hover:bg-slate-50/50 transition-all duration-500 px-6 -mx-6 rounded-2xl relative overflow-hidden"
        >
          {/* 1. Technical Index */}
          <div className="md:col-span-1 mb-6 md:mb-0">
            <span className="text-xs font-bold text-slate-300 transition-colors custom-index">
              [ 0{index + 1} ]
            </span>
          </div>

          {/* 2. Icon & Title Section */}
          <div className="md:col-span-4 flex items-center gap-6 mb-6 md:mb-0">
            <div className="relative">
              <div
                className="absolute inset-0 border rounded-2xl group-hover:scale-125 group-hover:rotate-45 transition-all duration-700 opacity-20"
                style={{ borderColor: service.color }}
              />
              <div
                className="p-4 md:p-5 rounded-2xl bg-white shadow-sm border border-slate-100 relative z-10 transition-all duration-500 custom-icon-box"
                style={{ color: service.color }}
              >
                {React.isValidElement(service.icon) 
                  ? React.cloneElement(service.icon as React.ReactElement, { className: "w-6 h-6 md:w-8 md:h-8" })
                  : service.icon
                }
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-slate-900 transition-colors duration-500 custom-title">
              {service.title}
            </h3>
          </div>

          {/* 3. Detailed Description */}
          <div className="md:col-span-7 relative">
            <p className="text-slate-600 text-base md:text-xl leading-relaxed tracking-wide font-semibold border-l-2 border-slate-100 pl-8 transition-all duration-500 custom-desc">
              {service.desc}
            </p>
          </div>

          {/* Background Watermark */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 text-[10rem] font-bold text-slate-900/[0.02] pointer-events-none select-none transition-colors custom-watermark">
            0{index + 1}
          </div>

          {/* Scoped Styles */}
          <style jsx>{`
            .group:hover .custom-icon-box {
              background-color: var(--hover-color) !important;
              color: white !important;
            }
            .group:hover .custom-index {
              color: var(--hover-color) !important;
            }
            .group:hover .custom-desc {
              border-left-color: var(--hover-color) !important;
              padding-left: 2.5rem;
            }
          `}</style>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceList;