import { useState } from "react";

type Lesson = { n: string; title: string; body: string };
type Module = { num: string; title: string; img: string; intro: string[]; lessons: Lesson[] };

const modules: Module[] = [
  {
    num: "1",
    title: "Dall'idea all'attrezzatura da utilizzare",
    img: "https://d1yei2z3i6k35z.cloudfront.net/7515914/665ae753b06d1_Modulo1.png",
    intro: [
      "In questo modulo esplorerai il processo creativo che trasforma una semplice idea in un video ben strutturato e coinvolgente.",
      "Imparerai come sviluppare un'idea, scrivere uno script efficace e scegliere l'attrezzatura giusta per le tue esigenze (uno smartphone è perfetto, ma va bene anche se hai già una video camera da usare).",
    ],
    lessons: [
      { n: "01", title: "Introduzione al corso e attrezzatura necessaria da utilizzare", body: "Ti do il benvenuto a La Fabbrica di Video, un corso che si propone di darti tutti gli strumenti e le conoscenze necessari per creare contenuti in autonomia, per il tuo progetto di small business, produzione artigianato, divulgazione o personal brand." },
      { n: "02", title: "Scegliere uno smartphone: quali caratteristiche guardare?", body: "Introduciamo le potenzialità del video making con gli smartphone e gli elementi tecnici da osservare nella scelta di uno smartphone, attraverso i quali questo strumento accessibile può essere utilizzato per creare video efficaci e di alta qualità." },
      { n: "03", title: "Ma è meglio Android o Apple?", body: "Scopriamo le differenze tra i sistemi operativi Android e iOS e quali sono gli elementi concreti per orientarti nella scelta del sistema più adatto alle tue esigenze ed anche al fine di creare contenuti con lo smartphone." },
      { n: "04", title: "Quale fotocamera scelgo?", body: "In questa lezione vediamo quale fotocamera è meglio scegliere, anche in base al proprio budget e alle tue necessità." },
      { n: "05", title: "Come trovare le idee per i tuoi video", body: "Non è facile trovare sempre nuove idee per i contenuti da proporre sui social. Dopo anni di fatica e navigazione a braccio, io ho trovato delle fonti di ispirazione che mi permettono di uscire dal blocco creativo. In questa lezione te le presento e ti suggerisco un metodo che per me si è rivelato utile non solo una volta ma nel corso di tutti questi anni, per trovare sempre spunti nuovi, a partire da te." },
      { n: "06", title: "Come usare l'intelligenza artificiale per i tuoi video", body: "In questo modulo esplorerai il processo creativo che trasforma una semplice idea in un video ben strutturato e coinvolgente. Imparerai come sviluppare un'idea, scrivere uno script efficace e scegliere l'attrezzatura giusta per le tue esigenze." },
      { n: "07", title: "Cos'è un format e perché ne hai bisogno", body: "Entriamo nel vivo del linguaggio tecnico audiovisivo spiegando il concetto di format. Cos'è e perché dico che hai veramente bisogno di un format per il tuo progetto video? In che modo può farti risparmiare tempo e permetterti di creare numerosi contenuti, con costanza e nel lungo periodo? Lo vedremo." },
      { n: "08", title: "Che caratteristiche deve avere il mio video per non essere skippato?", body: "In questa lezione andiamo a smontare la struttura del video tradizionale per osservare invece il contenuto efficace sui social, capire da quali parti è composto e come possiamo agire su questi pezzettini per rendere il nostro contenuto ancora più efficace e accattivante per il pubblico." },
      { n: "09", title: "Cos'è un trend e come lo adatto alla mia creazione contenuti?", body: "Dopo aver visto come strutturare un piano editoriale in maniera strategica, riconoscibile ed efficace, grazie al format e alla struttura del singolo contenuto, affrontiamo adesso la parte variabile e più imprevedibile del nostro piano editoriale, ma non per questo meno importante: quella legata ai trend e alle tendenze in generale." },
      { n: "10", title: "Come scrivere un video: definire gli obiettivi e realizzare uno script", body: "Lo script di un video è un documento scritto che descrive in dettaglio ciò che accade nel video, senza tralasciare nulla: sono incluse le parti parlate, o eventualmente i dialoghi, le azioni, la location e l'ambientazione delle riprese, elementi visivi e sonori. In pratica così lo script diventa una guida per la produzione del video, fornendo istruzioni chiare su cosa deve accadere in ogni clip e come deve essere rappresentata." },
    ],
  },
  {
    num: "2",
    title: "Sul set senza stress",
    img: "https://d1yei2z3i6k35z.cloudfront.net/7515914/665ae78481acd_Modulo2.png",
    intro: [
      "Questo modulo ti guiderà attraverso i segreti per preparare un set perfetto e ottenere inquadrature efficaci, lavorando in autonomia.",
      "Approfondirai le tecniche di ripresa video e audio, imparando a padroneggiare ogni aspetto della configurazione fino al momento di premere \"rec\".",
    ],
    lessons: [
      { n: "01", title: "Impostare lo smartphone per ottenere la massima performance", body: "Lo sapevi che \"il medium è il messaggio\"? Il contenuto deve essere concepito proprio in funzione della sua destinazione. Questo è il motivo per cui un format che funziona molto bene in televisione non andrebbe così bene sui social oppure un video che magari va molto bene per un social, non funziona bene su un altro. Per questo abbiamo analizzato la struttura del contenuto efficace sui social e adesso possiamo passare alla sua parte visiva, e far fare un bel level up ai nostri video." },
      { n: "02", title: "A Roll e B Roll", body: "L'uso alternato di A roll e B roll è utile in qualunque tipo di video. In questa lezione ti spiegherò come girare entrambe le parti con dei consigli pratici per riuscirci al meglio, in modo efficace e anche per accumulare materiali nei ritagli di tempo, per poi poterlo riutilizzare quando ti sarà utile." },
      { n: "03", title: "Gestire la luce naturale e artificiale", body: "In questa lezione ti spiego cosa sono le production lights, le luci di produzione utilizzate anche sui set professionali, appositamente per la creazione dei video. Ti darò anche dei consigli pratici per utilizzarle a tua volta, senza necessariamente ricorrere a luci professionali, ma anche replicandone la funzione con la ring light o quello che hai già in casa." },
      { n: "04", title: "3 strumenti pratici per riprendersi in autonomia", body: "Forse non sai che quando realizzo i miei contenuti per i social mi riprendo totalmente da sola, il 90% delle volte! Sono davvero pochi i casi in cui riesco ad avere un aiuto, così per mantenere una produzione contenuti costante nel tempo ho dovuto imparare ad arrangiarmi." },
      { n: "05", title: "Setting inquadratura verticale per reel con luce naturale", body: "Creiamo insieme un setting per video verticale, come reel o Tiktok, usando solo la luce naturale, nello specifico quello che utilizzo praticamente sempre per girare tutti i video parlati che puoi vedere sui miei profili Instagram e Tiktok, utilizzando un cavalletto e la fotocamera del telefono." },
      { n: "06", title: "Setting inquadratura verticale per reel con ring light", body: "Creiamo adesso un setting destinato di nuovo a video in verticale usando la ring light, la luce artificiale più diffusa e popolare tra i content creator. In particolare io userò una ring light grande che è più che sufficiente a dare una illuminazione buona a una inquadratura a mezzobusto ma anche a figura intera, eventualmente." },
      { n: "07", title: "Setting inquadratura orizzontale con luce artificiale per video Youtube o video lezione", body: "L'inquadratura per un video orizzontale e il setting luci che ti mostrerò in questa lezione si prestano bene ad essere applicati sia a un video per Youtube che anche a una video lezione. Nello specifico, io stessa dopo aver preparato questo setting l'ho utilizzare per le lezioni bonus di questo corso." },
      { n: "08", title: "Il vlog", body: "Hai mai provato a fare un vlog o forse hai sempre pensato che non ti servisse più di tanto? Bene, con questa lezione qualcosa mi dice che cambierai idea!" },
      { n: "09", title: "Pan, Inclinazione e Carrellata: 3 Movimenti di camera", body: "Sicuramente dalle lezioni che hai già visto avrai già ricevuto qualche spunto su come fare delle riprese varie, alternando larghe e dettagli, ma adesso facciamo un passo avanti e aggiungiamo 3 movimenti di camera che sono sicura ti saranno molto utili. 1. il pan (movimento orizzontale), 2. il tilt (movimento verticale), 3. la carrellata (camera che segue il percorso)." },
      { n: "10", title: "Riprendere l'audio e registrare un voiceover", body: "La ripresa dell'audio è importante tanto quanto la ripresa del video. Quindi anche se questo corso si focalizza ampiamente sulla parte visiva, ho voluto dedicare una lezione agli strumenti base per una corretta ripresa dell'audio." },
    ],
  },
  {
    num: "3",
    title: "Post produzione dalla A alla Z",
    img: "https://d1yei2z3i6k35z.cloudfront.net/7515914/665ae7a770221_modulo3.png",
    intro: [
      "In questo modulo, imparerai tutti i passaggi necessari per la post produzione, dalle basi del montaggio lineare al compositing creativo.",
      "Approfondirai l'uso delle transizioni più popolari sui social (Instagram e TikTok), l'impiego dei keyframe, e la gestione dei testi e dell'audio.",
      "Inoltre, ti guiderò attraverso la color correction e il salvataggio finale del video.",
    ],
    lessons: [
      { n: "01", title: "Impostare progetto di editing su CapCut", body: "In questa lezione ti spiegherò cosa fare quando apri Capcut per iniziare a montare il tuo video. È molto importante controllare che il progetto di editing abbia la proporzione corretta rispetto al video che vogliamo realizzare." },
      { n: "02", title: "Jump Cut", body: "I jump cut sono tagli interni a una clip, oppure tagli tra più clip in cui l'inquadratura rimane identica. Si distingue dall'attacco sull'asse, che invece è un taglio tra due inquadrature riprese dalla stessa identica angolazione, ma nella prima la camera è più lontana, nella seconda è più vicina." },
      { n: "03", title: "Montaggio invisibile e transizioni", body: "In questa lezione vediamo una differenza davvero fondamentale nel mondo del montaggio, quella tra taglio e transizione." },
      { n: "04", title: "Impallamento", body: "Si dice \"impallamento\" il momento in cui un oggetto o una persona passa così vicino alla camera da coprire o \"impallare\" completamente l'obiettivo. In questa lezione vediamo come usare questo effetto." },
      { n: "05", title: "Panoramica a schiaffo", body: "Abbiamo già sentito parlare di panoramica nella lezione dedicata a pan, tilt e carrellata. Facciamo un altro passo avanti e vediamo che cosa è la panoramica a schiaffo." },
      { n: "06", title: "Match Cut", body: "Quel taglio \"magico\" che puoi ripetere in tante tipologie di video creativi differenti." },
      { n: "07", title: "Continuità di movimento", body: "In questa lezione esploriamo altri due concetti fondamentali per il montaggio video in generale, ma che sono molto utili anche per i video per i social." },
      { n: "08", title: "Maschere e sovrapposizione", body: "Il montaggio può diventare più composito quando si iniziano a sovrapporre più clip, appunto una sopra l'altra, con uno scopo specifico. Per questo in questa lezione spieghiamo nello specifico il comando Sovrapposizione. Ad esempio, si può avere bisogno di vedere solo una porzione della clip che abbiamo sovrapposto: in questo caso, è fondamentale aggiungere una Maschera sulla clip sovrapposta." },
      { n: "09", title: "Rimuovi sfondo", body: "Il comando Rimuovi Sfondo di Capcut racchiude in realtà 3 comandi: rimozione automatica, rimozione personalizzata, chroma key. In questa lezione ti spiegherò la specifica funzione di ciascuno di questi e capiremo come sfruttarli nei nostri video, sia quelli più creativi, sia i video parlati piuttosto statici." },
      { n: "10", title: "Sdoppiamento", body: "Sicuramente avrai presente l'effetto di Sdoppiamento, in cui vediamo una stessa persona sdoppiata sui due lati dello schermo. Questo è un effetto molto utile perché ci dà subito un impatto visivo evidente." },
      { n: "11", title: "Keyframe (spiegati facile)", body: "I keyframe sono uno dei comandi più interessanti di Capcut e che più avvicinano questa app a un vero e proprio software di editing, eppure allo stesso tempo sono forse il comando più complesso da capire." },
      { n: "12", title: "Testi e sottotitoli", body: "I testi e i sottotitoli sono una parte importantissima dei nostri video. Hanno un ruolo fondamentale: rendono i video più inclusivi a chi non può sentire, consentono anche a chi non può usare l'audio di fruire del contenuto, e danno maggiore accesso al video." },
      { n: "13", title: "Color correction, filtri e correzioni", body: "La color correction è una parte importante per la produzione video, che serve a sistemare le variazioni di luci e ombre che possono capitare in fase di registrazione, dare un look specifico al video con l'uso di luci, ombre e colori, e sistemare piccoli errori che sono stati fatti in fase di ripresa." },
      { n: "14", title: "Export video", body: "Siamo finalmente arrivati alla fine del nostro editing, il video è pronto. Su Capcut possiamo premere la piccola freccia in alto a destra e salvare il nostro video in galleria per poi postarlo sui social." },
    ],
  },
];

