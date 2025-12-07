import type { Metadata } from "next";
import { NavbarB2B } from "@/components/landing/navbar-b2b";
import { HeroB2B } from "@/components/landing/hero-b2b";
import { StatsB2B } from "@/components/landing/stats-b2b";
import { BenefitsB2B } from "@/components/landing/benefits-b2b";
import { FAQB2B } from "@/components/landing/faq-b2b";
import { CTAB2B } from "@/components/landing/cta-b2b";
import { Footer } from "@/components/landing/footer";

export const metadata: Metadata = {
  title: "Econo'kids pour les écoles et mairies | Éducation financière",
  description:
    "Formez vos citoyens de demain ! Econo'kids permet aux élèves du 3ème cycle (CM1/CM2/6ème) d'apprendre à gérer un budget en s'amusant.",
  keywords: [
    "éducation financière école",
    "mairie éducation",
    "application pédagogique",
    "CM1 CM2 6ème",
    "3ème cycle",
    "budget école",
  ],
  openGraph: {
    title: "Econo'kids pour les écoles et mairies",
    description:
      "Formez vos citoyens de demain à gérer leur argent.",
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
        <BenefitsB2B />
        <FAQB2B />
        <CTAB2B />
      </main>
      <Footer />
    </>
  );
}
