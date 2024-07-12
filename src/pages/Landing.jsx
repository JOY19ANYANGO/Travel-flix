import React from 'react';
import NavBar from '../components/Navbar';
import SearchBar from '../components/Searchbar';
import Header from '../components/Header';
import AddListings from '../components/AddListings';
import CategoryIcons from '../components/Categories';

const LandingPage = () => {
  return (
    <div className="font-georgia text-white relative h-screen bg-slate-100">
      <div className="absolute top-0 left-0 w-full h-3/4 bg-cover bg-center" style={{ backgroundImage: "url('https://www.travelsafe-abroad.com/wp-content/uploads/mustafa-omar-Zkao_QBEjk8-unsplash.jpg')" }}>
        <NavBar />
        <AddListings />
        <Header />
        <SearchBar />
      </div>
    
      <div className="absolute bottom-0 left-0 w-full h-1/4 flex justify-center items-center -mb-12">
        <CategoryIcons />
      </div>
      </div>
 
  );
};

export default LandingPage;