export function Modules() {
  const [active, setActive] = useState(0);
  const mod = modules[active];

  return (
    <section id="moduli" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-bold mb-4">
            Il programma
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tighter">
            Quali sono i moduli che trovi all'interno?
          </h2>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {modules.map((m, i) => (
            <button
              key={m.num}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full border-2 text-sm font-bold transition-all ${
                active === i
                  ? "bg-ink text-paper border-ink shadow-bold-gold -translate-y-0.5"
                  : "bg-paper text-ink border-ink/20 hover:border-ink"
              }`}
            >
              Modulo {m.num}
            </button>
          ))}
        </div>

        <div className="mt-10 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <div className="relative">
                <div className="absolute -inset-3 bg-gold rounded-3xl rotate-2" />
                <div className="relative aspect-square overflow-hidden rounded-3xl border-2 border-ink">
                  <img src={mod.img} alt={mod.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="mt-6">
                <div className="font-display text-7xl font-black text-gold leading-none">0{mod.num}</div>
                <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold leading-tight text-balance">
                  Modulo {mod.num} — {mod.title}
                </h3>
                <div className="mt-4 space-y-3 text-ink/80 leading-relaxed">
                  {mod.intro.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-3">
              {mod.lessons.map((l) => (
                <details
                  key={l.n}
                  className="group rounded-2xl border-2 border-ink/10 bg-paper hover:border-ink transition-colors open:border-ink open:bg-cream/40"
                >
                  <summary className="cursor-pointer list-none p-6 flex items-start gap-5">
                    <span className="font-display font-black text-2xl text-gold shrink-0 w-12">
                      {l.n}
                    </span>
                    <span className="flex-1 font-bold text-lg text-pretty leading-snug pt-1">
                      {l.title}
                    </span>
                    <span className="shrink-0 mt-1 h-7 w-7 rounded-full border-2 border-ink flex items-center justify-center transition-transform group-open:rotate-45 font-bold">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pl-[4.25rem] text-ink/75 leading-relaxed">
                    {l.body}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
