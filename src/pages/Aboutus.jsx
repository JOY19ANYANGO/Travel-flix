
import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

    function AboutUs() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-6">
            <NavBar/>
        <h1 className="text-6xl font-bold mb-8 animate-pulse">About Us</h1>
        <div className="max-w-4xl text-center space-y-6">
            <p className="text-xl leading-relaxed">
            Welcome to our Nairobi exploration website! We are passionate about showcasing the vibrant culture, rich history, and hidden gems of Nairobi. Whether you're a local looking for new experiences or a visitor eager to explore, our platform is your gateway to the best that Nairobi has to offer.
            </p>
            <p className="text-xl leading-relaxed">
            Our mission is to inspire you to discover the diverse neighborhoods, scenic landscapes, and unique attractions that make Nairobi a truly unique city. From bustling markets to serene parks, we bring you closer to the heart of Nairobi.
            </p>
            <p className="text-xl leading-relaxed">
            Join us as we uncover the beauty, flavors, and stories of Nairobi. Whether you're seeking adventure, culture, or relaxation, your Nairobi journey starts here.
            </p>
        </div>
    
        <div className="mt-12 flex justify-center">
            <a
            href="#"
            className="px-8 py-3 bg-red-500 rounded-lg text-xl font-semibold hover:bg-red-600 transition-transform transform hover:scale-105"
            >
            Discover Nairobi With Us
            </a>
        </div>
    
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fadeInUp">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="leading-relaxed">
                To inspire and enable people to explore Nairobi by providing reliable and enriching local travel content.
            </p>
            </div>
            <div className="animate-fadeInUp delay-200">
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="leading-relaxed">
                To be the go-to platform for both locals and visitors, fostering a deep connection with Nairobi's unique culture and experiences.
            </p>
            </div>
            <div className="animate-fadeInUp delay-400">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="leading-relaxed">
                We believe in promoting Nairobi's heritage, supporting local businesses, and creating authentic experiences that showcase the city's true essence.
            </p>
            </div>
        </div>
        <Footer/>
        </div>
    );
    }
    
    export default AboutUs;
    
