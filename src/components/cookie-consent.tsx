"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type CookieConsent = "pending" | "accepted" | "rejected" | "custom";

interface CookiePreferences {
  essential: boolean; // Toujours true, ne peut pas être désactivé
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = "econokids_cookie_consent";
const COOKIE_PREFERENCES_KEY = "econokids_cookie_preferences";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setShowBanner(true);
    } else {
      // Charger les préférences existantes
      const savedPrefs = localStorage.getItem(COOKIE_PREFERENCES_KEY);
      if (savedPrefs) {
        setPreferences(JSON.parse(savedPrefs));
      }
    }
  }, []);

  const saveConsent = (consent: CookieConsent, prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, consent);
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);

    // Déclencher un événement pour que les scripts puissent réagir
    window.dispatchEvent(
      new CustomEvent("cookieConsentChanged", { detail: prefs })
    );
  };

  const acceptAll = () => {
    saveConsent("accepted", {
      essential: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectAll = () => {
    saveConsent("rejected", {
      essential: true,
      analytics: false,
      marketing: false,
    });
  };

  const saveCustom = () => {
    saveConsent("custom", preferences);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg">
      <div className="container max-w-4xl mx-auto">
        {!showDetails ? (
          // Bannière simplifiée
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-1">
              <p className="text-sm text-gray-700">
                Nous utilisons des cookies pour améliorer votre expérience sur notre site.
                Les cookies essentiels sont nécessaires au fonctionnement du site.{" "}
                <Link
                  href="/confidentialite"
                  className="text-[var(--primary)] hover:underline"
                >
                  En savoir plus
                </Link>
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowDetails(true)}
              >
                Personnaliser
              </Button>
              <Button variant="outline" size="sm" onClick={rejectAll}>
                Refuser
              </Button>
              <Button size="sm" onClick={acceptAll}>
                Accepter tout
              </Button>
            </div>
          </div>
        ) : (
          // Panneau de personnalisation
          <div className="relative">
            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-0 right-0 p-1 text-gray-500 hover:text-gray-700"
              aria-label="Fermer"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 className="font-semibold mb-4">Gestion des cookies</h3>

            <div className="space-y-4 mb-6">
              {/* Cookies essentiels */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="essential"
                  checked={true}
                  disabled
                  className="mt-1 h-4 w-4"
                />
                <div>
                  <label htmlFor="essential" className="font-medium text-sm">
                    Cookies essentiels
                  </label>
                  <p className="text-xs text-gray-500">
                    Nécessaires au fonctionnement du site (session, authentification).
                    Ne peuvent pas être désactivés.
                  </p>
                </div>
              </div>

              {/* Cookies analytics */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="analytics"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences({ ...preferences, analytics: e.target.checked })
                  }
                  className="mt-1 h-4 w-4 accent-[var(--primary)]"
                />
                <div>
                  <label htmlFor="analytics" className="font-medium text-sm">
                    Cookies d&apos;analyse
                  </label>
                  <p className="text-xs text-gray-500">
                    Nous aident à comprendre comment vous utilisez le site (PostHog -
                    hébergé en Europe, données anonymisées).
                  </p>
                </div>
              </div>

              {/* Cookies marketing */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="marketing"
                  checked={preferences.marketing}
                  onChange={(e) =>
                    setPreferences({ ...preferences, marketing: e.target.checked })
                  }
                  className="mt-1 h-4 w-4 accent-[var(--primary)]"
                />
                <div>
                  <label htmlFor="marketing" className="font-medium text-sm">
                    Cookies marketing
                  </label>
                  <p className="text-xs text-gray-500">
                    Utilisés pour mesurer l&apos;efficacité de nos campagnes publicitaires.
                    Non utilisés actuellement.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-end">
              <Button variant="outline" size="sm" onClick={rejectAll}>
                Tout refuser
              </Button>
              <Button variant="outline" size="sm" onClick={acceptAll}>
                Tout accepter
              </Button>
              <Button size="sm" onClick={saveCustom}>
                Enregistrer mes choix
              </Button>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              Vous pouvez modifier vos préférences à tout moment en cliquant sur
              &quot;Cookies&quot; en bas de page.{" "}
              <Link
                href="/confidentialite"
                className="text-[var(--primary)] hover:underline"
              >
                Politique de confidentialité
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Hook pour vérifier le consentement dans les autres composants
export function useCookieConsent() {
  const [consent, setConsent] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const savedPrefs = localStorage.getItem(COOKIE_PREFERENCES_KEY);
    if (savedPrefs) {
      setConsent(JSON.parse(savedPrefs));
    }

    const handleConsentChange = (e: CustomEvent<CookiePreferences>) => {
      setConsent(e.detail);
    };

    window.addEventListener(
      "cookieConsentChanged",
      handleConsentChange as EventListener
    );
    return () => {
      window.removeEventListener(
        "cookieConsentChanged",
        handleConsentChange as EventListener
      );
    };
  }, []);

  return consent;
}

// Fonction pour ouvrir le panneau de cookies (depuis le footer par exemple)
export function openCookieSettings() {
  localStorage.removeItem(COOKIE_CONSENT_KEY);
  window.location.reload();
}
