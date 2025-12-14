"use client";

export default function CalcTabs({
  active,
  setActive,
}: {
  active: "normal" | "percent";
  setActive: (val: "normal" | "percent") => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-2 bg-[#1a1a1a] rounded-xl p-1 border border-[#333]">
      
      {/* Aba Normal */}
      <button
        onClick={() => setActive("normal")}
        className={`py-3 rounded-lg font-semibold transition-all ${
          active === "normal"
            ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black"
            : "bg-[#222] text-gray-300 hover:bg-[#333]"
        }`}
      >
        Cálculo Padrão
      </button>

      {/* Aba Percentual */}
      <button
        onClick={() => setActive("percent")}
        className={`py-3 rounded-lg font-semibold transition-all ${
          active === "percent"
            ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black"
            : "bg-[#222] text-gray-300 hover:bg-[#333]"
        }`}
      >
        Cálculo Percentual
      </button>
    </div>
  );
}
