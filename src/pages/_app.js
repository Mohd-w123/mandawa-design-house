import "@/styles/globals.css";
import Navbar from "@/components/Global/Navbar/Navbar";
import { Belleza, Poppins } from "next/font/google";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    </main>
  );
}
