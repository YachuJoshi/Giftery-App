import React from 'react';
import { Link } from '@reach/router';

import styles from '../../css/resources/CategoriesPage/header.module.css';

import { GoSearch } from 'react-icons/go';
import { FiShoppingCart, FiHeart, FiGift } from 'react-icons/fi';

const NavigationBar = () => (
  <nav>
    <ul className={styles.header__mainNav}>
      <li> <Link to="/"> Home </Link> </li>
      <li> <a href="#cart"> Location </a> </li>
      <li> <a href="#cart"> Cart </a> </li>
      <li> <a href="#plans"> Latest </a> </li>
      <li> <a href="#login"> Categories </a> </li>
      <ul className={styles.header__rightNav}>
        <li> <GoSearch className={styles.headerIcon} /> </li>
        <li> <FiGift className={styles.headerIcon} /> </li>
        <li> <FiShoppingCart className={styles.headerIcon} /> </li>
        <li> <FiHeart className={styles.headerIcon} /> </li>
      </ul>
    </ul>
  </nav>
);

export { NavigationBar };