"use client";
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css";

const projects = [
  {
    title: "Tourmad loyihasi",
    description:
      "Tourmad – O‘zbekistonning ichki turizimini rivojlantirish maqsadida ishlab chiqilgan bu web sayt o‘zida bir necha service larni o‘z ichiga jamlagan bo‘lib ulardan: Mehmonxona xizmari, Restoran xizmati, Gitlik xizmati, Mashinada sayohat qilish uchun haydovchilar xizmari va boshqa ko‘plab xizmarlarni o‘z ichiga oladi. Bundan tashqari saytdan o‘zingiz uchun qayerlarga boorish kerakligini va qayerlarda xizmat ko‘satish qancha ekanligini ko‘rishingiz va o‘zingiz uchun oldindan buyurtma qilishingiz mumkin.",
    image: "/images/Loyihalarimiz1.svg",
    link: "#",
  },
  {
    title: "ProRun loyihasi",
    description:
      "Prorun.uz – bu saytda tez-tez bo‘lib o‘tadigan yugurish bo‘yicha musobaqalar bo‘lib o‘tadi va siz saytdan ro‘ yxatdan o‘tgan holda istalgan yoki har bir musobaqada qatnashishingiz mumkin. Nima uchun sayt qurilgan? Musobaqalarda chet ellik ishtirokchilar bo‘lgani bois ularga va boshqa qatnashchilarga ro‘yxatdan o‘tishni oson qilish uchun yangi web ilova ishlab chiqildi.",
    image: "/images/Loyihalarimiz2.svg",
    link: "https://prorun.uz",
  },
  {
    title: "Xalq trans loyihasi",
    description:
      "Bu yerda esa yana ko’proq ma’lumotlar berilishi kerak. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    image: "/images/Loyihalarimiz3.svg",
    link: "#",
  },
];

export default function LoyihalarimizSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b maincolor bgpic bg-repeat-x bg-right inter text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2" data-aos="fade-down">Loyihalarimiz</h2>
          <p className="text-gray-300" data-aos="fade-up">Biz haqimizda qisqacha!</p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-8 items-center"
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            >
              <div className={index % 2 === 0 ? "order-2 md:order-1" : "order-1 md:order-2"}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg shadow-lg w-full h-auto"
                  data-aos="zoom-in"
                />
              </div>
              <div className={index % 2 === 0 ? "order-1 md:order-2" : "order-2 md:order-1"}>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <a href={project.link} className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-2xl border text-white py-2 px-6 rounded-md transition duration-300" data-aos="flip-up">
                  Loyihani ko‘rish
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/barcha-loyihalar"
            className="maincolorone text-white py-3 px-8 rounded-md transition duration-300 hover:bg-white/20 inline-block"
            data-aos="fade-up"
          >
            Barcha loyihalarni ko‘rish
          </a>
        </div>
      </div>
    </div>
  );
}
