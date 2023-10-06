import { ContactUsModal } from "@/common/elements/Modals/ContactUsModal";
import { Project } from "@/common/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface IProps {
  project: Project;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  btnText: string;
  serviceTitle: string;
  serviceBtnText: string;
}

const ProjectOverviewSection = ({
  project,
  title1,
  title2,
  title3,
  title4,
  btnText,
  serviceBtnText,
  serviceTitle,
}: IProps) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isImage1Loaded, setImage1Loaded] = useState(false);
  const [isImage2Loaded, setImage2Loaded] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const onCloseModal = () => {
    setModalVisible(false);
  };

  const { id } = useRouter().query;

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          const tl = gsap.timeline();
          tl.killTweensOf(
            ".zoom-in-item-project-overview .slide-in-item-project-overview"
          );
          tl.fromTo(
            ".zoom-in-item-project-overview",
            { scale: 0.7, opacity: 0 },
            {
              duration: 0.75,
              scale: 1,
              opacity: 1,
              stagger: 0.5,
              ease: "power2.inOut",
            }
          );

          tl.fromTo(
            ".slide-in-item-project-overview",
            { x: "200%", opacity: 0 },
            {
              duration: 1,
              x: "0%",
              opacity: 1,
              stagger: 0.5,
              ease: "power2.inOut",
            }
          );
        }
      },
      { threshold: 0.1 }
    );

    if (section1Ref.current) {
      observer.observe(section1Ref.current);
    }

    return () => {
      if (section1Ref.current) {
        observer.unobserve(section1Ref.current);
      }
    };
  }, [id]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          const tl = gsap.timeline();
          tl.killTweensOf(
            ".slide-in-left-image-technology .slide-in-right-text"
          );
          tl.set(".slide-in-left-image-technology", {
            x: "-200%",
            opacity: 0,
          });

          tl.to(
            ".slide-in-left-image-technology",

            {
              duration: 1.5,
              x: "0%",
              opacity: 1,
              ease: "power2.inOut",
            }
          );

          tl.fromTo(
            ".slide-in-right-text",
            { x: "200%", opacity: 0 },
            {
              duration: 1,
              x: "0%",
              opacity: 1,
              ease: "power2.inOut",
            },
            "-=0.5"
          );
        }
      },
      { threshold: 0.025 }
    );

    if (section2Ref.current) {
      observer.observe(section2Ref.current);
    }

    return () => {
      if (section2Ref.current) {
        observer.unobserve(section2Ref.current);
      }
    };
  }, [id]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          const tl = gsap.timeline();
          tl.killTweensOf(".slide-in-item-takeaway .slide-in-item-review");

          tl.fromTo(
            ".slide-in-item-takeaway",
            { x: "-200%", opacity: 0 },
            {
              duration: 1,
              x: "0%",
              opacity: 1,
              stagger: 0.5,
              ease: "power2.inOut",
            }
          );

          tl.fromTo(
            ".slide-in-item-review",
            { x: "200%", opacity: 0 },
            {
              duration: 1,
              x: "0%",
              opacity: 1,
              stagger: 0.5,
              ease: "power2.inOut",
            },
            "-=0.5"
          );
        }
      },
      { threshold: 0.1 }
    );

    if (section3Ref.current) {
      observer.observe(section3Ref.current);
    }

    return () => {
      if (section3Ref.current) {
        observer.unobserve(section3Ref.current);
      }
    };
  }, [id]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        const tl = gsap.timeline();
        tl.killTweensOf(".slide-in-work-together");
        tl.fromTo(
          ".slide-in-work-together",
          { x: "-200%", opacity: 0 },
          {
            duration: 1,
            x: "0%",
            opacity: 1,
            stagger: 0.5,
            ease: "power2.inOut",
          }
        );
        tl.fromTo(
          ".zoom-in-work-together",
          { scale: 0.7, opacity: 0 },
          {
            duration: 0.75,
            scale: 1,
            opacity: 1,
            stagger: 0.5,
            ease: "power2.inOut",
          }
        ),
          { threshold: 0.1 };
      }
    });

    if (section4Ref.current) {
      observer.observe(section4Ref.current);
    }

    return () => {
      if (section4Ref.current) {
        observer.unobserve(section4Ref.current);
      }
    };
  }, [id]);

  return (
    <div className="bg-background relative z-0">
      {isModalVisible && <ContactUsModal onCloseModal={onCloseModal} />}
      <section
        ref={section1Ref}
        className="flex flex-col lg:flex-row max-w-6xl mx-auto"
      >
        <div className="bg-gray-800 w-64 h-64 flex justify-center items-center mt-16 mx-auto lg:mx-0 relative zoom-in-item-project-overview">
          {!isImage1Loaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Spinner */}
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          )}
          <Image
            src={project.images[1]}
            height={180}
            width={180}
            alt={project.title}
            className="rounded-xl"
            onLoad={() => setImage1Loaded(true)}
          />
        </div>
        <div className="max-w-2xl p-8 lg:p-12">
          <h2 className="text-heading3-bold font-bold text-white zoom-in-item-project-overview">
            {title1}
          </h2>
          <p className="pt-4 text-lg md:text-xl text-gray-400 font-medium md:font-semibold zoom-in-item-project-overview">
            {project.description}
          </p>
        </div>
        <div className="py-8 px-8 lg:px-0">
          <p className=" text-gray-400 text-body-semibold tracking-widest my-8 slide-in-item-project-overview">
            {serviceTitle}
          </p>
          {project.services.map((service) => (
            <p
              className="text-white border-b-2 border-gray-700 mb-4 slide-in-item-project-overview"
              key={service}
            >
              {service}
            </p>
          ))}

          <Link href="#">
            <p className=" border-b-2 border-gray-700 mb-4 text-primary slide-in-item-project-overview">
              {serviceBtnText}
            </p>
          </Link>
        </div>
        {/* Overview Section */}
      </section>

      <section
        ref={section2Ref}
        className="flex my-12 flex-col lg:flex-row justify-center"
      >
        <div
          style={{
            maxWidth: "700px",
            maxHeight: "500px",
          }}
          className="py-12 relative slide-in-left-image-technology"
        >
          {!isImage2Loaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Spinner */}
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          )}
          <Image
            src={project.images[2]}
            height={500}
            width={700}
            alt={project.title}
            className="rounded-xl"
            onLoad={() => setImage2Loaded(true)}
          />
        </div>
        <div className="max-w-2xl p-8 lg:p-12 slide-in-right-text">
          <h2 className="text-heading3-bold text-white">{title2}</h2>
          <p className="pt-4  text-white">
            {project.techicalOverview.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <div className="grid grid-cols-2 gap-2 my-8">
            {project.technologies.map((tech) => (
              <p key={tech} className="text-primary">
                {" "}
                {tech}
              </p>
            ))}
          </div>
        </div>
        {/* Technology Section */}
      </section>
      <section
        ref={section3Ref}
        className="flex flex-col lg:flex-row max-w-6xl mx-auto justify-between py-12"
      >
        <div className="max-w-2xl px-8 lg:px-12">
          <h2 className="text-heading3-bold text-white slide-in-item-takeaway">
            {title3}
          </h2>
          <p className="pt-4 text-white slide-in-item-takeaway">
            {project.takeaway}
          </p>
        </div>
        <div className="px-8 lg:px-0 mt-4 lg:mt-0">
          <div className="review-box slide-in-item-review">
            <h4 className="text-heading3-bold text-yellow-400 max-w-sm italic slide-in-item-review">
              {project.client.review}
            </h4>
            <div className="my-4">
              <p className="text-gray-300 slide-in-item-review">
                {project.client.name}
              </p>
              <p className="text-gray-300 slide-in-item-review">
                {project.client.designation}
              </p>
            </div>
          </div>
        </div>
        {/* Client Review */}

        {/* Key Takeway section */}
      </section>
      <section
        ref={section4Ref}
        className="flex justify-center py-12 relative z-20 my-20"
      >
        <div className="bg-gradient-primary-secondary p-20 flex justify-center flex-col slide-in-work-together">
          <h4 className="text-heading3-bold text-white font-bold tracking-wider zoom-in-work-together">
            {title4}
          </h4>
          <button
            onClick={showModal}
            className="text-white mt-12 tracking-wider border-2 border-gray-300 p-1 py-2 font-semibold zoom-in-work-together"
          >
            {btnText}
          </button>
        </div>

        {/* Call to action section */}
      </section>
    </div>
  );
};

export default ProjectOverviewSection;
