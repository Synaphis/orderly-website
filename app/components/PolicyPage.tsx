import Link from "next/link";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { site } from "../lib/site";

type Section = {
  title: string;
  body: string[];
};

type PolicyPageProps = {
  label: string;
  title: string;
  intro: string;
  sections: Section[];
};

export function PolicyPage({ label, title, intro, sections }: PolicyPageProps) {
  return (
    <>
      <SiteHeader />
      <main className="policy-main">
        <div className="policy-hero">
          <p className="eyebrow">{label}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <span>Last updated {site.lastUpdated}</span>
        </div>
        <div className="policy-layout">
          <aside>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/legal">Legal</Link>
            <Link href="/security">Security</Link>
            <Link href="/support">Support</Link>
            <Link href="/data-deletion">Data deletion</Link>
          </aside>
          <div className="policy-card">
            {sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
