import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const randomTitle = [
  'Азино777 — легальное казино онлайн | Официальный сайт и мобильное приложение',
  'Azino777 казино | Быстрая регистрация и щедрые бонусы для новичков сегодня',
  'Азино мобайл — играй в казино на телефоне | Азино777 официальный',
  'Азино777 официальный сайт | Проверенное казино с лицензией и гарантиями',
  'Азино 777 онлайн казино | Лучшие игры и ежедневные выигрыши ждут',
][Math.floor(Math.random() * 5)]

const randomDescription = [
  'Азино777 — официальное казино с мобильным приложением. Играй в автоматы, рулетку, покер. Быстрые выплаты, щедрые бонусы и безопасная игра на Azino777.',
  'Azino казино - надежное онлайн казино с официальным сайтом. Азино777 мобайл приложение, регистрация за 30 секунд, круглосуточная поддержка.',
  'Азино777 казино онлайн - лучшее место для игры. Официальный азино сайт с высокими коэффициентами выплаты. Азино 777 - проверенное казино.',
  'Azino777 официальный - казино с быстрыми выплатами и честными играми. Азино мобайл скачай бесплатно. Играй в азино 777 прямо сейчас.',
  'Азино 777 казино — легендарная платформа для азартных игр. Азино777 официальный сайт с лучшими условиями. Azino - ваш путь к крупным выигрышам.',
][Math.floor(Math.random() * 5)]

export const metadata: Metadata = {
  title: randomTitle,
  description: randomDescription,
  generator: 'v0.app',
  alternates: {
    canonical: 'https://azino777casino12.vercel.app/',
  },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  icons: {
    icon: '/azino777-favicon.png',
    apple: '/azino777-favicon.png',
  },
  openGraph: {
    title: randomTitle,
    description: randomDescription,
    url: 'https://azino777casino12.vercel.app/',
    type: 'website',
    locale: 'ru_RU',
  },
  other: {
    'og:image': 'https://azino777casino12.vercel.app/azino777-hero.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0f2744',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="language" content="Russian" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <link rel="canonical" href="https://azino777casino12.vercel.app/" />
        <meta name="theme-color" content="#0f2744" />
        <meta name="color-scheme" content="dark" />
        <meta name="yandex-verification" content="af432378ec122bef" />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
