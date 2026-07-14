"use client";

import Script from "next/script";

export default function GoogleAnalytics() {
  const id = "G-4HJSHPTHV1";

  if (!id) return null;

  return (
    <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />

      <Script id="ga">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `}
      </Script>
    </>
  );
}
