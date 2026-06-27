export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} Alishba Karam. All rights reserved.
        </p>
        <p className="text-sm text-slate-700">
          Built with Next.js · TypeScript · Tailwind · Framer Motion
        </p>
      </div>
    </footer>
  );
}
