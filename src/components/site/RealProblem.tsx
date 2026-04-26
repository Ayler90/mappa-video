const beliefs = [
  '"L\'algoritmo mi penalizza, è per questo che i miei video non funzionano."',
  '"Ho bisogno di attrezzature professionali per fare video migliori."',
  '"Devo pubblicare più spesso, altrimenti non crescerò mai."',
  '"Non ho abbastanza creatività per fare video interessanti."',
  '"Se non ho un montaggio perfetto, i miei video non avranno successo."',
];

const truths = [
  "Non stai creando i video giusti per il pubblico giusto.",
  "Ti concentri troppo sull'attrezzatura e troppo poco sulla strategia.",
  "Non hai un sistema per trovare idee e creare video senza perdere ore.",
  "Stai seguendo trend a caso, senza capire cosa funziona davvero per te.",
  "Ti manca un metodo chiaro per creare video che funzionano.",
];

export function RealProblem() {
  return (
    <section className="py-24 lg:py-32 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl md:text-6xl font-black leading-[1.05] tracking-tighter text-balance">
            Qual è <em className="text-gold">davvero il problema</em> che ti{" "}
            <span className="underline decoration-gold decoration-[6px] underline-offset-8">
              impedisce di crescere
            </span>{" "}
            con i video?
          </h2>
          <p className="mt-6 font-display italic text-2xl text-paper/70">
            Non è quello che pensi.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border-2 border-paper/15 p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-10 w-10 rounded-full bg-destructive/20 text-destructive-foreground flex items-center justify-center text-xl">
                ❌
              </span>
              <h3 className="font-display text-xl font-bold">
                Quello che <em className="text-paper/60">credi</em> ti blocchi.
              </h3>
            </div>
            <ul className="space-y-4">
              {beliefs.map((b, i) => (
                <li key={i} className="text-paper/70 italic leading-relaxed border-l-2 border-paper/15 pl-4">
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border-2 border-gold bg-gold/5 p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-10 w-10 rounded-full bg-gold text-ink flex items-center justify-center text-xl">
                ✅
              </span>
              <h3 className="font-display text-xl font-bold">
                Quello che <em className="text-gold">veramente</em> ti blocca.
              </h3>
            </div>
            <ul className="space-y-4">
              {truths.map((t, i) => (
                <li key={i} className="font-medium text-paper leading-relaxed flex gap-3">
                  <span className="text-gold font-display font-black">0{i + 1}</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="mt-20 font-display text-3xl md:text-5xl font-black leading-tight text-balance text-center max-w-4xl mx-auto">
          Risolvendo questi problemi passi da{" "}
          <em className="text-gold">video che non funzionano</em> a{" "}
          <span className="underline decoration-gold decoration-[6px] underline-offset-8">
            video che attirano pubblico giusto
          </span>
          .
        </h3>
      </div>
    </section>
  );
}
