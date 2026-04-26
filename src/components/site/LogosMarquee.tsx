const logos = [
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/6633b80c62ab0_16.png",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/6633b8183d044_15.png",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/6633b81c71a84_14.png",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/6633b82f4bc68_13.png",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/6633b833a7391_12.png",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/6633b83775b1d_11.png",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/6633b83b8a473_10.png",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/6633b83f1145a_9.png",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/6633b843a7576_8.png",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/6633b8484ec6d_7.png",
  "https://d1yei2z3i6k35z.cloudfront.net/7515914/6633b84c8cbcc_6.png",
];

export function LogosMarquee() {
  return (
    <section className="border-y border-border py-12 bg-cream/60 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 mb-8">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">
          Ho collaborato con
        </p>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper to-transparent z-10" />
        <div className="marquee">
          {[...logos, ...logos].map((src, i) => (
            <div
              key={i}
              className="mx-10 flex h-16 w-40 shrink-0 items-center justify-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
            >
              <img src={src} alt="cliente" className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
