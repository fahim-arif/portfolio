import React, { useState } from "react";
import { ContactUsModal } from "../Modals/ContactUsModal";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

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

  const isExistingProject = router.pathname === "/existing-project";
  const isNewConcept = router.pathname === "/new-concept";
  const isAugmentTeam = router.pathname === "/augment-team";
  const isEnterprise = router.pathname === "/enterprise";
  const isAdvanced = router.pathname === "/advanced-tech";

  return (
    <>
      <div className="max-w-7xl px-8 md:px-20 bg-background mx-auto">
        {isModalVisible && <ContactUsModal onCloseModal={onCloseModal} />}
        <div className="flex flex-col justify-center pt-8 md:pt-0">
          <h3 className="text-center text-white text-heading4-bold md:text-heading3-bold py-4 md:mt-8 md:py-8">
            {title}
          </h3>
          <div className="flex justify-center pb-12 md:pb-20">
            <button
              onClick={showModal}
              className="p-4 text-white text-base-bold tracking-wider border-2 border-primary grow-on-hover px-8 font-semibold"
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
              <Link className="p-8 bg-gray-50" href="/existing-project">
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
              </Link>
            )}
            {!isNewConcept && (
              <Link className="p-8 bg-gray-50" href="/new-concept">
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
              </Link>
            )}
            {!isAugmentTeam && (
              <Link className="bg-gray-50 p-8" href="/augment-team">
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
              </Link>
            )}
            {!isEnterprise && (
              <Link className="bg-background p-8" href="/enterprise">
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
              </Link>
            )}
            {!isAdvanced && (
              <Link
                className="p-8 bg-gradient-primary-secondary"
                href="/advanced-tech"
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
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CallToAction;
