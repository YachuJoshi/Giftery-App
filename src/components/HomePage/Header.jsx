import React from 'react';
import { Link } from '@reach/router';

import styles from '../../css/resources/HomePage/header.module.scss';

const Header = () => {
  return (
    <header className={styles.homePageHeader}>
      <nav>
        <div className="row">
          <ul className={styles.header__mainNav}>
            <li> <a href="#features"> Features </a> </li>
            <li> <Link to="/products"> Cart </Link> </li>
            <li> <a href="#plans"> Sign Up </a> </li>
            <li> <a href="#login"> Login </a> </li>
          </ul>
        </div>
      </nav>

      <div className={styles.header__textBox}>
        <h1 className={styles.headerHeading}> Find The Perfect Gift, Everytime! </h1>
        <Link to="/main" className={styles.headerbtn}> I'm Interested!  </Link>
        <Link to="/main" className={styles.headerbtn} > Show Me More! </Link>
      </div>
    </header >
  );
}

export { Header };