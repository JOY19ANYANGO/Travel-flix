import React, { useEffect, useState } from "react";
import NavBar from "./Navbar";

function Nature() {
    const [nature, setnature] = useState([]);
    const [selectednature, setSelectednature] = useState(null);
    useEffect(() => {
      fetch("http://localhost:3000/areas") // Replace with your actual API endpoint
        .then((response) => response.json())
        .then((data) => {
          const filterednature = data.filter((nature) => nature.category === "nature");
          setnature(filterednature);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, []);


  const handleCardClick = (nature) => {
    setSelectednature(nature);
  };

  const closeModal = () => {
    setSelectednature(null);
  };
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
        <div className="bg-black">
        <div className="w-full flex justify-center mt-50">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6" style={{ marginTop: "35vh" }}>
            {nature.map((nature, index) => (
              <div
                key={index}
                className="relative bg-white text-white shadow-md h-60 w-60 flex flex-col justify-center items-center cursor-pointer transform transition duration-300 hover:scale-105"
                onClick={() => handleCardClick(nature)}
                style={{
                  backgroundImage: `url(${nature.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute top-1/4 left-1/4 h-1/2 w-1/2 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-center text-white">{nature.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectednature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-black rounded-lg overflow-hidden shadow-lg p-6 relative w-3/4 max-w-4xl h-1/2 transform transition duration-300 scale-100 animate-modalShow">
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="flex h-full">
              <img
                src={selectednature.image}
                alt={selectednature.name}
                className="w-1/2 object-cover rounded-none"
              />
              <div className="w-1/2 p-6 text-white flex flex-col justify-center">
                <h2 className="text-4xl font-bold font-dancing-script">{selectednature.name}</h2>
                <p className="mt-4">{selectednature.description}</p>
                <a
                  href={selectednature.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-blue-400 underline"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    );
}

export default Nature;