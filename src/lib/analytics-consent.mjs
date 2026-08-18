export const COOKIE_CONSENT_KEY = "econokids_cookie_consent";
export const COOKIE_PREFERENCES_KEY = "econokids_cookie_preferences";
export const ATTRIBUTION_KEY = "econokids_marketing_attribution";
export const COOKIE_CONSENT_EVENT = "cookieConsentChanged";
export const ANALYTICS_CONSENT_COOKIE = "econokids_analytics_consent";

const ALLOWED_UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
];

export function readAnalyticsConsent(serializedPreferences) {
  if (!serializedPreferences) return false;
  try {
    const preferences = JSON.parse(serializedPreferences);
    return preferences?.analytics === true;
  } catch {
    return false;
  }
}

export function applyAnalyticsConsent(client, granted) {
  if (granted) client.opt_in_capturing();
  else client.opt_out_capturing();
}

export function captureConsentedEvent(
  client,
  serializedPreferences,
  event,
  properties,
  attributionStorage
) {
  if (!client?.capture || !readAnalyticsConsent(serializedPreferences)) return;
  const storage =
    attributionStorage ?? (typeof window !== "undefined" ? window.localStorage : null);
  const attribution = storage ? readStoredAttribution(storage) : {};
  client.capture(event, { ...attribution, ...properties });
}

export function sanitizeAttribution(searchParams) {
  const attribution = {};

  for (const key of ALLOWED_UTM_KEYS) {
    const rawValue = searchParams.get(key);
    if (!rawValue) continue;
    const value = rawValue.trim().toLowerCase().slice(0, 100);
    if (value) attribution[key] = value;
  }

  return attribution;
}

export function storeAttribution(storage, searchParams) {
  const attribution = sanitizeAttribution(searchParams);
  if (Object.keys(attribution).length > 0) {
    storage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution));
  }
  return attribution;
}

export function readStoredAttribution(storage) {
  try {
    const rawValue = storage.getItem(ATTRIBUTION_KEY);
    if (!rawValue) return {};
    const parsed = JSON.parse(rawValue);
    const params = new URLSearchParams();
    for (const key of ALLOWED_UTM_KEYS) {
      if (typeof parsed?.[key] === "string") params.set(key, parsed[key]);
    }
    return sanitizeAttribution(params);
  } catch {
    return {};
  }
}

export function appendStoredAttribution(url, storage) {
  const target = new URL(url);
  const attribution = readStoredAttribution(storage);
  for (const [key, value] of Object.entries(attribution)) {
    target.searchParams.set(key, value);
  }
  return target.toString();
}

export function forwardStoredAttribution(anchor, storage) {
  anchor.href = appendStoredAttribution(anchor.href, storage);
}

export function buildAnalyticsConsentCookie(granted, hostname) {
  const value = granted ? "granted" : "denied";
  const isEconoKidsDomain =
    hostname === "econokids.fr" || hostname.endsWith(".econokids.fr");
  const sharedDomain = isEconoKidsDomain ? "; Domain=.econokids.fr; Secure" : "";

  return `${ANALYTICS_CONSENT_COOKIE}=${value}; Path=/; Max-Age=31536000; SameSite=Lax${sharedDomain}`;
}
