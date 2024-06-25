
/*
Lucas Spartacus Vieira Carvalho 
Shaw and Partners
Implementation of the front-end using React
 */
import React, { useState } from 'react';
import CSVUpload from './components/CSVUpload';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleDataLoad = (loadedData) => {
    setData(loadedData);
  };

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredData = data.filter(row => 
    Object.values(row).some(value =>
      value.toLowerCase().includes(searchQuery)
    )
  );

  return (
    <div className="App">

      <nav className='nav'>
   
        <SearchBar onSearch={handleSearch} /> 
        <CSVUpload onDataLoad={handleDataLoad} />

      </nav>
      <div className='Line'></div>
      <div className="cards-container">
        {filteredData.map((row, index) => (
          <Card key={index} data={row} />
        ))}
      </div>
    </div>
  );
};

export default App;
