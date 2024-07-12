import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <div className="absolute top-42 left-0 right-0 mt-12 flex flex-col items-center">
      <div className="flex flex-col items-center justify-center h-80 text-center font-georgia">
        <h1 className="text-6xl font-bold">Let's Explore</h1>
        <h1 className="text-6xl font-bold">Your Beautiful City</h1>
        <p className="text-2xl">Find a great place to stay, eat, shop from local experts</p>
      </div>
      <div className="flex w-full justify-center">
        <div className="flex w-5/12">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-4 px-4 text-black shadow-md"
          />
          <button className="px-6 py-4 bg-red-500 text-white shadow-md flex items-center">
            <FontAwesomeIcon icon={faSearch} className="mr-2" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;







