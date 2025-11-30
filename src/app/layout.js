import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

/* Font variables for Tailwind */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* Keep your real metadata */
export const metadata = {
  title: "Alraad Swim School",
  description: "Alraad Swim School Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-pastelBlue/20 font-sans`}
      >
        {/* Header appears on all pages */}
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
