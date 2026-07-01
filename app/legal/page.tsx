import type { Metadata } from "next";
import { PolicyPage } from "../components/PolicyPage";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Legal",
  description: "Legal notices for Orderly."
};

export default function LegalPage() {
  return (
    <PolicyPage
      label="Legal"
      title="Legal Notices"
      intro="This page collects notices that help users, reviewers, and partners understand the status of Orderly and its contact paths."
      sections={[
        {
          title: "Independent app",
          body: [
            "Orderly is an independent application. It is not affiliated with, endorsed by, or sponsored by Apple, any retailer, delivery carrier, payment network, or warranty provider unless stated in writing."
          ]
        },
        {
          title: "Trademarks",
          body: [
            "Apple, iPhone, App Store, and related marks are trademarks of Apple Inc. Other names, logos, and brands are property of their respective owners."
          ]
        },
        {
          title: "Order information",
          body: [
            "Orderly organizes information you provide. Final return eligibility, refund timing, delivery status, and warranty coverage are determined by the relevant store, carrier, bank, or manufacturer."
          ]
        },
        {
          title: "Legal contact",
          body: [`Legal inquiries can be sent to ${site.legalEmail}. Support requests should be sent to ${site.supportEmail}.`]
        }
      ]}
    />
  );
}
