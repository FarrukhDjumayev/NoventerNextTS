// components/ClientLangWrapper.tsx
"use client";

import { useLang } from "@/app/context/LangContext";

export default function ClientLangWrapper({ children }: { children: React.ReactNode }) {
  const { lang } = useLang();

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
