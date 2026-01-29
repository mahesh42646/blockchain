import { Inter, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supportedLocales } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return supportedLocales.map((locale) => ({ lang: locale }));
}

export const metadata = {
  title: "Block Chain",
  description: "Blockchain platform for cryptocurrency trading",
};

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  const locale = lang || 'en';
  
  return (
    <html lang={locale} className={`${inter.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
