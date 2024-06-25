/*
Lucas Spartacus Vieira Carvalho 
Shaw and Partners
Implementation of the front-end using React
*/
import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." onChange={handleInputChange} />
    </div>
  );
};

export default SearchBar;
