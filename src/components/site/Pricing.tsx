import { LaunchBanner } from "./LaunchBanner";

type Row = { label: string; included: boolean };
type Plan = {
  name: string;
  badge?: string;
  highlight?: boolean;
  description: string;
  price: string;
  oldPrice?: string;
  saving?: string;
  href: string;
  paymentNote: string;
  modules: Row[];
  bonuses: Row[];
  live: Row[];
};

const plans: Plan[] = [
  {
    name: "Silver",
    description:
      "Il video corso completo per creare video efficaci sui social, con tutto ciò che ti serve per produrre contenuti coinvolgenti.",
    price: "247€",
    oldPrice: "297€",
    saving: "Risparmi 50€ — Puoi pagare in 2 rate",
    href: "https://fabbricadivideo.gionsnow.it/ti-manca-pochissimo-silver-lancio",
    paymentNote: "Per pagare in 2 rate, clicca su Iscriviti Ora e scegli l'opzione rateale.",
    modules: [
      { label: "Modulo 1 — Elaborazione del contenuto: dall'idea all'attrezzatura", included: true },
      { label: "Modulo 2 — Sul set senza stress", included: true },
      { label: "Modulo 3 — Post produzione dalla A alla Z", included: true },
      { label: "Modulo 4 — La guida completa a CapCut (desktop e app)", included: true },
      { label: "Modulo 5 — La guida completa a Edits", included: false },
      { label: "Modulo 6 — Fai il tuo upgrade con la fotocamera", included: false },
      { label: 'Registrazione Masterclass "La Mappa dei Video" (entro 29 aprile 23:59)', included: true },
    ],
    bonuses: [
      { label: "Bonus 1 — Masterclass Metterci la faccia", included: false },
      { label: "Bonus 2 — Masterclass Montaggio a tempo di musica", included: false },
    ],
    live: [
      { label: "Chat Telegram 1:1 con me, per 3 mesi", included: false },
      { label: "Prima Live Tutorial + Q&A di gruppo", included: false },
      { label: "Seconda Live Tutorial + Q&A di gruppo", included: false },
      { label: "Terza Live Tutorial + Q&A di gruppo", included: false },
      { label: "3 Call 1:1 con me, da prenotare entro 1 anno", included: false },
      { label: "Supporto Email", included: true },
    ],
  },
  {
    name: "Golden",
    badge: "Più scelto",
    highlight: true,
    description:
      "Il video corso completo con tutti i bonus per migliorare i tuoi video ancora più velocemente.",
    price: "327€",
    oldPrice: "397€",
    saving: "Risparmi 70€ — Puoi pagare in 3 rate",
    href: "https://fabbricadivideo.gionsnow.it/ti-manca-pochissimo-golden-lancio",
    paymentNote: "Per pagare in 3 rate, clicca su Iscriviti Ora e scegli l'opzione rateale.",
    modules: [
      { label: "🎁 Se sei tra i primi 12 clienti, hai accesso a una call 1:1 con me di 30 minuti", included: true },
      { label: "Modulo 1 — Elaborazione del contenuto: dall'idea all'attrezzatura", included: true },
      { label: "Modulo 2 — Sul set senza stress", included: true },
      { label: "Modulo 3 — Post produzione dalla A alla Z", included: true },
      { label: "Modulo 4 — Masterclass completa su tutti i comandi di CapCut", included: true },
      { label: "Modulo 5 — La guida completa a Edits, l'app di Editing di Instagram", included: true },
      { label: "Modulo 6 — Fai il tuo upgrade con la fotocamera", included: true },
      { label: 'Registrazione Masterclass "La Mappa dei Video" (entro 29 aprile 23:59)', included: true },
    ],
    bonuses: [
      { label: "Bonus 1 — Masterclass Metterci la faccia", included: true },
      { label: "Bonus 2 — Masterclass Montaggio a tempo di musica", included: true },
    ],
    live: [
      { label: "Chat Telegram 1:1 con me, per 3 mesi", included: false },
      { label: "Prima Live Tutorial + Q&A di gruppo", included: true },
      { label: "Seconda Live Tutorial + Q&A di gruppo", included: true },
      { label: "Terza Live Tutorial + Q&A di gruppo", included: true },
      { label: "3 Call 1:1 con me, da prenotare entro 1 anno", included: false },
      { label: "Supporto Email", included: true },
    ],
  },
  {
    name: "Willy Wonka",
    badge: "Solo 5 posti",
    description:
      "Il percorso live con supporto diretto, strategia avanzata, 3 call 1:1 con me e accesso alle live di gruppo.",
    price: "1.200€",
    saving: "LIVE — Puoi pagare a rate",
    href: "https://fabbricadivideo.gionsnow.it/ti-manca-pochissimo-willy-wonka-lancio",
    paymentNote: "Per pagare in 3 rate, clicca su Iscriviti Ora e scegli l'opzione rateale.",
    modules: [
      { label: "Modulo 1 — Elaborazione del contenuto: dall'idea all'attrezzatura", included: true },
      { label: "Modulo 2 — Sul set senza stress", included: true },
      { label: "Modulo 3 — Post produzione dalla A alla Z", included: true },
      { label: "Modulo 4 — Masterclass completa su tutti i comandi di CapCut", included: true },
      { label: "Modulo 5 — La guida completa a Edits, l'app di Editing di Instagram", included: true },
      { label: "Modulo 6 — Fai il tuo upgrade con la fotocamera", included: true },
      { label: 'Registrazione Masterclass "La Mappa dei Video"', included: true },
    ],
    bonuses: [
      { label: "Bonus 1 — Masterclass Metterci la faccia", included: true },
      { label: "Bonus 2 — Masterclass Montaggio a tempo di musica", included: true },
    ],
    live: [
      { label: "Chat Telegram 1:1 con me, per 3 mesi", included: true },
      { label: "Prima Live Tutorial + Q&A di gruppo", included: true },
      { label: "Seconda Live Tutorial + Q&A di gruppo", included: true },
      { label: "Terza Live Tutorial + Q&A di gruppo", included: true },
      { label: "3 Call 1:1 con me, da prenotare entro 1 anno, per lavorare sui tuoi video", included: true },
      { label: "Supporto Email", included: true },
    ],
  },
];

