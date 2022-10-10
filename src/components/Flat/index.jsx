import './Flat.scss'

const Flat = ({ imageUrl, price, name }) => {
  return (
    <div className="flat">
      <img src={imageUrl} className='flat-picture' alt="The flat" />
      <div className="flat-title">
        <strong>{price} €</strong> - {name}
      </div>
    </div>
  );
};

export default Flat;
