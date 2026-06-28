const skills = ["C++", "AtCoder", "Unity", "C#", "Next.js", "TypeScript"];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm font-medium text-cyan-400">
          Portfolio / Learning Log
        </p>

        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          Cold Door
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          C++, AtCoder, Unity, C#, Web開発などの学習記録と成果物をまとめるためのポートフォリオサイトです。
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition hover:border-cyan-500/50">
            <h2 className="text-xl font-semibold">Projects</h2>
            <p className="mt-3 text-zinc-400">
              制作物や実装したものをここに追加していきます。
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition hover:border-cyan-500/50">
            <h2 className="text-xl font-semibold">Learning Logs</h2>
            <p className="mt-3 text-zinc-400">
              学んだこと、詰まったこと、理解したことを記録していきます。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}