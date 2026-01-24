"use client";

import React from "react";

interface TimelineItemType {
  title: string;
  description: string;
  date?: string;
  highlight?: boolean;
}

interface TimelineSectionProps {
  items: TimelineItemType[];
}

export default function TimelineSection({ items }: TimelineSectionProps) {
  return (
    <section className="relative max-w-[1100px] mx-auto px-6 ">
      {/* Center line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-[#f7a81b] -translate-x-1/2 hidden md:block" />

      <div className="space-y-4">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative flex items-center ${
                isLeft ? "justify-start" : "justify-end"
              }`}
            >
              {/* Content */}
              <div
                className={`w-full md:w-[45%] ${
                  isLeft
                    ? "md:pr-16 md:text-right"
                    : "md:pl-16 md:text-left"
                }`}
              >
                {item.date && (
                  <span className="inline-block mb-2 text-sm font-semibold text-[#17458f]">
                    {item.date}
                  </span>
                )}

                <h3 className="text-xl font-semibold text-[#00a2e0] mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Dot */}
              <span className="absolute left-1/2 w-5 h-5 bg-white border-4 border-[#f7a81b] rounded-full -translate-x-1/2 hidden md:block" />
            </div>
          );
        })}
      </div>
      
    </section>
  );
}
