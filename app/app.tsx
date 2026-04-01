// app/app.tsx
import './globals.css'; // global CSS
import Script from 'next/script';
import Head from 'next/head';
import { Geist, Geist_Mono } from 'next/font/google';
import React from 'react';

// Google Fonts
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Digital Growth Agency - Outpro.India" />
        <link rel="icon" href="/favicon.ico" />
        <title>Outpro.India - Digital Solutions</title>
      </head>
      <body className="min-h-screen scroll-smooth bg-black text-white">
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

        {/* Render page content */}
        {children}
      </body>
    </html>
  );
}
