import React, { useEffect, useState } from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";

function Malls() {
    const [malls, setmalls] = useState([]);
    const [selectedmall, setSelectedmall] = useState(null);

    useEffect(() => {
      fetch("http://localhost:3000/areas") // Replace with your actual API endpoint
        .then((response) => response.json())
        .then((data) => {
          const filteredMalls= data.filter((mall) => mall.category === "malls");
          setmalls(filteredMalls);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
  const handleCardClick = (mall) => {
    setSelectedmall(mall);
  };

  const closeModal = () => {
    setSelectedmall(null);
  };
    return (
        <div className="text-white  ">
        <div
            className="absolute top-0 left-0 w-full h-1/3 bg-cover bg-center "
            style={{ backgroundImage: "url('https://hauzisha.co.ke/blog/wp-content/uploads/2021/12/pexels-pixabay-54581.jpg')" }}
        >
            <div className="absolute top-0 left-0 w-full h-full  bg-black opacity-50"></div> {/* Semi-transparent overlay */}
            <NavBar/>
            <div className="relative  z-10">
            <h1 className="text-white text-8xl font-bold p-4 mt-20 flex justify-center items-center font-dancing-script ">Malls</h1>
            </div>
        </div>
        <div className="bg-black">
        <div className="w-full flex justify-center mt-50">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6" style={{ marginTop: "35vh" }}>
            {malls.map((mall, index) => (
              <div
                key={index}
                className="relative bg-white text-white shadow-md h-60 w-60 flex flex-col justify-center items-center cursor-pointer transform transition duration-300 hover:scale-105"
                onClick={() => handleCardClick(mall)}
                style={{
                  backgroundImage: `url(${mall.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute top-1/4 left-1/4 h-1/2 w-1/2 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-center text-white">{mall.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedmall && (
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
                src={selectedmall.image}
                alt={selectedmall.name}
                className="w-1/2 object-cover rounded-none"
              />
              <div className="w-1/2 p-6 text-white flex flex-col justify-center">
                <h2 className="text-4xl font-bold font-dancing-script">{selectedmall.name}</h2>
                <p className="mt-4">{selectedmall.description}</p>
                        <a
          href={selectedmall.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition-colors duration-300 text-sm"
        >
          Visit Website
        </a>


              </div>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </div>
    );
}

export default Malls;