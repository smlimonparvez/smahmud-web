"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates from 0 to `target` with a cubic ease-out once `start` is
 * true, mirroring the original requestAnimationFrame counter.
 */
export function useCounter(target: number, start: boolean, duration = 1300) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!start || started.current) return;
    started.current = true;

    const startTime = performance.now();
    let raf: number;

    function tick(now: number) {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return value;
}
