/*
Lucas Spartacus Vieira Carvalho 
Shaw and Partners
Implementation of the front-end using React
*/
import React from 'react';

const Card = ({ data }) => {
  return (
    //Create the cards to display the information from the cvs file
    //Maping que key and value to display the information in diferente cards
    <div className="card">
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="card-row">
          <strong>{key}:</strong> {value}
        </div>
      ))}
    </div>
  );
};

export default Card;
