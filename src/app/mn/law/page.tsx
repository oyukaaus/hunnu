import { areas } from "@/data/dummy";
import { Table } from "antd";
import Link from "next/link";

export default function LawPage() {
  const columns = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      width: 60,
    },
    {
      title: "Байршил",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Хориотой бүс",
      dataIndex: "area",
      key: "area",
    },
    {
      title: "Өндөржилт",
      dataIndex: "height",
      key: "height",
    },
  ];

  return (
    <div className="bg-white max-w-[1400px] mx-auto rounded-[24px] shadow-md overflow-hidden">
      {/* ===== HERO / BANNER ===== */}
      <div className="relative h-[260px] w-full bg-gradient-to-b from-[#0e4a6f] to-black  mb-16  overflow-hidden">
        <div className="absolute inset-0 " />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 h-full flex flex-col justify-center text-white ">
          <button className="text-white text-[26px] font-inter-bold px-5  border-l-4 border-white text-left mt-20">
            Иргэний нисэхийн тухай
          </button>
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <section className="max-w-[1400px] mx-auto px-6 mb-16 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* ===== LEFT CONTENT ===== */}
        <div className="lg:col-span-3">
          <div className=" text-gray-700 leading-relaxed text-md text-justify">
            <p className=" mb-4 text-mg text-gray-900">
              Нислэгийн бүс болон нислэгийн өндөр
            </p>
            <div className="overflow-x-auto">
              <div className="overflow-x-auto">
                <Table
                  dataSource={areas}
                  columns={columns}
                  pagination={false}
                  scroll={{ x: 600 }}
                />
              </div>
            </div>
            <p className=" mb-4 text-mg text-gray-900 mt-10">
              Дрон нисгэх нөхцөл
            </p>
            <li className="text-justify mt-2 ml-5 list-disc">
              Температур: -10С-+40С болон -20С-+50С-т ажиллана.
            </li>
            <li className="text-justify mt-2 ml-5 list-disc">
              Салхины хурд: 12м/с-ээс ихгүй үед нисгэнэ.
            </li>
            <li className="text-justify mt-2 ml-5 list-disc">
              Бороотой үед ажиллах боломжтой.
            </li>
            <li className="text-justify mt-2 ml-5 list-disc">
              Анхааруулах нь: Соронзон орны долгион 6-аас дээш байх үед дрон
              сүлжээгүй болох эрсдэлтэй.
            </li>
            <p className=" mb-4 text-mg text-gray-900 mt-10">
              Холбогдох хуулиуд
            </p>
            <p className="ml-6">
              <a href="https://mcaa.gov.mn/?p=1294" className="text-blue-400">
                Иргэний нисэхийн ерөнхий газар сайт
              </a>
            </p>
            <p className="ml-6">
              <a
                href="https://backend-api.mcaa.gov.mn/storage/filemanager/4ecd8cd2-7abf-412a-8f57-fd7393d4dc9b.pdf"
                className="text-blue-400"
              >
                ЗӨРЧЛИЙН ТУХАЙ ХУУЛЬД ЗААСАН ИРГЭНИЙ НИСЭХИЙН ҮЙЛ АЖИЛЛАГААТАЙ
                ХОЛБООТОЙ ЗААЛТУУД
              </a>
            </p>
            <p className="ml-6">
              <a
                href="https://legalinfo.mn/mn/detail?lawId=207048"
                className="text-blue-400"
              >
                ИРГЭНИЙ НИСЭХИЙН ДҮРЭМ - 73 ТУСГАЙ ЗОРИУЛАЛТААР АШИГЛАХ АГААРЫН
                ЗАЙ
              </a>
            </p>
            <p className="ml-6">
              <a
                href="https://ais.mn/files/aip/eAIP/doc/IND-101.pdf"
                className="text-blue-400"
              >
                Иргэний Нисэхийн Дүрэм - 101
              </a>
            </p>{" "}
            <p className="ml-6">
              <a
                href="https://backend-api.mcaa.gov.mn/storage/filemanager/b28c70e4-ddc1-4972-9bb7-e0a5aa33c2f5.pdf"
                className="text-blue-400"
              >
                Иргэний Нисэхийн Дүрэм - 102
              </a>
            </p>{" "}
            <p className="ml-6">
              <a
                href="https://backend-api.mcaa.gov.mn/storage/filemanager/6a4523e1-29eb-49e1-a672-15cc7d3de8b0.pdf"
                className="text-blue-400"
              >
                Иргэний Нисэхийн Дүрэм - 71
              </a>
            </p>
            <p className="mt-8 mb-4 text-md text-red-500">
              Нисгэгчгүй нисэх биет (дрон) ашиглах хүн, хуулийн этгээд та бүхэн
              иргэний нисэхийн дүрмийн инд-101.205, инд-101.207, инд-101.211,
              инд-101.215 заасны дагуу агаарын орон зай ашиглахыг хориглосон бүс
              болох Д.Сүхбаатарын талбай, Төрийн ордон, "Маршал" харш, Их тэнгэр
              цогцолбор, Төв цэнгэлдэх хүрээлэн, Хүй долоон худаг дахь
              хориглосон бүсэд тус тус эрх бүхий байгууллагын зөвшөөрөлгүйгээр
              дрон нисгэхгүй байхыг анхааруулж байна.
            </p>
            <p className="mt-4 mb-4 text-md text-gray-900">
              Зөрчлийн тухай хуулийн 14.12 дугаар зүйл.Төрийн тусгай хамгаалалт
              тогтоосон бүсийн агаарын зайн дэглэм зөрчих
            </p>
            <p className="mt-4 mb-4 text-md text-gray-900 font-semibold">
              1.Төрийн тусгай хамгаалалтын байгууллагаас тогтоосон дэглэм
              зөрчиж, төрийн тусгай хамгаалалтын бүсийн агаарын зайд нисгэгчгүй,
              зайнаас удирддаг агаарын хөлгөөр нислэг үйлдсэн бол зөрчлийг
              арилгуулж хүнийг нэг зуун нэгжтэй тэнцэх хэмжээний төгрөгөөр,
              хуулийн этгээдийг нэг мянган нэгжтэй тэнцэх хэмжээний төгрөгөөр
              торгоно.
            </p>
            <p className="mt-4 mb-4 text-md text-gray-900 font-semibold">
              ЦЕГ: Элчин сайдын яам, дипломат төлөөлөгчийн газрын ойр орчимд
              дрон нисгэвэл Зөрчлийн хуулиар хариуцлага хүлээлгэнэ
            </p>
            <p className="mt-4 mb-4 text-md text-gray-900 font-semibold">
              -Монгол Улсад үйл ажиллагаа явуулж буй гадаад улс орнуудын Элчин
              сайдын яам, консулын газар болон дипломат төлөөлөгчийн газрууд нь
              олон улсын эрх зүйн хэм хэмжээний дагуу халдашгүй, бүрэн эрхтэй
              байр, бүсэд хамаардаг.
            </p>
            <p className="mt-4 mb-4 text-md text-gray-900 font-semibold">
              Цагдаагийн албаны тухай хуулийн 12 дугаар зүйлд цагдаагийн
              байгууллага олон нийтийн аюулгүй байдлыг хангах үүргийн хүрээнд
              дипломат төлөөлөгчийн газрыг хамгаалах үүрэгтэй гэж заасан байдаг.
              Иймээс эдгээр обьектын ойр орчимд аливаа сэжигтэй үйлдэл, ялангуяа
              орчин үеийн дрон буюу нисгэгчгүй нисэх төхөөрөмжийг
              зөвшөөрөлгүйгээр нисгэх нь хууль бус үйлдэлд тооцогдоно.
            </p>
            <p className="mt-4 mb-4 text-md text-gray-900 font-semibold">
              Зөрчлийн тухай хуулийн 14.8.3-т зааснаар “нисэхийн үйл ажиллагаанд
              нийтээр дагаж мөрдөх дүрэм, журам зөрчсөн” тохиолдолд хуулийн
              хариуцлага хүлээх зохицуулалттай байдаг.
            </p>
          </div>
        </div>

        {/* ===== RIGHT SIDEBAR ===== */}
                <aside className="lg:col-span-1 hidden sm:inline">
          <div className="bg-gradient-to-b from-[#0E4A6F] to-[#083B5C] text-white rounded-xl p-6 shadow-lg">
            <h4 className="text-lg font-semibold mb-4">Холбооны тухай</h4>

            <ul className="space-y-3 text-md">
              <li key="1">
                <Link
                  href="about"
                  className="block hhover:text-[#d94128] transition text-gray-200"
                >
                  • Танилцуулга
                </Link>
              </li>
              <li key="2">
                <Link
                  href="policy"
                  className="block hover:text-[#d94128] transition font-bold text-gray-200"
                >
                  • Холбооны дүрэм
                </Link>
              </li>
              <li key="3">
                <Link
                  href="board"
                  className="block hover:text-[#d94128] transition  text-gray-200"
                >
                  • Удирдах зөвлөл
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}
