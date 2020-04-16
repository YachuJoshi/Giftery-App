import React from 'react';

import styles from '../../css/resources/ProductsPage/header.module.css';

import { NavigationBar } from '../MainPage/NavBar';

/* eslint-disable jsx-a11y/anchor-is-valid */

const Header = () => (
  <>
    <NavigationBar />
    <div className={styles.productsPage__header}>
      <div className={styles.header__textBox}>
        <h1 className={styles.primaryHeading}>
          <span className={styles.primaryHeading__main}>Choose</span>
          <span className={styles.primaryHeading__sub}>From The Very Best</span>
        </h1>
        <a href="#" className={styles.buttonPrimary}> Start Shopping! </a>
      </div>
    </div>
  </>
);

export { Header };