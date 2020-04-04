import React from 'react';

import styles from '../../css/resources/CategoriesPage/header.module.css';

import { NavigationBar } from './NavBar';
import { Main } from './MainHeader';

const Header = () => (
  <>
    <header className={styles.categoriesPageHeader}>
      <div className="row">
        <NavigationBar />
      </div>
    </header>
    <Main />
  </>
);

export { Header };