import React from "react";
import NavBar from "./Navbar";

function Nature() {
    return (
        <div className="text-white  ">
        <div
            className="absolute top-0 left-0 w-full h-1/3 bg-cover bg-center "
            style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/13/6e/9f/magicalkenya-is-the-perfect.jpg?w=500&h=-1&s=1')" }}
        >
            <div className="absolute top-0 left-0 w-full h-full  bg-black opacity-50"></div> {/* Semi-transparent overlay */}
            <NavBar/>
            <div className="relative  z-10">
            <h1 className="text-white text-8xl font-bold p-4 mt-20 flex justify-center items-center font-dancing-script ">Nature</h1>
            </div>
        </div>
    </div>
    );
}

export default Nature;