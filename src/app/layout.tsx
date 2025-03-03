import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserratSans = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Todo-Mac",
  description: "Create by Mac-CI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserratSans.className}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
