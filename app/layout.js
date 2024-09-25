import localFont from "next/font/local";
import { Sen } from "next/font/google"; 
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const josef = Sen({
  subsets:["latin"],
  weight:["400","500","600","700"],
  display:"swap"
})

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${josef.variable} ${josef.variable} overflow-x-hidden antialiased`}
      >
        <ThemeProvider attribute='class' defaultTheme='light'>

        <Header/>
        {children}
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
