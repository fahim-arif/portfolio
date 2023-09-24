import Link from "next/link";
import React, { useState } from "react";
import { ContactUsModal } from "../Modals/ContactUsModal";
import { useRouter } from "next/router";

export default function Footer() {
  const [isModalVisible, setModalVisible] = useState(false);

  const router = useRouter();

  const isGerman = router.locale === "de";

  const showModal = () => {
    setModalVisible(true);
  };

  const onCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <footer className="bg-background ">
      {isModalVisible && <ContactUsModal onCloseModal={onCloseModal} />}
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 pt-8 p-8 lg:p-12 ">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          <ul className="w-full flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 flex-1">
            <li className="mb-6">
              <span className="text-white mr-4  text-lg lg:text-heading3-bold font-semibold md:mr-6">
                Las Vegas, NV
              </span>
            </li>
            <li className=" text-white"> Las Vegas, Nevada, 89183</li>
          </ul>
          <ul className="w-full flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 flex-1">
            <li className="mb-6">
              <span className="text-white mr-4 md:mr-6 mb-6 text-lg">
                Community
              </span>
            </li>

            <li className="">
              <Link href="/?scroll=projects">
                <span className="text-white mr-4 md:mr-6 text-sm ">
                  Projects
                </span>
              </Link>
            </li>
            {/* <li className="mt-4">
              <span className="text-white mr-4 md:mr-6 text-sm ">Team</span>
            </li> */}
            <li className="mt-4">
              <Link href="/?scroll=reviews">
                <span className="text-white mr-4 md:mr-6 text-sm ">
                  Reviews
                </span>
              </Link>
            </li>
            <li className="mt-4">
              <Link href="/new-concept?scroll=faq">
                <span className="text-white mr-4 md:mr-6 text-sm ">FAQ</span>
              </Link>
            </li>
          </ul>
          <ul className="w-full flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 flex-1">
            <li className="mb-6">
              <span className="text-white mr-4 text-lg md:mr-6">Company</span>
            </li>
            <li className="">
              <Link href="/about">
                <span className="text-white mr-4 md:mr-6 text-sm ">
                  About Us
                </span>
              </Link>
            </li>
            <li className="mt-4">
              <Link href="/services">
                <span className="text-white mr-4 md:mr-6 text-sm ">
                  Services
                </span>
              </Link>
            </li>
            {/* <li className="mt-4">
              <span className="text-white mr-4 md:mr-6 text-sm ">
                Our Story
              </span>
            </li> */}
            <li className="mt-4">
              {/* <Link href=""> */}
              <span
                onClick={showModal}
                className="text-white mr-4 md:mr-6 text-sm cursor-pointer"
              >
                Contact
              </span>
              {/* </Link> */}
            </li>
            {/* <li className="mt-4">
              <span className="text-white mr-4 md:mr-6 text-sm ">
                Meet our Team
              </span>
            </li> */}
          </ul>
          <ul className="w-full flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 flex-1">
            <li className="mb-6">
              <span className="text-white mr-4 text-lg  md:mr-6 ">
                {isGerman ? "Noch Fragen?" : "Have a Question?"}
              </span>
            </li>
            <li>
              <button
                onClick={showModal}
                className="p-4 text-white tracking-wider border-2 border-primary p-1 grow-on-hover  text-small-medium  md:font-semibold"
              >
                {isGerman ? "Kontaktiere uns" : "Contact Us"}
              </button>
            </li>
            <li className="my-4">
              <Link className="text-white" href="mailto: info@novawork.ch">
                info@novawork.ch
              </Link>
            </li>
            <li className="my-4">
              <Link className="text-white" href="tel:+610-656-3531">
                Phone: +610-656-3531
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-300 sm:text-center">
          © 2023 <a>Novawork</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
