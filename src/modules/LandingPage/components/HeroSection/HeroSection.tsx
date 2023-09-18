import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface Props {
  title: string;
  subTitle: string;
  scrollToProjectSection: () => void;
}

export default function HeroSection({
  title,
  subTitle,
  scrollToProjectSection,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const words = ["Websites", "Apps", "Culture"];

  const images = [
    "/images/websites.png",
    "/images/apps.png",
    "/images/culture.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const t = useTranslations("Index");

  return (
    <section className="mb-24 bg-background relative overflow-visible">
      <div className="relative flex flex-col md:flex-row items-center max-w-7xl mx-auto pb-40 px-8 md:px-10">
        <div className="max-w-xl pt-8 md:pt-14 mr-auto place-self-center xl:mt-0 xl:text-left lg:mt-0 lg:text-left md:mt-0 md:text-left sm:mt-0 sm:text-left text-center  lg:col-span-7 z-0">
          <div className="flex flex-col items-start">
            <div className="block md:flex">
              <h1 className="max-w-2xl text-heading3-bold md:text-heading2-bold font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                {t("home.hero.title1")}
              </h1>
              <div className="flex justify-start">
                <span
                  key={words[currentIndex]}
                  className="pl-0 text-left w-full md:pl-4 max-w-2xl text-heading3-bold md:text-heading2-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-primary text-slide-down"
                >
                  {words[currentIndex]}
                </span>
              </div>
            </div>
            <h1 className="max-w-2xl mb-8 text-heading3-bold md:text-heading2-bold font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              {t("home.hero.title2")}
            </h1>
          </div>
          <p className="max-w-md lg:max-w-2xl mb-6 font-light lg:mb-8 text-subtle-large text-white text-left">
            {t("home.hero.subTitle")}
          </p>
          <div className="flex justify-start mb-8 md:mb-0">
            <button
              className="border-2  border-primary text-white h-12 w-44 text-base1-semibold font-semibold md:h-14 md:w-56 grow-on-hover"
              onClick={scrollToProjectSection}
            >
              {t("home.hero.button")}
            </button>
          </div>
        </div>
        <div className="image-container z-0">
          {images.map((img, index) => (
            <Image
              priority={true}
              key={img}
              width={660}
              height={500}
              src={img}
              alt="hero image"
              className={`image-slide-down ${
                index === currentIndex ? "show" : "hidden"
              } relative md:absolute`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
