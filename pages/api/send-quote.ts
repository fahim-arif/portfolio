import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type EmailRequestBody = {
  name: string;
  email: string;
  message?: string;
  phone?: string;
  company?: string;
  selectedProjects: string[];
};

type ResponseData = {
  message: string;
  success: boolean;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    const data = req.body as EmailRequestBody;

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: "info@novawork.io",
        pass: "qt7YgVj4zFxW",
      },
    });

    let mailOptions = {
      from: "info@novawork.io",
      to: "info@novawork.io",
      replyTo: data.email,
      subject: "A client wants to get quote",
      text: `Name: ${data.name}\n
      Email: ${data.email} ${
        data?.company ? `\nCompany: ` + data.company : ""
      } ${data?.phone ? `\nPhone: ` + data.phone : ""} \n\n${
        data.selectedProjects.length > 0 ? "Project Type: " : ""
      }${data.selectedProjects.map((p) => p).join(", ")}\n\n${
        data?.message ? `\nMessage: ` + data.message : ""
      }`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({
        message: "Email Sent Successfully!",
        success: true,
      });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({
        message: "Internal Server Error",
        success: false,
      });
    }
  }
}
