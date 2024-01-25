import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TrustedSection from "./TrustedSection";

const OurWorks = () => {
  return (
    <div className=" relative  sm:pb-80 pb-52 flex flex-col ">
      <Image
        src={"/images/canvas.png"}
        className="w-full absolute top-0 left-0 h-full"
        width={500}
        height={800}
      />

      <TrustedSection />

      <div className="text-gray-700 relative left-0 z-10">
        <div className="flex items-center top-20 mb-10  flex-col relative md:px-10 px-5 text-center">
          <h3 className="text-black">Our Works</h3>
          <div className="relative mx-auto">
            <div className="w-[1px] h-[10px] bg-primary my-2 absolute left-0 bottom-0"></div>
            <div className="w-[1px] h-[10px] bg-primary my-2 absolute right-0 bottom-0"></div>
            <div className="w-[1px] h-[10px] bg-primary my-2 absolute left-[50%] bottom-[-10px]"></div>
            <div className="w-[120px] h-[1px] bg-primary my-2"></div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 md:gap-20 gap-10 md:px-10 max-w-[1000px] mx-auto px-5 py-24 ">
          {[1, 1, 1, 1].map((item) => (
            <Card className="rounded-none h-full bg-foreground border-gray-100">
              <CardContent className="p-0 rounded-none">
                <Image
                  src={"/images/photo-main1.jpeg"}
                  width={300}
                  height={300}
                  alt="image"
                  className="w-full md:h-[330px] h-[300px] object-cover"
                />
              </CardContent>
              <CardFooter className="flex flex-col items-start px-0">
                <p className="text-gray-800 font-bold py-2 px-4">
                  Android Development
                </p>{" "}
                <br />
                <hr className="border-primary h-1 w-full" />
                <p className="px-4 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, molestia
                </p>
                <div className="mt-4 flex flex-wrap gap-2 px-4">
                  <Badge
                    variant="outline"
                    className={"border-primary text-primary"}
                  >
                    News
                  </Badge>
                  <Badge
                    variant="outline"
                    className={"border-primary text-primary"}
                  >
                    News
                  </Badge>
                  <Badge
                    variant="outline"
                    className={"border-primary text-primary"}
                  >
                    News
                  </Badge>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        <p className="py-10 text-center font-bold text-primary">
          See All works....
        </p>
      </div>
    </div>
  );
};

export default OurWorks;
