import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import gsap from "gsap";

const ThankYouSection = () => {
  const thankYouRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          gsap.killTweensOf(".slide-in-left-thank, .zoom-in-element-thank");

          const tl = gsap.timeline();

          tl.from(".slide-in-left-thank", {
            x: "-300%",
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          });

          tl.from(
            ".zoom-in-element-thank",
            {
              scale: 0.5,
              opacity: 0,
              duration: 1,
              ease: "power2.out",
              stagger: 0.5,
            },
            "-=0.5"
          );
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (thankYouRef.current) {
      observer.observe(thankYouRef.current);
    }

    return () => {
      if (thankYouRef.current) {
        observer.unobserve(thankYouRef.current);
      }
    };
  }, []);
  return (
    <div ref={thankYouRef} className=" flex flex-col items-center w-full">
      <div
        style={{
          backgroundImage: "url('/images/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[24rem] w-full flex justify-center items-center flex-col slide-in-left-thank"
      >
        <h1 className="text-white text-[2.5rem] font-bold w-full md:w-[50rem] text-center zoom-in-element-thank">
          Thank You!
        </h1>
        <p className="text-white text-[1.2rem] font-semibold w-full md:w-[50rem] px-5 md:px-0 mt-5 text-center zoom-in-element-thank">
          We Appreciate Your Trust in Us. Your Journey with Novawork Has Just
          Begun! Someone from our team will be reaching out to you soon.
        </p>
      </div>

      <div className="bg-white p-6 mx-auto w-full max-w-2xl rounded-lg shadow-md zoom-in-element-thank">
        <p className="text-[1.2rem] font-medium mb-4">
          Your <span className="font-bold">Enterprise Software</span> request
          has been received loud and clear. Our team is already rolling up their
          sleeves to ensure we exceed your expectations. Expect a reply from us
          within a week to discuss your requirements.
        </p>
        <p className="text-[1.2rem] font-medium">
          While you wait, why not explore more about our services?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Learn More
          </a>
          . Or follow us on social media.
        </p>
      </div>

      <div className=" text-black flex justify-center my-7 w-full md:w-[50rem] px-10 md:px-0 zoom-in-element-thank">
        <div className="flex w-full sm:w-2/3 md:w-1/3  justify-between">
          <Link
            href="https://web.facebook.com/novaworkio"
            className="mr-4 hover:text-gray-500"
            target="_blank"
          >
            <FaFacebook size={24} />
          </Link>
          <Link
            href="https://twitter.com/Novawork1o"
            className="mr-4 hover:text-gray-500"
            target="_blank"
          >
            <FaTwitter size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/company/novawork-io/"
            className="mr-4 hover:text-gray-500"
            target="_blank"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link
            href="https://www.instagram.com/novawork.io/"
            className="hover:text-gray-500"
            target="_blank"
          >
            <FaInstagram size={24} />
          </Link>
          <Link
            href="mailto:info@novawork.io"
            className="hover:text-gray-500"
            target="_blank"
          >
            <FaEnvelope size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouSection;
