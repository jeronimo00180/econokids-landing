"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqsB2B } from "@/lib/faq-mairies-data";

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
            {faqsB2B.map((faq, index) => (
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
