import { Input } from "@mui/base";
import { TextField } from "@mui/material";
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="searchBar-container">
      <div className="search-bar">
        {/* <Input
          type="text"
          placeholder="Enter a city"
          className="searchInput"
          value={searchQuery}
          onChange={handleInputChange}
        /> */}
        <div className="textfieldclass">
          <p className="addcity"></p>
        </div>
        <button className="searchButton">Add City</button>
      </div>
    </div>
  );
};

export default SearchBar;
