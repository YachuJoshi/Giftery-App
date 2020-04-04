import React from 'react';

import styles from '../css/resources/CategoriesPage/header.module.css';

import { NavigationBar } from '../components/CateogiesPage/NavBar';

class CategoriesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('Hello World!');
    return (
      <>
        <header className={styles.categoriesPageHeader}>
          <div className="row">
            <NavigationBar />
          </div>
        </header>
      </>
    );
  }
};

export { CategoriesPage };