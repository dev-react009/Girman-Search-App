// Navbar.tsx
import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "../context/SearchContext"; // Adjust the path as necessary
import Logo from "../assets/Logo.png"; // Adjust the path as necessary
import { FaSearch, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm } = useSearch();

  const isSearchResults = location.pathname.includes("/search");

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchTerm) {
      navigate(`/search`);
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  const handleNavigate=()=>{
    navigate('/')
  }

  return (
    <nav className="w-full max-w-full p-4 md:px-32 flex items-center justify-between bg-white shadow-md fixed top-0 z-10">
      <div className="flex items-center" onClick={handleNavigate}>
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
            value={searchTerm}
            onChange={handleSearchInputChange}
            placeholder="Search by name"
            className="w-full max-w-md p-2 pr-10 pl-10 text-black bg-[#FFFFFF] border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Search input"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-3"
              aria-label="Clear search"
            >
              <FaTimes className="text-gray-500" />
            </button>
          )}
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
      {!isSearchResults && (
        <div className="md:hidden flex items-center">
          <button className="focus:outline-none text-black">☰</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



