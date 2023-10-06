import React, { useEffect } from "react";
import Slider from "react-slick";
import { FeedbackData } from "./FeedbackData";
import Image from "next/image";
import gsap from "gsap";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
};

interface IProps {
  title: string;
}

const ServiceSection = React.forwardRef((props: IProps, ref: any) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          const tl = gsap.timeline();

          // Animate h2
          tl.fromTo(
            ".zoom-in-title",
            { scale: 0.6, opacity: 0 },
            {
              duration: 1,
              scale: 1,
              opacity: 1,
              ease: "Power2.easeOut",
            }
          );

          tl.fromTo(
            ".zoom-in-slide",
            { scale: 0.6, opacity: 0 },
            {
              duration: 1,
              scale: 1,
              opacity: 1,
              ease: "Power2.easeOut",
            },
            "-=0.5"
          );
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <div className="bg-gray-50 pt-4">
      <div ref={ref} className="max-w-7xl mx-auto">
        <h2 className="text-center mt-28 text-heading3-bold lg:text-heading2-bold mb-12 px-4 zoom-in-title">
          {props.title}
        </h2>
        <div className="w-full px-4 md:px-8  zoom-in-slide">
          <Slider {...settings}>
            {FeedbackData.map((data, index) => {
              return (
                <div key={index}>
                  <div>
                    <div className="rounded-xl sm:mx-4 my-12w-88 flex flex-col justify-center px-4 relative mb-24">
                      <h3 className="text-center text-heading3-semibold pt-12">
                        &apos;&apos;{data.review}&apos;&apos;
                      </h3>
                      <div className="pl-4 mt-12 pb-4 text-center">
                        <p className="text-base font-semibold py-2 text-gray-500">
                          {data.name}, {data.designation}
                        </p>
                      </div>
                      <div className="flex items-center justify-center">
                        <Image
                          src={data.src}
                          alt={data.alt}
                          width={100}
                          height={100}
                          style={{ objectFit: "cover", borderRadius: "100px" }}
                        ></Image>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
});

export default ServiceSection;

ServiceSection.displayName = "ServiceSection";
