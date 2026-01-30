"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface GetInvolvedSectionProps {
  imageSrc?: string;
}

const GET_INVOLVED_CONTENT = {
  en: {
    title: "Help us create lasting change",
    description:
      "Solving some of the world’s most complex and pressing problems takes real commitment and vision. Rotary members believe that we share a responsibility to take action to improve our communities. Join us, so that we can make an even bigger impact — together.",
    ctaText: "GET INVOLVED",
    ctaHref: "/membership",
  },
  mn: {
    title: "Тогтвортой өөрчлөлтийг хамтдаа бүтээцгээе",
    description:
      "Дэлхийн хамгийн тулгамдсан, нарийн төвөгтэй асуудлуудыг шийдвэрлэхэд бодит оролцоо, алсын хараа шаардлагатай. Ротаричууд бид нийгэмдээ эерэг өөрчлөлт авчрах үүрэг хариуцлагыг хамтдаа хүлээдэг. Бидэнтэй нэгдэж, илүү том нөлөөг хамтдаа бий болгоё.",
    ctaText: "Бидэнтэй нэгдэх",
    ctaHref: "/membership",
  },
};

export default function GetInvolvedSection({
  imageSrc = "/images/get-involved.png",
}: GetInvolvedSectionProps) {
  const pathname = usePathname();
  const currentLang = pathname.startsWith("/mn") ? "mn" : "en";
  const content = GET_INVOLVED_CONTENT[currentLang];

  return (
    <section className="max-w-[1400px] mx-auto bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px] py-16">
        {/* LEFT: CONTENT */}
        <div className="bg-[#008c8c] flex items-center justify-center px-6 py-16">
          <div className="max-w-md text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-light mb-6">
              {content.title}
            </h2>

            <p className="text-sm sm:text-base leading-relaxed opacity-95 mb-10">
              {content.description}
            </p>

            <Link href={content.ctaHref}>
              <span className="inline-flex items-center justify-center rounded-full border border-white px-10 py-3 text-sm font-semibold tracking-wide transition hover:bg-white hover:text-[#008c8c]">
                {content.ctaText}
              </span>
            </Link>
          </div>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="relative min-h-[320px] lg:min-h-full">
          <Image
            src={imageSrc}
            alt="Get involved"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
