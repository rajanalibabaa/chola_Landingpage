"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-orange-50 mt-15">
      <main className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl mx-auto p-6 sm:p-12 lg:p-20 gap-12">
        
        {/* Left Side Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-snug"
          >
            Welcome to{" "}
            <span className="text-orange-600">
              MySite
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto md:mx-0"
          >
            We specialize in building <span className="font-semibold">cutting-edge</span> web and
            mobile applications that help businesses scale and thrive in the
            digital era.
          </motion.p>

          {/* Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full mt-8 sm:mt-10">
            {/* App Development */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="group p-5 sm:p-6 bg-white rounded-2xl shadow-md  border-orange-500 hover:shadow-xl hover:-translate-y-2 transition-all"
            >
              <h2 className="text-lg sm:text-xl font-bold text-orange-600 mb-2 sm:mb-3 group-hover:scale-105 transition-transform">
                📱 App Development
              </h2>
              <p className="text-gray-700 text-sm sm:text-base">
                Cross-platform apps for Android & iOS.
              </p>
            </motion.div>

            {/* Web Development */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="group p-5 sm:p-6 bg-white rounded-2xl shadow-md border-l hover:shadow-xl hover:-translate-y-2 transition-all"
            >
              <h2 className="text-lg sm:text-xl font-bold text-orange-600 mb-2 sm:mb-3 group-hover:scale-105 transition-transform">
                💻 Web Development
              </h2>
              <p className="text-gray-700 text-sm sm:text-base">
                Responsive, modern websites & web apps.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex justify-center w-full"
        >
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
            <Image
              src="/home.png"
              alt="Home Banner"
              width={650}
              height={50}
              className="w-full h-auto object-contain rounded-xl shadow-lg"
              priority
            />
          </div>
        </motion.div>
      </main>
    </div>
  );
}
