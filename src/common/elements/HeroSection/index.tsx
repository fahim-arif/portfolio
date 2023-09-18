import { ImageType } from "@/common/types";
import Image from "next/image";
import React from "react";

interface IProps {
  title: string;
  description: string;
  image: ImageType;
}

const HeroSection = ({ title, description, image }: IProps) => {
  return (
    <div className="h-auto relative max-w-7xl mx-auto px-10 my-20">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="my-0 md:my-20 max-w-md">
          <h1 className="text-heading3-bold md:text-heading2-bold font-bold ">
            {title}
          </h1>
          <p className="text-xl mt-8 text-gray-500 font-semibold">
            {description.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div className="pt-12">
          <Image
            src={image.src}
            height={image.size.height}
            width={image.size.width}
            alt={title}
            priority={true}
            style={{
              boxShadow: image.shadow
                ? "1rem 1rem 3.4rem 0 rgba(0,0,0,.15)"
                : "none",
              borderRadius: "20px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
