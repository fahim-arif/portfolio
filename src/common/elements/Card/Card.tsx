import React from "react";
import Image from "next/image";
import Button from "../Button/Button";

type FlexDirection = "row" | "row-reverse";
interface Props {
  title: string;
  subtitle: string;
  src: string;
  flexDirection: FlexDirection;
}

export default function Card({ title, subtitle, src, flexDirection }: Props) {
  return (
    <div
      className={`max-w-7xl mx-auto flex flex-col sm:flex-${flexDirection} items-center justify-arround mt-20 sm:px-8 md:px-12`}
    >
      <Image
        src={src}
        alt="web development"
        width={300}
        height={550}
        style={{ borderRadius: "10px" }}
      ></Image>
      <div className="md:pl-8">
        <h1 className="text-2xl  lg:text-4xl text-center sm:text-left sm:px-4 mt-8 pb-2">
          {title}
        </h1>
        <p className="w-auto lg:w-3/4 text-sm text-justify text-gray-600 lg:pb-8 lg:pt-4 px-4  pb-4">
          {subtitle}
        </p>
        <div className=" flex justify-center sm:justify-start sm:px-4">
          <Button
            color="#fff"
            bgColor="#000"
            width="182px"
            height="46px"
            text="View Projects"
          />
        </div>
      </div>
    </div>
  );
}
