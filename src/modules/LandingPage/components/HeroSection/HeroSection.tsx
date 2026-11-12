import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { PROFILE } from "@/content/profile";
import { CONTACT } from "@/common/constants/contact";
import { prefersReducedMotion } from "@/common/hooks/useRevealOnScroll";

const words = PROFILE.heroRotatingWords;

const buttonClass =
  "inline-flex items-center justify-center border-2 border-primary text-white h-12 px-6 text-base1-semibold font-semibold md:h-14 grow-on-hover focus:outline-none focus-visible:ring-4 focus-visible:ring-white";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [vanishCover, setVanishCover] = useState(false);
  const [vanishName, setVanishName] = useState(false);
  const coverTopRef = useRef<HTMLDivElement>(null);
  const coverBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip the intro for reduced-motion visitors and for deep links
    // such as /#projects, so the browser can land on the section.
    if (prefersReducedMotion() || window.location.hash) {
      setVanishName(true);
      setVanishCover(true);
      return;
    }

    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    const masterTimeline = gsap.timeline();

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

    masterTimeline.fromTo(
      ".text-animation",
      { scale: 0.8, opacity: 0 },
      { duration: 1, scale: 1, opacity: 1, ease: "power2.out" },
      "-=4.5"
    );

    masterTimeline.fromTo(
      ".image-animation",
      { scale: 0.8, opacity: 0 },
      { duration: 1, scale: 1, opacity: 1, ease: "power2.out" },
      "-=3.5"
    );

    return () => {
      masterTimeline.kill();
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const tl = gsap.timeline();
    tl.fromTo(
      ".word-animation",
      { y: "-100%", opacity: 0 },
      { duration: 1, y: "0%", opacity: 1, ease: "Bounce.easeOut" }
    );
    tl.to(".word-animation", { delay: 1 });
    tl.to(".word-animation", {
      duration: 1,
      y: "-100%",
      opacity: 0,
      ease: "Bounce.easeIn",
    });
    return () => {
      tl.kill();
    };
  }, [currentIndex]);

  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
  };

  return (
    <>
      {!vanishName && (
        <div
          aria-hidden="true"
          className="font-bold text-[8vw] bg-[#1D1E24] absolute left-0 top-0 h-screen z-[100] w-full justify-center flex items-center letter-container"
        >
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
            aria-hidden="true"
            className="cover-top absolute top-0 left-0 w-full h-[50vh] bg-[#1D1E24] z-50"
          ></div>
          <div
            ref={coverBottomRef}
            aria-hidden="true"
            className="cover-bottom absolute bottom-0 left-0 w-full h-[50vh] bg-[#1D1E24] z-50"
          ></div>
        </>
      )}
      <section
        aria-label="Introduction"
        className="bg-background relative overflow-x-clip min-h-[min(calc(100vh-60px),900px)] py-16 w-full flex justify-center items-center overflow-hidden"
      >
        <div className="w-full max-w-6xl flex justify-between items-center gap-12 h-full z-[2] flex-col xl:flex-row px-6 md:px-9">
          <div className="text-box md:w-[700px] w-full text-animation">
            <p className="text-primary font-semibold tracking-widest uppercase mb-4">
              {PROFILE.title}
            </p>
            <h1 className="max-w-2xl tracking-tight leading-none text-[3rem] md:text-[3.5rem] font-bold text-white mb-6">
              {PROFILE.name}
            </h1>
            <p className="max-w-2xl tracking-tight leading-tight text-[1.75rem] md:text-[2.25rem] font-bold text-white mb-8">
              I build{" "}
              <span
                key={words[currentIndex]}
                className="inline-block text-primary word-animation"
              >
                {words[currentIndex]}
              </span>
              <span className="sr-only">
                {" "}
                ({words.join(", ")})
              </span>
            </p>
            <p className="max-w-md lg:max-w-2xl mb-3 font-light text-subtle-large text-white text-left">
              {PROFILE.heroSummary}
            </p>
            <p className="max-w-md lg:max-w-2xl mb-8 text-gray-300 text-left">
              {PROFILE.stack} · {PROFILE.location} · {PROFILE.availability}
            </p>
            <div className="flex flex-wrap gap-4 justify-start">
              <button type="button" className={buttonClass} onClick={scrollToProjects}>
                View projects
              </button>
              <a className={buttonClass} href={CONTACT.resume} download>
                Download resume
              </a>
              <a className={buttonClass} href={CONTACT.mailto}>
                Email me
              </a>
            </div>
          </div>
          <div className="w-full max-w-[320px] md:max-w-[380px] image-animation">
            <Image
              priority
              src="/images/fahim.jpg"
              alt="Portrait of Fahim Arif"
              width={512}
              height={768}
              sizes="(min-width: 768px) 380px, 320px"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}
