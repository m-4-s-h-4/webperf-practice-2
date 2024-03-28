import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import SearchBar from "./components/cocktails/SearchBar";
import CocktailList from "./components/cocktails/CocktailList";

const Cocktails = () => {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const fetchCocktails = useCallback(async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}&key=${process.env.NEXT_PUBLIC_COCKTAILDB_API_KEY}`
      );
      if (response.data.drinks) {
        setCocktails(response.data.drinks);
      } else {
        setError("No cocktails found.");
      }
    } catch (error) {
      setError("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm !== "") {
      const timer = setTimeout(() => {
        fetchCocktails();
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [searchTerm, fetchCocktails]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-lg-5 mb-4">Special Cocktails</h2>
          <SearchBar setSearchTerm={setSearchTerm} />
          <CocktailList cocktails={cocktails} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default Cocktails;
