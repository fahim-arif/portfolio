import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { CONTACT } from "@/common/constants/contact";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

const linkClass =
  "block py-2 pl-3 pr-4 text-black rounded md:bg-transparent text-heading3-bold md:text-base-semibold md:p-0 md:hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((open) => !open);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const tl = gsap.timeline();
    gsap.killTweensOf(".navbar-slide-animation");
    tl.fromTo(
      ".navbar-slide-animation",
      { x: "200%", opacity: 0 },
      { duration: 1, x: "0%", opacity: 1, ease: "power2.out" }
    );
    tl.fromTo(
      ".navbar-slide-animation li",
      { x: "200%", opacity: 0 },
      { duration: 0.5, x: "0%", opacity: 1, stagger: 0.2, ease: "power2.out" }
    );
    return () => {
      tl.kill();
    };
  }, [mobileMenuOpen]);

  return (
    <nav aria-label="Main" className="mx-auto w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 md:py-4 px-8 md:px-10">
        <div className="flex items-center max-h-16 flex-1 z-10">
          <Link
            href="/"
            className="rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Image
              width={50}
              height={50}
              src="/images/1745106456527.jpeg"
              alt="Fahim Arif, home"
              style={{ borderRadius: "50%" }}
            />
          </Link>
        </div>
        <button
          type="button"
          className="p-2 block md:hidden z-10"
          onClick={toggleMobileMenu}
          aria-controls="navbar-default"
          aria-expanded={mobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="25px"
            height="25px"
            aria-hidden="true"
          >
            <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z" />
          </svg>
        </button>
        <div
          className={`${
            mobileMenuOpen
              ? "block bg-white w-full h-full top-0 left-0"
              : "hidden top-12 left-0"
          } w-full md:block md:w-auto flex-1 fixed md:static ${
            mobileMenuOpen ? "z-50 navbar-slide-animation" : "z-10"
          }`}
          id="navbar-default"
        >
          {mobileMenuOpen && (
            <div className="flex justify-end md:hidden px-10 pt-4">
              <button
                type="button"
                className="text-black"
                onClick={closeMobileMenu}
              >
                CLOSE
              </button>
            </div>
          )}
          <ul className="font-medium flex flex-col py-4 md:p-0 mt-4 rounded-lg md:flex-row md:items-center md:space-x-8 md:mt-0 md:border-0 z-100 justify-end px-10 md:px-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass} onClick={closeMobileMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-4 md:mt-0">
              <a
                href={CONTACT.resume}
                download
                className="inline-block bg-primary text-white rounded-full py-4 px-6 whitespace-nowrap text-heading3-bold md:text-base-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
