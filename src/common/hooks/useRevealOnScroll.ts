import { RefObject, useEffect, useRef } from "react";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Runs `animate` once, the first time `ref` scrolls into view.
 * Skipped entirely when the visitor prefers reduced motion, so content
 * simply renders in place.
 */
export function useRevealOnScroll<T extends Element>(
  ref: RefObject<T>,
  animate: () => void,
  threshold = 0.1,
  deps: unknown[] = []
) {
  const animateRef = useRef(animate);
  animateRef.current = animate;

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          animateRef.current();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, threshold, ...deps]);
}
