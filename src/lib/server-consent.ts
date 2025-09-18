import { cookies } from "next/headers";
import type { ConsentMap } from "@/constants/cookies";
import { CONSENT_COOKIE } from "@/lib/consent";

export async function getServerConsent(): Promise<ConsentMap | null> {
  const c = await cookies().get(CONSENT_COOKIE)?.value;
  try {
    return c ? (JSON.parse(decodeURIComponent(c)) as ConsentMap) : null;
  } catch {
    return null;
  }
}
