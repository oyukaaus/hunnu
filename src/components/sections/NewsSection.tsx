"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { newsEN } from "./news.en";
import { news } from "./news.mn";

export default function NewsSection() {
  const pathname = usePathname();
  const currentLang = pathname.startsWith("/mn") ? "mn" : "en";

  const items = currentLang === "mn" ? news.slice(0, 3) : newsEN.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto ">
        {/* TITLE */}
        <h2 className="text-center text-2xl sm:text-3xl font-light text-gray-700 mb-14">
          News &amp; Features
        </h2>

        {/* NEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {items.map((item, index) => (
            <Link href={`/news/${item.id ?? index}`} key={index}>
              <div className="relative h-[260px] sm:h-[320px] lg:h-[360px] overflow-hidden group cursor-pointer rounded-lg">
                {/* IMAGE */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* CONTENT */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-lg sm:text-xl font-semibold leading-snug mb-2 line-clamp-3">
                    {item.title}
                  </h3>
                  <span className="text-sm font-medium opacity-90">
                    Read more
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="mt-16 flex justify-center">
          <Link href="/news">
            <span className="inline-flex items-center justify-center rounded-full bg-[#009fda] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#007fb0] ">
              {currentLang === "mn"
                ? "МЭДЭЭ, МЭДЭЭЛЭЛ ДЭЛГЭРЭНГҮЙ"
                : "EXPLORE MORE NEWS AND FEATURES"}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
