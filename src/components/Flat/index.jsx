import './Flat.scss'

const Flat = ({ imageUrl, price, name, onSelect, selected }) => {
  const classes = selected ? 'flat selected' : 'flat';

  return (
    <div className={classes} onClick={onSelect}>
      <img src={imageUrl} className='flat-picture' alt="The flat" />
      <div className="flat-title">
        <strong>{price} €</strong> - {name}
      </div>
    </div>
  );
};

export default Flat;
