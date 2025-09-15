import s3 from "./s3";
import { PutObjectCommand } from "@aws-sdk/client-s3";

export const uploadFileToR2 = async (file) => {
 
  if (!file || file.size === 0) return null;

  const bucketName = process.env.R2_BUCKET_NAME;
  const publicUrl = process.env.R2_PUBLIC_URL;

  if (!bucketName || !publicUrl) {
    throw new Error(
      "Cloudflare R2 environment variables missing: R2_BUCKET_NAME or CLOUDFLARE_R2_PUBLIC_URL"
    );
  }

  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${Date.now()}-${file.name}`;

   
    await s3.send(
      new PutObjectCommand({
        Bucket: bucketName,
        Key: fileName,
        Body: buffer,
        ContentType: file.type,
      })
    );

    return `${publicUrl}/${fileName}`;
  } catch (error) {
    console.error("Failed to upload file to R2:", error);
    throw new Error("Failed to upload file to R2");
  }
};
