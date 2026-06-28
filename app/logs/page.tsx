import Link from "next/link";

const logs = [
  "アルゴリズムの典型パターンを C++ で実装して理解する",
  "Next.js の App Router とページ遷移の仕組みを確認する",
  "Unity と C# で小さな機能を作りながらゲーム制作に慣れる",
];

export default function LogsPage() {
  return (
    <main className="min-h-screen py-32 text-white sm:py-36">
      <section className="page-shell">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Journal</p>
        <h1 className="mt-4 text-4xl font-black sm:text-6xl">Learning Logs</h1>
        <p className="mt-5 max-w-2xl leading-8 text-slate-300">
          勉強したこと、詰まったこと、理解したことを短く記録し、次の制作につなげます。
        </p>

        <div className="mt-12 grid gap-4">
          {logs.map((log, index) => (
            <article key={log} className="glass-card group flex gap-5 p-6 transition duration-300 hover:translate-x-1 hover:border-cyan-200/30">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan-200 to-blue-500 font-black text-slate-950 shadow-lg shadow-cyan-500/20">
                {index + 1}
              </span>
              <p className="self-center leading-7 text-slate-200">{log}</p>
            </article>
          ))}
        </div>

        <Link href="/projects" className="mt-10 inline-flex rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200">
          制作物へ移動する
        </Link>
      </section>
    </main>
  );
}
