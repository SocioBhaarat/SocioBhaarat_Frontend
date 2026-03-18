import React from 'react';
import { motion } from 'framer-motion';

interface ServiceItem {
    title: string;
    desc: string;
    icon: React.ReactNode;
    color: string;
}

interface ServiceListProps {
    services: ServiceItem[];
}

const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
    return (
        <div className="w-full flex flex-col gap-3">
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ '--hover-color': service.color } as React.CSSProperties}
                    className="group border border-slate-100 rounded-2xl relative bg-slate-50 overflow-hidden hover:bg-[#fafbff] transition-all duration-500 hover:border-primary/30 hover:shadow-md"
                >


                    <div className="grid grid-cols-1 lg:grid-cols-[72px_1fr_1.8fr] items-start lg:items-center gap-6 lg:gap-0 px-6 py-8 lg:px-8 border-b border-slate-50 last:border-0 relative group">


                        <span className="hidden lg:block text-[11px] font-bold tracking-[.2em] text-slate-400 transition-colors duration-300 custom-index">
                            [ 0{index + 1} ]
                        </span>


                        <div className="flex items-center gap-4 lg:gap-6 lg:pr-10">
                            <div className="relative flex-shrink-0" style={{ color: service.color }}>
                                <div className="absolute inset-0 rounded-2xl border-[1.5px] border-current opacity-20 group-hover:scale-110 lg:group-hover:scale-125 group-hover:rotate-45 transition-all duration-700" />
                                <div
                                    className="w-[48px] h-[48px] lg:w-[56px] lg:h-[56px] rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center relative z-10 transition-all duration-300 custom-icon-box"
                                    style={{ color: service.color }}
                                >
                                    {React.isValidElement(service.icon)
                                        ? React.cloneElement(service.icon as React.ReactElement, { className: "w-5 h-5 lg:w-6 lg:h-6" })
                                        : service.icon}
                                </div>
                            </div>
                            <h3 className="text-lg lg:text-xl font-bold text-slate-900 leading-snug transition-colors duration-300 custom-title">
                                {service.title}
                            </h3>
                        </div>


                        <div className="border-l-2 border-slate-100 pl-5 lg:pl-10 transition-all duration-300 custom-desc">
                            <p className="text-sm lg:text-base text-slate-900 font-medium leading-relaxed">
                                {service.desc}
                            </p>
                        </div>


                        <div className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 text-[5rem] lg:text-[7rem] font-extrabold text-slate-900/[0.018] pointer-events-none select-none leading-none">
                            0{index + 1}
                        </div>
                    </div>

                    <style jsx>{`
                  .group:hover .custom-index { color: var(--hover-color) !important; }
                  .group:hover .custom-icon-box {
                    background-color: var(--hover-color) !important;
                    color: white !important;
                  }
                  .group:hover .custom-title { color: var(--hover-color) !important; }
                  .group:hover .custom-desc {
                    border-left-color: var(--hover-color) !important;
                  }
                `}</style>
                </motion.div>
            ))}
        </div>
    );
};

export default ServiceList;