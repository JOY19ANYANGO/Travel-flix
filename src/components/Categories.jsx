import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHamburger,
  faCoffee,
  faShoppingBag,
  faShoppingBasket,
  faPalette,
  faEye,
  faBed,
  faCocktail,
  faGamepad,
  faSmile,
  faSchool,
  faGraduationCap,
  faFutbol,
  faDumbbell,
  faHospital,
  faClinicMedical,
  faMask,
  faTheaterMasks,
  faUniversity,
  faLandmark,
  faMapMarkedAlt,
  faGlassCheers,
} from '@fortawesome/free-solid-svg-icons';

const CategoryIcons = () => {
  return (
    <div className="container mx-auto px-8 py-8">
      <div className="grid grid-cols-6 gap-2">
        {categories.map((category, index) => (
          <div key={index} className="bg-white text-red-500 p-4 rounded-lg shadow-md h-40 w-40 flex flex-col justify-center items-center">
            <div className="mb-4">
              <FontAwesomeIcon icon={category.icon1} className="text-5xl" />
              <FontAwesomeIcon icon={category.icon2} className="text-5xl ml-4" />
            </div>
            <div className="text-center">{category.label}</div>
            <div className="text-center text-xs mt-2">10 LISTINGS</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const categories = [
  { icon1: faHamburger, icon2: faCoffee, label: 'Food & Drinks' },
  { icon1: faShoppingBag, icon2: faShoppingBasket, label: 'Malls' },
  { icon1: faPalette, icon2: faEye, label: 'Beauty' },
  { icon1: faBed, icon2: faCocktail, label: 'Hotels' },
  { icon1: faGamepad, icon2: faSmile, label: 'Fun & Games' },
  { icon1: faSchool, icon2: faGraduationCap, label: 'Schools' },
  { icon1: faFutbol, icon2: faDumbbell, label: 'Sports' },
  { icon1: faHospital, icon2: faClinicMedical, label: 'Health' },
  { icon1: faTheaterMasks, icon2: faMask, label: 'Theater' },
  { icon1: faUniversity, icon2: faLandmark, label: 'Museum' },
  { icon1: faMapMarkedAlt, icon2: faGlassCheers, label: 'Places' },
  { icon1: faGlassCheers, icon2: faCocktail, label: 'Bar & Club' },
];

export default CategoryIcons;


