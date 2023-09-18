import React, { useState } from "react";
import Link from "next/link";
import { ContactUsModal } from "@/common/elements/Modals/ContactUsModal";
import { useTranslations } from "next-intl";

const HelpSection = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const onCloseModal = () => {
    setModalVisible(false);
  };

  const t = useTranslations("home");

  return (
    <div className="my-16 max-w-6xl mx-auto">
      {isModalVisible && <ContactUsModal onCloseModal={onCloseModal} />}
      <h2 className="text-center text-heading3-bold lg:text-heading2-bold mb-16 px-4">
        {t("helpSection.heading")}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 grid-cols-1 mx-4">
        <Link className="p-8 lg:h-72 bg-gray-50" href="/existing-project">
          <div className="flex flex-col h-full justify-between grow-on-hover">
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
        </Link>
        <Link className="p-8 lg:h-72 bg-gray-50" href="/new-concept">
          <div className="flex flex-col h-full justify-between grow-on-hover">
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
        </Link>
        <Link className="p-8 lg:h-72 bg-gray-50" href="/augment-team">
          <div className="flex flex-col h-full justify-between grow-on-hover">
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
        </Link>
        <Link href="/enterprise">
          <div className="p-8 bg-background cursor-pointer grow-on-hover lg:h-72">
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
        </Link>
        <Link href="/advanced-tech">
          <div className="p-8 bg-gradient-primary-secondary cursor-pointer grow-on-hover lg:h-72">
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
        </Link>
        <div
          onClick={showModal}
          className="p-8 cursor-pointer grow-on-hover lg:h-72"
        >
          <h4 className="text-heading4-bold lg:text-heading3-bold tracking-wider">
          {t("helpSection.title6")}
          </h4>
          <p className="pt-2 text-gray-500">{t("helpSection.description6")}</p>
          <button className="p-4 mt-8 text-gray-700 font-bold tracking-wider border-2 border-primary p-1 font-semibold">
            {t("helpSection.button2")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
