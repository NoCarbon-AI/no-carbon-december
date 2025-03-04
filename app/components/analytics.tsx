// /app/components/analytics.tsx
"use client";

import Script from "next/script";

export function Analytics() {
  const token = process.env.NEXT_PUBLIC_BEAM_TOKEN;
  
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MR1XEP4L58"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-MR1XEP4L58');
        `}
      </Script>

      {/* SalesGear Tracking Code */}
      <Script
        src="https://cdn.salesgear.io/js/script.js"
        strategy="afterInteractive"
      />
      <Script id="salesgear-init" strategy="afterInteractive">
        {`
          if (window && window.sg) {
            var sg = window.sg;
            sg.init("SG-1740345577252-37876");
          }
        `}
      </Script>


      {/* Existing Beam Analytics */}
      {token && (
        <script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token={token}
          async
        />
      )}
    </>
  );
}