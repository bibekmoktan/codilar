import "./globals.css";
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Codilar - Transforming eCommerce with Excellence',
  description: 'Pioneering Success Across Shopify, Adobe Commerce, Akinon, AEM, and Pimcore.',
  keywords: 'Codilar, Digital Commerce, eCommerce, Shopify, Adobe Commerce, Headless Commerce, B2B, B2C, D2C',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: {
      url: '/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen overflow-x-hidden">
        <Header />
        <main className="flex-grow relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
