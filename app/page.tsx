import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { site } from "./lib/site";

const features = [
  {
    title: "Screenshot import",
    text: "Capture an order page, receipt, shipping update, or return label and turn it into organized details.",
    illustration: "/illustrations/screenshot-import.svg"
  },
  {
    title: "Return windows",
    text: "See what can still go back, what needs action soon, and which store policy applies.",
    illustration: "/illustrations/return-window.svg"
  },
  {
    title: "Refund follow-up",
    text: "Track credits, return labels, package drop-offs, and support notes until the money lands.",
    illustration: "/illustrations/refund-follow-up.svg"
  },
  {
    title: "Receipt memory",
    text: "Save receipts, warranty dates, order numbers, and proof of purchase for the things that matter.",
    illustration: "/illustrations/receipt-memory.svg"
  },
  {
    title: "Warranty dates",
    text: "Remember coverage windows for electronics, appliances, bags, shoes, and the purchases worth protecting.",
    illustration: "/illustrations/warranty-date.svg"
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

const purchaseTypes = [
  {
    title: "Fashion hauls",
    text: "Keep sizes, return dates, labels, and refund status together when one order becomes five decisions.",
    icon: "/illustrations/fashion-hauls.svg"
  },
  {
    title: "Beauty restocks",
    text: "Save receipts, reorder proof, delivery notes, and support screenshots for items you buy again.",
    icon: "/illustrations/beauty-restocks.svg"
  },
  {
    title: "Holiday gifts",
    text: "Remember what arrived, what was returned, and which receipts still matter after the rush.",
    icon: "/illustrations/holiday-gifts.svg"
  },
  {
    title: "Warranty purchases",
    text: "Hold onto order numbers, coverage dates, and proof of purchase for electronics and appliances.",
    icon: "/illustrations/warranty-purchases.svg"
  },
  {
    title: "Problem orders",
    text: "Track refund promises, support notes, carrier updates, and bank follow-up in one place.",
    icon: "/illustrations/problem-orders.svg"
  }
];

function AppleLogo() {
  return (
    <svg
      width="15"
      height="18"
      viewBox="0 0 384 512"
      aria-hidden="true"
      focusable="false"
      style={{
        display: "block",
        flexShrink: 0
      }}
    >
      <path
        fill="currentColor"
        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.2 14.4 81 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82 102.6-118.8-65.2-30.7-61.7-90.3-61.7-92.2zM262.1 104.5c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero-section">
          <div className="hero-copy">
           

            <h1>{site.tagline}</h1>

            <p className="hero-subtitle">
              Save proof from any order. Orderly keeps deliveries, return
              windows, refunds, receipts, and warranties easy to find.
            </p>

            <div className="hero-actions">
              <a className="button primary" href={site.appUrl}>
                Get Orderly
              </a>

              
            </div>
          </div>

          <div
            style={{
              width: "100%",
              minHeight: 420,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img
              src="/illustrations/try-2.png"
              alt=""
              aria-hidden="true"
              style={{
                width: "100%",
                maxWidth: 520,
                height: "auto",
                display: "block"
              }}
            />
          </div>
        </section>

        <section className="section intro-band">
          <h2>
            Shopping is easy. Remembering everything after checkout is the hard
            part.
          </h2>

          <p>
            Orderly turns scattered order emails, screenshots, store portals,
            shipping pages, and return labels into one private place to check
            what arrived, what can go back, and what still needs a refund.
          </p>
        </section>

        <section className="section feature-section" id="features">
          <div className="section-head">
            <h2>Built for the after-buying mess.</h2>

            <p>
              Every feature starts from the same simple idea: save the proof
              once, then let Orderly keep the important dates visible.
            </p>
          </div>

          <div className="feature-list">
            {features.map((feature) => (
              <article className="feature-item" key={feature.title}>
                <div className="feature-copy">
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>

                <div
                  className="feature-art"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <img
                    src={feature.illustration}
                    alt=""
                    aria-hidden="true"
                    style={{
                      width: "100%",
                      maxWidth: 280,
                      height: "auto",
                      display: "block"
                    }}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section process-section">
          <div className="process-copy">
            <h2>Capture effortless. Correction easy. Reminders useful.</h2>

            <p>
              Orderly stays practical: import what you already have, confirm
              what the AI read, then act before a window closes.
            </p>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img
              src="/illustrations/receipt-flow.svg"
              alt=""
              aria-hidden="true"
              style={{
                width: "100%",
                maxWidth: 560,
                height: "auto",
                display: "block"
              }}
            />
          </div>

          <div className="process-list">
            {steps.map((step, index) => (
              <article key={step.title}>
                <span
                  style={{
                    display: "inline-flex",
                    width: "fit-content",
                    marginBottom: 18,
                    fontSize: 12,
                    letterSpacing: "0.12em",
                    color: "#8b6262"
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section information-section">
          <div>
            <h2>Order details without digging through five different places.</h2>

            <div
              style={{
                width: "100%",
                maxWidth: 360,
                marginTop: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img
                src="/illustrations/order-details.svg"
                alt=""
                aria-hidden="true"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block"
                }}
              />
            </div>
          </div>

          <div className="information-copy">
            <p>
              Use Orderly when a purchase creates follow-up: a tracking page, a
              return deadline, a refund promise, a receipt, or a warranty date.
            </p>

            <p>
              Keep the important proof in one calm place, without going back
              through emails, screenshots, store accounts, and support threads.
            </p>
          </div>
        </section>

        <section className="section audience-section">
          <div className="section-head">
            <h2>
              One timeline for the purchases that scatter across every store.
            </h2>

            <p>
              Orderly is for the orders that keep producing little tasks after
              checkout. It keeps the proof and the next action together.
            </p>
          </div>

          <div className="purchase-list">
            {purchaseTypes.map((item) => (
              <article key={item.title}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    flex: "0 0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <img
                    src={item.icon}
                    alt=""
                    aria-hidden="true"
                    style={{
                      width: 42,
                      height: 42,
                      display: "block"
                    }}
                  />
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          style={{
            background: "#fff",
            color: "#541414",
            margin: 0,
            padding: "88px 24px 96px",
            textAlign: "center",
            borderTop: "1px solid #d0d0c8"
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#8b6262"
            }}
          >
            Orderly for iPhone
          </p>

          <h2
            style={{
              maxWidth: 620,
              margin: "16px auto 0",
              fontSize: "clamp(30px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontWeight: 520,
              color: "#541414"
            }}
          >
            Keep every order trail in one place.
          </h2>

          <p
            style={{
              maxWidth: 520,
              margin: "18px auto 0",
              fontSize: 16,
              lineHeight: 1.65,
              color: "#5e3434"
            }}
          >
            Track deliveries, returns, refunds, receipts, and warranty dates
            without digging through scattered screenshots and emails.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 32
            }}
          >
            <a
              href={site.appUrl}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                minHeight: 46,
                padding: "0 22px",
                borderRadius: 0,
                background: "#541414",
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "-0.01em",
                textDecoration: "none",
                border: "1px solid #541414",
                boxShadow: "none"
              }}
            >
              <AppleLogo />
              <span>Download on the App Store</span>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
