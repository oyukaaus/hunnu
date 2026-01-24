"use client";

import Image from "next/image";
import { Dropdown, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Drawer } from "antd";
import Link from "next/link";

const menu = (items: { label: string; path?: string }[], router: any) => ({
  items: items.map((item, i) => ({
    key: i,
    label: <span className="text-[13px]">{item.label}</span>,
    onClick: () => {
      if (item.path) router.push(item.path);
    },
  })),
});

export default function Navbar() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname() || "/";
  const currentLang = pathname.startsWith("/mn") ? "mn" : "en";

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
         : "text-gray-800 hover:bg-emerald-100"
     }`;

  // helpers for routes based on language
  const aboutPath = currentLang === "mn" ? `/${currentLang}/about` : "/about";
  const timePath =
    currentLang === "mn" ? `/${currentLang}/timeline` : "/timeline";
  const boardPath =
    currentLang === "mn" ? `/${currentLang}/members` : "/members";
  const membershipPath =
    currentLang === "mn" ? `/${currentLang}/membership` : "/membership";
  const eventsPath =
    currentLang === "mn" ? `/${currentLang}/events` : "/events";
  const newsPath = currentLang === "mn" ? `/${currentLang}/news` : "/news";
  const homePath = currentLang === "mn" ? `/${currentLang}` : "/";

  return (
    <>
      <div className="h-[110px]">
        <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
          <div
            className={`  max-w-full mx-4 sm:mx-6 md:mx-10 lg:mx-20 rounded-[24px] ${
              scrolled ? "bg-white shadow-md" : "bg-[#17458f]"
            }`}
          >
            <div className="h-[64px] sm:h-[68px] lg:h-[72px] mt-3 sm:mt-4 lg:mt-5 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => router.push(homePath)}
                >
                  <Image
                    src={
                      scrolled
                        ? "/images/white-logo.png"
                        : "/images/white-logo.png"
                    }
                    alt="Drone Association"
                    width={44}
                    height={44}
                    priority
                  />
                  <div
                    className={`text-[11px] sm:text-[12px] md:text-[12px] leading-tight font-semibold font-montserrat ml-2 ${scrolled ? "text-black" : "text-white"}`}
                  >
                    Rotary
                    <br />
                    Club of Hunnu
                  </div>
                </div>

                <nav className="hidden lg:flex items-center gap-x-5 text-[14px] font-medium font-montserrat ml-10">
                  <Dropdown
                    menu={menu(
                      [
                        { label: "Introduction", path: aboutPath },
                        { label: "Timeline", path: timePath },
                        { label: "Members", path: boardPath },
                      ],
                      router,
                    )}
                    onOpenChange={(o) => setOpenKey(o ? "company" : null)}
                  >
                    <Button
                      className={`${navItem("company")} ${scrolled ? "text-black hover:!text-black" : "text-white hover:!text-white"} !border !border-transparent hover:!border-gray-300`}
                      onClick={() => router.push(aboutPath)}
                    >
                      About Us
                    </Button>
                  </Dropdown>
                  <a
                    href="https://rotary3450.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className={`${navItem("news")} ${scrolled ? "text-black hover:!text-black" : "text-white hover:!text-white"} !border !border-transparent hover:!border-gray-300`}
                    >
                      Rotary International
                    </Button>
                  </a>
                  <a
                    href="https://en.rotarymongolia.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className={`${navItem("news")} ${scrolled ? "text-black hover:!text-black" : "text-white hover:!text-white"} !border !border-transparent hover:!border-gray-300`}
                    >
                      Rotary In Mongolia
                    </Button>
                  </a>
                  <a
                    href="https://rotary3450.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className={`${navItem("news")} ${scrolled ? "text-black hover:!text-black" : "text-white hover:!text-white"} !border !border-transparent hover:!border-gray-300`}
                    >
                      RI3450
                    </Button>
                  </a>
                  <Dropdown
                    menu={menu(
                      [
                        { label: "Membership", path: membershipPath },
                        { label: "Events", path: eventsPath },
                      ],
                      router,
                    )}
                    onOpenChange={(o) => setOpenKey(o ? "project" : null)}
                  >
                    <Button
                      className={`${navItem("project")} ${scrolled ? "text-black hover:!text-black" : "text-white hover:!text-white"} !border !border-transparent hover:!border-gray-300`}
                      onClick={() => router.push(membershipPath)}
                    >
                      Activitities
                    </Button>
                  </Dropdown>
                  <Link href={newsPath}>
                    <Button
                      className={`${navItem("news")} ${scrolled ? "text-black hover:!text-black" : "text-white hover:!text-white"} !border !border-transparent hover:!border-gray-300`}
                    >
                      News
                    </Button>
                  </Link>
                </nav>
              </div>

              <div className="flex items-center gap-2 sm:gap-4">
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

                <Button
                  className="lg:hidden !border-none"
                  icon={<MenuOutlined />}
                  onClick={() => setMobileOpen(true)}
                />

                <Button
                  type="primary"
                  onClick={() => router.push(membershipPath)}
                  className="!bg-[#f7a81b] !rounded-full !h-[42px] !px-4 sm:!px-6 hidden sm:inline text-[#17458f]"
                >
                  Membership
                </Button>

                <Drawer
                  open={mobileOpen}
                  onClose={() => setMobileOpen(false)}
                  placement="right"
                  className="lg:hidden"
                >
                  <nav className="flex flex-col gap-4 text-lg">
                    <Button
                      type="text"
                      className="text-left"
                      onClick={() => {
                        router.push(homePath);
                        setMobileOpen(false);
                      }}
                    >
                      Нүүр
                    </Button>

                    <div className="border-t pt-3">
                      <p className="text-sm text-gray-500 mb-2">About Us</p>
                      <Button
                        type="text"
                        className="text-left"
                        onClick={() => {
                          router.push(aboutPath);
                          setMobileOpen(false);
                        }}
                      >
                        Introduction
                      </Button>
                      <Button
                        type="text"
                        className="text-left"
                        onClick={() => {
                          router.push(timePath);
                          setMobileOpen(false);
                        }}
                      >
                        Timeline
                      </Button>
                      <Button
                        type="text"
                        className="text-left"
                        onClick={() => {
                          router.push(boardPath);
                          setMobileOpen(false);
                        }}
                      >
                        Members
                      </Button>
                    </div>

                    <div className="border-t pt-3">
                      <p className="text-sm text-gray-500 mb-2">Activities</p>
                      <Button
                        type="text"
                        className="text-left"
                        onClick={() => {
                          router.push(membershipPath);
                          setMobileOpen(false);
                        }}
                      >
                        Membership
                      </Button>
                      <Button
                        type="text"
                        className="text-left"
                        onClick={() => {
                          router.push(eventsPath);
                          setMobileOpen(false);
                        }}
                      >
                        Events
                      </Button>
                    </div>

                    <div className="border-t pt-3">
                      <p className="text-sm text-gray-500 mb-2">
                        Мэдээ, мэдээлэл
                      </p>
                      <Button
                        type="text"
                        className="text-left"
                        onClick={() => {
                          router.push(newsPath);
                          setMobileOpen(false);
                        }}
                      >
                        News
                      </Button>
                    </div>

                    <Button
                      type="primary"
                      className="mt-6"
                      onClick={() => {
                        router.push(membershipPath);
                        setMobileOpen(false);
                      }}
                    >
                      Join as a Member
                    </Button>
                  </nav>
                </Drawer>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
