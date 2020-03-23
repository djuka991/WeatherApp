import React, {useEffect, useState} from 'react';
import Card  from './Card'
import './App.css';


function App() {

  useEffect(()=>{
    console.log("Ovde dodju DATA koja hendlujemo");
    // getData();
    
  },[]);

  const getData = async () => {
    const response = fetch('http.');
    const data = await response.json();
    console.log(data);
    
  }

  return (
    <div className="App">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default App;
