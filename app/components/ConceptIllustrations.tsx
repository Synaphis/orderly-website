import type { ReactNode } from "react";

type FeatureKind = "screenshot" | "return" | "refund" | "receipt" | "warranty" | "privacy";

const flow = [
  { label: "Capture", detail: "Save the proof", mark: "01" },
  { label: "Confirm", detail: "Check the fields", mark: "02" },
  { label: "Remember", detail: "Act on time", mark: "03" }
] as const;

function IllustrationFrame({ children }: { children: ReactNode }) {
  return (
    <div className="illustration-frame" aria-hidden="true">
      {children}
    </div>
  );
}

export function HeroIllustration() {
  return (
    <div className="hero-illustration" aria-label="Orderly remembers proof for orders, returns, refunds, receipts, and warranties">
      <div className="hero-proof-card hero-proof-primary">
        <span>Order proof</span>
        <strong>Jacket order</strong>
        <div className="proof-lines">
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="hero-proof-card hero-proof-return">
        <span>Return by</span>
        <strong>Jan 24</strong>
      </div>
      <div className="hero-proof-card hero-proof-refund">
        <span>Refund</span>
        <strong>Pending</strong>
      </div>
      <div className="hero-proof-card hero-proof-warranty">
        <span>Warranty</span>
        <strong>18 mo.</strong>
      </div>
    </div>
  );
}

export function FeatureIllustration({ kind }: { kind: FeatureKind }) {
  if (kind === "screenshot") {
    return (
      <IllustrationFrame>
        <div className="mini-document">
          <span />
          <span />
          <span />
        </div>
        <div className="capture-corners">
          <i />
          <i />
          <i />
          <i />
        </div>
      </IllustrationFrame>
    );
  }

  if (kind === "return") {
    return (
      <IllustrationFrame>
        <div className="mini-calendar">
          <span>Return</span>
          <strong>14</strong>
        </div>
        <svg viewBox="0 0 96 72" role="img" aria-hidden="true">
          <path className="ink-line" d="M62 22H38c-9 0-16 7-16 16s7 16 16 16h22" />
          <path className="ink-line" d="M43 13 30 22l13 9" />
        </svg>
      </IllustrationFrame>
    );
  }

  if (kind === "refund") {
    return (
      <IllustrationFrame>
        <svg viewBox="0 0 120 76" role="img" aria-hidden="true">
          <circle className="soft-fill" cx="40" cy="38" r="18" />
          <circle className="ink-line-fill" cx="40" cy="38" r="18" />
          <path className="ink-line" d="M40 28v20M32 38h16" />
          <path className="ink-line" d="M67 31h28M67 45h20" />
        </svg>
      </IllustrationFrame>
    );
  }

  if (kind === "receipt") {
    return (
      <IllustrationFrame>
        <div className="mini-receipt">
          <span />
          <span />
          <span />
          <strong />
        </div>
      </IllustrationFrame>
    );
  }

  if (kind === "warranty") {
    return (
      <IllustrationFrame>
        <svg viewBox="0 0 120 76" role="img" aria-hidden="true">
          <rect className="ink-line-fill" x="30" y="16" width="60" height="48" rx="10" />
          <path className="ink-line" d="M42 31h36M42 44h22" />
          <path className="ink-line" d="M72 50l6 6 12-16" />
        </svg>
      </IllustrationFrame>
    );
  }

  return (
    <IllustrationFrame>
      <svg viewBox="0 0 120 76" role="img" aria-hidden="true">
        <rect className="ink-line-fill" x="32" y="33" width="56" height="31" rx="10" />
        <path className="ink-line" d="M45 33v-8c0-9 6-15 15-15s15 6 15 15v8" />
        <path className="ink-line" d="M60 44v10" />
      </svg>
    </IllustrationFrame>
  );
}

export function ReceiptFlowIllustration() {
  return (
    <div className="receipt-flow" aria-label="Orderly workflow from capture to reminders">
      {flow.map((item) => (
        <article className="receipt-slip" key={item.label}>
          <span>{item.mark}</span>
          <strong>{item.label}</strong>
          <p>{item.detail}</p>
        </article>
      ))}
    </div>
  );
}
