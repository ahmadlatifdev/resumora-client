import type { Metadata } from 'next';
import Header from '@/components/Header';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import './globals.css';

export const metadata: Metadata = {
  title: 'Resumora',
  description: 'Professional Resume & Cover Letter Services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <LanguageSwitcher />
        {children}
      </body>
    </html>
  );
}