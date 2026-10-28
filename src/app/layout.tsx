import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

import Navbar from "../components/layouts/navbar";
import Footer from "../components/layouts/footer";

export const metadata: Metadata = {
  title: "Muhamad Dicky Ardiansah | Full Stack Developer",
  description:
    "Portfolio of Muhamad Dicky Ardiansah, a full stack developer building modern, practical, and maintainable web applications.",
};

// Konfigurasi SF Pro Display (Untuk Judul/Heading)
const sfDisplay = localFont({
  src: [
    {
      path: "../fonts/SF-Pro-Display-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/SF-Pro-Display-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sf-display",
});

// Konfigurasi SF Pro Text (Untuk Paragraf/Teks Biasa)
const sfText = localFont({
  src: [
    {
      path: "../fonts/SF-Pro-Text-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/SF-Pro-Text-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sf-text",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sfDisplay.variable} ${sfText.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <div>
          <Navbar />
        </div>
        {children}

        <div className="mt-auto">
          <Footer />
        </div>
      </body>
    </html>
  );
}
