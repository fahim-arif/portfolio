import { ContactUsModal } from "@/common/elements/Modals/ContactUsModal";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface IProps {
  title: string;
  description: string;
  btnText: string;
}

const DeveloperSection = ({ title, description, btnText }: IProps) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const onCloseModal = () => {
    setModalVisible(false);
  };

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          gsap.killTweensOf(".developer-background-animate, .zoom-in-elements");
          const tl = gsap.timeline();

          tl.fromTo(
            ".developer-background-animate",
            { x: "-100%" },
            {
              duration: 1.5,
              x: "0%",
              ease: "Power2.easeOut",
            }
          );

          tl.fromTo(
            ".zoom-in-elements",
            { scale: 0.8, opacity: 0 },
            {
              duration: 1.5,
              scale: 1,
              opacity: 1,
              ease: "Power2.easeOut",
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
    <>
      {isModalVisible && <ContactUsModal onCloseModal={onCloseModal} />}
      <div
        ref={sectionRef}
        className="h-auto developer-background relative developer-background-animate"
      >
        <div className="max-w-7xl px-10 mx-auto">
          <div className="py-12 w-full md:w-1/2">
            <h2 className="z-100 text-heading3-bold lg:text-heading2-bold mb-8 text-white zoom-in-elements">
              {title}
            </h2>
            <p className="text-base-semibold text-md text-white max-w-md zoom-in-elements">
              {description}
            </p>
            <button
              onClick={showModal}
              className="mt-12 border-2 border-primary p-4 px-8 text-white text-base-bold z-10 grow-on-hover font-semibold zoom-in-elements"
            >
              {btnText}
            </button>
          </div>
          <div className="-z-10 absolute w-full md:w-1/2 h-full bg-gray-900 bg-opacity-60 top-0 left-0 h"></div>
        </div>
      </div>
    </>
  );
};

export default DeveloperSection;
