import Image from "next/image";
import React from "react";

const Achivement = () => {
  return (
    <div className=" relative mb-20">
      <div className="flex items-center top-0  mb-20  flex-col relative md:px-10 px-5 text-center ">
        <h3 className="font-thin text-xl">achievements</h3>
        <div className="relative mx-auto">
          <div className="w-[1px] h-[10px] bg-primary my-2 absolute left-0 bottom-0"></div>
          <div className="w-[1px] h-[10px] bg-primary my-2 absolute right-0 bottom-0"></div>
          <div className="w-[1px] h-[10px] bg-primary my-2 absolute left-[50%] bottom-[-10px]"></div>
          <div className="w-[160px] h-[1px] bg-primary my-2"></div>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 w-full max-w-[900px]   mx-auto place-content-center gap-6">
        {[1, 11, 1, 1].map((item, index) => (
          <div className="items-center flex flex-col gap-2">
            <Image
              src={"/images/web-developers.png"}
              width={120}
              height={120}
              alt="hell"
            />
            <p className="">Top Mobile </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achivement;
