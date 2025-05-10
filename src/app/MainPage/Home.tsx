'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { LucideBarChart2, LucideCalendar, LucideLayoutGrid, LucideShield } from 'lucide-react'

import Navbar from '@/components/Navbar'
import homepc from '@/assets/HomePagePC.svg'

const stats = [
  { icon: LucideBarChart2, title: '7+ yillik', subtitle: 'Umumiy tajriba', delay: 0 },
  { icon: LucideCalendar, title: '5+', subtitle: 'Yirik loyihalar', delay: 100 },
  { icon: LucideLayoutGrid, title: '8+', subtitle: 'Xizmat turlari', delay: 200 },
  { icon: LucideShield, title: '100%', subtitle: 'Xavfsizlik', delay: 300 },
]

const homeContent = {
  en: {
    title: 'We create any kind of applications based on high quality and precision',
    buttonText: 'Learn about our services',
    aboutTitle: 'About Us',
    aboutSubtitle: 'Brief information',
  },
  uz: {
    title: 'Yuqori sifatdagi aniqlikka asoslanib istalgan turdagi dasturlarni tayyorlaymiz',
    buttonText: 'Xizmatlar haqida',
    aboutTitle: 'Biz haqimizda',
    aboutSubtitle: 'Qisqacha ma\'lumot',
  }
} as const

export default function Home() {
  const [lang, setLang] = useState<'en' | 'uz'>('uz')

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  const toggleLanguage = () => {
    setLang(prevLang => (prevLang === 'uz' ? 'en' : 'uz'))
  }

  return (
    <main className="relative min-h-screen bg-[#0A0020] text-white overflow-hidden font-sans">

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-no-repeat bg-center opacity-10"
        style={{ backgroundImage: 'url("/bgGlow.png")' }}
      />

      <Navbar
        t={{
          home: lang === 'uz' ? 'Bosh sahifa' : 'Home',
          portfolio: lang === 'uz' ? 'Portfel' : 'Portfolio',
          services: lang === 'uz' ? 'Xizmatlar' : 'Services',
          contact: lang === 'uz' ? 'Aloqa' : 'Contact',
          cta: lang === 'uz' ? 'Biz bilan bog‘laning' : 'Get in touch',
        }}
        lang={lang}
        toggleLanguage={toggleLanguage}
      />

      <section className="relative flex flex-col lg:flex-row items-center justify-center w-full min-h-screen px-4 overflow-hidden">
        <div className="max-w-xl text-center lg:text-left space-y-6" data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {homeContent[lang].title}
          </h1>
          <Link
            href="/xizmatlar"
            className="inline-block bg-[#5A00DB] hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
          >
            {homeContent[lang].buttonText}
          </Link>
        </div>

        <div className="relative mt-10 lg:mt-0" data-aos="fade-left">
          <Image
            src={homepc}
            alt="Kompyuter rasmi"
            width={1090}
            height={726}
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute bottom-0 w-full px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, title, subtitle, delay }, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl px-5 py-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                data-aos="zoom-in"
                data-aos-delay={delay}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-sm text-white/70">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      <section className="relative z-10 bg-[#5A00DB] py-16" data-aos="fade-down">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {homeContent[lang].aboutTitle}
          </h2>
          <p className="text-purple-100 text-lg">
            {homeContent[lang].aboutSubtitle}
          </p>
        </div>
      </section>

    </main>
  )
}
