import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "../Global/StaticData";
import Header from "../components/ui/Header"
import Footer from "../components/ui/Footer"
import BackgroundSVG from "../components/ui/BackgroundSVG"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <BackgroundSVG />
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
