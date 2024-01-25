import React from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import "./global.css";
import Link from "next/link";
import localFont from "next/font/local";

import { Fira_Sans } from "next/font/google";
import { NavigationMenuDemo } from "@/components/Navbar/NavbarDesktop";
import Footer from "@/components/Footer/Footer";

const myFont = localFont({
  src: [
    {
      path: "../public/Pontiac-Font-/Fontspring-DEMO-pontiac_light.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Pontiac-Font-/Fontspring-DEMO-pontiac_bold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/Pontiac-Font-/Fontspring-DEMO-pontiac_black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-pontiac",
});

const FiraSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const App = ({ Component, pageProps, router }) => {
  return (
    <div className={`${FiraSans.className} ${myFont.variable} `}>
      <ThemeProvider attribute="class" defaultTheme="dark" en>
        <div className="header w-full absolute  z-10 top-0 flex items-center  justify-between">
          <div>
            <Link href={"/"} className={"text-2xl font-bold "}>
              LOGO
            </Link>
          </div>
          <NavigationMenuDemo />
        </div>

        <AnimatePresence mode="wait">
          <Component key={router.route} {...pageProps} />
          <Footer />
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
};

export default App;
