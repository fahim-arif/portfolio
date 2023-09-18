import { ContactUsModal } from "@/common/elements/Modals/ContactUsModal";
import { Project } from "@/common/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

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

  return (
    <div className="bg-background relative z-0">
      {isModalVisible && <ContactUsModal onCloseModal={onCloseModal} />}
      <section className="flex flex-col lg:flex-row max-w-6xl mx-auto">
        <div className="bg-gray-800 w-64 h-64 flex justify-center items-center mt-16 mx-auto lg:mx-0 relative">
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
          <h2 className="text-heading3-bold font-bold text-white">{title1}</h2>
          <p className="pt-4 text-lg md:text-xl text-gray-400 font-medium md:font-semibold">
            {project.description}
          </p>
        </div>
        <div className="py-8 px-8 lg:px-0">
          <p className="grow-on-hover text-gray-400 text-body-semibold tracking-widest my-8">
            {serviceTitle}
          </p>
          {project.services.map((service) => (
            <p
              className="text-white border-b-2 border-gray-700 mb-4"
              key={service}
            >
              {service}
            </p>
          ))}

          <Link href="#">
            <p className="grow-on-hover border-b-2 border-gray-700 mb-4 text-primary">
              {serviceBtnText}
            </p>
          </Link>
        </div>
        {/* Overview Section */}
      </section>

      <section className="flex my-12 flex-col lg:flex-row">
        <div
          style={{
            maxWidth: "700px",
            maxHeight: "500px",
          }}
          className="py-12 relative"
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
        <div className="max-w-2xl p-8 lg:p-12">
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
      <section className="flex flex-col lg:flex-row max-w-6xl mx-auto justify-between py-12">
        <div className="max-w-2xl px-8 lg:px-12">
          <h2 className="text-heading3-bold text-white">{title3}</h2>
          <p className="pt-4 text-white">{project.takeaway}</p>
        </div>
        <div className="px-8 lg:px-0 mt-4 lg:mt-0">
          <div className="review-box">
            <h4 className="text-heading3-bold text-yellow-400 max-w-sm italic">
              {project.client.review}
            </h4>
            <div className="my-4">
              <p className="text-gray-300">{project.client.name}</p>
              <p className="text-gray-300">{project.client.designation}</p>
            </div>
          </div>
        </div>
        {/* Client Review */}

        {/* Key Takeway section */}
      </section>
      <section className="flex justify-center py-12 relative z-20 my-20">
        <div className="bg-gradient-primary-secondary p-20 flex justify-center flex-col">
          <h4 className="text-heading3-bold text-white font-bold tracking-wider">
            {title4}
          </h4>
          <button
            onClick={showModal}
            className="text-background mt-12 tracking-wider border-2 border-background p-1 py-2 grow-on-hover font-semibold"
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
