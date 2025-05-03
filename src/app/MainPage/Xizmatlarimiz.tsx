"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  FaFileAlt,
  FaBuilding,
  FaShoppingCart,
  FaUsersCog,
  FaIdBadge,
  FaPenFancy,
  FaChalkboardTeacher,
  FaCogs,
  FaRocket,
} from "react-icons/fa";

const services = [
  {
    title: "Landing sahifalar",
    description: "Qisqa, ta’sirli va maqsadli sahifalar, mijozlarni harakatga undash uchun.",
    icon: <FaFileAlt />,
  },
  {
    title: "Korporativ veb-sayt",
    description: "Kompaniyaning umumiy ma’lumotini taqdim etish, xizmatlar yoki mahsulotlar haqida xabar berish.",
    icon: <FaBuilding />,
  },
  {
    title: "Online do‘kon",
    description: "Mahsulotlarni yoki xizmatlarni onlayn sotish. To‘lov va mahsulot boshqarish tizimi.",
    icon: <FaShoppingCart />,
  },
  {
    title: "CRM tizimi",
    description: "Mijozlar bilan ishlashni avtomatlashtirish va boshqarish. Katta kompaniyalar uchun.",
    icon: <FaUsersCog />,
  },
  {
    title: "Portfolio saytlar",
    description: "Freelancer yoki ijodkorlar uchun o‘z ishlarini taqdim qilish.",
    icon: <FaIdBadge />,
  },
  {
    title: "Blog sahifalari",
    description: "O‘z fikrlaringizni yoki yangiliklarni o‘rtoqlashish uchun.",
    icon: <FaPenFancy />,
  },
  {
    title: "Ta'lim platformasi",
    description: "Online kurslar, testlar yoki o‘quv platformalar uchun.",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "ERP platformasi",
    description: "Korxona yoki tashkilot jarayonlarini avtomatlashtirish.",
    icon: <FaCogs />,
  },
  {
    title: "Alohida loyiha?",
    description: "Startap yoki maxsus loyihangiz bormi? Biz sizga yordam beramiz.",
    icon: <FaRocket />,
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gradient-to-b maincolor inter bgpic bg-left-bottom to-black text-white py-16">
      <h2 className="text-center text-3xl font-bold mb-6" data-aos="fade-down">
        Xizmat turlari
      </h2>
      <p className="text-center text-gray-300 mb-12" data-aos="fade-up">
        Dasturlash sohasidagi eng talabgir xizmat turlaridan quyidagilar:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl bgpic bg-right mx-auto px-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-12 rounded-lg border backdrop-blur-2xl bg-white/15 text-gray-300 hover:scale-105 hover:shadow-xl hover:bg-white/30 transition-transform duration-300 flex flex-col items-center"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
