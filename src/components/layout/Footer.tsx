import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="md:px-20 lg:px-20 px-4 ">
      <footer
        className="
  bg-gradient-to-b from-[#17458f] to-black
  text-white
  rounded-[24px]
  mt-16 sm:mt-20 lg:mt-24 md:px-20 lg:px-20 px-4 
"
      >
        <div className="max-w-[1400px] px-4 sm:px-6 lg:px-8 py-14 sm:mx-6 md:mx-10 lg:mx-auto ">
          {/* TOP GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1 */}
            <div>
              <h4 className="font-semibold mb-4 text-base">About Us</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <Link href="/about" className="hover:text-white">
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link href="/timeline" className="hover:text-white">
                    Timeline
                  </Link>
                </li>{" "}
                <li>
                  <Link href="/members" className="hover:text-white">
                    Members
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-semibold mb-4 text-base">Activities</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <Link href="/membership" className="hover:text-white">
                    Get Involved
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-white">
                    Events
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            {/* <div>
              <h4 className="font-semibold mb-4 text-base">Conta</h4>
              <ul className="space-y-2 text-sm text-white/80">

                <li>
                  <Link href="/contact" className="hover:text-white">
                    Холбоо барих
                  </Link>
                </li>
              </ul>
            </div> */}

            {/* Column 4 */}
            <div>
              <h4 className="font-semibold mb-4 text-base">Contact Us</h4>
              <div className="text-[12px] text-white/80 space-y-2">
                <p>
                  📍 Room 1305, Union Building, Narnii Road 62, Khoroo 1,
                  Sukhbaatar District, Ulaanbaatar, Mongolia
                </p>
                <p>
                  ✉
                  <a
                    href="mailto:info@rotarymongolia.org"
                    className="hover:text-white"
                  >
                    info@rotarymongolia.org
                  </a>
                </p>
                <p>
                  📞
                  <a href="tel:+97699059960" className="hover:text-white">
                    (+976) 99059960
                  </a>
                </p>
              </div>

              {/* Social */}
            </div>
            <div className="flex gap-3 mt-4">
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
                 className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20"
              >
                <div className="relative w-7 h-7">
                  <Image
                    src="/images/x.png"
                    alt="Facebook"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                 className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20"
              >
                <div className="relative w-7 h-7">
                  <Image
                    src="/images/youtube.png"
                    alt="Facebook"
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
            <span>© Rotary Club of Hunnu</span>
            <span>{new Date().getFullYear()} </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
