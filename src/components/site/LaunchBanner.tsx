export function LaunchBanner() {
  return (
    <div className="my-10 flex justify-center">
      <div className="inline-flex items-center gap-3 rounded-full border-2 border-ink bg-gold px-5 py-2.5 text-sm font-bold text-ink shadow-bold">
        <span className="text-base">🛑</span>
        Il prezzo di lancio scade venerdì 1 maggio alle 23:59.
      </div>
    </div>
  );
}
