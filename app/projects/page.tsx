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
    <main className="min-h-screen bg-slate-950 px-5 py-28 text-white sm:px-8">
      <section className="mx-auto max-w-6xl">
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

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-200/40">
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
