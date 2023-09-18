import { useTranslations } from "next-intl";
import React from "react";

const ProcessSection = () => {
  const t = useTranslations("existingProject");
  return (
    <div className="process-bg-container">
      <div className="max-w-7xl px-8 md:px-20 mx-auto">
        <h2 className="text-heading3-bold md:text-heading2-bold font-bold text-white text-center pt-20">
          {t("processSection.title")}
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-subtle-large mt-8 mb-20  text-gray-200 font-semibold text-center">
            {t("processSection.subTitle")}
          </p>
        </div>
        <div className="flex flex-col relative py-20">
          <div className="max-w-md bg-background px-14 py-8 self-center lg:self-baseline">
            <h3 className="text-heading3-bold text-primary pb-8 ">
              {t("processSection.step1.title")}
            </h3>
            <p className="text-gray-100 text-body-normal lg:text-right">
              {t("processSection.step1.description")}
            </p>
          </div>
          <div className="max-w-md bg-background px-14 py-8 self-center lg:self-end mt-8">
            <h3 className="text-heading3-bold text-primary pb-8">
              {t("processSection.step2.title")}
            </h3>
            <p className="text-gray-100 text-body-normal">
              {t("processSection.step2.description")}
            </p>
          </div>
          <div className="max-w-md bg-background px-14 py-8 self-center  lg:self-baseline mt-8">
            <h3 className="text-heading3-bold text-primary pb-8">
              {" "}
              {t("processSection.step3.title")}
            </h3>
            <p className="text-gray-100 text-body-normal lg:text-right">
              {t("processSection.step3.description")}
            </p>
          </div>
          <div className="absolute hidden lg:block w-0.5 bg-slate-100 left-1/2 h-full z-50"></div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
