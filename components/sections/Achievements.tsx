"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <SectionHeader
          eyebrow="Achievements"
          title="Milestones & "
          highlightedWord="impact"
          description="Key highlights from building AI systems in production."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/[0.14] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{item.icon}</span>
                <span className="text-xs font-mono text-slate-600">{item.year}</span>
              </div>
              <h3 className="font-semibold text-slate-100 text-sm mb-2 group-hover:text-indigo-300 transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
