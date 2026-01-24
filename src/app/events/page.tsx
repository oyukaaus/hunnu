"use client";

import { events } from "@/data/dummy";
import { Card } from "antd";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white max-w-[1400px] mx-auto rounded-[24px] shadow-md overflow-hidden">
      {/* HERO */}
      <div className="relative h-[280px] bg-gradient-to-b from-[#0067c8] to-[#00a2e0] rounded-b-3xl">
        <div className="max-w-[1400px] mx-auto px-6 h-full flex items-end pb-10">
          <h1 className="text-white text-3xl md:text-4xl font-bold border-l-4 border-white pl-5">
            Events
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <Card
              key={i}
              hoverable
              className="w-full rounded-xl overflow-hidden"
              bodyStyle={{ padding: "16px" }}
            >
              {/* IMAGE */}
              <div className="relative h-[220px] mb-4 rounded-lg overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* TITLE */}
              <h3 className="font-semibold text-lg leading-snug mb-1 h-14 overflow-hidden">
                {event.name}
              </h3>

              {/* DATE */}
              <p className="text-xs text-gray-500 mb-2">
                {event.date}
              </p>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
                {event.desc}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
