import { useState, useEffect } from 'react';
import './App.scss';
import Flat from '../Flat'

const API_URL = 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json';

const App = () => {
  const [flats, setFlats] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setFlats(data));
  }, []);


  return (
    <div className='app'>
      <div className='main'>
        <input className='search' />
        <div className='flats'>
          {flats.map((flat) => {
            return <Flat imageUrl={flat.imageUrl} price={flat.price} name={flat.name} />;
          })}
        </div>
      </div>
      <div className='map'></div>
    </div>
  );
}

export default App;
