import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/cookie-consent";
import { PostHogProvider } from "@/components/posthog-provider";
import { socialMetadata } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Éducation financière pour enfants | Econo'kids",
  description:
    "Apprenez à vos enfants à gérer un budget en jouant. Simulation de vie sécurisée sans carte bancaire. Essai gratuit 14 jours.",
  keywords: [
    "éducation financière",
    "enfants",
    "budget",
    "épargne",
    "apprentissage",
    "jeu éducatif",
    "9 à 13 ans",
    "argent de poche",
    "simulation",
  ],
  authors: [{ name: "Econo'kids" }],
  creator: "Econo'kids",
  publisher: "Econo'kids",
  robots: "index, follow",
  alternates: {
    canonical: "/",
  },
  ...socialMetadata({
    title: "Econo'kids | Éducation financière ludique pour enfants de 9 à 13 ans",
    description:
      "Apprenez à vos enfants à gérer un budget en jouant. Simulation de vie sécurisée sans carte bancaire.",
    path: "/",
  }),
  metadataBase: new URL("https://www.econokids.fr"),
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
      <body className="min-h-screen bg-background font-sans antialiased">
        <PostHogProvider>
          {children}
          <CookieConsent />
        </PostHogProvider>
      </body>
    </html>
  );
}
