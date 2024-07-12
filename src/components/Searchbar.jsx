import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <div className="absolute top-42 left-0 right-0 mt-12 flex justify-center items-center">
      <div className="flex w-5/12">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 text-black rounded-l-md shadow-md"
        />
        <button className="px-4 py-2 bg-red-500 text-white rounded-r-md shadow-md flex items-center">
          <FontAwesomeIcon icon={faSearch} className="mr-2" />
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;




