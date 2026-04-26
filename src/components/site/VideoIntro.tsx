export function VideoIntro() {
  return (
    <section className="py-24 lg:py-32 bg-ink text-paper relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="mx-auto max-w-6xl px-5 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-6">
            Perché dovresti iscriverti a La Fabbrica di Video?
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-black leading-tight text-balance">
            Ho preparato un video per te <span className="inline-block">🎬</span>
          </h2>
        </div>

        <div className="mt-14 relative mx-auto max-w-4xl">
          <div className="absolute -inset-3 bg-gold rounded-3xl rotate-1" />
          <div className="relative aspect-video rounded-3xl overflow-hidden border-2 border-paper bg-cream/10 flex items-center justify-center">
            <button
              aria-label="Riproduci video"
              className="group h-24 w-24 rounded-full bg-gold text-ink flex items-center justify-center shadow-bold transition-transform hover:scale-110"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10 ml-1">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <span className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.2em] text-paper/70">
              Anteprima · 3 min
            </span>
          </div>
        </div>

        <div className="mt-14 max-w-3xl mx-auto space-y-6 text-lg leading-relaxed text-paper/85 text-pretty">
          <h3 className="font-display text-2xl md:text-3xl font-bold leading-snug text-paper">
            La Fabbrica di Video è il percorso per chi vuole crescere sui social grazie ai video,
            creare video unici e che generano interazioni e vendite.
          </h3>
          <p>
            Che tu voglia iniziare con pochi video semplici, per imparare le transizioni o a
            scegliere i giusti ganci, o creare contenuti in modo costante e strutturato, troverai il
            metodo perfetto per <strong className="text-gold">Instagram e i social che utilizzi</strong>.
          </p>
          <p>
            Il corso è progettato per <strong>adattarsi al tuo livello</strong>, che tu sia alle
            prime armi o voglia migliorare le tue competenze, e ti guiderà passo dopo passo per
            realizzare <strong>video efficaci con gli strumenti che già possiedi</strong>, per
            crescere su Instagram nel 2026.
          </p>
          <p>
            Se vuoi sapere nei minimi dettagli{" "}
            <strong>come funziona La Fabbrica dei Video</strong>, cosa troverai al suo interno e{" "}
            <strong>se è il percorso giusto per te</strong>, guarda il video qui sotto.
          </p>
        </div>
      </div>
    </section>
  );
}
