import { useState } from 'react';
import './Flat.scss'

const Flat = ({ imageUrl, price, name }) => {
  const [selected, setSelected] = useState(false);
  const classes = selected ? 'flat selected' : 'flat';

  const handleClick = () => {
    setSelected(!selected);
  }

  return (
    <div className={classes} onClick={handleClick}>
      <img src={imageUrl} className='flat-picture' alt="The flat" />
      <div className="flat-title">
        <strong>{price} €</strong> - {name}
      </div>
    </div>
  );
};

export default Flat;
