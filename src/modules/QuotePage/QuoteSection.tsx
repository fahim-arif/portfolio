import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gsap from "gsap";
import { useRouter } from "next/router";

const PROJECT_TYPES = [
  "Mobile App",
  "Enterprise Software",
  "General Development",
  "UX or UI Design",
  "Website Design/Development",
  "Other",
];

const QuoteSection = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const t = useTranslations("contactForm");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);

  const validateForm = () => {
    let isValid = true;
    let newErrors = {
      name: "",
      email: "",
    };

    if (!formData.name) {
      isValid = false;
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      isValid = false;
      newErrors.email = "Email is required";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);
      try {
        const response = await fetch("/api/send-quote", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            password: process.env.NEXT_PUBLIC_EMAIL_PASSWORD as string,
            selectedProjects,
          }),
        });

        if (response.ok) {
          console.log("Email sent successfully!");

          toast.success(
            "Your email has been received! Thank you for being with Novawork. We will contact you as soon as poosible.",
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            }
          );

          router.push("/thank-you");
        } else {
          toast.error(
            "Something went wrong. Please try again later or email us directly at info@novawork.io",
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            }
          );
          console.log("Failed to send email");
        }
      } catch (error) {
        console.log("An error occurred:", error);
        toast.error(
          "Something went wrong. Please try again later or email us directly at info@novawork.io",
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleProjectChange = (project: string) => {
    setSelectedProjects((prevProjects) => {
      if (prevProjects.includes(project)) {
        return prevProjects.filter((p) => p !== project);
      } else {
        return [...prevProjects, project];
      }
    });
  };

  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          gsap.killTweensOf(".slide-in-left-quote, .zoom-in-element-quote");

          const tl = gsap.timeline();

          tl.from(".slide-in-left-quote", {
            x: "-300%",
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          });

          tl.from(
            ".zoom-in-element-quote",
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

    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }

    return () => {
      if (quoteRef.current) {
        observer.unobserve(quoteRef.current);
      }
    };
  }, []);

  const loader = (
    <div className="pt-12 relative bg-white">
      <div className="fixed bg-background inset-0 flex flex-col items-center z-[999] justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
        <h2 className="text-heading3-bold md:text-heading2-bold font-bold text-white pt-10">
          Loading...
        </h2>
      </div>
    </div>
  );
  return (
    <>
      {isLoading ? (
        loader
      ) : (
        <div className=" flex flex-col items-center w-full" ref={quoteRef}>
          <div
            style={{
              backgroundImage: "url('/images/hero.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "30vh",
            }}
            className=" h-[20rem] w-full flex justify-center items-center flex-col slide-in-left-quote"
          >
            <h1 className="text-white text-[1.75rem] md:text-[2.5rem] font-bold w-full md:w-[50rem] px-5 md:px-0 text-center zoom-in-element-quote">
              Elevate Your Business with Next-Level Software Solutions
            </h1>
            <p className="text-white text-[1.2rem] font-semibold md:w-[50rem] px-5 md:px-0 w-full text-center mt-12 md:mt-5 zoom-in-element-quote">
              Unlock the potential of your business with our cutting-edge
              software development services. Tailored solutions for unparalleled
              efficiency and growth.
            </p>
          </div>
          <div className="flex mt-10 flex-col xl:flex-row">
            <div className="text-justify w-full md:w-[50rem] xl:w-[30rem] p-8 zoom-in-element-quote">
              <p>
                Every decision matters, every investment is a thoughtful step.
                With Novawork, every penny, every drop of effort you invest
                transforms into a cascade of value, growth, and triumph.
              </p>
              <p className="mt-8 ">
                Bottom line: We're here because we wholeheartedly believe in
                you—the movers, shakers, stargazers envisioning the next big
                phenomenon. Let's team up, ride the waves of triumphs and
                challenges, and craft something extraordinary together.
              </p>
              <div className="flex items-center h-[14rem] mt-[5rem] zoom-in-element-quote">
                <div className="bg-primary h-full w-[1.5rem]"></div>
                <div className="p-8 h-full flex flex-col justify-center">
                  <p className="text-xl font-semibold mb-4 ">
                    "I've always dreamed about running a company that has no
                    full-time IT employees, and with my apps developed by
                    Novawork, we are able to achieve just that."
                  </p>
                  <div className="flex items-center">
                    <div className="flex-grow">
                      <p className="text-lg font-medium">Greg Maxwell</p>
                      <p className="text-gray-600">
                        Owner, Advancing Practitioners
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 h-fit w-full md:w-[40rem] zoom-in-element-quote">
              <h4 className="text-heading4-semibold text-black font-bold">
                Get Your Free Quote
              </h4>
              <p>Fields with * are required.</p>
              <form className="mt-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="mt-2 mb-6 max-w-xs lg:mr-5">
                    <label className="font-semibold">
                      Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="p-2 w-full mt-2 mb-2 border border-gray-400 rounded "
                      placeholder="Name"
                    />
                    {errors.name && (
                      <p className="text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div className="mt-2 mb-6 max-w-xs">
                    <label className="font-semibold">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="p-2 w-full mt-2 mb-2 border border-gray-400 rounded"
                      placeholder="Email"
                    />
                    {errors.email && (
                      <p className="text-red-500">{errors.email}</p>
                    )}
                  </div>
                  <div className=" max-w-xs lg:mr-5">
                    <label className="font-semibold">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="p-2 w-full mt-2 mb-2 border border-gray-400 rounded"
                      placeholder="Phone"
                    />
                  </div>
                  <div className=" max-w-xs ">
                    <label className="font-semibold">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="p-2 w-full mt-2 mb-2 border border-gray-400 rounded"
                      placeholder="Company"
                    />
                  </div>
                </div>
                <div className="my-8">
                  <h4 className="text-heading6-semibold text-black mb-4">
                    {t("form.title2")}
                  </h4>
                </div>
                {/* Checkbox start */}
                <div className="my-8">
                  {PROJECT_TYPES.map((projectType) => (
                    <div key={projectType} className="mb-8 inline-block mr-4">
                      <input
                        type="checkbox"
                        id={projectType}
                        className="hidden"
                        value={projectType}
                        checked={selectedProjects.includes(projectType)}
                        onChange={() => handleProjectChange(projectType)}
                      />
                      <label
                        htmlFor={projectType}
                        className={`text-white p-4 rounded-3xl px-4 text-small-semibold md:text-base-bold tracking-wider my-4 
                    grow-on-hover cursor-pointer transition-all duration-300 ${
                      selectedProjects.includes(projectType)
                        ? "bg-primary text-gray-950"
                        : "bg-gray-950"
                    }`}
                      >
                        {projectType}
                      </label>
                    </div>
                  ))}
                </div>
                {/* Checkbox end */}
                {/* Message field */}
                <h4 className="text-heading6-semibold text-black mb-2">
                  {t("form.title3")}
                </h4>

                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="p-2 w-full mb-2 border border-gray-400 rounded max-w-xl "
                  placeholder="Your message"
                  rows={4}
                />
                <div>
                  <button className="text-white bg-primary  rounded-lg text-base-bold tracking-wider border-2 border-primary p-4 px-8 my-4 grow-on-hover">
                    {t("form.btnText")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuoteSection;
