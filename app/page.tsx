import type { LucideIcon } from "lucide-react";
import {
  Bell,
  CalendarDays,
  Camera,
  CircleDollarSign,
  ClipboardCheck,
  Download,
  FileText,
  Gift,
  PackageCheck,
  ReceiptText,
  RotateCcw,
  ScanLine,
  Shirt,
  Sparkles,
  TriangleAlert
} from "lucide-react";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { site } from "./lib/site";

type IconItem = {
  title: string;
  text: string;
  icon: LucideIcon;
};

const features: IconItem[] = [
  {
    title: "Screenshot import",
    text: "Capture an order page, receipt, shipping update, or return label and turn it into organized details.",
    icon: ScanLine
  },
  {
    title: "Return windows",
    text: "See what can still go back, what needs action soon, and which store policy applies.",
    icon: RotateCcw
  },
  {
    title: "Refund follow-up",
    text: "Track credits, return labels, package drop-offs, and support notes until the money lands.",
    icon: CircleDollarSign
  },
  {
    title: "Receipt memory",
    text: "Save receipts, warranty dates, order numbers, and proof of purchase for the things that matter.",
    icon: ReceiptText
  },
  {
    title: "Warranty dates",
    text: "Remember coverage windows for electronics, appliances, bags, shoes, and the purchases worth protecting.",
    icon: CalendarDays
  }
];

const steps: IconItem[] = [
  {
    title: "Capture the proof",
    text: "Add a screenshot or receipt when you buy, return, or contact support.",
    icon: Camera
  },
  {
    title: "Confirm the details",
    text: "Review extracted store, item, dates, policy, tracking, and refund fields.",
    icon: ClipboardCheck
  },
  {
    title: "Let Orderly remember",
    text: "Use one timeline for arrivals, return windows, refunds, receipts, and warranties.",
    icon: Bell
  }
];

const purchaseTypes: IconItem[] = [
  {
    title: "Fashion hauls",
    text: "Keep sizes, return dates, labels, and refund status together when one order becomes five decisions.",
    icon: Shirt
  },
  {
    title: "Beauty restocks",
    text: "Save receipts, reorder proof, delivery notes, and support screenshots for items you buy again.",
    icon: Sparkles
  },
  {
    title: "Holiday gifts",
    text: "Remember what arrived, what was returned, and which receipts still matter after the rush.",
    icon: Gift
  },
  {
    title: "Warranty purchases",
    text: "Hold onto order numbers, coverage dates, and proof of purchase for electronics and appliances.",
    icon: PackageCheck
  },
  {
    title: "Problem orders",
    text: "Track refund promises, support notes, carrier updates, and bank follow-up in one place.",
    icon: TriangleAlert
  }
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <h1>{site.tagline}</h1>
            <p className="hero-subtitle">
              Save proof from any order. Orderly keeps deliveries, return windows, refunds, receipts, and warranties easy to find.
            </p>
            <div className="hero-actions">
              <a className="button primary" href={site.appUrl}>
                Get Orderly
              </a>
            </div>
          </div>

          <div className="hero-icon-board" aria-hidden="true">
            <div className="hero-icon-grid">
              <span>
                <ScanLine size={34} />
              </span>
              <span>
                <RotateCcw size={34} />
              </span>
              <span>
                <ReceiptText size={34} />
              </span>
              <span>
                <CalendarDays size={34} />
              </span>
            </div>
          </div>
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
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                  <div className="feature-art" aria-hidden="true">
                    <Icon size={54} strokeWidth={1.6} />
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

          <div className="process-mark" aria-hidden="true">
            <Camera size={42} strokeWidth={1.5} />
            <ClipboardCheck size={42} strokeWidth={1.5} />
            <Bell size={42} strokeWidth={1.5} />
          </div>

          <div className="process-list">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.title}>
                  <Icon size={22} strokeWidth={1.7} />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section information-section">
          <div>
            <h2>Order details without digging through five different places.</h2>
            <div className="info-icon-panel" aria-hidden="true">
              <FileText size={56} strokeWidth={1.4} />
            </div>
          </div>
          <div className="information-copy">
            <p>
              Use Orderly when a purchase creates follow-up: a tracking page, a return deadline, a refund promise, a receipt, or a warranty date.
            </p>
            <p>
              Keep the important proof in one calm place, without going back through emails, screenshots, store accounts, and support threads.
            </p>
          </div>
        </section>

        <section className="section audience-section">
          <div className="section-head">
            <h2>One timeline for the purchases that scatter across every store.</h2>
            <p>
              Orderly is for the orders that keep producing little tasks after checkout. It keeps the proof and the next action together.
            </p>
          </div>

          <div className="purchase-list">
            {purchaseTypes.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <div className="purchase-icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="final-cta">
          <p>Orderly for iPhone</p>
          <h2>Keep every order trail in one place.</h2>
          <p>
            Track deliveries, returns, refunds, receipts, and warranty dates without digging through scattered screenshots and emails.
          </p>
          <div>
            <a href={site.appUrl}>
              <Download size={17} />
              <span>Download on the App Store</span>
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
