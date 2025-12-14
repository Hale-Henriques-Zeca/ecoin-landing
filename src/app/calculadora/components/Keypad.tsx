"use client";

export default function Keypad({
  onInput,
}: {
  onInput: (value: string) => void;
}) {
  const keys = [
    "1", "2", "3",
    "4", "5", "6",
    "7", "8", "9",
    "C", "0", "←",
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {keys.map((key) => (
        <button
          key={key}
          onClick={() => onInput(key)}
          className={`
            py-4 rounded-xl font-bold text-lg shadow-md
            transition-all
            ${
              key === "C"
                ? "bg-red-700 hover:bg-red-600 text-white"
                : key === "←"
                ? "bg-[#333] hover:bg-[#444] text-[#D4AF37]"
                : "bg-[#111] border border-[#444] text-white hover:bg-[#222]"
            }
          `}
        >
          {key}
        </button>
      ))}
    </div>
  );
}
