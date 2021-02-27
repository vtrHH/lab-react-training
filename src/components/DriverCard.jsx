import Rating from './Rating';

function DriverCard({ img, name, rating, car }) {
  return (
    <div>
      <div>
        <img className="drivers-image" src={img} alt={name} />
      </div>
      <h4>
        <strong>{name}</strong>
      </h4>
      <Rating>{rating}</Rating>
      <p>
        {car.model} - {car.licensePlate}
      </p>
    </div>
  );
}

export default DriverCard;
