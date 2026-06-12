import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Problem } from "@/components/landing/problem";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Features } from "@/components/landing/features";
import { LearningOutcomes } from "@/components/landing/learning-outcomes";
// Invisible tant que src/lib/testimonials-data.ts est vide — ajouter les vrais témoignages là-bas
import { TestimonialsCarousel } from "@/components/landing/testimonials-carousel";
import { Pricing } from "@/components/landing/pricing";
import { FAQ } from "@/components/landing/faq";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";
import { faqs } from "@/lib/faq-data";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Econo'kids",
  url: "https://econokids.fr",
  logo: "https://econokids.fr/images/logo.png",
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
    "Application éducative d'éducation financière pour enfants de 8 à 13 ans : une simulation de vie ludique pour apprendre à gérer un budget, épargner et faire des choix réfléchis.",
  url: "https://econokids.fr",
  audience: {
    "@type": "PeopleAudience",
    suggestedMinAge: 8,
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
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <LearningOutcomes />
        <TestimonialsCarousel />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
