import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const moduleUrl = new URL("../src/lib/analytics-consent.mjs", import.meta.url);

async function loadAnalytics() {
  assert.equal(existsSync(moduleUrl), true, "Le module analytics doit être créé");
  return import(moduleUrl);
}

test("le module de consentement analytics existe", () => {
  assert.equal(existsSync(moduleUrl), true);
});

test("le consentement analytics est refusé par défaut ou si les préférences sont invalides", async () => {
  const analytics = await loadAnalytics();
  assert.equal(analytics.readAnalyticsConsent(null), false);
  assert.equal(analytics.readAnalyticsConsent("not-json"), false);
  assert.equal(analytics.readAnalyticsConsent(JSON.stringify({ analytics: false })), false);
});

test("une acceptation ou un retrait appelle explicitement PostHog", async () => {
  const analytics = await loadAnalytics();
  const calls = [];
  const client = {
    opt_in_capturing: () => calls.push("in"),
    opt_out_capturing: () => calls.push("out"),
  };

  analytics.applyAnalyticsConsent(client, true);
  analytics.applyAnalyticsConsent(client, false);

  assert.deepEqual(calls, ["in", "out"]);
});

test("aucun événement manuel n'est mis en file avant le consentement", async () => {
  const analytics = await loadAnalytics();
  const calls = [];
  const client = { capture: (...args) => calls.push(args) };
  const storage = {
    getItem: () => JSON.stringify({ utm_source: "google", email: "ignored@example.com" }),
  };

  analytics.captureConsentedEvent(client, null, "cta_clicked", { cta_name: "hero" }, storage);
  analytics.captureConsentedEvent(
    client,
    JSON.stringify({ analytics: true }),
    "cta_clicked",
    { cta_name: "hero" },
    storage
  );

  assert.deepEqual(calls, [["cta_clicked", { utm_source: "google", cta_name: "hero" }]]);
});

test("seuls les paramètres UTM autorisés et bornés sont conservés", async () => {
  const analytics = await loadAnalytics();
  const result = analytics.sanitizeAttribution(
    new URLSearchParams({
      utm_source: "Google",
      utm_medium: "cpc",
      utm_campaign: "Rentrée 2026",
      email: "parent@example.com",
      utm_content: "x".repeat(150),
    })
  );

  assert.deepEqual(Object.keys(result), ["utm_source", "utm_medium", "utm_campaign", "utm_content"]);
  assert.equal(result.utm_source, "google");
  assert.equal(result.utm_content.length, 100);
  assert.equal("email" in result, false);
});

test("les paramètres marketing consentis sont transmis aux liens vers l'application", async () => {
  const analytics = await loadAnalytics();
  const storage = {
    getItem: () => JSON.stringify({
      utm_source: "google",
      utm_medium: "cpc",
      email: "parent@example.com",
    }),
  };

  const anchor = { href: "https://app.econokids.fr/login?tab=parent" };
  analytics.forwardStoredAttribution(anchor, storage);

  const target = new URL(anchor.href);
  assert.equal(target.searchParams.get("tab"), "parent");
  assert.equal(target.searchParams.get("utm_source"), "google");
  assert.equal(target.searchParams.get("utm_medium"), "cpc");
  assert.equal(target.searchParams.has("email"), false);

  const ctaFiles = [
    "../src/components/landing/navbar.tsx",
    "../src/components/landing/hero.tsx",
    "../src/components/landing/cta.tsx",
    "../src/components/landing/pricing.tsx",
  ];
  for (const file of ctaFiles) {
    assert.match(readFileSync(new URL(file, import.meta.url), "utf8"), /forwardStoredAttribution/);
  }
});

test("le choix analytics est partage avec l'application sans cookie tiers", async () => {
  const analytics = await loadAnalytics();
  const accepted = analytics.buildAnalyticsConsentCookie(true, "www.econokids.fr");
  const rejected = analytics.buildAnalyticsConsentCookie(false, "app.econokids.fr");
  const local = analytics.buildAnalyticsConsentCookie(true, "localhost");

  assert.match(accepted, /^econokids_analytics_consent=granted;/);
  assert.match(accepted, /Domain=\.econokids\.fr/);
  assert.match(accepted, /Secure/);
  assert.match(rejected, /^econokids_analytics_consent=denied;/);
  assert.equal(local.includes("Domain="), false);
  assert.equal(local.includes("Secure"), false);
});

test("l'identifiant analytique consenti peut suivre le parcours entre www et app", () => {
  const provider = readFileSync(
    new URL("../src/components/posthog-provider.tsx", import.meta.url),
    "utf8"
  );

  assert.match(provider, /persistence:\s*["']localStorage\+cookie["']/);
  assert.match(provider, /cross_subdomain_cookie:\s*true/);
  assert.match(provider, /secure_cookie:\s*true/);
  assert.match(provider, /readStoredAttribution/);
});
