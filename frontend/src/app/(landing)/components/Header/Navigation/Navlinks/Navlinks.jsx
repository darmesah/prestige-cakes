"use client";

import classes from "./Navlinks.module.css";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <ul className={classes.container}>
      <li className={classes.dropdown}>
        <Link href="/shop">Shop</Link>
        <div className={classes.content}>
          <Link href="/cakes">Cakes</Link>
          <Link href="/cupcakes">Cupcakes</Link>
          <Link href="/cookies">Cookies</Link>
          <Link href="/desserts">Desserts</Link>
          <Link href="/pastries">Pastries and finger foods</Link>
          <Link href="/keto">Keto</Link>
          <Link href="/custom">Custom sets</Link>
        </div>
      </li>
      <li className={classes.dropdown}>
        <Link href="/shop-occassion">Shop by occasion</Link>
        <div className={classes.content}>
          <Link href="/weddings">Weddings</Link>
          <Link href="/kids">Kids</Link>
          <Link href="/birthdays">Birthdays</Link>
          <Link href="/christmas">Christmas</Link>
          <Link href="/valentines">Valentines</Link>
        </div>
      </li>
      <li>
        <Link href="/deals">Deals</Link>
      </li>
      <li>
        <Link href="/corporate">Corporate</Link>
      </li>
      <li className={classes.dropdown}>
        <Link href="/more">More</Link>
        <div className={classes.content}>
          <Link href="/explorers">Prestige Explorers</Link>
          <Link href="/training">Training</Link>
          <Link href="/about_us">About us</Link>
          <Link href="/FAQs">FAQs</Link>
          <Link href="/contact">Contact us</Link>
          <Link href="/help">Help</Link>
        </div>
      </li>
    </ul>
  );
};

export default NavLinks;
