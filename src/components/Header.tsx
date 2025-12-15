"use client";

import { useEffect } from "react";
import { enqueueTranslation } from "@/lib/translationQueue";
import LanguageSelector from "@/components/LanguageSelector";

export default function Header() {
  // 🔁 Auto-tradução inicial com idioma salvo ou inglês
  useEffect(() => {
  const lang = localStorage.getItem("EKD_LANG") || "en";
  // enqueueTranslation(() => translateVisibleV4(lang)); // removido para build estável
}, []);

  // 🌍 Quando o usuário escolhe o idioma manualmente
  const handleLangChange = (lang: string) => {
  localStorage.setItem("EKD_LANG", lang);
  // enqueueTranslation(() => translateVisibleV4(lang)); // desativado para build estável
};

  return (
    <header className="w-full flex justify-end p-5 fixed top-0 z-50 bg-black/40 backdrop-blur-xl">
      <LanguageSelector onLangChange={handleLangChange} />
    </header>
  );
}
