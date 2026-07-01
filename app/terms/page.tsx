import type { Metadata } from "next";
import { PolicyPage } from "../components/PolicyPage";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Orderly terms of service."
};

export default function TermsPage() {
  return (
    <PolicyPage
      label="Terms"
      title="Terms of Service"
      intro="These terms describe the rules for using Orderly and the limits of the purchase tracking information shown in the app."
      sections={[
        {
          title: "Using Orderly",
          body: [
            "Orderly helps you organize order, delivery, return, refund, receipt, and warranty information that you choose to add.",
            "You are responsible for reviewing imported and AI-extracted information before relying on it. Store policies, carrier updates, bank timelines, and warranty coverage can change outside of Orderly."
          ]
        },
        {
          title: "Your content",
          body: [
            "You keep ownership of screenshots, receipts, notes, and order details you add to Orderly.",
            "You grant Orderly permission to process that content only as needed to provide the app, support your account, improve reliability, comply with law, and protect the service."
          ]
        },
        {
          title: "Acceptable use",
          body: [
            "Do not use Orderly to upload content you do not have permission to use, attempt to access another person’s account, reverse engineer the service, disrupt app operation, or violate applicable law."
          ]
        },
        {
          title: "Subscriptions and purchases",
          body: [
            "If Orderly offers paid features, purchase terms will be shown before payment. App Store purchases are handled through Apple and may be managed through your Apple account settings."
          ]
        },
        {
          title: "Disclaimers",
          body: [
            "Orderly is provided as an organizational tool. It is not a merchant, carrier, bank, warranty provider, or legal advisor.",
            "We do not guarantee that AI extraction, reminders, delivery estimates, return deadlines, refund status, or warranty information will always be complete or accurate."
          ]
        },
        {
          title: "Contact",
          body: [`Questions about these terms can be sent to ${site.legalEmail}.`]
        }
      ]}
    />
  );
}
