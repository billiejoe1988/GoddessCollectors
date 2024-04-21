import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/ui/Header"
import Footer from "../components/ui/Footer"
import BackgroundSVG from "../components/ui/BackgroundSVG"
import { CartProvider } from '@/components/context/CartContext'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Goddess Collectors",
  description: "For Collectors from Collectors",
}

export default function RootLayout({
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <CartProvider>
            <BackgroundSVG />
            <Header/>
               {children}
            <Footer/>
          </ CartProvider>
        </body>
    </html>
  );
}
