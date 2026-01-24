import TimelineSection from "@/components/sections/TimelineSectionEn";
import Link from "next/link";

export default function TimelinePage() {
  return (
    <div className="bg-white max-w-[1400px] mx-auto rounded-[24px] shadow-md overflow-hidden mt-4">
      <h1 className="text-[#17458f] text-3xl md:text-4xl font-bold border-l-4 border-white pl-5">
        Our Timeline
      </h1>

      {/* CONTENT */}
      <section className="max-w-[1400px] mx-auto px-6 mb-16 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* ===== LEFT CONTENT ===== */}
        <div className="lg:col-span-3">
          {/* ===== 2023 ===== */}
          <h2 className="text-2xl font-semibold text-[#17458f] lg:mb-12 md:mb-12 text-center">
            2023
          </h2>

          <TimelineSection
            items={[
              {
                date: "August 20, 2023",
                title: "Kindergarten Donation",
                description:
                  "Members of Hanlim Rotary Club, District 3662 (Jeju Island, South Korea), donated toys and supplies to Kindergartens No. 166 and 171 in Ulaanbaatar.",
              },
              {
                date: "September 23, 2023",
                title: "Rotary Training",
                description:
                  "New members participated in Rotary training sessions held at the Rotary Center of Mongolia.",
              },
              {
                date: "October 28, 2023",
                title: "Sports Festival Champions",
                description:
                  "Hunnu Rotary Club won first place and received the championship cup at the Mongolian Rotary Members Sports Festival.",
              },
              {
                date: "November 11, 2023",
                title: "Official Chartering",
                description:
                  "Hunnu Rotary Club was officially chartered and received its charter from Rotary International, District 3450.",
              },
              {
                date: "November 25, 2023",
                title: "Emergency Medical Center Anniversary",
                description:
                  "The club participated in the 10th anniversary celebration of the National Emergency Medical Center.",
              },
              {
                date: "December 4, 2023",
                title: "International MOU",
                description:
                  "A Memorandum of Understanding (MOU) was signed with Hanlim Rotary Club, District 3662, South Korea.",
              },
              {
                date: "December 23, 2023",
                title: "International Fellowship",
                description:
                  "Members attended a meeting with honorary members of the O-U-Lim Rotary Club from South Korea.",
              },
            ]}
          />

          {/* ===== 2024 ===== */}
          <h2 className="text-2xl font-semibold text-[#0067c8] lg:mt-12 lg:mb-12 md:mt-12 md:mb-12 text-center">
            2024
          </h2>

          <TimelineSection
            items={[
              {
                date: "February 7, 2024",
                title: "Leadership Handover",
                description:
                  "Participation in the leadership handover ceremony of Hanlim Rotary Club, District 3662, South Korea.",
              },
              {
                date: "July 6, 2024",
                title: "National Rotary Ceremonies",
                description:
                  "Participation in the leadership handover ceremonies of Rotary Clubs across Mongolia.",
              },
              {
                date: "August 7, 2024",
                title: "International Visit",
                description:
                  "Members of Hanlim Rotary Club visited Mongolia as part of ongoing international cooperation.",
              },
              {
                title: "Global Grant Projects",
                description:
                  "Planning and preparation for Global Grant projects: GG2574004, GG2454132 (1,000 km – Govi-Altai), and GG2681678.",
              },
              {
                title: "30th Anniversary of Rotary in Mongolia",
                description:
                  "Celebration of the 30th Anniversary of the Rotary Movement in Mongolia under the theme “THE MAGIC OF ROTARY.”",
              },
            ]}
          />
        </div>
        <aside className="hidden lg:block">
          <div className="bg-[#f6f7f9] text-white rounded-xl p-6 shadow-lg sticky ">
            <h4 className="text-lg font-semibold mb-5 text-[#17458f]">
              About the Club
            </h4>
            <ul className="space-y-3  text-[#17458f]">
              <li>
                <Link href="/about" className="hover:text-[#ffd2c2]">
                  • Introduction
                </Link>
              </li>
              <li>
                <Link
                  href="/timeline"
                  className="hover:text-[#ffd2c2] font-medium"
                >
                  • Timeline
                </Link>
              </li>{" "}
              <li>
                <Link href="/members" className="hover:text-[#ffd2c2] ">
                  • Members
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}
