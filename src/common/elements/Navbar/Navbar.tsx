import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ContactUsModal } from "../Modals/ContactUsModal";
import { useRouter } from "next/router";
import gsap from "gsap";

export default function Navbar() {
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

  useEffect(() => {
    const tl = gsap.timeline();
    gsap.killTweensOf(".navbar-slide-animation");
    tl.fromTo(
      ".navbar-slide-animation",
      {
        x: "200%",
        opacity: 0,
      },
      {
        duration: 1,
        x: "0%",
        opacity: 1,
        ease: "power2.out",
      }
    );
    tl.fromTo(
      ".navbar-slide-animation li",
      {
        x: "200%",
        opacity: 0,
      },
      {
        duration: 0.5,
        x: "0%",
        opacity: 1,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
  }, [mobileMenuOpen]);

  const projects = [
    {
      id: 1,
      name: "Twomatches B2B Business",
    },
    {
      id: 2,
      name: "FreeCast",
    },
    {
      id: 3,
      name: "Shoutt Freelancer Platform",
    },
    {
      id: 4,
      name: "GetDone Maintenance Management",
    },
    {
      id: 5,
      name: "OwnProp - The Future of Fractional Investing",
    },
    {
      id: 6,
      name: "Real Estate Data Scraper",
    },
  ];

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownCloseTimeoutId, setDropdownCloseTimeoutId] =
    useState<NodeJS.Timeout | null>(null);

  const openDropdown = () => {
    if (dropdownCloseTimeoutId) {
      clearTimeout(dropdownCloseTimeoutId);
      setDropdownCloseTimeoutId(null);
    }
    setDropdownOpen(true);
  };

  const closeDropdownWithDelay = () => {
    const timeoutId = setTimeout(() => {
      setDropdownOpen(false);
    }, 300); // 300 milliseconds delay
    setDropdownCloseTimeoutId(timeoutId);
  };

  return (
    <nav className="dark:bg-gray-900 mx-auto w-full">
      {isModalVisible && <ContactUsModal onCloseModal={onCloseModal} />}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 md:py-4 px-8 md:px-10">
        <div className="flex items-center max-h-16 flex-1 z-10">
          <Link href="/">
            <Image
              width={200}
              height={112}
              src="/images/logo1.png"
              alt="Novawork Logo"
            />
          </Link>
        </div>
        <button
          className={`p-2 block md:hidden z-10`}
          onClick={toggleMobileMenu}
        >
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
            mobileMenuOpen ? "z-50 navbar-slide-animation" : "z-10"
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
            <li
              className="relative group cursor-pointer"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdownWithDelay}
            >
              <span className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0 md:hover:text-primary text-heading3-bold md:text-base-semibold inline-flex items-center">
                Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width="16px"
                  height="16px"
                  className="ml-2"
                >
                  <path d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </span>
              {isDropdownOpen && (
                <ul
                  className="absolute p-3 left-1/2 -translate-x-[5rem] shadow-2xl mt-2 rounded-md bg-gray-50"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdownWithDelay}
                >
                  {projects.map((project) => (
                    <Link key={project.id} href={`/project/${project.id}`}>
                      <li className="w-[21rem] px-2 py-2 rounded-lg overflow-hidden md:hover:text-primary">
                        {project.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
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
          </ul>
        </div>
      </div>
    </nav>
  );
}
