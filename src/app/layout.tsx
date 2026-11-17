import type { Metadata } from "next";
import { assetUrl } from "@/lib/paths";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kinshima | arts martiaux narratifs | La Ligue Kinshima",
  description: "L'héroïsme par les arts martiaux. Découvrez Kinshima, la Ligue, Indraz et la Compagnie Kinyobi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontMilonga = assetUrl("/sites/kinshima/kinshima-milonga.woff2");
  const fontLight = assetUrl("/sites/kinshima/kinshima-light.woff2");
  const bgSite = assetUrl("/sites/kinshima/site-background.jpg");
  const bgIndrazMap = assetUrl("/sites/kinshima/indraz-map.jpg");

  return (
    <html lang="fr" className="h-full antialiased">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
@font-face {
  font-family: "Kinshima Display";
  src: url("${fontMilonga}") format("woff2");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: "Kinshima Light";
  src: url("${fontLight}") format("woff2");
  font-style: normal;
  font-weight: 300 400;
  font-display: swap;
}
:root {
  --kinshima-bg-site: url("${bgSite}");
  --kinshima-bg-indraz-map: url("${bgIndrazMap}");
}
`,
          }}
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
