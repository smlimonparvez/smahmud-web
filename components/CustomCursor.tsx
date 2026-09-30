"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, input, textarea, select, .svc-card, .svc-dot, .burger";

/**
 * A lightweight custom cursor: a small dot that tracks the pointer
 * exactly, and a ring that eases towards it, growing over links,
 * buttons, cards and form fields. Disabled automatically on touch /
 * coarse-pointer devices, so it never interferes with mobile use.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const rafId = useRef(0);
  const ready = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;

    document.body.classList.add("cursor-enabled");

    const activate = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!ready.current) {
        ready.current = true;
        ring.current.x = e.clientX;
        ring.current.y = e.clientY;
        document.body.classList.add("cursor-ready");
      }
    };

    const onMove = (e: MouseEvent) => activate(e);

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const hit = el.closest(INTERACTIVE_SELECTOR);
      ringRef.current?.classList.toggle("hovered", !!hit);
    };

    const onDown = () => ringRef.current?.classList.add("pressed");
    const onUp = () => ringRef.current?.classList.remove("pressed");
    const onEnter = (e: MouseEvent) => activate(e);
    const onLeave = () => {
      ready.current = false;
      document.body.classList.remove("cursor-ready");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseenter", onEnter, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);

    function loop() {
      ring.current.x += (target.current.x - ring.current.x) * 0.18;
      ring.current.y += (target.current.y - ring.current.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }
      rafId.current = requestAnimationFrame(loop);
    }
    rafId.current = requestAnimationFrame(loop);

    return () => {
      document.body.classList.remove("cursor-enabled", "cursor-ready");
      window.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
