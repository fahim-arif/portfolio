import React from "react";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  title: string;
  description: string;
}

const AboutB2Work = ({ title, description }: IProps) => {
  return (
    <div>
      <Image
        src="/images/wanderung_mellingen_fislisbach_tuefels_chaeller_baden.jpg"
        alt="incubator"
        width={1000}
        height={1000}
        className="h-auto w-full md:h-96 object-cover  object-center"
      />

      <div className="flex justify-between divide-x-2 max-w-7xl mx-4 md:mx-auto py-4 md:p-20">
        <div className="px-4 lg:px-16">
          <h2 className="text-heading3-bold md:text-heading2-bold mt-10">
            {title}
          </h2>
          <p className="text-base-medium text-justify lg:max-w-2xl w-full mx-auto mt-5 pt-3 mb-12 text-gray-600">
            {description.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div className="hidden lg:block mt-10 pl-12">
          <div className="flex items-center mt-16 justify-between">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              fill="#00FFFF"
            >
              <title>location</title>
              <g id="Page-1" fill="#000000">
                <g
                  id="Icon-Set"
                  transform="translate(-104.000000, -411.000000)"
                >
                  <path
                    d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z"
                    id="location"
                  ></path>
                </g>
              </g>
            </svg>

            <p className="text-body-semibold ml-2">San Francisco, California</p>
          </div>

          <div className="flex mt-8">
            <Image
              src="/images/email-1573-svgrepo-com.svg"
              alt="Email"
              width={24}
              height={24}
            ></Image>
            <Link
              className="ml-3 text-body-semibold"
              href="mailto: info@novawork.io"
            >
              info@novawork.io
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutB2Work;
