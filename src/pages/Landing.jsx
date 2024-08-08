import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar';
import SearchBar from '../components/Searchbar';
import Header from '../components/Header';
import AddListings from '../components/AddListings';
import CategoryIcons from '../components/Categories';
import Footer from '../components/Footer';

const LandingPage = () => {
  const [opacity, setOpacity] = useState("bg-black opacity-40");

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const newOpacity ="bg-black opacity-60" ; // Adjust the divisor to control how fast opacity changes
    setOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='bg-black text-white overflow-x-hidden'>
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://www.travelsafe-abroad.com/wp-content/uploads/mustafa-omar-Zkao_QBEjk8-unsplash.jpg')" }}>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div> {/* Semi-transparent overlay */}
        
        <div className="sticky top-0 z-10" style={{ opacity }}>
          <NavBar />
          <AddListings />
          <Header />
        </div>
        <div className="relative pt-32 mt-12 z-10">
          <SearchBar />
        </div>
      </div>

      <CategoryIcons />
      <Footer />
    </div>
  );
};

export default LandingPage;



