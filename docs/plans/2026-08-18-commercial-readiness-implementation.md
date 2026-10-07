# Econo'kids Commercial Readiness Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Corriger le site et l'application Econo'kids pour un lancement B2C mesurable, cohérent et vérifiable sans analytics dans l'espace enfant.

**Architecture:** Le site public porte le SEO et l'acquisition consentie. L'application mesure uniquement le parcours parent ; Stripe confirme les conversions côté serveur. Les textes publics sont alimentés par un référentiel factuel partagé et les données analytiques sont minimisées.

**Tech Stack:** Next.js 16, React 19, TypeScript, PostHog EU, Stripe Checkout/Billing, Prisma/PostgreSQL Neon, Jest, Node test runner.

---

### Task 1: Verrouiller les exigences du site par des tests de régression

**Files:**
- Create: `tests/commercial-readiness.test.mjs`
- Modify: `package.json`

**Step 1: Write the failing test**

Tester l'absence des promesses interdites, la présence de l'identité légale, l'existence des métadonnées canoniques et le comportement attendu du consentement analytics.

**Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL sur les anciennes affirmations et les fichiers SEO manquants.

**Step 3: Write minimal implementation**

Ajouter uniquement le script de test et les points d'extension nécessaires.

**Step 4: Run test to verify it passes**

Run: `npm test`
Expected: PASS après les tâches 2 à 4.

### Task 2: Corriger les contenus et pages juridiques du site

**Files:**
- Modify: `src/app/cgu/page.tsx`
- Modify: `src/app/confidentialite/page.tsx`
- Modify: `src/app/mentions-legales/page.tsx`
- Modify: `src/components/landing/problem.tsx`
- Modify: `src/components/landing/features.tsx`
- Modify: `src/components/landing/hero.tsx`
- Modify: `src/components/landing/cta.tsx`
- Modify: `src/lib/faq-data.ts`
- Modify: `src/components/landing/benefits-b2b.tsx`
- Modify: `src/components/landing/faq-b2b.tsx`
- Modify: `src/components/landing/faq-mairies.tsx`

**Steps:**

1. Faire échouer les assertions sur les formulations actuelles.
2. Remplacer les statistiques erronées et garanties par des formulations sourcées ou prudentes.
3. Insérer l'identité de Jérôme Rembert EI et une date de version juridique fixe.
4. Décrire Vercel, OVH et Neon sans promesse territoriale excessive.
5. Relancer `npm test`.

### Task 3: Corriger le SEO technique

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/mairies/page.tsx`
- Modify: `src/app/contact/page.tsx`
- Modify: pages juridiques pour leurs métadonnées propres
- Delete: `public/sitemap.xml`
- Create: `src/app/sitemap.ts`
- Create: `src/app/robots.ts`
- Delete: `public/robots.txt`

**Steps:**

1. Ajouter des assertions échouant sur les canoniques et le domaine principal.
2. Choisir `https://www.econokids.fr` comme URL canonique et harmoniser Open Graph.
3. Générer sitemap et robots depuis Next.js.
4. Vérifier le HTML produit après build.

### Task 4: Fiabiliser le consentement et l'attribution du site

**Files:**
- Create: `src/lib/analytics-consent.mjs`
- Test: `tests/analytics-consent.test.mjs`
- Modify: `src/components/posthog-provider.tsx`
- Modify: `src/components/cookie-consent.tsx`
- Modify: composants CTA concernés

**Steps:**

1. Écrire les tests de refus par défaut, acceptation, retrait et nouvelle acceptation.
2. Vérifier l'échec avant implémentation.
3. Désactiver autocapture et replay ; appeler explicitement opt-in/opt-out.
4. Réinitialiser la profondeur de scroll par page et ne jamais transmettre le référent complet.
5. Conserver uniquement les paramètres UTM autorisés et les transmettre vers l'application.
6. Relancer les tests.

### Task 5: Ajouter le suivi parent dans l'application

**Files:**
- Create: `src/lib/analytics/events.ts`
- Create: `src/lib/analytics/attribution.ts`
- Create: `src/components/analytics/ParentAnalyticsProvider.tsx`
- Test: `tests/unit/analytics-event-privacy.test.ts`
- Modify: `app/layout.tsx`
- Modify: `app/inscription/page.tsx`
- Modify: pages parent de tarification et gestion des enfants

**Steps:**

1. Écrire un test qui rejette toute propriété personnelle ou liée à un enfant.
2. Vérifier l'échec.
3. Implémenter une liste fermée d'événements et de propriétés.
4. Monter le fournisseur uniquement sur les routes adultes et jamais dans `(jeu)`.
5. Capturer les jalons parent après succès réel.
6. Relancer les tests ciblés.

### Task 6: Confirmer les conversions côté serveur

**Files:**
- Create or modify: `src/lib/analytics/server.ts`
- Modify: `app/api/webhooks/stripe/route.ts`
- Test: `tests/unit/stripe-analytics-conversion.test.ts`

**Steps:**

1. Écrire les tests d'idempotence, de minimisation et de non-émission avant confirmation Stripe.
2. Vérifier les échecs.
3. Émettre les événements serveur seulement après réconciliation réussie.
4. Ne transmettre aucun identifiant Stripe brut, email ou nom.
5. Relancer les tests Stripe et analytics.

### Task 7: Harmoniser l'application et ses obligations commerciales

**Files:**
- Modify: `app/cgu/page.tsx`
- Modify or create: page de confidentialité de l'application
- Modify: `.env.example`
- Modify: `scripts/validate-production-env.mjs`
- Modify: documentation d'exploitation pertinente

**Steps:**

1. Ajouter des assertions sur les informations légales, prestataires, rétention et droits.
2. Remplacer les placeholders et dates dynamiques.
3. Vérifier export, suppression, résiliation, portail et tâches planifiées par leurs tests existants.
4. Documenter les variables PostHog séparées et l'interdiction de les exposer aux routes enfant.

### Task 8: Vérification finale

**Files:**
- Modify only if a failing verification identifies a scoped regression.

**Steps:**

1. Run landing: `npm test`, `npm run lint`, `npm run build`, `npx tsc --noEmit --incremental false`.
2. Run app targeted Jest suites for analytics, Stripe, RGPD, auth and subscription.
3. Run app: `npm run type-check`, `npm run lint`, `npm run build`.
4. Run production environment validators in read-only mode.
5. Inspect `git diff` against both captured baselines and separate pre-existing work from new changes.
6. Report every external production gate that remains unverified.
