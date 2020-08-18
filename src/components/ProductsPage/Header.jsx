import React from "react";
import { Link } from "@reach/router";

import styles from "../../css/resources/ProductsPage/header.module.scss";

import { NavigationBar } from "../MainPage/NavBar";

/* eslint-disable jsx-a11y/anchor-is-valid */

const Header = (props) => {
  const { inProductPage, cartModalStatus, cartOnClick } = props;
  const scrollDown = () => {
    const elem = document.querySelector(`#product-section`);
    elem.scrollIntoView();
  };

  return (
    <>
      <NavigationBar
        inProductPage={inProductPage}
        cartModalStatus={cartModalStatus}
        cartOnClick={cartOnClick}
      />
      <div className={styles.productsPage__header}>
        <div className={styles.header__textBox}>
          <h1 className={styles.primaryHeading}>
            <span className={styles.primaryHeading__main}>Choose</span>
            <span className={styles.primaryHeading__sub}>
              From The Very Best
            </span>
          </h1>
          <Link
            to="#"
            onClick={() => scrollDown()}
            className={styles.buttonPrimary}
          >
            {" "}
            Start Shopping!{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export { Header };
