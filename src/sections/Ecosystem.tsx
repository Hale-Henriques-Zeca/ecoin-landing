"use client";

import { motion } from "framer-motion";
import "@/styles/ecosystem.css";

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="ecosystem-container w-full py-28 text-white flex flex-col items-center"
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 text-4xl font-bold text-[#D4AF37]"
      >
        ECOSSISTEMA • EDENKINGDOM
      </motion.h2>

      {/* DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center text-gray-300 mb-16 px-4 leading-relaxed"
      >
        A E-Coin movimenta todos os sistemas corporativos da EdenKingDom — desde
        pagamentos, educação, logística, serviços públicos, turismo e toda a
        economia interna das nossas divisões tecnológicas, financeiras e sociais.
      </motion.p>

      {/* GRID OF FEATURES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="ecosystem-card"
          >
            <div className="icon-box">{item.icon}</div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-detail">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ECOSYSTEM FEATURES */
const features = [
  {
    title: "E-Pay • Pagamentos",
    desc: "Transações instantâneas dentro do ecossistema EdenKingDom com liquidez real.",
    icon: "💳",
  },
  {
    title: "E-Wallet",
    desc: "Carteira oficial para armazenar E-Coin, fiat, stablecoins e ativos corporativos.",
    icon: "👛",
  },
  {
    title: "E-Job • Payroll",
    desc: "Sistema de salários e incentivos totalmente automatizado para funcionários.",
    icon: "👔",
  },
  {
    title: "E-Learn",
    desc: "Educação global com pagamento integrado e recompensas internas.",
    icon: "🎓",
  },
  {
    title: "E-ExpressLog",
    desc: "Transporte logístico de produtos e bens, integrado com tokenização.",
    icon: "🚚",
  },
  {
    title: "E-Stay",
    desc: "Reservas, turismo e serviços hoteleiros pagos com E-Coin.",
    icon: "🏨",
  },
  {
    title: "E-Chain • Blockchain",
    desc: "Rede própria da EdenKingDom com governança, segurança e escalabilidade.",
    icon: "🔗",
  },
  {
    title: "E-Donation",
    desc: "Sistema humanitário integrado com rastreio de doações e impacto social.",
    icon: "🤝",
  },
  {
    title: "E-Market",
    desc: "Marketplace com compras internas 100% tokenizadas e conversões automáticas.",
    icon: "🛒",
  },
];
