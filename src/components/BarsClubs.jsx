import React, { useEffect, useState } from "react";
import NavBar from "./Navbar";

function BarsClubs() {
    const [bars, setbars] = useState([]);
   const [selectedbar, setSelectedbar] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/areas") // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => setbars(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleCardClick = (bar) => {
    setSelectedbar(bar);
  };

  const closeModal = () => {
    setSelectedbar(null);
  };
    return (
        <div className="text-white  ">
        <div
        className="absolute top-0 left-0 w-full h-1/3 bg-cover bg-center "
        style={{ backgroundImage: "url('https://sokodirectory.com/wp-content/uploads/2018/07/Soko-nairobi-night-club.jpg')" }}
    >
        <div className="absolute top-0 left-0 w-full h-full  bg-black opacity-50"></div> {/* Semi-transparent overlay */}
        <NavBar/>
        <div className="relative  z-10">
        <h1 className="text-white text-8xl font-bold p-4 mt-20 flex justify-center items-center font-dancing-script ">Bars & club</h1>
        </div>
    </div>
    <div className="bg-black">
        <div className="w-full flex justify-center mt-50">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6" style={{ marginTop: "35vh" }}>
            {bars.map((bar, index) => (
              <div
                key={index}
                className="relative bg-white text-white shadow-md h-60 w-60 flex flex-col justify-center items-center cursor-pointer transform transition duration-300 hover:scale-105"
                onClick={() => handleCardClick(bar)}
                style={{
                  backgroundImage: `url(${bar.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute top-1/4 left-1/4 h-1/2 w-1/2 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-center text-white">{bar.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedbar && (
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
                src={selectedbar.image}
                alt={selectedbar.name}
                className="w-1/2 object-cover rounded-none"
              />
              <div className="w-1/2 p-6 text-white flex flex-col justify-center">
                <h2 className="text-4xl font-bold font-dancing-script">{selectedbar.name}</h2>
                <p className="mt-4">{selectedbar.description}</p>
                <a
                  href={selectedbar.website}
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

export default BarsClubs;