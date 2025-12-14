// src/app/converter/hooks/useConversion.ts
"use client";

import { useEffect, useState } from "react";
import { currencies } from "../data/currencies";

// ------------------------------
// CONFIGURAÇÃO
// ------------------------------

// API oficial que funciona no Cloudflare
const REAL_API = "https://api.exchangerate.host/latest";

// Mock para Localhost (porque APIs externas bloqueiam CORS)
const MOCK_RATES = {
  USD: 1,
  EUR: 0.92,
  MZN: 63,
  ZAR: 18.4,
  BTC: 1 / 97000,
  ETH: 1 / 3200,
  BNB: 1 / 580,
  USDT: 1,
  USDC: 1,
  ECOIN: 0.25, // E-Coin começa com preço simbólico até pegar o real
};

// ------------------------------
// HOOK PRINCIPAL
// ------------------------------
export default function useConversion() {
  const [from, setFrom] = useState("ECOIN");
  const [to, setTo] = useState("USD");

  const [amount, setAmount] = useState("1");

  const [rate, setRate] = useState(0);
  const [result, setResult] = useState(0);

  const [history, setHistory] = useState<number[]>([]);

  const [loading, setLoading] = useState(false);

  // ------------------------------
  // 1) Buscar taxa de conversão
  // ------------------------------
  async function fetchRate(base: string, symbol: string) {
    setLoading(true);

    try {
      const isLocalhost =
        typeof window !== "undefined" &&
        window.location.hostname === "localhost";

      // Usar MOCK se estiver em localhost
      if (isLocalhost) {
        console.log("⚠ Usando Mock (localhost)");
        const r1 = MOCK_RATES[base] || 1;
        const r2 = MOCK_RATES[symbol] || 1;

        const final = r2 / r1;
        setRate(final);

        setLoading(false);
        return final;
      }

      // API Real (funciona ao publicar na Cloudflare)
      const res = await fetch(`${REAL_API}?base=${base}&symbols=${symbol}`);
      const data = await res.json();

      const final = data?.rates?.[symbol] || 0;

      setRate(final);
      setLoading(false);

      return final;
    } catch (err) {
      console.error("Erro ao buscar taxa:", err);

      // fallback mock
      const r1 = MOCK_RATES[base] || 1;
      const r2 = MOCK_RATES[symbol] || 1;

      const final = r2 / r1;
      setRate(final);

      setLoading(false);
      return final;
    }
  }

  // ------------------------------
  // 2) Converter amount
  // ------------------------------
  function convert(base: string, symbol: string, amt: number, r: number) {
    const v = amt * r;
    setResult(v);
    return v;
  }

  // ------------------------------
  // 3) Inverter moedas
  // ------------------------------
  function swap() {
    const oldFrom = from;
    setFrom(to);
    setTo(oldFrom);
  }

  // ------------------------------
  // 4) Histórico para gráficos
  // ------------------------------
  function pushHistory(v: number) {
    setHistory((h) => [...h.slice(-29), v]); // máximo 30 pontos
  }

  // ------------------------------
  // 5) Atualizar sempre que o usuário mexe
  // ------------------------------
  useEffect(() => {
    if (!from || !to || !amount) return;

    (async () => {
      const r = await fetchRate(from, to);
      const v = convert(from, to, Number(amount), r);
      pushHistory(v);
    })();
  }, [from, to, amount]);

  // ------------------------------
  // Intervalo para atualizar automaticamente
  // ------------------------------
  useEffect(() => {
    const int = setInterval(() => {
      fetchRate(from, to).then((r) => {
        const v = convert(from, to, Number(amount), r);
        pushHistory(v);
      });
    }, 10000); // 10s

    return () => clearInterval(int);
  }, [from, to, amount]);

  return {
    from,
    to,
    amount,
    rate,
    result,
    history,
    loading,

    setFrom,
    setTo,
    setAmount,
    swap,
  };
}
