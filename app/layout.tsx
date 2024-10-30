import type { Metadata } from "next";
import localFont from "next/font/local";
import {Providers} from "./providers";
import Script from 'next/script'
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"
          strategy="beforeInteractive"
        />
        {children}
        </Providers>
      </body>
    </html>
  );
}
