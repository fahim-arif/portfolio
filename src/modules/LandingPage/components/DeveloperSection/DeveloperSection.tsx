import { ContactUsModal } from "@/common/elements/Modals/ContactUsModal";
import React, { useState } from "react";

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

  return (
    <div className="h-auto developer-background relative">
      {isModalVisible && <ContactUsModal onCloseModal={onCloseModal} />}
      <div className="max-w-7xl px-10 mx-auto">
        <div className="py-12 w-full md:w-1/2">
          <h2 className="z-100 text-heading3-bold lg:text-heading2-bold mb-8 text-white">
            {title}
          </h2>
          <p className="text-base-semibold text-md text-white max-w-md">
            {description}
          </p>
          <button
            onClick={showModal}
            className="mt-12 border-2 border-primary p-4 px-8 text-white text-base-bold z-10 grow-on-hover font-semibold"
          >
            {btnText}
          </button>
        </div>
        <div className="-z-10 absolute w-full md:w-1/2 h-full bg-gray-900 bg-opacity-60 top-0 left-0 h"></div>
      </div>
    </div>
  );
};

export default DeveloperSection;
