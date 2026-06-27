"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send — wire to any email service
    setTimeout(() => setStatus("sent"), 1200);
  };

  const inputClass =
    "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all duration-200";

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something "
          highlightedWord="great"
          description="I'm open to full-time roles, freelance AI projects, and technical collaborations. Let's talk."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-slate-400 leading-relaxed text-sm">
              Whether you have an exciting AI project, a full-time opportunity,
              or just want to chat about LLMs and automation — my inbox is open.
            </p>

            {/* Contact cards */}
            {[
              {
                icon: "✉️",
                label: "Email",
                value: "alishba.karam@jbs.live",
                href: "mailto:alishba.karam@jbs.live",
              },
              {
                icon: "📍",
                label: "Location",
                value: "Karachi, Pakistan",
                href: null,
              },
              {
                icon: "💼",
                label: "Status",
                value: "Open to opportunities",
                href: null,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="glass rounded-xl p-4 flex items-center gap-4 hover:bg-white/[0.06] transition-colors"
              >
                <span className="text-xl">{item.icon}</span>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-slate-200 hover:text-indigo-300 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-sm text-slate-200">{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-6 space-y-4"
          >
            {status === "sent" ? (
              <div className="text-center py-10">
                <div className="text-4xl mb-4">🎉</div>
                <p className="text-slate-200 font-medium">Message sent!</p>
                <p className="text-slate-500 text-sm mt-1">I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <>
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5 font-medium">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5 font-medium">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5 font-medium">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-indigo-500/20 hover:opacity-90 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
