import { ImageType } from "@/common/types";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface IProps {
  title: string;
  description: string;
  image: ImageType;
}

const HeroSection = ({ title, description, image }: IProps) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          gsap.killTweensOf(".existing-hero-animate-item");

          const tl = gsap.timeline();
          tl.fromTo(
            ".existing-hero-animate-item",
            { scale: 0.6, opacity: 0 },
            {
              duration: 1,
              scale: 1,
              opacity: 1,
              ease: "power2.out",
              stagger: 0.3,
            }
          );
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-auto relative max-w-7xl mx-auto px-10 my-20"
    >
      <div className="flex flex-col md:flex-row justify-between">
        <div className="my-0 md:my-20 max-w-md">
          <h1 className="text-heading3-bold md:text-heading2-bold font-bold existing-hero-animate-item">
            {title}
          </h1>
          <p className="text-xl mt-8 text-gray-500 font-semibold existing-hero-animate-item">
            {description.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div className="pt-12 existing-hero-animate-item">
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
