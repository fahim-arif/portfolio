import React from "react";
import { useState } from "react";
import validator from "validator";

interface FormValues {
  firstName: "";
  lastName: "";
  email: "";
  msg: "";
}

const ContactSection = () => {
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    msg: "",
  });

  // Change handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(user);

    if (user.firstName.trim().length < 2)
      setErr("First name should be at least 2 characters");
    else if (user.lastName.trim().length < 2)
      setErr("Last name should be at least 2 characters");
    else if (!validator.isEmail(user.email))
      setErr("Please provide a valid Email");
    else if (user.msg.trim().length < 5)
      setErr("Your message should be at least 5 characters long");
    else {
      setErr("");
      await sendEmail();
    }
  };

  // Send Email via Sendgrid/mail
  const sendEmail = async () => {
    const msg = {
      to: "fahim.cuet77@gmail.com", // Change to your recipient
      from: "fahim.cuet77@gmail.com", // Change to your verified sender
      subject: `Contact me Form Response`,
      html: `Hi, I'm <strong>${
        user.firstName + " " + user.lastName
      }</strong>, <br> Email: <a href="mailto:${user.email}">${
        user.email
      }</a>, <br> msg: <p>${user.msg}</p>`,
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
  };

  return (
    <div className="pt-8 mx-4 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-32 pb-10">
      <div className="border-2 border-gray-100 rounded mt-12 max-w-lg mx-auto px-4 sm:px-12 pb-20 pt-10">
        <h2 className="mt-3 text-3xl text-gray-900 font-light pb-5">
          Have questions? Give us a shout.
        </h2>

        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="w-full mt-10">
            <label className="relative">
              <div className="text-sm capitalize absolute -mt-2 ml-6 bg-gray-100 px-2 rounded text-gray-600">
                First Name
              </div>
              <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
                placeholder="Enter First Name"
                className="pl-8 w-full h-11 pt-1 border-solid border-2 rounded"
              />
            </label>
          </div>

          {/* Last Name */}
          <div className="w-full mt-10">
            <label className="relative">
              <div className="text-sm capitalize absolute -mt-2 ml-6 bg-gray-100 px-2 rounded text-gray-600">
                Last Name
              </div>
              <input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
                className="pl-8 w-full h-11 pt-1 border-solid border-2 rounded"
              />
            </label>
          </div>

          {/* Email */}
          <div className="w-full mt-10">
            <label className="relative">
              <div className="text-sm capitalize absolute -mt-2 ml-6 bg-gray-100 px-2 rounded text-gray-600">
                Email
              </div>
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="YourEmail@example.com"
                className="pl-8 w-full h-11 pt-1 border-solid border-2 rounded drop-shadow-md"
              />
            </label>
          </div>

          {/* Message */}
          <div className="w-full mt-10">
            <label className="relative">
              <div className="text-sm capitalize absolute -mt-2 ml-6 bg-gray-100 px-2 rounded text-gray-600">
                Message
              </div>
              <textarea
                name="msg"
                value={user.msg}
                onChange={handleTextarea}
                placeholder="Write Message"
                className="pl-8 w-full h-24 pt-3 border-solid border-2 rounded drop-shadow-md"
              />
            </label>
          </div>

          {/* Error */}
          {err && (
            <div className="w-full mt-5 text-red-500">
              <p>{err}</p>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="w-full mt-5 text-gray-600">
              <p className="text-justify">
                Your response is sent successfully. We will get back to you
                shortly!
              </p>
            </div>
          )}

          {/* Submit Button */}
          {!success && (
            <button
              type="submit"
              className="w-full mt-10  bg-black text-white hover:bg-gray-800 rounded-lg text-md px-5 py-2.5 mr-2 mb-2"
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
