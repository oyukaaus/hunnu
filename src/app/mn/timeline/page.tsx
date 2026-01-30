import TimelineSection from "@/components/sections/TimelineSectionEn";
import Link from "next/link";

export default function TimelinePage() {
  return (
    <div className="bg-white max-w-[1400px] mx-auto rounded-[24px] shadow-md overflow-hidden mt-4">
      <h1 className="text-[#17458f] text-3xl md:text-4xl font-bold border-l-4 border-white pl-5">
        Манай түүхэн замнал
      </h1>

      {/* CONTENT */}
      <section className="max-w-[1400px] mx-auto px-6 mb-16 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* ===== LEFT CONTENT ===== */}
        <div className="lg:col-span-3">
          {/* ===== 2023 ===== */}
          <h2 className="text-2xl font-semibold text-[#17458f] lg:mb-12 md:mb-12 text-center">
            2023 он
          </h2>

          <TimelineSection
            items={[
              {
                date: "2023 оны 8-р сарын 20",
                title: "Цэцэрлэгийн хандив",
                description:
                  "БНСУ-ын Жэжү арал дахь 3662-р дүүргийн Ханлим Ротари Клубийн гишүүд Улаанбаатар хотын 166 болон 171-р цэцэрлэгүүдэд тоглоом, сургалтын хэрэглэгдэхүүн хандивлав.",
              },
              {
                date: "2023 оны 9-р сарын 23",
                title: "Ротарийн сургалт",
                description:
                  "Шинэ гишүүд Монголын Ротари Төвд зохион байгуулагдсан Ротарийн сургалтад хамрагдав.",
              },
              {
                date: "2023 оны 10-р сарын 28",
                title: "Спортын наадмын аварга",
                description:
                  "Хүннү Ротари Клуб нь Монголын Ротари гишүүдийн спортын наадамд тэргүүн байр эзэлж, аваргын цом хүртэв.",
              },
              {
                date: "2023 оны 11-р сарын 11",
                title: "Албан ёсны батламж гардуулах ёслол",
                description:
                  "Хүннү Ротари Клуб нь 3450-р дүүргийн Олон Улсын Ротариас албан ёсоор батламж гардан авч, үйл ажиллагаагаа эхлүүлэв.",
              },
              {
                date: "2023 оны 11-р сарын 25",
                title: "Яаралтай тусламжийн төвийн ойн арга хэмжээ",
                description:
                  "Клуб нь Үндэсний Яаралтай Тусламжийн Төвийн 10 жилийн ойн арга хэмжээнд оролцов.",
              },
              {
                date: "2023 оны 12-р сарын 4",
                title: "Олон улсын хамтын ажиллагааны санамж бичиг",
                description:
                  "БНСУ-ын 3662-р дүүргийн Ханлим Ротари Клубтэй хамтын ажиллагааны санамж бичиг (MOU) байгуулсан.",
              },
              {
                date: "2023 оны 12-р сарын 23",
                title: "Олон улсын нөхөрлөл",
                description:
                  "Гишүүд БНСУ-ын О-Ю-Лим Ротари Клубийн хүндэт гишүүдтэй уулзалт, нөхөрлөлийн арга хэмжээнд оролцов.",
              },
            ]}
          />

          {/* ===== 2024 ===== */}
          <h2 className="text-2xl font-semibold text-[#0067c8] lg:mt-12 lg:mb-12 md:mt-12 md:mb-12 text-center">
            2024 он
          </h2>

          <TimelineSection
            items={[
              {
                date: "2024 оны 2-р сарын 7",
                title: "Удирдлагын шилжилтийн ёслол",
                description:
                  "БНСУ-ын 3662-р дүүргийн Ханлим Ротари Клубийн удирдлагын шилжилтийн ёслолд оролцов.",
              },
              {
                date: "2024 оны 7-р сарын 6",
                title: "Үндэсний Ротарийн ёслолууд",
                description:
                  "Монгол Улсын хэмжээнд зохион байгуулагдсан Ротари клубүүдийн удирдлагын шилжилтийн ёслолуудад оролцов.",
              },
              {
                date: "2024 оны 8-р сарын 7",
                title: "Олон улсын айлчлал",
                description:
                  "Ханлим Ротари Клубийн гишүүд Монгол Улсад айлчилж, хамтын ажиллагааг бэхжүүлэв.",
              },
              {
                title: "Global Grant төслүүд",
                description:
                  "Global Grant төслүүдийн төлөвлөлт, бэлтгэл ажил: GG2574004, GG2454132 (1000 км – Говь-Алтай), GG2681678.",
              },
              {
                title: "Монгол дахь Ротарийн хөдөлгөөний 30 жилийн ой",
                description:
                  "“THE MAGIC OF ROTARY” уриан дор Монгол дахь Ротарийн хөдөлгөөний 30 жилийн ойг тэмдэглэн өнгөрүүлэв.",
              },
            ]}
          />
        </div>

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
