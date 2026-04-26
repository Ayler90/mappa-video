export function LiveSection() {
  const lives = [
    {
      n: "01",
      m: "Maggio",
      title: "Prima Live Tutorial e Q&A",
      body: "La prima live in cui creeremo insieme un video e potrai farmi tutte le domande che vorrai. Durata: 1 ora circa.",
    },
    {
      n: "02",
      m: "Giugno",
      title: "Seconda Live Tutorial e Q&A",
      body: "La seconda live in cui realizzeremo un video seguendo il mio tutorial e risponderò a tutte le domande che hai. Durata: 1 ora circa.",
    },
    {
      n: "03",
      m: "Luglio",
      title: "Terza Live Tutorial e Q&A",
      body: "La terza live in cui realizzeremo un video seguendo il mio tutorial e risponderò a tutte le domande che hai. Durata: 1 ora circa.",
    },
  ];

  const ww = [
    {
      t: "3 call 1:1 direttamente con me, da prenotare entro 1 anno.",
      d: "All'interno delle call ti guiderò passo dopo passo nella creazione di video efficaci per il tuo brand o business.",
    },
    {
      t: "Sessioni di strategia, editing e contenuti",
      d: "Approfondiremo tutto ciò che serve per trasformare i tuoi video in un vero strumento di crescita: dalla strategia video, alle tecniche di editing, fino ai format che funzionano davvero su Instagram.",
    },
    {
      t: "Tre live Q&A di gruppo",
      d: "Avrai la possibilità di fare domande, ricevere feedback sui tuoi contenuti e chiarire ogni dubbio direttamente con me, in un ambiente ristretto e focalizzato.",
    },
  ];

  return (
    <section id="percorso-live" className="py-24 lg:py-32 bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4">
            🔔 Live Q&A con me e il percorso Live 1:1
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-black leading-tight tracking-tighter text-balance">
            Partecipa alle <em className="text-gold">Live con Me</em> e accedi al{" "}
            <em className="text-gold">percorso 1:1 con me</em>{" "}
            <span className="text-paper/60 text-2xl block mt-2 not-italic font-sans font-medium">
              (solo per 5 persone)
            </span>
          </h2>
        </div>

        <div className="mt-16">
          <h3 className="text-center font-display text-2xl md:text-3xl font-bold mb-10">
            👥 Partecipa alle 3 Live di gruppo con Me
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {lives.map((l) => (
              <div
                key={l.n}
                className="rounded-3xl border-2 border-paper/15 p-7 hover:border-gold transition-colors"
              >
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-display text-5xl font-black text-gold">{l.n}</span>
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-paper/60">
                    {l.m}
                  </span>
                </div>
                <h4 className="font-display text-xl font-bold mb-3">{l.title}</h4>
                <p className="text-paper/75 leading-relaxed text-sm">{l.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-paper/60">
            Disponibile nel Percorso <strong className="text-gold">Golden</strong> e nel Percorso
            Live <strong className="text-gold">Willy Wonka</strong>.
          </p>
        </div>

        <div className="mt-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 bg-gold rounded-3xl rotate-3" />
              <div className="relative aspect-square overflow-hidden rounded-3xl border-2 border-paper">
                <img
                  src="https://d1yei2z3i6k35z.cloudfront.net/7515914/69ecb6196d00b7.77810316_modulo38.png"
                  alt="Percorso 1:1"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -top-5 -right-5 rotate-6 rounded-full bg-paper text-ink px-5 py-3 font-bold shadow-bold">
                Solo 5 posti
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4">
              Vuoi il mio aiuto 1:1 nella tua strategia video?
            </p>
            <h3 className="font-display text-3xl md:text-5xl font-black leading-tight tracking-tighter text-balance">
              Accedi al <em className="text-gold">percorso Live 1:1</em>, solo per{" "}
              <span className="underline decoration-gold decoration-[6px] underline-offset-8">
                5 persone.
              </span>
            </h3>
            <p className="mt-6 text-lg text-paper/80 leading-relaxed">
              In questo nuovo lancio potrai accedere al{" "}
              <strong className="text-paper">percorso live, 1:1 con me</strong>, de{" "}
              <strong className="text-paper">La Fabbrica di Video</strong>, dove potrai lavorare in
              modo pratico e interattivo sulla tua strategia video.{" "}
              <em className="text-gold">Solo 5 posti disponibili</em> per chi vuole un supporto
              diretto e un confronto costante.
            </p>

            <p className="mt-8 font-display text-xl font-bold">
              Cosa faremo all'interno del percorso 1:1?
            </p>
            <ul className="mt-5 space-y-5">
              {ww.map((w, i) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 h-9 w-9 rounded-full bg-gold text-ink flex items-center justify-center font-bold font-display">
                    {i + 1}
                  </span>
                  <div>
                    <strong className="text-paper">{w.t}</strong>
                    <p className="mt-1 text-paper/70 leading-relaxed text-sm">{w.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
