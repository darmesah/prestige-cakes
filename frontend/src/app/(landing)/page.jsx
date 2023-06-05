import Image from "next/image";

import BestSellersList from "./components/Home/BestSellers/BestSellersList/BestSellersList";
import DealsList from "./components/Home/Deals/DealsList/DealsList";

import Button from "@/components/UIElements/Button/Button";

import classes from "./components/Home/Home.module.css";

import deals from "./components/Home/images/deals.svg";
import wedding from "./components/Home/images/wedding.svg";
import birthday from "./components/Home/images/birthday.svg";
import cup_cakes from "./components/Home/images/cup_cakes.svg";
import pastries from "./components/Home/images/pastries.svg";
import cookies from "./components/Home/images/cookies.svg";
import cake_slices from "./components/Home/images/cake_slices.svg";
import doughnuts from "./components/Home/images/doughnuts.svg";

const HomePage = () => {
  return (
    <main className={classes.container}>
      <div className={classes.hero}>
        <h1>Our chocolate cake melts in the mouth.</h1>
        <p>
          Get a mouth-watering 30% off your first order with code CCM4U0 for the
          perfect weekend dessert.
        </p>
        <Button className={classes.button} third semi_rounded large>
          Shop now
        </Button>
      </div>
      <div className={classes.shortcuts}>
        <ul>
          <li>
            <Image src={deals} alt="deals" />
            <p>Deals</p>
          </li>
          <li>
            <Image src={wedding} alt="wedding" />
            <p>Wedding</p>
          </li>
          <li>
            <Image src={birthday} alt="birthday" />
            <p>Birthday</p>
          </li>
          <li>
            <Image src={cup_cakes} alt="cup_cakes" />
            <p>Cup cakes</p>
          </li>
          <li>
            <Image src={pastries} alt="pastries" />
            <p>Pastries</p>
          </li>
          <li>
            <Image src={cookies} alt="cookies" />
            <p>Cookies</p>
          </li>
          <li>
            <Image src={cake_slices} alt="cake_slices" />
            <p>Cake slices</p>
          </li>
          <li>
            <Image src={doughnuts} alt="doughnuts" />
            <p>Doughnuts</p>
          </li>
        </ul>
      </div>
      <BestSellersList />
      <div className={classes.corporate}>
        <h2>
          Corporate packages for employees,
          <br /> clients, and company events.
        </h2>
        <p>
          Celebrate your clients, vendors, and staff with bespoke cakes from us
        </p>
        <Button primary large semi_rounded>
          Learn More
        </Button>
        <h3>Some of our clients</h3>
        <div className={classes.img_flex}>
          <div>
            <img src="/images/clients/1.png" alt="crown" />
          </div>
          <div>
            <img src="/images/clients/2.png" alt="crown" />
          </div>
          <div>
            <img src="/images/clients/3.png" alt="crown" />
          </div>
          <div>
            <img src="/images/clients/4.png" alt="crown" />
          </div>
          <div>
            <img src="/images/clients/5.png" alt="crown" />
          </div>
          <div>
            <img src="/images/clients/6.png" alt="crown" />
          </div>
        </div>
      </div>
      <div className={classes.why}>
        <h3>Why choose us</h3>
        <div>
          <img src="/images/why/1.png" alt="quality" />
          <h4>Quality is our biggest flex</h4>
          <p>
            From carefully selected ingredients to thoughtful packaging, we give
            you the absolute best.
          </p>
        </div>
        <div>
          <img src="/images/why/2.png" alt="quality" />
          <h4>Best-in-class service</h4>
          <p>
            We care about ensuring your entire experience with us is as
            delicious as our treats.
          </p>
        </div>
        <div>
          <img src="/images/why/3.png" alt="quality" />
          <h4>We deliver to your door</h4>
          <p>
            We’ve got you covered, anywhere you are ordering from all over the
            nation.
          </p>
        </div>
      </div>
      <div className={classes.donut}>
        <h3>
          Indulge your cravings today with our doughnuts delivered straight to
          your door.
        </h3>
        <p>Reward yourself with delicious awesomeness from us.</p>
        <div>
          <Button primary large semi_rounded>
            Order now
          </Button>
          <Button secondary large semi_rounded>
            See more
          </Button>
        </div>
        <img src="/images/donut.png" alt="donut" />
      </div>
      <DealsList />
      <div className={classes.explorers}>
        <h3>
          Join our community of explorers to learn and share with like-minds
        </h3>
        <p>
          Prestige Explorers Community is for cake makers and enthusiasts to
          have fun and develop themselves.
        </p>
        <div>
          <Button third large semi_rounded>
            I want in
          </Button>
          <Button secondary large semi_rounded>
            Learn more
          </Button>
        </div>
        <img src="/images/explore.png" alt="explore" />
      </div>
    </main>
  );
};

export default HomePage;
