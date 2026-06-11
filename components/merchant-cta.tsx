type Props = { className?: string };

export function MerchantCta({ className = "mt-12 scroll-mt-24" }: Props) {
  return (
    <section
      id="merchant"
      className={`rounded-card border border-paysats-accent/30 bg-gradient-to-br from-paysats-accent/10 via-paysats-surface to-paysats-surface p-6 shadow-card ${className}`}
      aria-labelledby="merchant-heading"
    >
      <h2 id="merchant-heading" className="text-lg font-black text-paysats-text">
        Become a merchant
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-paysats-text-muted">
        Accept Lightning at checkout (sats in), settle to rupiah out, and give customers a fast path from global bitcoin liquidity to
        local payment rails. We are onboarding partners who want QRIS-ready flows and transparent settlement.
      </p>
      <a
        href="mailto:merchant@paysats.id?subject=Paysats%20merchant%20inquiry"
        className="tap-target mt-5 inline-flex w-full items-center justify-center rounded-control gold-gradient px-4 py-3 text-center text-sm font-black text-white sm:w-auto"
      >
        Talk to us
      </a>
    </section>
  );
}
