import React from "react";
import { Link } from "@reach/router";

import styles from "../../css/resources/MainPage/navbar.module.scss";

import { GoSearch } from "react-icons/go";
import { FiShoppingCart, FiHeart, FiGift } from "react-icons/fi";

const NavigationBar = (props) => {
  const { inProductPage, cartModalStatus, cartOnClick } = props;
  return (
    <header className={styles.header}>
      <div className="row">
        <nav>
          <ul className={styles.header__mainNav}>
            <li>
              {" "}
              <Link to="/"> Home </Link>{" "}
            </li>
            <li>
              {" "}
              <a href="#location"> Location </a>{" "}
            </li>
            <li>
              {" "}
              <Link to="/products"> Cart </Link>{" "}
            </li>
            <li>
              {" "}
              <a href="#plans"> Latest </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#login"> Categories </a>{" "}
            </li>
            <ul className={styles.header__rightNav}>
              <li>
                {" "}
                <GoSearch className={styles.headerIcon} />{" "}
              </li>
              <li>
                {" "}
                <FiGift className={styles.headerIcon} />{" "}
              </li>
              {inProductPage ? (
                <li>
                  <FiShoppingCart
                    onClick={() => cartOnClick(!cartModalStatus)}
                    className={styles.headerIcon}
                  />
                </li>
              ) : (
                <li>
                  <FiShoppingCart className={styles.headerIcon} />
                </li>
              )}
              <li>
                {" "}
                <FiHeart className={styles.headerIcon} />{" "}
              </li>
            </ul>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { NavigationBar };
