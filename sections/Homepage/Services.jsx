import { ourServices } from "@/constants/contants";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="flex items-center top-20 max-lg:min-h-screen flex-col relative md:px-10 px-5 text-center font-pontiac">
      <span className="triangle"></span>
      <p>Our Services</p>
      {/* <div className="relative top-11 w-full">
        <div className="w-full  h-[1px] bg-primary my-2"></div>
        <div className="w-[1px] h-[10px] bg-primary my-2 absolute left-0 top-0"></div>
        <div className="w-[1px] h-[10px] bg-primary my-2 absolute right-0 top-0"></div>
        <div className="w-[1px] h-[10px] bg-primary my-2 absolute left-[50%] bottom-[-10px]"></div>
        <div className="w-[1px] h-[100px] bg-primary my-2 absolute left-[50%] top-[-10px]"></div>
      </div> */}

      <div className="grid w-full justify-evenly grid-cols-2 gap-6 md:grid-cols-4 py-10 max-w-[900px]">
        {ourServices.map((item, index) => (
          <div key={index} className="text-center ">
            <Image
              src={item.image}
              width={100}
              height={100}
              alt="web development"
              className="mx-auto mb-5"
            />
            <h3 className="text-sm md:text-lg ">{item.title}</h3>
          </div>
        ))}
      </div>

      <p className="text-center text-sm mt-40 mb-10 text-gray-300 max-w-[500px]">
        Take full advantage of tech solutions!
        <br /> Launch innovative digital products faster. <br />
        Rethink your IT strategy by embracing disruptive user-centric design &
        software architectural patterns.
      </p>
    </div>
  );
};

export default Services;
