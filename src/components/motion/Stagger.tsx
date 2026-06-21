"use client";

import { ReactNode } from "react";

export function Stagger({
  children,
  baseDelay = 0,
  step = 80,
}: {
  children: ReactNode[];
  baseDelay?: number;
  step?: number;
}) {
  return (
    <>
      {Array.isArray(children) &&
        children.map((child, i) => <div key={i}>{child}</div>)}
    </>
  );
}
