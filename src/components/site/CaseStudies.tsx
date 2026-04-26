const stories = [
  {
    img: "https://d1yei2z3i6k35z.cloudfront.net/7515914/67d59ff3c81f2_1.png",
    title: (
      <>
        <strong>Silvia</strong>, traduttrice audiovisiva, è passata da poche centinaia di follower a{" "}
        <strong>oltre 15mila</strong>, in poco più di 1 anno.
      </>
    ),
    handle: "@piovonocopioni",
    before: [
      "Difficoltà a creare video costantemente e con una struttura",
      "Profilo con poche centinaia di follower e difficoltà a crescere.",
      "Non aveva una strategia di creazione video e questo le richiedeva tantissimo tempo e sforzi",
    ],
    after: [
      "Profilo con più di 15mila follower, grazie ai video",
      "I reel sono diventati il contenuto principale del suo profilo",
      "Ha strutturato i contenuti in maniera efficace e postato con costanza, nel lungo termine.",
    ],
  },
  {
    img: "https://d1yei2z3i6k35z.cloudfront.net/7515914/67d5a07f97992_ImmaginiVarie1080x1080px4.png",
    title: (
      <>
        <strong>Irene</strong> è un'artigiana che voleva imparare a mettere la faccia in video, per
        comunicare meglio e <strong>attirare più clienti</strong>.
      </>
    ),
    handle: "@raggomitolando",
    before: [
      "Timida e impacciata davanti alla camera, non riusciva a creare video parlati",
      "Non aveva un format sostenibile e compatibile con il suo lavoro",
      "Perdeva tantissimo tempo nel fare video e non aveva una sistema per farli velocemente",
    ],
    after: [
      "Disinvolta in video senza snaturarsi, anzi, rispettando il suo tono di voce",
      "Creare video la diverte e le richiede molto meno tempo, dato che ha un sistema per crearli",
      "Ha creato un format e anche rubriche speciali durante l'anno, diventando finalmente costante",
    ],
  },
];

export function CaseStudies() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-display text-2xl md:text-3xl italic font-semibold text-pretty">
            E non te lo dico solo io, ma anche{" "}
            <em className="text-teal">chi ha usato il mio stesso metodo</em>.
          </p>
          <p className="mt-3 text-lg text-muted-foreground">
            Il metodo che trovi all'interno de La Fabbrica di Video.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {stories.map((s, i) => (
            <article
              key={i}
              className={`grid lg:grid-cols-12 gap-10 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-5">
                <div className="relative">
                  <div className={`absolute -inset-3 rounded-3xl ${i % 2 === 0 ? "bg-gold rotate-2" : "bg-teal -rotate-2"}`} />
                  <div className="relative aspect-square overflow-hidden rounded-3xl border-2 border-ink">
                    <img src={s.img} alt="" loading="lazy" className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <h3 className="font-display text-2xl md:text-3xl font-bold leading-snug text-pretty">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  La trovi su Instagram come {s.handle}
                </p>

                <div className="mt-8 grid sm:grid-cols-2 gap-5">
                  <div className="rounded-2xl border-2 border-ink/10 bg-cream/60 p-6">
                    <div className="text-xs uppercase tracking-[0.2em] font-bold text-ink/60 mb-3">
                      Prima 😩
                    </div>
                    <ul className="space-y-3 text-sm">
                      {s.before.map((b, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="text-ink/40">—</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border-2 border-gold bg-gold/10 p-6">
                    <div className="text-xs uppercase tracking-[0.2em] font-bold text-ink mb-3">
                      Dopo 🤩
                    </div>
                    <ul className="space-y-3 text-sm font-medium">
                      {s.after.map((a, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="text-gold">✦</span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto space-y-5 text-lg text-ink/80 leading-relaxed text-center text-pretty">
          <p>
            Tutte le clienti di cui hai letto sopra non avevano <strong>né attrezzatura costosa</strong>,{" "}
            <strong>né un team</strong>, e <strong>neanche competenze di videomaking</strong>.
          </p>
          <p>
            E come hanno fatto a raggiungere i loro obiettivi e a{" "}
            <strong>diventare autonome nella creazione di video</strong>?
          </p>
          <p className="font-display text-xl italic">
            Hanno seguito un <strong className="text-teal not-italic">metodo</strong>, una serie di
            passaggi per creare gli script, registrare i reel e padroneggiare il montaggio, senza
            nulla togliere ai loro impegni quotidiani.
          </p>
          <p>
            Questo è il "segreto": ciò che <strong>trasforma qualsiasi video banale in spettacolare</strong>.
          </p>
          <p>
            E per farlo, <strong>ti serve solo uno smartphone</strong> e un <strong>metodo</strong>{" "}
            da seguire.
          </p>
        </div>
      </div>
    </section>
  );
}
