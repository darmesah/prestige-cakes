import classes from "./Search.module.css";

const Search = () => {
  return (
    <div className={classes.search}>
      <span className={classes.img1}>
        <img src="/images/search/search.png" alt="search" />
      </span>
      <input type="text" placeholder="What are you looking for?" />
      <span className={classes.img2}>
        <img src="/images/search/btn.png" alt="button" />{" "}
      </span>
    </div>
  );
};

export default Search;
