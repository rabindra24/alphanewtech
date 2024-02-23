import Page from "@/components/page";
import React from "react";
import Stairs from "@/components/stairs";
import Image from "next/image";
import FormField from "@/utils/FormField";
import CustomButton from "@/utils/CustomButton";
import { MoreContactLink, ServiceCardLinks, ServicesLinks } from "@/constants/contants";
import WorkCard from "@/components/Card/WorkCard";
import ServiceCard from "@/components/Card/ServiceCard";
import OurWorks from "@/sections/Homepage/OurWorks";

const Services = () => {
  return (
    <Stairs>
      <div className="relative top-0 font-pontiac  ">
        <div className="headerImage max-2xl:h-[350px] h-[600px]  w-full relative top-0 ">
          <div className="workBackground max-2xl:h-[350px] h-[600px]  opacity-80 w-full flex items-center justify-center"></div>
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center w-full">
            <div className="flex items-center  mb-10  flex-col relative md:px-10 px-5 text-center">
              <h3 className="text-white text-2xl lg:6xl">Services</h3>
              <div className="relative mx-auto">
                <div className="w-[1px] h-[10px] bg-primary my-2 absolute left-0 bottom-0"></div>
                <div className="w-[1px] h-[10px] bg-primary my-2 absolute right-0 bottom-0"></div>
                <div className="w-[1px] h-[10px] bg-primary my-2 absolute left-[50%] bottom-[-10px]"></div>
                <div className="w-[120px] h-[1px] bg-primary my-2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-white">
          <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-10 gap-5 md:px-10 max-w-[1920px] mx-auto px-5 py-24 ">
            {ServiceCardLinks.map((item,idx) => (
              <ServiceCard
                title={item.title}
                content={item.content}
                list={item.list}
                key={idx}
              />
            ))}
          </div>
        </div>

        <div className="text-center py-20">
        <div className="flex items-center  mb-10  flex-col relative md:px-10 px-5 text-center">
          <h3 className="text-white text-3xl">our tools</h3>
          <div className="relative mx-auto">
            <div className="w-[1px] h-[10px] bg-primary my-2 absolute left-0 bottom-0"></div>
            <div className="w-[1px] h-[10px] bg-primary my-2 absolute right-0 bottom-0"></div>
            <div className="w-[1px] h-[10px] bg-primary my-2 absolute left-[50%] bottom-[-10px]"></div>
            <div className="w-[120px] h-[1px] bg-primary my-2"></div>
          </div>
        </div>
        <div className="space-y-5 py-10">
          <div className="flex flex-wrap gap-4 items-center justify-center ">
            {[1, 1, 11, 1, 11, 1, 1, 1].map((item, index) => (
              <div key={index}>
                <div className=" w-fit p-6  border  border-gray-400 mb-2">
                  <Image
                    src={"/images/python-logo.svg"}
                    width={30}
                    height={30}
                    className="grayscale"
                  />
                </div>
                <p className="text-center">Python</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <OurWorks />
      </div>
    </Stairs>
  );
};

export default Services;
