import React, { useEffect } from "react";
import { DedicatedSolutionData } from "@/constants/contants";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "@/utils/CustomButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const DedicatedSolutions = () => {
  return (
    <div className=" relative flex flex-col md:px-20 px-5 py-24">
      <h3 className="font-regular  text-center md:text-4xl text-white">
        dedicated solutions
      </h3>
      <span className="h-[100px] w-[3px] bg-primary mx-auto mt-5"></span>
      <div className="flex md:flex-row flex-col w-full h-full">
        {/* Fields  */}
        <div className="text-lg  flex-1 flex flex-col font-pontiac font-thin  justify-center">
          <div className="triangle_container hover:text-primary  mx-auto px-5">
            <Link href={"/services"}>
              <h3>Startup DNA</h3>
            </Link>
            <span className="triangle_link right-0"></span>
          </div>
          <div className="triangle_container hover:text-primary  mx-auto px-5">
            <Link href={"/services"}>
              <h3>Startup DNA</h3>
            </Link>
            <span className="triangle_link right-0"></span>
          </div>
          <div className="triangle_container hover:text-primary  mx-auto px-5">
            <Link href={"/services"}>
              <h3>Startup DNA</h3>
            </Link>
            <span className="triangle_link right-0"></span>
          </div>
        </div>
        {/* carosel  */}
        <div className="flex-1">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem>
                {" "}
                <Image
                  src={"/images/aboutus.png"}
                  width={300}
                  height={250}
                  className="w-auto h-full"
                />
              </CarouselItem>

              <CarouselItem>
                {" "}
                <Image
                  src={"/images/ourwork.png"}
                  width={300}
                  height={250}
                  className="w-auto h-full"
                />
              </CarouselItem>
              <CarouselItem>
                {" "}
                <Image
                  src={"/images/aboutus.png"}
                  width={300}
                  height={250}
                  className="w-auto h-full"
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <div className="mx-auto text-center">
        <p className="">You have ideas. We have software solutions.</p>
        <h4>Time to join forces.</h4>
        <CustomButton />
      </div>
    </div>
  );
};

export default DedicatedSolutions;
