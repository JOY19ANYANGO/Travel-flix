import React from 'react';

const CategoryIcons = () => {
  return (
    <div style={{ marginTop: '100vh' }}  >
      <h1 className='text-white text-center'> V I E W   C A T E G O R I E S</h1>
      <div className="w-full flex justify-center bg-black">
        <div className="grid grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative bg-white text-white shadow-md h-60 w-60 flex flex-col justify-center items-center"
              style={{
                backgroundImage: `url(${category.icon1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute top-1/4 left-1/4 h-1/2 w-1/2 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center">{category.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const categories = [
  { icon1: "https://media-cdn.tripadvisor.com/media/photo-s/22/17/05/8c/mama-harvest-welcomes.jpg", label: 'RESTAURANTS' },
  { icon1: "https://cdn.standardmedia.co.ke/sdemedia/sdeimages/wednesday/thumb_twr1p94gzqfq5a4cd3dc98fa1.jpg", label: 'MALLS' },
  { icon1: "https://www.travelstart.co.ke/blog/wp-content/uploads/2014/06/Brew-Bistro-780x519.jpg", label: 'BARS & CLUBS' },
  { icon1: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/c1/de/d2/caption.jpg?w=500&h=400&s=1", label: 'GAMES & FUNS' },
  { icon1: "https://www.pelago.co/img/products/KE-Kenya/3-hours-nairobi-national-museum/f9cc2c9b-a326-4404-8edc-de54c72faf7d_3-hours-nairobi-national-museum-medium.jpg", label: 'MUESUEMS' },
  { icon1: "https://perfectwildernesstours.com/wp-content/uploads/2023/04/Karura-Forest-Reserve.jpg", label: 'NATURE' },
];

export default CategoryIcons;

