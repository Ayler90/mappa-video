import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Countdown } from "@/components/site/Countdown";

export const Route = createFileRoute("/iscriviti-la-mappa-video")({
  component: MappaPage,
});

// Target: 27 Aprile alle 21:00
function getEventDate() {
  const now = new Date();
  let year = now.getFullYear();
  let target = new Date(year, 3, 27, 21, 0, 0);
  if (target.getTime() < now.getTime()) {
    target = new Date(year + 1, 3, 27, 21, 0, 0);
  }
  return target;
}

const LOGO =
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/69cbe44808e441.54940797_02_LOGO_GionSnow_Negativo-2048x3561.png";

const HERO_VIDEO =
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/69edc8630db710.51412199_SonoaperteleiscrizioniaLaMappadeiVideo️Lamianuovamasterclassonlinetotalmentegr.mp4";
const PROBLEM_IMG =
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/69d0c145772429.71141604_Immagini1080135036.png";
const MAP_IMG =
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/69d119a0c005e0.76001406_Gemini_Generated_Image_jwvncljwvncljwvn1.png";
const ME_IMG =
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/699221821d19e_1.png";
const FABBRICA_IMG =
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/69922160476d9_3.png";

const STUDENT_VIDEOS = [
  "https://andreabonomo.it/wp-content/uploads/2024/05/Letture.mp4",
  "https://andreabonomo.it/wp-content/uploads/2024/05/Marsupio.mp4",
  "https://andreabonomo.it/wp-content/uploads/2024/05/Milan.mp4",
  "https://andreabonomo.it/wp-content/uploads/2024/05/Montagna.mp4",
  "https://andreabonomo.it/wp-content/uploads/2024/05/Anteprima.mp4",
  "https://andreabonomo.it/wp-content/uploads/2024/05/Chi-siamo.mp4",
  "https://andreabonomo.it/wp-content/uploads/2024/05/Portamento.mp4",
];

const REVIEWS = [
  "69d113ae49fc52.89979943_IMG_1893.jpg",
  "69d113aa68f7f4.26205356_IMG_1966.PNG",
  "69d113a52daf93.51082225_IMG_2114.jpg",
  "69d113a29edbb1.62678777_IMG_2113.jpg",
  "69d1139feb1882.20501959_Screenshot2025-11-19alle14.56.20.jpg",
  "69d1139da68df9.93951494_IMG_2162.PNG",
  "69d1139ae4b8a1.04484209_IMG_2328.PNG",
  "69d1139882b761.36185861_IMG_2324.PNG",
  "69d11396185068.88487792_IMG_4456.PNG",
  "69d1139412f032.60973117_IMG_5065.PNG",
  "69d11391841088.49732806_IMG_5064.PNG",
  "69d0c19f4313b5.90187314_Screenshot2026-04-04at09.27.27.png",
  "69d0c19cd0dc40.63615783_Screenshot2026-04-04at09.27.34.png",
  "69d0c19aa19b30.72614318_Screenshot2026-04-04at09.27.51.png",
  "69d0c1984ee190.69719081_Screenshot2026-04-04at09.28.00.png",
  "69d0c19640a177.31884065_Screenshot2026-04-04at09.28.08.png",
  "69d0c1941c2a02.66448089_Screenshot2026-04-04at09.28.14.png",
  "69d0c192284e41.63303640_Screenshot2026-04-04at09.28.23.png",
  "69d0c18f92bf90.64384811_Screenshot2026-04-04at09.28.29.png",
  "69d0c188a75af8.32568607_Screenshot2026-04-04at09.28.40.png",
].map((p) => `https://d1yei2z3i6k35z.cloudfront.net/7515914/${p}`);

const LOGOS = [
  "69d0bfbe7b9bf2.55552607_3.png",
  "69d0c00599c219.07845156_4.png",
  "69d0c01723d027.42086779_16.png",
  "69d0c02447b671.40862860_15.png",
  "69d0c03917f4f6.58511837_14.png",
  "69d0c052499943.67006908_12.png",
  "69d0c05fd018f2.88765798_10.png",
  "69d0c06716d433.63259144_9.png",
  "69d0c0761c81c8.11149075_8.png",
  "69d0c07cb60910.10801667_7.png",
  "69d0c0859b5b88.92359966_6.png",
].map((p) => `https://d1yei2z3i6k35z.cloudfront.net/7515914/${p}`);

