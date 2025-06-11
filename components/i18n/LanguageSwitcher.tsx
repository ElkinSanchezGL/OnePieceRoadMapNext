'use client';

import React from "react";
import { useTranslation } from "react-i18next";
import { useRouter, usePathname, useParams } from "next/navigation";

const languages = [
  { code: "es", label: "🇪🇸 Español" },
  { code: "en", label: "🇬🇧 English" },
  { code: "fr", label: "🇫🇷 Français" },
  { code: "de", label: "🇩🇪 Deutsch" },
  { code: "jp", label: "🇯🇵 日本語" }
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    await i18n.changeLanguage(selectedLang);

    const lang = params.lang as string | undefined;
    if (lang) {
      const newPath = pathname.replace(`/${lang}`, `/${selectedLang}`);
      router.replace(newPath);
    }
  };

  const currentLang = params.lang as string;

  return (
    <select
      value={currentLang} // El valor ahora está sincronizado con la URL
      onChange={handleChange}
      className="p-2 rounded bg-white border shadow text-black"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;