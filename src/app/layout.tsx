import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/icomoon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Land Sales",
  description: "Find land for sale across Australia at Land Sales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased body`}>
        <div id="wrapper">
          <div id="pagee" className="clearfix">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
