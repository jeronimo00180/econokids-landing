"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import {
  buildAnalyticsConsentCookie,
  COOKIE_CONSENT_EVENT,
  COOKIE_CONSENT_KEY,
  COOKIE_PREFERENCES_KEY,
} from "@/lib/analytics-consent.mjs";

type CookieConsent = "pending" | "accepted" | "rejected" | "custom";

interface CookiePreferences {
  essential: boolean; // Toujours true, ne peut pas être désactivé
  analytics: boolean;
  marketing: boolean;
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
};

function subscribeToConsent(onStoreChange: () => void) {
  window.addEventListener(COOKIE_CONSENT_EVENT, onStoreChange);
  return () => window.removeEventListener(COOKIE_CONSENT_EVENT, onStoreChange);
}

function getConsentSnapshot() {
  return localStorage.getItem(COOKIE_CONSENT_KEY) ?? "";
}

export function CookieConsent() {
  const consent = useSyncExternalStore(subscribeToConsent, getConsentSnapshot, () => "server");
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);
  const showBanner = consent === "";

  const saveConsent = (consent: CookieConsent, prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, consent);
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    document.cookie = buildAnalyticsConsentCookie(
      prefs.analytics,
      window.location.hostname
    );
    setPreferences(prefs);
    window.dispatchEvent(
      new CustomEvent(COOKIE_CONSENT_EVENT, { detail: prefs })
    );
  };

  const acceptAll = () => {
    saveConsent("accepted", {
      essential: true,
      analytics: true,
      marketing: false,
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
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg"
    >
      <div className="container max-w-4xl mx-auto">
        {!showDetails ? (
          // Bannière simplifiée
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-1">
              <h2 id="cookie-consent-title" className="font-semibold mb-1">
                Vos préférences de confidentialité
              </h2>
              <p className="text-sm text-gray-700">
                Avec votre accord, PostHog nous aide à comprendre l&apos;usage du site.
                Le refus n&apos;empêche aucune fonctionnalité essentielle.{" "}
                <Link
                  href="/confidentialite"
                  className="text-primary hover:underline"
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

            <h2 id="cookie-consent-title" className="font-semibold mb-4">Gestion des cookies</h2>

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
                  className="mt-1 h-4 w-4 accent-primary"
                />
                <div>
                  <label htmlFor="analytics" className="font-medium text-sm">
                    Cookies d&apos;analyse
                  </label>
                  <p className="text-xs text-gray-500">
                    Mesure d&apos;audience PostHog hébergée dans l&apos;Union européenne.
                    Nous collectons uniquement des données de navigation après votre accord.
                  </p>
                </div>
              </div>

              {/* Cookies marketing */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="marketing"
                  checked={preferences.marketing}
                  disabled
                  className="mt-1 h-4 w-4 accent-primary"
                />
                <div>
                  <label htmlFor="marketing" className="font-medium text-sm">
                    Cookies marketing
                  </label>
                  <p className="text-xs text-gray-500">
                    Aucun cookie publicitaire n&apos;est utilisé actuellement.
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
                className="text-primary hover:underline"
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
// Fonction pour ouvrir le panneau de cookies (depuis le footer par exemple)
export function openCookieSettings() {
  localStorage.removeItem(COOKIE_CONSENT_KEY);
  localStorage.removeItem(COOKIE_PREFERENCES_KEY);
  document.cookie = buildAnalyticsConsentCookie(false, window.location.hostname);
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: DEFAULT_PREFERENCES }));
}
