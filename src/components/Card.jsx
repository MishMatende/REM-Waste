function Card(props) {
  const { imageUrl, size, hire_period_days, price_before_vat, vat } = props;
  let price = price_before_vat + vat;
  return (
    <div>
      <img src={imageUrl} alt={props.name} />
      <p>{size}</p>
      <p>{hire_period_days}</p>
      <p>{price}</p>
    </div>
  );
}

export default Card;
