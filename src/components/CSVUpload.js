/*
Lucas Spartacus Vieira Carvalho 
Shaw and Partners
Implementation of the front-end using React
*/

import React from 'react';
import Papa from 'papaparse';

const CSVUpload = ({ onDataLoad }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (result) => {
        onDataLoad(result.data);
      },
      error: (error) => {
        alert('Error parsing file:', error.message);
      }
    });
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