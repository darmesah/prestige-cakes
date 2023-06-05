import { deals } from "../../data";

import DealsItem from "../DealsItem/DealsItem";

import classes from "./DealsList.module.css";

const DealsList = () => {
  return (
    <main className={classes.container}>
      <h3>Deals</h3>
      <ul>
        {deals.map((item, index) => (
          <DealsItem key={index} {...item} />
        ))}
      </ul>
    </main>
  );
};

export default DealsList;
