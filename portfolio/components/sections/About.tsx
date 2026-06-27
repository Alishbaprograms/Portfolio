"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const items = [
  {
    icon: "🤖",
    title: "AI-First Engineer",
    body: "I build production LLM apps, RAG pipelines, and multi-agent systems — not demos, but real systems people rely on.",
  },
  {
    icon: "🔧",
    title: "Full Stack at Heart",
    body: "From NestJS APIs to Flutter mobile, React frontends to Django backends — I own the full product lifecycle.",
  },
  {
    icon: "⚡",
    title: "Automation Obsessed",
    body: "Make.com, n8n, Zapier — I connect systems and eliminate manual work so teams focus on what matters.",
  },
  {
    icon: "☁️",
    title: "Cloud Native",
    body: "Deploying on Azure with GitHub Actions CI/CD, designing for reliability, scalability, and zero-downtime.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="About Me"
          title="Building AI that "
          highlightedWord="actually ships"
          description="I'm a Full Stack AI Engineer at Jaffer Business Systems, turning cutting-edge AI research into production systems that drive real business outcomes."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-slate-400 leading-relaxed text-base">
              I&apos;m passionate about the intersection of AI and product engineering.
              At JBS, I design and deploy{" "}
              <span className="text-slate-200">LLM-powered applications</span>,{" "}
              <span className="text-slate-200">retrieval-augmented generation systems</span>, and{" "}
              <span className="text-slate-200">intelligent AI agents</span> that automate
              complex enterprise workflows.
            </p>
            <p className="text-slate-400 leading-relaxed text-base">
              My Final Year Project — a{" "}
              <span className="text-slate-200">Doctor&apos;s Personal Healthcare Assistant</span>{" "}
              — was built in collaboration with NICH Karachi, using Flutter with
              locally-hosted Ollama and DeepSeek LLMs for completely private,
              on-device AI inference.
            </p>
            <p className="text-slate-400 leading-relaxed text-base">
              Beyond code, I believe great engineering means understanding the
              problem deeply, designing for maintainability, and shipping fast
              without compromising on quality.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Karachi, PK", "Open to Remote", "AI/ML", "Full Stack"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full border border-white/10 text-slate-400 bg-white/[0.03]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — trait cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-5 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 group"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-slate-100 text-sm mb-1.5 group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
