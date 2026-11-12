import Link from "next/link";
import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { CONTACT } from "@/common/constants/contact";
import { PROFILE } from "@/content/profile";

const columnClass =
  "w-full flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 flex-1";
const linkClass =
  "text-white text-sm hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background">
      <div className="w-full max-w-screen-xl mx-auto p-8 lg:p-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <ul className={columnClass}>
            <li className="mb-6">
              <span className="text-white text-lg lg:text-heading3-bold font-semibold">
                {PROFILE.name}
              </span>
            </li>
            <li className="text-white">{PROFILE.title}</li>
            <li className="text-gray-300 mt-2">
              {PROFILE.location} · {PROFILE.availability}
            </li>
          </ul>
          <ul className={columnClass}>
            <li className="mb-6">
              <span className="text-white text-lg">On this site</span>
            </li>
            {[
              ["/#about", "About"],
              ["/#projects", "Projects"],
              ["/#experience", "Experience"],
              ["/#contact", "Contact"],
            ].map(([href, label], i) => (
              <li key={href} className={i ? "mt-4" : ""}>
                <Link href={href} className={linkClass}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className={columnClass}>
            <li className="mb-6">
              <span className="text-white text-lg">Get in touch</span>
            </li>
            <li>
              <a className={linkClass} href={CONTACT.mailto}>
                {CONTACT.email}
              </a>
            </li>
            <li className="mt-4">
              <a className={linkClass} href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li className="mt-4">
              <a className={linkClass} href={CONTACT.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li className="mt-4">
              <a className={linkClass} href={CONTACT.resume} download>
                Resume (PDF)
              </a>
            </li>
          </ul>
        </div>

        <hr className="border-gray-700 sm:mx-auto mt-8" />
        <div className="text-white w-full flex justify-center my-7">
          <div className="flex gap-10">
            <a
              href={CONTACT.linkedin}
              className="hover:text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin size={24} aria-hidden="true" />
            </a>
            <a
              href={CONTACT.github}
              className="hover:text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <FaGithub size={24} aria-hidden="true" />
            </a>
            <a
              href={CONTACT.mailto}
              className="hover:text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={`Email ${CONTACT.email}`}
            >
              <FaEnvelope size={24} aria-hidden="true" />
            </a>
          </div>
        </div>
        <p className="block text-sm text-gray-300 sm:text-center">
          © <span suppressHydrationWarning>{year}</span> {PROFILE.name}
        </p>
      </div>
    </footer>
  );
}
