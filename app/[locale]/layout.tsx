import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../globals.css';
import ClientLayout from './ClientLayout';

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
  
  const currentLocale = params.locale; 
  console.log('params.locale:', currentLocale);
  const messages = await getMessages({ locale: currentLocale });

  return (
    <html>
      <body>
        <NextIntlClientProvider locale={currentLocale} messages={messages}>
          <ClientLayout>{children}</ClientLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}