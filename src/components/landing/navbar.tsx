"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Home, Sparkles, CreditCard, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePostHog } from "posthog-js/react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "#fonctionnalites", label: "Fonctionnalités", icon: Sparkles },
  { href: "#tarifs", label: "Tarifs", icon: CreditCard },
  { href: "#faq", label: "FAQ", icon: HelpCircle },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const posthog = usePostHog();

  const trackClick = (ctaName: string) => {
    posthog?.capture("cta_clicked", {
      cta_name: ctaName,
      cta_location: "navbar",
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Econo'kids"
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" asChild>
            <a
              href="https://app.econokids.fr/login?tab=parent"
              onClick={() => trackClick("se_connecter")}
            >
              Se connecter
            </a>
          </Button>
          <Button asChild>
            <a
              href="https://app.econokids.fr/inscription"
              onClick={() => trackClick("commencer")}
            >
              Commencer
            </a>
          </Button>
        </div>

        {/* Mobile menu - Sheet */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Ouvrir le menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px]">
            <SheetHeader className="text-left pb-6">
              <SheetTitle>
                <Image
                  src="/images/logo.png"
                  alt="Econo'kids"
                  width={140}
                  height={35}
                  className="h-9 w-auto"
                />
              </SheetTitle>
            </SheetHeader>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-foreground hover:bg-primary/10 hover:text-primary transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* CTAs */}
            <div className="mt-8 space-y-3">
              <Button variant="outline" className="w-full" size="lg" asChild>
                <a
                  href="https://app.econokids.fr/login?tab=parent"
                  onClick={() => {
                    trackClick("se_connecter_mobile");
                    setMobileMenuOpen(false);
                  }}
                >
                  Se connecter
                </a>
              </Button>
              <Button className="w-full" size="lg" asChild>
                <a
                  href="https://app.econokids.fr/inscription"
                  onClick={() => {
                    trackClick("commencer_mobile");
                    setMobileMenuOpen(false);
                  }}
                >
                  Commencer gratuitement
                </a>
              </Button>
            </div>

            {/* Footer info */}
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs text-muted-foreground text-center">
                14 jours d&apos;essai gratuit • Sans engagement
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
