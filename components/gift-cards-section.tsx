/** Brand tiles for Indonesia. Colors are approximate brand cues, not official logos. */
const BRANDS = [
  { name: "Tokopedia", category: "Marketplace", tint: "from-[#2d8f47] to-[#1e6b35]" },
  { name: "Traveloka", category: "Travel & hotels", tint: "from-[#0ea5e9] to-[#0369a1]" },
  { name: "Shopee", category: "Shopping", tint: "from-[#ee4d2d] to-[#c41e0f]" },
  { name: "Grab", category: "Mobility & food", tint: "from-[#00b14f] to-[#007a37]" },
  { name: "Bukalapak", category: "Commerce", tint: "from-[#e31e52] to-[#9f1239]" },
  { name: "OVO", category: "Wallet top-up", tint: "from-[#5b2d8f] to-[#3b1f5c]" },
  { name: "Indomaret", category: "Retail vouchers", tint: "from-[#e11d48] to-[#9f1239]" },
  { name: "Telkomsel", category: "Prepaid & data", tint: "from-[#ef4444] to-[#b91c1c]" }
] as const;

type Props = { className?: string };

export function GiftCardsSection({ className = "mt-12" }: Props) {
  return (
    <section className={className} aria-labelledby="gift-cards-heading">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h2 id="gift-cards-heading" className="text-lg font-black text-paysats-text">
            Gift cards & e-vouchers
          </h2>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-paysats-text-muted">
            Top brands for everyday life in Indonesia: marketplaces, travel, mobility, and daily retail. Pay with LN when
            this catalog goes live.
          </p>
        </div>
        <span className="rounded-pill border border-paysats-accent/40 bg-paysats-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-paysats-accent">
          Coming soon
        </span>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {BRANDS.map((b) => (
          <article
            key={b.name}
            className={`relative overflow-hidden rounded-card border border-white/10 bg-gradient-to-br ${b.tint} p-4 shadow-tile`}
          >
            <div className="absolute inset-0 bg-black/25" aria-hidden />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/90">{b.category}</p>
              <p className="mt-2 text-lg font-black text-white drop-shadow-sm">{b.name}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
