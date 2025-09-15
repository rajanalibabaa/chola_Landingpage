import mongoose from "mongoose";

const careersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true },
    education: { type: String, required: true, trim: true },
    applyFor: { type: String, required: true, trim: true },
    message: { type: String, trim: true },
    resume: { type: String }, 
  },
  {
    timestamps: true, 
  }
);

export const Careers =
  mongoose.models.Careers || mongoose.model("Careers", careersSchema);

