import Link from "next/link";
import { LifeBuoy, PackageCheck } from "lucide-react";
import { mailto, site } from "../lib/site";

const links = [
  { href: "/#features", label: "Features" },
  { href: "/#privacy", label: "Privacy" },
  { href: "/support", label: "Support" },
  { href: "/terms", label: "Terms" }
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Subly home">
        <span className="brand-mark">
          <PackageCheck size={16} strokeWidth={2.2} />
        </span>
        <span>{site.name}</span>
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <a className="header-action" href={mailto(site.supportEmail, "Subly support")}>
        <LifeBuoy size={16} />
        <span>Support</span>
      </a>
    </header>
  );
}
