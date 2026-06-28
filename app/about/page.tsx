import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-28 text-white sm:px-8">
      <section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">About</p>
          <h1 className="mt-4 text-4xl font-black sm:text-6xl">Cold Door</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            C++、AtCoder、Unity、C#、Web 開発などを学習中です。このサイトでは、制作物と学習ログを一か所にまとめ、継続的な成長が見えるポートフォリオを目指しています。
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/projects" className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200">
              Projects へ
            </Link>
            <Link href="/logs" className="rounded-full border border-white/15 px-6 py-3 font-semibold transition hover:bg-white/10">
              Logs へ
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-cyan-950/20">
          <h2 className="text-2xl font-bold">Focus</h2>
          <ul className="mt-6 space-y-4 text-slate-300">
            <li>・競技プログラミングで問題解決力を磨く</li>
            <li>・Unity と C# で動くプロトタイプを作る</li>
            <li>・Next.js で見やすく運用しやすい Web UI を作る</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
