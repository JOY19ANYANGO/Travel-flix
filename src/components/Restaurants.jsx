import React, { useEffect, useState } from "react";
import NavBar from "./Navbar";

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/areas") // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleCardClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const closeModal = () => {
    setSelectedRestaurant(null);
  };

  return (
    <div className="text-white">
      <div
        className="absolute top-0 left-0 w-full h-1/3 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://theexpatmummy.com/wp-content/uploads/2023/02/slate-nairobi-scaled.jpg')",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <NavBar />
        <div className="relative z-10">
          <h1 className="text-white text-8xl font-bold p-4 mt-20 flex justify-center items-center font-dancing-script">
            Restaurants
          </h1>
        </div>
      </div>
      <div className="bg-black">
        <div className="w-full flex justify-center mt-50">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6" style={{ marginTop: "35vh" }}>
            {restaurants.map((restaurant, index) => (
              <div
                key={index}
                className="relative bg-white text-white shadow-md h-60 w-60 flex flex-col justify-center items-center cursor-pointer"
                onClick={() => handleCardClick(restaurant)}
                style={{
                  backgroundImage: `url(${restaurant.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute top-1/4 left-1/4 h-1/2 w-1/2 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-center text-white">{restaurant.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedRestaurant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-black rounded-lg overflow-hidden shadow-lg p-6 relative max-w-lg w-full">
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedRestaurant.image}
              alt={selectedRestaurant.name}
              className="h-48 w-full object-cover mb-4 rounded-lg"
            />
            <div className="text-center">
              <h2 className="text-2xl font-bold">{selectedRestaurant.name}</h2>
              <p className="mt-2">{selectedRestaurant.description}</p>
              <a
                href={selectedRestaurant.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-blue-400 underline block"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Restaurants;
