import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white max-w-[1400px] mx-auto rounded-3xl shadow-lg overflow-hidden">
      {/* ===== HERO ===== */}
      <div className="relative h-[280px] bg-gradient-to-b from-[#0067c8] to-[#00a2e0] rounded-b-3xl">
        <div className="max-w-[1400px] mx-auto px-6 h-full flex items-end pb-10">
          <h1 className="text-white text-3xl md:text-4xl font-bold border-l-4 border-white pl-5">
            ABOUT US
          </h1>
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <section className="max-w-[1400px] mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* LEFT */}
        <div className="lg:col-span-3 text-gray-700">
          <blockquote className="italic border-l-4 border-blue-500 pl-6 mb-10 text-lg">
            Hunnu Rotary Club was officially chartered on November 11, 2023, in
            Ulaanbaatar, receiving its charter from Rotary International.
            The club is a daughter club of Tuul Rotary Club and consists of
            22 members from diverse professional backgrounds.
          </blockquote>

          <div className="space-y-6 leading-relaxed text-[15.5px]">
            <p>
              Hunnu Rotary Club began its humanitarian activities in partnership
              with Jeju Hallim Rotary Club of District 3662, Republic of Korea,
              donating playground equipment and educational materials to local
              kindergartens in Sukhbaatar District.
            </p>

            <p>
              The Founder and President for the 2023–2025 terms, Mr. E. Ganbat,
              is an experienced Rotary leader and humanitarian, having served
              in multiple leadership roles at club and district levels.
            </p>

            <p>
              The club actively participates in national Rotary events and won
              first place at the Mongolian Rotary Members Sports Day in 2023.
            </p>

            <p>
              Currently, Hunnu Rotary Club is preparing Global Grant projects
              focused on emergency medical services and rural healthcare
              development in cooperation with international Rotary partners.
            </p>

            <p>
              The club also promotes Mongolia’s culture and natural beauty by
              organizing annual programs for international Rotary members and
              supporters.
            </p>

            <p className="font-semibold text-gray-900 pt-4">
              “Service Above Self.”
            </p>
          </div>

          {/* Focus */}
          <div className="mt-14">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Areas of Focus
            </h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Disease prevention and treatment</li>
              <li>Supporting education</li>
            </ul>
          </div>

          {/* 특징 */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Club Characteristics
            </h3>
            <ul className="list-disc ml-6">
              <li>Members representing three generations</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="bg-gradient-to-b from-[#0067c8] to-[#00a2e0] text-white rounded-xl p-6 shadow-lg sticky top-24">
            <h4 className="text-lg font-semibold mb-5">About the Club</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="hover:text-[#ffd2c2] font-medium">
                  • Introduction
                </Link>
              </li>
              <li>
                <Link href="/policy" className="hover:text-[#ffd2c2]">
                  • Club Bylaws
                </Link>
              </li>
              <li>
                <Link href="/board" className="hover:text-[#ffd2c2]">
                  • Board of Directors
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}
