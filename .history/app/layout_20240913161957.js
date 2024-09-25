import localFont from "next/font/local";
import { Sen } from "next/font/google";

import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/ui/Header";

const josef = Sen({
  subsets:["latin"],
  weight:["400","500","600","700"],
  display:"swap"
})


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${josef.variable} ${josef.variable} antialiased`}
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
