import classes from "./BestSellersItem.module.css";

const BestSellersItem = ({ title, description, image, price, rating }) => {
  return (
    <div className={classes.container}>
      <div className={classes.cont1}>
        <img src={image} alt={title} />
        <div className={classes.title_rating}>
          <h4>{title}</h4>
          <h4>{rating}</h4>
        </div>

        <p>{description}</p>
      </div>
      <div className={classes.starts}>
        <span>Starts at</span> <h2>{price}</h2>
      </div>
    </div>
  );
};

export default BestSellersItem;
