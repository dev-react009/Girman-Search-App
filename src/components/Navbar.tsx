import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png"; // Adjust the path as necessary
import { FaSearch } from "react-icons/fa";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  // Check if the current route is the search results route
  const isSearchResults = location.pathname.includes("/search");

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav className="w-full max-w-full p-4 md:px-32   flex items-center justify-between xs:gap-10 bg-white shadow-md fixed top-0 z-10">
     
      <div className="flex items-center ">
        <img src={Logo} alt="Logo" className="h-10 w-auto" />
      </div>

      
      {isSearchResults ? (
        <form
          onSubmit={handleSearchSubmit}
          className="relative flex items-center md:ml-4"
        >
          <span className="absolute left-3">
            <FaSearch className="text-gray-500" />
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search..."
            className="w-full max-w-md p-2 pr-20 pl-9 text-black bg-[#FFFFFF] border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        
        </form>
      ) : (
        <div className="hidden md:flex space-x-5 px-52 text-customBlack uppercase font-inter font-normal text-[14px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:underline ${
                isActive ? "font-bold text-blue-500 underline" : "text-gray-600"
              }`
            }
          >
            Search
          </NavLink>

          <NavLink
            to="https://girmantech.com"
            target="_blank"
            rel="noopener noreferrer"
            className={({ isActive }) =>
              `hover:underline ${
                isActive ? "font-bold text-blue-500 underline" : "text-gray-600"
              }`
            }
          >
            Website
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/company/girman-technologies"
            target="_blank"
            rel="noopener noreferrer"
            className={({ isActive }) =>
              `hover:underline ${
                isActive ? "font-bold text-blue-500 underline" : "text-gray-600"
              }`
            }
          >
            LinkedIn
          </NavLink>
          <NavLink
            to="mailto:contact@girmantech.com"
            className={({ isActive }) =>
              `hover:underline ${
                isActive ? "font-bold text-blue-500 underline" : "text-gray-600"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      )}

      {/* Mobile Menu Button */}
      {!isSearchResults &&(<div className="md:hidden flex items-center">
        <button className="focus:outline-none text-black">☰</button>
      </div>)}
    </nav>
  );
};

export default Navbar;
