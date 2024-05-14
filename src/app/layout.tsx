import type { Metadata } from "next";
import { Archivo } from 'next/font/google'
import './styles.css'
import "./globals.css";

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
})

export const metadata: Metadata = {
  title: "Hackernyaws",
  description: "Hackernews for Cats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
          <body className={archivo.variable}>
            {children}
          </body>
        </html>
  );
}
