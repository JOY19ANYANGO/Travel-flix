import React from 'react';
import NavBar from '../components/Navbar';
import Phrase from '../components/Phrase';
import SearchBar from '../components/Searchbar';
import Header from '../components/Header';
import AddListings from '../components/AddListings';
const LandingPage = () => {
  return (
    <div className="font-georgia text-white">
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://www.travelsafe-abroad.com/wp-content/uploads/mustafa-omar-Zkao_QBEjk8-unsplash.jpg')", height: '75vh' }}>
        <NavBar />
        <AddListings/>
        <Header />
        <Phrase />
        <SearchBar />
      </div>
      <div className="p-8">
        {/* Your additional content goes here */}
      </div>
    </div>
  );
};

export default LandingPage;
