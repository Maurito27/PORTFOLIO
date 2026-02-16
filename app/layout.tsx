import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: {
    default: 'Portfolio Fullstack | Desarrollo web orientado a venta',
    template: '%s | Portfolio Fullstack'
  },
  description:
    'Portfolio web minimalista con casos reales, servicios y proceso de trabajo para transformar visitas en oportunidades comerciales.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen">
        <SiteHeader />
        <main className="container-base py-10">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
