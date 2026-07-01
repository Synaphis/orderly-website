type Aura = "mint" | "peach" | "lavender" | "sky" | "rose";

const flow = [
  { label: "Capture", detail: "receipt saved", aura: "mint" },
  { label: "Confirm", detail: "AI reviewed", aura: "peach" },
  { label: "Remember", detail: "dates visible", aura: "lavender" }
] as const;

export function AtmosphericHero() {
  return (
    <div className="atmospheric-hero" aria-hidden="true">
      <span className="wash wash-mint" />
      <span className="wash wash-peach" />
      <span className="wash wash-lavender" />
      <div className="hero-editorial-card">
        <p>Order memory</p>
        <div className="editorial-lines">
          <span />
          <span />
          <span />
        </div>
        <strong>Returns, refunds, receipts.</strong>
      </div>
    </div>
  );
}

export function FeatureAura({ aura }: { aura: Aura }) {
  return (
    <div className={`feature-aura aura-${aura}`} aria-hidden="true">
      <span />
    </div>
  );
}

export function ReceiptFlowIllustration() {
  return (
    <div className="receipt-flow" aria-label="Orderly workflow from capture to reminders">
      {flow.map((item) => (
        <article className={`receipt-slip aura-${item.aura}`} key={item.label}>
          <span>{item.label}</span>
          <strong>{item.detail}</strong>
        </article>
      ))}
    </div>
  );
}
