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
  const founderRef = useRef(null);
  const cultureRef = useRef(null);
  const ceoRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          gsap.killTweensOf(
            ".slide-in-left,.slide-in-right, .zoom-in-element-about"
          );

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
            ".zoom-in-element-about",
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

  useEffect(
    () => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            gsap.killTweensOf(".zoom-in-element-founder");

            const tl = gsap.timeline();

            tl.from(".zoom-in-element-founder", {
              scale: 0.5,
              opacity: 0,
              duration: 1,
              ease: "power2.out",
              stagger: 0.5,
            });
          }
        },
        {
          threshold: 0.1,
        }
      );

      if (founderRef.current) {
        observer.observe(founderRef.current);
      }

      return () => {
        if (founderRef.current) {
          observer.unobserve(founderRef.current);
        }
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(
    () => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            gsap.killTweensOf(".zoom-in-element-culture");

            const tl = gsap.timeline();

            tl.from(".zoom-in-element-culture", {
              scale: 0.5,
              opacity: 0,
              duration: 1,
              ease: "power2.out",
              stagger: 0.5,
            });
          }
        },
        {
          threshold: 0.1,
        }
      );

      if (cultureRef.current) {
        observer.observe(cultureRef.current);
      }

      return () => {
        if (cultureRef.current) {
          observer.unobserve(cultureRef.current);
        }
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(
    () => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            gsap.killTweensOf(".zoom-in-element-ceo");

            const tl = gsap.timeline();

            tl.from(".zoom-in-element-ceo", {
              scale: 0.5,
              opacity: 0,
              duration: 1,
              ease: "power2.out",
              stagger: 0.25,
            });
          }
        },
        {
          threshold: 0.1,
        }
      );

      if (ceoRef.current) {
        observer.observe(ceoRef.current);
      }

      return () => {
        if (ceoRef.current) {
          observer.unobserve(ceoRef.current);
        }
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div className="flex flex-col justify-center items-center bg-white">
      <section
        ref={aboutRef}
        className="flex flex-col justify-center items-center w-full pt-20 pb-10"
      >
        <div className="flex flex-col lg:flex-row justify-center items-center px-10">
          <h1 className="text-heading2-bold lg:mr-20  slide-in-left">
            {title}
          </h1>
          <div className="w-full md:w-[450px] lg:w-[600px] h-[200px] md:h-[450px] lg:h-[600px]  slide-in-right relative lg:my-0 my-10">
            <Image
              priority
              src="/images/about-us1.jpg"
              alt="incubator"
              fill
              className="rounded-3xl  "
            />
          </div>
        </div>
        <p className="lg:w-[60rem] w-full px-10 lg:px-0 text-[1.1rem] text-justify zoom-in-element-about">
          {description}
        </p>
      </section>
      <div className="lg:w-[60rem] w-full px-10 lg:px-0 text-[1.1rem] text-justify ">
        <section ref={founderRef}>
          <h1 className="text-heading1-semibold mb-5 zoom-in-element-founder">
            Founder Story
          </h1>
          <p className="zoom-in-element-founder">
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
        <section ref={cultureRef}>
          <h1 className="text-heading1-semibold mt-10 mb-5 zoom-in-element-culture">
            Culture
          </h1>
          <p className="zoom-in-element-culture">
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
      <section ref={ceoRef} className="w-4/5  flex flex-col items-center">
        <h1 className="text-heading2-bold mt-10 mb-5 zoom-in-element-ceo">
          About Our Ceo
        </h1>
        <div className="flex  lg:flex-row flex-col justify-center  lg:justify-around w-full py-10">
          <div className="flex flex-col items-center lg:w-2/5 w-full">
            <Image
              priority
              src="/images/avatar.png"
              alt="incubator"
              width={300}
              height={600}
              className="rounded-3xl zoom-in-element-ceo"
            />
            <h2 className="text-heading4-bold text-gray-700 underline zoom-in-element-ceo">
              ABC DEF
            </h2>
            <i className="zoom-in-element-ceo">CEO, Co-Founder</i>
            <div className=" text-gray-700 w-full flex justify-center my-7 ">
              <div className="flex w-1/3 justify-between">
                <Link
                  href="https://web.facebook.com/novaworkio"
                  className="mr-4 hover:text-gray-500 zoom-in-element-ceo"
                  target="_blank"
                >
                  <FaFacebook size={24} />
                </Link>
                <Link
                  href="https://twitter.com/Novawork1o"
                  className="mr-4 hover:text-gray-500 zoom-in-element-ceo"
                  target="_blank"
                >
                  <FaTwitter size={24} />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/novawork-io/"
                  className="mr-4 hover:text-gray-500 zoom-in-element-ceo"
                  target="_blank"
                >
                  <FaLinkedin size={24} />
                </Link>
              </div>
            </div>
            <p className="text-[1.1rem] text-justify zoom-in-element-ceo">
              Casey lets Rand think he runs most of the show at SparkToro. He
              was formerly at Moz, Wistia, HubSpot working on Inbound.org, and
              most recently at Ookla. When not working, he enjoys spending time
              with his wife and two daughters hiking, camping, and doing
              anything outdoors.
            </p>
          </div>
          <div className="flex flex-col items-center lg:w-2/5 w-full mt-10 lg:mt-0">
            <Image
              priority
              src="/images/avatar.png"
              alt="incubator"
              width={300}
              height={600}
              className="rounded-3xl zoom-in-element-ceo"
            />
            <h2 className="text-heading4-bold text-gray-700 underline zoom-in-element-ceo">
              ABC DEF
            </h2>
            <i className="zoom-in-element-ceo">CEO, Co-Founder</i>
            <div className=" text-gray-700 w-full flex justify-center my-7 ">
              <div className="flex w-1/3 justify-between">
                <Link
                  href="https://web.facebook.com/novaworkio"
                  className="mr-4 hover:text-gray-500 zoom-in-element-ceo"
                  target="_blank"
                >
                  <FaFacebook size={24} />
                </Link>
                <Link
                  href="https://twitter.com/Novawork1o"
                  className="mr-4 hover:text-gray-500 zoom-in-element-ceo"
                  target="_blank"
                >
                  <FaTwitter size={24} />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/novawork-io/"
                  className="mr-4 hover:text-gray-500 zoom-in-element-ceo"
                  target="_blank"
                >
                  <FaLinkedin size={24} />
                </Link>
              </div>
            </div>
            <p className="text-[1.1rem] text-justify zoom-in-element-ceo">
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
