import { IClient, ImageType } from "@/common/types";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface IProps {
  image: ImageType;
  client: IClient;
  shouldRemoveQuotes?: boolean;
}

function ReviewSection({ image, client, shouldRemoveQuotes = false }: IProps) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          gsap.killTweensOf(".review-animate-item");

          const tl = gsap.timeline();

          tl.fromTo(
            ".review-animate-item-image",
            { scale: 0.6, opacity: 0 },
            { duration: 0.75, scale: 1, opacity: 1, ease: "power2.out" }
          ).fromTo(
            ".review-animate-item-text",
            { scale: 0.6, opacity: 0 },
            {
              duration: 0.75,
              scale: 1,
              opacity: 1,
              ease: "power2.out",
              stagger: 0.3,
            }
          );
        }
      },
      {
        threshold: 0.2,
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
    <div ref={sectionRef} className="bg-gradient-primary-secondary">
      <div className="max-w-7xl mx-auto px-8 lg:px-20 flex flex-col md:flex-row-reverse items-center">
        <div className="md:py-8 lg:py-20 max-w-sm">
          <h2 className="text-heading3-bold text-white py-4 mt-4 review-animate-item-text">
            {shouldRemoveQuotes ? client.review : `"${client.review}"`}
          </h2>
          <p className="text-gray-200 review-animate-item-text">
            {client.name}
          </p>
          <p className="text-gray-200 review-animate-item-text">
            {client.designation}
          </p>
        </div>
        <div className="my-8 md:mr-12 review-animate-item-image">
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
