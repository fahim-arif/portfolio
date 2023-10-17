import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ContactUsModal } from "@/common/elements/Modals/ContactUsModal";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import Tilt from "react-parallax-tilt";

const HelpSection = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const onCloseModal = () => {
    setModalVisible(false);
  };

  const t = useTranslations("home");

  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          gsap.killTweensOf(".help-animate-heading, .help-animate-item");
          const tl = gsap.timeline();

          tl.fromTo(
            ".help-animate-heading",
            { scale: 0.6, opacity: 0 },
            {
              duration: 1,
              scale: 1,
              opacity: 1,
              ease: "power2.out",
            }
          );

          tl.fromTo(
            ".help-animate-item",
            { scale: 0.6, opacity: 0 },
            {
              duration: 1,
              scale: 1,
              opacity: 1,
              ease: "power2.out",
              stagger: 0.2,
            },
            "-=0.5"
          );
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.05,
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
    <div ref={sectionRef} className="my-16 max-w-6xl mx-auto">
      {isModalVisible && <ContactUsModal onCloseModal={onCloseModal} />}
      <h2 className="text-center text-heading3-bold lg:text-heading2-bold mb-16 px-4 help-animate-heading">
        {t("helpSection.heading")}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 grid-cols-1 mx-4">
        <Link href="/existing-project">
          <Tilt perspective={500} scale={1.05} className="hover:z-10 relative">
            <div className="flex flex-col h-full justify-between p-8 lg:h-72 bg-gray-50  help-animate-item shadow-2xl rounded-lg">
              <h4 className="text-heading4-bold lg:text-heading3-bold tracking-wider">
                {t("helpSection.title1")}
              </h4>
              <p className="text-gray-500">{t("helpSection.description1")}</p>
              <div>
                <button className="text-gray-700 font-bold tracking-wider border-b-2 border-primary p-1">
                  {t("helpSection.button1")}
                </button>
              </div>
            </div>
          </Tilt>
        </Link>
        <Link href="/new-concept">
          <Tilt perspective={500} scale={1.05} className="hover:z-10 relative">
            <div className="flex flex-col h-full justify-between p-8 lg:h-72 bg-gray-50 help-animate-item shadow-2xl rounded-lg">
              <h4 className="text-heading4-bold lg:text-heading3-bold tracking-wider">
                {t("helpSection.title2")}
              </h4>
              <p className="text-gray-500">{t("helpSection.description2")}</p>
              <div>
                <button className="pt-4 text-gray-700 font-bold tracking-wider border-b-2 border-primary p-1">
                  {t("helpSection.button1")}
                </button>
              </div>
            </div>
          </Tilt>
        </Link>
        <Link href="/augment-team">
          <Tilt perspective={500} scale={1.05} className="hover:z-10 relative">
            <div className="flex flex-col h-full justify-between p-8 lg:h-72 bg-gray-50 help-animate-item shadow-2xl rounded-lg">
              <h4 className="text-heading4-bold lg:text-heading3-bold tracking-wider">
                {t("helpSection.title3")}
              </h4>
              <p className="text-gray-500">{t("helpSection.description3")}</p>
              <div>
                <button className="pt-4 text-gray-700 font-bold tracking-wider border-b-2 border-primary p-1">
                  {t("helpSection.button1")}
                </button>
              </div>
            </div>
          </Tilt>
        </Link>
        <Link href="/enterprise">
          <Tilt perspective={500} scale={1.05} className="hover:z-10 relative">
            <div className="p-8 bg-background cursor-pointer grow-on-hover lg:h-72 help-animate-item shadow-2xl rounded-lg">
              <h4 className="text-heading4-bold lg:text-heading3-bold tracking-wider text-white">
                {t("helpSection.title4")}
              </h4>
              <p className="pt-2 text-gray-100">
                {t("helpSection.description4")}
              </p>
              <button className="text-white pt-4 font-bold tracking-wider border-b-2 border-primary p-1 mb-6">
                {t("helpSection.button1")}
              </button>
            </div>
          </Tilt>
        </Link>
        <Link href="/advanced-tech">
          <Tilt perspective={500} scale={1.05} className="hover:z-10 relative">
            <div className="p-8 bg-gradient-primary-secondary cursor-pointer lg:h-72 help-animate-item shadow-2xl rounded-lg">
              <h4 className="text-heading4-bold lg:text-heading3-bold tracking-wider text-white">
                {t("helpSection.title5")}
              </h4>
              <p className="pt-2 text-gray-100">
                {t("helpSection.description5")}
              </p>
              <button className="text-white pt-4 font-bold tracking-wider border-b-2 border-primary p-1">
                {t("helpSection.button1")}
              </button>
            </div>
          </Tilt>
        </Link>
        <Tilt perspective={500} scale={1.05} className="hover:z-10 relative">
          <div
            onClick={showModal}
            className="p-8 cursor-pointer lg:h-72 help-animate-item shadow-2xl rounded-lg bg-gray-50"
          >
            <h4 className="text-heading4-bold lg:text-heading3-bold tracking-wider">
              {t("helpSection.title6")}
            </h4>
            <p className="pt-2 text-gray-500">
              {t("helpSection.description6")}
            </p>
            <button className="p-4 mt-8 text-gray-700 font-bold tracking-wider border-2 border-primary p-1 font-semibold">
              {t("helpSection.button2")}
            </button>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default HelpSection;
