import type { Metadata } from "next";
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
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
