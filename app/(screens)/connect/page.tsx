import { InvoiceFundForm } from "@/components/wallet/invoice-fund-form";

export default function ConnectPage() {
  return (
    <main className="app-shell">
      <h1 className="mb-2 text-3xl font-black tracking-tight text-paysats-text">Fund with Lightning</h1>
      <p className="mb-6 text-sm leading-relaxed text-paysats-text-muted">
        Enter an amount in sats to generate a Lightning invoice. Pay with any wallet to continue.
      </p>
      <InvoiceFundForm />
    </main>
  );
}
