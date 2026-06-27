"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-cyan-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've "
          highlightedWord="worked"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-16"
              >
                {/* Dot */}
                <div className="absolute left-4 top-5 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-2 border-[#080810] shadow-lg shadow-indigo-500/30 -translate-x-1/2" />

                <div className="glass rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-bold text-slate-100 text-base">{exp.role}</h3>
                      <p className="text-indigo-400 text-sm font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1">
                      <span className="text-xs text-slate-500 font-mono">{exp.period}</span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs text-slate-500">{exp.location}</span>
                        {exp.current && (
                          <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full">
                            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-5">
                    {exp.description.map((bullet, bi) => (
                      <li key={bi} className="flex items-start gap-2.5 text-sm text-slate-400">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-500 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="accent">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
