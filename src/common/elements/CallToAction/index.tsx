import React, { useEffect, useRef, useState } from "react";
import { ContactUsModal } from "../Modals/ContactUsModal";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import Tilt from "react-parallax-tilt";
import gsap from "gsap";

interface IProps {
  title: string;
  actionBtnText: string;
  showHelpSection?: boolean;
}

const CallToAction = ({
  title,
  actionBtnText,
  showHelpSection = true,
}: IProps) => {
  const t = useTranslations("home");
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const onCloseModal = () => {
    setModalVisible(false);
  };

  const router = useRouter();
  const id = router.query.id as string;

  const isExistingProject = router.pathname === "/existing-project";
  const isNewConcept = router.pathname === "/new-concept";
  const isAugmentTeam = router.pathname === "/augment-team";
  const isEnterprise = router.pathname === "/enterprise";
  const isAdvanced = router.pathname === "/advanced-tech";

  const sectionRef = useRef(null);

  // The useEffect hook
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          gsap.killTweensOf(".cta-animate-background cta-animate-item");
          const tl = gsap.timeline();

          tl.fromTo(
            ".cta-animate-background ",
            {
              x: "-100%",
              opacity: 0,
            },
            {
              duration: 1,
              x: 0,
              opacity: 1,
              ease: "power2.out",
              stagger: 0.3,
            }
          );

          tl.fromTo(
            ".cta-animate-item",
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
  }, [id]);

  return (
    <div ref={sectionRef}>
      <div className="max-w-7xl px-8 md:px-20 bg-background mx-auto cta-animate-background">
        {isModalVisible && <ContactUsModal onCloseModal={onCloseModal} />}
        <div className="flex flex-col justify-center pt-8 md:pt-0">
          <h3 className="text-center text-white text-heading4-bold md:text-heading3-bold py-4 md:mt-8 md:py-8 cta-animate-item">
            {title}
          </h3>
          <div className="flex justify-center pb-12 md:pb-20">
            <button
              onClick={showModal}
              className="p-4 text-white text-base-bold tracking-wider border-2 border-primary grow-on-hover px-8 font-semibold cta-animate-item"
            >
              {actionBtnText}
            </button>
          </div>
        </div>
      </div>
      {/* Actionable cards */}
      {showHelpSection && (
        <div className="max-w-7xl mx-auto py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 grid-cols-1 px-8 md:px-0">
            {!isExistingProject && (
              <Link href="/existing-project">
                <Tilt
                  perspective={500}
                  scale={1.05}
                  className="p-8 bg-gray-50 cta-animate-item hover:z-10 relative h-full shadow-2xl"
                >
                  <div className="flex flex-col h-full justify-between  grow-on-hover ">
                    <h4 className="text-heading4-bold lg:text-heading3-bold tracking-wider">
                      {t("helpSection.title1")}
                    </h4>
                    <p className="pt-2 text-gray-500">
                      {t("helpSection.description1")}
                    </p>
                    <div>
                      <button className="text-gray-700 font-bold tracking-wider border-b-2 border-primary p-1">
                        {t("helpSection.button1")}
                      </button>
                    </div>
                  </div>
                </Tilt>
              </Link>
            )}
            {!isNewConcept && (
              <Link href="/new-concept">
                <Tilt
                  perspective={500}
                  scale={1.05}
                  className="p-8 bg-gray-50 cta-animate-item hover:z-10 relative h-full shadow-2xl"
                >
                  <div className="flex flex-col h-full justify-between  grow-on-hover ">
                    <h4 className="text-heading4-bold lg:text-heading3-bold tracking-wider">
                      {t("helpSection.title2")}
                    </h4>
                    <p className="pt-2  text-gray-500">
                      {t("helpSection.description2")}
                    </p>
                    <div>
                      <button className="pt-4 text-gray-700 font-bold tracking-wider border-b-2 border-primary p-1">
                        {t("helpSection.button1")}
                      </button>
                    </div>
                  </div>
                </Tilt>
              </Link>
            )}
            {!isAugmentTeam && (
              <Link href="/augment-team">
                <Tilt
                  perspective={500}
                  scale={1.05}
                  className="bg-gray-50 p-8 cta-animate-item hover:z-10 relative h-full shadow-2xl"
                >
                  <div className="flex flex-col h-full justify-between  grow-on-hover ">
                    <h4 className="text-heading4-bold lg:text-heading3-bold tracking-wider">
                      {t("helpSection.title3")}
                    </h4>
                    <p className="pt-2 text-gray-500">
                      {t("helpSection.description3")}
                    </p>
                    <div>
                      <button className="pt-4 text-gray-700 font-bold tracking-wider border-b-2 border-primary p-1">
                        {t("helpSection.button1")}
                      </button>
                    </div>
                  </div>
                </Tilt>
              </Link>
            )}
            {!isEnterprise && (
              <Link href="/enterprise">
                <Tilt
                  perspective={500}
                  scale={1.05}
                  className="bg-background p-8 cta-animate-item hover:z-10 relative h-full shadow-2xl"
                >
                  <div className="flex flex-col h-full justify-between  grow-on-hover ">
                    <h4 className="text-heading4-bold lg:text-heading3-bold tracking-wider text-white">
                      {t("helpSection.title4")}
                    </h4>
                    <p className="pt-2 text-gray-100">
                      {t("helpSection.description4")}
                    </p>
                    <div>
                      <button className="text-white pt-4 font-bold tracking-wider border-b-2 border-primary p-1">
                        {t("helpSection.button1")}
                      </button>
                    </div>
                  </div>
                </Tilt>
              </Link>
            )}
            {!isAdvanced && (
              <Link href="/advanced-tech">
                <Tilt
                  perspective={500}
                  scale={1.05}
                  className="p-8 bg-gradient-primary-secondary cta-animate-item hover:z-10 relative h-full shadow-2xl"
                >
                  <div className="flex flex-col h-full justify-between  grow-on-hover">
                    <h4 className="text-heading4-bold lg:text-heading3-bold tracking-wider text-white">
                      {t("helpSection.title5")}
                    </h4>
                    <p className="text-gray-100">
                      {t("helpSection.description5")}
                    </p>
                    <div>
                      <button className="text-white pt-4 font-bold tracking-wider border-b-2 border-primary p-1">
                        {t("helpSection.button1")}
                      </button>
                    </div>
                  </div>
                </Tilt>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CallToAction;
