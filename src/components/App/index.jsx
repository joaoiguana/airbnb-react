import { useState, useEffect } from 'react';
import './App.scss';
import ReactMapboxGl from 'react-mapbox-gl';

import Flat from '../Flat';
import FlatMark from '../FlatMarker';
import Search from '../Search'

const Map = ReactMapboxGl({accessToken: 'pk.eyJ1Ijoiam9hb2lndWFuYSIsImEiOiJjbDZwMnFyM3kwZ2k1M2pxb3R5eWlvZ3FwIn0.SgcIRipy3dK0yZBLeaSf8Q'})

const API_URL = 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json';
const DEFAULT_CENTER = [2.3522, 48.8566];

const App = () => {
  const [flats, setFlats] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedId, setSelectedId] = useState();
  const [center, setCenter] = useState(DEFAULT_CENTER);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setFlats(data));
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const handleFlatSelect = (id) => {
    if (selectedId === id) {
      setCenter(DEFAULT_CENTER);
      setSelectedId(null);
    } else {
      const selectedFlat = flats.find((flat) => flat.id === id);
      const { lat, lng } = selectedFlat;

      setCenter([lng, lat]);
      setSelectedId(id);
    }
  }

  const filteredFlats = flats.filter(flat => flat.name.match(new RegExp(searchText, 'i')));

  return (
    <div className='app'>
      <div className='main'>
        <Search onSearch={handleSearch} />
        <div className='flats'>
          {filteredFlats.map((flat) => {
            return <Flat
              key={flat.id}
              imageUrl={flat.imageUrl}
              price={flat.price}
              name={flat.name}
              onSelect={() => handleFlatSelect(flat.id)}
              selected={flat.id === selectedId} />
          })}
        </div>
      </div>
      <div className='map'>
        <Map
          zoom={[14]}
          center={center}
          containerStyle={{ height: '100vh', width: '100%' }}
          style="mapbox://styles/mapbox/streets-v8"

        >
          {filteredFlats.map((flat) => {
            return <FlatMark
            key={flat.id}
            price={flat.price}
            lat={flat.lat}
            lng={flat.lng}
            selected={flat.id === selectedId} />
          })}
        </Map>
      </div>
    </div>
  );
};

export default App;
