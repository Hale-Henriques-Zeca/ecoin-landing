"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import "@/styles/tokenomics.css";

export default function Tokenomics() {
  return (
    <section
      id="tokenomics"
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
        TOKENOMICS • E-COIN
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="max-w-3xl text-center text-gray-300 mb-16 px-4 leading-relaxed"
      >
        A E-Coin foi criada com um modelo econômico sólido, imutável e totalmente
        transparente. O supply é fixo, a liquidez é real e o ecossistema fortalece
        o uso prático em todos os setores da EdenKingDom Corporation.
      </motion.p>

      {/* Donut Chart + Legend */}
      <div className="flex flex-col md:flex-row items-center gap-16">
        {/* Donut Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-[260px] h-[260px] donut-chart"
        >
          <div className="donut-slice presale"></div>
          <div className="donut-slice liquidity"></div>
          <div className="donut-slice reserve"></div>
          <div className="donut-slice donation"></div>

          <div className="donut-center">
            <span className="text-[#D4AF37] text-xl font-semibold">100%</span>
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col text-gray-300 text-lg font-medium gap-4"
        >
          <div className="legend-item">
            <span className="legend-dot presale-dot"></span>
            Pré-venda: <strong>30%</strong>
          </div>

          <div className="legend-item">
            <span className="legend-dot liquidity-dot"></span>
            Liquidez: <strong>40%</strong>
          </div>

          <div className="legend-item">
            <span className="legend-dot reserve-dot"></span>
            Reserva Estratégica: <strong>20%</strong>
          </div>

          <div className="legend-item">
            <span className="legend-dot donation-dot"></span>
            Doação / Sustentabilidade: <strong>10%</strong>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
