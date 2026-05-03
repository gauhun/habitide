import { useEffect, useRef } from 'react';

export function useFadeUp() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    const targets = el.querySelectorAll('.fade-up');
    targets.forEach((t) => observer.observe(t));
    if (el.classList.contains('fade-up')) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}
