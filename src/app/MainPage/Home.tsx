'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  LucideBarChart2,
  LucideCalendar,
  LucideShield,
  LucideLayoutGrid,
} from 'lucide-react'
import homepc from '@/assets/HomePagePC.svg'

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000,
      once: true
     })
  }, [])

  const stats = [
    {
      icon: <LucideBarChart2 className="w-6 h-6" />,
      title: "7+ yillik",
      subtitle: "Umumiy tajriba",
      delay: 0,
    },
    {
      icon: <LucideCalendar className="w-6 h-6" />,
      title: "5+",
      subtitle: "Yirik loyihalar",
      delay: 100,
    },
    {
      icon: <LucideLayoutGrid className="w-6 h-6" />,
      title: "8+",
      subtitle: "Xizmat turlari",
      delay: 200,
    },
    {
      icon: <LucideShield className="w-6 h-6" />,
      title: "100%",
      subtitle: "Xavfsizlik",
      delay: 300,
    },
  ]

  return (
    <main className="relative min-h-screen bg-[#0A0020] text-white overflow-x-hidden font-sans">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-no-repeat bg-center opacity-10"
        style={{ backgroundImage: 'url("/bgGlow.png")' }}
        aria-hidden="true"
      />

      <header className="w-full px-6 py-4 flex items-center justify-between container mx-auto relative z-20">
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-white">
          <img src="/NoventerLogo.svg" alt="Noventer Logo" className="h-8 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-md font-medium">
          <Link href="/" className="hover:text-purple-400 transition">Bosh sahifa</Link>
          <Link href="/portfolio" className="hover:text-purple-400 transition">Portfolio</Link>
          <Link href="/xizmatlar" className="hover:text-purple-400 transition">Xizmatlar</Link>
          <Link href="/aloqa" className="hover:text-purple-400 transition">Aloqa</Link>
        </nav>

        <div className="flex items-center space-x-3 text-sm">
          <Link href="/uz" className="hover:text-purple-400 transition">Uz</Link>
          <Link
            href="/contact"
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-md hover:bg-purple-700 transition whitespace-nowrap"
          >
            Loyiha bormi?
          </Link>
        </div>
      </header>

      <section className="container mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="max-w-xl ml-8" data-aos="fade-right">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight mb-6">
            Yuqori sifatdagi<br />
            <span className="font-light">aniqlikka asoslanib</span><br />
            <span className="text-[#5A00DB]">istalgan turdagi</span><br />
            <span>dasturlarni tayyorlaymiz</span>
          </h1>
          <Link
            href="/xizmatlar"
            className="inline-block bg-[#5A00DB] hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
          >
            Xizmatlar haqida
          </Link>
        </div>

        <div className="relative w-full max-w-[700px] mx-auto" data-aos="fade-left">
          <Image
            src={homepc}
            alt="Kompyuter rasm"
            width={700}
            height={500}
            className="w-full h-auto relative z-10 drop-shadow-2xl"
            priority
          />
          <div className="absolute -bottom-10 -right-10 w-full h-full bg-purple-900/30 blur-2xl rounded-xl -z-0" />
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 z-10 relative">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 flex items-center space-x-4 hover:scale-[1.03] transition"
            data-aos="zoom-in"
            data-aos-delay={item.delay}
          >
            <div className="text-white">{item.icon}</div>
            <div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-white/70 text-sm">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-[#5A00DB] py-14 relative z-10" data-aos="fade-up">
        <div className="container px-4 text-start max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Biz haqimizda</h2>
          <p className="text-purple-100 text-lg">Qisqacha ma&apos;lumot</p>
        </div>
      </section>
    </main>
  )
}
