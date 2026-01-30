"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { news } from "@/components/sections/news.mn";
import { gallery } from "@/components/sections/news.en";
import PhotoBar from "@/components/sections/PhotoBar";
import { useState } from "react";
import { Modal } from "antd";

export default function HomePage() {
  const router = useRouter();

  const featured = news[0];
  const sideNews = news.slice(1, 5);
  const galleryImages = gallery;
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 ">
      {/* SECTION TITLE */}
      <div className="mb-8">
        <h2 className="text-sm lg:text-xl md:text-xl font-semibold tracking-wide uppercase">
          Мэдээ
        </h2>
        <div className="mt-2 h-px w-full bg-black" />
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT: FEATURED */}
        <div
          className="lg:col-span-2 cursor-pointer"
          onClick={() => router.push(`/news/${featured.id}`)}
        >
          <div className="relative h-[260px] sm:h-[360px] lg:h-[420px] mb-4">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          <p className="text-xs uppercase text-gray-500 mb-2">
            {featured.type}
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold mb-3">
            {featured.title}
          </h3>

          <p className="text-sm text-gray-700 line-clamp-4 mb-3">
            {featured.desc}
          </p>

          <span className="text-sm font-semibold text-blue-600 hover:underline">
            Read more
          </span>
        </div>

        {/* RIGHT: GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sideNews.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer"
              onClick={() => router.push(`/news/${item.id}`)}
            >
              <div className="relative h-[140px] mb-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-xs uppercase text-gray-500 mb-1">
                {item.type}
              </p>

              <h4 className="text-sm font-semibold leading-snug line-clamp-3">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* VIEW ALL */}
      <div className="flex justify-center mt-14">
        <button
          onClick={() => router.push("/news")}
          className="bg-black text-white text-sm font-semibold px-8 py-3 hover:bg-gray-800 transition"
        >
          БҮХ МЭДЭЭГ УНШИХ
        </button>
      </div>

      {/* PHOTO NEWS */}
      <div className="">
        <div className="mb-8">
          <h2 className="text-sm lg:text-xl md:text-xl font-semibold tracking-wide uppercase">
            Photo МЭДЭЭ
          </h2>
          <div className="mt-2 h-px w-full bg-black" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {galleryImages.slice(0, 8).map((item, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => {
                setActiveIndex(index);
                setShowModal(true);
              }}
            >
              <div className="relative h-[240px] mb-3">
                <Image
                  src={item}
                  alt={index + "im"}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 h-px w-full  mb-6" />
        <Modal
          open={showModal}
          footer={null}
          onCancel={() => setShowModal(false)}
          width={1000}
          centered
        >
          <PhotoBar
            items={galleryImages.map((n) => ({
              image: n,
            }))}
            startIndex={activeIndex}
          />
        </Modal>
      </div>

      {/* CONTENT */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {sideNews.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer"
            onClick={() => router.push(`/news/${item.id}`)}
          >
            <div className="relative h-[240px] mb-3">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-xs uppercase text-gray-500 mb-1">{item.type}</p>

            <h4 className="text-sm font-semibold leading-snug line-clamp-3">
              {item.title}
            </h4>
          </div>
        ))}
      </div> */}
    </div>
  );
}
