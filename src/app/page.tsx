import { CarteVille } from "@/components/site/CarteVille";
import {
  Apprentissages,
  Confiance,
  EncartEcoles,
  Film,
  Heros,
  Parents,
  Questions,
  Reseaux,
  Rythme,
} from "@/components/site/SectionsAccueil";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Tarifs } from "@/components/site/Tarifs";
import { faqs } from "@/lib/faq-data";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Econo'kids",
  legalName: "Jérôme Rembert EI",
  identifier: "SIRET 102 279 643 00013",
  url: "https://www.econokids.fr",
  logo: "https://www.econokids.fr/images/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "61 rue de Lyon",
    postalCode: "75012",
    addressLocality: "Paris",
    addressCountry: "FR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@econokids.fr",
    contactType: "customer support",
  },
};

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Econo'kids",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  description:
    "Le jeu de la ville où les enfants de 9 à 13 ans apprennent à se servir de l'argent : un salaire, des dépenses, de l'épargne et des projets, avec de l'argent fictif.",
  url: "https://www.econokids.fr",
  audience: {
    "@type": "PeopleAudience",
    suggestedMinAge: 9,
    suggestedMaxAge: 13,
  },
  offers: [
    {
      "@type": "Offer",
      price: "4.99",
      priceCurrency: "EUR",
      category: "subscription",
      eligibleDuration: {
        "@type": "QuantitativeValue",
        value: 1,
        unitCode: "MON",
      },
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "4.99",
        priceCurrency: "EUR",
        billingDuration: "P1M",
      },
    },
    {
      "@type": "Offer",
      price: "49",
      priceCurrency: "EUR",
      category: "subscription",
      eligibleDuration: {
        "@type": "QuantitativeValue",
        value: 1,
        unitCode: "ANN",
      },
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "49",
        priceCurrency: "EUR",
        billingDuration: "P1Y",
      },
    },
  ],
};

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageJsonLd),
        }}
      />
      <div className="ek">
        <SiteHeader />
        <main id="haut">
          <Heros />
          <section id="ville" className="ek-section">
            <div className="ek-contenu">
              <div className="ek-titre-section">
                <p className="ek-surtitre">Une ville à explorer</p>
                <h2>Neuf bâtiments, neuf façons de comprendre l&apos;argent</h2>
                <p className="ek-lead">Touchez un bâtiment pour voir ce que votre enfant y fait.</p>
              </div>
              <CarteVille />
            </div>
          </section>
          <Apprentissages />
          <Film />
          <Rythme />
          <Parents />
          <Confiance />
          <Tarifs />
          <Questions />
          <Reseaux />
          <EncartEcoles />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
