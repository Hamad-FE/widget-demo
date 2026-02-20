"use client";

import Script from "next/script";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-10">
          Simple Widget Demo
        </h1>

        {/* Responsive outer container - widget size remains unchanged */}
        <div id="pad-widget"></div>

        {/* External widget script */}
        <Script
          src="https://pad-widget.chaingpt.dev/cgpt-widgets.umd.js"
          strategy="afterInteractive"
          onLoad={() => {
            if ((window as any).Saleium) {
              (window as any).Saleium.mount({
                container: "#pad-widget",
                saleId: "BPfyEa",
                theme: "dark",
                accentColor: "#2804dc",
                fontFamily: "",
                projectInfoExpanded: true,
                watermarkEnabled: true,
                showTierBoost: true,
                textColor: "#faf4f4",
              });
            }
          }}
        />
      </div>
    </main>
  );
}
