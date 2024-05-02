const Card = (props) => {
  return (
    <div>
      <img src="/assests/image.jpg"></img>
      <p>Name:{props.name}</p>
      <p>Price:{props.price}</p>
      <p>
        Description:It is a ball blue vintage pen.This pen says:"Please Buy Me"
      </p>
    </div>
  );
};
export default Card;
