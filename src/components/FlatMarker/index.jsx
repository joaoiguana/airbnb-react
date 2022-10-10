import { Marker } from 'react-mapbox-gl';
import './FlatMarker.scss';

const FlatMarker = ({ lat, lng, price }) => {
  return (
    <div className='marker'>
      <Marker coordinates={[lng, lat]}>
        <strong className="marker">{price}</strong>
      </Marker>
    </div>
  );
};

export default FlatMarker;
