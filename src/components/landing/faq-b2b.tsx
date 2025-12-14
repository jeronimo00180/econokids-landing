"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Comment les enseignants sont-ils accompagnés ?",
    answer:
      "Nous fournissons des fiches explicatives claires pour démarrer rapidement. L'application est intuitive et ne nécessite pas de formation particulière. Notre équipe support est disponible par email pour répondre à toutes vos questions.",
  },
  {
    question: "Quels équipements sont nécessaires ?",
    answer:
      "Econo'kids fonctionne sur vos PC et tablettes existants, via un simple navigateur web. Une connexion internet est requise. Pas d'installation, pas de téléchargement. Si vous avez 4-5 équipements par classe, vous pouvez faire des rotations.",
  },
  {
    question: "Comment est gérée la conformité RGPD ?",
    answer:
      "Très strictement. Données chiffrées. Hébergement 100% France. Suppression automatique fin d'année scolaire. Export et suppression sur demande en 48h. Nous sommes conformes aux exigences les plus strictes pour les données de mineurs.",
  },
  {
    question: "Peut-on tester avant de s'engager ?",
    answer:
      "Oui. Nous proposons une démo gratuite de 30 minutes où nous vous montrons l'application en conditions réelles. Contactez-nous pour planifier une présentation.",
  },
  {
    question: "Comment obtenir un devis ?",
    answer:
      "Contactez-nous via le formulaire ou par email à support@econokids.fr. Nous vous proposerons une offre adaptée au nombre d'élèves de votre commune.",
  },
];

export function FAQB2B() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-4">
            Questions fréquentes
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Une autre question ?{" "}
            <a
              href="mailto:support@econokids.fr"
              className="text-primary hover:underline font-medium"
            >
              Contactez-nous
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
