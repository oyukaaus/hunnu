"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import i18n from "@/lib/i18n";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const lang = pathname.startsWith("/mn") ? "mn" : "en";
    i18n.changeLanguage(lang);
  }, [pathname]);

  return <>{children}</>;
}
