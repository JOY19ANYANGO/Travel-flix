import React from 'react';
import NavBar from '../components/Navbar';
import SearchBar from '../components/Searchbar';
import Header from '../components/Header';
import AddListings from '../components/AddListings';
import CategoryIcons from '../components/Categories';

const LandingPage = () => {
  return (
    <div className=' bg-black text-white'>
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://www.travelsafe-abroad.com/wp-content/uploads/mustafa-omar-Zkao_QBEjk8-unsplash.jpg')" }}>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> {/* Semi-transparent overlay */}
        
        <div className="relative z-10">
          <NavBar />
          <AddListings />
          <Header />
        </div>
        <div className="relative pt-32 mt-12 z-10">
          <SearchBar />
        </div>
      </div>
      
      <CategoryIcons />
    </div>
  );
};

export default LandingPage;

