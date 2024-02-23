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

const About = () => {
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
  // <div className=" relative z-0 sm:pb-80 pb-52 flex flex-col md:px-10   ">

  return (
    <Stairs>
      <div className="relative top-0 ">
        <div className="headerImage h- w-full relative top-0 ">
          <div className="workBackground max-lg:h-screen h-[800px]  opacity-60 w-full flex items-center justify-center"></div>
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center w-full px-5">
            <p className="font-bold  text-white md:text-7xl text-5xl  mb-10">
              #
              <span className="font-pontiac ">
                Meet<span className="text-primary">Merix</span>
              </span>
            </p>
            <p className="text-gray-300 font-thin mb-5  mx-auto text-2xl wave-text">
              design&development team of creative technologists
            </p>
          </div>
        </div>
        <div className="relative  bg-white md:py-20 py-10 w-full">
          <div className="max-w-[1920px] mx-auto">
            {/* //backgrond line  */}
            <div className=" w-full  mb-20 h-full absolute top-0 left-0 -z-10 flex bg-white ">
              {[1, 1, 1, 1, 1].map((item ,idx) => (
                <div key={idx} className="w-full border-[0.1px] border-gray-100 border-t-0 border-b-0 "></div>
              ))}
            </div>
            {/* ///Services 02*/}
            <div className="w-full  mb-20 h-full  md:px-10 px-5 py-10 relative z-10">
              <div className="flex flex-col ">
                <div className="flex md:flex-row flex-col gap-6">
                  <div className="flex-1">
                    <h4 className="text-gray-900 text-3xl md:text-5xl">
                      O2. services
                    </h4>
                    <p className="text-primary  font-bold text-3xl md:text-5xl font-pontiac mb-5">
                      our expertise
                    </p>
                    <p className="text-gray-600 font-pontiac md:text-xl text-md tracking-wider">
                      <span className="text-gray-900 font-bold">
                        We turn ideas into great digital products.
                      </span>{" "}
                      Thanks to a collaboration between unique talents,{" "}
                      <span className="text-gray-900 font-bold">
                        we solve business challenges by building web apps
                      </span>{" "}
                      based on scalable backend solutions (Python, Java,
                      Node.js, Golang), and JavaScript (React, Angular) on the
                      frontend, as well as mobile apps accessible on Android &
                      iOS devices (Flutter, React Native, Kotlin, Swift).
                    </p>
                  </div>
                  <div className="flex-1 relative top-0 border-4 border-primary">
                    <video
                      id="video1"
                      onClick={(e) => {
                        playPause(e);
                      }}
                      autoPlay
                      src="https://cdn.merixstudio.com/media/homepage/video_teaser/teaser_why_merix.mp4"
                      className="w-full h-full object-cover"
                    ></video>
                    {!play && (
                      <span className="absolute pointer-events-none top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        Tap to Play
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* ///Services 03*/}
            <div className="w-full  mb-20 h-full  md:px-10 px-5 py-10 relative z-10">
              <div className="flex flex-col ">
                <div className="flex md:flex-row flex-col px-2 gap-6 ">
                  <div className="flex-1">
                    <h4 className="text-gray-900 text-4xl md:text-5xl md:mb-7 mb-3">
                      03. our values
                    </h4>
                    <p className="text-primary  font-bold text-4xl md:text-5xl font-pontiac mb-5">
                      {values.title}
                    </p>
                    <p className="text-gray-600 font-pontiac md:text-xl text-md tracking-wider">
                      {values.content}
                    </p>
                  </div>
                  <Image
                    src={"/images/values_break_line -ver.png"}
                    width={300}
                    height={10}
                    className="w-full md:hidden"
                  />
                  <Image
                    src={"/images/values_break_line.png"}
                    width={50}
                    height={300}
                    className=" md:flex hidden h-full"
                  />
                  <div className="flex-1 relative top-0 space-y-6 flex flex-col text-primary text-3xl md:text-5xl font-thin">
                    <div
                      className="text-start transition-all duration-100"
                      onMouseOver={() => {
                        ChangeValue(
                          "passion & Growth",
                          "loving what we do and constant development of our skills allows us to grow - both as a company and as individuals"
                        );
                      }}
                      onMouseLeave={() => {
                        defaultValue();
                      }}
                    >
                      Passion & growth
                    </div>
                    <div
                      className="text-right"
                      onMouseOver={() => {
                        ChangeValue(
                          "passion & Growth",
                          "loving what we do and constant development of our skills allows us to grow - both as a company and as individuals"
                        );
                      }}
                      onMouseLeave={() => {
                        defaultValue();
                      }}
                    >
                      trust
                    </div>
                    <div
                      className="pl-8 text-gray-900"
                      onMouseOver={() => {
                        ChangeValue(
                          "passion & Growth",
                          "loving what we do and constant development of our skills allows us to grow - both as a company and as individuals"
                        );
                      }}
                      onMouseLeave={() => {
                        defaultValue();
                      }}
                    >
                      atmosphere
                    </div>
                    <div
                      className="text-right pr-8 text-gray-900"
                      onMouseOver={() => {
                        ChangeValue(
                          "passion & Growth",
                          "loving what we do and constant development of our skills allows us to grow - both as a company and as individuals"
                        );
                      }}
                      onMouseLeave={() => {
                        defaultValue();
                      }}
                    >
                      partnership
                    </div>
                    <div
                      className="text-center "
                      onMouseOver={() => {
                        ChangeValue(
                          "passion & Growth",
                          "loving what we do and constant development of our skills allows us to grow - both as a company and as individuals"
                        );
                      }}
                      onMouseLeave={() => {
                        defaultValue();
                      }}
                    >
                      creativity
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ///Services 04*/}
            <div className="w-full  mb-20 h-full  md:px-10 px-5 py-10 relative z-10">
              <div className="flex flex-col ">
                <div className="flex md:flex-row flex-col gap-6">
                  <div className="flex-1">
                    <h4 className="text-gray-900 text-4xl md:text-6xl">
                      O4. teamwork
                    </h4>
                    <p className="text-primary  font-bold text-4xl md:text-6xl font-pontiac mb-5">
                      our team
                    </p>
                    <p className="text-gray-600 font-pontiac md:text-xl text-md tracking-wider">
                      We believe in the power of teamwork - you need cooperation
                      between specialists to create great projects.
                    </p>
                  </div>
                  <div className="flex-1 relative top-0 md:px-10">
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
                          <Image
                            src={"/images/team.jpg"}
                            width={300}
                            height={250}
                            className="w-full h-full"
                          />
                        </CarouselItem>
                        <CarouselItem>
                          {" "}
                          <Image
                            src={"/images/team2.jpg"}
                            width={300}
                            height={250}
                            className="w-full h-full"
                          />
                        </CarouselItem>
                        <CarouselItem>
                          {" "}
                          <Image
                            src={"/images/team2.jpg"}
                            width={300}
                            height={250}
                            className="w-full h-full"
                          />
                        </CarouselItem>
                      </CarouselContent>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Stairs>
  );
};

export default About;
