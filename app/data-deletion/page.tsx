import type { Metadata } from "next";
import { PolicyPage } from "../components/PolicyPage";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Data Deletion",
  description: "How to request deletion of Subly account data."
};

export default function DataDeletionPage() {
  return (
    <PolicyPage
      label="Data deletion"
      title="Delete Your Data"
      intro="Subly provides a clear path for users to delete account information and stored order records."
      sections={[
        {
          title: "Delete in the app",
          body: [
            "When account deletion is available in the iOS app, open Settings, choose Account, and select Delete Account. The app will show a confirmation before deletion starts."
          ]
        },
        {
          title: "Request by email",
          body: [
            `You can request deletion by emailing ${site.privacyEmail} from the email address connected to your Subly account. Use the subject line Data deletion request.`,
            "We may ask for limited information to verify account ownership before processing the request."
          ]
        },
        {
          title: "What gets deleted",
          body: [
            "Deletion covers account information, imported screenshots, extracted order records, receipt and warranty records, reminders, notes, and support data connected to your account where deletion is legally permitted.",
            "Some records may be retained if required for security, fraud prevention, legal compliance, dispute resolution, or accounting obligations."
          ]
        },
        {
          title: "Timing",
          body: [
            "Deletion requests are generally processed within 30 days after verification. Backup copies may take additional time to expire from routine backup systems."
          ]
        }
      ]}
    />
  );
}
