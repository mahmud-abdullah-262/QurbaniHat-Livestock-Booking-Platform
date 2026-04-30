import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shered/Navbar";
import Footer from "@/components/shered/Footer";

export const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: "QurbaniHat",
  description: "Livestock Booking Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >

     <body className={`${montserrat.className} min-h-full flex flex-col  glass-bg`}>
        
        {children}
        <Footer></Footer>
        </body>
    </html>
  );
}
