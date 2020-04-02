import React from 'react';

import { Link } from '@reach/router';

import styles from '../css/resources/header.module.css';

const HeaderComponent = () => {
  return (
    <header>
      <nav>
        <div className="row">
          <ul className={styles.header__mainNav}>
            <li> <a href="#features"> Features </a> </li>
            <li> <a href="#cart"> Cart </a> </li>
            <li> <a href="#plans"> Sign Up </a> </li>
            <li> <a href="#login"> Login </a> </li>
          </ul>
        </div>
      </nav>

      <div className={styles.header__textBox}>
        <h1> Find The Perfect Gift, Everytime! </h1>
        <Link to="/categories" className={styles.headerbtn}> I'm Interested!  </Link>
        <Link to="/categories" className={styles.headerbtn} > Show Me More! </Link>
      </div>
    </header >
  );
}

export { HeaderComponent };