import { useState, useEffect } from 'react';
import './App.scss';
import ReactMapboxGl from 'react-mapbox-gl';
import Flat from '../Flat'

const Map = ReactMapboxGl({accessToken: 'pk.eyJ1Ijoiam9hb2lndWFuYSIsImEiOiJjbDZwMnFyM3kwZ2k1M2pxb3R5eWlvZ3FwIn0.SgcIRipy3dK0yZBLeaSf8Q'})

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
            return <Flat key={flat.id} imageUrl={flat.imageUrl} price={flat.price} name={flat.name} />;
          })}
        </div>
      </div>
      <div className='map'>
        <Map
          zoom={[14]}
          center={[2.3522, 48.8566]}
          containerStyle={{ height: '100vh', width: '100%' }}
          style="mapbox://styles/mapbox/streets-v8" />
      </div>
    </div>
  );
}

export default App;
