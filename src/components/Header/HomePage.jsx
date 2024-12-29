import React from "react";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen overflow-hidden mb-1">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
        <div className="container mx-auto px-6 py-16 flex flex-col items-center text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to Our Animated World
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Experience innovation, speed, and creativity.
          </motion.p>
          <motion.button
            className="px-6 py-3 bg-white text-purple-500 font-semibold rounded-lg shadow-lg hover:bg-gray-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Get Started
          </motion.button>
        </div>
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url("https://source.unsplash.com/1600x900/?technology")',
          }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
        ></motion.div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["🚀", "🔒", "✨"].map((icon, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-2xl font-bold mb-2">
                  {index === 0
                    ? "Fast Performance"
                    : index === 1
                    ? "Secure"
                    : "User-Friendly"}
                </h3>
                <p>
                  {index === 0
                    ? "Experience blazing-fast speeds with our platform."
                    : index === 1
                    ? "Your data is safe with industry-leading encryption."
                    : "Enjoy an intuitive and easy-to-use interface."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <motion.section
        className="bg-indigo-600 text-white py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <motion.button
            className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Join Now
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
