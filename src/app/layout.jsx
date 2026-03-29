// src/app/layout.jsx
import "./globals.css";
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/components/DarkModeProvider";
import { PersonSchema, WebsiteSchema } from "@/components/StructuredData";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";
import { Nunito, Fira_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const firaSans = Fira_Sans({
  subsets: ["latin"],
  variable: "--font-fira",
  weight: ["400", "500", "600", "700"],
});

export const metadata = generateSEOMetadata({});

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${nunito.variable} ${firaSans.variable}`}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        <PersonSchema />
        <WebsiteSchema />

        {/* Google Analytics - Replace with your actual GA4 ID */}
        {process.env.NODE_ENV === "production" && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <DarkModeProvider>
        <body className="min-h-screen flex flex-col bg-mono-50 dark:bg-mono-500 text-slate-900 dark:text-slate-50">
          <Navbar />
          <main className="flex-grow md:pt-0 pt-14">{children}</main>
          <Footer />
        </body>
      </DarkModeProvider>
    </html>
  );
}
