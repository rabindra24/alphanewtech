import Page from "@/components/page";
import React, { useState } from "react";
import Stairs from "@/components/stairs";
import Image from "next/image";
import FormField from "@/utils/FormField";
import CustomButton from "@/utils/CustomButton";
import { MoreContactLink } from "@/constants/contants";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
{/* <div className="headerImage max-2xl:h-[350px] h-[800px]  w-full relative top-0 "> */}


const Careers = () => {
  return (
    <Stairs>
      <div className="relative top-0 w-full bg-white">
        <div className="headerImage h- w-full relative top-0 ">
          <div className="workBackground max-xl:h-screen h-[800px]  opacity-80 w-full flex items-center justify-center"></div>
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center w-full px-5">
            <p className="text-white md:text-6xl text-4xl  mb-10">
              <span className="font-pontiac  ">
                <span className="text-primary">more than just a workplace</span>
              </span>
            </p>
            <p className="text-gray-300 font-thin mb-5  mx-auto text-2xl wave-text">
              design&development team of creative technologists
            </p>
          </div>
        </div>
        <div className="max-w-[1920px]  mx-auto">
          <div className="relative   md:py-20 py-10">
            {/* //backgrond line  */}
            <div className=" w-full  mb-20 h-full absolute top-0 left-0 -z-10 flex bg-white ">
              {[1, 1, 1, 1, 1, 1, 2].map((item , idx) => (
                <div key={idx} className="w-full border-[0.1px] border-gray-100 border-t-0 border-b-0 "></div>
              ))}
            </div>
            <div className="relative top-0 left-0 text-gray-900 flex md:flex-row flex-col md:px-10 px-5 gap-6">
              <div className="flex-1">
                <h4 className="text-4xl font-mono mb-3">hello, friend!</h4>
                <p className="text-lg font-pontiac text-gray-600 max-w-[500px] leading-8">
                  It&apos;s good to see you here. We are Merixstudio - neither Jedi
                  nor gurus (nor any other kind of superheroes). From a business
                  perspective, we&apos;re an agile software team crafting and
                  launching fully-fledged web and mobile apps for clients
                  worldwide. But in our geeky day-to-day life, we&apos;re a bunch of
                  friends fully commited to our passions.
                </p>
              </div>
              <div className="flex-1">
                <Image
                  src={"/images/career.jpg"}
                  width={300}
                  height={200}
                  className="w-full h-full"
                  alt=""
                />
              </div>
            </div>

            <div className="text-gray-900 py-20 md:px-10 px-5">
              <h4 className="font-pontiac text-center text-4xl mt-5 mb-10">
                current openings
              </h4>
              <div className="border-2 border-primary md:w-[250px] md:h-[250px] h-[200px] px-3 flex  justify-center flex-col text-left cardHover md:left-[20%] relative">
                <p className="text-gray-700">remote</p>
                <p className="text-2xl ">
                  Haven&apos;t found anything for yourself? Send us your CV!
                </p>
              </div>
            </div>

            <div className="flex md:flex-row flex-col gap-6 text-gray-800 md:text-right md:px-10 px-5">
              <div className="flex-1 border-2 border-primary">
                <Image
                  src={"/images/Contact_Header_2993_1.jpg"}
                  width={300}
                  height={400}
                  className="w-full h-full"
                />
              </div>
              <div className="flex-1 md:px-5">
                <h3 className="text-3xl font-bold font-pontiac mb-10 text-gray-900">
                  Let’s have an informal meeting.
                </h3>
                <p className="leading-7 font-thin text-lg">
                  You can also #RecruitUs - after all, we have no secrets and
                  are open to any of your questions! Pop by our office and have
                  a cup of coffee with one of our HR Managers and the leader of
                  the team you’re interested in, all you have to do is schedule
                  a meeting with our HR Team!
                </p>
                <div className="  md:flex justify-end">
                  <CustomButton
                    className="text-gray-800 "
                    title={"Schedule a meeting"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" text-gray-900 flex  py-20 items-center">
            <div>
              <Image
                src={"/images/values_break_line.png"}
                width={40}
                height={250}
                className="w-full "
              />
            </div>
            <div className="flex-1 flex md:flex-row flex-col items-center justify-center">
              <div className="flex-1 mb-5 ">
                <h3 className="md:text-5xl text-3xl mb-5">
                  #Meet<span className="text-primary ">Metrix</span>
                </h3>
                <p className="text-xl text-gray-600">
                  We are ordinary people building extraordinary products. Among
                  us, there are musicians, a football coach, a scuba diving
                  instructor, motorcyclists, yoga teachers to name a few,
                  willing to share their passions with other folks. Together we
                  create a great place to work. Get to know us and let us know
                  you.
                </p>
              </div>
              <div className="flex-1 md:mr-10">
                <Image
                  src={"/images/team3.jpg"}
                  width={300}
                  height={250}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Stairs>
  );
};

export default Careers;
