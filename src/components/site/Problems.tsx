const problems = [
  {
    t: "Pubblichi video ogni giorno, ma non ottieni né interazioni né vendite.",
    p: [
      "Ti sforzi di essere costante. Ogni settimana crei e pubblichi nuovi reel, sperando di far crescere la tua attività.",
      "Ma ogni volta la storia è la stessa: poche views, nessun commento e zero risultati concreti.",
      "E intanto gli altri crescono.",
    ],
  },
  {
    t: "Non sai cosa registrare e i tuoi video sono sempre uguali.",
    p: [
      "Apri Instagram e vedi professionisti che sfornano video uno dopo l'altro.",
      "Tu invece passi ore a fissare lo schermo, senza un'idea chiara su cosa registrare.",
      "Ogni video che pensi di fare ti sembra banale o già visto, e alla fine lasci perdere.",
    ],
  },
  {
    t: "Per registrare un video di 20 secondi ci metti un'ora.",
    p: [
      "Imposti il telefono, accendi la luce… ma niente, qualcosa non va.",
      "L'inquadratura non ti convince, la luce è sbagliata, non sai cosa dire.",
      "Ci provi e riprovi, cancelli tutto, ricominci da capo. E dopo un'ora hai a malapena 20 secondi di video che nemmeno ti soddisfano.",
    ],
  },
  {
    t: "I tuoi video non attirano persone nuove.",
    p: [
      "Li pubblichi, ma non succede niente.",
      "Nessun nuovo follower, nessuna condivisione, nessun commento.",
      "Le persone che già ti seguono non si sentono coinvolte, e i tuoi video non arrivano mai a persone nuove.",
      "Sembra che parlino al vuoto.",
    ],
  },
];

export function Problems() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-bold mb-4">
            Diagnosi onesta
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-black leading-[1.05] tracking-tighter text-balance">
            Tu, in questo momento, ti trovi qui…
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {problems.map((it, i) => (
            <article
              key={i}
              className="group relative rounded-3xl border-2 border-ink bg-paper p-8 transition-all hover:shadow-bold hover:-translate-y-1"
            >
              <div className="font-display text-6xl font-black text-gold/40 leading-none mb-4">
                0{i + 1}
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold leading-snug text-pretty">
                {it.t}
              </h3>
              <div className="mt-5 space-y-3 text-ink/75 leading-relaxed">
                {it.p.map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-16 text-center font-display text-2xl md:text-3xl italic font-semibold">
          Ma tutto questo si può risolvere.
        </p>
      </div>
    </section>
  );
}
