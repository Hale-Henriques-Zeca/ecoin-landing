"use client";

import Hero from "@/sections/Hero";
import Tokenomics from "@/sections/Tokenomics";
import Comparison from "@/sections/Comparison";
import Ecosystem from "@/sections/Ecosystem";
import Security from "@/sections/Security";
import Roadmap from "@/sections/Roadmap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Tokenomics />
      <Comparison />
      <Ecosystem />
      <Security />
      <Roadmap />
      <Footer />
    </>
  );
}

