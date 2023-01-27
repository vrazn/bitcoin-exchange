import { AnalyticsWrapper } from '@/components/atoms/AnalyticsWrapper';
import { Header } from '@/components/atoms/Header';
import { Footer } from '@/components/atoms/Footer';

import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        {children}
        <Footer />
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
