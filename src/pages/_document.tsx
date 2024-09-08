import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { ANALYTICS } from "@/utils/config";
import React from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* eslint-disable-next-line @next/next/inline-script-id */}
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `
          }}
        />
      </body>
    </Html>
  );
}
