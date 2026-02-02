"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface HeroSectionProps {
  images?: string[];
  interval?: number; // ms
}

const HERO_TEXT = {
  en: {
    title: "Rotary Club of Hunnu",
    subtitle:
      "Rotary Club of Hunnu was officially chartered on November 11, 2023, in Ulaanbaatar, receiving its charter from Rotary International. The club is a daughter club of Tuul Rotary Club and consists of 22 members from diverse professional backgrounds.",
    ctaText: "TAKE ACTION WITH US",
    ctaHref: "/membership",
  },
  mn: {
    title: "Хүннү Ротари Клуб",
    subtitle:
      "Хүннү Ротари Клуб нь Улаанбаатар хотод 2023 оны 11-р сарын 11-ны өдөр ОУ-ын Ротари Ерөнхийлөгч R.Mclnally-аас албан ёсоор батламж гардан авч үүсгэн байгуулагдсан. Хүннү Ротари Клуб нь Туул Ротари Клубээс салбарласан охин Клуб юм. Салбар салбарын манлайлагч 11 эрэгтэй, 11 эмэгтэй буюу нийт 22 гишүүдээс бүрдсэн.",
    ctaText: "Бидэнтэй нэгдэх",
    ctaHref: "/membership",
  },
};

export default function HeroSection({
  images = [
    "/images/hero/6.jpg",
    "/images/hero/7.jpg",
    "/images/hero/8.jpg",
    // "/images/hero/9.jpg",
    "/images/hero/10.jpg",
    "/images/hero/11.jpg",
  ],
  interval = 6000,
}: HeroSectionProps) {
  const pathname = usePathname();
  const currentLang = pathname.startsWith("/mn") ? "mn" : "en";
  const content = HERO_TEXT[currentLang];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <section className="relative max-w-[1400px] mx-auto h-[70vh] min-h-[520px] max-h-[820px] overflow-hidden rounded-xl shadow-lg">
      {/* Background images */}
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt="Hero background"
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-end justify-center px-6 pb-24">
        <div className="max-w-3xl text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {content.title}
          </h1>

          <p className="text-sm sm:text-base md:text-lg opacity-90 mb-10 leading-relaxed">
            {content.subtitle}
          </p>

          <Link href={content.ctaHref}>
            <span className="inline-flex items-center justify-center rounded-full border border-white px-8 py-3 text-sm font-semibold tracking-wide transition hover:bg-white hover:text-black">
              {content.ctaText}
            </span>
          </Link>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
