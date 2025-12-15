"use client";

import { useState } from "react";
import CalcTabs from "./components/CalcTabs";
import StandardCalc from "./components/StandardCalc";
import PercentCalc from "./components/PercentCalc";

export default function CalculadoraPage() {
  // Aba ativa: "normal" ou "percent"
  const [activeTab, setActiveTab] = useState<"normal" | "percent">("normal");

  // Estados compartilhados pelas calculadoras
  const [expression, setExpression] = useState<string>(""); // expressão digitada
  const [result, setResult] = useState<string>(""); // resultado atual

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center py-12 text-white">
      {/* Título */}
      <h1 className="text-4xl font-bold text-[#D4AF37] mb-8">
        Calculadora Global
      </h1>

      {/* Caixa principal */}
      <div className="bg-[#0e0e0e] border border-[#333] rounded-2xl p-6 w-[90%] max-w-md shadow-xl">
        
        {/* Tabs internas */}
        <CalcTabs active={activeTab} setActive={setActiveTab} />

        {/* Conteúdo de cada aba */}
        <div className="mt-6">
          {activeTab === "normal" && (
            <StandardCalc
              expression={expression}
              setExpression={setExpression}
              result={result}
            />
          )}

          {activeTab === "percent" && (
            <PercentCalc
              expression={expression}
              setExpression={setExpression}
              result={result}
            />
          )}
        </div>
      </div>
    </div>
  );
}
