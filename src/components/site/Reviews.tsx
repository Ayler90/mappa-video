const reviews = [
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/69d113ae49fc52.89979943_IMG_1893.jpg",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/69d113aa68f7f4.26205356_IMG_1966.PNG",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/69d113a52daf93.51082225_IMG_2114.jpg",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/69d113a29edbb1.62678777_IMG_2113.jpg",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/69d1139feb1882.20501959_Screenshot2025-11-19alle14.56.20.jpg",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/69d1139da68df9.93951494_IMG_2162.PNG",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/69d1139ae4b8a1.04484209_IMG_2328.PNG",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/69d1139882b761.36185861_IMG_2324.PNG",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/69d11396185068.88487792_IMG_4456.PNG",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/69d1139412f032.60973117_IMG_5065.PNG",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/69d11391841088.49732806_IMG_5064.PNG",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/67b33e452ab7c_13.png",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/67b33e4cef256_12.png",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/67b33e5435ef8_11.png",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/67b33e5c55a87_10.png",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/67b33e63c69d2_9.png",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/67b33e70ed2e4_8.png",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/67b33e2d0c52d_16.png",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/67b33e34a5ca2_15.png",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/67b33e3d88455_14.png",
];

const quotes = [
  "Le lezioni di La Fabbrica di Video coprono ogni aspetto della creazione di un video",
  "Io ho iniziato a seguire le lezioni per la creazione dei miei contenuti Instagram e non vedo l'ora di continuare",
  "Se il tuo obiettivo è quello di realizzare video per i tuoi social, non puoi fare a meno di questo video corso",
  "Mi ha aiutata a trovare le idee e a mettere in pratica montaggi creativi che prima non riuscivo a fare",
];

export function Reviews() {
  return (
    <section id="recensioni" className="py-24 lg:py-32 bg-ink text-paper relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-10" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl font-black leading-tight tracking-tighter">
            Cosa dicono i miei studenti del corso? <span className="text-gold">🏆</span>
          </h2>
          <div className="mt-6 inline-flex items-center gap-3">
            <span className="text-2xl text-gold">★★★★★</span>
            <span className="italic font-medium">Oltre 300 studenti iscritti</span>
          </div>
        </div>

        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 [&>*]:mb-4">
          {reviews.map((src, i) => (
            <div
              key={i}
              className="break-inside-avoid overflow-hidden rounded-2xl border border-paper/15 bg-paper/5 hover:border-gold transition-colors"
            >
              <img src={src} alt="Recensione studente" loading="lazy" className="w-full h-auto" />
            </div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {quotes.map((q, i) => (
            <blockquote
              key={i}
              className="relative rounded-3xl border-2 border-gold/40 bg-gold/5 p-8"
            >
              <span className="absolute -top-6 left-6 font-display text-7xl text-gold leading-none">"</span>
              <p className="font-display text-xl md:text-2xl leading-snug text-paper text-pretty">
                {q}
              </p>
            </blockquote>
          ))}
        </div>

        <p className="mt-14 text-center text-paper/70 max-w-3xl mx-auto">
          Queste sono alcune delle <strong className="text-paper">recensioni dei miei studenti</strong>, che hanno già avuto
          accesso a La Fabbrica di Video.{" "}
          <a
            href="https://maps.app.goo.gl/mkpL28TxfwytQhjb7"
            target="_blank"
            rel="noreferrer"
            className="text-gold underline italic"
          >
            Clicca qui per leggere tutte le altre recensioni sulla mia scheda Google Business →
          </a>
        </p>
      </div>
    </section>
  );
}
