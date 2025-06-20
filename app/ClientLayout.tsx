'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { BurguerDespegable } from '@/components/GeneralComponents/BurguerDespegable';
import LanguageSwitcher from '@/i18n/LanguageSwitcher';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  React.useEffect(() => {
    localStorage.setItem('lang', locale);
  }, [locale]);

  return (
    <>
      {children}

      <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 1000 }}>
        <LanguageSwitcher />
      </div>

      <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000 }}>
        <BurguerDespegable />
      </div>
    </>
  );
}
