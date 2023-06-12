import classes from "./Socials.module.css";

const Socials = () => {
  return (
    <div className={classes.container}>
      <h3>Follow us on our socials</h3>
      <p>Follow us to stay up to date on all things Prestige Cakes.</p>
      <div className={classes.socials_flex}>
        <div>
          <img src="/images/socials/placeholder.png" alt="placeholder" />
          <img src="/images/socials/1.png" alt="instagram" />
        </div>
        <div>
          <img src="/images/socials/placeholder.png" alt="placeholder" />
          <img src="/images/socials/2.png" alt="instagram" />
        </div>
        <div>
          <img src="/images/socials/placeholder.png" alt="placeholder" />
          <img src="/images/socials/3.png" alt="instagram" />
        </div>
        <div>
          <img src="/images/socials/placeholder.png" alt="placeholder" />
          <img src="/images/socials/4.png" alt="instagram" />
        </div>
      </div>
    </div>
  );
};

export default Socials;
