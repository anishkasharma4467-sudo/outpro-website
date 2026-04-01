import Script from "next/script";
import Head from "next/head";
import '../styles/globals.css'; // your global CSS

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* GA4 Tracking */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-V859Z3W2ZL"
      />
      <Script strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-V859Z3W2ZL');
        `}
      </Script>

      {/* Default SEO & Open Graph */}
      <Head>
        <title>Outpro.India - Digital Solutions</title>
        <meta name="description" content="Outpro.India empowers businesses digitally with innovative web, UX/UI, and marketing solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Outpro.India - Digital Solutions" />
        <meta property="og:description" content="Empowering businesses digitally with innovative web, UX/UI, and marketing solutions." />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
        <meta property="og:url" content="https://www.outpro.india" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Outpro.India - Digital Solutions" />
        <meta name="twitter:description" content="Empowering businesses digitally with innovative web, UX/UI, and marketing solutions." />
        <meta name="twitter:image" content="https://yourwebsite.com/og-image.jpg" />
      </Head>

      {/* Main App */}
      <Component {...pageProps} />
    </>
  );
}