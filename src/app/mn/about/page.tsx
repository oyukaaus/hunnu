"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ABOUT_CONTENT = {
  en: {
    quote:
      "Hunnu Rotary Club was officially chartered on November 11, 2023, in Ulaanbaatar, receiving its charter from Rotary International. The club is a daughter club of Tuul Rotary Club and consists of 22 members from diverse professional backgrounds.",

    paragraphs: [
      "Hunnu Rotary Club began its humanitarian activities in partnership with Jeju Hallim Rotary Club of District 3662, Republic of Korea, donating playground equipment and educational materials to local kindergartens in Sukhbaatar District.",
      "The Founder and President for the 2023–2025 terms, Mr. E. Ganbat, is an experienced Rotary leader and humanitarian, having served in multiple leadership roles at club and district levels.",
      "The club actively participates in national Rotary events and won first place at the Mongolian Rotary Members Sports Day in 2023.",
      "Currently, Hunnu Rotary Club is preparing Global Grant projects focused on emergency medical services and rural healthcare development in cooperation with international Rotary partners.",
      "The club also promotes Mongolia’s culture and natural beauty by organizing annual programs for international Rotary members and supporters.",
    ],

    motto: "“Service Above Self.”",

    areasTitle: "Areas of Focus",
    areas: ["Disease prevention and treatment", "Supporting education"],

    characteristicsTitle: "Club Characteristics",
    characteristics: ["Members representing three generations"],

    rotaryFocusTitle: "Rotary's areas of focus",

    sidebarTitle: "About the Club",
    sidebarLinks: [
      { href: "/about", label: "• Introduction" },
      { href: "/timeline", label: "• Timeline" },
      { href: "/members", label: "• Members" },
    ],
  },

  mn: {
    quote:
      "Хүннү Ротари Клуб нь 2023 оны 11-р сарын 11-ний өдөр Улаанбаатар хотод Олон Улсын Ротариас албан ёсоор батламж гардан авч үүсгэн байгуулагдсан. Тус клуб нь Туул Ротари Клубээс салбарласан охин клуб бөгөөд төрөл бүрийн мэргэжлийн салбарын 22 гишүүдээс бүрддэг.",

    paragraphs: [
      "Хүннү Ротари Клуб нь БНСУ-ын 3662-р дүүргийн Жэжү Халлим Ротари Клубтэй хамтран хүмүүнлэгийн үйл ажиллагаагаа эхлүүлж, Сүхбаатар дүүргийн цэцэрлэгүүдэд тоглоомын талбайн тоног төхөөрөмж, сургалтын хэрэглэгдэхүүн хандивласан.",
      "2023–2025 оны үүсгэн байгуулагч, ерөнхийлөгч Э.Ганбат нь клуб болон дүүргийн түвшинд олон удирдах албан тушаал хашиж байсан туршлагатай ротари гишүүн юм.",
      "Тус клуб нь үндэсний хэмжээний Ротарийн арга хэмжээнүүдэд идэвхтэй оролцож, 2023 оны Монголын Ротари гишүүдийн спортын өдөрлөгт тэргүүн байр эзэлсэн.",
      "Одоогоор Хүннү Ротари Клуб нь олон улсын түнш клубүүдтэй хамтран яаралтай тусламж, хөдөөгийн эрүүл мэндийн чиглэлээр Global Grant төслүүдийг хэрэгжүүлэхээр бэлтгэж байна.",
      "Мөн Монголын соёл, байгалийн үзэсгэлэнг сурталчлах зорилгоор олон улсын Ротари гишүүдэд зориулсан жил бүрийн хөтөлбөрүүдийг зохион байгуулдаг.",
    ],

    motto: "“Өөрөөсөө давж бусаддаа тусалцгаая!”",

    areasTitle: "Үйл ажиллагааны чиглэл",
    areas: ["Өвчлөлөөс сэргийлэх, эмчлэх", "Боловсролыг дэмжих"],

    characteristicsTitle: "Клубын онцлог",
    characteristics: ["3-н үеийн төлөөллөөс бүрдсэн."],

    rotaryFocusTitle: "Ротарийн үндсэн чиглэлүүд",

    sidebarTitle: "Клубын тухай",
    sidebarLinks: [
      { href: "mn/about", label: "• Танилцуулга" },
      { href: "mn/timeline", label: "• Түүхэн замнал" },
      { href: "mn/members", label: "• Гишүүд" },
    ],
  },
};

export default function AboutPage() {
  const pathname = usePathname();
  const currentLang = pathname.startsWith("/mn") ? "mn" : "en";
  const t = ABOUT_CONTENT[currentLang];

  return (
    <div className="bg-white max-w-[1400px] mx-auto rounded-3xl shadow-lg overflow-hidden">
      {/* ===== CONTENT ===== */}
      <section className="max-w-[1400px] mx-auto px-6 py-4 md:py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* LEFT */}
        <div className="lg:col-span-3 text-gray-700">
          <blockquote className="italic border-l-4 border-[#17458f] pl-6 mb-10 text-lg text-justify">
            {t.quote}
          </blockquote>

          <div className="space-y-6 leading-relaxed text-[15.5px]">
            {t.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <p className="font-semibold text-gray-900 pt-4">{t.motto}</p>
          </div>

          <div className="relative h-[250px] lg:h-[670px] rounded-xl overflow-hidden mt-8">
            <Image
              src="/images/about.png"
              alt="Hunnu Rotary Club"
              fill
              className="object-contain"
            />
          </div>

          {/* Areas of Focus */}
          <div className="mt-8 lg:mt-14">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t.areasTitle}
            </h3>
            <ul className="list-disc ml-6 space-y-2">
              {t.areas.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>

          {/* Characteristics */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t.characteristicsTitle}
            </h3>
            <ul className="list-disc ml-6">
              {t.characteristics.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>

          {/* Rotary Focus Image */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t.rotaryFocusTitle}
            </h3>
            <div className="relative h-[250px] lg:h-[670px] rounded-xl overflow-hidden mt-8">
              <Image
                src="/images/focus.png"
                alt="Rotary focus"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
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
