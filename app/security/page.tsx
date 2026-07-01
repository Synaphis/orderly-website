import type { Metadata } from "next";
import { PolicyPage } from "../components/PolicyPage";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Security",
  description: "Orderly security and responsible disclosure."
};

export default function SecurityPage() {
  return (
    <PolicyPage
      label="Security"
      title="Security"
      intro="Orderly handles order records that can contain personal purchase information, so security is part of the product design."
      sections={[
        {
          title: "Security practices",
          body: [
            "Orderly uses access controls, secure transport, service provider controls, and limited data access practices to protect account and order information.",
            "We aim to collect only the information needed to provide purchase tracking, reminders, support, diagnostics, and account functions."
          ]
        },
        {
          title: "User practices",
          body: [
            "Use a strong Apple account and device passcode. Avoid importing screenshots that include unnecessary sensitive details when those details are not needed for tracking an order."
          ]
        },
        {
          title: "Responsible disclosure",
          body: [
            `If you believe you found a security issue, email ${site.legalEmail} with a clear description, steps to reproduce, and the potential impact. Please do not access, modify, or delete another user’s data.`
          ]
        }
      ]}
    />
  );
}
