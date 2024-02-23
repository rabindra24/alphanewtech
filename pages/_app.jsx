import React from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import "./global.css";
import Link from "next/link";
import localFont from "next/font/local";
import { NextUIProvider } from "@nextui-org/react";
import { Fira_Sans } from "next/font/google";
import { NavigationMenuDemo } from "@/components/Navbar/NavbarDesktop";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import NewNavbar from "@/components/Navbar/NewNavbar";
import Navbar from "@/components/Navbar/MyNavbar";

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
    <div className={`${FiraSans.className} ${myFont.variable} w-full`}>
      <NextUIProvider>
        <ThemeProvider attribute="class" defaultTheme="dark" en>
          <div className="header   absolute  z-10 top-0 w-full">
            <div className="flex items-center border-b border-primary  justify-between sm:w-[90%] mx-auto lg:max-w-[1600px]">
              <div>
                <Link href={"/"} className={"text-2xl font-bold "}>
                  <Image
                    src="/logo.svg"
                    width={50}
                    height={50}
                    alt="logo"
                    className="w-12 h-12"
                  />
                </Link>
              </div>
              <NavigationMenuDemo />
            <Navbar/>
            </div>
            {/* <NewNavbar/> */}
          </div>

          <AnimatePresence mode="wait">
            <Component key={router.route} {...pageProps} />
            <Footer />
          </AnimatePresence>
        </ThemeProvider>
      </NextUIProvider>
    </div>
  );
};

export default App;
