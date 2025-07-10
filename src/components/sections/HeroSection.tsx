"use client"; // Add this line to the top of your file
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../shared/Button';
import { useTheme } from 'next-themes'; // for theme management

const HeroSection: React.FC = () => {
  const { theme } = useTheme(); // Check the current theme (light or dark)

  // Animation variants for the text and buttons
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative h-[90vh] bg-hero-pattern flex items-center px-10 bg-no-repeat bg-center">
      {/* Artistic SVG or Illustrations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Switch artwork based on theme */}
        {theme === 'dark' ? (
          <svg
            className="absolute left-0 top-0 w-full h-full opacity-25"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 600"
          >
            <g fill="none" stroke="white" strokeWidth="0.5">
             
              <circle cx="400" cy="300" r="200" stroke="blue" />
             
            </g>
          </svg>
        ) : (
          <svg
            className="absolute left-0 top-0 w-full h-full opacity-25"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 600"
          >
            <g fill="none" stroke="black" strokeWidth="0.5">
            
              <circle cx="400" cy="300" r="200" stroke="orange" />
            </g>
          </svg>
        )}

        {/* Additional abstract shapes or blobs */}
        <motion.img
          src="/whyChooseUs.jpg"
          className="absolute hidden md:block   right-20 bottom-0 w-96 h-96 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full "
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        ></motion.img>
      </div>

      {/* Content Section with Animations */}
      <div className="relative z-10  w-full md:w-1/2 space-y-6">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl font-extrabold leading-tight text-dark dark:text-white md:text-6xl"
        >
          Transforming <span className="text-blue-600 dark:text-blue-400">Local</span> Businesses
        </motion.h1>
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl bg-gradient-three-color bg-clip-text text-transparent font-extrabold"
        >
          Through Innovation
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg text-gray-700 dark:text-gray-200 mt-4"
        >
          We specialize in modern solutions for local enterprises, enabling them to thrive in the digital age.
        </motion.p>

        {/* Call to Action Buttons */}
        <div className="flex mt-6 space-x-4">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button href="/#footer" bg>
              Contact Us
            </Button>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button href="/projects">Our Portfolio</Button>
          </motion.div>
        </div>
        
      </div>
     
      {/* Image Grid with Bubble Animation */}
      <div className="relative hidden md:block md:w-1/2">
        <div className="relative flex justify-center items-center">
          {/* Main image in the center */}
          <motion.div
            className="w-48 h-48 object-cover rounded-full transform hover:scale-105 transition duration-500 ease-in-out"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
          />

          {/* Surrounding images with bubble effect */}
          <motion.img
            src="/ui.png"
            alt="Tech Innovation"
            className="absolute w-20 h-20 object-cover rounded-full animate-bubble-1"
            style={{ top: '-60px', left: '60px' }}
            initial={{ y: 0 }}
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.img
            src="/web.png"
            alt="Tech Innovation"
            className="absolute w-20 h-20 object-cover rounded-full animate-bubble-2"
            style={{ top: '-60px', right: '60px' }}
            initial={{ y: 0 }}
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.img
            src="/Services2.png"
            alt="Tech Innovation"
            className="absolute w-20 h-20 object-cover rounded-full animate-bubble-3"
            style={{ bottom: '-60px', left: '60px' }}
            initial={{ y: 0 }}
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.img
            src="/Services3.png"
            alt="Tech Innovation"
            className="absolute w-20 h-20 object-cover rounded-full animate-bubble-4"
            style={{ top: '-90px', right: '260px' }}
            initial={{ y: 0 }}
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
