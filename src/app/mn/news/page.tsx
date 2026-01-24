"use client";
import { news } from "@/data/dummy";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="rounded-[24px]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        {/* ===== FEATURED NEWS ===== */}
        <div className="
          flex flex-col lg:flex-row
          gap-8
          items-start
          mt-10 mb-12
        ">
          {/* TEXT */}
          <div
            className="
              flex flex-col gap-4
              w-full lg:w-1/2
              cursor-pointer
            "
            onClick={() => router.push(`/news/${news[0].id}`)}
          >
            <div className="rounded-full bg-blue-500 text-white text-xs w-fit px-3 py-1">
              {news[0].type}
            </div>

            <h2 className="
              text-xl sm:text-2xl lg:text-[26px]
              text-black font-bold
              hover:text-gray-600
            ">
              {news[0].title}
            </h2>

            <p className="text-sm sm:text-base text-gray-700 line-clamp-4">
              {news[0].par1}
            </p>
          </div>

          {/* IMAGE */}
          <div className="
            relative
            w-full lg:w-1/2
            h-[220px] sm:h-[300px] lg:h-[420px]
            rounded-xl overflow-hidden
          ">
            <Image
              src={news[0].image}
              alt={news[0].title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* ===== NEWS GRID ===== */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
          mb-20
        ">
          {news.slice(1).map((n) => (
            <div
              key={n.id}
              className="cursor-pointer group"
              onClick={() => router.push(`/news/${n.id}`)}
            >
              <div className="
                relative
                h-[160px]
                rounded-xl
                overflow-hidden
                mb-3
              ">
                <Image
                  src={n.image}
                  alt={n.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              <h3 className="
                text-sm sm:text-base
                font-semibold
                text-gray-900
                line-clamp-2
              ">
                {n.desc}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
