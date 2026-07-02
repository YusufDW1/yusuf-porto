import type { Metadata } from 'next';
import { Sora, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../components/ThemeProvider';
import SmoothScroll from '../components/SmoothScroll';

const sora = Sora({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Yusuf Dwi Saputra — Frontend & Game Developer',
  description:
    'Portfolio of Yusuf Dwi Saputra — Mobile Frontend & Game Developer from Tegal, Indonesia. Building immersive mobile apps and pixel-perfect game worlds.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="dark light" />
      </head>
      <body
        className={`${sora.variable} ${sourceSans.variable}`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
