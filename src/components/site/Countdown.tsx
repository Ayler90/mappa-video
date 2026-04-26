import { useEffect, useState } from "react";

// Target lancio: venerdì 1 maggio 23:59 (anno corrente o successivo se passato)
function getTargetDate() {
  const now = new Date();
  let year = now.getFullYear();
  let target = new Date(year, 4, 1, 23, 59, 0); // mese 4 = maggio
  if (target.getTime() < now.getTime()) {
    target = new Date(year + 1, 4, 1, 23, 59, 0);
  }
  return target;
}

function diff(target: Date) {
  const ms = Math.max(0, target.getTime() - Date.now());
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

type Variant = "compact" | "large";

export function Countdown({
  variant = "compact",
  targetDate,
}: {
  variant?: Variant;
  targetDate?: Date;
}) {
  const [target] = useState(() => targetDate ?? getTargetDate());
  const [time, setTime] = useState(() => diff(target));

  useEffect(() => {
    const id = setInterval(() => setTime(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const items = [
    { v: time.days, l: "giorni" },
    { v: time.hours, l: "ore" },
    { v: time.minutes, l: "minuti" },
    { v: time.seconds, l: "secondi" },
  ];

  if (variant === "large") {
    return (
      <div className="flex items-center justify-center gap-3 sm:gap-6">
        {items.map((it, i) => (
          <div key={it.l} className="flex items-center gap-3 sm:gap-6">
            <div className="flex flex-col items-center">
              <span className="font-display text-5xl sm:text-7xl font-black tabular-nums text-ink leading-none">
                {String(it.v).padStart(2, "0")}
              </span>
              <span className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {it.l}
              </span>
            </div>
            {i < items.length - 1 && (
              <span className="font-display text-4xl sm:text-6xl text-gold animate-blink">:</span>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 font-mono text-xs sm:text-sm tabular-nums">
      {items.map((it, i) => (
        <span key={it.l} className="flex items-baseline gap-1">
          <span className="font-bold text-ink">{String(it.v).padStart(2, "0")}</span>
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
            {it.l.slice(0, 1)}
          </span>
          {i < items.length - 1 && <span className="text-muted-foreground">:</span>}
        </span>
      ))}
    </div>
  );
}
