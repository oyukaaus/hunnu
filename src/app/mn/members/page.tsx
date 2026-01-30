"use client";
import { membersMN } from "@/data/dummy";
import { Card, Modal } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AboutPage() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);

  return (
    <div className="bg-white max-w-[1400px] mx-auto rounded-[24px] shadow-md overflow-hidden">
      {/* ===== HERO / BANNER ===== */}

      <h1 className="text-[#17458f] text-3xl md:text-4xl font-bold border-l-4 border-white pl-5 py-16">
        Манай гишүүд
      </h1>

      {/* ===== CONTENT ===== */}
      <section className="max-w-[1400px] mx-auto px-6 mb-16 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* ===== LEFT CONTENT ===== */}
        <div className="lg:col-span-3">
          <section className="bg-white ">
            <div className="max-w-[1400px] mx-auto px-4">
              {/* GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {membersMN.map((m, i) => (
                  <Card
                    key={i}
                    hoverable
                    onClick={() => {
                      setSelected(m);
                      setOpen(true);
                    }}
                    className="rounded-xl text-center hover:shadow-lg transition cursor-pointer"
                  >
                    {/* IMAGE */}
                    <div className="flex justify-center mb-6">
                      <div className="relative w-32 h-32 rounded-lg overflow-hidden border">
                        <Image
                          src={m.image}
                          alt={m.name}
                          fill
                          sizes="(max-width: 768px) 96px, 128px"
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* INFO */}
                    <h3 className="text-lg font-semibold text-gray-900">
                      {m.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{m.role}</p>

                    {/* <p className="text-sm text-gray-500 mt-3">{m.email}</p> */}
                  </Card>
                ))}
              </div>
            </div>
          </section>
          <Modal
            open={open}
            onCancel={() => setOpen(false)}
            footer={null}
            centered
            width={560}
            className="rounded-2xl"
          >
            {selected && (
              <div className="text-center">
                {/* ===== AVATAR ===== */}
                <div className="flex justify-center  mb-4">
                  <div className="p-1 rounded-xl bg-gray-100">
                    <div className="relative w-36 h-36 rounded-xl overflow-hidden bg-white">
                      <Image
                        src={selected.image}
                        alt={selected.name}
                        sizes="(max-width: 768px) 96px, 128px"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* ===== NAME & ROLE ===== */}
                <h3 className="text-2xl font-semibold text-gray-900">
                  {selected.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{selected.role}</p>

                {/* ===== DIVIDER ===== */}
                <div className="w-12 h-[3px] bg-[#0E4A6F] mx-auto my-5 rounded-full" />

                {/* ===== CONTENT ===== */}
                <div className="text-left space-y-6 px-4">
                  {/* EDUCATION */}
                  {selected.education && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">
                        🎓 Боловсрол
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                        {selected.education.map(
                          (edu: string, index: number) => (
                            <li key={index}>{edu}</li>
                          ),
                        )}
                      </ul>
                    </div>
                  )}

                  {/* EXPERIENCE */}
                  {selected.experience && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">
                        💼 Ажлын туршлага
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                        {selected.experience.map(
                          (exp: string, index: number) => (
                            <li key={index}>{exp}</li>
                          ),
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </Modal>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="bg-[#f6f7f9] rounded-xl p-6 shadow-lg sticky">
            <h4 className="text-lg font-semibold mb-5 text-[#17458f]">
              Клубын тухай
            </h4>
            <ul className="space-y-3 text-[#17458f]">
              <li>
                <Link href="/about" className="hover:text-[#ffd2c2]">
                  • Танилцуулга
                </Link>
              </li>
              <li>
                <Link
                  href="/timeline"
                  className="hover:text-[#ffd2c2] font-medium"
                >
                  • Түүхэн замнал
                </Link>
              </li>
              <li>
                <Link href="/members" className="hover:text-[#ffd2c2]">
                  • Гишүүд
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}
