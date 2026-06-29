"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import { experiences } from "@/lib/data";

// Company initials for the timeline node
const companyInitials: Record<string, string> = {
  jbs: "JBS",
  asani: "AS",
  aeroglobe: "AG",
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-cyan-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <SectionHeader
          eyebrow="Experience"
          title="Professional "
          highlightedWord="Journey"
        />

        <div className="relative">
          {/* Center vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent" />

          {/* Mobile left line */}
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/25 to-transparent" />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              const initials = companyInitials[exp.id] ?? "CO";

              return (
                <div key={exp.id} className="relative">
                  {/* Center node — initials, no emoji */}
                  <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 z-10 w-11 h-11 rounded-lg bg-[#0c0c18] border border-indigo-500/25 items-center justify-center shadow-md shadow-black/40">
                    <span className="text-[10px] font-bold tracking-wider text-indigo-400">
                      {initials}
                    </span>
                  </div>

                  {/* Mobile dot */}
                  <div className="md:hidden absolute left-5 top-8 -translate-x-1/2 z-10 w-8 h-8 rounded-md bg-[#0c0c18] border border-indigo-500/25 flex items-center justify-center">
                    <span className="text-[8px] font-bold tracking-wider text-indigo-400">
                      {initials}
                    </span>
                  </div>

                  {/* Desktop alternating layout */}
                  <div className="hidden md:grid grid-cols-2 gap-8 items-start">
                    <div className={`${isLeft ? "pr-16" : "pl-16"} ${!isLeft ? "col-start-1 row-start-1" : ""}`}>
                      {isLeft ? (
                        <motion.div
                          initial={{ opacity: 0, x: -40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <ExperienceCard exp={exp} />
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="text-right pt-6"
                        >
                          <DateBlock exp={exp} align="right" />
                        </motion.div>
                      )}
                    </div>

                    <div className={`${!isLeft ? "pl-16" : "pr-16"}`}>
                      {!isLeft ? (
                        <motion.div
                          initial={{ opacity: 0, x: 40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <ExperienceCard exp={exp} />
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="text-left pt-6"
                        >
                          <DateBlock exp={exp} align="left" />
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Mobile layout */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="md:hidden pl-14"
                  >
                    <ExperienceCard exp={exp} />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ExpProps {
  exp: (typeof experiences)[number];
}

const PREVIEW_COUNT = 2;

function ExperienceCard({ exp }: ExpProps) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? exp.description : exp.description.slice(0, PREVIEW_COUNT);
  const hasMore = exp.description.length > PREVIEW_COUNT;

  return (
    <div className="glass rounded-2xl p-5 hover:bg-white/[0.06] hover:border-white/[0.14] transition-all duration-300 group">
      {/* Header */}
      <div className="mb-3">
        <div className="flex items-center gap-2 flex-wrap mb-0.5">
          <h3 className="font-bold text-slate-100 text-sm group-hover:text-indigo-300 transition-colors">
            {exp.role}
          </h3>
          {exp.current && (
            <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full">
              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
              Present
            </span>
          )}
        </div>
        <p className="text-indigo-400 text-xs font-semibold">{exp.company}</p>
        <p className="text-slate-600 text-[11px] mt-0.5 font-mono">{exp.period} · {exp.location}</p>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {exp.technologies.map((tech) => (
          <Badge key={tech} variant="accent">{tech}</Badge>
        ))}
      </div>

      {/* Bullets */}
      <ul className="space-y-1.5">
        <AnimatePresence initial={false}>
          {visible.map((bullet, bi) => (
            <motion.li
              key={bi}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed overflow-hidden"
            >
              <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-500/70 shrink-0" />
              {bullet}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2.5 text-[11px] text-indigo-400/80 hover:text-indigo-300 flex items-center gap-1 transition-colors"
        >
          {expanded ? "Show less" : `+${exp.description.length - PREVIEW_COUNT} more responsibilities`}
          <svg
            className={`w-3 h-3 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}
    </div>
  );
}

function DateBlock({ exp, align }: ExpProps & { align: "left" | "right" }) {
  return (
    <div className={`space-y-1.5 flex flex-col ${align === "right" ? "items-end" : "items-start"}`}>
      <span className="text-[10px] font-mono tracking-widest text-indigo-400/70 uppercase">
        {exp.period}
      </span>
      <h4 className="text-lg font-bold text-slate-100 leading-tight">{exp.role}</h4>
      <p className="text-cyan-400/80 font-semibold text-sm">{exp.company}</p>
      <p className="text-slate-600 text-xs">{exp.location}</p>
      {exp.current && (
        <span className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-400 bg-emerald-400/8 border border-emerald-400/20 px-2 py-0.5 rounded-full">
          <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
          Currently here
        </span>
      )}
    </div>
  );
}
