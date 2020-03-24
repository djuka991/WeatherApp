import React from 'react';
import Card  from './Card'
import './App.css';


function App() {

  const places =
            [
              {
                'location' : 'Belgade',
                'img'      : 'https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-sunny-512.png' ,
                'temperture' : 24 
              } ,  
              {
                'location' : 'Novi Sad',
                'img'      : 'https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-sunny-512.png' ,
                'temperture' : 24 
              } ,   
              {
                'location' : 'Niš',
                'img'      : 'https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-sunny-512.png' ,
                'temperture' : 21 
              } ,  
              {
                'location' : 'Subotica',
                'img'      : 'https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-sunny-512.png' ,
                'temperture' : 20
              } ,    
              {
                'location' : 'Čačak',
                'img'      : 'https://toppng.com/uploads/preview/sun-with-clouds-transparent-png-picture-sun-with-clouds-11563244598qejhismzny.png',
                'temperture' : 19 
              }                                 
            ]
             
  return (
    <div className="App">
     {places.map(place => (
       <Card location={place.location}
             img={place.img}
             temperture={place.temperture}
       />
     ))}
    </div>
  );
  
     }


export default App;
