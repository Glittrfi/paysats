import Link from "next/link";
import { PaysatsLogo } from "@/components/paysats-logo";
import { SAVE_IN_BITCOIN_URL } from "@/lib/links";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-paysats-border bg-paysats-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-lg items-center justify-between gap-3 px-4 py-3">
        <Link href="/offramp" className="tap-target flex min-w-0 items-center" aria-label="PaySats home">
          <PaysatsLogo className="text-xl" />
        </Link>
        <nav className="flex shrink-0 items-center gap-1.5">
          <Link
            href="/offramp#merchant"
            className="tap-target hidden rounded-pill px-3 py-2 text-sm font-semibold text-paysats-text-muted transition hover:text-paysats-text sm:inline-flex"
          >
            Become a Merchant
          </Link>
          <a
            href={SAVE_IN_BITCOIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="tap-target gold-gradient inline-flex items-center rounded-pill px-4 py-2 text-sm font-bold text-white shadow-tile transition"
          >
            Save in Bitcoin
          </a>
        </nav>
      </div>
    </header>
  );
}
