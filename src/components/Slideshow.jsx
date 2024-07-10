import React, { useState, useEffect } from "react";

function Slideshow() {
  const [index, setIndex] = useState(0);
  const images = [
    "https://media.gettyimages.com/id/137896551/photo/exterior-view-of-skyscrapers.jpg?s=2048x2048&w=gi&k=20&c=-4HcZbZnwgXJyHReSsXnbYZXXLuqgOWURbRKIj8SyRA=",
    "https://media.gettyimages.com/id/1058699076/photo/low-angle-view-of-contemporary-corporate-skyscrapers-with-urban-architectural-design-in.jpg?s=2048x2048&w=gi&k=20&c=o3KLjlDAqOp8BtBv-H1BoUTUHj8da20UL9eaL_mgAf0=",
    "https://media.gettyimages.com/id/1215119911/photo/looking-directly-up-at-the-skyline-of-the-financial-district-in-central-london-stock-image.jpg?s=2048x2048&w=gi&k=20&c=CA1cgh-STqN3dMUGbGE2LJFLZHuN0cH6CLTgAT1adY8=",
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="max-w-md mx-auto mb-4 rounded-md overflow-hidden shadow-lg">
      <img src={images[index]} alt={`Slide ${index + 1}`} className="w-full" />
    </div>
  );
}

export default Slideshow;