function Row({ row }: { row: Row }) {
  return (
    <li className={`flex gap-3 text-sm leading-snug ${row.included ? "" : "text-ink/35 line-through"}`}>
      <span className={`shrink-0 mt-0.5 h-5 w-5 rounded-full flex items-center justify-center text-[11px] font-bold ${row.included ? "bg-gold text-ink" : "bg-ink/10 text-ink/40"}`}>
        {row.included ? "✓" : "—"}
      </span>
      <span>{row.label}</span>
    </li>
  );
}

export function Pricing() {
  return (
    <section id="iscriviti" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-bold mb-4">
            Scegli il percorso più adatto a te e inizia a creare video che generano interazioni e
            vendite.
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tighter">
            Iscriviti a <br />
            <span className="text-gold">LA FABBRICA DI VIDEO 🎬</span>
          </h2>
          <LaunchBanner />
          <div className="inline-flex items-center gap-3">
            <span className="text-xl text-gold">★★★★★</span>
            <span className="italic font-medium">Oltre 300 studenti iscritti</span>
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-6 items-start">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`relative rounded-3xl border-2 p-8 flex flex-col ${
                p.highlight
                  ? "border-ink bg-ink text-paper shadow-bold-gold lg:-translate-y-4"
                  : "border-ink bg-paper"
              }`}
            >
              {p.badge && (
                <span
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold border-2 border-ink ${
                    p.highlight ? "bg-gold text-ink" : "bg-paper text-ink"
                  }`}
                >
                  {p.badge}
                </span>
              )}

              <div className="text-center">
                <div className={`text-xs uppercase tracking-[0.3em] font-bold mb-2 ${p.highlight ? "text-gold" : "text-muted-foreground"}`}>
                  Percorso
                </div>
                <h3 className="font-display text-4xl font-black tracking-tight">{p.name}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${p.highlight ? "text-paper/75" : "text-ink/70"}`}>
                  {p.description}
                </p>
              </div>

              <div className="mt-6 text-center">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="font-display text-5xl font-black">{p.price}</span>
                  {p.oldPrice && (
                    <span className={`line-through text-lg ${p.highlight ? "text-paper/50" : "text-ink/40"}`}>
                      {p.oldPrice}
                    </span>
                  )}
                </div>
                {p.saving && (
                  <p className={`mt-2 text-xs italic font-semibold ${p.highlight ? "text-gold" : "text-teal"}`}>
                    {p.saving}
                  </p>
                )}
              </div>

              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className={`mt-6 group inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold transition-all ${
                  p.highlight
                    ? "bg-gold text-ink hover:bg-paper"
                    : "bg-ink text-paper hover:bg-teal"
                }`}
              >
                Iscriviti Ora
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <p className={`mt-3 text-center text-[11px] italic ${p.highlight ? "text-paper/60" : "text-muted-foreground"}`}>
                {p.paymentNote}
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <div className={`text-[10px] uppercase tracking-[0.25em] font-bold mb-3 ${p.highlight ? "text-gold" : "text-muted-foreground"}`}>
                    Moduli
                  </div>
                  <ul className="space-y-2.5">
                    {p.modules.map((r, i) => (
                      <Row key={i} row={r} />
                    ))}
                  </ul>
                </div>
                <div className={`pt-6 border-t ${p.highlight ? "border-paper/15" : "border-ink/10"}`}>
                  <div className={`text-[10px] uppercase tracking-[0.25em] font-bold mb-3 ${p.highlight ? "text-gold" : "text-muted-foreground"}`}>
                    Bonus
                  </div>
                  <ul className="space-y-2.5">
                    {p.bonuses.map((r, i) => (
                      <Row key={i} row={r} />
                    ))}
                  </ul>
                </div>
                <div className={`pt-6 border-t ${p.highlight ? "border-paper/15" : "border-ink/10"}`}>
                  <div className={`text-[10px] uppercase tracking-[0.25em] font-bold mb-3 ${p.highlight ? "text-gold" : "text-muted-foreground"}`}>
                    Live e Telegram
                  </div>
                  <ul className="space-y-2.5">
                    {p.live.map((r, i) => (
                      <Row key={i} row={r} />
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
