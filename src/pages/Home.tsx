import React from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../context/SearchContext";
import Logo1 from "../assets/Logo1.png";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  const { searchTerm, setSearchTerm } = useSearch();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#B1CBFF]">
      <Navbar />
      <div className="flex flex-col items-center mt-32 w-full max-w-full text-center">
        <div className="flex justify-center mb-6">
          <img src={Logo1} alt="Logo" className="h-15 w-auto" />
        </div>
        <form onSubmit={handleSearch} className="w-full px-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md p-2 mt-5 text-black bg-[#FFFFFF] border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
      </div>
    </div>
  );
};

export default Home;
