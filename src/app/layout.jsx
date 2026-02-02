import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import LocaleSetter from "@/components/LocaleSetter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Block Chain",
  description: "Blockchain platform for cryptocurrency trading",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <LocaleSetter />
        {children}
      </body>
    </html>
  );
}
