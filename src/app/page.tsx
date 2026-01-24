"use client";

import { useRouter } from "next/navigation";
import HeroSection from "@/components/sections/HeroSection";
import NewsSection from "@/components/sections/NewsSection";
import ImpactSection from "@/components/sections/ImpactSection";
import GetInvolvedSection from "@/components/sections/GetInvolvedSection";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="bg-white">
      {/* <NewsSection /> */}
      <HeroSection></HeroSection>
      {/* News & Features */}
      <NewsSection></NewsSection>
      {/* ===== IMPACT ===== */}
      <ImpactSection></ImpactSection>
      {/* involved */}
      <GetInvolvedSection></GetInvolvedSection>
    </div>
  );
}
