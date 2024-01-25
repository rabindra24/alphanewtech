import Page from "@/components/page";
import Stairs from "@/components/stairs";
import { Button } from "@/components/ui/button";
import Achivement from "@/sections/Homepage/Achivement";
import DedicatedSolutions from "@/sections/Homepage/DedicatedSolutions";
import OurWorks from "@/sections/Homepage/OurWorks";
import Services from "@/sections/Homepage/Services";
import TrustedSection from "@/sections/Homepage/TrustedSection";


export default function Home() {
  return (
    <Stairs>
      <div className="flex items-center top-20 min-h-screen h-100 flex-col relative md:px-10 px-5 text-center">
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
        <p className="mt-28 font-pontiac font-thin text-sm text-gray-400">200+ full-stack agile software experts ready to support your business</p>
      </div>
      <Services/>
      <DedicatedSolutions/>
      {/* <TrustedSection/> */}
      <OurWorks/>
      <Achivement/>
    </Stairs>
  );
}
