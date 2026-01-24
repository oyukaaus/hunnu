import { orgs } from "@/data/dummy";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="text-white rounded-[24px] mx-auto max-w-[1600px]">
      <div className="max-w-[1400px] mx-auto px-6 py-4 md:py-16 lg:py-16">
        {/* ===== CONTENT ===== */}
        {/* <section className="max-w-[1400px] mx-auto px-6 mb-16 grid grid-cols-1 lg:grid-cols-4 gap-10 mx-20"> */}
        {/* ===== LEFT CONTENT ===== */}

        <div className="lg:col-span-3">
          <blockquote className=" text-gray-700 italic mb-10 text-justify">
            “Монголын дрон нисгэгчдийн холбоо” НҮТББ нь 2025 оны 12 дугаар сарын
            11-ний өдрөөс "Дрон Академи"-тай хамтран ажиллаж байна.
          </blockquote>
          <div className="bg-white max-w-[1400px] mx-auto rounded-[24px] shadow-md overflow-hidden">
            {/* ===== HERO / BANNER ===== */}
            <div className="relative h-[260px] w-full mb-4 md:mb-16 lg:mb-16 rounded-b-[24px] overflow-hidden ">
              {/* Background Image */}
              <Image
                src={orgs[7]?.cover || "/images/about-bg.jpg"}
                alt={orgs[7]?.title || "cover"}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0e4a6f]/20 to-black/90" />

              {/* Content */}
              <div className="relative z-10 max-w-[1400px] mx-auto px-6 h-full flex flex-col justify-center text-white">
                <h1 className="text-[26px] md:text-[46px] lg:text-[46px] font-bold px-5 border-l-4 border-white mt-20">
                  {orgs[7]?.title}
                </h1>
              </div>
            </div>

            {/* ===== CONTENT ===== */}
            <section className="max-w-[1400px] mx-auto px-6 mb-4 grid grid-cols-1 lg:grid-cols-6 gap-10 ">
              {/* ===== LEFT CONTENT ===== */}
              <div className="lg:col-span-4">
                {orgs[7].coop && (
                  <div className="border-l-4 border-red-400 p-4 text-xl">
                    Монголын дрон нисгэгчдийн холбоотой "{orgs[7].coop}"-р
                    хамтарч байна.
                  </div>
                )}
                <div className="lg:col-span-2 space-y-4 text-gray-700 leading-relaxed text-justify">
                  <p>{orgs[7]?.mainIntro}</p>
                  <p>{orgs[7]?.mainIntro2}</p>
                  <p>{orgs[7]?.mainIntro3}</p>
                  <p>{orgs[7]?.mainIntro4}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mt-10">
                  <Card className="rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-3">
                      🎯 Алсын хараа
                    </h3>
                    <p className="text-gray-600 text-justify">{orgs[7]?.vision}</p>
                  </Card>

                  <Card className="rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-3">
                      🚀 Эрхэм зорилго
                    </h3>
                    <p className="text-gray-600 text-justify">{orgs[7]?.goal}</p>
                  </Card>
                </div>
                <div className=" text-gray-700 leading-relaxed text-md">
                  <p className="mt-12 mb-4 text-xl font-semibold text-gray-900">
                    ҮЙЛ АЖИЛЛАГААНЫ ЧИГЛЭЛ
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-8">
                    {orgs[7]?.services?.map((service, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 rounded-lg border hover:shadow-sm transition"
                      >
                        <span className="text-[#0B3C5D] font-bold">✔</span>
                        <p className="text-gray-700">{service}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ===== RIGHT SIDEBAR ===== */}
              <aside className="lg:col-span-2">
                <div className="sticky top-[120px] border rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold mb-4">Холбоо барих</h4>
                  <ul className="space-y-3 text-sm">
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-center gap-3">
                        <PhoneOutlined className="text-[#0e4a6f]" />
                        <span>{orgs[7]?.phone}</span>
                      </li>

                      <li className="flex items-center gap-3">
                        <MailOutlined className="text-[#0e4a6f] " />
                        <span className="text-[12px]">{orgs[7]?.email}</span>
                      </li>

                      <li className="flex items-center gap-3">
                        <EnvironmentOutlined className="text-[#0e4a6f]" />
                        <span>{orgs[7]?.address}</span>
                      </li>

                      <li className="flex items-center gap-3">
                        <GlobalOutlined className="text-[#0e4a6f]" />
                        <a
                          href={orgs[7]?.web}
                          target="_blank"
                          className="hover:underline"
                        >
                          {orgs[7]?.web}
                        </a>
                      </li>
                    </ul>
                  </ul>
                </div>
              </aside>
            </section>
          </div>
        </div>
        {/* </section> */}
      </div>
    </div>
  );
}
