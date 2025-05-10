"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

type LangContextType = {
  lang: "uz" | "en";
  toggleLang: () => void; // toggleLang funksiyasini qo'shish
};

export const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<"uz" | "en">("uz");

  // toggleLang funksiyasini yaratish
  const toggleLang = () => {
    setLang(prevLang => (prevLang === "uz" ? "en" : "uz"));
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
};
