import { IFAQ } from "@/common/types";
import React from "react";

interface IProps {
  faqs: IFAQ[];
  isGerman: boolean;
}

const FAQ = ({ faqs, isGerman }: IProps) => {
  return (
    <div className="max-w-7xl mx-auto px-8 md:px-20">
      <h2 className="text-heading3-bold md:text-heading2-bold text-center my-8 py-8 pb-0 md:pb-8">
        {isGerman ? "Häufig gestellte Fragen" : "Frequently Asked Questions"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {faqs.map((faq) => (
          <>
            <h6 className="text-body-bold pr-8 md:pr-12 md:text-right">
              {faq.question}
            </h6>
            <p className="pr-8 md:pr-20 text-gray-600 font-medium">
              {faq.answer}
            </p>
          </>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
