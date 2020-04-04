import React from 'react';

import { Header } from '../components/CateogiesPage/Header';

class CategoriesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header />
      </>
    );
  }
};

export { CategoriesPage };