import './globals.css'

const BASE_URL = 'https://atlas-ethiopia.vercel.app'

export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'Atlas Ethiopia | Web Design & Digital Studio — Addis Ababa',
    template: '%s | Atlas Ethiopia',
  },

  description:
    'Atlas Ethiopia is a digital studio based in Addis Ababa helping Ethiopian businesses build professional websites and brand identities. Get found online. Start a conversation today.',

  keywords: [
    'web design Ethiopia',
    'web design Addis Ababa',
    'web development Ethiopia',
    'web development Addis Ababa',
    'website design Ethiopia',
    'digital studio Ethiopia',
    'digital studio Addis Ababa',
    'Ethiopian web agency',
    'brand identity Ethiopia',
    'brand design Addis Ababa',
    'online presence Ethiopia',
    'Atlas Ethiopia',
    'small business website Ethiopia',
    'professional website Ethiopia',
    'get a website Ethiopia',
    'website for Ethiopian business',
    'digital marketing Ethiopia',
    'SEO Ethiopia',
    'affordable web design Ethiopia',
    'ድረ-ገጽ ኢትዮጵያ',
  ],

  authors: [{ name: 'Atlas Ethiopia', url: BASE_URL }],
  creator: 'Atlas Ethiopia',
  publisher: 'Atlas Ethiopia',

  openGraph: {
    type: 'website',
    locale: 'en_ET',
    url: BASE_URL,
    siteName: 'Atlas Ethiopia',
    title: 'Atlas Ethiopia | Web Design & Digital Studio — Addis Ababa',
    description:
      'We help businesses across Ethiopia build a digital presence that is honest, crafted, and built to last. Not just a website — a reputation.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Atlas Ethiopia — Digital Studio based in Addis Ababa, Ethiopia',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Atlas Ethiopia | Web Design & Digital Studio — Addis Ababa',
    description:
      'We help businesses across Ethiopia build a digital presence that is honest, crafted, and built to last.',
    images: ['/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
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

  verification: {
    google: 'V6QpVXRUr_xi-XSPHANapyyMgogeLJ-GNTQUlLCSQO4',
  },

  category: 'technology',
}

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BASE_URL}/#organization`,
    name: 'Atlas Ethiopia',
    alternateName: 'Atlas Ethiopia Digital Studio',
    description:
      'Digital studio based in Addis Ababa helping Ethiopian businesses build professional websites, brand identities, and digital presences.',
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/logo.png`,
      width: 400,
      height: 600,
    },
    image: `${BASE_URL}/og-image.jpg`,
    telephone: '',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Addis Ababa',
      addressLocality: 'Addis Ababa',
      addressRegion: 'Addis Ababa',
      addressCountry: 'ET',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 9.0249,
      longitude: 38.7469,
    },
    areaServed: [
      { '@type': 'Country', name: 'Ethiopia' },
      { '@type': 'City', name: 'Addis Ababa' },
    ],
    serviceType: [
      'Web Design',
      'Web Development',
      'Brand Identity Design',
      'Digital Strategy',
      'E-commerce Development',
      'SEO',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Design & Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Identity' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Strategy' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ongoing Care & Maintenance' } },
      ],
    },
    priceRange: '$$',
    currenciesAccepted: 'ETB, USD',
    paymentAccepted: 'Cash, Bank Transfer',
    openingHours: 'Mo-Fr 09:00-18:00',
    sameAs: [],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: 'Atlas Ethiopia',
    description: 'Digital studio helping Ethiopian businesses get found online.',
    publisher: { '@id': `${BASE_URL}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I need an existing brand or logo to work with Atlas Ethiopia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not at all. Many of our best projects begin with a blank page. We help you define your identity before building your site.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does a website project take in Ethiopia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most websites take 4 to 8 weeks from first conversation to launch. Brand identity work can add 2 to 3 weeks.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will my website work on mobile phones?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Always. In Ethiopia, where most browsing happens on phones, mobile is the first thing we design for — not the last.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does a website cost in Ethiopia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Every business is different, so every price is different. We'd rather understand what you need first before quoting a number.",
        },
      },
    ],
  },
]

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
        {structuredData.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body>{children}</body>
    </html>
  )
}