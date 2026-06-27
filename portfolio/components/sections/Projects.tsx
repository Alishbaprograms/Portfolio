"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import { projects } from "@/lib/data";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const visible = showAll ? [...featured, ...rest] : featured;

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Things I've "
          highlightedWord="built"
          description="Production systems, AI pipelines, and automation platforms — not side projects, but real-world engineering."
        />

        <div className="grid md:grid-cols-2 gap-5">
          <AnimatePresence>
            {visible.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group glass rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/[0.14] transition-all duration-300 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-lg">
                      {project.featured ? "⭐" : "📦"}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-100 text-sm leading-tight group-hover:text-indigo-300 transition-colors">
                        {project.title}
                      </h3>
                      <span
                        className={`text-[10px] font-medium ${
                          project.status === "completed"
                            ? "text-emerald-400"
                            : project.status === "in-progress"
                            ? "text-amber-400"
                            : "text-slate-500"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="default">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {rest.length > 0 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-sm text-slate-400 hover:text-slate-100 border border-white/10 hover:border-white/20 px-6 py-2.5 rounded-full transition-all duration-200 hover:bg-white/5"
            >
              {showAll ? "Show Less" : `Show ${rest.length} More Projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
