"use client";

import { useState } from "react";

export default function usePercentCalc() {
  const [amount, setAmount] = useState("0");
  const [percent, setPercent] = useState("0");
  const [result, setResult] = useState("0");

  const calculate = () => {
    const a = parseFloat(amount);
    const p = parseFloat(percent);

    if (isNaN(a) || isNaN(p)) {
      setResult("0");
      return;
    }

    const r = (a * p) / 100;
    setResult(r.toString());
  };

  const reset = () => {
    setAmount("0");
    setPercent("0");
    setResult("0");
  };

  return {
    amount,
    percent,
    result,
    setAmount,
    setPercent,
    calculate,
    reset,
  };
}
