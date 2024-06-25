/*
Lucas Spartacus Vieira Carvalho 
Shaw and Partners
Implementation of the front-end using React
 */
import React, { useState, useEffect } from 'react';
import CSVUpload from './components/CSVUpload';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import axios from 'axios';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch initial data from the backend
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data');
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDataLoad = (loadedData) => {
    setData(loadedData);
  };

  const handleSearch = async (query) => {
    setSearchQuery(query.toLowerCase());
    if (query === '') {
      const response = await axios.get('/api/data');
      if (response.status === 200) {
        setData(response.data);
      }
    } else {
      try {
        const response = await axios.get(`/api/users?q=${query}`);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        console.error('Error searching data:', error);
      }
    }
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
