import React from "react";

const Footer = () => {
  return (
    <footer className="bg-indigo-700 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        
        <p className="text-sm">&copy; {new Date().getFullYear()} MyCompany. All rights reserved.</p>
        
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-300">Facebook</a>
          <a href="#" className="hover:text-gray-300">Twitter</a>
          <a href="#" className="hover:text-gray-300">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
