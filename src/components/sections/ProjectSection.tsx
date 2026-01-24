"use client";

import { events } from "@/data/dummy";
import { Carousel, Card, Button, Tag } from "antd";
import Image from "next/image";

export default function EventSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center font-bold text-2xl md:text-3xl lg:text-3xl text-gray-500">
          Арга хэмжээ
        </div>
        <Carousel dots autoplay autoplaySpeed={6000}>
          {/* ===== ONE SLIDE ===== */}
          <div className="py-4 md:py-10 lg:py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events.map((event, i) => (
                <Card
                  key={i}
                  className="rounded-xl overflow-hidden shadow-md"
                >
                  {/* IMAGE */}
                  <div className="relative h-[200px] rounded-xl overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.name}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold mt-2 h-20 overflow-hidden">
                      {event.name}
                    </h4>

                    <p className="text-gray-500 mt-2">
                      📅 {event.date}
                    </p>
                    <p className="text-gray-500">
                      📍 {event.location}
                    </p>

                    <Button type="primary" className="mt-4">
                      Дэлгэрэнгүй
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}