"use client";

import Image from "next/image";
import { Dropdown, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const NAV_TEXT = {
  en: {
    home: "Home",
    about: "About Us",
    introduction: "Introduction",
    timeline: "Timeline",
    members: "Members",

    activities: "Activities",
    membership: "Membership",
    events: "Events",

    news: "News",
    join: "Membership",

    mobileNewsTitle: "News & Updates",
    joinMobile: "Join as a Member",
  },
  mn: {
    home: "Нүүр",
    about: "Бидний тухай",
    introduction: "Танилцуулга",
    timeline: "Түүхэн замнал",
    members: "Гишүүд",

    activities: "Үйл ажиллагаа",
    membership: "Гишүүнчлэл",
    events: "Арга хэмжээ",

    news: "Мэдээ",
    join: "Гишүүн болох",

    mobileNewsTitle: "Мэдээ, мэдээлэл",
    joinMobile: "Гишүүнээр нэгдэх",
  },
};

const menu = (items: { label: string; path?: string }[], router: any) => ({
  items: items.map((item, i) => ({
    key: i,
    label: <span className="text-[13px]">{item.label}</span>,
    onClick: () => item.path && router.push(item.path),
  })),
});

export default function Navbar() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname() || "/";
  const currentLang = pathname.startsWith("/mn") ? "mn" : "en";
  const t = NAV_TEXT[currentLang];

  // language switch
  const switchLanguage = (lang: "en" | "mn") => {
    if (lang === "en") {
      router.push(pathname.replace(/^\/mn/, "") || "/");
    } else {
      router.push(
        pathname.startsWith("/mn")
          ? pathname
          : `/mn${pathname === "/" ? "" : pathname}`,
      );
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItem = (key: string) =>
    `!bg-transparent border-none shadow-none
     flex items-center gap-1 px-4 py-2 rounded-full
     transition cursor-pointer
     ${
       openKey === key
         ? "bg-emerald-200 text-emerald-900"
         : "hover:bg-emerald-100"
     }`;

  // routes by language
  const r = (path: string) =>
    currentLang === "mn" ? `/mn${path === "/" ? "" : path}` : path;

  const navigateAndClose = (path: string) => {
    router.push(path);
    setMobileOpen(false);
  };

  return (
    <div className="h-[110px]">
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
        <div
          className={`max-w-full mx-4 sm:mx-6 md:mx-10 lg:mx-20 rounded-[24px] ${
            scrolled ? "bg-white shadow-md" : "bg-[#17458f]"
          }`}
        >
          <div className="h-[64px] sm:h-[68px] lg:h-[72px] mt-3 sm:mt-4 lg:mt-5 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* LEFT */}
            <div className="flex items-center gap-3">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => router.push(r("/"))}
              >
                <Image
                  src="/images/white-logo.png"
                  alt="Rotary Club of Hunnu"
                  width={44}
                  height={44}
                  priority
                />
                <div
                  className={`text-[11px] leading-tight font-semibold w-[120px] ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                >
                  Rotary
                  <br />
                  Club of Hunnu
                </div>
              </div>

              {/* DESKTOP NAV */}
              <nav className="hidden lg:flex items-center gap-x-2 text-[14px] font-medium ">
                <Dropdown
                  menu={menu(
                    [
                      { label: t.introduction, path: r("/about") },
                      { label: t.timeline, path: r("/timeline") },
                      { label: t.members, path: r("/members") },
                    ],
                    router,
                  )}
                  onOpenChange={(o) => setOpenKey(o ? "about" : null)}
                >
                  <Button
                    className={`${navItem("about")} ${
                      scrolled ? "text-black" : "text-white"
                    }`}
                  >
                    {t.about}
                  </Button>
                </Dropdown>

                <Dropdown
                  menu={menu(
                    [
                      { label: t.membership, path: r("/membership") },
                      { label: t.events, path: r("/events") },
                    ],
                    router,
                  )}
                  onOpenChange={(o) => setOpenKey(o ? "activities" : null)}
                >
                  <Button
                    className={`${navItem("activities")} ${
                      scrolled ? "text-black" : "text-white"
                    }`}
                  >
                    {t.activities}
                  </Button>
                </Dropdown>

                <Link href={r("/news")}>
                  <Button
                    className={`${navItem("news")} ${
                      scrolled ? "text-black" : "text-white"
                    }`}
                  >
                    {t.news}
                  </Button>
                </Link>

                <a href="https://www.rotary.org/" target="_blank">
                  <Button
                    className={`${navItem("ri")} ${
                      scrolled ? "text-black" : "text-white"
                    }`}
                  >
                    Rotary International
                  </Button>
                </a>
                <a href="https://rotarymongolia.org/" target="_blank">
                  <Button
                    className={`${navItem("ri")} ${
                      scrolled ? "text-black" : "text-white"
                    }`}
                  >
                    Rotary In Mongolia
                  </Button>
                </a>
                <a href="https://rotary3450.org/" target="_blank">
                  <Button
                    className={`${navItem("ri")} ${
                      scrolled ? "text-black" : "text-white"
                    } `}
                  >
                    RI3450
                  </Button>
                </a>
              </nav>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-2">
              {/* LANGUAGE */}
              <Dropdown
                menu={{
                  items: [
                    {
                      key: "en",
                      label: (
                        <span
                          className={`text-[13px] ${currentLang === "en" ? "font-bold text-blue-600" : ""}`}
                        >
                          English
                        </span>
                      ),
                      onClick: () => switchLanguage("en"),
                    },
                    {
                      key: "mn",
                      label: (
                        <span
                          className={`text-[13px] ${currentLang === "mn" ? "font-bold text-blue-600" : ""}`}
                        >
                          Монгол
                        </span>
                      ),
                      onClick: () => switchLanguage("mn"),
                    },
                  ],
                }}
              >
                <Button
                  className={`${navItem("lang")} ${scrolled ? "text-black" : "text-white"} hidden sm:inline`}
                >
                  <span className="font-montserrat">
                    {currentLang.toUpperCase()}
                  </span>
                </Button>
              </Dropdown>

              {/* MOBILE MENU */}
              <Button
                className="lg:hidden !border-none"
                icon={<MenuOutlined />}
                onClick={() => setMobileOpen(true)}
              />

              {/* CTA */}
              <Button
                type="primary"
                onClick={() => router.push(r("/membership"))}
                className="!bg-[#f7a81b] !rounded-full !h-[42px] !px-4 hidden sm:inline text-[#17458f] "
              >
                {t.join}
              </Button>

              {/* DRAWER */}
              <Drawer
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                placement="right"
                className="lg:hidden"
              >
                <nav className="flex flex-col gap-4 text-lg">
                  <Button type="text" onClick={() => navigateAndClose(r("/"))}>
                    {t.home}
                  </Button>

                  <div className="border-t pt-3">
                    <p className="text-sm text-gray-500 mb-2">{t.about}</p>
                    <Button
                      type="text"
                      onClick={() => navigateAndClose(r("/about"))}
                    >
                      {t.introduction}
                    </Button>
                    <Button
                      type="text"
                      onClick={() => navigateAndClose(r("/timeline"))}
                    >
                      {t.timeline}
                    </Button>
                    <Button
                      type="text"
                      onClick={() => navigateAndClose(r("/members"))}
                    >
                      {t.members}
                    </Button>
                  </div>

                  <div className="border-t pt-3">
                    <p className="text-sm text-gray-500 mb-2">{t.activities}</p>
                    <Button
                      type="text"
                      onClick={() => navigateAndClose(r("/membership"))}
                    >
                      {t.membership}
                    </Button>
                    <Button
                      type="text"
                      onClick={() => navigateAndClose(r("/events"))}
                    >
                      {t.events}
                    </Button>
                  </div>

                  <div className="border-t pt-3">
                    <p className="text-sm text-gray-500 mb-2">
                      {t.mobileNewsTitle}
                    </p>
                    <Button
                      type="text"
                      onClick={() => navigateAndClose(r("/news"))}
                    >
                      {t.news}
                    </Button>
                  </div>

                  <Button
                    type="primary"
                    className="mt-6"
                    onClick={() => navigateAndClose(r("/membership"))}
                  >
                    {t.joinMobile}
                  </Button>
                </nav>
              </Drawer>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
