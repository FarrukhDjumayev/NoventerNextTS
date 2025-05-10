'use client';

import Image from 'next/image';

export default function ServiceSection() {
  return (
    <section className="min-h-screen flex items-center justify-between px-10 bg-[#0D021C] text-white">
      <div className="max-w-xl">
        <h2 className="text-4xl font-bold mb-4">
          Har bir xizmat turini
        </h2>
        <p className="text-2xl mb-4">
          har bir mijoz uchun <br />
          <span className="text-purple-500 font-bold">alohida ahamiyatli</span> <br />
          deb yondoshamiz!
        </p>
      </div>

      <div className="relative grid grid-cols-2 gap-6">
        {/* Placeholder rasmlar */}
        <div className="w-32 h-32 bg-purple-800 rounded-lg flex items-center justify-center">
          <span className="text-sm">Image 1</span>
        </div>

        <div className="w-40 h-40 bg-purple-700 rounded-lg flex items-center justify-center">
          <span className="text-sm">Image 2</span>
        </div>

        <div className="w-36 h-36 bg-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-sm">Image 3</span>
        </div>

        {/* Empty div uchun joy qoldirib ketilgan */}
        <div className="w-32 h-32 bg-purple-900 rounded-lg opacity-50 flex items-center justify-center">
          <span className="text-xs">Coming soon</span>
        </div>
      </div>
    </section>
  );
}