const PROBLEMS = [
  "**Pubblichi tre video a settimana da mesi**. I follower aumentano a rilento, le vendite non arrivano e inizi a chiederti se stai sprecando tempo.",
  "**Copi il trend del momento**, lo adatti alla tua nicchia, lo pubblichi. Prendi qualche like in più e zero clienti. Perché un video virale non è un video che vende.",
  "Ci metti due ore per girare, un'ora per montare, mezz'ora per scrivere la caption. Il video dura 72 ore sui feed e poi sparisce. Ti sembra di ricominciare da zero, ogni volta.",
  "Apri ChatGPT, scrivi \"**dammi idee per video**\", leggi le risposte, le chiudi. Non sai come usarla davvero e finisce che fai tutto a mano come prima.",
  "Vedi i video degli altri che hanno **decine di commenti, centinaia di visualizzazioni**, mentre i tuoi stentano ad arrivare alla tua community.",
];

const PILLARS = [
  {
    title: "Hanno un metodo che non dipende dai follower",
    body: "Nel 2026 la dimensione della community non è più una scusa valida. Quello che fa la differenza è la precisione del messaggio e la capacità di parlare alle persone giuste. Senza questo, puoi avere 40-50-60k follower e non vendere nulla.",
  },
  {
    title: "Hanno una struttura fissa da ripetere ogni settimana — il loro Format",
    body: "La costanza non si regge sull'ispirazione, si regge su un sistema. Chi riesce a pubblicare con continuità senza esaurirsi ha un format, non una dote naturale. È quello che costruiremo insieme.",
  },
  {
    title: "Sanno esattamente quali video funzionano con la loro community (e perché)",
    body: "Non basta pubblicare. Serve capire cosa spinge la tua community a guardare fino alla fine, fidarsi e comprare. Chi sa analizzare un video sa anche crearne uno che converte.",
  },
  {
    title: "Usano l'AI in modo strategico, non superficiale",
    body: "Chi usa l'AI nel modo giusto produce di più in meno tempo, senza perdere la propria voce. Chi non la usa, o la usa male, sta già perdendo terreno. La differenza sta nel sapere esattamente come integrarla nel proprio flusso di lavoro.",
  },
];

const AGENDA = [
  {
    n: "01",
    kicker: "Primo punto della serata",
    title: "Perché i tuoi video non vendono (ancora)",
    bullets: [
      "Cosa è cambiato nel 2026: perché le strategie di due anni fa non funzionano più",
      "La differenza tra un video che piace e un video che vende",
      "Analisi di 3 casi studio reali: creator con community piccole che convertono davvero",
    ],
    insight: "Insight chiave: Non servono 10k follower. Serve sapere cosa dire e a chi dirlo.",
  },
  {
    n: "02",
    kicker: "Secondo punto della serata",
    title: "Come costruire un format che funziona (e si ripete)",
    bullets: [
      "Cos'è un format e perché senza di esso ricominci da zero ogni volta",
      "La formula: tipo di contenuto + struttura fissa + angolo distintivo",
      "Esempi concreti costruiti a partire dalle domande reali del pubblico",
      "Esercizio live: costruisci il tuo format in diretta in 3 passaggi",
    ],
    insight: "Cosa porti a casa: Un format replicabile pronto da usare dalla settimana successiva.",
  },
  {
    n: "03",
    kicker: "Terzo punto della serata",
    title: "Anatomia di un video che vende: lo smontaggio in diretta",
    bullets: [
      "Analisi di 2-3 video reali: hook, struttura, CTA e perché convertono",
      "I 3 errori che fanno sparire le vendite anche nei video ben fatti",
      "Perché l'autenticità batte la produzione perfetta, dati alla mano",
    ],
    insight: "Takeaway: Dopo questa parte saprai riconoscere e replicare la struttura di un video che converte.",
  },
  {
    n: "04",
    kicker: "Quarto punto della serata",
    title: "Come usare l'AI per creare contenuti migliori in meno tempo",
    bullets: [
      "I prompt pronti per generare idee, hook e script in pochi minuti",
      "Come usare l'AI nella fase di ideazione senza perdere la tua voce",
      "Il flusso completo: brainstorming → selezione → struttura → registrazione",
    ],
    insight: "Prompt incluso: Usalo subito dopo la serata per generare le tue prossime 10 idee video.",
  },
];

