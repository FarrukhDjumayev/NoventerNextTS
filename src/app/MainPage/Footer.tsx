"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";


const Footer: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="relative maincolor text-white inter py-16 px-8">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bgGlow.png"
          alt="Background"
          fill
          style={{ objectFit: "cover", objectPosition: "right bottom" }}
        />
      </div>

      <div className="w-11/12 mx-auto flex justify-center items-center flex-col p-4 m-4">
        <h2 className="text-4xl font-semibold p-2 m-2" data-aos="fade-up">Biz bilan aloqa</h2>
        <p className="font-normal" data-aos="fade-up" data-aos-delay="200">
          Loyihangizni qanday realizatsiya qilish haqida batafsil suhbatlashamiz
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* JAMOA HAQIDA */}
        <div
          className="bg-white/5 backdrop-blur-lg border p-6 rounded-2xl w-full lg:w-2/3"
          data-aos="fade-up"
        >
          <h2 className="text-xl font-semibold mb-6">Bizning jamoa haqida</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-2xl border p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 hover:border-[#7D2EFF] transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-12 bg-white rounded-md"></div>
                <div>
                  <h3 className="font-semibold">Xusanov Alibek</h3>
                  <p className="text-sm text-gray-400">Developer</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* KONSULTATSIYA FORMASI */}
        <div
          className="bg-white/5 backdrop-blur-2xl border p-6 rounded-2xl w-full lg:w-1/3"
          data-aos="zoom-in"
        >
          <h2 className="text-xl font-semibold mb-4">Bepul konsultatsiya</h2>
          <p className="text-sm text-white mb-6">
            Loyihangiz bo‘yicha boshlang‘ich bepul konsultatsiya uchun ma’lumotingizni qoldiring.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Ismingiz"
              className="w-full p-3 bg-white/5 rounded-md focus:outline-none hover:bg-white/10 hover:border-white focus:ring-2 focus:ring-[#7D2EFF] transition-all"
            />
            <input
              type="tel"
              placeholder="Telefon raqamingiz"
              className="w-full p-3 bg-white/5 rounded-md focus:outline-none hover:bg-white/10 hover:border-white focus:ring-2 focus:ring-[#7D2EFF] transition-all"
            />
            <button
              type="submit"
              className="w-full bg-[#7D2EFF] text-white active:bg-amber-50 active:text-blue-700 py-3 rounded-md text-lg font-semibold hover:bg-[#6A1EDB] hover:shadow-lg transition-all"
            >
              Jo’natish
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
