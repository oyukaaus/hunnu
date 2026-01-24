import Image from "next/image";
import Link from "next/link";

interface GetInvolvedSectionProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  imageSrc?: string;
}

export default function GetInvolvedSection({
  title = "Help us create lasting change",
  description = `Solving some of the world’s most complex and pressing problems takes real commitment and vision. Rotary members believe that we share a responsibility to take action to improve our communities. Join us, so that we can make an even bigger impact — together.`,
  ctaText = "GET INVOLVED",
  ctaHref = "/membership",
  imageSrc = "/images/get-involved.png",
}: GetInvolvedSectionProps) {
  return (
    <section className="max-w-[1400px] mx-auto  bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px] py-16">
        {/* LEFT: CONTENT */}
        <div className="bg-[#008c8c] flex items-center justify-center px-6 py-16">
          <div className="max-w-md text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-light mb-6">{title}</h2>

            <p className="text-sm sm:text-base leading-relaxed opacity-95 mb-10">
              {description}
            </p>

            <Link href={ctaHref}>
              <span className="inline-flex items-center justify-center rounded-full border border-white px-10 py-3 text-sm font-semibold tracking-wide transition hover:bg-white hover:text-[#008c8c]">
                {ctaText}
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
