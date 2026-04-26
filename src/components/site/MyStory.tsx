import { CTAButton } from "./CTAButton";
import { LaunchBanner } from "./LaunchBanner";

export function MyStory() {
  return (
    <section className="py-24 lg:py-32 bg-cream/40">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <h2 className="font-display text-4xl md:text-6xl font-black leading-[1.05] tracking-tighter text-balance max-w-4xl">
          Grazie ai video, ho fatto crescere la mia community fino a{" "}
          <span className="text-teal">50mila (e oltre)</span> follower.
        </h2>

        <div className="mt-10 max-w-3xl space-y-6 text-lg text-ink/80 leading-relaxed text-pretty">
          <p>
            Ti devo dire la verità: è solo grazie ai video se sono riuscita a far crescere così
            tanto la mia community e ad aumentare le mie collaborazioni (così come le vendite dei
            miei servizi).
          </p>
          <p>
            E devo sfatare un falso mito:{" "}
            <strong>non c'è stato un singolo video virale che mi ha portato una crescita immediata</strong>.
          </p>
          <p>
            La mia community è cresciuta da 10mila follower a oltre 50mila (nel giro di pochi anni)
            perché ho continuato a pubblicare video, ma facendolo in modo diverso rispetto agli
            altri.
          </p>
          <p>
            Mi sono <strong>concentrata su una cosa</strong>: rendere i miei video unici e
            immediatamente riconoscibili, usando transizioni, montaggio ed editing in modo
            particolare.
          </p>
          <p>
            E tutto questo è diventato <strong>il mio metodo per creare contenuti</strong>, che uso
            con i miei clienti e insegno ai miei studenti.
          </p>
          <p>
            Questo stesso metodo <strong>ha aiutato oltre 300 persone</strong> a crescere sui social
            con i loro video.
          </p>
        </div>

        <h3 className="mt-14 font-display text-3xl md:text-5xl font-black italic leading-snug text-balance max-w-4xl">
          Ed è lo stesso metodo che trovi in <span className="text-gold">La Fabbrica di Video</span>.
        </h3>
      </div>
    </section>
  );
}

export function PresentCourse() {
  const stats = [
    { n: "6", l: "Moduli" },
    { n: "36", l: "Lezioni" },
    { n: "+8", l: "Ore" },
    { n: "+30", l: "Esercizi" },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-bold mb-6">
            Ti presento
          </p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter">
            LA FABBRICA <br />
            DI VIDEO <span className="text-gold">🎞️</span>
          </h2>
        </div>

        <div className="mt-14 mx-auto max-w-5xl">
          <div className="relative">
            <div className="absolute -inset-4 bg-teal rounded-3xl rotate-1" />
            <div className="relative aspect-video overflow-hidden rounded-3xl border-2 border-ink">
              <img
                src="https://d1yei2z3i6k35z.cloudfront.net/7515914/665ae30e06cda_Immaginiorizzontali2.png"
                alt="La Fabbrica di Video"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <p className="mt-14 max-w-3xl mx-auto text-lg text-ink/80 leading-relaxed text-pretty text-center">
          La Fabbrica di Video è il mio <strong>video corso più completo</strong> per{" "}
          <strong>creare video unici e coinvolgenti per crescere online e sui social</strong>, nel
          2026, che ti guiderà lungo tutto il processo di creazione script, registrazione, gestione
          della luce, montaggio ed editing, <strong>usando CapCut ed Edits</strong>, versione
          Smartphone o Desktop.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((s) => (
            <div
              key={s.l}
              className="rounded-3xl border-2 border-ink bg-paper p-6 text-center hover:bg-gold transition-colors"
            >
              <div className="font-display text-5xl md:text-6xl font-black leading-none">{s.n}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] font-bold text-ink/60">
                {s.l}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto space-y-5 text-lg text-ink/80 leading-relaxed text-pretty text-center">
          <p>
            Imparerai le <strong>tecniche</strong> e le <strong>strategie</strong> necessarie per
            creare video unici e coinvolgenti in metà del tempo.
          </p>
          <p>
            <strong>Dalla stesura degli script alla fase di editing</strong>, le lezioni ti
            guideranno passo dopo passo nel rendere i tuoi video da "<em>sono banali</em>" a "
            <strong>non ho mai avuto così tanti follower e vendite con i video</strong>".
          </p>
          <p className="font-display text-xl italic">
            Ti servirà solo il tuo <strong className="not-italic">smartphone</strong> (o una
            videocamera, se preferisci) e <strong className="not-italic">CapCut o Edits</strong>{" "}
            versione Smartphone o Desktop 📱
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <CTAButton href="#iscriviti">Mi iscrivo ora</CTAButton>
        </div>
        <LaunchBanner />
      </div>
    </section>
  );
}
