import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

interface IProps {
  title: string;
  description: string;
}

const AboutB2Work = ({ title, description }: IProps) => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          gsap.killTweensOf(".slide-in-left,.slide-in-right, .zoom-in-element");

          const tl = gsap.timeline();

          tl.from(".slide-in-left", {
            x: "-300%",
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          });

          tl.from(
            ".slide-in-right",
            {
              x: "300%",
              opacity: 0,
              duration: 1,
              ease: "power2.out",
            },
            "-=0.5"
          );

          tl.from(
            ".zoom-in-element",
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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);
  return (
    <div
      ref={aboutRef}
      className="flex flex-col justify-center items-center bg-white px-60 "
    >
      <section className="flex justify-center items-center w-full py-20">
        <h1 className="text-heading2-bold mr-20 slide-in-left">{title}</h1>
        <Image
          priority
          src="/images/about-us1.jpg"
          alt="incubator"
          width={600}
          height={600}
          className="rounded-3xl slide-in-right"
        />
      </section>
      <div className="px-64 text-[1.1rem]">
        <section>{description}</section>

        <section>
          <h1 className="text-heading1-semibold mt-10 mb-5">Founder Story</h1>
          <p>
            More than two decades ago, Ben Chestnut and Dan Kurzius started a
            web design agency called the Rocket Science Group. Their focus was
            on big, corporate clients, but on the side, they created a
            delightful email marketing service for small businesses. Mailchimp
            was designed as an alternative to the oversized, expensive email
            software of the early 2000s. Founded in Atlanta in 2001, it offered
            small business owners access to many of the same digital marketing
            advantages that their much larger competitors enjoyed, powering
            their success and enabling them to grow. In the years that followed,
            Mailchimp continued to deliver results for budding entrepreneurs.
            But just as those original customers continued to grow, so did
            Mailchimp, evolving its product offerings to serve companies and
            marketing teams of all sizes and skill levels. In 2021, Mailchimp
            was acquired by Intuit, a company with a long track record of
            driving small business success and solving customer problems. Today,
            we continue to empower the underdog and strive to be the business
            partner we wish we had way back in the beginning.
          </p>
        </section>
        <section>
          <h1 className="text-heading1-semibold mt-10 mb-5">Culture</h1>
          <p>
            Intuit Mailchimp strives to create a culture that empowers a humble,
            creative, and independent workforce. We are passionate about our
            small business customers and believe that collaboration and
            creativity are powerful tools to help them make their dreams a
            reality.
            <br />
            <br />
            We love how each new hire adds to our culture. And, we’re hiring.
            <br />
            <br />
            We believe that what makes us different makes us stronger. Building
            a more diverse, inclusive, and equitable organization is good for
            our teams, our customers, and our community. We empower each other
            to bring unique perspectives and experiences to work, and we
            continually seek new ways to do so.
          </p>
        </section>
      </div>
      <section className="w-4/5 h-[50rem]  flex flex-col items-center">
        <h1 className="text-heading2-bold mt-10 mb-5 ">About Our Ceo</h1>
        <div className="flex justify-around w-full py-10">
          <div className="flex flex-col items-center w-2/5">
            <Image
              priority
              src="/images/avatar.png"
              alt="incubator"
              width={300}
              height={600}
              className="rounded-3xl"
            />
            <h2 className="text-heading4-bold text-gray-700 underline">
              ABC DEF
            </h2>
            <i>CEO, Co-Founder</i>
            <div className=" text-gray-700 w-full flex justify-center my-7 ">
              <div className="flex w-1/3 justify-between">
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
              </div>
            </div>
            <p className="text-[1.1rem] text-justify">
              Casey lets Rand think he runs most of the show at SparkToro. He
              was formerly at Moz, Wistia, HubSpot working on Inbound.org, and
              most recently at Ookla. When not working, he enjoys spending time
              with his wife and two daughters hiking, camping, and doing
              anything outdoors.
            </p>
          </div>
          <div className="flex flex-col items-center w-2/5">
            <Image
              priority
              src="/images/avatar.png"
              alt="incubator"
              width={300}
              height={600}
              className="rounded-3xl"
            />
            <h2 className="text-heading4-bold text-gray-700 underline">
              ABC DEF
            </h2>
            <i>CEO, Co-Founder</i>
            <div className=" text-gray-700 w-full flex justify-center my-7 ">
              <div className="flex w-1/3 justify-between">
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
              </div>
            </div>
            <p className="text-[1.1rem] text-justify">
              Casey lets Rand think he runs most of the show at SparkToro. He
              was formerly at Moz, Wistia, HubSpot working on Inbound.org, and
              most recently at Ookla. When not working, he enjoys spending time
              with his wife and two daughters hiking, camping, and doing
              anything outdoors.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutB2Work;
