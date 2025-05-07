// app/layout.jsx
import "./globals.css";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Thomas J Bell | Photography",
  description: "Photography portfolio by Thomas J Bell",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col bg-primary-50 dark:bg-primary-900 text-primary-900 dark:text-primary-50">
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}