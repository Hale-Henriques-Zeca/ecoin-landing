"use client";

import { motion } from "framer-motion";
import "@/styles/comparison.css";

export default function Comparison() {
  return (
    <section
      id="comparison"
      className="w-full py-28 bg-black text-white flex flex-col items-center"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 text-4xl font-bold text-[#D4AF37]"
      >
        BITCOIN • BNB • EKD • E-COIN
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center text-gray-300 mb-16 px-4 leading-relaxed"
      >
        Uma visão clara e institucional do posicionamento tecnológico da E-Coin
        dentro do ecossistema global de criptomoedas corporativas e moedas digitais.
      </motion.p>

      {/* Comparison Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl px-6"
      >
        {/* Bitcoin */}
        <div className="comparison-card">
          <h3 className="card-title">Bitcoin</h3>
          <p className="card-detail">Primeira criptomoeda</p>
          <p className="card-detail">Volátil</p>
          <p className="card-detail">Sem ecossistema próprio</p>
          <p className="card-detail">Sem utilidade institucional</p>
        </div>

        {/* BNB */}
        <div className="comparison-card">
          <h3 className="card-title">BNB</h3>
          <p className="card-detail">Token de exchange</p>
          <p className="card-detail">Taxas e utilidade DeFi</p>
          <p className="card-detail">Ecossistema Binance</p>
          <p className="card-detail">Centralização parcial</p>
        </div>

        {/* EKD */}
        <div className="comparison-card">
          <h3 className="card-title">EKD</h3>
          <p className="card-detail">Moeda institucional</p>
          <p className="card-detail">Usada para gestão interna</p>
          <p className="card-detail">Alta segurança</p>
          <p className="card-detail">Governança global</p>
        </div>

        {/* E-COIN (Highlight) */}
        <div className="comparison-card highlight">
          <h3 className="card-title text-[#D4AF37]">E-COIN</h3>
          <p className="card-detail text-[#D4AF37]">Moeda corporativa oficial</p>
          <p className="card-detail text-[#D4AF37]">Totalmente integrada</p>
          <p className="card-detail text-[#D4AF37]">Ecosistema completo EKD</p>
          <p className="card-detail text-[#D4AF37]">Token com visão eterna</p>
        </div>
      </motion.div>
    </section>
  );
}
