import type { Metadata } from "next";
import { PolicyPage } from "../components/PolicyPage";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Orderly privacy policy for App Store review and users."
};

export default function PrivacyPage() {
  return (
    <PolicyPage
      label="Privacy"
      title="Privacy Policy"
      intro="This policy explains what Orderly collects, how order screenshots are processed, and how users can access or delete their data."
      sections={[
        {
          title: "Information we collect",
          body: [
            "Orderly may collect account information such as an email address, support messages, and app settings.",
            "When you import a screenshot, receipt, order confirmation, delivery update, return page, or refund note, Orderly may process the image and extracted order details you provide. This can include store names, product names, prices, order numbers, tracking numbers, return deadlines, delivery estimates, refund status, warranty dates, and notes you add.",
            "Orderly may collect basic device and app diagnostics to understand crashes, performance, and support issues."
          ]
        },
        {
          title: "How we use information",
          body: [
            "We use your information to create and maintain your private order timeline, extract purchase details, send useful reminders, provide support, improve reliability, prevent abuse, and comply with legal obligations.",
            "AI assistance is used to read order screenshots and suggest structured details. You should review AI output before relying on it for returns, refunds, or warranty decisions."
          ]
        },
        {
          title: "Sharing and service providers",
          body: [
            "Orderly does not sell personal information.",
            "We may share limited information with service providers that help operate the app, such as secure hosting, database, authentication, analytics, crash reporting, email support, and AI processing providers. These providers are used only to deliver and maintain Orderly.",
            "We may disclose information if required by law, to protect rights and safety, or in connection with a merger, acquisition, or similar transaction."
          ]
        },
        {
          title: "Retention and deletion",
          body: [
            "Order records are kept while your account is active or until you delete them in the app. Backup copies may remain for a limited period before being removed from routine systems.",
            `You can request account and data deletion by visiting the data deletion page or emailing ${site.privacyEmail}. We may need to verify that the request came from the account owner.`
          ]
        },
        {
          title: "Children",
          body: [
            "Orderly is not intended for children under 13. If you believe a child provided personal information, contact us so we can review and delete it where appropriate."
          ]
        },
        {
          title: "Contact",
          body: [
            `Questions about privacy can be sent to ${site.privacyEmail}. We will respond as soon as reasonably possible.`
          ]
        }
      ]}
    />
  );
}
