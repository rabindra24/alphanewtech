import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const CustomButton = ({ title , className}) => {
  return (
    <div className="relative p-2 top-0  md:w-[300px] mt-5">
      <Button
        className={`${className} bg-transparent hover:bg-orange-600 hover:bg-opacity-15 rounded-none  outline-none border-none w-full`}
      >
        {title ? title : 'Submit'}
        <Image
          src={"/images/button.svg"}
          className="w-full h-full rotate-180 absolute  top-0"
          fill={true}
        />
        <Image
          src={"/images/button.svg"}
          className="w-full h-full absolute left-0 top-0 -translate-x-3"
          width={200}
          height={200}
        />
      </Button>
    </div>
  );
};

export default CustomButton;
