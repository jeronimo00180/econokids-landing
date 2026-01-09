"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePostHog } from "posthog-js/react";

const faqs = [
  {
    question: "À quel âge peut-on commencer ?",
    answer:
      "Econo'kids est conçu pour les enfants de 9 à 12 ans (CM1/CM2/6ème). C'est l'âge idéal : ils maîtrisent la lecture, les opérations de base, et commencent à comprendre la valeur des choses. Un enfant de 8 ans très à l'aise en maths peut aussi commencer.",
  },
  {
    question: "Mon enfant a 8 ans ou 13 ans, est-ce adapté ?",
    answer:
      "Le cœur du programme est conçu pour le niveau CM1-6ème (9-12 ans). Cependant, un enfant de 8 ans bon lecteur s'y amusera tout autant avec un peu d'aide au démarrage. Pour les 13 ans, c'est une excellente révision des bases avant notre future version dédiée aux adolescents (13-16 ans), actuellement en préparation !",
  },
  {
    question: "Combien de temps par session ?",
    answer:
      "Econo'kids suit le rythme de la vraie vie : une semaine dans le jeu = une semaine réelle. Votre enfant se connecte quelques minutes par semaine pour gérer son budget, payer ses factures et faire ses choix. C'est idéal pour apprendre sans excès de temps d'écran ! Et s'il ne joue pas pendant quelques semaines ? Pas de souci, il pourra rattraper les semaines manquées à son retour.",
  },
  {
    question: "Mon enfant va-t-il se décourager s'il fait des erreurs ?",
    answer:
      "Non ! Notre système d'aide est conçu pour ça. Après 3 erreurs, on lui montre une partie du résultat. Après 5 erreurs, on lui donne la solution complète avec des encouragements. L'objectif n'est jamais de punir, mais d'apprendre. Chaque message est positif.",
  },
  {
    question: "Puis-je suivre les progrès de mon enfant ?",
    answer:
      "Absolument. Votre espace parent vous montre : les badges obtenus, les projets d'épargne réalisés, les calculs réussis (avec ou sans aide), les cours terminés. C'est un excellent point de départ pour discuter avec votre enfant.",
  },
  {
    question: "Les données de mon enfant sont-elles sécurisées ?",
    answer:
      "Oui, c'est notre priorité absolue. Prénom et nom sont chiffrés. Hébergement 100% en France. Pas de publicité, pas de tracking. Conforme RGPD strict. Vous pouvez exporter ou supprimer toutes les données à tout moment.",
  },
  {
    question: "Puis-je ajouter plusieurs enfants ?",
    answer:
      "Oui, jusqu'à 3 enfants par compte. Chacun a sa propre progression, son propre métier, ses propres projets. Le prix reste le même.",
  },
  {
    question: "Puis-je annuler à tout moment ?",
    answer:
      "Oui, sans engagement. Vous pouvez annuler depuis votre espace parent en 2 clics. Vous gardez l'accès jusqu'à la fin de votre période payée.",
  },
  {
    question: "Je suis enseignant, comment utiliser Econo'kids en classe ?",
    answer:
      "Econo'kids propose également une offre dédiée aux collectivités et établissements scolaires. Contactez-nous à support@econokids.fr pour découvrir notre programme éducatif avec accompagnement enseignant, tableau de bord de suivi de classe et ressources pédagogiques.",
  },
];

export function FAQ() {
  const posthog = usePostHog();

  const trackFAQOpen = (question: string) => {
    posthog?.capture("faq_opened", {
      question: question,
    });
  };

  return (
    <section id="faq" className="py-12 md:py-16 bg-slate-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tout ce que vous devez savoir avant de commencer.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <div onClick={() => trackFAQOpen(faq.question)}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                </div>
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
