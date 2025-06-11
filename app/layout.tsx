import type { Metadata } from 'next';
import ClientLayout from './ClientLayout'
import TranslationsProvider from '@/components/i18n/TranslationsProvider';
import "./globals.css"


export const metadata: Metadata = {
  title: 'One Piece RoadMap',
  description: 'Explora el mundo de One Piece y sigue el viaje de los Sombrero de Paja.',

}

export default function RootLayout({ 
  children, 
  params 
}: { 
  children: React.ReactNode; 
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body>
        <TranslationsProvider>
        <ClientLayout lang={params.lang}>
          {children}
        </ClientLayout>
        </TranslationsProvider>
      </body>
    </html>
  );
}