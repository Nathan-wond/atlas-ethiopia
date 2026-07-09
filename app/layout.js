import './globals.css'

const BASE_URL = 'https://atlas-ethiopia.vercel.app'

export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'Atlas Ethiopia | Web Design & Development Studio — Addis Ababa',
    template: '%s | Atlas Ethiopia Digital Studio',
  },

  description:
    'Atlas Ethiopia is a premium web design and development studio based in Addis Ababa. We build professional websites, brand identities, and digital experiences for businesses across Ethiopia. Get found online.',

  keywords: [
    'web design Ethiopia',
    'web development Ethiopia',
    'website design Addis Ababa',
    'web designer Ethiopia',
    'website developer Ethiopia',
    'UI UX design Ethiopia',
    'digital studio Ethiopia',
    'creative agency Ethiopia',
    'brand identity Ethiopia',
    'custom website development Ethiopia',
    'business website Ethiopia',
    'portfolio website Ethiopia',
    'e-commerce website Ethiopia',
    'professional web design Addis Ababa',
    'web design agency Addis Ababa',
    'affordable website design Ethiopia',
    'small business website Ethiopia',
    'Ethiopian web designer',
    'online presence Ethiopia',
    'digital marketing Ethiopia',
    'SEO Ethiopia',
    'ድረ-ገጽ ዲዛይን ኢትዮጵያ',
    'Atlas Ethiopia',
    'Atlas Ethiopia digital studio',
  ],

  authors: [{ name: 'Atlas Ethiopia Digital Studio', url: BASE_URL }],
  creator: 'Atlas Ethiopia',
  publisher: 'Atlas Ethiopia',

  openGraph: {
    type: 'website',
    locale: 'en_ET',
    url: BASE_URL,
    siteName: 'Atlas Ethiopia Digital Studio',
    title: 'Atlas Ethiopia | Premium Web Design & Development — Addis Ababa, Ethiopia',
    description:
      'We design and build professional websites and brand identities for businesses across Ethiopia. Based in Addis Ababa. Helping Ethiopian businesses get found online.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Atlas Ethiopia — Premium Web Design and Development Studio based in Addis Ababa, Ethiopia',
        type: 'image/jpeg',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Atlas Ethiopia | Web Design & Development — Addis Ababa',
    description:
      'Premium web design and development studio based in Addis Ababa. Helping Ethiopian businesses get found online.',
    images: [{ url: '/og-image.jpg', alt: 'Atlas Ethiopia Digital Studio' }],
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
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },

  alternates: {
    canonical: BASE_URL,
    languages: { 'en-ET': BASE_URL },
  },

  verification: {
    google: 'V6QpVXRUr_xi-XSPHANapyyMgogeLJ-GNTQUlLCSQO4',
  },

  category: 'Web Design & Development',

  other: {
    'geo.region': 'ET-AA',
    'geo.placename': 'Addis Ababa',
    'geo.position': '9.0249;38.7469',
    'ICBM': '9.0249, 38.7469',
  },
}

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness'],
    '@id': `${BASE_URL}/#organization`,
    name: 'Atlas Ethiopia Digital Studio',
    alternateName: ['Atlas Ethiopia', 'Atlas Ethiopia Web Design'],
    description:
      'Atlas Ethiopia is a premium web design and development studio based in Addis Ababa, Ethiopia. We help businesses across Ethiopia build professional websites, brand identities, and digital presences that get found on Google.',
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      '@id': `${BASE_URL}/#logo`,
      url: `${BASE_URL}/logo.png`,
      width: 400,
      height: 600,
      caption: 'Atlas Ethiopia Digital Studio Logo',
    },
    image: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/og-image.jpg`,
      width: 1200,
      height: 630,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Addis Ababa',
      addressLocality: 'Addis Ababa',
      addressRegion: 'Addis Ababa City Administration',
      addressCountry: 'ET',
      postalCode: '1000',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 9.0249,
      longitude: 38.7469,
    },
    areaServed: [
      { '@type': 'Country', name: 'Ethiopia' },
      { '@type': 'City', name: 'Addis Ababa' },
      { '@type': 'City', name: 'Dire Dawa' },
      { '@type': 'City', name: 'Hawassa' },
      { '@type': 'City', name: 'Mekelle' },
      { '@type': 'City', name: 'Gondar' },
      { '@type': 'City', name: 'Bahir Dar' },
    ],
    knowsAbout: [
      'Web Design',
      'Web Development',
      'Brand Identity Design',
      'UI/UX Design',
      'E-commerce Development',
      'Digital Strategy',
      'Search Engine Optimization',
      'Mobile-First Design',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Design & Digital Services in Ethiopia',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Design & Development Ethiopia',
            description: 'Custom website design and development for Ethiopian businesses. Mobile-first, fast, and built to convert visitors into customers.',
            provider: { '@id': `${BASE_URL}/#organization` },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Brand Identity Design Ethiopia',
            description: 'Logo design, color systems, typography, and complete brand identity for businesses in Ethiopia.',
            provider: { '@id': `${BASE_URL}/#organization` },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-commerce Website Development Ethiopia',
            description: 'Online store design and development for Ethiopian businesses selling products locally and internationally.',
            provider: { '@id': `${BASE_URL}/#organization` },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Digital Strategy Addis Ababa',
            description: 'Digital strategy and consulting for Ethiopian businesses looking to grow their online presence.',
            provider: { '@id': `${BASE_URL}/#organization` },
          },
        },
      ],
    },
    priceRange: '$$',
    currenciesAccepted: 'ETB, USD',
    paymentAccepted: 'Cash, Bank Transfer, Mobile Money',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    foundingDate: '2024',
    slogan: 'Putting Ethiopian businesses on the digital map.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: 'Atlas Ethiopia Digital Studio',
    description: 'Premium web design and development studio in Addis Ababa, Ethiopia.',
    publisher: { '@id': `${BASE_URL}/#organization` },
    inLanguage: 'en-ET',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does a website cost in Ethiopia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Every business is different, so every website price is different. At Atlas Ethiopia, we prefer to understand your specific needs before quoting a number. Reach out and we will give you an honest, tailored price.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does web design take in Addis Ababa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most website projects at Atlas Ethiopia take 4 to 8 weeks from first conversation to launch. Brand identity projects can add 2 to 3 weeks. We give every client a clear timeline before we begin.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a logo before getting a website in Ethiopia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Many of our best projects start from scratch. Atlas Ethiopia offers both brand identity design and website development, so we can build your complete digital presence from the ground up.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will my website work on mobile phones in Ethiopia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Always. In Ethiopia, where most people browse on mobile phones, we design mobile-first — meaning your website is built for phones before anything else.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can Atlas Ethiopia help my business get found on Google?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Every website we build at Atlas Ethiopia is optimized for search engines from the ground up — fast loading, mobile-friendly, structured correctly, and built to help Ethiopian businesses get found on Google.',
        },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/#services` },
      { '@type': 'ListItem', position: 3, name: 'Our Work', item: `${BASE_URL}/#work` },
      { '@type': 'ListItem', position: 4, name: 'Contact', item: `${BASE_URL}/#contact` },
    ],
  },
]

export default function RootLayout({ children }) {
  return (
    <html lang="en-ET">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700..900;1,9..144,700..900&family=Lora:ital,wght@0,400;1,400&family=Syne:wght@700;800&display=swap&font-display=swap"
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