const FOR_WHOM_YES = [
  "**Per chi ha un personal brand e vuole far crescere il proprio business con i video.** Sei un coach, un consulente, un formatore o un libero professionista? I tuoi contenuti video devono **posizionarti come un esperto**, creare connessione con il pubblico e portare conversioni.",
  "**Per chi possiede uno small business e vende prodotti online.** Hai un negozio online o un brand indipendente e vuoi usare i video per aumentare la visibilità e le vendite? Nel 2026 devi creare contenuti che coinvolgano, che rispondano alle esigenze del pubblico e che spingano all'acquisto.",
  "**Per chi è artigiano e vuole promuovere il proprio lavoro con i video.** Crei oggetti unici e vuoi far conoscere il tuo talento? Oggi i video sono lo strumento più potente per raccontare il tuo lavoro e **differenziarti dalla concorrenza.**",
];

const FOR_WHOM_NO = [
  "**Per chi pensa che basti pubblicare video a caso e sperare che funzionino.** Se credi che l'algoritmo sia un mistero indecifrabile e che serva solo \"provare e riprovare\" senza una strategia, questo evento non fa per te.",
  "**Per chi cerca tecniche avanzate di montaggio professionale.** Se il tuo obiettivo è imparare software complessi o tecniche di post-produzione avanzata, questo non è il corso giusto.",
  "**Per chi non vuole metterci la faccia nei propri contenuti.** Se non hai intenzione di creare video in cui racconti, mostri o promuovi il tuo brand, questo evento potrebbe non esserti utile.",
];

const FAQ = [
  {
    q: "Che cos'è La Mappa dei Video?",
    a: "È la mia masterclass Live e Gratuita, della durata di 1 ora e mezza circa, dedicata a Small Business, Artigiani e Personal Brand, in cui ti mostro quali sono i video che dovresti realizzare nel 2026, se vuoi riuscire a vendere i tuoi prodotti/servizi creando video unici e originali.",
  },
  {
    q: "A chi è rivolto l'evento?",
    a: "A chi ha un personal brand e vende prodotti/servizi o cerca collaborazioni. A chi possiede uno small business e vende prodotti. A chi è artigiano e vende prodotti. Più in generale, a chi vuole imparare a creare video per i social, in completa autonomia, e vuole capire quali sono le regole da seguire nel 2026 per far crescere il proprio progetto.",
  },
  {
    q: "L'evento è gratuito?",
    a: "Sì, l'evento è completamente gratuito.",
  },
  {
    q: "Sarà disponibile la registrazione della masterclass?",
    a: "Sì, ci sarà la registrazione, valida per 3 giorni dal termine dell'evento. Ma ti consiglio di registrarti comunque, perché avrai un bonus speciale per la riapertura di La Fabbrica di Video.",
  },
];

