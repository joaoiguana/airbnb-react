import { Marker } from 'react-mapbox-gl';
import './FlatMarker.scss';

const FlatMark = ({ lat, lng, price, selected }) => {
  const classNames = selected ? 'marker selected' : 'marker';

  return (
    <Marker coordinates={[lng, lat]} anchor="bottom">
      <strong className={classNames}>{price}</strong>
    </Marker>
  );
};

export default FlatMark;
