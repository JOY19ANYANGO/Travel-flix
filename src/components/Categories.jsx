import React from 'react';
import { Link } from 'react-router-dom';

const CategoryIcons = () => {
  return (
    <div style={{ marginTop: '100vh' }}>
      <h1 className='text-white text-center text-2xl mb-6'>VIEW CATEGORIES</h1>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              to={category.path} 
              className="relative bg-white text-white shadow-md h-60 w-60 flex flex-col justify-center items-center" 
              style={{
                backgroundImage: `url(${category.icon1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute top-1/4 left-1/4 h-1/2 w-1/2 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">{category.label}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const categories = [
  { icon1: "https://media-cdn.tripadvisor.com/media/photo-s/22/17/05/8c/mama-harvest-welcomes.jpg", label: 'RESTAURANTS', path: '/Places/restaurants' },
  { icon1: "https://cdn.standardmedia.co.ke/sdemedia/sdeimages/wednesday/thumb_twr1p94gzqfq5a4cd3dc98fa1.jpg", label: 'MALLS', path: '/Places/malls' },
  { icon1: "https://www.travelstart.co.ke/blog/wp-content/uploads/2014/06/Brew-Bistro-780x519.jpg", label: 'BARS & CLUBS', path: '/Places/bars-clubs' },
  { icon1: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/c1/de/d2/caption.jpg?w=500&h=400&s=1", label: 'GAMES & FUNS', path: '/Places/games-funs' },
  { icon1: "https://perfectwildernesstours.com/wp-content/uploads/2023/04/Karura-Forest-Reserve.jpg", label: 'NATURE', path: '/Places/nature' },
];

export default CategoryIcons;


