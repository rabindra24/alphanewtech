import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Save } from "lucide-react";

const ServiceCard = ({ title, content, list, className }) => {
  return (
    <Card
      className={`border-2 border-gray-300 py-10 px-5 flex  justify-center flex-col text-left cardHover  relative rounded-none max-w-[320px] bg-white hover:border-primary ${className}`}
    >
      <CardContent className="p-0 rounded-none">
        <Save className="text-primary w-10 h-10 mb-5" />
      </CardContent>
      <CardFooter className="flex flex-col items-start px-0">
        <p className="text-gray-700 font-bold py-2 text-bold font-pontiac">
          {title}
        </p>{" "}
        <br />
        <div className="mt-4 flex flex-wrap gap-2 px-4">
          <ul className="list-disc space-y-2">
            {list.map((item, idx) => (
              <li className="text-primary " key={idx}>
                <span className="text-regular text-[.8rem] text-gray-700">
                  Web app development
                </span>
              </li>
            ))}
          </ul>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
