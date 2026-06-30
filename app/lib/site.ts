export const site = {
  name: "Subly",
  tagline: "Your private order inbox.",
  description:
    "Subly helps iPhone shoppers remember deliveries, returns, refunds, receipts, and warranty dates from order screenshots.",
  url: "https://subly.app",
  supportEmail: "support@subly.app",
  legalEmail: "legal@subly.app",
  privacyEmail: "privacy@subly.app",
  lastUpdated: "June 30, 2026"
};

export const mailto = (email: string, subject: string) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}`;
