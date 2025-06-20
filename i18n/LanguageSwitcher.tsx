'use client';

import { useRouter, usePathname } from './navigation';
import { useLocale } from 'next-intl';
import { routing } from '@/i18n/routing';

const languages = [
  { code: 'en', label: '🇬🇧 English' },
  { code: 'es', label: '🇪🇸 Español' },
  { code: 'fr', label: '🇫🇷 Français' },
  { code: 'de', label: '🇩🇪 Deutsch' },
  { code: 'jp', label: '🇯🇵 日本語' }
];

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const newLocale = e.target.value as typeof routing.locales[number];

  if (!routing.locales.includes(newLocale)) return;

  router.replace(pathname, { locale: newLocale });
  router.refresh(); 

  localStorage.setItem('lang', newLocale);
};



  return (
    <select
      value={locale}
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
