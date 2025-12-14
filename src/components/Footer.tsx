"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-[#D4AF37]/20 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* BRANDING FUSION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[#D4AF37] font-semibold text-lg tracking-widest">
            EDENKINGDOM & E-COIN
          </h2>

          <p className="text-sm text-gray-400 mt-3 leading-relaxed">
            Construindo o maior ecossistema corporativo da nova era — tecnologia,
            finanças, educação, saúde, energia, logística, blockchain e inovação
            para as próximas gerações.
          </p>
        </motion.div>

        {/* COLUNA 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
            Institucional
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">Sobre Nós</li>
            <li className="hover:text-white cursor-pointer">Documentação</li>
            <li className="hover:text-white cursor-pointer">Sustentabilidade</li>
            <li className="hover:text-white cursor-pointer">Website oficial da EKD Corporation</li>
            <li className="hover:text-white cursor-pointer">Carreiras da EdenKingDom Corporation</li>
          </ul>
        </motion.div>

        {/* COLUNA 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
            Produtos & Serviços
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">E-Coin</li>
            <li className="hover:text-white cursor-pointer">E-Pay</li>
            <li className="hover:text-white cursor-pointer">E-Chain</li>
            <li className="hover:text-white cursor-pointer">E-Wallet</li>
            <li className="hover:text-white cursor-pointer">EBC</li>
          </ul>
        </motion.div>

        {/* CONTACTO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
            Contacto
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>🧠EKD: support@edenkingdom.org</li>
            <li>🪙E-COIN: e-coin@edenkingdom.org</li>
            <li className="hover:text-white cursor-pointer">
              💎Central EKD — Atendimento 24/7
            </li>
          </ul>
        </motion.div>

         {/* Escritórios Fisicos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
            Escritórios Físicos
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📍 Moçambique - Nhamatanda</li>
            <li>📍 Canadá - Toronto</li>
            <li>📍 USA - Nova Iorque</li>
            <li className="hover:text-white cursor-pointer">
            </li>
          </ul>
        </motion.div>

        {/* COLUNA 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
            Redes sociais da E-Coin
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">💬 WhatsApp Grupo da E-Coin</li>
            <li className="hover:text-white cursor-pointer">💬Comunidade E-Coin no Discord</li>
            <li className="hover:text-white cursor-pointer">👑Perfil oficial da E-Coin no Discord</li>
            <li className="hover:text-white cursor-pointer">📢Canal do telegram da E-Coin</li>
            <li className="hover:text-white cursor-pointer">🐦 X (Twitter) da E-Coin</li>
            <li className="hover:text-white cursor-pointer">💬Grupo do telegram da E-Coin</li>
          </ul>
        </motion.div>

        {/* COLUNA 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
            Redes sociais do CEO
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">👑 Instagram (CEO)  Athelstan Pateron Atanas</li>
            <li className="hover:text-white cursor-pointer">📘 Facebook (CEO) Athelstan Pateron Atanas</li>
            <li className="hover:text-white cursor-pointer">🕊 X (CEO) Athelstan Pateron Atanas</li>
            <li className="hover:text-white cursor-pointer">🎵 TikTok (CEO) Athelstan Pateron Atanas</li>
          </ul>
        </motion.div>

        {/* COLUNA 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
            Redes sociais da EdenKingDom
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">📢 Canal WhatsApp da EKD Oficial</li>
            <li className="hover:text-white cursor-pointer">🎵 TikTok da EKD</li>
            <li className="hover:text-white cursor-pointer">📹  Canal YouTube da EKD Oficial </li>
            <li className="hover:text-white cursor-pointer">📢 Canal Telegram da EKD Oficial</li>
            <li className="hover:text-white cursor-pointer">🕊 X Página da EKD Oficial</li>
            <li className="hover:text-white cursor-pointer">📘 Facebook Página da EKD Oficial</li>
            <li className="hover:text-white cursor-pointer">💬 Grupo do Telegram da EKD Oficial</li>
            <li className="hover:text-white cursor-pointer">📸 Página do Instagram da EKD Oficial</li>
          </ul>
        </motion.div>

      </div>

      {/* LINHA */}
      <div className="w-full border-t border-[#D4AF37]/20 mt-14"></div>

      {/* COPYRIGHT FUSION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mt-8 text-xs text-gray-500"
      >
        © {new Date().getFullYear()} EdenKingDom Corporation — Built from Genesis, Designed for Eternity.
      </motion.div>
    </footer>
  );
}
