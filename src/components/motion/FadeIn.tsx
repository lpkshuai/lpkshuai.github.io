"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
};

export function FadeIn({ children, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // 只触发一次（Linear风格）
        }
      },
      {
        threshold: 0.12,
        rootMargin: "40px",
      },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`
        transition-all duration-700 ease-out will-change-transform
        ${
          visible
            ? "opacity-100 translate-y-0 blur-0"
            : "opacity-0 translate-y-6 blur-sm"
        }
      `}
    >
      {children}
    </div>
  );
}
