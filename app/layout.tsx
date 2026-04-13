import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "DupeMe AI — AI Assistant for Creators | Automate Your DMs & Client Management",
  description:
    "Your AI dupe — always on, even when you're not. DupeMe AI manages your DMs, screens clients, and keeps fans coming back. Built for creators, by creators.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "DupeMe AI",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Your AI dupe — always on, even when you're not. DupeMe AI manages your DMs, screens clients, and keeps fans coming back. Built for creators, by creators.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
