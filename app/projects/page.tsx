import Link from "next/link";

const projects = [
  {
    title: "Portfolio Site",
    tag: "Next.js / Tailwind CSS",
    description: "学習ログと制作物をまとめるためのポートフォリオサイト。ページ間の導線とレスポンシブなカード UI を整備しました。",
  },
  {
    title: "Competitive Programming Notes",
    tag: "C++ / AtCoder",
    description: "解法の考え方、典型アルゴリズム、実装で詰まったポイントを整理するノート群です。",
  },
  {
    title: "Unity Prototype",
    tag: "Unity / C#",
    description: "ゲーム制作で試した入力、物理、UI 表現などのプロトタイプをまとめる予定です。",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-32 text-white sm:py-36">
      <section className="page-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Works</p>
            <h1 className="mt-4 text-4xl font-black sm:text-6xl">Projects</h1>
            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              作ったもの・実装したものを、目的と学びが伝わるように整理しています。
            </p>
          </div>
          <Link href="/logs" className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold transition hover:bg-white/10">
            学習ログも見る →
          </Link>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="glass-card group relative min-h-64 overflow-hidden p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40">
              <span className="absolute -right-8 -top-8 size-28 rounded-full border border-white/10 transition duration-500 group-hover:scale-125 group-hover:border-cyan-300/30" />
              <p className="text-sm font-semibold text-cyan-200">{project.tag}</p>
              <h2 className="mt-4 text-2xl font-bold">{project.title}</h2>
              <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
