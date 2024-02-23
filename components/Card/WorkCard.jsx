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
import Image from "next/image";

const WorkCard = ({ title, content, tags,className }) => {
  return (
    <Card className={`rounded-none h-full bg-foreground border-gray-100 ${className}`}>
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
        <p className="text-gray-800 font-bold py-2 px-4">{title}</p> <br />
        <hr className="border-primary h-1 w-full" />
        <p className="px-4 text-sm text-gray-600">{content}</p>
        <div className="mt-4 flex flex-wrap gap-2 px-4">
          {tags &&
            tags.map((item ,idx) => (
              <Badge
              key={idx}
                variant="outline"
                className={"border-primary text-primary"}
              >
                {item.title}
              </Badge>
            ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default WorkCard;
