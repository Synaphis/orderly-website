import Link from "next/link";
import { Mail } from "lucide-react";
import { mailto, site } from "../lib/site";

const footerLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/legal", label: "Legal" },
  { href: "/security", label: "Security" },
  { href: "/support", label: "Support" },
  { href: "/data-deletion", label: "Delete data" }
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Link href="/" className="footer-brand">
          {site.name}
        </Link>
        <p>Private order memory for iPhone shoppers.</p>
      </div>
      <nav aria-label="Footer navigation">
        {footerLinks.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <a className="footer-mail" href={mailto(site.supportEmail, "Subly website inquiry")}>
        <Mail size={16} />
        {site.supportEmail}
      </a>
      <p className="fine-print">
        Copyright {new Date().getFullYear()} {site.name}. Apple and iPhone are trademarks of Apple Inc.
      </p>
    </footer>
  );
}
