/*
Lucas Spartacus Vieira Carvalho 
Shaw and Partners
Implementation of the front-end using React
*/

import React from 'react';
import axios from 'axios';


// Upload file any cvv from user machine
const CSVUpload = ({ onDataLoad }) => {
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/api/files', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        alert(response.data.message);
        // Fetch the updated data from the backend
      
        const fetchDataResponse = await axios.get('/api/data');
        if (fetchDataResponse.status === 200) {
          onDataLoad(fetchDataResponse.data);
        }
      }
    } catch (error) {
      
      alert(`Error uploading file: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    //Create the button that call the handleFileUpload function
    <div className="csv-upload">
      <label for="file-upload" class="custom-file-upload">Upload</label>
      <input id="file-upload" type="file" accept=".csv" onChange={handleFileUpload} />
    </div>
  );
};

export default CSVUpload;