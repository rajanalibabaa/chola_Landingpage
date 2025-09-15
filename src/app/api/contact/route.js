import dbConnect from "@/lib/dbConnect";
import CholaContact from "../../../models/contactModel";
import { NextResponse } from "next/server";
import { uploadFileToR2 } from "../../../utils/uploads/s3Uploader.js";
import { ApiResponse } from "../../../utils/ApiResponse.js";

export const config = { api: { bodyParser: false } };

export async function POST(req) {
  await dbConnect();

  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const company = formData.get("company");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");
    const agree = formData.get("agree") === "true";
    const file = formData?.get("attachment");

    if (!name || !email || !message) {
      return new ApiResponse(
        500,
        {},
        "Name, Email, and Message are required"
      ).toResponse();
    }
    let attachmentUrl;
    if (file) {
      attachmentUrl = await uploadFileToR2(file);
      console.log(attachmentUrl);
    }

    const contact = await CholaContact.create({
      name,
      company,
      email,
      phone,
      message,
      agree,
      attachment: attachmentUrl,
    });

    if (!contact) {
      return new ApiResponse(500, {}, "Failed to save contact").toResponse();
    }

    return NextResponse.json(
      new ApiResponse(200, {}, "Message received successfully!")
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(new ApiResponse(500, {}, "Internal Server Error"));
  }
}
