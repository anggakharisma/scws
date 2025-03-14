import Navbar from "@/app/components/Navbar";
import "@/app/globals.css";
import { theme } from "@/theme";
import { ThemeProvider } from "@mui/material";
import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import Footer from "../components/Footer";
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700']
});
export const metadata: Metadata = {
  title: "SCWS",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body
          className={`${roboto.className}`}
        >
          <Navbar />
          <main className="mt-4 min-h-screen w-11/12 md:w-3/4 mx-auto border-r-gray-400 border-l-400">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
