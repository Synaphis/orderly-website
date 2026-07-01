export const site = {
  name: "Orderly",
  tagline: "A calmer memory for every order.",
  description:
    "Orderly helps iPhone shoppers remember deliveries, returns, refunds, receipts, and warranty dates from order screenshots.",
  url: "https://orderly.app",
  appUrl: "https://orderly.app",
  supportEmail: "support@synetrasystems.com",
  legalEmail: "legal@synetrasystems.com",
  privacyEmail: "privacy@synetrasystems.com",
  lastUpdated: "June 30, 2026"
};

export const mailto = (email: string, subject: string) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}`;
