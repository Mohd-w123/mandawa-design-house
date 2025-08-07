import "@/styles/globals.css";
import Navbar from "@/components/Global/Navbar/Navbar";
import { Belleza, Poppins } from "next/font/google";
import Footer from "@/components/Global/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const belleza = Belleza({
  variable: "--font-belleza",
  weight: ['400'],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${belleza.variable} ${poppins.variable}`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </main>
  );
}
