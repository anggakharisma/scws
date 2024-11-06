import "@/app/globals.css";
import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700']
});

export const metadata: Metadata = {
  title: "SCWS",
  description: "SCWS School website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}`}
      >
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
