import { IClient, ImageType } from "@/common/types";
import Image from "next/image";
import React from "react";

interface IProps {
  image: ImageType;
  client: IClient;
}

function ReviewSection({ image, client }: IProps) {
  return (
    <div className="bg-gradient-primary-secondary">
      <div className="max-w-7xl mx-auto px-8 lg:px-20 flex flex-col md:flex-row-reverse items-center">
        <div className="md:py-8 lg:py-20 max-w-sm">
          <h2 className="text-heading3-bold text-white py-4 mt-4">
            &apos;&apos;{client.review}&apos;&apos;
          </h2>
          <p className="text-gray-200">{client.name}</p>
          <p className="text-gray-200">{client.designation}</p>
        </div>
        <div className="my-8 md:mr-12">
          <Image
            src={image.src}
            width={image.size.width}
            height={image.size.height}
            alt="reviewer work screenshot"
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
}

export default ReviewSection;
