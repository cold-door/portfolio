import Link from "next/link";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/logs", label: "Logs" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="font-semibold text-zinc-100">
          Cold Door
        </Link>

        <nav className="flex gap-6 text-sm text-zinc-400">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-cyan-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}