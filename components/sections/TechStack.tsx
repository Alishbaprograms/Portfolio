"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { techCategories } from "@/lib/data";

const levelColors = {
  expert: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  proficient: "bg-purple-500/15 text-purple-300 border-purple-500/25",
  familiar: "bg-slate-500/15 text-slate-400 border-slate-500/25",
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Tools I build "
          highlightedWord="great things"
          description="A curated set of technologies I work with daily — from AI/ML frameworks to cloud infrastructure."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {techCategories.map((category, ci) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
              className="glass rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
            >
              <h3 className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-4">
                {category.name}
              </h3>
              <ul className="space-y-2.5">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-slate-300">{item.name}</span>
                    <span
                      className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${levelColors[item.level]}`}
                    >
                      {item.level}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-6 mt-10"
        >
          {Object.entries(levelColors).map(([level, cls]) => (
            <div key={level} className="flex items-center gap-2">
              <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${cls}`}>
                {level}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
