import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

function ContactUs() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-6">
        <NavBar/>
        
      <h1 className="text-6xl font-dancing-script font-bold mb-4 mt-12 animate-pulse">Contact Us</h1>
      <p className="text-xl mb-12 text-center max-w-2xl">
        We're here to help! Fill out the form below or reach out to us on social media.
      </p>

      <form className="w-full max-w-lg bg-gray-900 p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-4 py-2 bg-black border border-gray-700 rounded focus:outline-none focus:border-red-500 text-white"
            type="text"
            id="name"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-4 py-2 bg-black border border-gray-700 rounded focus:outline-none focus:border-red-500 text-white"
            type="email"
            id="email"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-4 py-2 bg-black border border-gray-700 rounded focus:outline-none focus:border-red-500 text-white"
            id="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-red-500 rounded-lg text-white font-semibold text-xl hover:bg-red-600 transition-colors duration-300"
        >
          Send Message
        </button>
      </form>

      <div className="flex space-x-8 mt-12 animate-bounce">
        <a href="#" className="text-3xl text-red-500 hover:text-red-600 transition-colors duration-300">
          <FaFacebook />
        </a>
        <a href="#" className="text-3xl text-red-500 hover:text-red-600 transition-colors duration-300">
          <FaTwitter />
        </a>
        <a href="#" className="text-3xl text-red-500 hover:text-red-600 transition-colors duration-300">
          <FaInstagram />
        </a>
        <a href="#" className="text-3xl text-red-500 hover:text-red-600 transition-colors duration-300">
          <FaLinkedin />
        </a>
      </div>
      <Footer/>
    </div>
  );
}

export default ContactUs;
