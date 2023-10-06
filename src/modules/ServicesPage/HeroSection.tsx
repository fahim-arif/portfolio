import { useEffect, useRef, useState } from "react";
import {
  advancedStack,
  backendStack,
  devopsStack,
  mobileStack,
  webStack,
} from "./techStack";
import { ContactUsModal } from "@/common/elements/Modals/ContactUsModal";
import gsap from "gsap";

interface IProps {
  title: string;
  description: string;
  btnText: string;
}

export default function HeroSection({ title, description, btnText }: IProps) {
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
          gsap.killTweensOf(".hero-service-animate-item");
          const tl = gsap.timeline();

          tl.fromTo(
            ".hero-service-animate-item",
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
        rootMargin: "0px",
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
      className="process-bg-container h-full pb-12"
      style={{ height: "100%" }}
    >
      {isModalVisible && <ContactUsModal onCloseModal={onCloseModal} />}
      <div className="max-w-7xl px-8 md:px-10 mx-auto flex flex-col md:flex-row justify-between pt-28">
        <div className="max-w-md">
          <h2 className="text-heading3-bold md:text-heading2-bold font-bold text-white pt-20 hero-service-animate-item">
            {title}
          </h2>
          <div className="max-w-2xl mx-auto pr-8">
            <p className="text-subtle-large mt-8 mb-8  text-gray-200 font-semibold hero-service-animate-item">
              {description.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
          <div className="flex justify-start pb-12 md:pb-20 hero-service-animate-item">
            <button
              onClick={showModal}
              className="p-4 text-white text-base-bold tracking-wider border-2 border-primary grow-on-hover px-8 font-semibold"
            >
              {btnText}
            </button>
          </div>
        </div>
        <div className="bg-background p-12 w-full hero-service-animate-item">
          <p className="text-center text-base-medium text-primary pb-8 tracking-widest">
            WEB APPLICATIONS{" "}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {webStack.map((stack, index) => (
              <p
                className="pt-2 px-8 md:px-12 text-center  text-white"
                key={index}
              >
                {stack}
              </p>
            ))}
          </div>
          {/*  */}
          <p className="text-center text-base-medium text-primary pb-8 tracking-widest pt-20">
            BACK END{" "}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {backendStack.map((stack, index) => (
              <p
                className="pt-2 px-8 md:px-12 text-center text-white"
                key={index}
              >
                {stack}
              </p>
            ))}
          </div>
          {/*  */}
          <p className="text-center text-base-medium text-primary pb-8 tracking-widest pt-20">
            MOBILE{" "}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {mobileStack.map((stack, index) => (
              <p
                className="pt-2 px-8 md:px-12 text-center text-white"
                key={index}
              >
                {stack}
              </p>
            ))}
          </div>
          {/*  */}
          <p className="text-center text-base-medium text-primary pb-8 tracking-widest pt-20">
            DevOps{" "}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {devopsStack.map((stack, index) => (
              <p
                className="pt-2 px-8 md:px-12 text-center text-white"
                key={index}
              >
                {stack}
              </p>
            ))}
          </div>
          {/*  */}
          <p className="text-center text-base-medium text-primary pb-8 tracking-widest pt-20">
            ADVANCED TECH{" "}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {advancedStack.map((stack, index) => (
              <p
                className="pt-2 px-8 md:px-12 text-center text-white"
                key={index}
              >
                {stack}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
