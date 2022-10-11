import { Marker } from 'react-mapbox-gl';
import './FlatMarker.scss';

const FlatMark = ({ lat, lng, price, selected }) => {
  const classNames = selected ? 'marker selected' : 'marker';

  console.log(selected);

  return (
    <Marker coordinates={[lng, lat]} anchor="bottom">
      <p><strong className={classNames}>{price}</strong></p>
    </Marker>
  );
};

export default FlatMark;
