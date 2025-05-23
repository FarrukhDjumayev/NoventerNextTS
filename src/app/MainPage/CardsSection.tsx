"use client";

import Image from "next/image";
import { useLang } from "@/app/context/LangContext"; // Import the useLang hook

// Card content in multiple languages
const cards = {
  en: [
    {
      title: "The Beginning",
      description: "We started from --- and set goals such as ----.",
      image: "/Card1.jpg",
    },
    {
      title: "Long-Term Projects",
      description: "Throughout our experience, we've completed -- projects in -- time.",
      image: "/Card2.jpg",
    },
    {
      title: "Our Team is Growing",
      description: "Our team is expanding. We started with - people, and now we have -- people.",
      image: "/Card3.jpg",
    },
  ],
  uz: [
    {
      title: "Boshlanishi",
      description: "Biz --- dan ish boshladik va ---- larni oldimizga maqsad qilib qo&apos;ydik",
      image: "/Card1.jpg",
    },
    {
      title: "Uzoq muddatli loyihalar",
      description: "Tajribamiz davomida umumiy hisobda -- loyiha uchun -- muddatda ishlab topshirdik",
      image: "/Card2.jpg",
    },
    {
      title: "Jamoamiz kengaymoqda",
      description: "Jamoamiz safi esa tobora kengaymoqda. Boshida - kishidan boshlangan faoliyatimiz hozirda -- kishi bilan davom etmoqda",
      image: "/Card3.jpg",
    },
  ],
};

export default function CardsSection() {
  const { lang } = useLang(); // Get the current language

  return (
    <section className="bg-gradient-to-b from-[#160038] to-[#0A0020] py-20 px-4 md:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards[lang].map((card, idx) => (
          <div
            key={idx}
            className="group rounded-xl overflow-hidden border border-white/10 bg-white/30 backdrop-blur-3xl shadow-xl transition-transform duration-300 hover:scale-[1.03]"
          >
            <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-64 xl:h-72">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="p-5 text-white space-y-3">
              <h3 className="text-xl font-bold leading-tight">{card.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-16 px-4 text-white/80 text-sm md:text-base leading-relaxed text-start">
        <p>
          {lang === "uz" ? (
            <>
              Bu yerda esa yana ko&apos;proq ma&apos;lumotlar berilishi kerak.
              <br />
              <span>
                Bu yerda esa yana ko'proq ma'lumotlar berilishi kerak. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </span>
            </>
          ) : (
            <>
              Here, more information should be provided.
              <br />
              <span>
                More details should be given here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </span>
            </>
          )}
        </p>
      </div>
    </section>
  );
}
