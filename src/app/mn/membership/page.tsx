import Image from "next/image";
import Link from "next/link";

export default function MembershipPage() {
  return (
    <div className="bg-white max-w-[1400px] mx-auto rounded-[24px] shadow-md overflow-hidden">
      {/* ===== HERO / BANNER ===== */}
      <div className="relative h-[260px] w-full bg-gradient-to-b from-[#0e4a6f] to-black  mb-16 rounded-b-[24px] overflow-hidden">
        <div className="absolute inset-0 " />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 h-full flex flex-col justify-center text-white ">
          <button className="text-white text-[26px] font-inter-bold px-5  border-l-4 border-white text-left mt-20">
            Гишүүнчлэл
          </button>
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <section className="max-w-[1400px] mx-auto px-6 mb-16 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* ===== LEFT CONTENT ===== */}
        <div className="lg:col-span-3">
          <blockquote className=" text-gray-700 italic mb-10">
            “Монголын дрон нисгэгчдийн холбоо”НҮТББ нь 2016 оны 11 дүгээр сарын
            15-ний өдөр үүсгэн байгуулагдсан бөгөөд 2025 оны 2 дугаар сарын
            11-ний өдрөөс И.Наранбаатар нь Удирдах зөвлөлийн даргаар сонгогдон
            ажиллаж, тус холбооны үйл ажиллагааг удирдан чиглүүлж байна.
          </blockquote>

          <div className=" text-gray-700 leading-relaxed text-md">
            <p className="mt-12 mb-4 text-xl font-semibold text-gray-900">
              ҮЙЛ АЖИЛЛАГААНЫ ЧИГЛЭЛ:
            </p>
            <p className="ml-4">
              • Нисгэгчгүй нисэх төхөөрөмж (дрон)-ийн ерөнхий болон чиглэлийн
              сургалт зохион байгуулах
            </p>
            <p className="ml-4">
              • FPV (First Person View) дроны мэргэжлийн удирдлагын сургалт
            </p>
            <p className="ml-4">
              • Нисгэгчгүй нисэх төхөөрөмжтэй холбоотой мэргэжлийн зөвлөх
              үйлчилгээ үзүүлэх
            </p>
            <p className="ml-4">
              • Захиалгын дагуу албан ёсны баталгаат дрон болон сэлбэг, тоног
              төхөөрөмж нийлүүлэх
            </p>
            <p className="ml-4">
              • Албан ёсны засвар үйлчилгээ, оношилгоо хийх, зөвлөн туслах
              үйлчилгээ үзүүлэх
            </p>
          </div>

          <div>
            <p className="mt-12 mb-2 text-xl font-semibold text-gray-900">
              Гишүүнээр элсэх журам
            </p>
            <div className=" text-gray-700 leading-relaxed text-md text-justify">
              <p className="mt-12 mb-4 text-mg text-gray-900">
                “Монголын дрон нисгэгчдийн холбоо” НҮТББ нь Монгол улсын дроны
                салбарын хөгжилд хувь нэмэр оруулах зорилготой байгууллага
                бөгөөд гишүүнээр дараах үндэслэлүүдийн хүрээнд элсүүлнэ:
              </p>
              <p className="ml-6">
                • Холбооны зорилго, үнэт зүйлсийг хүлээн зөвшөөрч, үйл
                ажиллагаанд идэвхтэй оролцох хүсэлтэй байх.
              </p>
              <p className="ml-6">
                • Холбооны дүрэм, журмыг баримтлан ажиллах эрх зүйн чадамжтай
                байх
              </p>
              <p className="ml-6">
                • Гишүүнчлэлийн татвар төлөх чадвартай, тогтмол оролцоотой байх.
              </p>
              <p className="ml-6">
                • Монгол Улсын холбогдох хууль, тогтоомжийн дагуу бүртгэгдсэн аж
                ахуйн нэгж, байгууллага, хамт олон, иргэн (нисгэгч) байх.
              </p>
              <p className="mt-8 mb-4 text-md text-gray-900">
                Энэхүү журам нь “Монголын Дрон Нисгэгчдийн Холбоо” НҮТББ (цаашид
                “Холбоо” гэх)-ны гишүүнчлэлийн хэлбэр, бүртгэл, гишүүнчлэлтэй
                холбоотой бусад харилцааг зохицуулахад оршино.
              </p>
              <p className="mt-4 mb-4 text-md text-gray-900">
                Холбоо нь гишүүдийн идэвхтэй оролцоо, хамтын ажиллагаанд
                тулгуурлан, салбарын хөгжлийг дэмжин ажиллана.
              </p>
              <p className="mt-4 mb-4 text-md text-gray-900 font-semibold">
                1. Гишүүдийн эрх, боломж:
              </p>
              <p className="mt-2 text-md text-gray-900">
                1.1. Нэгдсэн байдлаар эрх ашгаа хамгаалуулах, хамгаалах үйл
                явдалд оролцоно
              </p>
              <p className="mt-2 text-md text-gray-900 mt-[-5px]">
                1.2. Төсөл, хөтөлбөрт хамтран ажиллах, хамрагдах.
              </p>
              <p className="mt-2 text-md text-gray-900 mt-[-5px]">
                1.3. Шинэ техник, технологийн мэдээлэл, туршлага хуваалцах үйл
                ажиллагаанд оролцох
              </p>
              <p className="mt-2 text-md text-gray-900 mt-[-5px]">
                1.4. Төрийн болон хувийн байгууллагын шагнал, урамшуулалд нэр
                дэвшихэд холбооны зүгээс дэмжлэг авах
              </p>
              <p className="mt-2 text-md text-gray-900 mt-[-5px] ">
                1.5. Салбарын бодлого, хууль эрх зүйн орчныг сайжруулахад санал
                дүгнэлт боловсруулах, төр болон бусад байгууллагатай хамтран
                ажиллах, хэлэлцүүлэг, бодлогын баримт бичгийн боловсруулалтад
                оролцох
              </p>
              <p className="mt-2 text-md text-gray-900 mt-[-5px]">
                1.6. Холбооноос гаргасан судалгаа, дүн шинжилгээ, зөвлөмж,
                тайлангуудыг нээлттэй хүлээн авах.
              </p>
              <p className="mt-2 text-md text-gray-900 mt-[-5px]">
                1.7. Холбооны зохион байгуулж буй мэргэжлийн болон спортын
                чиглэлийн сургалт, семинарт хөнгөлөлттэй болон урьдчилсан
                нөхцөлөөр хамрагдах.
              </p>
              <p className="mt-2 text-md text-gray-900 mt-[-5px]">
                1.8. Холбооны гишүүд дроны нисгэгчийн гэрчилгээ олгох болон
                мэргэшлийн түвшин ахиулах сургалтад хамрагдах тохиолдолд
                бүртгэлийн хураамжид хөнгөлөлт эдлэнэ
              </p>
              <p className="mt-2 text-md text-gray-900 mt-[-5px]">
                1.9. Олон улсын үзэсгэлэн, форум, тэмцээн, хурал зөвлөгөөнд
                Холбооны шугамаар оролцох.
              </p>
              <p className="mt-2 text-md text-gray-900 mt-[-5px]">
                1.10. Олон улсын байгууллагуудтай хамтран хэрэгжүүлж буй төсөл,
                солилцооны хөтөлбөрт хамрагдах.
              </p>
              <p className="mt-4 mb-4 text-md text-gray-900 font-semibold">
                2. Гишүүний үүрэг:
              </p>
              <p className="mt-2 text-md text-gray-900 ">
                2.1. .Холбооны дүрэм, дотоод журмыг чандлан сахиж, түүний дагуу
                ажиллах
              </p>
              <p className="mt-2 text-md text-gray-900 mt-[-5px]">
                2.2. Удирдах зөвлөл болон Хурлаас гаргасан шийдвэрийг биелүүлэх.
              </p>
              <p className="mt-2 text-md text-gray-900 mt-[-5px]">
                2.3. Гишүүнчлэлийн татварыг тогтоосон хугацаанд бүрэн, үнэн зөв
                төлөх.
              </p>
              <p className="mt-2 text-md text-gray-900 mt-[-5px]">
                2.4. Холбооноос зохион байгуулж буй сургалт, хурал, арга
                хэмжээнд тогтмол оролцох.
              </p>
              <p className="mt-2 text-md text-gray-900 mt-[-5px]">
                2.5. Салбарын хөгжилд хувь нэмэр оруулах санаачилга гаргах.
              </p>
              <p className="mt-2 text-md text-gray-900 mt-[-5px]">
                2.6. Холбооны дотоод сүлжээ, цахим болон албан бичгийн
                харилцаанд хариу өгч, хамтран ажиллах.
              </p>
              <p className="mt-2 text-md text-gray-900 mt-[-5px]">
                2.7. Холбооны нэр хүнд, үйл ажиллагааг олон нийтэд зөв таниулах,
                гутаан доромжлох аливаа үйлдлээс татгалзах.
              </p>
              <p className="mt-2 text-md text-gray-900 mt-[-5px]">
                2.8. Гишүүн байгууллага, хувь гишүүдийн үйл ажиллагаанд
                хүндэтгэлтэй хандаж, хамтран ажиллах зарчмыг баримтлах
              </p>
              <p className="mt-2 text-md text-gray-900 mt-[-5px]">
                2.9. Төсөл, хөтөлбөрт хамтран ажиллах үүрэгтэй.
              </p>
              <p className="mt-4 mb-4 text-md text-gray-900 font-semibold">
                3. Гишүүнийг хасах журам:
              </p>
              <p className="mt-2 text-md text-gray-900 ">
                3.1. Гишүүний үүргээ биелүүлээгүй тохиолдолд.
              </p>
              <p className="mt-2 text-md text-gray-900 mt-[-5px]">
                3.2. Гишүүнчлэлийн татвараа удаа дараа төлөөгүй.
              </p>
              <p className="mt-2 text-md text-gray-900 mt-[-5px]">
                3.3. Холбооны дүрэм, журам, хурал, шийдвэрийг биелүүлээгүй.
              </p>
              <p className="mt-2 text-md text-gray-900 mt-[-5px]">
                3.4. Хурал, үйл ажиллагаанд тогтмол оролцоогүй.
              </p>
              <p className="mt-2 text-md text-gray-900 mt-[-5px]">
                3.5. Ёс зүй, хуулийн зөрчил гаргасан тохиолдолд
              </p>
              <p className="mt-2 text-md text-gray-900 mt-[-5px]">
                3.6. Холбооны нэр хүндэд сөргөөр нөлөөлөх үйлдэл гаргасан.
              </p>
              <p className="mt-2 text-md text-gray-900 mt-[-5px]">
                3.7. Хуурамч мэдээлэл тараах, бусад гишүүдэд хохирол учруулах
                үйлдэл гаргасан.
              </p>
              <p className="mt-2 text-md text-gray-900 mt-[-5px]">
                3.8. Монгол Улсын хууль тогтоомж зөрчсөн нь нотлогдсон.
              </p>
              <p className="mt-2 text-md text-gray-900 mt-[-5px]">
                3.9. Гишүүнчлэлээс гаргах хүсэлтийг албан ёсоор бичгээр ирүүлсэн
                тохиолдолд бүртгэлээс хасна.
              </p>
              <p className="mt-2 text-md text-gray-900 mt-[-5px]">
                3.10. Хасах асуудлыг Удирдах зөвлөл хэлэлцэж, олонхын саналаар
                шийдвэр гаргана.
              </p>
              <p className="mt-2 text-md text-gray-900 mt-[-5px]">
                3.11. Шийдвэрийг албан ёсоор тухайн гишүүнд мэдэгдэнэ.
              </p>
            </div>
            <p className="mt-4 mb-4 text-md text-gray-900 font-semibold">
              Гишүүнээр элсэх хүсэлтэй байгууллага, хувь хүн{" "}
              <a
                href="/anket.docx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                анкет 
              </a>
               {" "}бөглөнө.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
