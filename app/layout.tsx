import type { Metadata } from "next";
import "./globals.css";
import { myFonts } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "The Player",
  description: "Portfolio Diego Garcia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={myFonts.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
