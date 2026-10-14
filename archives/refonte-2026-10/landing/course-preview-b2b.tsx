"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, Calculator, Lightbulb, Target } from "lucide-react";

const courseThemes = [
  {
    title: "Comprendre l'argent",
    icon: Lightbulb,
    description: "D'où vient l'argent ? Pourquoi travaille-t-on ?",
    topics: ["Le travail et le salaire", "Les différents métiers", "Le contrat de travail"],
  },
  {
    title: "Gérer son budget",
    icon: Calculator,
    description: "Revenus, dépenses, et l'équilibre à trouver",
    topics: ["Le budget mensuel", "Les dépenses obligatoires", "Les dépenses plaisir"],
  },
  {
    title: "Épargner intelligemment",
    icon: Target,
    description: "Se fixer des objectifs et économiser",
    topics: ["Pourquoi épargner ?", "Les projets d'épargne", "La patience paie"],
  },
  {
    title: "Consommer malin",
    icon: BookOpen,
    description: "Faire des choix réfléchis au quotidien",
    topics: ["Comparer les prix", "Besoins vs envies", "Les pièges du marketing"],
  },
];

const exerciseExample = {
  title: "Calcul de facture",
  context: "Léo doit payer sa facture d'électricité. Le montant est de 45€.",
  question: "Il a 120€ sur son compte. Combien lui restera-t-il après avoir payé ?",
  hint: "Indice : 120 - 45 = ?",
  answer: "75€",
  feedback: "Bravo ! Léo peut maintenant épargner pour son projet vélo.",
};

export function CoursePreviewB2B() {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-4">
            Un programme pédagogique{" "}
            <span className="text-primary">complet et structuré</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Des mini-cours thématiques et des exercices pratiques intégrés à la simulation.
            L&apos;élève apprend en faisant, pas en lisant.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Sommaire des thèmes */}
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Thèmes abordés
            </h3>
            <Accordion type="single" collapsible className="bg-white rounded-xl border border-border">
              {courseThemes.map((theme, index) => (
                <AccordionItem key={index} value={`theme-${index}`}>
                  <AccordionTrigger className="px-4 hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center shrink-0">
                        <theme.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{theme.title}</p>
                        <p className="text-sm text-muted-foreground font-normal">
                          {theme.description}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-2 ml-11">
                      {theme.topics.map((topic, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Exemple d'exercice */}
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Calculator className="h-5 w-5 text-primary" />
              Exemple d&apos;exercice
            </h3>
            <Card className="bg-white">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{exerciseExample.title}</CardTitle>
                  <Badge variant="secondary">Niveau CM2</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    {exerciseExample.context}
                  </p>
                  <p className="font-medium">{exerciseExample.question}</p>
                </div>

                <div className="border-l-4 border-primary-200 pl-4">
                  <p className="text-sm text-muted-foreground italic">
                    💡 {exerciseExample.hint}
                  </p>
                </div>

                <button
                  onClick={() => setShowAnswer(!showAnswer)}
                  className="w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  {showAnswer ? "Masquer la réponse" : "Voir la réponse"}
                </button>

                {showAnswer && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="font-semibold text-green-700 mb-1">
                      Réponse : {exerciseExample.answer}
                    </p>
                    <p className="text-sm text-green-600">{exerciseExample.feedback}</p>
                  </div>
                )}

                <p className="text-xs text-muted-foreground text-center">
                  Les exercices sont générés automatiquement avec des montants adaptés au niveau de l&apos;élève.
                </p>
              </CardContent>
            </Card>

            {/* Note pour enseignants */}
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-700">
                <strong>Pour les enseignants :</strong> Chaque exercice est tracé dans le dashboard.
                Vous voyez qui a réussi, qui a eu besoin d&apos;aide, et pouvez adapter vos explications en classe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
