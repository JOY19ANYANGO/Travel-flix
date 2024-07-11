import React, { useState, useEffect, useRef } from 'react';

function MostVisited() {
  const [areas, setAreas] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    // Example URL of the API endpoint
    const apiUrl = 'https://api.npoint.io/02ad3566d5665e942f97/areas';

    // Fetching data
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched areas:', data);
        setAreas(data); // Update state with fetched areas
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 4; // Adjust scroll speed as needed
      }
    }, 50); // Adjust interval (milliseconds) for smoother or faster scrolling

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Most Visited Areas</h2>
      <div className="overflow-x-auto whitespace-nowrap" ref={scrollRef}>
        {areas.map(area => (
          <div key={area.id} className="inline-block bg-white rounded-lg shadow-md overflow-hidden mx-4 my-2 w-64">
            <img src={area.image} alt={area.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{area.name}</h3>
              <p className="text-gray-700 mb-2">{area.Description}</p>
              <p className="text-gray-700 mb-2">{area.Category}</p>
              <p className="text-gray-700">{area.Location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MostVisited;
