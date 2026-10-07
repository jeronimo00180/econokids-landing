import type { Metadata } from "next";
import type { FaqItem } from "@/lib/faq-data";

// Graphies de la marque que les internautes tapent aussi : sans apostrophe,
// « Econo'kids » n'est pas trouvé (audit SEO du 7 octobre 2026). Le texte
// visible du site garde « Econo'kids » tant que la graphie n'est pas tranchée.
export const BRAND_ALTERNATE_NAMES = ["EconoKids", "Econokids"];

// Image de partage commune (générée par scripts/generate-og-image.js).
const OG_IMAGE = {
  url: "/images/og-image.png",
  width: 1200,
  height: 630,
  alt: "Econo'kids - Éducation financière ludique pour enfants",
};

type SocialMetadataInput = {
  title: string;
  description: string;
  // Chemin de la page, avec la barre finale (trailingSlash: true).
  path: string;
};

// Balises Open Graph et Twitter complètes pour une page.
// Dans Next.js, un `openGraph` ou un `twitter` défini par une page remplace
// celui du layout au lieu de le compléter : sans ce helper, les pages
// perdaient l'image de partage et reprenaient le titre Twitter de l'accueil.
export function socialMetadata({
  title,
  description,
  path,
}: SocialMetadataInput): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: "Econo'kids",
      url: path,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

// Données structurées FAQPage, construites à partir des questions affichées
// sur la page (elles doivent rester identiques au texte visible).
export function faqPageJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
