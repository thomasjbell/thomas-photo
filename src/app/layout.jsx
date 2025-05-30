// app/layout.jsx
import "./globals.css";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import { DarkModeProvider } from "@/components/DarkModeProvider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Thomas J Bell | Photography",
  description: "Photography photography by Thomas J Bell",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <DarkModeProvider>
        <body className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50">
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </DarkModeProvider>
    </html>
  );
}
