import React, { useEffect, useState } from 'react';

const PopularAreas = () => {
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await fetch('http://localhost:3000/areas');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAreas(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchAreas();
  }, []);

  const truncateDescription = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-8 text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto p-4 justify-center ">
      <h1 className="text-2xl text-red-500 text-center mb-8">POPULAR AREAS</h1>
      <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto flex  w-full justify-center mb-8">
        {areas.map((area) => (
          <div key={area.id} className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-xs mx-auto">
            <img src={area.image} alt={area.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl text-red-500 mb-2">{area.name}</h2>
              <p className="text-sm text-gray-600 mb-4">{area.category}</p>
              <p className="text-gray-700 mb-4">
                {truncateDescription(area.description, 7)}
                {area.description.split(' ').length > 7 && (
                  <span className="text-blue-500 cursor-pointer" onClick={() => {
                    const updatedAreas = areas.map(a =>
                      a.id === area.id ? { ...a, showFullDescription: !a.showFullDescription } : a
                    );
                    setAreas(updatedAreas);
                  }}>
                    {area.showFullDescription ? ' Show Less' : ' Read More'}
                  </span>
                )}
                {area.showFullDescription && area.description.split(' ').length > 7 && (
                  <span> {area.description}</span>
                )}
              </p>
              <a
                href={area.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Visit Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularAreas;



