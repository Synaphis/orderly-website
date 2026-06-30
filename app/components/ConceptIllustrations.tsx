type IllustrationKind = "capture" | "return" | "refund" | "receipt" | "warranty" | "privacy";

export function ConceptHero() {
  return (
    <div className="concept-hero" role="img" aria-label="Minimal illustration of receipts, packages, returns, and reminders">
      <svg viewBox="0 0 520 360" aria-hidden="true">
        <rect className="hero-paper" x="74" y="54" width="262" height="224" rx="18" />
        <path className="hero-edge" d="M110 106h130M110 138h172M110 170h108M110 224h154" />
        <path className="hero-blue-line" d="M110 254h190" />
        <g className="hero-mark package-mark" transform="translate(318 92)">
          <rect x="0" y="0" width="94" height="82" rx="14" />
          <path d="M22 31l25-14 25 14v28L47 73 22 59z" />
          <path d="M22 31l25 14 25-14M47 45v28" />
        </g>
        <g className="hero-mark return-mark" transform="translate(328 202)">
          <rect x="0" y="0" width="112" height="72" rx="14" />
          <path d="M72 24H43a17 17 0 1 0 0 34h38" />
          <path d="M51 13L34 24l17 12" />
        </g>
        <g className="hero-mark reminder-mark" transform="translate(42 206)">
          <rect x="0" y="0" width="102" height="76" rx="14" />
          <path d="M28 36h46M28 52h28" />
          <circle cx="76" cy="26" r="8" />
        </g>
        <path className="hero-blue-dot" d="M386 120h22M397 109v22" />
      </svg>
    </div>
  );
}

export function LineIllustration({ kind }: { kind: IllustrationKind }) {
  if (kind === "capture") {
    return (
      <svg className="line-art" viewBox="0 0 120 88" aria-hidden="true">
        <rect x="16" y="14" width="64" height="48" rx="8" />
        <path d="M30 30h30M30 44h38" />
        <path className="blue-stroke" d="M74 55l24 11-15 7-8 15-11-24z" />
      </svg>
    );
  }

  if (kind === "return") {
    return (
      <svg className="line-art" viewBox="0 0 120 88" aria-hidden="true">
        <rect x="20" y="18" width="80" height="52" rx="9" />
        <path className="blue-stroke" d="M76 32H48a15 15 0 1 0 0 30h34" />
        <path className="blue-stroke" d="M54 22L40 32l14 10" />
      </svg>
    );
  }

  if (kind === "refund") {
    return (
      <svg className="line-art" viewBox="0 0 120 88" aria-hidden="true">
        <circle cx="60" cy="44" r="28" />
        <path className="blue-stroke" d="M60 25v38M47 35c0-10 25-10 25 1 0 13-28 7-28 20 0 11 29 10 29-1" />
      </svg>
    );
  }

  if (kind === "receipt") {
    return (
      <svg className="line-art" viewBox="0 0 120 88" aria-hidden="true">
        <path d="M34 12h52v64l-9-6-8 6-9-6-8 6-9-6-9 6z" />
        <path d="M48 32h24M48 46h28" />
        <path className="blue-stroke" d="M48 60h18" />
      </svg>
    );
  }

  if (kind === "warranty") {
    return (
      <svg className="line-art" viewBox="0 0 120 88" aria-hidden="true">
        <path d="M60 14l34 13v20c0 20-14 30-34 37-20-7-34-17-34-37V27z" />
        <path className="blue-stroke" d="M44 46l12 12 22-26" />
      </svg>
    );
  }

  return (
    <svg className="line-art" viewBox="0 0 120 88" aria-hidden="true">
      <rect x="32" y="38" width="56" height="36" rx="8" />
      <path d="M44 38V27a16 16 0 0 1 32 0v11" />
      <circle className="blue-fill" cx="60" cy="56" r="4" />
    </svg>
  );
}

export function ReceiptFlowIllustration() {
  return (
    <div className="receipt-flow" aria-label="Illustration of receipt details becoming reminders">
      {["Screenshot", "Confirm", "Remember"].map((label, index) => (
        <div className="receipt-slip" key={label}>
          <span>{label}</span>
          <div className="slip-lines">
            <i />
            <i />
            <i />
          </div>
          <strong>{index === 0 ? "Capture" : index === 1 ? "Edit" : "Remind"}</strong>
        </div>
      ))}
    </div>
  );
}
