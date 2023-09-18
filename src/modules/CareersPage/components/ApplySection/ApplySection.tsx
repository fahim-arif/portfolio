import React, { useState } from "react";
import validator from "validator";

interface FormValues {
  fullName: "";
  email: "";
  position: "";
  cv: File;
}

const ApplySection = () => {
  const applyPosition = [
    "Choose a position",
    "App developer",
    "Web developer",
    "Automation & Scripting",
    "UI/UX Design",
    "Marketing",
  ];

  const [err, setErr] = useState("");
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState<FormValues>({
    fullName: "",
    email: "",
    position: "",
    cv: {} as File,
  });

  // Change handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let file = e.target.files?.[0];
    if (file) setUser({ ...user, cv: file });
    else setErr("Choose a pdf file");
    // console.log(file);
  };

  // Send Email via Sendgrid/mail
  const sendEmail = (): void => {
    const reader = new FileReader();

    reader.readAsDataURL(user.cv);

    reader.onload = async () => {
      if (typeof reader.result === "string") {
        const base64String = reader.result?.split(",")[1];

        if (base64String.length > 0) {
          const msg = {
            to: "info@novawork.io", // Change to your recipient
            from: "info@novawork.io", // Change to your verified sender
            subject: `Applying for the position ${user.position}`,
            html: `Hi, I'm <strong>${user.fullName}</strong>, I would like to join on position ${user.position}, My email address is <a href="mailto:${user.email}">${user.email}</a>`,
            attachments: [
              {
                content: base64String,
                filename: user.cv.name,
                type: "application/pdf",
                disposition: "attachment",
              },
            ],
          };
          const res = await fetch("/api/sendemail", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              msg: msg,
            }),
          });
          const data = await res.json();
          if (res.status === 200 && data.success === true) {
            setSuccess(true);
          } else {
            setSuccess(false);
            setErr(data.err);
          }
        } else {
          setErr("Invalid CV file");
        }
      } else
        throw new Error(
          "Type of `reader.result` is not string, it's : " +
            typeof reader.result
        );
    };
  };

  // Form Submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(user);

    // Validation
    if (user.fullName.trim().length < 3) {
      setErr("Full Name must be at least 3 characters");
    } else if (!validator.isEmail(user.email)) {
      setErr("Email is invalid");
    } else if (user.cv.type != "application/pdf") {
      setErr("CV must be a valid PDF document");
    } else {
      setErr("");
      sendEmail();
    }
  };

  return (
    <div className="pt-8 mx-4 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-32 pb-10">
      <div className="border-solid border-2 border-[#CFCFCF] rounded mt-12 max-w-lg px-4 sm:px-12 pb-10 pt-12 mx-auto">
        {/* Title */}
        <p className="uppercase font-bold sm:text-3xl text-center mt-5 text-2xl">
          Apply to techShore
        </p>
        <p className="text-center mt-3 mb-3 text-sm text-gray-500 font-semibold">
          Exciting opportunities await you at Techshore!
        </p>
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="w-full pt-10">
            <label className="relative">
              <div className="font-medium text-sm capitalize absolute -mt-2 ml-6 bg-gray-200 px-2 rounded text-gray-600">
                Full Name
              </div>
              <input
                name="fullName"
                type="text"
                value={user.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="pl-8 w-full h-11 pt-1 border-solid border-2 rounded"
              />
            </label>
          </div>

          {/* Email */}
          <div className="w-full pt-10">
            <label className="relative">
              <div className="font-medium text-sm capitalize absolute -mt-2 ml-6 bg-gray-200 px-2 rounded text-gray-600">
                Email
              </div>
              <input
                name="email"
                type="text"
                value={user.email}
                onChange={handleChange}
                placeholder="YourEmail@example.com"
                className="pl-8 w-full h-11 pt-1 border-solid border-2 rounded drop-shadow-md"
              />
            </label>
          </div>

          {/* Select Position */}
          <div className="w-full pt-10">
            <label htmlFor="countries" className="relative">
              <div className="font-medium text-sm capitalize absolute -mt-2 ml-6 bg-gray-200 px-2 rounded text-gray-600 z-10">
                Select Position
              </div>
              <select
                name="position"
                onChange={handleSelect}
                className="px-6 pt-3 pb-2 border-solid border-2 rounded text-gray-600 text-sm focus:ring-black focus:border-black block w-full"
              >
                {applyPosition.map((position) => (
                  <option key={position} value={position}>
                    {position}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* Upload CV */}
          <div className="w-full pt-10">
            <div className="relative border-solid border-2 rounded">
              <div className="flex items-center pl-6 my-2">
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer bg-black hover:bg-gray-700 text-white font-bold text-sm py-1 px-4 rounded"
                >
                  Upload CV
                </label>
                <input
                  name="cv"
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <span className="ml-3 text-gray-600 max-w-xs">
                  {user.cv.name ? user.cv.name : "No file is selected"}
                </span>
              </div>
            </div>
          </div>

          {/* Error */}
          {err && (
            <div className="w-full mt-5 text-red-500">
              <p>{err}</p>
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="w-full mt-10 text-gray-600">
              <p className="text-justify">
                Thank you for submitting your application! We have received your
                CV and will review it shortly. If we think you might be a good
                fit for the position, we will contact you to schedule an
                interview.
              </p>
            </div>
          )}

          {/* Submit Button */}
          {!success && (
            <button
              type="submit"
              className="w-full mt-10  bg-black text-white hover:bg-gray-800 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ApplySection;
