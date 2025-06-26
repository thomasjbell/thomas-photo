// src/app/layout.jsx
import "./globals.css";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import { DarkModeProvider } from "@/components/DarkModeProvider";
import { PersonSchema, WebsiteSchema } from "@/components/StructuredData";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = generateSEOMetadata({});

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={inter.className}>
      <head>
        <PersonSchema />
        <WebsiteSchema />
        
        {/* Google Analytics - Replace with your actual GA4 ID */}
        {process.env.NODE_ENV === 'production' && (
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
        <body className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50">
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </DarkModeProvider>
    </html>
  );
}