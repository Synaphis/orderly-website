import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  CalendarDays,
  CheckCircle2,
  LockKeyhole,
  PackageCheck,
  ReceiptText,
  RefreshCw,
  RotateCcw,
  ShieldCheck
} from "lucide-react";
import { FeatureIllustration, HeroIllustration, ReceiptFlowIllustration } from "./components/ConceptIllustrations";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { site } from "./lib/site";

const features = [
  {
    title: "Screenshot import",
    text: "Capture an order page, receipt, shipping update, or return label and turn it into organized details.",
    icon: Camera,
    kind: "screenshot" as const
  },
  {
    title: "Return windows",
    text: "See what can still go back, what needs action soon, and which store policy applies.",
    icon: RotateCcw,
    kind: "return" as const
  },
  {
    title: "Refund follow-up",
    text: "Track credits, return labels, package drop-offs, and support notes until the money lands.",
    icon: RefreshCw,
    kind: "refund" as const
  },
  {
    title: "Receipt memory",
    text: "Save receipts, warranty dates, order numbers, and proof of purchase for the things that matter.",
    icon: ReceiptText,
    kind: "receipt" as const
  },
  {
    title: "Warranty dates",
    text: "Remember coverage windows for electronics, appliances, bags, shoes, and the purchases worth protecting.",
    icon: CalendarDays,
    kind: "warranty" as const
  }
];

const steps = [
  {
    title: "Capture the proof",
    text: "Add a screenshot or receipt when you buy, return, or contact support."
  },
  {
    title: "Confirm the details",
    text: "Review extracted store, item, dates, policy, tracking, and refund fields."
  },
  {
    title: "Let Orderly remember",
    text: "Use one timeline for arrivals, return windows, refunds, receipts, and warranties."
  }
];

const audiences = ["Fashion hauls", "Beauty restocks", "Holiday gifts", "Warranty purchases", "Problem orders"];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Private purchase memory for iPhone</p>
            <h1>{site.tagline}</h1>
            <p className="hero-subtitle">
              Save proof from any order. Orderly keeps deliveries, return windows, refunds, receipts, and warranties easy to find.
            </p>
            <div className="hero-actions">
              <a className="button primary" href={site.appUrl}>
                <span>Get Orderly</span>
                <ArrowRight size={18} />
              </a>
              <Link className="button secondary" href="/privacy">
                <ShieldCheck size={18} />
                <span>View privacy</span>
              </Link>
            </div>
          </div>
          <HeroIllustration />
        </section>

        <section className="section intro-band">
          <h2>Shopping is easy. Remembering everything after checkout is the hard part.</h2>
          <p>
            Orderly turns scattered order emails, screenshots, store portals, shipping pages, and return labels into one
            private place to check what arrived, what can go back, and what still needs a refund.
          </p>
        </section>

        <section className="section feature-section" id="features">
          <div className="section-head">
            <h2>Built for the after-buying mess.</h2>
            <p>
              Every feature starts from the same simple idea: save the proof once, then let Orderly keep the important dates visible.
            </p>
          </div>
          <div className="feature-list">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article className="feature-item" key={feature.title}>
                  <div className="feature-copy">
                    <span className="feature-icon">
                      <Icon size={18} />
                    </span>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                  <div className="feature-art">
                    <FeatureIllustration kind={feature.kind} />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section process-section">
          <div className="process-copy">
            <h2>Capture effortless. Correction easy. Reminders useful.</h2>
            <p>
              Orderly stays practical: import what you already have, confirm what the AI read, then act before a window closes.
            </p>
          </div>
          <ReceiptFlowIllustration />
          <div className="process-list">
            {steps.map((step) => (
              <article key={step.title}>
                <CheckCircle2 size={20} />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section privacy-section" id="privacy">
          <div>
            <p className="eyebrow">Privacy by design</p>
            <h2>Your orders can be personal. Orderly treats them that way.</h2>
          </div>
          <div className="privacy-panel">
            <article>
              <LockKeyhole size={20} />
              <h3>You choose what to import</h3>
              <p>Orderly starts with screenshots and order details you decide to add. It does not need your inbox.</p>
            </article>
            <article>
              <Camera size={20} />
              <h3>AI is reviewable</h3>
              <p>AI helps read receipts and confirmations, then shows editable results before saving.</p>
            </article>
            <article>
              <BadgeCheck size={20} />
              <h3>Deletion is supported</h3>
              <p>Privacy, account deletion, and support paths are published clearly for App Store review and users.</p>
            </article>
          </div>
        </section>

        <section className="section audience-section">
          <div className="section-head">
            <h2>One timeline for the purchases that scatter across every store.</h2>
          </div>
          <div className="audience-strip">
            {audiences.map((item) => (
              <span key={item}>
                <PackageCheck size={16} />
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="cta-section">
          <div>
            <p className="eyebrow">Available on iOS</p>
            <h2>Keep the order trail after checkout.</h2>
            <p>Open Orderly, ask a support question, or review the privacy and legal pages.</p>
          </div>
          <div className="cta-actions">
            <a className="button primary" href={site.appUrl}>
              <span>Get Orderly</span>
              <ArrowRight size={18} />
            </a>
            <Link className="button secondary" href="/support">
              Support
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
