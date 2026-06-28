import Link from "next/link";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/logs", label: "Logs" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-3 pt-3 sm:px-6 sm:pt-5">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/65 px-4 shadow-2xl shadow-slate-950/30 backdrop-blur-2xl sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3 font-semibold text-white">
          <span className="relative grid size-9 place-items-center overflow-hidden rounded-xl border border-cyan-100/60 bg-gradient-to-br from-white via-cyan-200 to-blue-500 text-sm font-black text-slate-950 shadow-lg shadow-cyan-300/30 transition duration-500 group-hover:rotate-12">
            <span className="absolute inset-0 bg-[linear-gradient(135deg,transparent_35%,rgba(255,255,255,0.7)_50%,transparent_65%)] opacity-50" />
            FD
          </span>
          <span className="tracking-wide">Frozen Door</span>
        </Link>

        <nav className="flex items-center gap-0.5 text-xs text-slate-300 sm:gap-2 sm:text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-cyan-200 sm:px-4"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
