import type { Metadata } from "next";
import { PolicyPage } from "../components/PolicyPage";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Orderly for iPhone."
};

export default function SupportPage() {
  return (
    <PolicyPage
      label="Support"
      title="Support"
      intro="Use this page for App Store support, account help, privacy requests, and questions about order tracking."
      sections={[
        {
          title: "Contact support",
          body: [
            `Email ${site.supportEmail} for app help, bug reports, account questions, or feedback. Include the device model, iOS version, app version, and a short description of the issue when possible.`,
            "Please do not send full credit card numbers, passwords, or other unnecessary sensitive information in support requests."
          ]
        },
        {
          title: "Common questions",
          body: [
            "If an imported screenshot looks wrong, edit the extracted fields before saving or delete the record and import again.",
            "If a reminder appears wrong, check the store policy and the saved order date. Orderly reminders are organizational prompts, not guarantees from the retailer.",
            "If a refund is late, use Orderly notes and receipts to contact the store, carrier, or bank that controls the refund."
          ]
        },
        {
          title: "Privacy and deletion",
          body: [
            `Privacy questions can be sent to ${site.privacyEmail}. Data deletion instructions are available on the data deletion page.`
          ]
        },
        {
          title: "Response time",
          body: ["We aim to respond to support requests within 2 business days."]
        }
      ]}
    />
  );
}
