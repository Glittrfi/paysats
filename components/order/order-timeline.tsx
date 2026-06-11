import { ORDER_STATES, OrderState, STATE_LABELS } from "@/lib/state";

export function OrderTimeline({ state }: { state: OrderState }) {
  const currentIndex = ORDER_STATES.indexOf(state);

  return (
    <div className="rounded-card border border-paysats-border bg-paysats-surface p-4 shadow-card">
      <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-paysats-text-muted">
        Order state
      </h3>
      <ul className="space-y-1">
        {ORDER_STATES.map((step, index) => {
          const done = index < currentIndex;
          const active = index === currentIndex;
          return (
            <li
              key={step}
              className="flex items-center gap-3 py-1.5 text-sm"
            >
              <span
                className={`grid h-5 w-5 shrink-0 place-items-center rounded-full text-[11px] font-bold ${
                  done
                    ? "bg-paysats-accent/15 text-paysats-accent"
                    : active
                      ? "border-2 border-paysats-accent text-paysats-accent"
                      : "border border-paysats-border text-paysats-text-faint"
                }`}
                aria-hidden
              >
                {done ? "✓" : ""}
              </span>
              <span
                className={
                  active
                    ? "font-bold text-paysats-text"
                    : done
                      ? "text-paysats-text"
                      : "text-paysats-text-muted"
                }
              >
                {STATE_LABELS[step]}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
