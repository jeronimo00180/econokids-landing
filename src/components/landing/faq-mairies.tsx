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
      "Nous nous adaptons à vos procédures. Pour les petites communes, un simple bon de commande suffit généralement (montants inférieurs aux seuils de marchés publics). Pour les plus grandes collectivités, nous pouvons répondre à vos consultations. Nous fournissons tous les documents nécessaires : devis détaillé, CGV, attestations.",
  },
  {
    question: "Peut-on intégrer Econo'kids dans le budget 'numérique éducatif' ?",
    answer:
      "Oui, Econo'kids entre parfaitement dans les lignes budgétaires dédiées au numérique éducatif ou aux fournitures pédagogiques. À moins de 10€/élève/an, c'est l'équivalent d'un cahier d'exercices. Nous pouvons vous fournir un argumentaire pour votre commission.",
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
      "Par défaut, oui - conformément au RGPD et aux recommandations pour les données de mineurs. Les données sont automatiquement supprimées en juillet. Vous pouvez exporter des statistiques anonymisées avant suppression si vous souhaitez mesurer l'impact du programme.",
  },
  {
    question: "Peut-on tester avec une seule école avant de déployer sur toute la commune ?",
    answer:
      "Absolument. C'est même recommandé. Nous proposons des tarifs adaptés pour un pilote sur 1-2 classes. Cela permet de valider l'adhésion des enseignants et des élèves avant un déploiement plus large.",
  },
  {
    question: "Y a-t-il un engagement de durée ?",
    answer:
      "Non, les contrats sont annuels sans reconduction tacite. Vous décidez chaque année de renouveler ou non. Nous proposons cependant une remise de 10% pour les engagements sur 3 ans.",
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
