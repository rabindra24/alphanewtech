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
import OurWorks from "@/sections/Homepage/OurWorks";

const Whyus = () => {
  const [play, setPlay] = useState(false);
  const [values, setValues] = useState({
    title: "Our passion",
    content:
      "The values that are behind everything we do - starting with how we do business and ending with our office life and how we handle projects",
  });

  const playPause = (e) => {
    e.preventDefault();
    var myVideo = document.getElementById("video1");
    if (myVideo.paused) {
      setPlay(true);
      myVideo.play();
    } else {
      setPlay(true);
      myVideo.pause();
    }
  };

  const defaultValue = () => {
    setValues({
      title: "Our passion",
      content:
        "The values that are behind everything we do - starting with how we do business and ending with our office life and how we handle projects",
    });
  };

  const ChangeValue = (title, content) => {
    setValues({
      title: title,
      content: content,
    });
  };

  return (
    <Stairs>
      <div className="relative top-0 ">
        <div className="headerImage  w-full relative top-0 ">
          <div className="workBackground max-lg:h-screen h-[800px] opacity-80 w-full flex items-center justify-center"></div>
          <div className="absolute bottom-[15%] lg:left-[10%]  md:px-10 px-5">
            <h2 className="font-thin md:max-w-[80%]  text-white md:text-5xl text-4xl  mb-10">
              <span className="font-pontiac ">
                build custom products with a
              </span>
              <span className="text-primary font-bold"> best-in-class </span>
              software house
            </h2>
            <p className="text-white font-thin mb-5  mx-auto md:text-2xl text-xl">
              product design & development{" "}
              <span className="text-primary ">|</span> trusted partner since
              1999 <span className="text-primary ">|</span> 250+ talented IT
              experts
            </p>
            <CustomButton title={"Contact Us"} />
          </div>
        </div>
        <div className="relative flex max-w-[1920px] mx-auto  md:py-20 py-10 md:px-20 px-5 md:flex-row flex-col">
          <div className="flex-1 space-y-4">
            <h3 className="md:text-5xl text-4xl mb-10 text-white font-pontiac">
              What are our core competencies?
            </h3>
            <p className="font-bold">Core Services</p>
            <ul className="list-disc ml-5  space-y-2">
              {[1, 11, 1, 1, 1, 1].map((item, idx) => (
                <li className="text-primary " key={idx}>
                  <span className="text-thin text-gray-300">
                    Web app development
                  </span>
                </li>
              ))}
            </ul>

            <div className="space-y-5 py-10 ">
              <p className="text-white font-bold">Our tools</p>
              <div className="flex flex-wrap gap-4 ">
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
          <div className="flex-1 md:px-20">
            <Image
              src={"/images/aboutus.png"}
              width={300}
              height={250}
              className="max-md:w-full w-[600px] max-h-[700px]"
            />
          </div>
        </div>
        <h4 className="text-center font-bold md:text-5xl text-3xl max-sm:pt-10 font-pontiac">what we deliver</h4>
        <div className="py-10 grid sm:grid-cols-4 grid-cols-2 max-auto md:w-[800px] gap-10 w-full mx-auto mb-10">
          {[1, 1, 1, 1].map((item, index) => (
            <div className="flex flex-col items-center  text-center" key={index}>
              <Image
                src={"/images/tick.svg"}
                width={100}
                height={100}
                className=""
              />
              <p className="text-white ">Free technical consultation</p>
            </div>
          ))}
        </div>
      </div>
      <OurWorks/>
    </Stairs>
  );
};

export default Whyus;
