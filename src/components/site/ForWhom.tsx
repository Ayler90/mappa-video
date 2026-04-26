export function ForWhom() {
  const yes = [
    {
      t: "Personal Brand",
      d: "Hai un Personal Brand e vuoi essere costante nella creazione di contenuti video per vedere una crescita continua e attirare più clienti.",
    },
    {
      t: "Small Business",
      d: "Hai uno Small Business e vuoi promuovere i tuoi prodotti in modo efficace e autentico, mostrando i dettagli e l'unicità che li rendono speciali.",
    },
    {
      t: "Artigian*",
      d: "Sei un Artigian* e vuoi vivere della tua arte, trasformando i tuoi contenuti video in uno strumento di crescita e vendita.",
    },
  ];

  const no = [
    {
      t: "Videomaker avanzato",
      d: "Sei un videomaker avanzato e cerchi una formazione professionale sul filmmaking. Questo non è un corso avanzato.",
    },
    {
      t: "Tecniche pro avanzate",
      d: "Stai cercando una formazione tecnica avanzata su montaggio ed editing video. Nel corso non usiamo software complessi e tecniche di editing avanzato.",
    },
    {
      t: "Vuoi delegare tutto",
      d: "Vuoi delegare completamente la creazione dei tuoi video. La Fabbrica di Video ti insegna a realizzare contenuti in autonomia, senza bisogno di un team o di attrezzature costose.",
    },
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div className="rounded-3xl border-2 border-ink bg-gold p-8 lg:p-12 shadow-bold">
          <h2 className="font-display text-3xl md:text-5xl font-black leading-tight tracking-tight">
            La Fabbrica di Video <em>fa per te</em> se…
          </h2>
          <ul className="mt-8 space-y-6">
            {yes.map((it, i) => (
              <li key={i} className="flex gap-4">
                <span className="shrink-0 h-9 w-9 rounded-full bg-ink text-gold flex items-center justify-center font-bold">
                  ✓
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold">{it.t}</h3>
                  <p className="mt-1 text-ink/85 leading-relaxed">{it.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border-2 border-ink bg-ink text-paper p-8 lg:p-12">
          <h2 className="font-display text-3xl md:text-5xl font-black leading-tight tracking-tight">
            La Fabbrica di Video <em className="text-gold">NON</em>{" "}
            <em>fa per te</em> se…
          </h2>
          <ul className="mt-8 space-y-6">
            {no.map((it, i) => (
              <li key={i} className="flex gap-4">
                <span className="shrink-0 h-9 w-9 rounded-full bg-paper/10 text-paper flex items-center justify-center font-bold">
                  ✕
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold">{it.t}</h3>
                  <p className="mt-1 text-paper/75 leading-relaxed">{it.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function LessonsPreview() {
  const previews = [
    "Impara a creare lo sdoppiamento su CapCut",
    "Impara tutte le funzionalità di CapCut versione App",
    "Impara a usare i trend a modo tuo",
    "Che struttura deve avere il tuo video per essere efficace?",
    "Il setting migliore per i tuoi video, se usi la ring light",
  ];
  return (
    <section className="py-24 lg:py-32 bg-cream/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl md:text-5xl font-black leading-tight tracking-tight text-balance">
            Guarda un'<em className="text-teal">anteprima</em> delle lezioni di La Fabbrica di Video{" "}
            🫢
          </h2>
          <p className="mt-5 text-lg text-ink/80 leading-relaxed">
            Voglio farti vedere un' <strong>anteprima delle lezioni che troverai</strong> all'interno
            di La Fabbrica di Video, per darti un'idea di quello che imparerai. E questo{" "}
            <strong>è solo l'inizio</strong>.
          </p>
          <p className="mt-3 text-sm italic text-muted-foreground">
            Scorri con le freccette per vedere alcune lezioni.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {previews.map((p, i) => (
            <div
              key={i}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-ink bg-ink"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal/40 via-ink to-gold/30" />
              <div className="absolute inset-0 flex items-end p-4">
                <p className="font-display text-sm md:text-base font-bold text-paper text-balance leading-tight">
                  {p}
                </p>
              </div>
              <div className="absolute top-3 right-3 h-9 w-9 rounded-full bg-paper/95 flex items-center justify-center text-ink transition-transform group-hover:scale-110">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 ml-0.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider font-bold text-paper/80">
                Lezione 0{i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
