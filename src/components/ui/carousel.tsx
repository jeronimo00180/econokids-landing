"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselSlide {
  src: string;
  alt: string;
  legend: string;
  subtext?: string;
}

interface CarouselProps {
  slides: CarouselSlide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
}

export function Carousel({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
  showArrows = true,
  showDots = true,
  className = "",
}: CarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const autoplayPlugin = Autoplay({
    delay: autoPlayInterval,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    autoPlay ? [autoplayPlugin] : []
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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

  const currentSlide = slides[selectedIndex];

  return (
    <div className={`relative ${className}`}>
      {/* Device mockup container */}
      <div className="relative">
        {/* Tablet frame */}
        <div className="bg-gray-800 dark:bg-gray-900 rounded-4xl p-3 shadow-2xl">
          {/* Top bar with camera/buttons */}
          <div className="flex items-center justify-center gap-2 pb-2">
            <div className="w-2 h-2 rounded-full bg-gray-600" />
            <div className="w-16 h-1.5 rounded-full bg-gray-600" />
            <div className="w-2 h-2 rounded-full bg-gray-600" />
          </div>

          {/* Screen area */}
          <div
            ref={emblaRef}
            className="overflow-hidden rounded-xl bg-white dark:bg-slate-800"
          >
            <div className="flex touch-pan-y">
              {slides.map((slide, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <div className="relative aspect-13/10">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-contain"
                      priority={index === 0}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar (home button area) */}
          <div className="flex justify-center pt-2">
            <div className="w-24 h-1 rounded-full bg-gray-600" />
          </div>
        </div>

        {/* Arrow navigation - outside the device */}
        {showArrows && slides.length > 1 && (
          <>
            <button
              onClick={scrollPrev}
              className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-slate-700 shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors z-10 border border-gray-200 dark:border-slate-600"
              aria-label="Image précédente"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700 dark:text-gray-200" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-slate-700 shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors z-10 border border-gray-200 dark:border-slate-600"
              aria-label="Image suivante"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700 dark:text-gray-200" />
            </button>
          </>
        )}
      </div>

      {/* Legend below device */}
      <div className="mt-6 text-center">
        <p className="text-lg font-semibold text-foreground">
          {currentSlide?.legend}
        </p>
        {currentSlide?.subtext && (
          <p className="text-muted-foreground mt-1">
            {currentSlide.subtext}
          </p>
        )}
      </div>

      {/* Dots navigation */}
      {showDots && slides.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === selectedIndex
                  ? "bg-primary w-6"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 w-2.5"
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
