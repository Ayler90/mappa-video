import { CTAButton } from "./CTAButton";
import { LaunchBanner } from "./LaunchBanner";

const images = [
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/67d4626b5ce46_Immagini1080135017.png",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/67d598b61ddd1_ImmaginiVarie1080x1350px1.png",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/67d59907d9769_AdsMarialauraVerticali.png",
];

export function WhyJoin() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-[1.02] tracking-tighter text-balance">
            Crea video magnetici, <em className="text-gold">come una serie Netflix</em>, e cresci sui
            social nel <span className="underline decoration-gold decoration-[6px] underline-offset-8">2026</span>.
          </h2>

          <p className="mt-10 text-xl lg:text-2xl font-display italic text-ink/80 leading-snug">
            Nel 2026, pubblicare video a caso su Instagram e sui social non basta più.
          </p>

          <div className="mt-8 space-y-6 text-lg text-ink/80 leading-relaxed text-pretty max-w-3xl">
            <p>
              L'algoritmo premia i contenuti che <em>trattengono l'attenzione</em>,{" "}
              <em>coinvolgono il pubblico</em> e <em>spingono all'azione</em>. Se i tuoi video non
              riescono a catturare subito chi li guarda, non generano interazioni e vengono sepolti
              dal feed.
            </p>
            <p>
              Per crescere davvero, hai bisogno di <strong>video strategici</strong>, con un{" "}
              <strong>messaggio chiaro</strong> e un{" "}
              <strong>formato pensato per attrarre e convertire</strong>. Serve un mix di ganci
              efficaci, storytelling coinvolgente e tecniche di montaggio dinamiche che facciano
              fermare lo scroll e trasformino i follower in clienti.
            </p>
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h3 className="font-display text-3xl md:text-5xl font-black italic leading-tight">
              È per questo che ho creato La Fabbrica di Video.
            </h3>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton href="#moduli" variant="gold">Scopri le lezioni</CTAButton>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-3 gap-3">
            {images.map((src, i) => (
              <div
                key={i}
                className={`aspect-[3/4] overflow-hidden rounded-2xl border-2 border-ink ${
                  i === 1 ? "translate-y-6" : ""
                }`}
              >
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <LaunchBanner />
      </div>
    </section>
  );
}
