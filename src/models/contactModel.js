import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  company: { type: String },
  message: { type: String, required: true },
  agree: { type: Boolean, default: false },
  attachment: { type: String },
}, { timestamps: true });

const CholaContact = mongoose.models.CholaContact || mongoose.model("CholaContact", contactSchema);

export default CholaContact;
