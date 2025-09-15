"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  InputAdornment,
} from "@mui/material";
import {
  CloudUpload,
  Person,
  Email,
  Phone,
  School,
  Assignment,
  Message,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function StudentFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    yourEducation: "",
    applyFor: "",
    message: "",
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) => setResumeFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    if (resumeFile) data.append("resume", resumeFile);

    console.log("data",data)



    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL+"/careers", { method: "POST", body: data });

      console.log("res :",res)
      if (res.ok) {
        setIsSubmitted(true);
        // setFormData({
        //   name: "",
        //   email: "",
        //   phone: "",
        //   yourEducation: "",
        //   applyFor: "",
        //   message: "",
        // });
        setResumeFile(null);
        setTimeout(() => setIsSubmitted(false), 3000);
      } 
      // else alert("❌ Failed to submit data!");
    } catch (error) {
      console.error(error);
      alert("⚠️ Something went wrong!");
    }
  };

  return (
    <Box className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-6 md:px-6 md:py-8">
      {/* Background Circles */}
      <div className="absolute top-0 left-0 w-56 h-56 bg-blue-900/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-800/20 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>

      {/* Success Message */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-600 text-white px-4 py-2 rounded-lg shadow-md flex items-center gap-2 text-sm"
          >
            <Person className="text-base" />
            <span>✅ Student details submitted successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <Container className="relative z-10 max-w-6xl mx-auto">
        <Grid
          container
          spacing={6}
          className="items-start"
          direction={{ xs: "column", md: "row" }}
        >
          {/* Left Image */}
          <Grid
            container
            spacing={6}
            className="items-start"
            direction={{ xs: "column", md: "row" }}
          >
            {/* Left Image */}
            <Grid item xs={12} md={6} className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-full md:max-w-md rounded-2xl overflow-hidden shadow-lg"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/home.png"
                    alt="Student Registration"
                    width={600} // increase width for desktop
                    height={400} // adjust height proportionally
                    className="w-full h-auto rounded-lg"
                    priority
                  />
                </motion.div>
              </motion.div>
            </Grid>

            {/* Right Form */}
            <Grid item xs={12} md={6}>
              {/* Form code remains same */}
            </Grid>
          </Grid>

          {/* Right Form */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-2xl shadow-lg p-6 md:p-8">
                <div className="text-center mb-6">
                  <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">
                    Student Registration
                  </h1>
                  <p className="text-gray-300 text-sm md:text-base">
                    Fill out the form below to start your educational journey
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        name: "name",
                        label: "Full Name",
                        icon: <Person className="text-blue-400" />,
                      },
                      {
                        name: "email",
                        label: "Email Address",
                        icon: <Email className="text-blue-400" />,
                      },
                      {
                        name: "phone",
                        label: "Phone Number",
                        icon: <Phone className="text-blue-400" />,
                      },
                      {
                        name: "yourEducation",
                        label: "Current Education",
                        icon: <School className="text-blue-400" />,
                      },
                      {
                        name: "applyFor",
                        label: "Program Applying For",
                        icon: <Assignment className="text-blue-400" />,
                      },
                    ].map((field) => (
                      <div key={field.name} className="relative">
                        <input
                          type="text"
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          required
                          placeholder=" "
                          className="peer w-full rounded-lg bg-slate-700 px-3 pt-4 pb-1 text-gray-100 text-sm md:text-base border border-slate-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-500 outline-none shadow-sm transition"
                        />
                        <label className="absolute left-3 top-1 text-xs md:text-sm text-gray-400 font-medium peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-blue-400 transition-all flex items-center gap-1">
                          {field.icon} {field.label}
                        </label>
                      </div>
                    ))}

                    {/* Resume Upload */}
                    <div className="md:col-span-2">
                      <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-600 rounded-lg p-3 text-center hover:border-blue-400 hover:bg-slate-700/40 transition cursor-pointer">
                        <CloudUpload className="text-lg text-blue-400 mb-1" />
                        <span className="text-gray-100 text-xs md:text-sm font-medium">
                          {resumeFile
                            ? resumeFile.name
                            : "Click to upload resume (PDF, DOC, DOCX - Max 5MB)"}
                        </span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about your goals, interests, or any questions..."
                    className="w-full rounded-lg bg-slate-700 px-3 py-2 text-gray-100 text-sm md:text-base border border-slate-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-500 outline-none shadow-sm resize-none transition"
                  />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2 md:py-3 px-4 rounded-lg shadow-lg flex items-center justify-center gap-2 text-sm md:text-base transition transform hover:scale-[1.02]"
                  >
                    <Person className="text-sm md:text-base" /> Submit
                    Registration
                  </button>
                </form>
              </div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
