import Link from "next/link";

const skills = ["C++", "AtCoder", "Unity", "C#", "Next.js", "TypeScript"];

const highlights = [
  {
    title: "Projects",
    description: "制作物、実装メモ、改善したポイントをカード形式で整理しています。",
    href: "/projects",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    title: "Learning Logs",
    description: "学習内容や詰まったことを、後から振り返れる形で蓄積します。",
    href: "/logs",
    accent: "from-fuchsia-400 to-violet-500",
  },
  {
    title: "About",
    description: "興味分野、現在の学習テーマ、ポートフォリオの方向性を紹介します。",
    href: "/about",
    accent: "from-emerald-400 to-teal-500",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 py-28 sm:px-8">
        <div className="absolute left-1/2 top-24 -z-10 size-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 -z-10 size-80 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
            Portfolio / Learning Log
          </p>

          <h1 className="text-5xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl">
            作って、学んで、更新し続けるポートフォリオ。
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Cold Door は C++、AtCoder、Unity、C#、Web 開発の成果と学習ログをまとめるサイトです。制作物へすぐ移動できる導線と、読みやすいモダンなレイアウトに整えています。
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              制作物を見る
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              プロフィールへ
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {highlights.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-slate-950/30 transition hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/[0.07]"
            >
              <div className={`mb-6 h-1.5 w-20 rounded-full bg-gradient-to-r ${item.accent}`} />
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
              <span className="mt-6 inline-flex text-sm font-semibold text-cyan-200 transition group-hover:translate-x-1">
                詳細へ →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
