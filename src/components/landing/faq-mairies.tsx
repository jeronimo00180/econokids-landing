"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Building2 } from "lucide-react";

const faqsMairies = [
  {
    question: "Comment se passe le processus d'achat pour une mairie ?",
    answer:
      "Nous nous adaptons aux procédures indiquées par la collectivité. Le devis et les documents contractuels précisent le périmètre proposé avant toute décision.",
  },
  {
    question: "Peut-on intégrer Econo'kids dans le budget 'numérique éducatif' ?",
    answer:
      "Selon les règles de votre collectivité, Econo'kids peut être étudié dans les dépenses de numérique éducatif ou de ressources pédagogiques. Un devis par classe permet de connaître le coût exact avant décision.",
  },
  {
    question: "Qui gère les comptes des élèves ?",
    answer:
      "Vous avez le choix : soit la mairie centralise la gestion via un responsable éducation, soit chaque directeur d'école gère ses classes. Dans les deux cas, vous disposez d'un tableau de bord avec une vue globale sur toutes les écoles de la commune.",
  },
  {
    question: "Que se passe-t-il en cas de changement d'enseignant ou d'élève en cours d'année ?",
    answer:
      "L'interface d'administration permet d'ajouter ou retirer des élèves à tout moment. Les données sont liées à l'élève, pas à l'enseignant. Si un élève change de classe, sa progression est conservée.",
  },
  {
    question: "Les données sont-elles supprimées en fin d'année scolaire ?",
    answer:
      "Le nettoyage annuel traite les anciens comptes élèves et enseignants après le 1er août, sous réserve que la tâche programmée soit active. Les établissements peuvent exporter leurs statistiques avant l'anonymisation.",
  },
  {
    question: "Peut-on tester avec une seule école avant de déployer sur toute la commune ?",
    answer:
      "Oui. Un pilote sur une ou deux classes peut être défini dans le devis afin d'évaluer l'usage avant un éventuel déploiement plus large.",
  },
  {
    question: "Y a-t-il un engagement de durée ?",
    answer:
      "La durée, les conditions de renouvellement et de résiliation sont précisées dans le devis et le contrat soumis à la collectivité.",
  },
];

export function FAQMairies() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary px-4 py-2 rounded-lg mb-4">
            <Building2 className="h-5 w-5" />
            <span className="font-medium">Questions spécifiques aux collectivités</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-4">
            FAQ Mairies & Collectivités
          </h2>
          <p className="text-lg text-muted-foreground">
            Des réponses aux questions administratives et budgétaires.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqsMairies.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact direct */}
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
