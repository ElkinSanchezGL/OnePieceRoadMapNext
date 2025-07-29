"use client";

import { useState } from "react";
import { useRouter, usePathname } from "./navigation";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { Globe } from "lucide-react";
import Image from "next/image";

import flagEN from "@/assets/flags/en.png";
import flagES from "@/assets/flags/es.png";
import flagFR from "@/assets/flags/fr.png";
import flagDE from "@/assets/flags/de.png";
import flagJP from "@/assets/flags/jp.png";

const languages = [
  { code: "en", label: "English", flag: flagEN },
  { code: "es", label: "Español", flag: flagES },
  { code: "fr", label: "Français", flag: flagFR },
  { code: "de", label: "Deutsch", flag: flagDE },
  { code: "jp", label: "日本語", flag: flagJP },
];

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [showMenu, setShowMenu] = useState(false);

  const currentLang = languages.find((l) => l.code === locale) ?? languages[0];

  const changeLanguage = (newLocale: string) => {
    if (!routing.locales.includes(newLocale as any)) return;
    router.replace(pathname, { locale: newLocale });
    router.refresh();
    localStorage.setItem("lang", newLocale);
    setShowMenu(false);
  };

  return (
    <div className="relative text-sm">
      <button
        className="cursor-pointer flex items-center gap-2 p-2 px-4 bg-white text-black border rounded shadow min-w-[140px]"
        onClick={() => setShowMenu(!showMenu)}
      >
        <div className="relative w-6 h-4">
          <Image
            src={currentLang.flag}
            alt={currentLang.label}
            fill
            sizes="24"
            className="object-contain rounded-sm"
          />
        </div>
        <span>{currentLang.label}</span>
        <Globe className="w-4 h-4 ml-auto text-gray-600" />
      </button>

      {showMenu && (
        <div className="absolute right-0 mt-2 w-44 bg-white border rounded shadow z-10">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="cursor-pointer flex items-center gap-2 w-full px-4 py-2 text-black hover:bg-gray-100"
            >
              <div className="relative w-6 h-4">
                <Image
                  src={lang.flag}
                  alt={lang.label}
                  fill
                  className="object-contain rounded-sm"
                  sizes="24px"
                />
              </div>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
