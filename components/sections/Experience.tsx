"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import { experiences } from "@/lib/data";

const companyIcons: Record<string, string> = {
  jbs: "🤖",
  asani: "⚡",
  aeroglobe: "✈️",
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
          title="Engineering "
          highlightedWord="History"
        />

        <div className="relative">
          {/* Center vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-indigo-500/60 via-purple-500/40 via-cyan-500/30 to-transparent" />

          {/* Mobile left line */}
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-purple-500/30 to-transparent" />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={exp.id} className="relative">
                  {/* Center icon node */}
                  <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 z-10 w-12 h-12 rounded-xl bg-[#0f0f1a] border border-indigo-500/30 items-center justify-center text-xl shadow-lg shadow-indigo-500/10">
                    {companyIcons[exp.id] ?? "💼"}
                  </div>

                  {/* Mobile dot */}
                  <div className="md:hidden absolute left-5 top-8 -translate-x-1/2 z-10 w-8 h-8 rounded-lg bg-[#0f0f1a] border border-indigo-500/30 flex items-center justify-center text-sm">
                    {companyIcons[exp.id] ?? "💼"}
                  </div>

                  {/* Desktop alternating layout */}
                  <div className="hidden md:grid grid-cols-2 gap-8 items-start">
                    {/* Left side */}
                    <div className={`${isLeft ? "pr-16" : "pl-16"} ${!isLeft ? "col-start-1 row-start-1" : ""}`}>
                      {isLeft ? (
                        /* Content card on left */
                        <motion.div
                          initial={{ opacity: 0, x: -40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <ExperienceCard exp={exp} />
                        </motion.div>
                      ) : (
                        /* Date/company on left when card is right */
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

                    {/* Right side */}
                    <div className={`${!isLeft ? "pl-16" : "pr-16"}`}>
                      {!isLeft ? (
                        /* Content card on right */
                        <motion.div
                          initial={{ opacity: 0, x: 40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <ExperienceCard exp={exp} />
                        </motion.div>
                      ) : (
                        /* Date/company on right when card is left */
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
    <div className="glass rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/[0.14] transition-all duration-300 group">
      {/* Role + company */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-bold text-slate-100 text-base group-hover:text-indigo-300 transition-colors">
            {exp.role}
          </h3>
          {exp.current && (
            <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full">
              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
              Current
            </span>
          )}
        </div>
        <p className="text-indigo-400 text-sm font-semibold">{exp.company}</p>
        <p className="text-slate-600 text-xs mt-0.5 font-mono">{exp.period} · {exp.location}</p>
      </div>

      {/* Tech badges — before description */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {exp.technologies.map((tech) => (
          <Badge key={tech} variant="accent">{tech}</Badge>
        ))}
      </div>

      {/* Bullets with show more */}
      <ul className="space-y-2">
        <AnimatePresence initial={false}>
          {visible.map((bullet, bi) => (
            <motion.li
              key={bi}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed overflow-hidden"
            >
              <span className="mt-2 w-1 h-1 rounded-full bg-cyan-500 shrink-0" />
              {bullet}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
        >
          <span>{expanded ? "Show less" : `+${exp.description.length - PREVIEW_COUNT} more`}</span>
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
    <div className={`space-y-2 ${align === "right" ? "items-end" : "items-start"} flex flex-col`}>
      <span className="text-xs font-mono tracking-widest text-indigo-400/80 uppercase">
        {exp.period}
      </span>
      <h4 className="text-xl font-bold text-slate-100">{exp.role}</h4>
      <p className="text-cyan-400 font-semibold text-sm">{exp.company}</p>
      <p className="text-slate-600 text-xs">{exp.location}</p>
      {exp.current && (
        <span className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Currently here
        </span>
      )}
    </div>
  );
}
