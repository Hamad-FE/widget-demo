"use client";

import Script from "next/script";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 mt-4">
      <h1 className="text-2xl font-bold">Simple Widget Demo</h1>

      {/* Widget container */}
      <div id="pad-widget"></div>

      {/* External widget script */}
      <Script
        src="https://pad-widget.chaingpt.dev/cgpt-widgets.umd.js"
        strategy="afterInteractive"
        onLoad={() => {
          if ((window as any).Saleium) {
            (window as any).Saleium.mount({
              container: "#pad-widget",
              saleId: "55XAgh",
              theme: "dark",
              accentColor: "#e7eb0f",
              fontFamily: "sans-serif",
              projectInfoExpanded: true,
              watermarkEnabled: false,
              showTierBoost: false,
              textColor: "#121212",
            });
          }
        }}
      />
    </main>
  );
}
