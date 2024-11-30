import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaAirbnb, FaSearch, FaGlobe, FaUserCircle, FaBars, FaRegHeart } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <div className="navbar bg-white fixed top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          {/* Logo Section */}
          <div className="flex-1">
            <Link to="/" className="flex items-center text-primary hover:text-primary-focus transition-colors">
              <FaAirbnb className="text-3xl mr-1" />
              <span className="text-xl font-bold">airbnb</span>
            </Link>
          </div>

          {/* Desktop Search Bar */}
          <div className="flex-none hidden lg:block mx-4">
            <div className="flex items-center border rounded-full py-2 px-4 shadow-sm hover:shadow-md transition-all cursor-pointer bg-white">
              <button className="font-medium border-r border-gray-200 pr-4">Anywhere</button>
              <button className="font-medium border-r border-gray-200 px-4">Any week</button>
              <button className="font-medium text-gray-500 px-4">Add guests</button>
              <div className="bg-primary p-2 rounded-full text-white">
                <FaSearch className="text-sm" />
              </div>
            </div>
          </div>

          {/* Mobile Search Button */}
          <div className="flex-none lg:hidden">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="btn btn-ghost btn-circle hover:bg-gray-100"
            >
              <FaSearch className="text-xl" />
            </button>
          </div>

          {/* Right Section */}
          <div className="flex-none ml-4">
            <div className="flex items-center gap-1">
              {/* Desktop Menu Items */}
              <div className="hidden md:flex items-center">
                <Link 
                  to="/host"
                  className="hover:bg-gray-100 px-4 py-2 rounded-full transition-colors text-sm font-medium"
                >
                  Airbnb your home
                </Link>
                <Link 
                  to="/contact"
                  className="hover:bg-gray-100 px-4 py-2 rounded-full transition-colors text-sm font-medium"
                >
                  Contact
                </Link>
                <button className="hover:bg-gray-100 p-3 rounded-full transition-colors">
                  <FaGlobe className="text-lg" />
                </button>
              </div>

              {/* User Menu Button */}
              <div className="relative">
                <button
                  onClick={toggleMenu}
                  className="flex items-center gap-3 border rounded-full py-2 px-3 hover:shadow-md transition-all bg-white ml-1"
                >
                  <FaBars className="text-lg" />
                  <FaUserCircle className="text-[24px] text-gray-500" />
                </button>

                {/* Dropdown Menu */}
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-lg py-2 border border-gray-100">
                    <div className="py-2">
                      <Link to="/signup" className="px-4 py-3 hover:bg-gray-50 block font-semibold">
                        Sign up
                      </Link>
                      <Link to="/login" className="px-4 py-3 hover:bg-gray-50 block">
                        Log in
                      </Link>
                    </div>
                    <div className="border-t border-gray-100"></div>
                    <div className="py-2">
                      <Link to="/host" className="px-4 py-3 hover:bg-gray-50 block md:hidden">
                        Airbnb your home
                      </Link>
                      <Link to="/host" className="px-4 py-3 hover:bg-gray-50 block">
                        Host an experience
                      </Link>
                      <Link to="/wishlists" className="px-4 py-3 hover:bg-gray-50 block">
                        <div className="flex items-center gap-3">
                          <FaRegHeart className="text-lg" />
                          Wishlists
                        </div>
                      </Link>
                      <Link to="/contact" className="px-4 py-3 hover:bg-gray-50 block">
                        Contact
                      </Link>
                      <Link to="/help" className="px-4 py-3 hover:bg-gray-50 block">
                        Help Center
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="container mx-auto p-4">
            {/* Header */}
            <div className="flex items-center mb-8">
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="btn btn-ghost btn-circle hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <span className="text-lg font-semibold ml-4">Where to?</span>
            </div>

            {/* Search Form */}
            <div className="space-y-6">
              <div className="form-control">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                    <FaSearch className="text-gray-400 text-lg" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Search destinations" 
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30" 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="form-control">
                  <input 
                    type="text" 
                    placeholder="Check in" 
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30" 
                  />
                </div>
                <div className="form-control">
                  <input 
                    type="text" 
                    placeholder="Check out" 
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30" 
                  />
                </div>
              </div>

              <div className="form-control">
                <input 
                  type="text" 
                  placeholder="Add guests" 
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30" 
                />
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-[#FF385C] to-[#BD1E59] text-white rounded-xl font-semibold hover:from-[#BD1E59] hover:to-[#FF385C] transition-all duration-300">
                Search
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Overlay for closing menu when clicking outside */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-5"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;
