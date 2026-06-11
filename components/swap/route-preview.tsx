"use client";

import { Button } from "@/components/ui/button";

interface Props {
  satsAmount: number;
  idrAmount: number;
  merchant: string;
  onConfirm: () => void;
  loading?: boolean;
  confirmLabel?: string;
}

export function RoutePreview({
  satsAmount,
  idrAmount,
  merchant,
  onConfirm,
  loading,
  confirmLabel = "Confirm and Start"
}: Props) {
  const steps = [
    "Sats (LN) → USDT (Arbitrum) via Boltz",
    "USDT → USDC (Base) via 0x / Uniswap",
    "USDC → IDR via p2p.me",
  ];

  return (
    <div className="space-y-4">
      <div className="rounded-card border border-paysats-border bg-paysats-surface shadow-card">
        <div className="border-b border-paysats-border px-4 py-3">
          <p className="text-xs font-bold uppercase tracking-wide text-paysats-text-muted">
            Route preview
          </p>
        </div>

        <ol className="space-y-3 px-4 py-4">
          {steps.map((step, i) => (
            <li key={step} className="flex items-center gap-3 text-sm text-paysats-text">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-paysats-surface-muted text-xs font-black text-paysats-text-muted">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>

        <div className="divide-y divide-paysats-line border-t border-paysats-border px-4">
          <div className="flex items-baseline justify-between gap-3 py-2.5">
            <span className="text-sm text-paysats-text-muted">Merchant</span>
            <span className="text-sm font-bold text-paysats-text">{merchant}</span>
          </div>
          <div className="flex items-baseline justify-between gap-3 py-2.5">
            <span className="text-sm text-paysats-text-muted">Estimated out</span>
            <span className="text-sm font-bold text-paysats-accent">
              Rp {idrAmount.toLocaleString("id-ID")}
            </span>
          </div>
          <div className="flex items-baseline justify-between gap-3 py-2.5">
            <span className="text-sm text-paysats-text-muted">Sats debit</span>
            <span className="text-sm font-bold text-paysats-text">
              {satsAmount.toLocaleString()} sats
            </span>
          </div>
        </div>
      </div>
      <Button className="gold-gradient" loading={loading} onClick={onConfirm}>
        {confirmLabel}
      </Button>
    </div>
  );
}
