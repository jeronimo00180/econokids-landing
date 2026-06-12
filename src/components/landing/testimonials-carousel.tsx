"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/testimonials-data";

/**
 * Carrousel de témoignages parents : une carte à la fois, rotation
 * automatique. Ne s'affiche que lorsque src/lib/testimonials-data.ts
 * contient au moins un témoignage réel.
 */
export function TestimonialsCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (testimonials.length === 0) return null;

  return (
    <section className="py-10 md:py-14">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-3">
            Ce qu&apos;en disent <span className="text-primary">les familles</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Des parents comme vous ont déjà fait le choix de préparer leurs
            enfants.
          </p>
        </div>

        {/* Carrousel */}
        <div className="max-w-2xl mx-auto">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex touch-pan-y">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.author}
                  className="flex-[0_0_100%] min-w-0 px-1 py-2"
                >
                  <figure className="h-full rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm text-center">
                    <div
                      className="flex justify-center gap-1 mb-4"
                      aria-label={`Note : ${testimonial.rating} sur 5`}
                    >
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    <Quote className="h-7 w-7 text-primary/30 mx-auto mb-3" />
                    <blockquote className="text-foreground leading-relaxed mb-5">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    <figcaption className="border-t border-border pt-4">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      {testimonial.result && (
                        <p className="text-xs text-primary mt-1.5 font-medium">
                          ✓ {testimonial.result}
                        </p>
                      )}
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          {testimonials.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.author}
                  onClick={() => scrollTo(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === selectedIndex
                      ? "bg-primary w-6"
                      : "bg-gray-300 hover:bg-gray-400 w-2.5"
                  }`}
                  aria-label={`Voir le témoignage ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
