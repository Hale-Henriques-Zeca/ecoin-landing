"use client";

import { useState } from "react";
import CurrencySelector from "./components/CurrencySelector";
import Keypad from "./components/Keypad";
import ChartBox from "./components/ChartBox";
import { currencies } from "./data/currencies";
import useConversion from "./hooks/useConversion";

export default function ConverterPage() {
  const [fromCurrency, setFromCurrency] = useState("ECOIN");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState("0");

  const { converted, rate, history } = useConversion({
    from: fromCurrency,
    to: toCurrency,
    amount,
  });

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center py-12 text-white">
      
      {/* Título */}
      <h1 className="text-4xl font-bold text-[#D4AF37] mb-8">
        Conversor Global
      </h1>

      {/* Caixa principal */}
      <div className="bg-[#0e0e0e] border border-[#333] rounded-2xl p-6 w-[90%] max-w-md shadow-xl">

        {/* Seletor FROM */}
        <CurrencySelector
          label="From"
          currency={fromCurrency}
          setCurrency={setFromCurrency}
          amount={amount}
          setAmount={setAmount}
        />

        {/* Botão inverter */}
        <div className="flex justify-center my-3">
          <button
            className="p-2 rounded-full bg-[#D4AF37] text-black font-bold hover:bg-[#bfa536] transition"
            onClick={() => {
              setFromCurrency(toCurrency);
              setToCurrency(fromCurrency);
              setAmount("0");
            }}
          >
            ⇅
          </button>
        </div>

        {/* Seletor TO */}
        <CurrencySelector
          label="To"
          currency={toCurrency}
          setCurrency={setToCurrency}
          amount={converted}
          readOnly
        />

        {/* GRÁFICO */}
        <div className="mt-6">
          <ChartBox history={history} rate={rate} />
        </div>

        {/* Teclado */}
        <div className="mt-6">
          <Keypad setAmount={setAmount} />
        </div>
      </div>
    </div>
  );
}
