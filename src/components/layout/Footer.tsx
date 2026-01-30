"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FOOTER_CONTENT = {
  en: {
    about: "About Us",
    introduction: "Introduction",
    timeline: "Timeline",
    members: "Members",

    activities: "Activities",
    getInvolved: "Get Involved",
    events: "Events",

    contact: "Contact Us",

    address:
      "Room 1305, Union Building, Narnii Road 62, Khoroo 1, Sukhbaatar District, Ulaanbaatar, Mongolia",

    copyright: "© Rotary Club of Hunnu",
  },

  mn: {
    about: "Бидний тухай",
    introduction: "Танилцуулга",
    timeline: "Түүхэн замнал",
    members: "Гишүүд",

    activities: "Үйл ажиллагаа",
    getInvolved: "Бидэнтэй нэгдэх",
    events: "Арга хэмжээ",

    contact: "Холбоо барих",

    address:
      "Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо, Нарны зам 62, Юнион барилга, 1305 тоот",

    copyright: "© Хүннү Ротари Клуб",
  },
};

export default function Footer() {
  const pathname = usePathname();
  const currentLang = pathname.startsWith("/mn") ? "mn" : "en";
  const t = FOOTER_CONTENT[currentLang];
  const withLang = (path: string) =>
    currentLang === "mn" ? `/mn${path}` : path;

  return (
    <div className="md:px-20 lg:px-20 px-4">
      <footer
        className="
          bg-gradient-to-b from-[#17458f] to-black
          text-white
          rounded-[24px]
          mt-16 sm:mt-20 lg:mt-24
          md:px-20 lg:px-20 px-4
        "
      >
        <div className="max-w-[1400px] px-4 sm:px-6 lg:px-8 py-14 sm:mx-6 md:mx-10 lg:mx-auto">
          {/* TOP GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1 */}
            <div>
              <h4 className="font-semibold mb-4 text-base">{t.about}</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <Link href={withLang("/about")} className="hover:text-white">
                    {t.introduction}
                  </Link>
                </li>
                <li>
                  <Link
                    href={withLang("/timeline")}
                    className="hover:text-white"
                  >
                    {t.timeline}
                  </Link>
                </li>
                <li>
                  <Link
                    href={withLang("/members")}
                    className="hover:text-white"
                  >
                    {t.members}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-semibold mb-4 text-base">{t.activities}</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <Link
                    href={withLang("/membership")}
                    className="hover:text-white"
                  >
                    {t.getInvolved}
                  </Link>
                </li>
                <li>
                  <Link href={withLang("/events")} className="hover:text-white">
                    {t.events}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 – Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-base">{t.contact}</h4>
              <div className="text-[12px] text-white/80 space-y-2">
                <p>📍 {t.address}</p>
                <p>
                  ✉{" "}
                  <a
                    href="mailto:info@rotarymongolia.org"
                    className="hover:text-white"
                  >
                    info@rotarymongolia.org
                  </a>
                </p>
                <p>
                  📞{" "}
                  <a href="tel:+97699059960" className="hover:text-white">
                    (+976) 99059960
                  </a>
                </p>
              </div>
            </div>

            {/* Column 4 – Social */}
            <div className="flex gap-3 mt-8 lg:mt-0">
              <a
                href="https://www.facebook.com/hunnurotary"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20"
              >
                <div className="relative w-7 h-7">
                  <Image
                    src="/images/fb.png"
                    alt="Facebook"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20"
              >
                <div className="relative w-7 h-7">
                  <Image
                    src="/images/x.png"
                    alt="X"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20"
              >
                <div className="relative w-7 h-7">
                  <Image
                    src="/images/youtube.png"
                    alt="YouTube"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-white/20 my-10" />

          {/* BOTTOM */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-white/70 gap-4">
            <span>{t.copyright}</span>
            <span>{new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
