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

export const metadata: Metadata = {
  title: "Econo'kids pour Écoles & Mairies | Programme EDUCFI",
  description:
    "Programme pédagogique EDUCFI clé en main. Vos élèves CM1/CM2/6ème apprennent à gérer un budget en jouant. Démo gratuite.",
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
  openGraph: {
    title: "Econo'kids pour Écoles & Mairies | Programme EDUCFI",
    description:
      "Programme pédagogique aligné EDUCFI. Formez vos citoyens de demain à gérer leur argent.",
    url: "https://econokids.fr/mairies",
  },
};

export default function MairiesPage() {
  return (
    <>
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
