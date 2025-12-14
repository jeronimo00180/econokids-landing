"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextValue {
  openItems: string[];
  toggleItem: (value: string) => void;
  type: "single" | "multiple";
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

interface AccordionProps {
  type?: "single" | "multiple";
  collapsible?: boolean;
  defaultValue?: string | string[];
  children: React.ReactNode;
  className?: string;
}

function Accordion({
  type = "single",
  collapsible = false,
  defaultValue,
  children,
  className,
}: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<string[]>(() => {
    if (defaultValue) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    }
    return [];
  });

  const toggleItem = React.useCallback(
    (value: string) => {
      setOpenItems((prev) => {
        if (type === "single") {
          if (prev.includes(value)) {
            return collapsible ? [] : prev;
          }
          return [value];
        }
        // multiple
        if (prev.includes(value)) {
          return prev.filter((item) => item !== value);
        }
        return [...prev, value];
      });
    },
    [type, collapsible]
  );

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={cn("space-y-1", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

const AccordionItemContext = React.createContext<string | null>(null);

function AccordionItem({ value, children, className }: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={value}>
      <div className={cn("border-b border-border", className)}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

function AccordionTrigger({ children, className }: AccordionTriggerProps) {
  const context = React.useContext(AccordionContext);
  const itemValue = React.useContext(AccordionItemContext);

  if (!context || !itemValue) {
    throw new Error("AccordionTrigger must be used within Accordion and AccordionItem");
  }

  const isOpen = context.openItems.includes(itemValue);

  return (
    <button
      type="button"
      onClick={() => context.toggleItem(itemValue)}
      className={cn(
        "flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:underline",
        className
      )}
      aria-expanded={isOpen}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      />
    </button>
  );
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

function AccordionContent({ children, className }: AccordionContentProps) {
  const context = React.useContext(AccordionContext);
  const itemValue = React.useContext(AccordionItemContext);

  if (!context || !itemValue) {
    throw new Error("AccordionContent must be used within Accordion and AccordionItem");
  }

  const isOpen = context.openItems.includes(itemValue);

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "overflow-hidden text-sm pb-4 text-muted-foreground",
        className
      )}
    >
      {children}
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
