import React from "react";
import Image from "next/image";

const ServiceSection = React.forwardRef((props, ref: any) => {
  return (
    <div>
      <h1
        className="text-center text-5xl font-bold mb-12 xl:mb-20"
        // style={{ color: "#3F3E3E" }}
        ref={ref}
      >
        HIGHLIGHTED SERVICES
      </h1>
      <div className="flex justify-center">
        <div
          className="w-40 h-20 flex flex-col justify-center items-center grow-on-hover"
          // style={{ color: "#3F3E3E" }}
        >
          <Image
            src="/images/webicon.png"
            alt="web icon"
            width={50}
            height={50}
          ></Image>

          <p className="text-md text-center pt-3 font-bold">Web Development</p>
        </div>
        <div
          className="w-40 h-20 flex flex-col justify-center items-center grow-on-hover"
          // style={{ color: "#3F3E3E" }}
        >
          <Image
            src="/images/mobileIcon.png"
            alt="mobile icon"
            width={50}
            height={50}
          ></Image>

          <p className="text-md text-center pt-3 font-bold">App Development</p>
        </div>
        <div
          className="w-40 h-20 flex flex-col justify-center items-center hidden sm:flex grow-on-hover"
          // style={{ color: "#3F3E3E" }}
        >
          <Image
            src="/images/seoIcon.png"
            alt="seo icon"
            width={50}
            height={50}
          ></Image>

          <p className="text-s text-center pt-3 font-bold">SEO</p>
        </div>
        <div
          className="w-40 h-20 flex flex-col justify-center items-center hidden sm:flex grow-on-hover"
          // style={{ color: "#3F3E3E" }}
        >
          <Image
            src="/images/productIcon.png"
            alt="product icon"
            width={50}
            height={50}
          ></Image>

          <p className="text-md text-center pt-3 font-bold">Product Design</p>
        </div>
        <div
          className="w-40 h-20 flex flex-col justify-center items-center grow-on-hover"
          // style={{ color: "#3F3E3E" }}
        >
          <Image
            src="/images/uxicon.png"
            alt="ux icon"
            width={50}
            height={50}
          ></Image>

          <p className="text-md text-center pt-3 font-bold">UX/UI Design</p>
        </div>
      </div>
    </div>
  );
});

export default ServiceSection;

ServiceSection.displayName = "ServiceSection";