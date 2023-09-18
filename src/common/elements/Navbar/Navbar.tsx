import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ContactUsModal } from "../Modals/ContactUsModal";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

interface IProps {
  scrollToServiceSection?: () => void;
  scrollToAboutSection?: () => void;
}

export default function Navbar({ scrollToServiceSection }: IProps) {
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const onCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <nav className="dark:bg-gray-900 mx-auto w-full">
      {isModalVisible && <ContactUsModal onCloseModal={onCloseModal} />}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 md:py-4 px-8 md:px-10">
        <div className="flex items-center max-h-16 flex-1">
          <Link href="/">
            <Image
              width={200}
              height={112}
              src="/images/logo1.png"
              alt="Novawork Logo"
            />
          </Link>
        </div>
        <button className={`p-2 block md:hidden`} onClick={toggleMobileMenu}>
          <span className="sr-only">Open main menu</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="25px"
            height="25px"
          >
            <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z" />
          </svg>
        </button>
        <div
          className={`${
            mobileMenuOpen
              ? "block bg-white w-full h-full top-0 left-0"
              : "hidden top-12 left-0"
          } w-full md:block md:w-auto flex-1 fixed md:static  ${
            mobileMenuOpen ? "z-50" : "z-0"
          }`}
          id="navbar-default"
        >
          <ul
            className="font-medium flex flex-col py-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0
            dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 z-100 justify-between px-10 md:px-0"
          >
            <div className="flex justify-end md:hidden">
              <button className="text-black" onClick={toggleMobileMenu}>
                CLOSE
              </button>
            </div>
            <li>
              <Link
                key={router.pathname}
                href="/"
                className={`block py-2 pl-3 pr-4 text-black rounded md:bg-transparent text-heading3-bold md:text-base-semibold md:p-0 md:hover:text-primary `}
                aria-current="page"
                onClick={() => router.pathname === "/" && toggleMobileMenu()}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0 md:hover:text-primary text-heading3-bold md:text-base-semibold`}
                onClick={() =>
                  router.pathname === "/services" && toggleMobileMenu()
                }
              >
                Services
              </Link>
            </li>
            {/* <li>
              <Link
                href="/careers"
                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 md:hover:text-primary"
              >
                Careers
              </Link>
            </li> */}
            <li>
              <Link
                href="/about"
                className={`block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0 md:hover:text-primary text-heading3-bold md:text-base-semibold`}
                onClick={() =>
                  router.pathname === "/about" && toggleMobileMenu()
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                onClick={() => {
                  showModal();
                  return toggleMobileMenu();
                }}
                className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0 md:hover:text-primary text-heading3-bold md:text-base-semibold"
              >
                Contact
              </Link>
            </li>
            <li>
              {/* <select
                onChange={handleLocaleChange}
                className="block bg-background p-10 py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 md:hover:text-primary text-heading3-bold md:text-base-semibold"
                value={locale}
              >
                <option value="en">English</option>
                <option value="de">German</option>
              </select> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
