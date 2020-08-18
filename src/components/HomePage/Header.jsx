import React from "react";
import { Link } from "@reach/router";

import styles from "../../css/resources/HomePage/header.module.scss";

const Header = () => {
  const scrollDown = (element) => {
    const elem = document.querySelector(element);
    elem.scrollIntoView();
  };

  return (
    <header className={styles.homePageHeader}>
      <nav>
        <div className="row">
          <ul className={styles.header__mainNav}>
            <li>
              {" "}
              <Link to="#" onClick={() => scrollDown(`#section-features`)}>
                {" "}
                Features{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/products"> Cart </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="#" onClick={() => scrollDown(`#section-plans`)}>
                {" "}
                Sign Up{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="#" onClick={() => scrollDown(`#section-feedback`)}>
                {" "}
                Login{" "}
              </Link>{" "}
            </li>
          </ul>
        </div>
      </nav>

      <div className={styles.header__textBox}>
        <h1 className={styles.headerHeading}>
          {" "}
          Find The Perfect Gift, Everytime!{" "}
        </h1>
        <Link to="/main" className={styles.headerbtn}>
          {" "}
          I'm Interested!{" "}
        </Link>
        <Link to="/main" className={styles.headerbtn}>
          {" "}
          Show Me More!{" "}
        </Link>
      </div>
    </header>
  );
};

export { Header };
