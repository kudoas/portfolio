// vercel analytics
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export const VercelAnalytics = () => {
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
};
