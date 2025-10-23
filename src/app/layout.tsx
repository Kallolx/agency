import type { Metadata } from "next";
import { K2D } from "next/font/google";
import "./globals.css";
import Loader from "@/components/Loader";

const k2d = K2D({
  variable: "--font-k2d",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Softune Studios",
  description: "Transform your ideas into reality with cutting-edge technology and innovative design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${k2d.variable} antialiased`}>
        <Loader />
        {children}
      </body>
    </html>
  );
}
