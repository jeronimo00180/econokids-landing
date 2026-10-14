import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import "@/components/site/site.css";
import { CookieConsent } from "@/components/cookie-consent";
import { PostHogProvider } from "@/components/posthog-provider";
import { socialMetadata } from "@/lib/seo";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "800"],
  variable: "--font-outfit",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const SIGNATURE = "Apprendre à se servir de l'argent, en jouant.";
const DESCRIPTION =
  "Le jeu de la ville où votre enfant de 9 à 13 ans apprend à se servir de l'argent : un salaire, des dépenses, de l'épargne et des projets, avec de l'argent fictif. Essai gratuit de 14 jours.";

export const metadata: Metadata = {
  title: `Econo'kids | ${SIGNATURE}`,
  description: DESCRIPTION,
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
    title: `Econo'kids | ${SIGNATURE}`,
    description: DESCRIPTION,
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
    <html lang="fr" className={`${outfit.variable} ${dmSans.variable}`}>
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
