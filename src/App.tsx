import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import SearchResults from "./components/SearchResults";
import { SearchProvider } from "./context/SearchContext";
const App: React.FC = () => {
  return (
    <SearchProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </Router>
    </SearchProvider>
  );
};

export default App;
