"use client";

import { useEffect } from "react";
import Keypad from "./Keypad";

export default function StandardCalc({
  expression,
  setExpression,
  result,
}: {
  expression: string;
  setExpression: (v: string) => void;
  result: string;
}) {
  return (
    <div className="w-full">

      {/* DISPLAY */}
      <div className="bg-[#0c0c0c] border border-[#333] rounded-xl p-5 mb-4 shadow-lg">
        <div className="text-right text-xl text-gray-400 min-h-[28px]">
          {expression || "0"}
        </div>
        <div className="text-right text-4xl font-bold text-[#D4AF37] mt-2">
          {result}
        </div>
      </div>

      {/* TECLADO */}
      <Keypad onInput={(val: string) => handleInput(val)} />
    </div>
  );

  // lógica simples do display
  function handleInput(val: string) {
    if (val === "C") {
      setExpression("");
      return;
    }

    if (val === "←") {
      setExpression(expression.slice(0, -1));
      return;
    }

    setExpression(expression + val);
  }
}
