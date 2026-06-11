---
description: >-
  The case for PaySats. Southeast Asian currency bleed, informal BTC-to-fiat
  risk, and why agentic settlement on BNB Chain matters.
icon: shield-halved
---

# Why PaySats

Fiat in Southeast Asia is in a slow bleed against the dollar. **IDR**, **PHP**, **VND**, and **THB** are structurally weaker over time, while **BTC** and dollar stablecoins like **USDC** preserve purchasing power. PaySats exists so users and AI agents can **DCA out of local currency**, **borrow against BTC collateral**, and **settle into named bank accounts**, programmatically, with an audit trail.

Moving value between **Bitcoin** and **local fiat** today is still mostly informal P2P, manual CEX withdrawals, and inbound transfers from strangers. Every step is a risk. PaySats replaces that with three **BNB Chain primitives**: agentic DCA, BTC-backed borrowing, and bank settlement. See [Product primitives](primitives.md).

The concrete scam and freeze examples below come from our first live market (**Indonesia, IDR**). The same patterns show up across **PHP**, **VND**, **THB**, and **INR** as we expand.

## The problems we actually see

{% hint style="danger" %}
**P2P scams are the default experience for small BTC to local-fiat deals.**

Buyers and sellers meet on Telegram, WhatsApp groups, Facebook Marketplace, or unmoderated OTC channels. Common outcomes:

* **Fake transfer receipts**, a forged BCA / Mandiri screenshot while the sender never actually pushed funds.
* **Chargeback-style reversals**, inbound transfer is later reversed by the sender's bank, leaving the BTC seller out of pocket after they already released sats.
* **"Middleman" impersonation**, someone pretending to be an escrow agent disappears with the sats.
* **Price manipulation**, ad-hoc rates applied mid-trade once the counterparty has already committed.

There is **no audit trail**, **no settlement guarantee**, and **no recourse**.
{% endhint %}

{% hint style="warning" %}
**Bank accounts and e-wallets get frozen.**

Local banks and e-wallets routinely **freeze or block accounts** that receive multiple unverified inbound transfers from strangers, which is exactly what a P2P BTC trade looks like to a fraud engine. This is true in Indonesia (BCA, Mandiri, BRI, GoPay, OVO, DANA) and in every market we are expanding into: Philippines, Vietnam, Thailand, and India.

Typical triggers:

* Repeated inbound transfers from new, unrelated senders.
* Amounts and memos that match patterns flagged by local AML rules (PPATK in Indonesia, and equivalents elsewhere).
* A single complaint from one of those senders later claiming fraud.

Once frozen, unfreezing is a **manual, weeks-long process** involving branch visits, documentation, and sometimes regulator review. Your entire payout rail disappears overnight.
{% endhint %}

{% hint style="warning" %}
**Manual exchange babysitting eats the spread on small amounts.**

For **sub-dollar to everyday amounts**, the user experience today is:

1. Sell BTC on a CEX or P2P desk.
2. Wait for the fiat leg to clear (sometimes hours).
3. Manually withdraw to a bank / e-wallet.
4. Hope the withdrawal isn't flagged.

Every one of those steps has a **spread, a fee, and a delay**, and the user has to physically sit in front of the trade. **Agents cannot automate** this without a settlement API.
{% endhint %}

{% hint style="danger" %}
**No transparent settlement for merchants or agents.**

A merchant or agent moving BTC to local fiat has no consistent way to prove which on-chain payment corresponds to which bank credit. There is no single order ID, no invoice linkage, no explorer link tied to a payout reference.
{% endhint %}

## What PaySats replaces that with

{% columns %}
{% column %}
### Without PaySats

* P2P chat groups and forged receipts
* Inbound transfers from strangers → frozen accounts
* Manual CEX withdrawals, watched by hand
* No single reference linking BTC payment to fiat payout
* FX drift between "quote" and "settled"
* Agents cannot settle autonomously into local accounts
{% endcolumn %}

{% column %}
### With PaySats

* **Bank settlement (live):** one API call creates an order; funds move through licensed redeem partners (IDRX in Indonesia).
* **One `orderId`** ties deposit, on-chain swaps, stablecoin redeem, and final bank / e-wallet credit.
* **Live quote** locked at order creation.
* **MCP** for AI agents to quote, list rails, and create settlement orders today.
* **DCA and borrowing:** programmatic BTC accumulation and IDRX borrow against collateral on BNB Chain.
* Lightning / USDT legs documented under [Tether Lightning rails](../integrations/tether-lightning.md).
{% endcolumn %}
{% endcolumns %}

## Who PaySats is for

* **Users** who want to DCA out of weakening local currency into BTC and settle back to bank accounts when needed, without P2P counterparty risk.
* **AI agents** using **MCP** (and **x402**-compatible rails on the roadmap) to move BTC or USDT into **IDR** today and **PHP / VND / THB / INR** next.
* **Local merchants** accepting Bitcoin but wanting local fiat in an existing bank or e-wallet, without running swap infra.
* **Apps and wallets** that want a single `createOfframpOrder` instead of wiring Boltz, LiFi, IDRX redeem, and payout APIs themselves.

{% hint style="success" %}
**Bank of AI** solves agent identity and on-chain payments. **PaySats** is the missing last-mile layer that gets those flows into **IDR** today, and into the rest of Southeast Asia plus **India** next.
{% endhint %}

## How we stay out of the risky zone

* **No anonymous inbound cash to your account.** Settlement originates from **licensed redeem partners** (IDRX in Indonesia; local stablecoin partners in each new market), not from anonymous P2P senders.
* **Every leg has an on-chain or ledger reference.** See [Example end-to-end flow](../reference/example-flow.md). Lightning-specific proof paths: [Tether Lightning rails](../integrations/tether-lightning.md).
* **Operator funds move through TWDK smart accounts** with clear per-chain safe addresses. See [Deposit rails](../developers/deposit-rails.md).
* **Redacted by default.** Recipient bank account numbers and holder names are stripped from logs; only the tenant that created the order can retrieve it via the API.

Next: [Product primitives](primitives.md) · [How it works](how-it-works.md) · [Settlement quickstart](../getting-started/quickstart.md)
