import Page from "@/components/page";
import Stairs from "@/components/stairs";
import { Button } from "@/components/ui/button";
import Achivement from "@/sections/Homepage/Achivement";
import DedicatedSolutions from "@/sections/Homepage/DedicatedSolutions";
import OurWorks from "@/sections/Homepage/OurWorks";
import Services from "@/sections/Homepage/Services";
import TrustedSection from "@/sections/Homepage/TrustedSection";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { SVGMaskEffectDemo } from "@/sections/Homepage/SVGMaskEffectDemo";

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
export default function Home() {
  return (
    <Stairs>
      {/* <div className="flex items-center top-20 min-h-screen h-100 flex-col relative md:px-10 px-5 text-center">
        <p className="font-thin text-sm font-pontiac">We are</p>

        <div className="relative">
          <div className="w-[1px] h-[10px] bg-primary my-2 absolute left-0 bottom-0"></div>
          <div className="w-[1px] h-[10px] bg-primary my-2 absolute right-0 bottom-0"></div>
          <div className="w-[1px] h-[10px] bg-primary my-2 absolute left-[50%] bottom-[-10px]"></div>
          <div className="w-[120px] h-[1px] bg-primary my-2"></div>
        </div>

        <div className="mt-28">
          <h2 className="text-4xl sm:text-6xl font-pontiac z-10 text-center">
            {" "}
            creative developers{" "}
          </h2>
        </div>
        <p className="mt-28 font-pontiac font-thin text-sm text-gray-400">
          200+ full-stack agile software experts ready to support your business
        </p>
      </div> */}
     
      <HeroParallax products={products} />
      {/* <SVGMaskEffectDemo/> */}
      <Services />
      <DedicatedSolutions />
      {/* <TrustedSection/> */}
      <OurWorks />
      <Achivement />
    </Stairs>
  );
}
