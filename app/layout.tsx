import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ScrollToTop from "@/components/scrollToTop";
import bgImage from "@/public/images/bg.jpg";
import headerStyles from "@/styles/Header.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Image from "next/image";
import NextTopLoader from "nextjs-toploader";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aeroxee",
  description:
    "Aeroxee adalah website pribadi dari Fajri Fath yang bisa juga dibilang web portfolio.",
  authors: {
    name: "Fajri Fath",
    url: "https://github.com/Aeroxee",
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  userScalable: false,
  maximumScale: 1,
  width: "device-width",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={``} style={poppins.style}>
        <NextTopLoader />
        <div id="top"></div>
        <Image
          src={bgImage}
          alt="bg"
          width={1200}
          height={800}
          className={`${headerStyles.header} brightness-50`}
        />
        <Navbar />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
