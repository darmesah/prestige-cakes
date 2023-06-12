import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.flex_cont}>
        <div>
          <img
            className={classes.logo}
            src="/images/footer/logo.png"
            alt="logo"
          />
          <div className={classes.socials}>
            <img src="/images/footer/1.png" alt="instagram" />
            <img src="/images/footer/2.png" alt="instagram" />
            <img src="/images/footer/3.png" alt="instagram" />
            <img src="/images/footer/4.png" alt="instagram" />
          </div>
        </div>
        <div>
          <h3>Prestige Cakes</h3>
          <ul>
            <li>FAQs</li>
            <li>Contact us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Promotion terms</li>
          </ul>
        </div>
        <div>
          <h3>Open Hours</h3>
          <p>Mon to Fri 9am - 6pm</p>
          <p>Sat 11am - 4pm</p>
          <p>Sun Closed</p>
        </div>
      </div>
      <div className={classes.d1}>
        <p className={classes.p1}>
          Text ipsum si dolor ametText ipsum si dolor ametText ipsum si dolor
          ametText ipsum si dolor ametText ipsum si dolor ametText ipsum si
          dolor ametText ipsum si dolor ametText ipsum si dolor ametText ipsum
          si dolor ametText ipsum si dolor ametText ipsum si dolor amet
        </p>
        <ul className={classes.list}>
          <li>Legal</li>
          <li>Terms</li>
          <li>Privacy policy</li>
          <li>Cookies</li>
          <li>Sitemap</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
