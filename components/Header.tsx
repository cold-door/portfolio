import Link from "next/link";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/logs", label: "Logs" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-3 font-semibold text-white">
          <span className="grid size-9 place-items-center rounded-2xl bg-cyan-400 text-sm font-black text-slate-950 shadow-lg shadow-cyan-400/20 transition group-hover:rotate-6">
            CD
          </span>
          <span>Cold Door</span>
        </Link>

        <nav className="flex items-center gap-2 text-sm text-slate-300">
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
