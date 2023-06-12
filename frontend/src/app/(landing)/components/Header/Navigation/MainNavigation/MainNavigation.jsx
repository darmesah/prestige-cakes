import Link from "next/link";
import classes from "./MainNavigation.module.css";
import Button from "@/components/UIElements/Button/Button";
import Search from "../../Search/Search";
import NavLinks from "../Navlinks/Navlinks";

const MainNavigation = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.drawer}>
          <img src="/images/header/burger.png" alt="burger" />
        </div>
        <div className={classes.logo}>
          <Link href="/">
            <img src="/images/header/logo.png" alt="logo" />
          </Link>
        </div>
        <div className={classes.desktop_nav}>
          <NavLinks />
        </div>
        <div className={classes.desktop_search}>
          <Search />
        </div>
        <div className={classes.div3}>
          <Button primary small rounded>
            Sign up
          </Button>
          <Button secondary small rounded>
            Log In
          </Button>
          <img src="/images/header/cart.png" alt="cart" />
        </div>
      </div>
      <div className={classes.mobile_search}>
        <Search />
      </div>
    </>
  );
};

export default MainNavigation;
