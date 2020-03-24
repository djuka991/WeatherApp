import React from 'react';
import './Card.css';

const card = ({location, img ,temperture}) => {
 
  return(
    <div className="container">
        <h3>{location}</h3>
        <img className="container__img" src={img} alt=""/>
        <h3>{temperture}</h3>
      </div>
  );
};

export default card;