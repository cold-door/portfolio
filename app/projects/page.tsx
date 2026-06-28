export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-20 text-zinc-100">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="mt-4 text-zinc-400">
          作ったもの・実装したものをここにまとめます。
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
            <h2 className="text-xl font-semibold">Portfolio Site</h2>
            <p className="mt-3 text-zinc-400">
              Next.js と Tailwind CSS で作成中のポートフォリオサイト。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}