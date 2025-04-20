import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { gsap, Power2 } from "gsap";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

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

  const t = useTranslations("Index");

  const [vanishCover, setVanishCover] = useState(false);
  const [vanishName, setVanishName] = useState(false);
  // Define the useRef hooks
  const coverTopRef = useRef<HTMLDivElement>(null);
  const coverBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    const masterTimeline = gsap.timeline();

    // Letter Animation
    masterTimeline.fromTo(
      ".letter-animation",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, stagger: 0.2 }
    );

    masterTimeline.to(".letter-container", {
      duration: 0.5,
      opacity: 0,
      onComplete: () => {
        document.body.style.overflow = "auto";
        setVanishName(true);
      },
    });

    // Cover Animation
    masterTimeline.to(coverTopRef.current, {
      duration: 5,
      y: "-300%",
      ease: "power2.out",
      onUpdate: () => {
        if (
          coverTopRef.current &&
          coverTopRef.current.getBoundingClientRect().bottom <= 0
        ) {
          setVanishCover(true);
        }
      },
    });

    masterTimeline.to(
      coverBottomRef.current,
      {
        duration: 5,
        y: "300%",
        ease: "power2.out",
        onUpdate: () => {
          if (
            coverBottomRef.current &&
            coverBottomRef.current.getBoundingClientRect().top >=
              window.innerHeight
          ) {
            setVanishCover(true);
          }
        },
      },
      "-=5"
    );

    // Text and Image Animation
    masterTimeline.fromTo(
      ".text-animation",
      { scale: 0.8, opacity: 0 },
      {
        duration: 1,
        scale: 1,
        opacity: 1,
        ease: "power2.out",
      },
      "-=4.5"
    );

    masterTimeline.fromTo(
      ".image-animation",
      { scale: 0.8, opacity: 0 },
      {
        duration: 1,
        scale: 1,
        opacity: 1,
        ease: "power2.out",
      },
      "-=3.5"
    );

    // Existing code for rotating words
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".word-animation",
      { y: "-100%", opacity: 0 },
      {
        duration: 1,
        y: "0%",
        opacity: 1,
        ease: "Bounce.easeOut",
      }
    );

    tl.to(".word-animation", {
      delay: 1,
    });

    tl.to(".word-animation", {
      duration: 1,
      y: "-100%",
      opacity: 0,
      ease: "Bounce.easeIn",
    });

    tl.set(".word-animation", {
      y: "-100%",
      opacity: 0,
    });
  }, [currentIndex]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.set(".image-slide-animate", {
      x: "100%",
      opacity: 0,
    });

    // First Animation: Move the image from outside to its actual position
    tl.to(".image-slide-animate", {
      duration: 1,
      x: "0%",
      opacity: 1,
      ease: Power2.easeOut,
    });

    // Delay
    tl.to(".image-slide-animate", {
      delay: 1,
    });

    // Second Animation: Move the image back outside the screen
    tl.to(".image-slide-animate", {
      duration: 1,
      x: "100%",
      opacity: 0,
      ease: Power2.easeIn,
    });
  }, [currentIndex]);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <>
      {!vanishName && (
        <div className="font-bold text-[10vw] bg-[#1D1E24] absolute left-0 top-0 h-screen z-[100] w-full justify-center flex items-center letter-container">
          {Array.from(`Hi_ I am _  Fahim!`).map((char, index) => (
            <span
              key={index}
              className={`letter-animation ${
                index <= 3 ? "text-primary" : "text-white"
              }`}
            >
              {char}
            </span>
          ))}
        </div>
      )}
      {!vanishCover && (
        <>
          <div
            ref={coverTopRef}
            className="cover-top absolute top-0 left-0 w-full h-[50vh] bg-[#1D1E24] z-50"
          ></div>
          <div
            ref={coverBottomRef}
            className="cover-bottom absolute bottom-0 left-0 w-full h-[50vh] bg-[#1D1E24] z-50"
          ></div>
        </>
      )}
      <section className="bg-background relative overflow-x-clip h-[calc(1120px-60px)] xl:h-[calc(100vh-60px)] py-10 max-h-[900px] w-full flex justify-center items-center overflow-hidden">
        <div className="w-full max-w-6xl flex justify-between items-center h-full z-[2] flex-col xl:flex-row">
          <div className="text-box md:w-[700px] w-full h-[400px]  text-animation px-9">
            <div className="flex flex-col items-start">
              <div className="block md:flex">
                <h1 className="max-w-2xl tracking-tight leading-none text-[3.5rem] font-bold text-white">
                  {t("home.hero.title1")}
                </h1>
                <div className="flex justify-start">
                  <span
                    key={words[currentIndex]}
                    className="ml-3 tracking-tight leading-none font-bold text-[3.5rem]  text-primary word-animation"
                  >
                    {words[currentIndex]}
                  </span>
                </div>
              </div>
              <h1 className="max-w-2xl mb-8 text-[3.5rem] font-bold tracking-tight leading-none text-white">
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
          <div className="w-fit h-fit image-animation">
            {images.map(
              (img, index) =>
                index === currentIndex && (
                  <Image
                    priority={true}
                    key={index}
                    height={660}
                    width={500}
                    src={img}
                    alt="hero image"
                    className={`image-slide-animate`}
                  />
                )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
