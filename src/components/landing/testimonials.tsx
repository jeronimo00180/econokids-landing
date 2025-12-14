"use client";

import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Ma fille de 10 ans m'a expliqué ce que sont les intérêts composés. Je n'en revenais pas. Econo'kids lui a appris en jouant ce que j'aurais mis des années à lui transmettre.",
    author: "Sophie M.",
    role: "Maman de Léa (10 ans)",
    result: "7 badges obtenus en 3 mois",
    rating: 5,
  },
  {
    quote:
      "Mon fils voulait toujours tout acheter immédiatement. Depuis Econo'kids, il épargne pour son vélo. Il compte, il planifie, il est fier.",
    author: "Thomas D.",
    role: "Papa de Lucas (9 ans)",
    result: "Premier projet d'épargne réalisé",
    rating: 5,
  },
  {
    quote:
      "Enfin une app éducative qui ne ressemble pas à des devoirs ! Mon fils réclame ses 30 minutes d'Econo'kids. C'est son moment préféré de la semaine.",
    author: "Nathalie B.",
    role: "Maman de Maxime (11 ans)",
    result: "45 calculs réussis sans aide",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-4">
            Ce qu&apos;en disent les familles
          </h2>
          <p className="text-lg text-muted-foreground">
            Des parents comme vous ont déjà fait le choix de préparer leurs enfants.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-white h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-primary">
                <CardContent className="p-6">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <Quote className="h-8 w-8 text-primary/30 mb-3" />
                  <p className="text-foreground mb-4 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-primary mt-2 font-medium">
                      ✓ {testimonial.result}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>🔒</span>
            <span>Conforme RGPD</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🇫🇷</span>
            <span>Hébergement 100% France</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🎓</span>
            <span>Conforme aux programmes scolaires</span>
          </div>
        </div>
      </div>
    </section>
  );
}
