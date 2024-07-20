import React from 'react';
import NavBar from '../components/Navbar';
import SearchBar from '../components/Searchbar';
import Header from '../components/Header';
import AddListings from '../components/AddListings';
import CategoryIcons from '../components/Categories';
import PopularAreas from '../components/MostPopular';

const LandingPage = () => {
  return (
    <div>
    <div className="font-georgia text-white relative h-screen bg-slate-100 overflow-auto">
      <div className="absolute top-0 left-0 w-full h-3/4 bg-cover bg-center" style={{ backgroundImage: "url('https://www.travelsafe-abroad.com/wp-content/uploads/mustafa-omar-Zkao_QBEjk8-unsplash.jpg')" }}>
        <div className="fixed top-0 left-0 w-full z-10">
          <NavBar />
          <AddListings />
          <Header />
        </div>
        <div className="pt-32 mt-12">
          <SearchBar />
        </div>
      </div>
    
      <div className="absolute bottom-0 left-0 w-full h-1/4 flex justify-center items-center -mb-12">
        <CategoryIcons />
      </div>
      
    </div>
    <div className='bg-slate-100'>
      <PopularAreas/>
    </div>
  </div>
  );
};

export default LandingPage;



