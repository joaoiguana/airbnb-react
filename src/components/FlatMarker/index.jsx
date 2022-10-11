import { Marker } from 'react-mapbox-gl';
import './FlatMarker.scss';
import "mapbox-gl/dist/mapbox-gl.css";

const FlatMarker = ({ lat, lng, price }) => {
  return (
    <Marker coordinates={[lng, lat]} anchor="bottom">
      <strong className="marker">{price}</strong>
    </Marker>
  );
};

export default FlatMarker;
