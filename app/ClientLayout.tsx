'use client'; 

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BurguerDespegable } from '@/components/GeneralComponents/BurguerDespegable';
import LanguageSwitcher from '@/components/i18n/LanguageSwitcher';


export default function ClientLayout({ 
  children, 
  lang 
}: { 
  children: React.ReactNode; 
  lang: string;
}) {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && i18n.language.split('-')[0] !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

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