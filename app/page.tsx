"use client";
import Script from "next/script";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold">
        Simple Widget Demo
      </h1>

      <div id="pad-widget"></div>

      {/* External widget script */}
      <Script
        src="https://pad-widget.chaingpt.dev/cgpt-widgets.umd.js"
        strategy="afterInteractive"
        onLoad={() => {
          if ((window as any).Saleium) {
            (window as any).Saleium.mount({
              container: "#pad-widget",
              saleId: "U0BiNT",
              theme: "light",
              accentColor: "#7C3AED",
              fontFamily: "sans-serif",
              projectInfoExpanded: false,
              watermarkEnabled: true,
              showTierBoost: true,
              textColor: "#000000",
            });
          }
        }}
      />
    </main>
  );
}
