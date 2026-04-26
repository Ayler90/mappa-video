type Item = {
  tag: string;
  date: string;
  title: string;
  body: string;
  available: string[];
  img?: string;
};

const items: Item[] = [
  {
    tag: "Nuovo Modulo",
    date: "Sblocco maggio 2026",
    title: "La guida completa a CapCut (Desktop e App)",
    body: "Questo nuovo modulo in uscita a maggio ti guiderà attraverso tutti i comandi di CapCut, uno dei migliori strumenti di editing video per smartphone e desktop (lo stesso che usiamo io e i miei studenti). Imparerai a sfruttare al massimo le sue funzionalità per creare video professionali, ottimizzando il tempo e mantenendo un alto standard di produzione.",
    available: ["Silver", "Golden", "Live Willy Wonka"],
    img: "https://d1yei2z3i6k35z.cloudfront.net/7515914/69ece508eb4057.06239046_modulo39.png",
  },
  {
    tag: "Nuovo Modulo",
    date: "Sblocco maggio 2026",
    title: "La guida completa a Edits, l'app di Editing di Instagram",
    body: "Edits, l'app di editing realizzata da Instagram, ha reso la creazione di contenuti ancora più immediata e integrata con l'algoritmo. In questo nuovo modulo in uscita a maggio, ti guiderò passo dopo passo nell'uso di Edits, mostrandoti tutte le sue funzionalità, i trucchi nascosti e le strategie per creare video ottimizzati per Instagram.",
    available: ["Golden", "Live Willy Wonka"],
    img: "https://d1yei2z3i6k35z.cloudfront.net/7515914/69ecb16dec7109.37380522_modulo37.png",
  },
  {
    tag: "Nuovo Modulo",
    date: "In arrivo a giugno",
    title: "Fai il tuo upgrade con la fotocamera",
    body: "Se hai una fotocamera e vuoi portare i tuoi reel e video al livello successivo, questo modulo è perfetto per te. Ti mostrerò come usare la fotocamera per creare contenuti video e reel in modo ancora più professionale.",
    available: ["Golden", "Live Willy Wonka"],
    img: "https://d1yei2z3i6k35z.cloudfront.net/7515914/69ecd1d50b2b64.72888155_Modulo1.png",
  },
  {
    tag: "Bonus Masterclass",
    date: "Disponibile da subito",
    title: "Metterci la Faccia",
    body: "Nel 2026, sai quanto è importante essere autentici, metterci la faccia e connettersi personalmente con il tuo pubblico. Ma non dev'essere un'esperienza stressante. Questo bonus ti fornirà tecniche pratiche per sentirti a tuo agio davanti alla camera, rendendo i tuoi video più naturali e coinvolgenti. Potrai superare la timidezza e presentarti con sicurezza, dando un volto umano al tuo brand e instaurando una connessione più profonda con il tuo pubblico.",
    available: ["Golden", "Live Willy Wonka"],
    img: "https://d1yei2z3i6k35z.cloudfront.net/7515914/67d55d603368f_modulo36.png",
  },
  {
    tag: "Bonus Masterclass",
    date: "Disponibile da subito",
    title: "Montaggio a tempo di musica",
    body: "Il montaggio a tempo di musica è uno degli elementi più potenti per creare video che catturano l'attenzione e tengono lo spettatore incollato allo schermo fino alla fine. Quando il ritmo delle immagini segue perfettamente la traccia musicale, ogni transizione, stacco e movimento diventa più fluido e coinvolgente, aumentando la qualità percepita del video.",
    available: ["Golden", "Live Willy Wonka"],
    img: "https://d1yei2z3i6k35z.cloudfront.net/7515914/67d55d6bc0aef_modulo321.png",
  },
  {
    tag: "Bonus Live",
    date: "Solo Willy Wonka",
    title: "Chat Telegram 1:1 con me",
    body: "Il modo migliore per perfezionare i tuoi video e renderli ancora più spettacolari e magnetici è confrontandoti direttamente con me. Il canale Telegram ha una durata di 3 mesi e potrai interagire direttamente con me.",
    available: ["Live Willy Wonka"],
    img: "https://d1yei2z3i6k35z.cloudfront.net/7515914/67d546e38f847_Immagini1080135018.png",
  },
];

export function Bonuses() {
  return (
    <section id="bonus" className="py-24 lg:py-32 bg-cream/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-teal font-bold mb-4">
            Aspetta, perché ci sono dei BONUS speciali...
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tighter text-balance">
            Canale Telegram, 3 nuovi Moduli e 2 Masterclass Bonus{" "}
            <span className="text-gold">🌟</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <article
              key={i}
              className="group flex flex-col rounded-3xl border-2 border-ink bg-paper overflow-hidden hover:shadow-bold-gold hover:-translate-y-1 transition-all"
            >
              {it.img && (
                <div className="aspect-[4/3] overflow-hidden bg-cream">
                  <img src={it.img} alt={it.title} loading="lazy" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                </div>
              )}
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold bg-ink text-paper px-2 py-1 rounded">
                    {it.tag}
                  </span>
                  <span className="text-xs text-muted-foreground italic">{it.date}</span>
                </div>
                <h3 className="font-display text-xl font-bold leading-snug text-pretty">
                  {it.title}
                </h3>
                <p className="mt-3 text-sm text-ink/75 leading-relaxed flex-1">{it.body}</p>
                <div className="mt-5 pt-4 border-t border-ink/10">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-2">
                    Disponibile in
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {it.available.map((a) => (
                      <span
                        key={a}
                        className="text-xs font-bold px-2.5 py-1 rounded-full bg-gold/20 text-ink"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
