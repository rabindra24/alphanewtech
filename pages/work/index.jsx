import React from "react";
import Stairs from "@/components/stairs";
import OurWorks from "@/sections/Homepage/OurWorks";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ServicesLinks } from "@/constants/contants";
import WorkCard from "@/components/Card/WorkCard";
const Work = () => {
  return (
    <Stairs>
      <div className="relative top-0 font-pontiac bg-white">
        <div className="headerImage max-lg:h-[350px] h-[800px]  w-full relative top-0 ">
          <div className="workBackground max-lg:h-[350px] h-[800px]  opacity-80 w-full flex items-center justify-center"></div>
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center w-full">
            <div className="flex items-center  mb-10  flex-col relative md:px-10 px-5 text-center">
              <h3 className="text-white text-3xl">Works</h3>
              <div className="relative mx-auto">
                <div className="w-[1px] h-[10px] bg-primary my-2 absolute left-0 bottom-0"></div>
                <div className="w-[1px] h-[10px] bg-primary my-2 absolute right-0 bottom-0"></div>
                <div className="w-[1px] h-[10px] bg-primary my-2 absolute left-[50%] bottom-[-10px]"></div>
                <div className="w-[120px] h-[1px] bg-primary my-2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-10 md:px-10 max-w-[1920px] mx-auto px-5 py-24 ">
          {ServicesLinks.map((item,idx) => (
            <WorkCard
              title={item.title}
              content={item.content}
              tags={item.tags}
              key={idx}
            />
          ))}
        </div>
      </div>
    </Stairs>
  );
};

export default Work;
