import { Marker } from 'react-mapbox-gl';
import './FlatMarker.scss';

const FlatMark = ({ lat, lng, price }) => {
  console.log(lat);
  return (
    <Marker coordinates={[lng, lat]} anchor="bottom">
      <strong className="marker">{price}</strong>
    </Marker>
  );
};

export default FlatMark;
