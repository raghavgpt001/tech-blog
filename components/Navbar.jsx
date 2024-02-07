import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-purple-700 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-white font-bold text-xl">Tech Blog</a>
          </div>

          {/* Toggle button for mobile */}
          <div className="block lg:hidden">
            <button className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          {/* Menu items */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <a href="#" className="text-white hover:text-gray-200">Home</a>
            <a href="#" className="text-white hover:text-gray-200">About</a>
            <a href="#" className="text-white hover:text-gray-200">Services</a>
            <a href="#" className="text-white hover:text-gray-200">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
