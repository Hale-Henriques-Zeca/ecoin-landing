"use client";

import BonusCard from "./components/BonusCard";
import BonusTable from "./components/BonusTable";
import LevelTree from "./components/LevelTree";
import InfoBox from "./components/InfoBox";

export default function EquipesPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center py-12">

      {/* Título */}
      <h1 className="text-4xl font-extrabold text-[#D4AF37] mb-3 tracking-wide">
        Líder de Equipes — E-Coin
      </h1>

      <p className="text-gray-300 max-w-2xl text-center mb-10">
        Estrutura oficial de bonificações da Pré-Venda e Staking da moeda 
        corporativa <span className="text-[#D4AF37] font-semibold">E-Coin</span>.
      </p>

      {/* Cartão de Explicação */}
      <InfoBox />

      {/* Tabela dos níveis */}
      <BonusTable />

      {/* Cards explicativos */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] max-w-4xl">
        <BonusCard
          title="Pré-Venda"
          percent="9%"
          levels="7 níveis"
          color="from-[#D4AF37] to-[#8d6f24]"
          items={[
            "5.10% — 1º nível",
            "1.10% — 2º nível",
            "1.00% — 3º nível",
            "0.90% — 4º nível",
            "0.50% — 5º nível",
            "0.30% — 6º nível",
            "0.10% — 7º nível",
          ]}
        />

        <BonusCard
          title="Staking"
          percent="1%"
          levels="2 níveis"
          color="from-[#444] to-[#222]"
          items={[
            "0.90% — 1º nível",
            "0.10% — 2º nível",
          ]}
        />
      </div>

      {/* Árvore de níveis */}
      <div className="mt-16 w-[90%] max-w-3xl">
        <LevelTree />
      </div>

      <div className="text-gray-500 text-xs mt-20">
        © EdenKingDom Corporation — E-Coin Network
      </div>

    </div>
  );
}
