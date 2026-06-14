"use client";

import { useState } from "react";
import QRCode from "react-qr-code";
import { Button } from "@/components/ui/button";
import { formatSatsAsBtc } from "@/lib/format-sats-btc";

export type EvmDepositInfo = {
  channel: string;
  chainId: number;
  chainName: string;
  tokenSymbol: string;
  tokenAddress: string;
  toAddress: string;
  decimals: number;
  qrValue: string;
};

type Props = {
  deposit: EvmDepositInfo;
  /** Sats equivalent from order (for reference). */
  satAmount?: number;
  idrAmount?: number;
};

export function EvmDepositQrDisplay({ deposit, satAmount, idrAmount }: Props) {
  const [copied, setCopied] = useState<"addr" | "token" | "qr" | null>(null);

  const copy = async (field: "addr" | "token" | "qr", text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  const explorerBase =
    deposit.chainId === 8453
      ? "https://basescan.org"
      : deposit.chainId === 56
        ? "https://bscscan.com"
        : null;

  const ch = String(deposit.channel || "").toLowerCase();
  const isWrappedBtcDeposit = ch === "cbbtc" || ch === "btcb";
  const showAmountRow =
    (idrAmount != null && idrAmount > 0) ||
    (isWrappedBtcDeposit && satAmount != null && satAmount > 0);

  return (
    <div className="flex flex-col items-center gap-4 rounded-card border border-paysats-border bg-paysats-surface p-4 shadow-card">
      <p className="text-center text-xs uppercase tracking-wide text-paysats-text-muted">
        Send {deposit.tokenSymbol}
      </p>
      <p className="text-center text-sm text-paysats-text">
        {deposit.chainName} · chain {deposit.chainId}
      </p>
      {showAmountRow ? (
        <p className="text-center text-sm text-paysats-text">
          {idrAmount != null && idrAmount > 0 ? (
            <>Order ≈ Rp {idrAmount.toLocaleString("id-ID")}</>
          ) : null}
          {satAmount != null && satAmount > 0 ? (
            <>
              {idrAmount != null && idrAmount > 0 ? " · " : null}
              {isWrappedBtcDeposit ? (
                <>
                  ≈ {formatSatsAsBtc(satAmount)} BTC
                  <span className="text-paysats-text-muted">
                    {" "}
                    ({satAmount.toLocaleString("id-ID")} sats)
                  </span>
                </>
              ) : idrAmount != null && idrAmount > 0 ? (
                <>{satAmount.toLocaleString("id-ID")} sats</>
              ) : null}
            </>
          ) : null}
        </p>
      ) : null}
      <div className="rounded-control bg-white p-3">
        <QRCode value={deposit.qrValue} size={220} level="M" />
      </div>
      <p className="text-center text-[11px] text-paysats-text-muted">
        QR encodes <span className="font-mono text-paysats-text-muted">{deposit.qrValue}</span> — wallet
        opens send to this Safe on the correct network.
      </p>
      <Button
        type="button"
        variant="secondary"
        onClick={() => copy("qr", deposit.qrValue)}
      >
        {copied === "qr" ? "Copied" : "Copy QR payload"}
      </Button>

      <div className="w-full space-y-2 rounded-control border border-paysats-border bg-paysats-surface-muted p-3 text-left">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-paysats-text-muted">Safe (receive)</p>
        <p className="break-all font-mono text-[11px] text-paysats-text">{deposit.toAddress}</p>
        <Button
          type="button"
          variant="ghost"
          className="text-xs"
          onClick={() => copy("addr", deposit.toAddress)}
        >
          {copied === "addr" ? "Copied" : "Copy address"}
        </Button>
        {explorerBase ? (
          <a
            href={`${explorerBase}/address/${deposit.toAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-xs font-semibold text-paysats-accent underline"
          >
            View on explorer
          </a>
        ) : null}
      </div>

      <div className="w-full space-y-2 rounded-control border border-paysats-border bg-paysats-surface-muted p-3 text-left">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-paysats-text-muted">Token contract</p>
        <p className="break-all font-mono text-[11px] text-paysats-text">{deposit.tokenAddress}</p>
        <Button
          type="button"
          variant="ghost"
          className="text-xs"
          onClick={() => copy("token", deposit.tokenAddress)}
        >
          {copied === "token" ? "Copied" : "Copy token contract"}
        </Button>
        {explorerBase ? (
          <a
            href={`${explorerBase}/token/${deposit.tokenAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-xs font-semibold text-paysats-accent underline"
          >
            Token on explorer
          </a>
        ) : null}
      </div>

      <p className="text-center text-[11px] leading-relaxed text-paysats-text-muted">
        Send the token (not ETH/BNB for gas) to the Safe above. Keep a little USDC (Base) or USDT (BNB) in the
        Safe for ERC-4337 gas when the operator runs LiFi → Base IDRX.
      </p>
    </div>
  );
}
