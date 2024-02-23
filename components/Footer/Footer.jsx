import { FooterLinks } from "@/constants/contants";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" relative z-10">
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1   relative  mx-auto w-full border-[1px] border-black px-5 max-w-[1920px] ">
        
        {FooterLinks.map(({ title, links, social }, idx) => (
          <div className="border-[1px] border-black " key={idx}>
            <div className="p-6">
              <h4 className="text-primary font-thin ">{title}</h4>
            </div>
            <div className="border-t-[1px] border-black w-full p-3 flex flex-col space-y-2 text-md text-gray-400 font-thin text-sm">
              {links.map((item, idx) => {
                if (item.link) {
                  return (
                    <Link href={`${item.link}`} className="list-none" key={idx}>
                      {item.title}{" "}
                    </Link>
                  );
                } else {
                  return <p key={idx}>{item.title}</p>;
                }
              })}
            </div>

            {title === "Office & contact" && (
              <div className="w-full  flex flex-wrap mt-4">
                <div className="px-3 py-5 border-black border-[1px]">
                  <InstagramIcon />
                </div>
                <div className="px-3 py-5 border-black border-[1px]">
                  <FacebookIcon />
                </div>
                <div className="px-3 py-5 border-black border-[1px]">
                  <TwitterIcon />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>{" "}
    </div>
  );
};

export default Footer;
