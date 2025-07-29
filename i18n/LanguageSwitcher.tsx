"use client";

import { useState } from "react";
import { useRouter, usePathname } from "./navigation";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { Globe } from "lucide-react";
import Image from "next/image";
import enFlag from "@/assets/flags/en.png";
import esFlag from "@/assets/flags/es.png";
import frFlag from "@/assets/flags/fr.png";
import deFlag from "@/assets/flags/de.png";
import jpFlag from "@/assets/flags/jp.png";

const languages = [
  { code: "en", name: "English", flag: enFlag },
  { code: "es", name: "Español", flag: esFlag },
  { code: "fr", name: "Français", flag: frFlag },
  { code: "de", name: "Deutsch", flag: deFlag },
  { code: "jp", name: "日本語", flag: jpFlag },
];

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [showMenu, setShowMenu] = useState(false);

  const changeLanguage = (newLocale: string) => {
    if (!routing.locales.includes(newLocale as any)) return;
    router.replace(pathname, { locale: newLocale });
    router.refresh();
    localStorage.setItem("lang", newLocale);
    setShowMenu(false);
  };

  return (
    <div className="relative inline-block text-left">
      <select
        value={locale}
        onChange={(e) => changeLanguage(e.target.value)}
        className="hidden sm:block rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800 text-sm px-4 py-2 shadow-sm dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>

      <button
        onClick={() => setShowMenu(!showMenu)}
        aria-label="Change language"
        className="sm:hidden inline-flex items-center justify-center p-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800 shadow-sm text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      >
        <Globe className="w-8 h-8 text-blue-500" />
      </button>

      {showMenu && (
        <div className="absolute right-0 mt-2 w-44 max-w-[90vw] rounded-xl shadow-lg bg-white dark:bg-neutral-800 ring-1 ring-black ring-opacity-5 z-20">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="w-full flex items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 transition"
            >
<img src={lang.flag.src} alt="flag" width={24} height={24} />
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
