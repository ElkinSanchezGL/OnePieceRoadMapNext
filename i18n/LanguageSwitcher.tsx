'use client';

import { useState } from 'react';
import { useRouter, usePathname } from './navigation';
import { useLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { Globe } from 'lucide-react'; 

const languages = [
  { code: 'en', label: '🇬🇧 English' },
  { code: 'es', label: '🇪🇸 Español' },
  { code: 'fr', label: '🇫🇷 Français' },
  { code: 'de', label: '🇩🇪 Deutsch' },
  { code: 'jp', label: '🇯🇵 日本語' },
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
    localStorage.setItem('lang', newLocale);
    setShowMenu(false);
  };

  return (
    <div className="relative">

      <select
        value={locale}
        onChange={(e) => changeLanguage(e.target.value)}
        className="hidden sm:block p-2 px-4 rounded bg-white border shadow text-black text-sm sm:text-base"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>

      <button
        className="block sm:hidden p-2 bg-white rounded shadow border"
        onClick={() => setShowMenu(!showMenu)}
        aria-label="Change language"
      >
        <Globe className="w-5 h-5 text-black" />
      </button>

      {showMenu && (
        <div className="absolute z-10 mt-2 right-0 w-44 max-w-[90vw] bg-white border rounded shadow sm:hidden">

          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
