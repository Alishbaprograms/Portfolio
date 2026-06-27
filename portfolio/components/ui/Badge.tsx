"use client";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variants = {
    default: "bg-white/5 text-slate-300 border border-white/10",
    accent: "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20",
    outline: "bg-transparent text-slate-400 border border-white/10",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
