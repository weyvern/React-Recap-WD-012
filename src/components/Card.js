const Card = ({
  user: {
    name: { first, last },
    picture: { large }
  }
}) => {
  return (
    <div className='col-md-4'>
      <div className='card'>
        <img className='card-img-top' src={large} />
        <div className='card-body'>
          <h5 className='card-title'>{`${first} ${last}`}</h5>
          <p className='card-text'></p>
        </div>
      </div>
    </div>
  );
};

export default Card;
