import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PROJECT_TYPES = [
  "Mobile App",
  "Enterprise Software",
  "General Development",
  "UX or UI Design",
  "Website Design/Development",
  "Other",
];

interface IProps {
  onCloseModal: () => void;
}
export const ContactUsModal = ({ onCloseModal }: IProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const t = useTranslations("contactForm");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);

  const validateForm = () => {
    let isValid = true;
    let newErrors = {
      firstName: "",
      lastName: "",
      email: "",
    };

    if (!formData.firstName) {
      isValid = false;
      newErrors.firstName = "First Name is required";
    }

    if (!formData.lastName) {
      isValid = false;
      newErrors.lastName = "Last Name is required";
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

    setIsLoading(true);

    if (validateForm()) {
      // Call api endpoint here:
      try {
        const response = await fetch("/api/sendemail", {
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
        onCloseModal();
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

  return (
    <>
      {isLoading ? (
        <div className="pt-12 relative bg-white">
          <div
            style={{
              zIndex: 999,
            }}
            className="fixed z-100 bg-background inset-0 flex flex-col items-center z-100 justify-center"
          >
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
            <h2 className="text-heading3-bold md:text-heading2-bold font-bold text-white pt-10">
              Loading...
            </h2>
          </div>
        </div>
      ) : (
        <div
          className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center pt-20 lg:pt-8"
          onClick={onCloseModal} // Close modal when clicking outside
          style={{
            zIndex: 100,
          }}
        >
          <div
            className="overflow-y-auto max-h-[calc(100vh-1rem)] max-w-7xl w-11/12 flex flex-col lg:flex-row lg:max-h-full bg-gray-950"
            onClick={(e) => e.stopPropagation()} // Prevent event from bubbling up to the outer div
          >
            <div className="bg-gray-950 px-8 p-8">
              <p
                onClick={onCloseModal}
                className="text-right text-base-semibold tracking-wider text-gray-400 cursor-pointer lg:hidden"
              >
                {t("form.closeBtnText")}
              </p>
              <h2 className="text-heading3-bold md:text-heading2-bold text-white mb-4">
                {t("title")}
              </h2>
              <p className="text-subtle-large text-gray-300">
                {t("description")}
              </p>
              <p className="text-small-medium text-gray-600 my-4">OUR OFFICE</p>
              <h3 className="text-heading3-bold font-semibold text-white mb-4">
                Las Vegas, Nevada
              </h3>
              <p className="text-white my-4"> Las Vegas, Nevada</p>
              <div className="flex pb-4">
                <Link className="text-white" href="mailto: info@novawork.io">
                  info@novawork.io {" // "}
                </Link>
                <Link className="text-white" href="tel:+610-656-3531">
                  +610-656-3531
                </Link>
              </div>
            </div>
            <div className="bg-background px-8 p-8 h-fit">
              <p
                onClick={onCloseModal}
                className="text-right text-base-semibold tracking-wider text-gray-400 cursor-pointer hidden lg:block"
              >
                {t("form.closeBtnText")}
              </p>
              <h4 className="text-heading4-semibold text-white mb-4">
                {t("form.title1")}
              </h4>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="my-2 max-w-xs lg:mr-2">
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="p-2 w-full mb-2 border rounded"
                      placeholder="First Name"
                    />
                    {errors.firstName && (
                      <p className="text-red-500">{errors.firstName}</p>
                    )}
                  </div>
                  <div className="my-2 max-w-xs lg:ml-2">
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="p-2 w-full mb-2 border rounded"
                      placeholder="Last Name"
                    />
                    {errors.lastName && (
                      <p className="text-red-500">{errors.lastName}</p>
                    )}
                  </div>
                  <div className="my-2 max-w-xs lg:mr-2">
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="p-2 w-full mb-2 border rounded"
                      placeholder="Email"
                    />
                    {errors.email && (
                      <p className="text-red-500">{errors.email}</p>
                    )}
                  </div>
                  <div className="my-2 max-w-xs lg:ml-2">
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="p-2 w-full mb-2 border rounded"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="my-2 max-w-xs lg:mr-2">
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="p-2 w-full mb-2 border rounded"
                      placeholder="Company"
                    />
                  </div>
                </div>
                <div className="my-8">
                  <h4 className="text-heading4-semibold text-white mb-4">
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
                <h4 className="text-heading4-semibold text-white mb-8">
                  {t("form.title3")}
                </h4>
                <p className="text-white mt-4"> {t("form.messageLabel")}</p>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="p-2 w-full mb-2 border rounded max-w-xl"
                  placeholder={t("form.messagePlaceholder")}
                  rows={4}
                />
                <div>
                  <button className="text-white text-base-bold tracking-wider border-2 border-primary p-4 px-8 my-4 grow-on-hover">
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
