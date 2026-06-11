---
description: >-
  Deposit channels, payout markets, and which PaySats primitives each rail
  supports today.
icon: route
---

# Supported rails

Rails power the **bank settlement** primitive today. **DCA** and **BTC-backed borrowing** will reuse overlapping on-chain infrastructure on **BNB Chain** as those primitives ship.

## Primitive coverage

| Primitive | Live rails today | Notes |
|-----------|------------------|-------|
| **Bank settlement** | Lightning, cbBTC (Base), BTCB (BNB) → IDR banks / e-wallets | Full API + MCP |
| **Agentic DCA into BTC** | BTCB on BNB (deposit only) | Swap / schedule API not shipped |
| **BTC-backed borrowing** | — | Planned on BNB Chain |

## Markets

| Market | Currency | Payout status |
|--------|----------|---------------|
| Indonesia | IDR | **Live** |
| Philippines | PHP | Planned |
| Vietnam | VND | Planned |
| Thailand | THB | Planned |
| India | INR | Planned |

Within each live market, banks and e-wallets are always served by `GET /v1/payout/methods`. **Do not hard-code** `bankCode` or `bankName`.

## Bitcoin in: deposit channels

| `depositChannel` | Chain | Token | Notes |
|------------------|-------|-------|-------|
| `lightning` (default) | Lightning Network | BTC (sats) | Pay the returned **BOLT11** invoice. Fastest; native invoice flow. Stack detail: [Tether Lightning rails](../integrations/tether-lightning.md). |
| `cbbtc` | Base (chainId 8453) | **cbBTC** (8 decimals) | Send cbBTC to the per-tenant ERC-4337 safe from `GET /v1/deposit/rails`. |
| `btcb` | BNB Chain (chainId 56) | **BTCB** (18 decimals) | Send BTCB to the per-tenant ERC-4337 safe from `GET /v1/deposit/rails`. Primary chain for PaySats primitives. |

{% hint style="info" %}
**Coming on the deposit side:** native on-chain BTC via **Spark** (`getSingleUseDepositAddress` / `getStaticDepositAddress`), plus other wrapped BTC variants (WBTC, ZBTC). Backend wiring exists; SDK surface is being finalized.
{% endhint %}

## Local fiat out: payout methods

**Indonesia (IDR)** is live today. **PHP**, **VND**, **THB**, and **INR** are on the roadmap.

Each payout method entry:

```ts
type PayoutMethod = {
  bankCode: string;
  bankName: string;
  maxAmountTransfer?: number | string | null;
  kind: "bank" | "ewallet";
};
```

### Banks (`kind: "bank"`)

**Indonesia (live):** BCA (code `014`, most common payout target), Mandiri, BRI, BNI, CIMB Niaga, Permata, Danamon, and the rest of the Bank Indonesia member list, routed through IDRX redeem partners.

**India (planned):** HDFC, ICICI, SBI, Axis, Kotak, and the IFSC list, via INR-pegged stablecoin redeem and UPI / IMPS rails.

**Philippines, Vietnam, Thailand (planned):** local bank lists via market-specific stablecoin redeem partners.

`recipientDetails` for banks must be a **digits-only account number** (or market-specific identifier once each region launches).

### E-wallets (`kind: "ewallet"`)

**Indonesia (live, IDRX e-wallet rails):**

* **GoPay**
* **OVO**
* **DANA**
* **Jago**
* **ShopeePay**

**India (planned):** Paytm, PhonePe, Google Pay (UPI VPA routing).

**Philippines, Vietnam, Thailand (planned):** market-specific e-wallet partners.

`recipientDetails` for e-wallets must be a **mobile number** in E.164 (`+628123456789`) or local format (`08123456789`). Server-side validation returns actionable errors.

## Fees

{% hint style="warning" %}
A fixed fiat settlement fee applies for **bank** and **e-wallet** payout in Indonesia (**Rp 5,000** today). Equivalent fees will apply per market at launch. Network and swap costs are bundled into the quote locked at order creation.
{% endhint %}

## Quick reference

{% columns %}
{% column %}
**Simplest path** (first integration)

* Deposit: `lightning`
* Payout: `bank` → BCA
* Amount basis: `idrAmount`

Returns a BOLT11 invoice; payer pays; IDR lands in the named bank. Lightning detail: [Tether Lightning rails](../integrations/tether-lightning.md).
{% endcolumn %}

{% column %}
**BNB Chain path** (BTCB holders)

* Deposit: `btcb`
* Payout: `ewallet` → GoPay / OVO
* Amount basis: `idrAmount`

Returns an EVM deposit address. Pipeline swaps via IDRX and redeems to local fiat.
{% endcolumn %}
{% endcolumns %}

Next: [Product primitives](primitives.md) · [Settlement quickstart](../getting-started/quickstart.md) · [Deposit rails](../developers/deposit-rails.md) · [Payout methods](../developers/payout-methods.md)
