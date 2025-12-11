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
    question: "Combien de temps par session ?",
    answer:
      "Une session typique dure 30 minutes. C'est le temps de recevoir son salaire (ou payer ses factures), faire quelques calculs, et peut-être suivre un cours. Votre enfant avance à son rythme, il peut jouer 15 minutes ou 1 heure selon son envie.",
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
    <section id="faq" className="py-16 md:py-24 bg-slate-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-[var(--muted-foreground)]">
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
        <div className="mt-12 text-center">
          <p className="text-[var(--muted-foreground)]">
            Une autre question ?{" "}
            <a
              href="mailto:support@econokids.fr"
              className="text-[var(--primary)] hover:underline font-medium"
            >
              Contactez-nous
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
