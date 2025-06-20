import type { Metadata } from 'next';
import ClientLayout from './ClientLayout';
import './globals.css';
import { NextIntlClientProvider, hasLocale} from 'next-intl';
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'One Piece RoadMap',
  description: 'Explora el mundo de One Piece y sigue el viaje de los Sombrero de Paja.',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;



  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ClientLayout>
            {children}
          </ClientLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
