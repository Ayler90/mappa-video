export function Author() {
  return (
    <section className="py-24 lg:py-32 bg-cream/50">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-3 bg-teal rounded-3xl -rotate-2" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-2 border-ink">
              <img
                src="https://d1yei2z3i6k35z.cloudfront.net/7515914/690b50f1edb84_CopertinaGruppoFacebook1600x760px5.png"
                alt="Marialaura — Gionsnow"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-bold mb-4">
            Ciao, sono Marialaura, ma forse mi conosci come
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-black leading-none tracking-tighter">
            Gionsnow
          </h2>
          <div className="mt-8 space-y-5 text-lg text-ink/80 leading-relaxed text-pretty">
            <p>
              Da <strong>oltre 11 anni</strong> sono video maker, content creator e insegnante.
            </p>
            <p>
              La mia mission è{" "}
              <strong>guidare Small Business, Personal Brand</strong> e <strong>Aziende</strong>{" "}
              nella creazione dei loro <strong>contenuti video</strong>, in prima persona o
              affiancandoli, divulgare informazioni utili sulla creazione contenuti, sul video
              making e sul cinema, con un linguaggio semplice ma non banale, alla portata di tutti.
            </p>
            <p>
              In questi anni ho affiancato <strong>oltre 300 studenti</strong> e{" "}
              <strong>clienti</strong> nella creazione dei loro contenuti video.
            </p>
            <p>
              Ho collaborato con <strong>XFactor 13</strong>, <strong>The Jackal a Sanremo 2024</strong>,
              sono insegnante presso il <strong>Politecnico di Milano</strong>, speaker per{" "}
              <strong>Cavalieri Digitali</strong> e sono stata invitata, insieme a 50 creator del
              settore cinematografico, all'evento{" "}
              <strong>Oscar Party di I Wonder Pictures</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Nella pratica, cosa imparerò grazie al video corso?",
    a: "Con le lezioni di La Fabbrica di Video imparerai a realizzare video e reel unici, coinvolgenti e magnetici. Le lezioni ti guidano nella creazione dello script iniziale, nel setting per registrare le tue clip e nel montaggio del video usando CapCut/Edits versione Smartphone o versione Desktop.",
  },
  {
    q: "Per chi è La Fabbrica di Video?",
    a: "Per Personal Brand, che vogliono far crescere il loro profilo sui social e generare vendite e interazioni. Per Small Business, che vogliono promuovere i loro prodotti in modo efficace, facendo vedere le loro caratteristiche e unicità. Per Artigiani, che vogliono mostrare i loro prodotti sui social e venderli con i video.",
  },
  {
    q: "Il video corso è Live o Registrato?",
    a: "Le lezioni del corso sono completamente registrate, così le puoi vedere dove e quando vuoi. Le live del percorso Golden e Willy Wonka, invece, sono in diretta.",
  },
  {
    q: "Imparerò a realizzare transizioni come quelle su Instagram e TikTok?",
    a: "Certo. Imparerai a creare sdoppiamenti, a rimuovere lo sfondo dei video per aggiungere dettagli e a realizzare le transizioni che vedi nei video di altri creator/professionisti.",
  },
  {
    q: "Ho bisogno di competenze di video making per seguire questo corso?",
    a: "Assolutamente no. La Fabbrica di Video è un percorso che ti porta a creare video unici e coinvolgenti, diretto a chi non ha competenze nel video making.",
  },
  {
    q: "Come faccio a farti una domanda diretta?",
    a: "Scrivimi all'indirizzo email info@gionsnow.it e ti risponderò in brevissimo tempo.",
  },
  {
    q: "Posso pagare a rate?",
    a: "Puoi accedere al pagamento rateale in 3 rate per tutti e 3 i percorsi.",
  },
  {
    q: "Come faccio a richiedere fattura?",
    a: "Inserisci i dati di fatturazione in fase di checkout (p.iva e SDI) e poi scrivimi a info@gionsnow.it per richiedere la fattura. ⚠️ Puoi richiedere la fattura entro 7 giorni dall'acquisto.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-bold mb-3">
            Hai qualche domanda? Leggi qui.
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-black leading-tight tracking-tighter">
            Domande frequenti
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group rounded-2xl border-2 border-ink/10 bg-paper open:border-ink open:bg-cream/40 transition-colors"
            >
              <summary className="cursor-pointer list-none p-6 flex items-start gap-5">
                <span className="font-display font-black text-lg text-gold shrink-0 w-10">
                  0{i + 1}
                </span>
                <span className="flex-1 font-bold text-lg leading-snug text-pretty pt-0.5">
                  {f.q}
                </span>
                <span className="shrink-0 mt-1 h-7 w-7 rounded-full border-2 border-ink flex items-center justify-center transition-transform group-open:rotate-45 font-bold">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 pl-[3.75rem] text-ink/75 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-paper py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-display text-xl font-black">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold text-ink">
              ▶
            </span>
            <span>gionsnow</span>
          </div>
          <p className="text-sm text-paper/60 text-center">
            Copyright @2026 — Marialaura Gionfriddo · P.IVA IT01979980891
          </p>
          <div className="flex gap-5 text-sm">
            <a href="https://www.iubenda.com/privacy-policy/54965772" className="text-paper/70 hover:text-gold underline">
              Privacy Policy
            </a>
            <a href="https://www.iubenda.com/privacy-policy/54965772/cookie-policy" className="text-paper/70 hover:text-gold underline">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
