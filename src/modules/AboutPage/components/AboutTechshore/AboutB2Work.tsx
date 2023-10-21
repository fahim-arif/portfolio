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
        <div className="flex flex-col lg:flex-row justify-center w-full items-center px-10 mb-20">
          <h1 className="text-heading3-bold lg:mr-20  slide-in-left">
            {title}
          </h1>
          <div className="w-full md:w-[450px] lg:w-[652px]  slide-in-right relative lg:my-0 my-10">
            <Image
              priority
              src="/images/1.jpg"
              alt="incubator"
              width={6558} // Pixel Width from metadata
              height={4304} // Pixel Height from metadata
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>
        <p className="lg:w-[60rem] w-full px-10 lg:px-0 text-[1.1rem] text-justify zoom-in-element-about">
          At Novawork, we don't merely see ourselves as another IT company.{" "}
          <strong>We envision being your ultimate digital partner</strong> –
          dedicated to bringing your business vision to life.
          <br />
          <br />
          We specialize in software development, digital marketing, and
          automation, offering a comprehensive suite of services tailored to
          meet your unique business needs. While our team boasts experts adept
          in the latest technologies and strategies, what truly sets us apart is
          our commitment to understanding and aligning with your objectives.
          Together, we collaborate to design bespoke solutions that reflect your
          brand ethos and goals.
          <br />
          <br />
          In the realm of software development, we emphasize not just on
          top-tier coding, but also on intuitive design. By creating digital
          spaces that captivate visually while ensuring user-friendliness, we
          enhance your audience's online journey. When it comes to digital
          marketing, we bridge the gap between you and your audience, leveraging
          everything from SEO to email marketing. But our strategies aren't
          generic. Instead, they are meticulously crafted, keeping your brand
          and business objectives at the core.
          <br />
          <br />
          For enterprises aiming to enhance efficiency, our automation services
          stand as a beacon. With our sophisticated scripts and bots, we can
          amplify your productivity, ensuring that you remain at the forefront
          of your industry.
          <br />
          <br />
          But above all, our mission at Novawork is clear:{" "}
          <em>
            To be more than a service provider. To be a growth partner.
          </em>{" "}
          Our pledge goes beyond the provision of top-tier services; we ensure
          unwavering commitment and satisfaction at every juncture. Together,
          let's scale new heights and redefine the boundaries of what's
          possible.
        </p>
      </section>
      <div className="lg:w-[60rem] w-full px-10 lg:px-0 text-[1.1rem] text-justify ">
        <section ref={founderRef}>
          <h1 className="text-heading3-bold mb-5 zoom-in-element-founder">
            Founder Story
          </h1>
          <p className="zoom-in-element-founder">
            The inception of Novawork can be traced back to a coffee shop in San
            Francisco where Lance Eschliman, an innovative UX designer, met
            Fahim Arif, a tech wizard with a knack for decoding complex business
            challenges.
            <br />
            <br />
            Both were individually making waves in their respective fields, but
            they felt something was missing. The digital landscape was evolving
            rapidly, but businesses were struggling to find comprehensive IT
            solutions that seamlessly integrated cutting-edge technology with a
            user-centric design approach. They saw startups grappling to find
            affordable yet specialized services and enterprises seeking
            out-of-the-box strategies to stay ahead of their competitors.
            <br />
            <br />
            Lance's passion for delivering stellar user experiences and Fahim's
            proficiency in the latest technologies sparked an idea: What if they
            joined forces to create a one-stop digital partner for businesses?
            The idea was ambitious, but their shared vision, complemented by
            their diverse expertise, became the bedrock for Novawork.
            <br />
            <br />
            Their journey from conceptualization to realization wasn't just
            about forming a company; it was about bridging the gap between
            technology and its users. They sought to empower businesses with
            solutions that didn't just work but resonated, engaged, and
            inspired.
            <br />
            <br />
            Thus, Novawork was born, embodying the duo's mission to
            revolutionize the IT sector.
          </p>
        </section>
        <section ref={cultureRef}>
          <h1 className="text-heading3-bold  mt-10 mb-5 zoom-in-element-culture">
            Culture
          </h1>
          <div className="zoom-in-element-culture">
            At Novawork, our culture is much more than just a set of values on
            paper; it's the heartbeat that drives every decision, project, and
            interaction.
            <ul>
              <li>
                <strong>Innovation:</strong> As tech enthusiasts, we're driven
                by the possibility of 'what's next'. We continuously push
                boundaries, explore uncharted territories, and find unique
                solutions to familiar challenges. Our commitment is to keep our
                clients at the forefront of their industry.
              </li>
              <li>
                <strong>Integrity:</strong> Trust is the cornerstone of our
                relationships. Whether it's with our clients, partners, or
                within our team, we uphold transparency, honesty, and ethical
                practices above all else.
              </li>
              <li>
                <strong>Inclusivity:</strong> Diversity isn't just about ticking
                boxes for us; it's about embracing a multitude of perspectives,
                ideas, and experiences. We believe that the best solutions arise
                from collaboration and collective insight.
              </li>
            </ul>
            Our workspace is vibrant, echoing with ideas, discussions, and
            often, spirited debates. We're a family of thinkers, doers, and
            dreamers, united by a shared vision. At Novawork, every individual
            is valued, every idea is cherished, and every day is a new
            opportunity to make a difference.
          </div>
        </section>
      </div>
      <section
        ref={ceoRef}
        className="w-4/5 my-20 mb-28 flex flex-col items-center"
      >
        <h1 className="text-heading2-bold mt-10 mb-5 zoom-in-element-ceo">
          About Our Founders
        </h1>
        <div className="flex  lg:flex-row flex-col justify-center  lg:justify-around w-full py-10">
          <div className="flex flex-col items-center lg:w-2/5 w-full">
            <Image
              priority
              src="/images/lance.jpeg"
              alt="incubator"
              width={300}
              height={600}
              className="rounded-3xl zoom-in-element-ceo"
            />
            <h2 className="text-heading4-semibold pt-4 text-gray-700 zoom-in-element-ceo">
              Lance Eschliman
            </h2>
            <i className="zoom-in-element-ceo">CEO, Co-Founder</i>
            <div className=" text-gray-700 w-full flex justify-center my-7 ">
              <div className="flex w-1/3 justify-evenly">
                <Link
                  href="https://twitter.com/eschliman"
                  className="mr-4 hover:text-gray-500 zoom-in-element-ceo"
                  target="_blank"
                >
                  <FaTwitter size={24} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/lance1977/"
                  className="mr-4 hover:text-gray-500 zoom-in-element-ceo"
                  target="_blank"
                >
                  <FaLinkedin size={24} />
                </Link>
              </div>
            </div>
            <p className="text-[1.1rem] text-justify zoom-in-element-ceo">
              Lance Eschliman isn't just a name in the IT sector; he's a
              testament to what relentless passion and unyielding commitment to
              user experience can achieve. His stellar journey as a Senior UX
              Designer at Vertis equipped him with a unique blend of design
              ethos and strategic thinking. A visionary at heart, Lance sees
              beyond the immediate. He visualizes a digital ecosystem where
              usability isn't just an aspect but the core of every solution. At
              Novawork, he's not just setting milestones; he's crafting a
              legacy, ensuring every digital product and service not only meets
              but transcends client expectations.
            </p>
          </div>
          <div className="flex flex-col items-center lg:w-2/5 w-full mt-10 lg:mt-0">
            <Image
              priority
              src="/images/fahim.jpg"
              alt="incubator"
              width={300}
              height={600}
              className="rounded-3xl zoom-in-element-ceo"
            />
            <h2 className="text-heading4-semibold pt-4 text-gray-700 zoom-in-element-ceo">
              Fahim Arif
            </h2>
            <i className="zoom-in-element-ceo">CEO, Co-Founder</i>
            <div className=" text-gray-700 w-full flex justify-evenly my-7 ">
              <div className="flex w-1/3 justify-between">
                <Link
                  href="https://twitter.com/fahim_arif4447"
                  className="mr-4 hover:text-gray-500 zoom-in-element-ceo"
                  target="_blank"
                >
                  <FaTwitter size={24} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/fahim-arif/"
                  className="mr-4 hover:text-gray-500 zoom-in-element-ceo"
                  target="_blank"
                >
                  <FaLinkedin size={24} />
                </Link>
              </div>
            </div>
            <p className="text-[1.1rem] text-justify zoom-in-element-ceo">
              In the constantly evolving tech world, Fahim Arif stands as a
              beacon of innovation and technical proficiency. With a robust
              background as a Senior Developer at Freecast Inc., Fahim has
              hands-on experience in transforming abstract ideas into concrete
              solutions that drive business growth. He believes in the power of
              technology to solve the most intricate business challenges. As
              Novawork's CTO, Fahim doesn't just oversee operations; he's at the
              frontline, ensuring the company stays ahead in the tech race,
              offering clients nothing but the best, most advanced IT solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutB2Work;
