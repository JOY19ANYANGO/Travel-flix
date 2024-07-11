import React, { useState, useEffect } from "react";

function Slideshow() {
  const [index, setIndex] = useState(0);
  const images = [
    {
      url: "https://media.istockphoto.com/id/1207339879/photo/le-morne-beach-luxury-resort-mauritius.jpg?s=1024x1024&w=is&k=20&c=5WjbfOSwkQ9OywgweGpXv63z0zAKGQMnKEGnlbK1frI=",
      caption: "Dive into coastal wonders where the sea meets serenity, and every wave tells a story.",
    },
    {
      url: "https://media.istockphoto.com/id/1337232523/photo/high-angle-view-of-a-lake-and-forest.jpg?s=1024x1024&w=is&k=20&c=EPh5_6vL4mywUc3AfLRKJCChgAs41oI9nMveOInep_0=",
      caption: "Immerse yourself in breathtaking landscapes and let nature's beauty inspire you!",
    },
    {
      url: "https://media.istockphoto.com/id/1136053333/photo/elephant-and-lion.jpg?s=1024x1024&w=is&k=20&c=yl49h_rZ2gOiyieWMXntPG3rxBX5bjRZRzHZHjqVBzY=",
      caption: "Embark on a wild adventure and discover nature's hidden wonders!",
    },
    {
      url: "../../public/hotel.jpg",
      caption: "Indulge in luxurious escapes and unwind in the comfort of exquisite accommodations",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full rounded-md overflow-hidden shadow-lg">
      <img
        src={images[index].url}
        alt={`Slide ${index + 1}`}
        className="w-full h-[600px] object-cover transition-opacity duration-1000"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black to-transparent p-4">
        <p className="text-white text-5xl font-bold font-georgia">{images[index].caption}</p>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex justify-between px-4">
        <button
          onClick={() => setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))}
          className="bg-indigo-500 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
        >
          &lt;
        </button>
        <button
          onClick={() => setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))}
          className="bg-indigo-500 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Slideshow;


