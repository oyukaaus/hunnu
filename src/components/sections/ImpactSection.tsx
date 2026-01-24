import Image from "next/image";
import Link from "next/link";

interface ImpactItem {
  image: string;
  value: string;
  title: string;
  description: string;
  color: string; // tailwind bg color
}

const impactItems: ImpactItem[] = [
  {
    image: "/images/impact-1.png",
    value: "$49,000",
    title: "Disease Prevention and Treatment",
    description:
      "Our project supporting emergency medical services through the donation of a fully equipped ambulance, medical monitoring devices, and essential equipment.",
    color: "bg-[#8c1d40]", // maroon
  },
  {
    image: "/images/impact-2.png",
    value: "$2,000",
    title: "Supporting Education",
    description:
      "Community-based education support initiatives focused on youth development, skills training, and access to learning opportunities.",
    color: "bg-[#009fda]", // rotary blue
  },
  {
    image: "/images/impact/impact-3.jpg",
    value: "$2.9 BILLION",
    title: "WE WILL END POLIO",
    description:
      "Rotary has contributed more than $2.9 billion to protect children from polio",
    color: "bg-[#008080]", // teal
  },
];

export default function ImpactSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1400px] mx-auto ">
        {/* TITLE */}
        <h2 className="text-center text-2xl sm:text-3xl font-light text-gray-700 mb-16">
          Impact by the numbers
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {impactItems.map((item, index) => (
            <div key={index} className="bg-gray-100 shadow-lg overflow-hidden">
              {/* IMAGE */}
              <div className="relative h-[280px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* VALUE BAR */}
              <div
                className={`text-white text-center font-semibold py-3 ${item.color}`}
              >
                {item.value}
              </div>

              {/* CONTENT */}
              <div className="p-6 bg-white">
                <h3 className="text-sm font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                <Link
                  href="#"
                  className="text-sm font-semibold text-[#009fda] hover:underline"
                >
                  EXPLORE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
