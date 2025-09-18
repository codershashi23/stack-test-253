import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {}
        <h1 className="text-2xl font-bold text-indigo-600">MyCompany</h1>

        {}
        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li><a href="#about" className="hover:text-indigo-600">About</a></li>
            <li><a href="#services" className="hover:text-indigo-600">Services</a></li>
            <li><a href="#testimonials" className="hover:text-indigo-600">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
