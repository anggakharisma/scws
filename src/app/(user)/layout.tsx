import "@/app/globals.css";
import { theme } from "@/theme";
import {
    ThemeProvider
} from "@mui/material";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import MainWrapper from "../components/MainWrapper";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
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
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body className={`${roboto.className}`}>
          <MainWrapper>
            {children}
          </MainWrapper>
        </body>
      </html>
    </ThemeProvider>
  );
}
