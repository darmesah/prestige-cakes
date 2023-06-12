import BestSellersList from "./components/Home/BestSellers/BestSellersList/BestSellersList";
import DealsList from "./components/Home/Deals/DealsList/DealsList";
import Socials from "./components/Home/Socials/Socials";
import Button from "@/components/UIElements/Button/Button";

import classes from "./components/Home/Home.module.css";

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
            <img src="/images/shortcuts/deals.png" alt="deals" />
            <p>Deals</p>
          </li>
          <li>
            <img src="/images/shortcuts/wedding.png" alt="wedding" />
            <p>Wedding</p>
          </li>
          <li>
            <img src="/images/shortcuts/birthday.png" alt="birthday" />
            <p>Birthday</p>
          </li>
          <li>
            <img src="/images/shortcuts/cup_cakes.png" alt="cup_cakes" />
            <p>Cup cakes</p>
          </li>
          <li>
            <img src="/images/shortcuts/pastries.png" alt="pastries" />
            <p>Pastries</p>
          </li>
          <li>
            <img src="/images/shortcuts/cookies.png" alt="cookies" />
            <p>Cookies</p>
          </li>
          <li>
            <img src="/images/shortcuts/cake_slices.png" alt="cake_slices" />
            <p>Cake slices</p>
          </li>
          <li>
            <img src="/images/shortcuts/doughnuts.png" alt="doughnuts" />
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
        <div className={classes.why_flex}>
          <div>
            <img src="/images/why/1.png" alt="quality" />
            <h4>Quality is our biggest flex</h4>
            <p>
              From carefully selected ingredients to thoughtful packaging, we
              give you the absolute best.
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
      </div>
      <div className={classes.donut}>
        <div>
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
        </div>
        <div>
          <img src="/images/donut.png" alt="donut" />
        </div>
      </div>
      <DealsList />
      <div className={classes.explorers}>
        <div>
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
        </div>
        <div>
          <img src="/images/explore.png" alt="explore" />
        </div>
      </div>
      <Socials />
    </main>
  );
};

export default HomePage;
