"use client";

import { useState } from "react";

export default function useStandardCalc() {
  const [value, setValue] = useState("0");

  const input = (key: string) => {
    if (key === "C") {
      setValue("0");
      return;
    }

    if (key === "←") {
      setValue((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
      return;
    }

    if (["+", "-", "×", "÷"].includes(key)) {
      setValue((prev) => prev + " " + key + " ");
      return;
    }

    if (key === "=") {
      try {
        const result = evaluateExpression(value);
        setValue(result.toString());
      } catch {
        setValue("Error");
      }
      return;
    }

    setValue((prev) => (prev === "0" ? key : prev + key));
  };

  return {
    value,
    input,
    setValue,
  };
}

// 📌 Função para resolver expressões
function evaluateExpression(expr: string): number {
  const prepared = expr
    .replace(/×/g, "*")
    .replace(/÷/g, "/");

  // ⚠ Segurança mínima — só números e operadores simples
  if (!/^[0-9+\-*/().\s]+$/.test(prepared)) return 0;

  // eslint-disable-next-line no-eval
  return eval(prepared);
}
