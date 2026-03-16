import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureItem {
  title: string;
  desc: string;
  icon: LucideIcon;
}

interface FeatureGridProps {
  features: FeatureItem[];
}

const FeatureGrid = ({ features }: FeatureGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="group relative"
        >
          {/* Decorative Corner Accents */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-slate-200 group-hover:border-primary transition-colors z-20" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-slate-200 group-hover:border-secondary transition-colors z-20" />

          {/* Icon Section */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white shadow-lg border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
            </div>
          </div>

          {/* Card Body */}
          <div className="bg-slate-50/80 backdrop-blur-sm border border-slate-100 p-6 sm:p-8 md:p-12 rounded-tr-[3rem] sm:rounded-tr-[4rem] rounded-bl-[3rem] sm:rounded-bl-[4rem] group-hover:bg-white group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] group-hover:border-primary/20 transition-all duration-700 h-full flex flex-col justify-between relative overflow-hidden">
            
            <div className="space-y-4 md:space-y-6 pr-10 sm:pr-12 md:pr-16">
              <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base md:text-xl leading-relaxed tracking-wide font-semibold border-l-2 border-slate-100 group-hover:border-primary/30 pl-4 sm:pl-6 transition-all">
                {feature.desc}
              </p>
            </div>

          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureGrid;