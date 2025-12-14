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
        className={`
          py-3 rounded-lg font-semibold transition-all
          ${active ===
