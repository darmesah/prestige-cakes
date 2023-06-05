import classes from "./DealsItem.module.css";

const DealsItem = ({ title, image, code, expire }) => {
  return (
    <div className={classes.container}>
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{code}</p>
      <p>
        Expires in <span>{expire}</span>
      </p>
    </div>
  );
};

export default DealsItem;
