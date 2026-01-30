import Link from "next/link";

const steps = [
  {
    title: "Таны сонирхол",
    desc: "Өөрийнхөө тухай болон клубээс юу хүлээж байгаагаа бидэнд товчхон мэдээлнэ үү. Бид таны бүс нутагт тохирох орон нутгийн клубүүдийг олж, таны сонирхлыг тэдэнд уламжилна.",
  },
  {
    title: "Ротари танд тохирох клубийг санал болгоно",
    desc: "Таны сонирхол, хүсэл зорилгод үндэслэн орон нутгийн Ротарийн удирдлагууд танд хамгийн тохиромжтой клубийг санал болгоно.",
  },
  {
    title: "Орон нутгийн клуб тантай холбогдоно",
    desc: "Ротари эсвэл Ротаракт клубийн гишүүн таньтай имэйл эсвэл утсаар холбогдож, таны сонирхлын талаар ярилцана. Та уулзалт, нөхөрлөлийн арга хэмжээ эсвэл сайн үйлсийн төсөлд уригдана.",
  },
  {
    title: "Клуб таныг гишүүнээр урина",
    desc: "Харилцан танилцаж, тохирох эсэхийг тодорхойлсны дараа таныг клубийн гишүүнээр элсэхийг урьна. Клуб бүр шинэ гишүүдийг өөр өөрийн онцлог арга барилаар хүлээн авдаг.",
  },
  {
    title: "Та гишүүн боллоо!",
    desc: "Ротарийн гишүүний хувьд шинэ клубийнхээ үйл ажиллагаанд идэвхтэй оролцоорой. Хороонд нэгдэх, сайн үйлсийн төсөл удирдах, арга хэмжээ зохион байгуулах замаар нийгэмдээ хувь нэмрээ оруулаарай.",
  },
];

export default function MembershipPage() {
  return (
    <div className="bg-white max-w-[1400px] mx-auto rounded-[24px] shadow-md overflow-hidden ">
      {/* ===== HERO / BANNER ===== */}

      <h1 className="text-[#17458f] text-3xl md:text-4xl font-bold border-l-4 border-white pl-5 py-16 text-center">
        Гишүүнчлэл
      </h1>

      {/* CONTENT */}
      <section className="max-w-[900px] mx-auto px-6 py-4">
        {/* Intro */}
        <h2 className="text-sm font-semibold tracking-wide text-gray-500 uppercase mb-3">
          Манай гишүүнчлэл хэрхэн явагддаг вэ?
        </h2>

        <p className="text-lg text-gray-700 mb-14">
          Бид танд хамгийн тохирох клубтэй холбож өгч, гишүүнчлэлд хурдан бөгөөд
          хялбар байдлаар хамрагдахад тусална.
        </p>

        <div className="space-y-14">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;

            return (
              <div key={i} className="relative flex gap-6 items-start">
                <div className="relative flex flex-col items-center">
                  <span className="w-6 h-6 rounded-full border-2 border-[#00a2e0] bg-white z-10" />

                  {!isLast && (
                    <span
                      className="
                        absolute
                        top-6
                        h-[calc(100%+95px)]
                        border-l-2
                        border-dotted
                        border-[#00a2e0]
                      "
                    />
                  )}
                </div>
                <div className="pt-0.5">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed max-w-2xl">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </section>
    </div>
  );
}
