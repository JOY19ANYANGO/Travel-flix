import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddListings = () => {
  return (
    <div className="absolute top-0 right-12 mt-4 mr-4">
      {/* Your component content */}
      <button className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md">
      <FontAwesomeIcon icon={faPlus} className="mr-2" />
        Add Listings
      </button>
    </div>
  );
};

export default AddListings;
