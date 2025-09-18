import Script from "next/script";
import { getServerConsent } from "@/lib/server-consent";

export function AnalyticsLoader() {
  const consent = getServerConsent();
  const allowAnalytics = !!consent?.analytics;
  if (!allowAnalytics) return null;
  return (
    <>
      {/* Example: Google Analytics; replace with your IDs or providers */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-XXXXXXX');
`}</Script>
    </>
  );
}
