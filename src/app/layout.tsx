import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/cookie-consent";
import { PostHogProvider } from "@/components/posthog-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Econo'kids | Éducation financière ludique pour enfants 9-12 ans",
  description:
    "Apprenez à vos enfants à gérer un budget en jouant. Simulation de vie sécurisée sans carte bancaire. Essai gratuit 14 jours.",
  keywords: [
    "éducation financière",
    "enfants",
    "budget",
    "épargne",
    "apprentissage",
    "jeu éducatif",
    "CM1",
    "CM2",
    "argent de poche",
    "simulation",
  ],
  authors: [{ name: "Econo'kids" }],
  creator: "Econo'kids",
  publisher: "Econo'kids",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://econokids.fr",
    siteName: "Econo'kids",
    title: "Econo'kids | Éducation financière ludique pour enfants 9-12 ans",
    description:
      "Apprenez à vos enfants à gérer un budget en jouant. Simulation de vie sécurisée sans carte bancaire.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Econo'kids - Éducation financière ludique pour enfants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Econo'kids | Éducation financière ludique pour enfants 9-12 ans",
    description:
      "Apprenez à vos enfants à gérer un budget en jouant. Simulation de vie sécurisée sans carte bancaire.",
    images: ["/images/og-image.png"],
  },
  metadataBase: new URL("https://econokids.fr"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen bg-[var(--background)] font-sans antialiased">
        <PostHogProvider>
          {children}
          <CookieConsent />
        </PostHogProvider>
      </body>
    </html>
  );
}
