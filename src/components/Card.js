const Card = ({ place: { name, img, desc } }) => {
  return (
    <div className='col'>
      <div className='card'>
        <img className='card-img-top' src={img} alt={name} />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
