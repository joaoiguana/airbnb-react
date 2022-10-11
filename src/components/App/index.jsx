import { useState, useEffect } from 'react';
import './App.scss';
import ReactMapboxGl from 'react-mapbox-gl';

import Flat from '../Flat';
import FlatMarker from '../FlatMarker';
import Search from '../Search'

const Map = ReactMapboxGl({accessToken: 'pk.eyJ1Ijoiam9hb2lndWFuYSIsImEiOiJjbDZwMnFyM3kwZ2k1M2pxb3R5eWlvZ3FwIn0.SgcIRipy3dK0yZBLeaSf8Q'})

const API_URL = 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json';

const App = () => {
  const [flats, setFlats] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setFlats(data));
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);
  };


  return (
    <div className='app'>
      <div className='main'>
        <Search onSearch={handleSearch} />
        <div className='flats'>
          {flats.map((flat) => {
            return <Flat key={flat.id} imageUrl={flat.imageUrl} price={flat.price} name={flat.name} />
          })}
        </div>
      </div>
      <div className='map'>
        <Map
          zoom={[14]}
          center={[2.34689, 48.884211]}
          containerStyle={{ height: '100vh', width: '100%' }}
          style="mapbox://styles/mapbox/streets-v8"
        >
          {flats.map((flat) => {
            return <FlatMarker key={flat.id} price={flat.price} lat={flat.lat} lng={flat.lng} />
          })}
        </Map>
      </div>
    </div>
  );
};

export default App;
