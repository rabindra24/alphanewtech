import Page from "@/components/page";
import React, { useState } from "react";
import Stairs from "@/components/stairs";
import Image from "next/image";
import FormField from "@/utils/FormField";
import CustomButton from "@/utils/CustomButton";
import { MoreContactLink } from "@/constants/contants";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/router";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import OurWorks from "@/sections/Homepage/OurWorks";
export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
const Description = () => {
  const [play, setPlay] = useState(false);
  const router = useRouter();

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
        <div className="headerImage h- w-full relative top-0 ">
          <div className="workBackground max-lg:h-[350px] h-[800px]  opacity-60 w-full flex items-center justify-center"></div>
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center w-full px-5">
            {/* <h1 className="text-bold text-4xl">{router.query.slug}</h1> */}

            <p className="font-bold  text-gray-200 md:text-7xl text-5xl  mb-10">
              <span className="font-pontiac ">
                <span className="">
                  tech consulting. count on our experience.
                </span>
              </span>
            </p>
            <p className="text-gray-300 font-thin mb-5  mx-auto text-2xl wave-text">
              tech consulting. count on our experience.
            </p>
            <div className="flex item-center justify-center w-full">
              <CustomButton title={"get a consultation"} />
            </div>
          </div>
        </div>
        <div className="relative   md:py-20 py-10">
          {/* //backgrond line  */}
          <h3 className="font-pontiac text-center md:text-3xl">
            we deliver even more
          </h3>
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
          </div>
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
    </Stairs>
  );
};

export default Description;
