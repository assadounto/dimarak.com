// =============================================================
export const CONSENT_COOKIE = "dmrk_consent";

function parse(json: string | null) {
  if (!json) return null;
  try {
    return JSON.parse(json) as import("@/constants/cookies").ConsentMap;
  } catch {
    return null;
  }
}

export function getConsentClient() {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((c) => c.startsWith(CONSENT_COOKIE + "="));
  if (!match) return null;
  const value = decodeURIComponent(match.split("=")[1]);
  return parse(value);
}

export function setConsentClient(
  consent: import("@/constants/cookies").ConsentMap,
  days = 180
) {
  if (typeof document === "undefined") return;
  const json = encodeURIComponent(JSON.stringify(consent));
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${CONSENT_COOKIE}=${json}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
}

export function resetConsentClient() {
  if (typeof document === "undefined") return;
  document.cookie = `${CONSENT_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax`;
}
