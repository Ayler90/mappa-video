export function StudentReels() {
  return (
    <section className="py-24 lg:py-32 bg-cream/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl md:text-5xl font-black leading-tight text-balance">
            Reel unici che <em className="text-teal">attirano pubblico</em> e{" "}
            <em className="text-teal">vendono</em>, senza perdere ore? Mai stato più facile di così
            👇🏻
          </h2>
          <div className="mt-8 space-y-5 text-lg text-ink/80 leading-relaxed text-pretty">
            <p>
              Con la Fabbrica di Video impari a creare reel e video con transizioni spettacolari,{" "}
              <strong>senza metterci ore</strong> a crearli, che portano{" "}
              <strong>nuovo pubblico</strong> nella tua community e generano{" "}
              <strong>interazioni</strong> e <strong>vendite</strong>, anche{" "}
              <strong>senza avere competenze di video making</strong>?
            </p>
            <p className="text-base text-ink/65 italic">
              (Questi qui sotto sono reel realizzati dai miei studenti/clienti, che{" "}
              <strong>hanno imparato a registrare video creativi</strong> applicando il{" "}
              <strong>metodo del video corso</strong>)
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="group relative aspect-[9/16] overflow-hidden rounded-2xl border-2 border-ink bg-ink"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal/30 via-ink to-gold/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-14 w-14 rounded-full bg-paper/90 text-ink flex items-center justify-center transition-transform group-hover:scale-110">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 ml-0.5">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-wider text-paper/80 font-bold">
                Reel #{String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