// Inline markdown bold renderer
function MD({ text, dark = false }: { text: string; dark?: boolean }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**") ? (
          <strong key={i} className={`font-bold ${dark ? "text-paper" : "text-ink"}`}>
            {p.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}

function CTABig({ id, dark = false }: { id?: string; dark?: boolean }) {
  return (
    <div id={id} className="text-center">
      <a
        href="#form"
        className="group inline-flex items-center justify-center gap-3 rounded-full bg-teal text-paper px-10 py-5 text-base sm:text-lg font-bold tracking-wide shadow-soft hover:shadow-bold-teal hover:-translate-x-1 hover:-translate-y-1 transition-all"
      >
        MI ISCRIVO ORA
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </a>
      <p className={`mt-4 text-sm ${dark ? "text-paper/70" : "text-ink/70"}`}>
        🔴 La Masterclass è Live e totalmente Gratuita, il{" "}
        <strong>27 Aprile</strong> alle ore <strong>21:00</strong>.
      </p>
    </div>
  );
}

function StudentVideo({ src }: { src: string }) {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    ref.current?.play();
  };

  return (
    <div className="relative rounded-2xl overflow-hidden border-2 border-ink bg-ink/5">
      <video
        ref={ref}
        src={`${src}#t=0.001`}
        className="w-full h-auto block"
        preload="metadata"
        playsInline
        controls={playing}
      />
      {!playing && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-ink/20 hover:bg-ink/10 transition-colors cursor-pointer"
          aria-label="Riproduci video"
        >
          <div className="h-16 w-16 rounded-full bg-paper/90 flex items-center justify-center shadow-bold">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-ink ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}

function MailerLiteForm() {
  const [formError, setFormError] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const name = nameRef.current?.value.trim() ?? "";
    const email = emailRef.current?.value.trim() ?? "";
    if (!name || !email) {
      e.preventDefault();
      setFormError("Devi compilare tutti i campi prima di procedere.");
      return;
    }
    setFormError("");
  };

  useEffect(() => {
    (window as any).ml_webform_success_39435775 = function () {
      try {
        window.top!.location.href =
          "https://fabbricadivideo.gionsnow.it/prenotato-posto-mappa-video";
      } catch (e) {
        window.location.href =
          "https://fabbricadivideo.gionsnow.it/prenotato-posto-mappa-video";
      }
    };
    if (!document.getElementById("ml-webforms-39435775-script")) {
      const s = document.createElement("script");
      s.id = "ml-webforms-39435775-script";
      s.src =
        "https://groot.mailerlite.com/js/w/webforms.min.js?vb397d78ebaa8a0f631d35384c46d781b";
      document.body.appendChild(s);
      fetch(
        "https://assets.mailerlite.com/jsonp/43107/forms/183810396764767342/takel"
      );
    }
  }, []);

  return (
    <div
      id="mlb2-39435775"
      className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-39435775"
    >
      <div className="ml-form-align-center">
        <div className="ml-form-embedWrapper embedForm">
          <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
            <form
              className="ml-block-form"
              action="https://assets.mailerlite.com/jsonp/43107/forms/183810396764767342/subscribe"
              data-code=""
              method="post"
              target="_blank"
              onSubmit={handleSubmit}
            >
              <div className="ml-form-formContent space-y-4">
                <div className="ml-form-fieldRow">
                  <div className="ml-field-group ml-field-name ml-validate-required">
                    <input
                      ref={nameRef}
                      aria-label="name"
                      aria-required="true"
                      type="text"
                      name="fields[name]"
                      placeholder="Inserisci il tuo NOME"
                      autoComplete="given-name"
                      onChange={() => setFormError("")}
                      className="w-full rounded-xl border-2 border-ink/20 bg-cream px-4 py-3 text-base text-ink placeholder:text-ink/50 focus:outline-none focus:border-teal transition-colors"
                    />
                  </div>
                </div>
                <div className="ml-form-fieldRow ml-last-item">
                  <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                    <input
                      ref={emailRef}
                      aria-label="email"
                      aria-required="true"
                      type="email"
                      name="fields[email]"
                      placeholder="Inserisci la tua MIGLIOR EMAIL"
                      autoComplete="email"
                      onChange={() => setFormError("")}
                      className="w-full rounded-xl border-2 border-ink/20 bg-cream px-4 py-3 text-base text-ink placeholder:text-ink/50 focus:outline-none focus:border-teal transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="ml-form-checkboxRow ml-validate-required mt-5">
                <label className="checkbox flex items-start gap-3 text-sm text-ink/75 cursor-pointer">
                  <input type="checkbox" className="mt-1 h-4 w-4 accent-teal shrink-0" />
                  <div className="label-description">
                    <p>Accetto di ricevere aggiornamenti relativi all'evento Live*</p>
                  </div>
                </label>
              </div>

              <p className="mt-4 text-xs text-ink/50 text-center">
                Puoi disiscriverti quando vuoi. Cliccando sul pulsante qui sotto, accetti la{" "}
                <a
                  href="https://www.iubenda.com/privacy-policy/54965772"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-teal"
                >
                  Privacy Policy
                </a>{" "}
                del sito.
              </p>

              <input type="hidden" name="ml-submit" value="1" />

              {formError && (
                <p className="mt-4 text-sm font-semibold text-red-500 text-center">
                  {formError}
                </p>
              )}

              <div className="ml-form-embedSubmit mt-5">
                <button
                  type="submit"
                  className="primary group w-full inline-flex items-center justify-center gap-3 rounded-full bg-teal text-paper px-8 py-5 text-base font-bold tracking-wide hover:opacity-90 transition-all cursor-pointer"
                >
                  VOGLIO ISCRIVERMI
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
                <button disabled type="button" className="loading hidden">
                  <span className="sr-only">Loading...</span>
                </button>
              </div>

              <input type="hidden" name="anticsrf" value="true" />
            </form>
          </div>
          <div className="ml-form-successBody row-success hidden">
            <div className="ml-form-successContent text-center py-8">
              <div className="text-5xl mb-4">🎉</div>
              <h4 className="text-2xl font-bold text-ink">Grazie!</h4>
              <p className="mt-3 text-ink/75">
                Ti sei iscritto/a con successo. Ci vediamo il 27 Aprile alle 21:00!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroVideo() {
  const [muted, setMuted] = useState(true);
  const ref = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (ref.current) {
      ref.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-br from-gold/30 to-teal/30 rounded-3xl blur-2xl" />
      <div className="relative rounded-3xl overflow-hidden border-2 border-paper/10 bg-paper/5 backdrop-blur">
        <video
          ref={ref}
          src={HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto block"
        />
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 h-11 w-11 rounded-full bg-ink/70 hover:bg-ink flex items-center justify-center transition-colors cursor-pointer"
          aria-label={muted ? "Attiva audio" : "Disattiva audio"}
        >
          {muted ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-paper">
              <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-paper">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

function MappaPage() {
  const eventDate = getEventDate();

  return (
    <div className="min-h-screen bg-ink text-paper font-sans" style={{ fontFamily: "'Lexend', ui-sans-serif, system-ui, sans-serif" }}>
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-paper/10 bg-ink/85 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-4 flex items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-3">
            <img src={LOGO} alt="Gionsnow" className="h-10 w-auto" />
          </a>
          <div className="hidden md:block">
            <Countdown targetDate={eventDate} dark />
          </div>
          <a
            href="#form"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gold text-ink px-5 py-2.5 text-sm font-bold hover:bg-paper transition-colors"
          >
            Prenota il tuo posto
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-teal/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-16 lg:pt-24 pb-20 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-paper/20 bg-paper/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-paper/80">
                <span className="h-2 w-2 rounded-full bg-red-500 animate-blink" />
                Evento <strong className="text-paper">LIVE</strong> & <strong className="text-gold">GRATUITO</strong>
                <span className="text-paper/50">•</span> 27 Aprile · 21:00
              </div>

              <h1 className="mt-8 text-[2rem] xs:text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight text-balance">
                Le regole per crescere e vendere con i{" "}
                <span className="text-gold">video sui social</span> sono{" "}
                <em className="not-italic underline decoration-gold decoration-[6px] underline-offset-4">cambiate</em>.
              </h1>

              <p className="mt-8 text-lg sm:text-xl text-paper/80 leading-relaxed max-w-2xl">
                Scopri <strong className="text-paper">come adattarti nel 2026</strong>, nella mia
                Masterclass Live e Gratuita{" "}
                <em className="text-gold not-italic font-semibold">"La Mappa dei Video"</em>.
              </p>

              <div className="mt-10">
                <Countdown targetDate={eventDate} variant="large" dark />
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#form"
                  className="group inline-flex items-center gap-3 rounded-full bg-gold text-ink px-8 py-4 text-base font-bold tracking-wide hover:bg-paper transition-all hover:-translate-y-1"
                >
                  Prenota il tuo posto
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="#agenda"
                  className="inline-flex items-center gap-2 px-6 py-4 text-sm font-semibold text-paper/80 hover:text-paper border-b border-paper/30 hover:border-gold transition-colors"
                >
                  Cosa faremo durante la serata
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <HeroVideo />
            </div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="border-y border-paper/10 bg-paper/5 backdrop-blur overflow-hidden">
          <div className="marquee py-4 text-sm font-semibold uppercase tracking-[0.2em]">
            {[...Array(2)].map((_, k) => (
              <div key={k} className="flex shrink-0 items-center gap-10 px-5">
                {[
                  "Masterclass LIVE e GRATUITA",
                  "27 Aprile · Ore 21:00",
                  "Per creator, artigiani e liberi professionisti",
                  "Come vendere con i video nel 2026",
                  "Per Community piccole e grandi",
                  "Casi studio reali",
                  "Scoprirai come usare l'AI in modo concreto",
                  "1 ora e mezza di contenuti pratici",
                  "Registrazione disponibile dopo l'evento",
                ].map((t, i) => (
                  <span key={`${k}-${i}`} className="flex items-center gap-10 text-paper/80">
                    <span>{t}</span>
                    <span className="text-gold">★</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="form" className="bg-paper text-ink py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-5 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-teal flex items-center justify-center gap-3">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-blink" />
            Iscrizioni aperte
          </p>
          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-balance">
            Prenota il tuo posto alla{" "}
            <span className="text-teal">masterclass gratuita</span>.
          </h2>
          <p className="mt-6 text-lg text-ink/75">
            Le iscrizioni chiudono tra pochi giorni.
          </p>
          <div className="mt-10">
            <Countdown targetDate={eventDate} variant="large" />
          </div>
          <div className="mt-12 rounded-3xl bg-cream p-8 lg:p-10 border-2 border-ink text-left">
            <MailerLiteForm />
          </div>
        </div>
      </section>

      {/* PROBLEM INTRO */}
      <section className="bg-paper text-ink py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-muted-foreground">
            Leggi qui sotto e dimmi se ti ci ritrovi.
          </p>
          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-balance">
            <em className="not-italic">Non è che ti manchino le competenze per creare video.</em>
            <br />
            <span className="text-teal">
              È che non sai quali video funzionano veramente sui social, nel 2026.
            </span>
          </h2>
          <div className="mt-12">
            <CTABig />
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="bg-cream text-ink py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <img
                src={PROBLEM_IMG}
                alt="I problemi dei creator nel 2026"
                className="w-full rounded-3xl shadow-bold border-2 border-ink"
                loading="lazy"
              />
            </div>
            <div className="lg:col-span-7 space-y-6">
              {PROBLEMS.map((p, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl bg-paper border-2 border-ink p-6 lg:p-8 shadow-soft"
                >
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-gold font-black font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-lg leading-relaxed">
                      <MD text={p} />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16">
            <CTABig />
          </div>
        </div>
      </section>

      {/* FRUSTRATION / TURN */}
      <section className="bg-ink text-paper py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5" />
        <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            È <span className="text-gold">frustrante</span>, no?
          </h2>
          <div className="mt-10 space-y-6 text-lg sm:text-xl leading-relaxed text-paper/85">
            <p>
              Pubblichi video con costanza, segui i trend, cerchi di fare tutto bene eppure{" "}
              <strong className="text-paper">le vendite non arrivano</strong>.
            </p>
            <p>
              Le visualizzazioni ci sono, qualche like pure, ma{" "}
              <strong className="text-paper">nessuno scrive, nessuno chiede, nessuno compra</strong>.
            </p>
            <p>
              E ogni settimana si ricomincia da zero, senza capire davvero dove sta il problema.
            </p>
            <p>
              <strong className="text-paper">La soluzione è copiare i format che funzionano per gli altri?</strong>{" "}
              C'hai provato però non funzionano.
            </p>
            <p>
              E finisce che guardi i creator/professionisti con community grandi e ti convinci che
              il problema siano i follower o che ci sia solo da aspettare.
            </p>
            <p>
              Eppure dentro di te sai una cosa con chiarezza:{" "}
              <strong className="text-gold">hai qualcosa di valore da offrire.</strong> Non ti manca
              il talento, non ti manca la voglia.
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-paper pt-4 border-t border-paper/15">
              Ti manca la mappa per capire quali video funzionano nel 2026.
            </p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-paper text-ink py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <img
                src={MAP_IMG}
                alt="La mappa dei video"
                className="w-full rounded-3xl shadow-bold-gold border-2 border-ink"
                loading="lazy"
              />
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-balance">
                Cosa fanno di diverso i creator/professionisti che{" "}
                <span className="text-teal">crescono e vendono</span> con i loro video, rispetto a
                chi non ce la fa?
              </h2>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {PILLARS.map((p, i) => (
              <article
                key={i}
                className="group rounded-3xl border-2 border-ink p-8 bg-cream hover:bg-gold transition-colors"
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-mono text-sm font-bold text-ink/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold leading-tight">{p.title}</h3>
                </div>
                <p className="text-base leading-relaxed text-ink/80">{p.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <CTABig />
          </div>
        </div>
      </section>

      {/* AGENDA */}
      <section id="agenda" className="bg-ink text-paper py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10" />
        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-gold flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-blink" />
            Cosa faremo durante la serata del 27 aprile
          </p>
          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight max-w-4xl text-balance">
            In 1 ora e mezza ti porti a casa la <span className="text-gold">mappa completa</span> per
            creare video che <em className="not-italic underline decoration-gold decoration-4 underline-offset-4">davvero</em> funzionano nel 2026.
          </h2>

          <div className="mt-16 space-y-6">
            {AGENDA.map((a) => (
              <article
                key={a.n}
                className="group rounded-3xl border border-paper/15 bg-paper/[0.03] hover:bg-paper/[0.06] transition-colors p-8 lg:p-10"
              >
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
                  <div className="lg:col-span-3">
                    <div className="font-mono text-6xl sm:text-7xl font-black text-gold leading-none">
                      {a.n}
                    </div>
                    <p className="mt-3 text-xs uppercase tracking-[0.2em] text-paper/50">
                      {a.kicker}
                    </p>
                  </div>
                  <div className="lg:col-span-9">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                      {a.title}
                    </h3>
                    <ul className="mt-6 space-y-3">
                      {a.bullets.map((b, i) => (
                        <li key={i} className="flex gap-3 text-base sm:text-lg text-paper/85">
                          <span className="text-gold mt-1">→</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 inline-block rounded-full bg-gold/15 border border-gold/40 px-4 py-2 text-sm text-gold font-semibold">
                      {a.insight}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <CTABig dark />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-paper text-ink py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-muted-foreground">
              Cosa dicono gli studenti dei miei corsi
            </p>
            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Quello che insegno è ciò che <span className="text-teal">applico personalmente</span>.
            </h2>
          </div>

          <div className="mt-16 columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
            {REVIEWS.map((src, i) => (
              <div
                key={i}
                className="mb-4 break-inside-avoid rounded-2xl overflow-hidden border-2 border-ink shadow-soft hover:shadow-bold transition-shadow"
              >
                <img src={src} alt={`Recensione ${i + 1}`} loading="lazy" className="w-full h-auto block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHOR */}
      <section className="bg-ink text-paper py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 bg-gold rounded-3xl rotate-2" />
                <img
                  src={ME_IMG}
                  alt="Marialaura — Gionsnow"
                  className="relative rounded-3xl border-2 border-paper/20 w-full"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-paper/60">
                Ciao, sono Marialaura
              </p>
              <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                ma forse mi conosci come <span className="text-teal">Gionsnow</span>
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-paper/85">
                <p>
                  Da <strong className="text-paper">oltre 10 anni</strong> sono video maker, content creator e insegnante.
                </p>
                <p>
                  La mia mission è <strong className="text-paper">guidare Small Business, Personal Brand</strong> e{" "}
                  <strong className="text-paper">Aziende</strong> nella creazione dei loro <strong className="text-paper">contenuti video</strong>,
                  in prima persona o affiancandoli, divulgare informazioni utili sulla creazione
                  contenuti, sul video making e sul cinema, con un linguaggio semplice ma non banale,
                  alla portata di tutti.
                </p>
                <p>
                  In questi anni ho affiancato <strong className="text-paper">oltre 500 studenti</strong> e{" "}
                  <strong className="text-paper">clienti</strong> nella creazione dei loro contenuti video.
                </p>
                <p>
                  Ho collaborato con <strong className="text-paper">XFactor 13</strong>,{" "}
                  <strong className="text-paper">The Jackal a Sanremo 2024</strong>, sono insegnante presso il{" "}
                  <strong className="text-paper">Politecnico di Milano</strong>, speaker per{" "}
                  <strong className="text-paper">Cavalieri Digitali</strong> e sono stata invitata, insieme a 50 creator del
                  settore cinematografico, all'evento{" "}
                  <strong className="text-paper">Oscar Party di I Wonder Pictures</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Logo marquee */}
          <div className="mt-20 overflow-hidden border-y-2 border-paper/20 py-8">
            <div className="marquee items-center">
              {[...LOGOS, ...LOGOS].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="logo collaboratore"
                  className="h-14 sm:h-16 mx-8 sm:mx-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOR WHOM */}
      <section className="bg-paper text-ink py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-muted-foreground">
              Questo è il momento giusto per te
            </p>
            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Se vuoi capire come creare finalmente video che{" "}
              <span className="text-gold">attirano l'attenzione</span>, generano vendite e richieste,
              seguendo le <span className="text-teal">nuove regole del 2026</span>.
            </h2>
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-8">
            <div className="rounded-3xl border-2 border-ink bg-cream p-8 lg:p-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-teal text-paper px-3 py-1 text-xs font-bold uppercase tracking-wider mb-6">
                ✓ Per chi è La Mappa dei Video
              </div>
              <ul className="space-y-6">
                {FOR_WHOM_YES.map((t, i) => (
                  <li key={i} className="flex gap-4 text-base leading-relaxed">
                    <span className="shrink-0 mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-teal text-paper font-bold text-sm">
                      ✓
                    </span>
                    <p>
                      <MD text={t} />
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border-2 border-ink bg-ink text-paper p-8 lg:p-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-paper/10 text-paper px-3 py-1 text-xs font-bold uppercase tracking-wider mb-6">
                ✕ E per chi non è
              </div>
              <ul className="space-y-6">
                {FOR_WHOM_NO.map((t, i) => (
                  <li key={i} className="flex gap-4 text-base leading-relaxed text-paper/80">
                    <span className="shrink-0 mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-paper/15 text-paper font-bold text-sm">
                      ✕
                    </span>
                    <p>
                      <MD text={t} dark />
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT REELS */}
      <section className="bg-cream text-ink py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-muted-foreground">
            Video realizzati dai miei studenti
          </p>
          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            Hanno generato <span className="text-teal">visualizzazioni, contatti e vendite</span>,
            dopo aver imparato il metodo.
          </h2>
          <div className="mt-12 space-y-6 text-lg leading-relaxed text-ink/85 max-w-3xl mx-auto">
            <p>
              I video che funzionano nel 2026 non sono quelli con la produzione perfetta.
            </p>
            <p>
              Sono quelli con il <strong>messaggio giusto</strong>, la <strong>struttura giusta</strong>{" "}
              e un minimo di metodo dietro.
            </p>
            <p>
              Tutto quello che vedrai durante la serata è stato pensato per chi parte da zero o
              quasi, con lo smartphone in mano e una community ancora piccola.
            </p>
            <p className="text-xl sm:text-2xl font-bold text-ink pt-4">
              Alla fine dell'ora e mezza saprai creare un video che converte, saprai costruire il tuo
              format e saprai usare l'AI per accelerare il processo senza perdere la tua voce.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {STUDENT_VIDEOS.map((src, i) => (
              <StudentVideo key={i} src={src} />
            ))}
          </div>
        </div>
      </section>

      {/* FABBRICA TEASER */}
      <section className="bg-ink text-paper py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <img
                src={FABBRICA_IMG}
                alt="La Fabbrica di Video"
                className="w-full rounded-3xl border-2 border-paper/15"
                loading="lazy"
              />
            </div>
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-gold">
                Bonus per chi partecipa
              </p>
              <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                Al termine dell'evento live, riaprirò le{" "}
                <em className="not-italic text-gold underline decoration-paper/40 underline-offset-4">
                  iscrizioni a La Fabbrica di Video
                </em>
                !
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-paper/85">
                <p>
                  La <strong className="text-paper">Fabbrica di Video</strong> è il mio{" "}
                  <strong className="text-paper">video corso più completo</strong> per creare video
                  unici e coinvolgenti per crescere online, che ti guiderà lungo tutto il{" "}
                  <strong className="text-paper">
                    processo di creazione script, registrazione, gestione della luce, montaggio ed
                    editing
                  </strong>
                  , usando CapCut versione Smartphone o Desktop.
                </p>
                <p>
                  Imparerai le <strong className="text-paper">tecniche</strong> e le{" "}
                  <strong className="text-paper">strategie</strong> necessarie per creare video unici
                  e coinvolgenti in metà del tempo.
                </p>
                <p>
                  <strong className="text-paper">Dalla stesura degli script alla fase di editing</strong>
                  , le lezioni ti guideranno passo dopo passo nel rendere i tuoi video da{" "}
                  <em>"sono banali"</em> a{" "}
                  <strong className="text-paper">
                    "non ho mai avuto così tanti follower e vendite con i video"
                  </strong>
                  .
                </p>
              </div>
              <div className="mt-10">
                <CTABig dark />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper text-ink py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-center">
            Hai qualche <em className="not-italic text-teal">domanda</em>? Leggi qui.
          </h2>
          <div className="mt-16 space-y-4">
            {FAQ.map((f, i) => (
              <details
                key={i}
                className="group rounded-2xl border-2 border-ink bg-cream p-6 lg:p-8 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                  <span className="text-lg sm:text-xl font-bold leading-snug">{f.q}</span>
                  <span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-gold text-2xl font-black transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-5 text-base leading-relaxed text-ink/80 whitespace-pre-line">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-paper/60 border-t border-paper/10 py-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>Copyright @2026 La Mappa dei Video — Marialaura Gionfriddo · P.IVA IT01979980891</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.iubenda.com/privacy-policy/54965772"
              target="_blank"
              rel="noreferrer"
              className="hover:text-paper transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.iubenda.com/privacy-policy/54965772/cookie-policy"
              target="_blank"
              rel="noreferrer"
              className="hover:text-paper transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
