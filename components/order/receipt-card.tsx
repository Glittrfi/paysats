interface Props {
  sats: number;
  usdt: number;
  usdc: number;
  idr: number;
  merchant: string;
  boltzTxHash?: string;
  swapTxHash?: string;
  p2pmOrderId?: string;
}

function truncateMiddle(value: string, head = 8, tail = 6): string {
  if (value.length <= head + tail + 1) return value;
  return `${value.slice(0, head)}…${value.slice(-tail)}`;
}

function AmountRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 py-2">
      <span className="text-sm text-paysats-text-muted">{label}</span>
      <span className="text-sm font-bold text-paysats-text">{value}</span>
    </div>
  );
}

function RefRow({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex items-center justify-between gap-3 py-2">
      <span className="text-sm text-paysats-text-muted">{label}</span>
      <span className="font-mono text-xs text-paysats-text">
        {value ? truncateMiddle(value) : "—"}
      </span>
    </div>
  );
}

export function ReceiptCard(props: Props) {
  return (
    <div className="overflow-hidden rounded-card border border-paysats-border bg-paysats-surface shadow-card">
      <div className="flex items-center gap-3 border-b border-paysats-border bg-paysats-surface-muted px-4 py-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-paysats-success/15 text-paysats-success">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
            <path
              d="M20 6L9 17l-5-5"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div>
          <p className="text-sm font-black text-paysats-text">Settlement receipt</p>
          <p className="text-xs text-paysats-text-muted">{props.merchant}</p>
        </div>
      </div>

      <div className="divide-y divide-paysats-line px-4">
        <AmountRow label="Sats in" value={`${props.sats.toLocaleString()} sats`} />
        <AmountRow label="USDT received" value={props.usdt.toFixed(2)} />
        <AmountRow label="USDC swapped" value={props.usdc.toFixed(2)} />
        <div className="flex items-baseline justify-between gap-3 py-2.5">
          <span className="text-sm font-semibold text-paysats-text">Rupiah out</span>
          <span className="text-base font-black text-paysats-accent">
            Rp {props.idr.toLocaleString("id-ID")}
          </span>
        </div>
      </div>

      <div className="divide-y divide-paysats-line border-t border-paysats-border px-4">
        <RefRow label="Boltz tx" value={props.boltzTxHash} />
        <RefRow label="Swap tx" value={props.swapTxHash} />
        <RefRow label="p2p.me order" value={props.p2pmOrderId} />
      </div>
    </div>
  );
}
