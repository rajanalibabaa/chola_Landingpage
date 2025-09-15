import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect.js";
import { ApiResponse } from "../../../utils/ApiResponse.js";
import { Careers } from "../../../models/careers.model.js";
import { uploadFileToR2 } from "../../../utils/uploads/s3Uploader.js";

export async function POST(req) {
  try {
    await dbConnect();

    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const education = formData.get("education");
    const applyFor = formData.get("applyFor");
    const message = formData.get("message");
    const resume = formData.get("resume");

    
    if (!name || !email || !phone || !education || !applyFor) {
      return NextResponse.json(
        new ApiResponse(400, {}, "All fields are required")
      );
    }

    let attachmentUrl;
    if (resume) {
          attachmentUrl = await uploadFileToR2(resume);
          console.log(attachmentUrl);
        }

    const data = await Careers.create({
      name,
      email,
      phone,
      education,
      applyFor,
      message,
      resume: attachmentUrl
    });
    if (!data) {
          return new ApiResponse(500, {}, "Failed to save Careers").toResponse();
        }

    return NextResponse.json(
      new ApiResponse(
        200,
        {
          data
        },
        "Data received successfully"
      )
    )
  } catch (error) {
    console.error("❌ Error in /api/careers:", error);
    return NextResponse.json(
      new ApiResponse(500, {}, "Internal Server Error")
    );
  }
}
