import type { Metadata } from "next";
import { NavbarB2B } from "@/components/landing/navbar-b2b";
import { HeroB2B } from "@/components/landing/hero-b2b";
import { StatsB2B } from "@/components/landing/stats-b2b";
import { AppPreviewB2B } from "@/components/landing/app-preview-b2b";
import { BenefitsB2B } from "@/components/landing/benefits-b2b";
import { CoursePreviewB2B } from "@/components/landing/course-preview-b2b";
import { FAQB2B } from "@/components/landing/faq-b2b";
import { FAQMairies } from "@/components/landing/faq-mairies";
import { CTAB2B } from "@/components/landing/cta-b2b";
import { Footer } from "@/components/landing/footer";
import { faqPageJsonLd, socialMetadata } from "@/lib/seo";
import { faqsB2B, faqsMairies } from "@/lib/faq-mairies-data";

export const metadata: Metadata = {
  title: "Éducation financière à l'école | Econo'kids",
  description:
    "Application pédagogique inspirée des principes EDUCFI pour découvrir le budget en CM1, CM2 et 6ème. Démo gratuite.",
  alternates: { canonical: "/mairies/" },
  keywords: [
    "éducation financière école",
    "EDUCFI",
    "mairie éducation",
    "application pédagogique",
    "CM1 CM2 6ème",
    "3ème cycle",
    "budget école",
    "programme scolaire",
  ],
  ...socialMetadata({
    title: "Éducation financière à l'école | Econo'kids",
    description:
      "Une application pédagogique indépendante, inspirée des principes EDUCFI.",
    path: "/mairies/",
  }),
};

// Les deux FAQ affichées sur la page, dans l'ordre d'affichage.
const mairiesFaqJsonLd = faqPageJsonLd([...faqsB2B, ...faqsMairies]);

export default function MairiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mairiesFaqJsonLd),
        }}
      />
      <NavbarB2B />
      <main>
        <HeroB2B />
        <StatsB2B />
        <AppPreviewB2B />
        <BenefitsB2B />
        <CoursePreviewB2B />
        <FAQB2B />
        <FAQMairies />
        <CTAB2B />
      </main>
      <Footer />
    </>
  );
}
