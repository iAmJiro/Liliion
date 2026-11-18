export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-white">
      <p className="mb-4 text-sm font-semibold tracking-[0.4em] text-cyan-400">
        LEAGUE OF LEGENDS
      </p>

      <h1 className="text-center text-6xl font-black tracking-tight text-amber-300 md:text-8xl">
        RIFT RARITY
      </h1>

      <p className="mt-6 max-w-lg text-center text-lg text-slate-400">
        Dive deeper into your League of Legends knowledge.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {["Champions", "Items", "Map"].map((category) => (
          <span
            key={category}
            className="rounded-full border border-cyan-700 px-5 py-2 text-cyan-300"
          >
            {category}
          </span>
        ))}
      </div>

      <button
        onClick={() => alert("Rift Rarity is ready for development!")}
        className="mt-10 rounded-xl bg-amber-400 px-10 py-4 text-lg font-bold text-slate-950 transition hover:bg-amber-300"
      >
        BEGIN DIVE
      </button>
    </main>
  );
}
