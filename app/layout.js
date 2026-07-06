import './globals.css'

const BASE_URL = 'https://atlasethiopia.com'

export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'Atlas Ethiopia — Digital Studio',
    template: '%s | Atlas Ethiopia',
  },
  verification: {
    google: 'V6QpVXRUr_xi-XSPHANapyyMgogeLJ-GNTQUlLCSQO4',
  },

  description:
    'Atlas Ethiopia helps businesses across Ethiopia build a digital presence that is honest, crafted, and built to last. Not just a website — a reputation.',

  keywords: [
    'web design Ethiopia',
    'web development Addis Ababa',
    'digital studio Ethiopia',
    'website design Ethiopia',
    'Ethiopian web agency',
    'brand identity Ethiopia',
    'online presence Ethiopia',
    'Atlas Ethiopia',
    'small business website Ethiopia',
    'digital marketing Ethiopia',
  ],

  authors: [{ name: 'Atlas Ethiopia', url: BASE_URL }],
  creator: 'Atlas Ethiopia',
  publisher: 'Atlas Ethiopia',

  openGraph: {
    type: 'website',
    locale: 'en_ET',
    url: BASE_URL,
    siteName: 'Atlas Ethiopia',
    title: 'Atlas Ethiopia — Digital Studio',
    description:
      'Helping businesses across Ethiopia become discoverable online through thoughtful digital experiences.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Atlas Ethiopia — Digital Studio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Atlas Ethiopia — Digital Studio',
    description:
      'Helping businesses across Ethiopia become discoverable online through thoughtful digital experiences.',
    images: ['/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  alternates: {
    canonical: BASE_URL,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Lora:ital,wght@0,400;0,500;1,400;1,500&family=Syne:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Atlas Ethiopia',
              description:
                'Digital studio helping Ethiopian businesses build professional online presences.',
              url: BASE_URL,
              logo: `${BASE_URL}/logo.png`,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Addis Ababa',
                addressCountry: 'ET',
              },
              areaServed: {
                '@type': 'Country',
                name: 'Ethiopia',
              },
              serviceType: [
                'Web Design',
                'Web Development',
                'Brand Identity',
                'Digital Strategy',
              ],
              priceRange: '$$',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}