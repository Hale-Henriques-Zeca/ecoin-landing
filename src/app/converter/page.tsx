"use client";

import CurrencySelector from "./components/CurrencySelector";
import Keypad from "./components/Keypad";
import ChartBox from "./components/ChartBox";
import useConversion from "./hooks/useConversion";

export default function ConverterPage() {
  const {
    from,
    to,
    amount,
    rate,
    result: converted,
    history,
    setFrom,
    setTo,
    setAmount,
    swap,
  } = useConversion();

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
          currency={from}
          setCurrency={setFrom}
          amount={amount}
          setAmount={setAmount}
        />

        {/* Botão inverter */}
        <div className="flex justify-center my-3">
          <button
            className="p-2 rounded-full bg-[#D4AF37] text-black font-bold hover:bg-[#bfa536] transition"
            onClick={swap}
          >
            ⇅
          </button>
        </div>

        {/* Seletor TO */}
        <CurrencySelector
          label="To"
          currency={to}
          setCurrency={setTo}
          amount={converted.toFixed(4)}
          readOnly
        />

        {/* GRÁFICO */}
        <div className="mt-6">
          <ChartBox history={history} rate={rate} />
        </div>

        {/* TECLADO */}
        <div className="mt-6">
          <Keypad
            onInput={(val) => setAmount((prev) => (prev === "0" ? val : prev + val))}
            onDelete={() => setAmount((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"))}
            onClear={() => setAmount("0")}
          />
        </div>
      </div>
    </div>
  );
}
