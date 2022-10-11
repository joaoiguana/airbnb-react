import { Marker } from 'react-mapbox-gl';
import './FlatMarker.scss';
import "mapbox-gl/dist/mapbox-gl.css";

const FlatMarker = ({ lat, lng, price }) => {
  return (
    <Marker coordinates={[lng, lat]} anchor="top">
      <h1><strong className="marker">{price}</strong></h1>
    </Marker>
  );
};

export default FlatMarker;
