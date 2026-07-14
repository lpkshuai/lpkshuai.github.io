"use client";

import Script from "next/script";

export default function Clarity() {
  const id = "xmagxst674";

  if (!id) return null;

  return (
    <>
      <Script id="clarity-init" strategy="afterInteractive">
        {`
          window.clarity = window.clarity || function () {
            (window.clarity.q = window.clarity.q || []).push(arguments);
          };
        `}
      </Script>

      <Script
        id="clarity-loader"
        strategy="afterInteractive"
        src={`https://www.clarity.ms/tag/${id}`}
      />
    </>
  );
}
