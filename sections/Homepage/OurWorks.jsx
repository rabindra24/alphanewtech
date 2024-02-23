import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TrustedSection from "./TrustedSection";
import WorkCard from "@/components/Card/WorkCard";
import { ServicesLinks } from "@/constants/contants";

const OurWorks = () => {
  return (
    <div className="w-full">
      <div className=" relative z-0 sm:pb-80 pb-52 flex flex-col md:px-10 max-w-[1920px] mx-auto  ">
        <Image
          src={"/images/canvas.png"}
          className="w-full absolute top-0 left-0 h-full"
          width={500}
          height={800}
        />

        <TrustedSection />

        <div className="text-gray-700 relative left-0 z-10">
          <div className="flex items-center top-20 mb-10  flex-col relative md:px-10 px-5 text-center">
            <h3 className="text-black">Our Works</h3>
            <div className="relative mx-auto">
              <div className="w-[1px] h-[10px] bg-primary my-2 absolute left-0 bottom-0"></div>
              <div className="w-[1px] h-[10px] bg-primary my-2 absolute right-0 bottom-0"></div>
              <div className="w-[1px] h-[10px] bg-primary my-2 absolute left-[50%] bottom-[-10px]"></div>
              <div className="w-[120px] h-[1px] bg-primary my-2"></div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:gap-20 gap-10 md:px-10 max-lg:max-w-[1000px] mx-auto px-5 py-24 ">
            {ServicesLinks.map((item) => (
              <WorkCard
                title={item.title}
                content={item.content}
                tags={item.tags}
              />
            ))}
          </div>
          <p className="py-10 text-center font-bold text-primary">
            See All works....
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
