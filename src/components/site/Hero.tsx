import { Countdown } from "./Countdown";
import { CTAButton } from "./CTAButton";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-12 lg:pt-20 pb-20 lg:pb-32">
      {/* Background decor */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute top-60 -left-40 h-[30rem] w-[30rem] rounded-full bg-teal/15 blur-3xl" />
        <div className="absolute inset-0 bg-noise opacity-40" />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-cream border border-stone px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-ink/70 mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-teal animate-blink" />
              Lancio 2026 · Solo per pochi giorni
            </div>

            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-black leading-[0.92] tracking-tighter text-ink text-balance">
              La Fabbrica
              <br />
              di <span className="italic text-gold">Video</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg lg:text-xl text-ink/80 leading-relaxed text-pretty">
              Il mio <strong>corso più completo</strong> per creare{" "}
              <em>contenuti video che generano interazioni e vendite per</em>{" "}
              <strong>Instagram</strong>, anche senza essere un videomaker.
            </p>

            <p className="mt-5 max-w-2xl text-base lg:text-lg text-ink/70 leading-relaxed text-pretty">
              Al suo interno troverai il mio <strong>metodo pratico e accessibile</strong> per
              realizzare video che <u className="decoration-gold decoration-2 underline-offset-4">catturano l'attenzione</u>,{" "}
              <u className="decoration-gold decoration-2 underline-offset-4">aumentano l'engagement</u> e{" "}
              <u className="decoration-gold decoration-2 underline-offset-4">fanno crescere il tuo brand</u> su{" "}
              <strong>Instagram</strong>, nel 2026.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="text-2xl tracking-tight text-gold">★★★★★</span>
              <span className="italic font-medium text-ink/80">Oltre 300 studenti iscritti</span>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
              <CTAButton href="#iscriviti">Mi iscrivo ora</CTAButton>
              <a
                href="#recensioni"
                className="text-sm font-medium text-ink/70 hover:text-ink underline underline-offset-4 decoration-1"
              >
                Oppure leggi le recensioni del corso →
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-gold rounded-3xl rotate-3" />
              <div className="absolute -inset-4 bg-ink rounded-3xl -rotate-2 translate-x-2" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-2 border-ink bg-cream">
                <img
                  src="https://d1yei2z3i6k35z.cloudfront.net/7515914/67d4626b5ce46_Immagini1080135017.png"
                  alt="Marialaura — Gionsnow"
                  loading="eager"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-paper/95 backdrop-blur p-4 border border-ink/10">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                    Il prezzo di lancio scade tra
                  </div>
                  <Countdown />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-6 -right-4 lg:right-6 rotate-6 animate-float">
                <div className="rounded-full bg-teal text-paper px-5 py-3 text-sm font-bold shadow-bold">
                  +300 studenti
                </div>
              </div>
              <div className="absolute -bottom-6 -left-4 -rotate-6 animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="rounded-2xl bg-paper border-2 border-ink px-4 py-3 text-xs font-bold shadow-bold-gold">
                  6 moduli · 36 lezioni · +8 ore
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
