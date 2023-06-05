import { bestsellers } from "../../data";

import BestSellersItem from "../BestSellersItem/BestSellersItem";

import classes from "./BestSellersList.module.css";

const BestSellersList = () => {
  return (
    <main className={classes.container}>
      <h3>BestSellers</h3>
      <ul>
        {bestsellers.map((item, index) => (
          <BestSellersItem key={index} {...item} />
        ))}
      </ul>
    </main>
  );
};

export default BestSellersList;
