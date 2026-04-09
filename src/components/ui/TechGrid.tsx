import React from 'react';
import { motion } from 'framer-motion';

// Types define karna taaki data flow clear rahe
interface TechItem {
  name: string;
  logo: string; // Simple Icons slug (e.g., 'react', 'nodejs')
}

interface TechGroup {
  category: string;
  color: string;
  items: TechItem[];
}

interface TechGridProps {
  techStack: TechGroup[];
}

const TechGrid = ({ techStack }: TechGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {techStack.map((group, groupIdx) => (
        <motion.div
          key={groupIdx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-500 group"
        >
          {/* Header with Dynamic Background Color */}
          <div
            style={{ backgroundColor: group.color }}
            className="p-5"
          >
            <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">
              {group.category}
            </h3>
          </div>

          <div className="flex-grow">
            {group.items.map((tech, techIdx) => (
              <div
                key={techIdx}
                className="flex items-center gap-4 px-6 py-4 border-b border-slate-50 last:border-b-0 hover:bg-slate-50/80 transition-colors group/item"
              >
                {/* Language Logo using Simple Icons CDN */}
                <div className="w-6 h-6 flex items-center justify-center transition-all duration-300 transform group-hover/item:scale-125 group-hover/item:rotate-6">
                  <img
                    src={`https://cdn.simpleicons.org/${tech.logo}`}
                    alt={tech.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.src = 'https://cdn.simpleicons.org/codeigniter';
                    }}
                  />
                </div>

                <span className="text-base md:text-lg font-bold text-slate-700 tracking-tight">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TechGrid;