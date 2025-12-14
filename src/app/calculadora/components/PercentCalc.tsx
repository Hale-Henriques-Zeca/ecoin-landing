"use client";

import { useState } from "react";
import Keypad from "./Keypad";

export default function PercentCalc() {
  const [value, setValue] = useState("");
  const [percent, setPercent] = useState("");
  const [result, setResult] = useState("");

  function calculate() {
    if (!value || !percent) return;

    const v = parseFloat(value);
    const p = parseFloat(percent);

    const res = (v * p) / 100;

    setResult(res.toFixed(2));
  }

  return (
    <div className="w-full flex flex-col gap-6">

      {/* INPUTS */}
      <div className="bg-[#0c0c0c] border border-[#333] rounded-xl p-5 shadow-lg">
        <label className="text-gray-300 text-sm">Valor (Base)</label>
        <input
          type="text"
          value={value}
          placeholder="Ex: 1000"
          onChange={(e) => setValue(e.target.value)}
          className="w-full mt-1 px-4 py-2 rounded-lg bg-black/40 border border-[#444] text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        />

        <label className="text-gray-300 text-sm mt-4">Percentagem (%)</label>
        <input
          type="text"
          value={percent}
          placeholder="Ex: 10"
          onChange={(e) => setPercent(e.target.value)}
          className="w-full mt-1 px-4 py-2 rounded-lg bg-black/40 border border-[#444] text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        />

        <button
          className="w-full mt-5 py-3 rounded-lg font-semibold bg-[#D4AF37] text-black hover:bg-[#bfa536] transition"
          onClick={calculate}
        >
          Calcular
        </button>
      </div>

      {/* RESULTADO */}
      {result !== "" && (
        <div className="bg-black border border-[#333] rounded-xl p-5 shadow-xl">
          <h2 className="text-lg text-gray-300">Resultado:</h2>
          <p className="text-4xl font-bold text-[#D4AF37] mt-2">{result}</p>
        </div>
      )}

      {/* TECLADO NUMÉRICO */}
      <div>
        <Keypad
          onInput={(val: string) => {
            if (!isNaN(Number(val))) {
              // Digitos adicionam no campo selecionado
              if (percent.length > 0) {
                setPercent(percent + val);
              } else {
                setValue(value + val);
              }
            }

            if (val === "C") {
              setValue("");
              setPercent("");
              setResult("");
            }

            if (val === "←") {
              if (percent.length > 0) {
                setPercent(percent.slice(0, -1));
              } else {
                setValue(value.slice(0, -1));
              }
            }
          }}
        />
      </div>
    </div>
  );
}
