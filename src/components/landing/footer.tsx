"use client";

import Image from "next/image";
import Link from "next/link";
import { openCookieSettings } from "@/components/cookie-consent";

const footerLinks = {
  produit: [
    { label: "Fonctionnalités", href: "/#fonctionnalites" },
    { label: "Tarifs", href: "/#tarifs" },
    { label: "FAQ", href: "/#faq" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/confidentialite" },
    { label: "CGU", href: "/cgu" },
    { label: "Gestion des cookies", href: "#cookies", isCookieLink: true },
  ],
  contact: [
    { label: "support@econokids.fr", href: "mailto:support@econokids.fr" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="Econo'kids"
                width={140}
                height={35}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-sm text-[var(--muted-foreground)] mb-4">
              La première application française d&apos;éducation financière pour
              les enfants de 9-12 ans.
            </p>
            <p className="text-sm text-[var(--muted-foreground)]">
              Fabriqué avec ❤️ en France
            </p>
          </div>

          {/* Produit */}
          <div>
            <h3 className="font-semibold mb-4">Produit</h3>
            <ul className="space-y-2">
              {footerLinks.produit.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  {link.isCookieLink ? (
                    <button
                      onClick={openCookieSettings}
                      className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              {footerLinks.contact.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* B2B link */}
            <div className="mt-6 p-4 bg-slate-50 rounded-lg">
              <p className="text-sm font-medium mb-2">
                Vous êtes une école ou une mairie ?
              </p>
              <Link
                href="/mairies"
                className="text-sm text-[var(--primary)] hover:underline font-medium"
              >
                Découvrez notre offre établissements →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[var(--border)] mt-8 pt-8 text-center">
          <p className="text-sm text-[var(--muted-foreground)]">
            © {new Date().getFullYear()} Econo&apos;kids. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
