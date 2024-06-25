/*
Lucas Spartacus Vieira Carvalho 
Shaw and Partners
Implementation of the front-end using React
*/
import React from 'react';

//Function SearchBar use event  onSearch(event.target.value); to locate information from the csv file
const SearchBar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
     //Create the seacrh-bar
    <div className="search-bar">
      <input type="text" placeholder="Search..." onChange={handleInputChange}/>
    </div>
  );
};

export default SearchBar;
