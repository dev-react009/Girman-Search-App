import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Logo1 from "../assets/Logo1.png";

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#B1CBFF]">
      {/* Navbar */}
      <nav className="w-full max-w-full p-4 flex items-center justify-between bg-white shadow-md fixed top-0 z-10">
        {/* Left Side: Logo Icon */}
        <div className="flex items-center pl-4">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Right Side: Nav Links */}
        <div className="hidden md:flex space-x-5 text-customBlack uppercase font-inter font-normal text-[14px] pr-4">
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

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="focus:outline-none">☰</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center mt-32 w-full max-w-xl text-center">
        <div className="flex justify-center mb-6">
          <img src={Logo1} alt="Logo" className="h-15 w-auto"/>
        </div>
        <form onSubmit={handleSearch} className="w-full px-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md p-2 mt-5 bg-[#FFFFFF] border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
      </div>
    </div>
  );
};

export default Home;
