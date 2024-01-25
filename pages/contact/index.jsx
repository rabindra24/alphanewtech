import Page from "@/components/page";
import React from "react";
import Stairs from "@/components/stairs";
import Image from "next/image";
import FormField from "@/utils/FormField";
import CustomButton from "@/utils/CustomButton";
import { MoreContactLink } from "@/constants/contants";

const Contact = () => {
  return (
    <Stairs>
      <div className="relative top-0 font-pontiac  ">
        <div className="headerImage h-[350px] w-full relative top-0 ">
          <div className="workBackground h-[350px] opacity-60 w-full flex items-center justify-center"></div>
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center w-full">
            <p className="font-thin text-white text-5xl  mb-10">
              hire <span className="font-bold">US</span>{" "}
            </p>
            <p className="">make your product happen </p>
          </div>
        </div>
        <div className="w-full h-full bg-white">
          <div className=" md:px-10 px-5  relative py-24 max-w-[700px] mx-auto text-gray-700">
            <FormField title="your name" />
            <FormField title="phone number" />
            <FormField title="Query" />
            <p>
              By sending us inquiries, you agree for processing personal data
              and sending you further correspondence.
            </p>
            <CustomButton designs={"text-primary"} />
          </div>
        </div>
        <div className="py-32 text-center">
          <h3 className="mb-28 text-5xl">
            more <span className="font-bold "> contacts</span>{" "}
          </h3>

          <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mx-auto">
            {MoreContactLink.map((item) => (
              <div className="contact-card w-ful flex flex-col items-center justify-center space-y-3">
                <Image
                  src={item.image}
                  width={150}
                  height={150}
                  className="rounded-full bg-white mb-10"
                />

                <p className="text-xl font-light md:mt-10 mt-5">{item.role}</p>
                <p className="text-md max-w-[320px] text-center text-gray-500">
                  {item.slogan}
                </p>
                <p className="text-md text-primary">{item.email}</p>
                <p className="text-md text-gray-500 ">Tel : {item.number}</p>
              </div>
            ))}
          </div>
        </div>{" "}
      </div>
    </Stairs>
  );
};

export default Contact;
