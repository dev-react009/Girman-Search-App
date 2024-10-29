import React, { createContext, useContext, useState } from "react";

// Define the context type
interface SearchContextType {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context
const SearchContext = createContext<SearchContextType | undefined>(undefined);

// Provider component
export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook to use the search context
export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
