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
      "Un tutoriel intégré guide l'enseignant et les élèves au premier lancement. Le niveau d'accompagnement souhaité peut être précisé dans le devis, et le support reste disponible par email.",
  },
  {
    question: "Quels équipements sont nécessaires ?",
    answer:
      "Econo'kids fonctionne sur vos PC et tablettes existants, via un simple navigateur web. Une connexion internet est requise. Pas d'installation, pas de téléchargement. Chaque élève dispose de son propre compte et progresse à son rythme. Alternative possible : utilisation en groupe ou classe entière sur écran partagé.",
  },
  {
    question: "Comment est gérée la conformité RGPD ?",
    answer:
      "Les données d'identité sont chiffrées, l'application est hébergée chez OVH en France et la base de données chez Neon à Francfort. Des fonctions d'export, d'anonymisation annuelle et de suppression sont prévues. Les modalités exactes sont détaillées dans la politique de confidentialité.",
  },
  {
    question: "Peut-on tester avant de s'engager ?",
    answer:
      "Oui. Vous pouvez demander une démonstration gratuite afin de voir l'application et poser vos questions avant toute décision.",
  },
  {
    question: "Comment obtenir un devis ?",
    answer:
      "Contactez-nous par email à support@econokids.fr. Nous reviendrons vers vous pour préciser le nombre de classes, le périmètre d'accompagnement et préparer un devis.",
  },
];

export function FAQB2B() {
  return (
    <section id="faq" className="py-12 md:py-16 bg-slate-50">
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
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Une autre question ?{" "}
            <a
              href="mailto:support@econokids.fr"
              className="text-primary hover:underline font-medium"
            >
              support@econokids.fr
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
